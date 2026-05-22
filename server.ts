import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini API client
let aiClient: GoogleGenAI | null = null;
function getAI() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined in environment variables. Running in smart-fallback mode.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// System Instruction for the FarmFin Expert AI
const SYSTEM_INSTRUCTION = `You are FarmFin, a warm, wise, compassionate, and trustworthy bilingual AI advisor for Indian smallholder farmers and their families.
You translate complex agricultural science and microfinance concepts into extremely simple, direct, jargon-free advice. 
A typical farmer household averages only ₹80,000 income a year. Keep your guidance deeply grounded in these constraints:
1. CROP SELECTION: SuggestDistrict/season-appropriate crops. For example:
   - For loamy/black soils in Jhansi/Bundelkhand (Kharif): recommend Moong (greengram), Til (sesame), or Sorghum.
   - For Dharwad (Kharif): Cotton, Maize, groundnut.
   - Mention rainfall conditions, crop safety, and direct returns simply.
2. BEHAVIORAL FINANCE & LOANS:
   - Always encourage Kisan Credit Card (KCC) loans (subsidized from Gov down to 4% effective APR with prompt repayment) over local informal moneylenders who charge 36% to 60%+ per year (3% to 5% a month) which drains their life savings.
   - Teach them to calculate annual percentages simply.
   - Emphasize "income staggering": turning lumpy harvest payout into a monthly security wallet.
3. SCAM PROTECTIONS (Ponzi Red Flags):
   - Warn against local fraudsters proposing "Double your money" or "Get 5,000/month for life from agricultural tree funds" schemes. Advise them to ask: "Is this bank or SEBI registered?"

Tone guidelines:
- Speak like a supportive, smart elder brother or a local wise village companion.
- Support both English and Devanagari Hindi or Hinglish (Hindi written in English text) depending on how the farmer asks.
- Never make up fake math calculations (calculations are always absolute/truthful).
- Keep responses concise: 3-4 highly readable lines or bullet points. Avoid complex jargon or flowery English.`;

// Farmers' advisory responses fallback database when Gemini API is offline/unavailable
const fallbacks: Record<string, string[]> = {
  en: [
    "FarmFin: For Jhansi district in Kharif, Sesame (Til) and Moong (greengram) are highly stable due to moderate water needs. KCC loans are available at 4% subsidized interest rate. Do not pay 36% to local moneylenders!",
    "FarmFin: If you have an income of ₹80,000 from your harvest, set aside ₹5,000 every month in a post-office savings scheme first. This forms an emergency buffer so you don't fall into the moneylender's trap.",
    "FarmFin: Warning! If anyone in your village asks you to invest in 'Agri-Rich Tree Funds' promising 10% monthly return, it is a fraud. Do not trust them if they are not SEBI registered. Always ask your bank first.",
    "FarmFin: For 2 acres of clay soil in Dharwad, Maize or Sorghum during Kharif is a safe choice. Ensure your crop is registered under PM Fasal Bima Yojana (PMFBY) to secure insurance."
  ],
  hi: [
    "फार्मफिन सलाह: झाँसी में खरीफ सीजन के लिए मूंग और तिल सबसे सुरक्षित फसलें हैं। सरकारी KCC लोन मात्र 4% ब्याज पर मिलता है। स्थानीय साहूकार के चक्रव्यूह (36% ब्याज) में कभी न फंसें!",
    "फार्मफिन सलाह: यदि आपको फसल बेचने पर ₹80,000 प्राप्त हुए हैं, तो इसे तुरंत खर्च करने के बजाय डाकघर (Post Office) की बचत योजना में रखें। हर महीने ₹5,000 का खर्च निकालें जिससे सालभर सुरक्षा बनी रहे।",
    "फार्मफिन सलाह: नकली 'कृषि-धन वृक्ष' योजनाओं से सावधान रहें जो धन दोगुना करने का वादा करती हैं! यह घोटाला है। केवल बैंक या सरकारी योजनाओं पर ही विश्वास करें।",
    "फार्मफिन सलाह: धारवाड़ में कपास (Cotton) या मक्का (Maize) लगाना सुरक्षित है। फसल का बीमा PM फसल बीमा योजना के तहत जरूर करवाएं ताकि कम बारिश में भी सुरक्षा बनी रहे।"
  ]
};

// API Endpoint for FarmFin Advisor AI Chat
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [], language = "en" } = req.body;
    if (!message || String(message).trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getAI();
    if (!ai) {
      // Smart Fallback Mode when GEMINI_API_KEY is not defined
      const list = fallbacks[language] || fallbacks.en;
      // Get a random response based on query keywords or simple index
      let reply = list[0];
      const lower = String(message).toLowerCase();
      if (lower.includes("moneylender") || lower.includes("loan") || lower.includes("b व्याज") || lower.includes("कर्ज") || lower.includes("kcc")) {
        reply = list[0];
      } else if (lower.includes("budget") || lower.includes("money") || lower.includes("बचत") || lower.includes("पैसे")) {
        reply = list[1];
      } else if (lower.includes("fraud") || lower.includes("ponzi") || lower.includes("scam") || lower.includes("धोखा") || lower.includes("नकली")) {
        reply = list[2];
      } else {
        // Pick one at random or match crop
        reply = list[3];
      }
      return res.json({ reply, mode: "smart-fallback" });
    }

    // Prepare message structures for modern SDK
    // Structure conversation history
    const formattedContents: any[] = [];
    
    // Add history in chronological order
    if (history && history.length > 0) {
      history.forEach((h: any) => {
        formattedContents.push({
          role: h.sender === "user" ? "user" : "model",
          parts: [{ text: h.text }]
        });
      });
    }
    
    // Append current user message
    formattedContents.push({
      role: "user",
      parts: [{ text: `${message} (Preferred language user environment toggle: ${language})` }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I apologize. I could not compute that advice. Please try again.";
    return res.json({ reply, mode: "gemini-live" });

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ 
      error: "Error processing advice", 
      details: error.message || String(error)
    });
  }
});

// Register interest form submission mock endpoint
app.post("/api/register-village", (req, res) => {
  const { name, phone, village, district, acres, cropInterest } = req.body;
  console.log("New Village Registration:", { name, phone, village, district, acres, cropInterest });
  return res.json({ 
    success: true, 
    message: "Village registered successfully!" 
  });
});

// Partner interest submission mock endpoint
app.post("/api/register-partner", (req, res) => {
  const { name, org, email, phone, role, message } = req.body;
  console.log("New Institution Partnership:", { name, org, email, phone, role, message });
  return res.json({ 
    success: true, 
    message: "Partner inquiry recorded successfully!" 
  });
});

// Vite middleware and Static file serving integration
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite Development Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving compiled static files in Production Mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`FarmFin Server bootstrapped at http://0.0.0.0:${PORT}`);
  });
}

setupVite().catch(err => {
  console.error("Failed to start server:", err);
});
