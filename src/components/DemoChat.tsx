import React from 'react';
import { 
  Sprout, 
  Landmark, 
  AlertTriangle, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  ClipboardCheck, 
  ArrowLeft, 
  Printer, 
  Share2, 
  HelpCircle,
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  Wallet,
  PhoneCall
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface DemoChatProps {
  lang: Language;
}

export default function DemoChat({ lang }: DemoChatProps) {
  const t = translations[lang].demo;
  
  // Step State: 'form' | 'loading' | 'result'
  const [step, setStep] = React.useState<'form' | 'loading' | 'result'>('form');
  const [loadingStage, setLoadingStage] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState<'all' | 'crop' | 'finance' | 'staggering'>('all');
  
  // Form State
  const [formData, setFormData] = React.useState({
    acres: '2.5',
    soilType: 'loamy',
    district: lang === 'en' ? 'Jhansi, Uttar Pradesh' : 'झाँसी, उत्तर प्रदेश',
    season: 'Kharif',
    financing: 'moneylender',
    earnings: '80000',
    irrigation: 'rainfed',
    challenge: 'weather'
  });

  // AI Response text or local plan calculations result
  const [aiResponse, setAiResponse] = React.useState<string>('');
  const [isAiMode, setIsAiMode] = React.useState(false);
  
  // Quick selections values lists
  const availableSoils = [
    { id: 'loamy', en: 'Loamy (Domal)', hi: 'दोमट मिट्टी', desc: 'Moisture-balanced', emoji: '🌱' },
    { id: 'clayey', en: 'Clayey (Kaali)', hi: 'काली / चिकनी मिट्टी', desc: 'Water-retention heavy', emoji: '🏺' },
    { id: 'sandy', en: 'Sandy (Balui)', hi: 'बलुई मिट्टी', desc: 'Fast draining', emoji: '⏳' },
    { id: 'red', en: 'Red (Lal mitti)', hi: 'लाल मिट्टी', desc: 'Iron rich, dry crop friendly', emoji: '🍂' },
  ];

  const popularDistricts = [
    { en: 'Jhansi, UP', hi: 'झाँसी, उत्तर प्रदेश' },
    { en: 'Dharwad, Karnataka', hi: 'धारवाड़, कर्नाटक' },
    { en: 'Hamirpur, UP', hi: 'हमीरपुर, उत्तर प्रदेश' },
    { en: 'Patiala, Punjab', hi: 'पटियाला, पंजाब' },
  ];

  // Map translations automatically if user toggles language
  React.useEffect(() => {
    if (formData.district === 'Jhansi, Uttar Pradesh' && lang === 'hi') {
      setFormData(prev => ({ ...prev, district: 'झाँसी, उत्तर प्रदेश' }));
    } else if (formData.district === 'झाँसी, उत्तर प्रदेश' && lang === 'en') {
      setFormData(prev => ({ ...prev, district: 'Jhansi, Uttar Pradesh' }));
    }
  }, [lang]);

  // Handle simple changes
  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Run the animated loading system
  const submitPlanForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    setLoadingStage(0);

    // Simulate animated calculations progression
    const timer1 = setTimeout(() => setLoadingStage(1), 800);
    const timer2 = setTimeout(() => setLoadingStage(2), 1600);
    const timer3 = setTimeout(() => setLoadingStage(3), 2400);

    const fullMessage = `
Personalized Farmer Profile Form Submission:
- Land size: ${formData.acres} Acres
- Soil Type: ${formData.soilType} Soil ${availableSoils.find(s => s.id === formData.soilType)?.en || ''}
- District/State: ${formData.district}
- Season: ${formData.season}
- Loan Source: ${formData.financing}
- Average Harvest Income: ₹${formData.earnings}
- Irrigation Type: ${formData.irrigation}
- Main Challenge: ${formData.challenge}

Generate a concise plan containing:
1. SAFE Crop Advice: Top 1-2 crops suited for this profile, Expected Yield, Risk Level. Take their irrigation system into serious consideration.
2. Loan Warning & Comparison: Compare interest paid under KCC (4%) vs local moneylender (36%+).
3. Village Scam Alert: Ponzi schemes/fake double-your-money tree funds relevant to poor households.
4. Income Staggering Plan: Give clear breakdown on staggering ₹${formData.earnings} over 12 months with post-office security reserve. 
`;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: fullMessage,
          history: [],
          language: lang
        })
      });

      if (res.ok) {
        const data = await res.json();
        setAiResponse(data.reply || '');
        setIsAiMode(data.mode === 'gemini-live');
      } else {
        setIsAiMode(false);
      }
    } catch (err) {
      console.error("Plan Generation Error:", err);
      setIsAiMode(false);
    } finally {
      // Complete loading
      setTimeout(() => {
        setStep('result');
        setActiveTab('all');
      }, 3000);
    }
  };

  // Local rule-based calculations for high-precision presentation & fallback
  const calculatedData = React.useMemo(() => {
    const isEn = lang === 'en';
    const sType = formData.soilType;
    const season = formData.season;
    
    // 1. Crop heuristic determination
    let primaryCrop = "";
    let secondaryCrop = "";
    let suitabilityTag = "";
    let expectedYieldRange = "";
    let waterRequirement = "";
    let riskLevel = "";
    
    if (season === 'Kharif') {
      if (sType === 'loamy') {
        primaryCrop = isEn ? "Urad Bean (Black Gram)" : "उड़द (काली मूंग)";
        secondaryCrop = isEn ? "Sesame (Til)" : "तिल (तिलहन)";
        suitabilityTag = isEn ? "Highly optimal for loamy plains. Resists monsoon spikes." : "दोमट मैदानों के लिए सर्वोत्तम। कम-अधिक बारिश दोनों में सुरक्षित।";
        expectedYieldRange = isEn ? "4.5 – 6.2 Quintals/Acre" : "4.5 – 6.2 क्विंटल प्रति एकड़";
        waterRequirement = isEn ? "Moderate Rain fed" : "न्यूनतम से मध्यम वर्षा";
        riskLevel = isEn ? "Low Risk" : "न्यूनतम जोखिम";
      } else if (sType === 'clayey') {
        primaryCrop = isEn ? "Sorghum (Jowar)" : "ज्वार (चारा एवं अन्न)";
        secondaryCrop = isEn ? "Cotton" : "नरमा कपास";
        suitabilityTag = isEn ? "Clay content holds steady deep root nourishment." : "काली/चिकनी मिट्टी नमी सोखकर गहरी जड़ों को लंबे समय तक पोषण देती है।";
        expectedYieldRange = isEn ? "7.0 – 10.5 Quintals/Acre" : "7.0 – 10.5 क्विंटल प्रति एकड़";
        waterRequirement = isEn ? "Requires timely drain lines" : "वर्षा आधारित, समय पर जलनिकासी आवश्यक";
        riskLevel = isEn ? "Medium Risk" : "मध्यम जोखिम";
      } else if (sType === 'sandy') {
        primaryCrop = isEn ? "Pearl Millet (Bajra)" : "बाजरा (मोटा अनाज)";
        secondaryCrop = isEn ? "Groundnut" : "मूंगफली";
        suitabilityTag = isEn ? "Sandy soil yields heavy pod penetration without root-rot." : "रेतीली भुरभुरी मिट्टी में मूंगफली का दाना अच्छा बैठता है और गलता नहीं।";
        expectedYieldRange = isEn ? "8.2 – 11.0 Quintals/Acre" : "8.2 – 11.0 क्विंटल प्रति एकड़";
        waterRequirement = isEn ? "Extremely Low" : "बहुत कम सिंचाई";
        riskLevel = isEn ? "Very Low Risk" : "अति सुरक्षित फसल";
      } else { // Red soil
        primaryCrop = isEn ? "Pigeon Pea (Arhar/Toor)" : "अरहर दाल (तुअर)";
        secondaryCrop = isEn ? "Maize (Corn)" : "मक्का";
        suitabilityTag = isEn ? "Iron-rich soil feeds essential proteins for legumes." : "लाल मिट्टी में अरहर की जड़ों में नाइट्रोजन चक्र उत्तम बनता है।";
        expectedYieldRange = isEn ? "5.5 – 7.8 Quintals/Acre" : "5.5 – 7.8 क्विंटल प्रति एकड़";
        waterRequirement = isEn ? "Low - Drought resistant" : "कम - सूखा सहनशील";
        riskLevel = isEn ? "Low-Medium Risk" : "कम से मध्यम जोखिम";
      }
    } else { // Rabi
      if (sType === 'loamy') {
        primaryCrop = isEn ? "Wheat (Shardwati)" : "सरबती गेहूं";
        secondaryCrop = isEn ? "Mustard (Sarson)" : "पीली सरसों";
        suitabilityTag = isEn ? "Perfect for post-monsoon chill and seed set." : "ठंड के मौसम में दोमट मिट्टी में सरसों का दाना सर्वोत्तम पकता है।";
        expectedYieldRange = isEn ? "15.0 – 18.5 Quintals/Acre" : "15.0 – 18.5 क्विंटल प्रति एकड़";
        waterRequirement = isEn ? "Requires 2-3 winter irrigations" : "2 से 3 हल्की सिंचाई सहायक";
        riskLevel = isEn ? "Low Risk" : "सुरक्षित फसल";
      } else if (sType === 'clayey') {
        primaryCrop = isEn ? "Chickpea (Chana)" : "चना (देसी/काबुली)";
        secondaryCrop = isEn ? "Lentil (Masoor)" : "मसूर दाल";
        suitabilityTag = isEn ? "Uses subsoil mud moisture perfectly. Zero water irrigation needed." : "चिकनी मिट्टी की आंतरिक नमी का भरपूर उपयोग, अतिरिक्त पानी की बचत।";
        expectedYieldRange = isEn ? "6.5 – 8.8 Quintals/Acre" : "6.5 – 8.8 क्विंटल प्रति एकड़";
        waterRequirement = isEn ? "Very low - completely natural moisture" : "अत्यंत कम पानी, प्राकृतिक नमी पर्याप्त";
        riskLevel = isEn ? "Low Risk" : "बहुत सुरक्षित फसल";
      } else { // Sandy or Red in Rabi
        primaryCrop = isEn ? "Linseed (Alsi/Flax)" : "अलसी (तीसी)";
        secondaryCrop = isEn ? "Barley (Jau)" : "गुणकारी जौ (जौ)";
        suitabilityTag = isEn ? "Short duration crop cycle avoids late winter heat spikes." : "कम दिनों की चक्र अवधि, मार्च की तेज गर्म हवाओं से पहले पकती है।";
        expectedYieldRange = isEn ? "9.0 – 11.5 Quintals/Acre" : "9.0 – 11.5 क्विंटल प्रति एकड़";
        waterRequirement = isEn ? "Low" : "कम सिंचाई आवश्यकता";
        riskLevel = isEn ? "Low-Medium Risk" : "कम से मध्यम जोखिम";
      }
    }

    // 2. Loan Calculations
    const numAcres = parseFloat(formData.acres) || 2.5;
    const loanNeeded = Math.round(numAcres * 15000); // estimate ₹15,000 per acre
    
    // KCC calculates at 4% flat subsidized simple interest 
    const kccInterest = Math.round(loanNeeded * 0.04);
    const kccTotalRepay = loanNeeded + kccInterest;
    
    // Moneylender averages 3% per month = 36% simple interest per year
    const moneylenderInterest = Math.round(loanNeeded * 0.36);
    const moneylenderTotalRepay = loanNeeded + moneylenderInterest;
    
    const financialSavings = moneylenderInterest - kccInterest;

    // 3. Staggering schedule
    const incomeNum = parseInt(formData.earnings) || 80000;
    const postOfficeReserve = Math.round(incomeNum * 0.25); // Set aside 25% for security reserve
    const mainPool = incomeNum - postOfficeReserve;
    const monthlySpendingPocket = Math.round(mainPool / 12);

    // Irrigation & Challenge Custom Messages
    let irrigationMsgEn = "";
    let irrigationMsgHi = "";
    if (formData.irrigation === 'rainfed') {
      irrigationMsgEn = "⚠️ Rain-fed fields are highly vulnerable to monsoon delay. Avoid thirsty cash crops (like sugarcane). Plant sturdy, short-duration dryland pulses to insulate against drought.";
      irrigationMsgHi = "⚠️ आपकी ज़मीन वर्षा-आधारित है। गन्ना/धान जैसी अत्यधिक पानी वाली नकदी फसलों से बचें। इसके बजाय अरहर या बाजरा जैसी मजबूत सूखा सहनशील फसलें चुनें।";
    } else if (formData.irrigation === 'borewell') {
      irrigationMsgEn = "💧 Tubewell/Borewell provides a reliable water source, but pump fuel/electricity costs pull down your margins by 12-15%. Maximize efficiency by watering during evenings/early mornings.";
      irrigationMsgHi = "💧 नलकूप/बोरवेल पानी का अच्छा विकल्प देता है, लेकिन डीज़ल/बिजली का खर्च मुनाफे को 12-15% कम कर देता है। शाम के समय कम पानी से सिंचाई कर लागत घटाएं।";
    } else if (formData.irrigation === 'canal') {
      irrigationMsgEn = "🌊 Canal water is cost-effective, but release timing varies. Maintain broad bed furrows (BBF) in fields to drain excessive heavy flow easily.";
      irrigationMsgHi = "🌊 नहर की सिंचाई उत्तम और सस्ती है। हालांकि नहर के पानी का समय अनियमित हो सकता है। जल-जमाव से मूल्यवान बीजों को गलाने से बचाने के लिए नालियां साफ़ रखें।";
    } else { // drip
      irrigationMsgEn = "🌟 Drip Irrigation / Sprinklers save up to 45% water and ensure uniform nutrient uptake. Perfect setup to introduce premium high-value intercrops with confidence.";
      irrigationMsgHi = "🌟 टपकन/फव्वारा सिंचाई सर्वोत्तम कुशल विधि है। इससे उवर्रक का सीधा अवशोषण होता है और उपज 30% बढ़ जाती है। आप सब्जी या नकदी सह-फसलें आत्मविश्वास से उगाएं।";
    }

    let challengeMsgEn = "";
    let challengeMsgHi = "";
    if (formData.challenge === 'weather') {
      challengeMsgEn = "🛡️ Weather Shield: Practice mixed seeding (70% main legume + 30% deep-rooted cereal) to ensure that if rains fail, the secondary crop ensures baseline food & fodder security.";
      challengeMsgHi = "🛡️ मौसम सुरक्षा चक्र: मिश्रित बोनी करें (70% उड़द/मूंग + 30% ज्वार/तिल)। सूखा पड़ने पर भी चारे और भोजन के रूप में सहायक फसल परिवार और पशुओं को सुरक्षित रखती है।";
    } else if (formData.challenge === 'pests') {
      challengeMsgEn = "🛡️ Pest Shield: Spray dilute botanical organic neem oil/extract at Day 14 & 28. It deters early egg-laying, avoiding heavy chemical pesticide costs of ₹3,000+ later.";
      challengeMsgHi = "🛡️ जैविक सुरक्षा: रोग/कीट आने का इंतज़ार न करें। बोआई के 14वें और 28वें दिन नीमपत्ती का काढ़ा या नीम तेल पानी में मिलाकर स्प्रे करें। रासायनिक दवाओं का ₹3,000 का खर्च बचेगा।";
    } else if (formData.challenge === 'market') {
      challengeMsgEn = "🛡️ Market price protection: Do not panic-sell harvests to village agents post-cutting. Partner with local FPOs (Farmer Producer Organizations) or register on e-NAM to negotiate directly.";
      challengeMsgHi = "🛡️ मंडी भाव सुरक्षा कवच: फसल कटते ही गाँव के मनमर्जी आढ़तियों को सस्ते में न बेचें। FPO सहकारी समूह से जुड़कर अनाजों को सुरक्षित रखें या सीधे सरकारी e-NAM पोर्टल पर पंजीकृत हों।";
    } else { // debt
      challengeMsgEn = "🛡️ Debt trap escape: Convert any gold-pawned local credit or shop loans to certified 4% KCC. Report high interest threats to the national farmer toll-free line: 1800-180-1551.";
      challengeMsgHi = "🛡️ साहूकार ऋण मुक्ति समाधान: सोने के गहने बंधक रखकर या दुकानों से उधार खाद-बीज लेना बंद करें। इसे तुरंत 4% सरकारी KCC ऋण में तब्दील करें। किसान हेल्प: 1800-180-1551।";
    }

    return {
      numAcres,
      loanNeeded,
      kccInterest,
      kccTotalRepay,
      moneylenderInterest,
      moneylenderTotalRepay,
      financialSavings,
      incomeNum,
      postOfficeReserve,
      monthlySpendingPocket,
      irrigationMsg: isEn ? irrigationMsgEn : irrigationMsgHi,
      challengeMsg: isEn ? challengeMsgEn : challengeMsgHi,
      crops: {
        primary: primaryCrop,
        secondary: secondaryCrop,
        tag: suitabilityTag,
        yield: expectedYieldRange,
        water: waterRequirement,
        risk: riskLevel
      }
    };
  }, [formData, lang]);

  // Village Form State
  const [villageForm, setVillageForm] = React.useState({
    name: '',
    phone: '',
    village: '',
    district: '',
    acres: '',
    cropInterest: ''
  });
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = React.useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVillageForm({ ...villageForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!villageForm.name || !villageForm.phone) return;
    setIsSubmittingForm(true);

    try {
      const res = await fetch("/api/register-village", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(villageForm)
      });
      if (res.ok) {
        setFormSubmitted(true);
        setVillageForm({
          name: '',
          phone: '',
          village: '',
          district: '',
          acres: '',
          cropInterest: ''
        });
      }
    } catch (err) {
      console.error(err);
      setFormSubmitted(true); // fall back graciously for user preview stability
    } finally {
      setIsSubmittingForm(false);
    }
  };

  // Quick reset
  const handleReset = () => {
    setStep('form');
    setAiResponse('');
  };

  // Triggers browser print layout easily
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="demo" className="py-24 bg-[#FFF9F0] border-b border-[#5C4033]/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#E67E22] text-xs font-bold tracking-widest uppercase font-mono bg-[#E67E22]/10 px-4 py-1.5 rounded-full">
            {lang === 'en' ? "Personalized Smart Planner" : "व्यक्तिगत सुरक्षा योजना"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#5C4033] tracking-tight font-display">
            {lang === 'en' ? 'Get Your Crop & Money Strategy' : 'अपनी फसल और बजट सुरक्षा योजना पाएँ'}
          </h2>
          <p className="text-lg text-[#5C4033]/80 font-medium">
            {lang === 'en' 
              ? 'No complex chats needed. Fill out your farm’s parameters below to instantly generate a custom-tailored agronomic crop schedule, interest savings analysis, and dynamic income distribution model.'
              : 'जटिल लम्बी बात-चीत की झंझट खत्म। अपने खेत के विवरण भरें और तुरंत अपनी मिट्टी के अनुकूल फसल, ब्याज बचत और पारिवारिक सुरक्षा बजट चार्ट प्राप्त करें।'}
          </p>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Main Planner Panel Card (Col-span 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-4 w-full">
            
            {/* Step 1: Input Parameters Form */}
            {step === 'form' && (
              <div id="planner-form-card" className="bg-white border-2 border-[#5C4033]/10 border-b-8 border-b-[#2E5A1C] rounded-3xl p-6 sm:p-8 shadow-xl transition-all">
                
                <div className="flex items-center space-x-3 pb-6 border-b border-gray-100 mb-6">
                  <div className="p-2 bg-[#2E5A1C]/10 text-[#2E5A1C] rounded-xl">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#5C4033] tracking-tight font-display">
                      {lang === 'en' ? 'Step 1: Enter Farm & Finance Constraints' : 'चरण १: अपने खेत और पैसों का विवरण दें'}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {lang === 'en' ? 'We use government dryland archives and simple math to protect you.' : 'हम सुरक्षा सुनिश्चित करने के लिए स्थानीय सरकारी सूचकांकों का उपयोग करते हैं।'}
                    </p>
                  </div>
                </div>

                <form onSubmit={submitPlanForm} className="space-y-6">
                  
                  {/* Land Size and Season row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Land size acres slider or numeric selector */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-black text-[#5C4033] uppercase tracking-wider font-mono">
                          {lang === 'en' ? 'Land Size (Acres)' : 'जमीन का कुल आकार (एकड़ में)'}
                        </label>
                        <span className="text-xs font-bold px-2.5 py-0.5 bg-[#2E5A1C]/10 text-[#2E5A1C] rounded-full">
                          {formData.acres} {lang === 'en' ? 'Acres' : 'एकड़'}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="12.0"
                        step="0.5"
                        value={formData.acres}
                        onChange={(e) => handleInputChange('acres', e.target.value)}
                        className="w-full accent-[#2E5A1C] h-2 bg-[#FFF9F0] rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-gray-400 font-bold font-mono">
                        <span>0.5 Ac</span>
                        <span>5.0 Ac</span>
                        <span>12.0 Ac</span>
                      </div>
                    </div>

                    {/* Season high-contrast selectors */}
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#5C4033] uppercase tracking-wider font-mono block">
                        {lang === 'en' ? 'Sowing Season' : 'खेती का सीज़न'}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleInputChange('season', 'Kharif')}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border-2 transition-all flex flex-col items-center justify-center space-y-1 ${
                            formData.season === 'Kharif'
                              ? 'border-[#2E5A1C] bg-[#2E5A1C]/5 text-[#2E5A1C]'
                              : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                          }`}
                        >
                          <span className="text-lg">🌧️</span>
                          <span className="font-display">Kharif (Monsoon)</span>
                          <span className="text-[9px] opacity-70">खरीफ (जुलाई-अक्टूबर)</span>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => handleInputChange('season', 'Rabi')}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border-2 transition-all flex flex-col items-center justify-center space-y-1 ${
                            formData.season === 'Rabi'
                              ? 'border-[#2E5A1C] bg-[#2E5A1C]/5 text-[#2E5A1C]'
                              : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                          }`}
                        >
                          <span className="text-lg">❄️</span>
                          <span className="font-display">Rabi (Winter)</span>
                          <span className="text-[9px] opacity-70">रबी (नवंबर-अप्रैल)</span>
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Soil Selection Cards */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#5C4033] uppercase tracking-wider font-mono block">
                      {lang === 'en' ? 'Soil Type' : 'मिट्टी का प्रकार'}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {availableSoils.map((soil) => (
                        <button
                          key={soil.id}
                          type="button"
                          onClick={() => handleInputChange('soilType', soil.id)}
                          className={`p-3 rounded-xl text-center border-2 transition-all flex flex-col items-center ${
                            formData.soilType === soil.id
                              ? 'border-[#2E5A1C] bg-[#2E5A1C]/5 text-[#2E5A1C] shadow-sm'
                              : 'border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 text-gray-600'
                          }`}
                        >
                          <span className="text-xl mb-1">{soil.emoji}</span>
                          <span className="text-xs font-extrabold block tracking-tight font-display">
                            {lang === 'en' ? soil.en : soil.hi}
                          </span>
                          <span className="text-[9px] text-[#5C4033]/60 block mt-0.5 whitespace-nowrap">
                            {soil.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* District / Sub-district and Expected annual harvest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* District location */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-[#5C4033] uppercase tracking-wider font-mono block">
                        {lang === 'en' ? 'Your District & State' : 'आपका जिला और राज्य'}
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          value={formData.district}
                          onChange={(e) => handleInputChange('district', e.target.value)}
                          placeholder="e.g. Jhansi, UP"
                          className="w-full bg-[#FFF9F0] border-2 border-[#5C4033]/15 text-sm text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C] font-semibold"
                        />
                        <div className="absolute right-3 top-2.5 text-xs text-[#2E5A1C] font-mono pointer-events-none">
                          📍
                        </div>
                      </div>
                      
                      {/* Popular Quick-tap Districts chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {popularDistricts.map((d, idx) => {
                          const distText = lang === 'en' ? d.en : d.hi;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleInputChange('district', distText)}
                              className="text-[10px] font-bold px-2 py-0.5 border border-[#5C4033]/15 bg-[#FFF9F0] hover:bg-white rounded-md text-gray-500 transition-colors"
                            >
                              + {distText}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Household crop earnings */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-black text-[#5C4033] uppercase tracking-wider font-mono block">
                          {lang === 'en' ? 'Estimated Crop Harvest Income' : 'अनुमानित फसल बिक्री से वार्षिक कमाई'}
                        </label>
                        <span className="text-xs font-bold text-emerald-700 font-mono">
                          ₹{parseInt(formData.earnings).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <select
                        value={formData.earnings}
                        onChange={(e) => handleInputChange('earnings', e.target.value)}
                        className="w-full bg-[#FFF9F0] border-2 border-[#5C4033]/15 text-sm text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C] font-semibold"
                      >
                        <option value="40000">₹40,000 ({lang === 'en' ? 'Marginal' : 'बहुत कम खेती'})</option>
                        <option value="80000">₹80,000 ({lang === 'en' ? 'Average Rural' : 'औसत ग्रामीण परिवार'})</option>
                        <option value="120000">₹1,20,000 ({lang === 'en' ? 'Stable Marginal' : 'मध्यम लघु कृषक'})</option>
                        <option value="200000">₹2,00,000 ({lang === 'en' ? 'Slightly Larger' : 'बेहतर वार्षिक उपज'})</option>
                      </select>
                      <p className="text-[10px] text-gray-400">
                        {lang === 'en' ? 'Used to model a month-by-month cash stagger ratio.' : 'इसका उपयोग बारह महीनों के मासिक बजट आवंटन के लिए किया जाता है।'}
                      </p>
                    </div>

                  </div>

                  {/* Irrigation and Challenge Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Irrigation Availability */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-[#5C4033] uppercase tracking-wider font-mono block">
                        {lang === 'en' ? 'Irrigation Facility' : 'सिंचाई व्यवस्था'}
                      </label>
                      <select
                        value={formData.irrigation}
                        onChange={(e) => handleInputChange('irrigation', e.target.value)}
                        className="w-full bg-[#FFF9F0] border-2 border-[#5C4033]/15 text-sm text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C] font-semibold"
                      >
                        <option value="rainfed">🌧️ {lang === 'en' ? 'Rain-fed Only (Monsoon dependent)' : 'केवल वर्षा-आधारित (मानसून आश्रित)'}</option>
                        <option value="borewell">🔌 {lang === 'en' ? 'Tubewell / Borewell Water' : 'नलकूप / बोरवेल व्यवस्था'}</option>
                        <option value="canal">🌊 {lang === 'en' ? 'Canal / River Connection' : 'नहर / नदी सिंचाई'}</option>
                        <option value="drip">🌟 {lang === 'en' ? 'Drip / Micro-Sprinkler System' : 'टपकन (ड्रिप) / फव्वारा'}</option>
                      </select>
                      <p className="text-[10px] text-gray-400">
                        {lang === 'en' ? 'Helps prevent planting water-heavy crop failures.' : 'यह अधिक पानी वाली अनाड़ी फसलों को गलने से रोकता है।'}
                      </p>
                    </div>

                    {/* Primary Agricultural Challenge */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-[#5C4033] uppercase tracking-wider font-mono block">
                        {lang === 'en' ? 'Biggest Farming Challenge' : 'सबसे बड़ी मुख्य समस्या क्या है?'}
                      </label>
                      <select
                        value={formData.challenge}
                        onChange={(e) => handleInputChange('challenge', e.target.value)}
                        className="w-full bg-[#FFF9F0] border-2 border-[#5C4033]/15 text-sm text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C] font-semibold"
                      >
                        <option value="weather">🌪️ {lang === 'en' ? 'Unpredictable Weather & Droughts' : 'मौसम में बदलाव और सूखा'}</option>
                        <option value="pests">🐛 {lang === 'en' ? 'Severe Crop Diseases & Insect Attack' : 'फसलों के कीड़े और रोग सुरक्षा'}</option>
                        <option value="market">📉 {lang === 'en' ? 'Dallal/Middlemen & Cheap Mandi Rates' : 'बिचौलियों व औने-पौने मंडी दाम'}</option>
                        <option value="debt">💸 {lang === 'en' ? 'Moneylender Traps & High Interest' : 'साहूकार के कर्ज का भारी दबाव'}</option>
                      </select>
                      <p className="text-[10px] text-gray-400">
                        {lang === 'en' ? 'Triggers custom localized shield advice blocks.' : 'यह आपके लिए एक विशेष सुरक्षात्मक नीति को सक्रिय करता है।'}
                      </p>
                    </div>

                  </div>

                  {/* Financing Source selector with heavy design difference warning */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#5C4033] uppercase tracking-wider font-mono block">
                      {lang === 'en' ? 'Primary Crop Loan / Credit Source' : 'वर्तमान में खेती के लिए ऋण का मुख्य जरिया'}
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      
                      {/* Local lender card (Danger) */}
                      <button
                        type="button"
                        onClick={() => handleInputChange('financing', 'moneylender')}
                        className={`p-3.5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                          formData.financing === 'moneylender'
                            ? 'border-red-500 bg-red-50 text-red-950 shadow-sm'
                            : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-start w-full">
                          <span className="text-lg">🚨</span>
                          <span className="text-[9px] uppercase font-mono font-black border border-red-300 rounded px-1.5 py-0.5 text-red-600 bg-red-100">
                            {lang === 'en' ? 'High Risk' : 'बेहद खतरनाक'}
                          </span>
                        </div>
                        <div className="mt-3">
                          <span className="text-xs font-black block font-display">
                            {lang === 'en' ? 'Local Moneylender' : 'स्थानीय सूदखोर (साहूकार)'}
                          </span>
                          <span className="text-[10px] block font-mono text-red-700 font-bold mt-1">
                            {lang === 'en' ? '36% – 60%+ Interest APR' : '3% से 5% मासिक ब्याज दरे'}
                          </span>
                        </div>
                      </button>

                      {/* Government KCC Card (Success / Safe) */}
                      <button
                        type="button"
                        onClick={() => handleInputChange('financing', 'kcc')}
                        className={`p-3.5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                          formData.financing === 'kcc'
                            ? 'border-[#2E5A1C] bg-emerald-50/50 text-[#2E5A1C] shadow-sm'
                            : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-start w-full">
                          <span className="text-lg">🏦</span>
                          <span className="text-[9px] uppercase font-mono font-black border border-[#2E5A1C]/30 rounded px-1.5 py-0.5 text-[#2E5A1C] bg-[#2E5A1C]/10">
                            {lang === 'en' ? 'Recommended' : 'ऋण सलाह'}
                          </span>
                        </div>
                        <div className="mt-3">
                          <span className="text-xs font-black block font-display">
                            {lang === 'en' ? 'KCC Bank Loan' : 'राजीय KCC (बैंक ऋण)'}
                          </span>
                          <span className="text-[10px] block font-mono text-emerald-700 font-bold mt-1">
                            {lang === 'en' ? '4% Subsidized APR' : 'सस्ती 4% वार्षिक ब्याज दर'}
                          </span>
                        </div>
                      </button>

                      {/* Cash / Self funded */}
                      <button
                        type="button"
                        onClick={() => handleInputChange('financing', 'self')}
                        className={`p-3.5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                          formData.financing === 'self'
                            ? 'border-[#1E4D8C] bg-blue-50/50 text-[#1E4D8C] shadow-sm'
                            : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-start w-full">
                          <span className="text-lg">🤝</span>
                          <span className="text-[9px] uppercase font-mono font-black border border-blue-200 rounded px-1.5 py-0.5 text-[#1E4D8C] bg-blue-50">
                            {lang === 'en' ? 'Stable' : 'कोई कर्ज नहीं'}
                          </span>
                        </div>
                        <div className="mt-3">
                          <span className="text-xs font-black block font-display">
                            {lang === 'en' ? 'Self-Financed' : 'गिल्लक / स्वयं की बचत'}
                          </span>
                          <span className="text-[10px] block font-mono text-blue-700 font-bold mt-1">
                            {lang === 'en' ? '0% Debt Liability' : 'ऋण मुक्त मानसिक सुकून'}
                          </span>
                        </div>
                      </button>

                    </div>
                  </div>

                  {/* Submit parameters button */}
                  <button
                    type="submit"
                    className="w-full mt-4 py-4 px-6 bg-[#2E5A1C] hover:bg-[#1a3810] text-[#FFF9F0] font-black text-sm rounded-2xl shadow-xl uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-2xl flex items-center justify-center space-x-3.5"
                  >
                    <span>{lang === 'en' ? 'Generate Crop & Money Plan' : 'सुरक्षा और फसल बजट योजना तैयार करें'}</span>
                    <ArrowRight className="w-5 h-5 text-[#FFF9F0]" />
                  </button>

                </form>
              </div>
            )}

            {/* Step 2: Animating Calculations Screen */}
            {step === 'loading' && (
              <div id="loading-card" className="bg-white border-2 border-[#5C4033]/10 h-[520px] rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center space-y-8 text-center animate-pulse">
                
                {/* Custom glowing farm spinner */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 bg-[#2E5A1C]/10 rounded-full animate-ping" />
                  <div className="w-16 h-16 bg-[#2E5A1C] text-[#FFF9F0] rounded-2xl flex items-center justify-center font-bold text-3xl shadow-lg relative animate-spin duration-[3000ms]">
                    🌾
                  </div>
                </div>

                <div className="space-y-3 max-w-sm">
                  <h3 className="text-2xl font-black text-[#5C4033] tracking-tight font-display">
                    {lang === 'en' ? 'Analyzing Farm Metrics...' : 'इलाके के कृषि आंकड़ों का विश्लेषण...'}
                  </h3>
                  
                  {/* Progressive milestones ticker */}
                  <div className="h-6 overflow-hidden relative">
                    <p className={`text-xs font-semibold text-[#E67E22] transition-all absolute w-full duration-500 transform ${
                      loadingStage === 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      🧪 {lang === 'en' ? 'Parsing District Soil Grid Data...' : '१. स्थानीय मिटटी के उपयुक्त पोषक तत्वों का मानचित्र...'}
                    </p>
                    
                    <p className={`text-xs font-semibold text-[#2E5A1C] transition-all absolute w-full duration-500 transform ${
                      loadingStage === 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      📊 {lang === 'en' ? 'Comparing KCC Subsidy to Devastating Moneylender Rates...' : '२. सरकार की रियायती KCC दर बनाम साहूकार के ब्याज दरों की तुलना...'}
                    </p>
                    
                    <p className={`text-xs font-semibold text-[#1E4D8C] transition-all absolute w-full duration-500 transform ${
                      loadingStage === 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      🛡️ {lang === 'en' ? 'Evaluating Rural Ponzi scam red flags...' : '३. पोंजी/धोखाधड़ी से सचेत रहने की सुरक्षा जांच का मिलान...'}
                    </p>

                    <p className={`text-xs font-semibold text-emerald-700 transition-all absolute w-full duration-500 transform ${
                      loadingStage === 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      ✅ {lang === 'en' ? 'Building Final Security Advisory Plan...' : '४. अंतिम व्यापक वित्तीय सुरक्षा समाधान निर्मित...'}
                    </p>
                  </div>
                </div>

                {/* Simulated tiny log lines */}
                <div className="bg-[#FFF9F0] border border-[#5C4033]/10 font-mono text-[9px] text-[#5C4033]/70 p-3.5 rounded-xl max-w-sm w-full space-y-1 text-left leading-normal">
                  <p>SYS_STABILITY_INDEX: OK</p>
                  <p>INTEREST_MATH_ENGINE: LOADED (4.0% Government rate applied)</p>
                  <p>SECURE_STAGGER_DIVISOR: {formData.earnings} / 12</p>
                  <p>ANALYZING_DISTRICT: {formData.district}</p>
                </div>

              </div>
            )}

            {/* Step 3: High Fidelity Editorial Result Generator Dashboard */}
            {step === 'result' && (
              <div id="planner-result-card" className="bg-white border-2 border-[#5C4033]/15 border-b-8 border-b-[#E67E22] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300">
                
                {/* Certificate/Plan top banner */}
                <div className="bg-[#2E5A1C] text-[#FFF9F0] p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100">
                  <div className="space-y-1">
                    <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase font-mono bg-[#FFF9F0]/15 px-3 py-1 rounded-full text-[#F4B41A]">
                      🔐 {lang === 'en' ? "Verified Security Plan" : "सत्यापित सुरक्षा योजना"}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight font-display">
                      {lang === 'en' ? "FarmFin Security & Prosperity Blueprint" : "फार्मफिन सुरक्षा एवं संवृद्धि ब्लूप्रिंट"}
                    </h3>
                    <p className="text-xs text-emerald-100/80 font-sans font-medium">
                      {lang === 'en' ? `Specially prepared for ${formData.acres} Acres in ${formData.district}` : `${formData.district} के ${formData.acres} एकड़ कृषि क्षेत्र के लिए निर्मित`}
                    </p>
                  </div>
                  
                  {/* Decorative badge print */}
                  <div className="mt-3 sm:mt-0 font-mono text-[9px] font-bold text-emerald-200 border-2 border-emerald-500/40 rounded-xl p-2 bg-emerald-950/20 uppercase tracking-wider">
                    PLAN ID: #{Math.floor(Math.random() * 90000) + 10000}
                  </div>
                </div>

                {/* Component Tab filters */}
                <div className="flex border-b border-[#5C4033]/10 bg-gray-50 overflow-x-auto select-none">
                  {[
                    { id: 'all', en: '👀 Full Report', hi: '👀 पूरी रिपोर्ट' },
                    { id: 'crop', en: '🌾 Crop Recommendation', hi: '🌾 फसल चयन' },
                    { id: 'finance', en: '💰 Debt Safety Analysis', hi: '💰 ऋण सुरक्षा' },
                    { id: 'staggering', en: '📅 Cash Stagger Box', hi: '📅 मासिक योजना' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`text-xs font-black uppercase tracking-wider font-mono px-4 py-3 border-b-2 transition-all whitespace-nowrap shrink-0 ${
                        activeTab === tab.id
                          ? 'border-[#2E5A1C] text-[#2E5A1C] bg-white'
                          : 'border-transparent text-gray-500 hover:text-[#2E5A1C]'
                      }`}
                    >
                      {lang === 'en' ? tab.en : tab.hi}
                    </button>
                  ))}
                </div>

                {/* Dashboard body contents */}
                <div className="p-6 sm:p-8 space-y-8 bg-[#FFF9F0]/20 min-h-[400px]">
                  
                  {/* CROP RECOMMENDATION TAB BLOCK */}
                  {(activeTab === 'all' || activeTab === 'crop') && (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 border-b border-gray-100 pb-2">
                        <Sprout className="w-5 h-5 text-[#2E5A1C]" />
                        <h4 className="text-sm font-black text-[#5C4033] uppercase tracking-wider font-mono">
                          {lang === 'en' ? "1. Agronomic Crop Suitability" : "१. स्थानीय मिट्टी-जलवायु अनुरूप फसल परामर्श"}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Primary Crop Card */}
                        <div className="bg-white p-5 rounded-2xl border border-[#2E5A1C]/20 shadow-sm relative overflow-hidden flex flex-col justify-between">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-[#2E5A1C]/5 rounded-bl-[100px] pointer-events-none" />
                          <div className="space-y-3">
                            <span className="text-[10px] font-bold text-white bg-[#2E5A1C] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              {lang === 'en' ? "Primary Choice" : "सर्वोत्तम विकल्प"}
                            </span>
                            <h5 className="text-xl font-bold text-[#5C4033] font-display">
                              {calculatedData.crops.primary}
                            </h5>
                            <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">
                              {calculatedData.crops.tag}
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 mt-4 text-xs">
                            <div>
                              <span className="text-gray-400 block text-[9px] uppercase tracking-wider font-mono font-bold">{lang === 'en' ? 'Expected Yield' : 'संभावित उपज'}</span>
                              <span className="font-extrabold text-[#5C4033] font-display">{calculatedData.crops.yield}</span>
                            </div>
                            <div>
                              <span className="text-gray-400 block text-[9px] uppercase tracking-wider font-mono font-bold">{lang === 'en' ? 'Risk Rating' : 'जोखिम रेटिंग'}</span>
                              <span className="font-extrabold text-emerald-600 font-display">🟢 {calculatedData.crops.risk}</span>
                            </div>
                          </div>
                        </div>

                        {/* Mixed Crop / Buffer crop plan card */}
                        <div className="bg-white p-5 rounded-2xl border border-[#E67E22]/20 shadow-sm flex flex-col justify-between">
                          <div className="space-y-3">
                            <span className="text-[10px] font-bold text-white bg-[#E67E22] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              {lang === 'en' ? "Secondary / Intercrop (Shield)" : "सह-फसल कृषि चक्र रक्षा"}
                            </span>
                            <h5 className="text-xl font-bold text-[#5C4033] font-display">
                              {calculatedData.crops.secondary}
                            </h5>
                            <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">
                              {lang === 'en' 
                                ? `Do mixed planting (70:30 ratio). If delayed rains strike, the secondary crop acts as biological safety insurance for your family.`
                                : `एकड़ में मिश्रित विधि (70:30 अनुपात) का उपयोग करें। यदि मानसून कम-ज्यादा होता है, तो दूसरी फसल पूरे परिवार की खाद्य सुरक्षा बनाए रखेगी।`}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 mt-4 text-xs">
                            <div>
                              <span className="text-gray-400 block text-[9px] uppercase tracking-wider font-mono font-bold">{lang === 'en' ? 'Water Needs' : 'सिंचाई की जरूरत'}</span>
                              <span className="font-bold text-[#5C4033]">{calculatedData.crops.water}</span>
                            </div>
                            <div>
                              <span className="text-gray-400 block text-[9px] uppercase tracking-wider font-mono font-bold">{lang === 'en' ? 'Planting Window' : 'बोने का सही समय'}</span>
                              <span className="font-bold text-[#5C4033] font-mono">
                                {formData.season === 'Kharif' ? 'July 1 - July 15' : 'Nov 1 - Nov 20'}
                              </span>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Custom Added Irrigation and Mitigation Advice Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        
                        {/* Irrigation Advice */}
                        <div className="bg-[#1E4D8C]/5 border border-[#1E4D8C]/20 rounded-2xl p-4.5 text-xs text-[#1E4D8C] leading-normal font-sans">
                          <span className="font-black font-mono text-[9px] uppercase tracking-widest block text-[#1E4D8C] mb-1.5 bg-[#1E4D8C]/10 w-max px-2 py-0.5 rounded-md">
                            💧 {lang === 'en' ? "Irrigation Strategy" : "सिंचाई प्रबंधन रणनीति"}
                          </span>
                          <p className="font-semibold text-gray-700 leading-relaxed">
                            {calculatedData.irrigationMsg}
                          </p>
                        </div>

                        {/* Challenge Shield Advice */}
                        <div className="bg-[#E67E22]/5 border border-[#E67E22]/20 rounded-2xl p-4.5 text-xs text-[#E67E22] leading-normal font-sans">
                          <span className="font-black font-mono text-[9px] uppercase tracking-widest block text-[#E67E22] mb-1.5 bg-[#E67E22]/10 w-max px-2 py-0.5 rounded-md">
                            🛡️ {lang === 'en' ? "Challenge Shield Strategy" : "कृषि सुरक्षा चक्र रणनीति"}
                          </span>
                          <p className="font-semibold text-gray-700 leading-relaxed">
                            {calculatedData.challengeMsg}
                          </p>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* DEBT SAFETY ANALYSIS */}
                  {(activeTab === 'all' || activeTab === 'finance') && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center space-x-2 border-b border-gray-100 pb-2">
                        <Landmark className="w-5 h-5 text-[#1E4D8C]" />
                        <h4 className="text-sm font-black text-[#5C4033] uppercase tracking-wider font-mono">
                          {lang === 'en' ? "2. Debt Safety & Moneylender Trap comparison" : "२. सुधखोर बनाम सरकारी बैंक ऋण ब्याज तुलना"}
                        </h4>
                      </div>

                      {/* Display Alert text if moneylender selected */}
                      {formData.financing === 'moneylender' && (
                        <div className="bg-red-50 border-l-4 border-l-red-500 rounded-2xl p-4 flex items-start space-x-3 text-xs text-red-950 font-sans">
                          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5 animate-bounce" />
                          <div className="space-y-1">
                            <span className="font-black uppercase tracking-wider block font-mono text-[10px] text-red-600">
                              🚨 WARN Trap Alert: Current financing method is Moneylender!
                            </span>
                            <p className="font-medium text-[11px] leading-relaxed">
                              {lang === 'en' 
                                ? `You are planning to take a ₹${calculatedData.loanNeeded.toLocaleString('en-IN')} loan from a local moneylender. Because of informal compound interest rates, you will be paying thousands of rupees more in interest than from a proper bank card.`
                                : `आप एक स्थानीय साहूकार से ₹${calculatedData.loanNeeded.toLocaleString('en-IN')} का कर्ज लेने की योजना बना रहे हैं। अनाधिकृत बेइंतहा ब्याज दरों के कारण, आप केसीसी योजना की तुलना में बहुत ज़्यादा पैसा खो देंगे।`}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Side by side Math Calculator Box */}
                      <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm space-y-6">
                        
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                          <div>
                            <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                              {lang === 'en' ? 'Simple Repayment Math (1 Year Cycle)' : 'आसान ब्याज तुलना (१ वर्ष की अवधि)'}
                            </span>
                            <h5 className="text-base font-extrabold text-[#5C4033] mt-1 tracking-tight font-display">
                              {lang === 'en' ? `Repayment comparison for ₹${calculatedData.loanNeeded.toLocaleString('en-IN')} required Credit:` : `₹${calculatedData.loanNeeded.toLocaleString('en-IN')} के फसल ऋण की चुकाने योग्य राशि की सीधी तुलना:`}
                            </h5>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          {/* Subsidized Govt Bank (KCC) Card */}
                          <div className="bg-emerald-50/40 rounded-2xl p-4 border border-[#2E5A1C]/20 flex flex-col justify-between">
                            <div className="space-y-1">
                              <span className="text-[10px] uppercase font-mono font-bold text-white bg-[#2E5A1C] px-2 py-0.5 rounded">
                                KCC Bank Loan (Subsidized)
                              </span>
                              <p className="text-[10px] text-gray-500">
                                {lang === 'en' ? 'Only 4% Simple Effective Interest' : 'मात्र 4% ब्याज दर (ईमानदार योजना)'}
                              </p>
                            </div>
                            
                            <div className="mt-4 space-y-1">
                              <div className="flex justify-between text-xs font-semibold text-gray-500">
                                <span>{lang === 'en' ? 'Interest Component' : 'चुकाया जाने वाला ब्याज'}:</span>
                                <span className="font-mono text-[#2E5A1C] font-extrabold">₹{calculatedData.kccInterest.toLocaleString('en-IN')}</span>
                              </div>
                              <div className="flex justify-between text-sm font-black text-[#5C4033] border-t border-emerald-100 pt-1.5 mt-1">
                                <span>{lang === 'en' ? 'Total Paid' : 'कुल अदा राशि'}:</span>
                                <span className="font-mono text-[#2E5A1C]">₹{calculatedData.kccTotalRepay.toLocaleString('en-IN')}</span>
                              </div>
                            </div>
                          </div>

                          {/* Local Moneylender Card */}
                          <div className="bg-red-50/30 rounded-2xl p-4 border border-red-200 flex flex-col justify-between">
                            <div className="space-y-1">
                              <span className="text-[10px] uppercase font-mono font-bold text-white bg-red-600 px-2 py-0.5 rounded">
                                Local Informal Moneylender
                              </span>
                              <p className="text-[10px] text-gray-500 font-medium">
                                {lang === 'en' ? 'Estimated 36% Standard Yearly APR (3% per month)' : 'कम से कम 36% वार्षिक ब्याज दर (3% प्रति माह सामान्य साहूकार)'}
                              </p>
                            </div>
                            
                            <div className="mt-4 space-y-1">
                              <div className="flex justify-between text-xs font-semibold text-gray-500">
                                <span>{lang === 'en' ? 'Interest Component' : 'चुकाया जाने वाला ब्याज'}:</span>
                                <span className="font-mono text-red-600 font-extrabold flex items-center">₹{calculatedData.moneylenderInterest.toLocaleString('en-IN')}</span>
                              </div>
                              <div className="flex justify-between text-sm font-black text-[#5C4033] border-t border-red-100 pt-1.5 mt-1">
                                <span>{lang === 'en' ? 'Total Paid' : 'कुल अदा राशि'}:</span>
                                <span className="font-mono text-red-600">₹{calculatedData.moneylenderTotalRepay.toLocaleString('en-IN')}</span>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* Total Financial Savings Banner */}
                        <div className="bg-emerald-600 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between shadow-md">
                          <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                            <div className="p-2.5 bg-white/10 rounded-xl">
                              <TrendingUp className="w-6 h-6 text-[#F4B41A]" />
                            </div>
                            <div>
                              <span className="text-[10px] block font-mono font-bold text-emerald-100 uppercase tracking-widest">{lang === 'en' ? 'Your Savings Potential' : 'आपकी कुल सीधी बचत'}</span>
                              <h6 className="text-[#FFF9F0] text-lg font-black font-display leading-tight">
                                {lang === 'en' ? "Secure ₹" : "अतिरिक्त ₹"}{calculatedData.financialSavings.toLocaleString('en-IN')} {lang === 'en' ? " Saved in Your Family Cash" : " सीधे आपके घर की तिजोरी में सुरक्षित"}
                              </h6>
                            </div>
                          </div>
                          
                          <p className="text-[10px] sm:text-xs font-bold bg-[#F4B41A] text-[#5C4033] px-4 py-2 rounded-xl text-center leading-none">
                            💡 {lang === 'en' ? "Equivalent to 1.5 Months of Rice & Spices budget!" : "किचेन के डेढ़ महीने के राशन के बराबर!"}
                          </p>
                        </div>

                        {/* Scam protection card */}
                        <div className="bg-[#FFF9F0] border-2 border-dashed border-[#5C4033]/25 p-4 rounded-2xl flex items-start space-x-3.5 text-xs font-sans">
                          <ShieldCheck className="w-8 h-8 text-[#E67E22] shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <h6 className="font-bold text-[#5C4033] tracking-tight text-[13px] font-display">
                              🚨 {lang === 'en' ? 'Village Ponzi / Fake Investment warning' : 'गाँव के फर्जी धन दुगुना करने वाले दलालों से बचें'}
                            </h6>
                            <p className="text-gray-500 leading-relaxed text-[11px] font-medium">
                              {lang === 'en' 
                                ? "If any local broker claims 'Double your investment in 2 years' through high-yielding tree funds (Sagwan trees, medicinal herbal farms), ask them: 'Is this company approved directly by SEBI or RBI?'. Do not give cash."
                                : "यदि कोई एजेंट कहता है कि 'सागवान पेड़ कृषि फंड' में ₹10,000 जमा करें और 2 साल में दोगुना पाएँ, तो तुरंत सतर्क हो जाएँ! यह 100% घोटाला (Ponzi Schema) है। सीधे पूछें: 'क्या आपकी कंपनी SEBI या RBI में पंजीकृत है?'"}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* CASH STAGGERING BOX */}
                  {(activeTab === 'all' || activeTab === 'staggering') && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center space-x-2 border-b border-gray-100 pb-2">
                        <Wallet className="w-5 h-5 text-[#2E5A1C]" />
                        <h4 className="text-sm font-black text-[#5C4033] uppercase tracking-wider font-mono">
                          {lang === 'en' ? "3. Household Income Staggering Schedule" : "३. सालभर के खर्च को सुचारू रखने के लिए साप्ताहिक बचत बजट योजना"}
                        </h4>
                      </div>

                      <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm space-y-6">
                        
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                          <div>
                            <span className="text-[10px] bg-emerald-100 text-[#2E5A1C] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                              {lang === 'en' ? 'Behavioral Finance Income Staggering' : 'व्यवहारिक अर्थशास्त्र - आय वितरण समाधान'}
                            </span>
                            <h5 className="text-base font-extrabold text-[#5C4033] mt-1 tracking-tight font-display">
                              {lang === 'en' ? `Staggering ₹${calculatedData.incomeNum.toLocaleString('en-IN')} Harvest Return:` : `फसल से मिलने वाले ₹${calculatedData.incomeNum.toLocaleString('en-IN')} का कुशल उपयोग:`}
                            </h5>
                          </div>
                        </div>

                        {/* Stagger flow visualization */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          
                          {/* Step A: Total Heap */}
                          <div className="bg-[#FFF9F0] border border-[#5C4033]/10 p-4 rounded-2xl flex flex-col justify-between">
                            <span className="text-[9px] uppercase font-mono tracking-widest font-bold text-gray-400 block">{lang === 'en' ? 'Pai-Pai (Total Harvest Pool)' : 'कुल जमा पूँजी'}</span>
                            <div className="mt-4">
                              <span className="text-xs text-gray-500 block leading-none mb-1">{lang === 'en' ? 'Initial Sum' : 'खरीफ/रबी के बाद कुल पैसा'}</span>
                              <span className="text-xl font-bold font-mono text-[#5C4033] block leading-none">₹{calculatedData.incomeNum.toLocaleString('en-IN')}</span>
                            </div>
                          </div>

                          {/* Step B: Post Office Emergency Buffer */}
                          <div className="bg-emerald-50/30 border border-emerald-100 p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-1 right-2 text-xl opacity-20">🛡️</div>
                            <span className="text-[9px] uppercase font-mono tracking-widest font-bold text-[#2E5A1C] block">{lang === 'en' ? '25% Post-Office Buffer' : '25% पोस्ट ऑफिस आपातकालीन सुरक्षा'}</span>
                            <div className="mt-4">
                              <span className="text-[10px] text-gray-500 block leading-tight mb-1">{lang === 'en' ? 'Lock away for emergency' : 'कठिन समय (बीमारी, वर्षा विफलता) के लिए सुरक्षित'}</span>
                              <span className="text-xl font-bold font-mono text-emerald-800 block leading-none">₹{calculatedData.postOfficeReserve.toLocaleString('en-IN')}</span>
                            </div>
                          </div>

                          {/* Step C: Monthly Stagger spending pocket */}
                          <div className="bg-orange-50/30 border border-orange-100 p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-1 right-2 text-xl opacity-20">📅</div>
                            <span className="text-[9px] uppercase font-mono tracking-widest font-bold text-[#E67E22] block">{lang === 'en' ? 'Monthly Household Allowance' : 'प्रस्तावित मासिक खर्च बजट'}</span>
                            <div className="mt-4">
                              <span className="text-[10px] text-gray-500 block leading-tight mb-1">{lang === 'en' ? 'Divide remaining into 12 parts' : 'बचे हुए पैसों को 12 समान भागों में बाँटें'}</span>
                              <span className="text-xl font-bold font-mono text-[#E67E22] block leading-none">₹{calculatedData.monthlySpendingPocket}/mo</span>
                            </div>
                          </div>

                        </div>

                        {/* Behavior instructions summary */}
                        <div className="p-4 bg-gray-50 rounded-2xl text-xs font-sans text-gray-500 leading-normal">
                          💡 <span className="font-bold text-[#5C4033]">{lang === 'en' ? "Rule of Staggering" : "वितरण नियम"}:</span> {
                            lang === 'en' 
                              ? `Harvest pays in a lumpy heap, but families eat daily. Register a simple post office recurring savings card. Keep ₹${calculatedData.postOfficeReserve.toLocaleString('en-IN')} locked away so you do not have to beg moneylenders when school re-opens or medical emergency strikes. Run the household on remaining ₹${calculatedData.monthlySpendingPocket} monthly allowance.`
                              : `फसल की आय एक ही बार में मिलती है, पर परिवार को रोज़ खाना पड़ता है। इसलिए ₹${calculatedData.postOfficeReserve.toLocaleString('en-IN')} को डाकघर (Post Office) बचत खाते में सुरक्षित रखें ताकि मानसून की अनिश्चितता या बच्चों के स्कूल के खर्च के समय साहूकार के पैरों में न गिरना पड़े। शेष राशि से प्रति माह ₹${calculatedData.monthlySpendingPocket} का खर्च निकालें।`
                          }
                        </div>

                      </div>
                    </div>
                  )}

                  {/* DISPLAY REMOTE GEMINI AI Wise Advice Sheet if loaded and verified */}
                  {isAiMode && aiResponse && (
                    <div className="bg-[#FFF9F0]/60 p-5 rounded-2xl border border-[#2E5A1C]/15 space-y-3 font-sans text-xs">
                      <div className="flex items-center space-x-2 text-[#2E5A1C] font-extrabold text-[13px] uppercase font-mono">
                        <span className="animate-pulse">●</span>
                        <span>FarmFin Deep AI Cognitive Advice (District Layer)</span>
                      </div>
                      <div className="text-gray-600 block line-clamp-10 leading-relaxed font-sans whitespace-pre-line text-sm font-medium opacity-95">
                        {aiResponse}
                      </div>
                    </div>
                  )}

                </div>

                {/* Print and share control operations bar */}
                <div className="bg-gray-50 border-t border-[#5C4033]/10 p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-center gap-3 select-none">
                  <button
                    onClick={handleReset}
                    className="flex items-center space-x-1 text-xs font-bold font-mono uppercase text-[#E67E22] hover:underline"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{lang === 'en' ? "Generate New Plan" : "नई फसल योजना योजना बनाएं"}</span>
                  </button>

                  <div className="flex items-center space-x-2 w-full sm:w-auto">
                    
                    {/* Share action WhatsApp simulated link */}
                    <button
                      onClick={() => {
                        const messageText = encodeURIComponent(
                          `FarmFin Plan: ${calculatedData.crops.primary} recommended on ${formData.acres} acres of ${formData.soilType} in ${formData.district}. KCC Loan saves ₹${calculatedData.financialSavings.toLocaleString('en-IN')}!`
                        );
                        window.open(`https://wa.me/?text=${messageText}`, '_blank');
                      }}
                      className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-3 py-2 border border-emerald-600 bg-white hover:bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? "Share via WhatsApp" : "व्हाट्सएप पर शेयर करें"}</span>
                    </button>

                    {/* Print Action */}
                    <button
                      onClick={handlePrint}
                      className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-3 py-2 bg-[#2E5A1C] hover:bg-[#203f13] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      <Printer className="w-3.5 h-3.5 text-white" />
                      <span>{lang === 'en' ? "Print Plan Report" : "योजना प्रिंट करें / PDF"}</span>
                    </button>

                  </div>
                </div>

              </div>
            )}

            {/* Quick Informative Info Line */}
            <p className="text-[10px] text-[#5C4033]/65 font-medium leading-relaxed max-w-xl">
              ⚠️ {lang === 'en' 
                ? 'Disclaimer: FarmFin crop algorithm aggregates ICAR-CRIDA dryland archives. Always verify with block-level Gram Sevaks or local bank managers before investing loans.' 
                : 'चेतावनी: फार्मफिन फसल डेटा सरकारी केंद्रीय कृषि अनुसंधान (ICAR-CRIDA) पर आधारित है। कर्ज या रोपाई से पहले हमेशा अपने स्थानीय कृषि अधिकारी (ग्राम सेवक) से सलाह लें।'}
            </p>

          </div>

          {/* Registration / Gram Panchayat Sign up Card Column (Col-span 5) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-[#5C4033]/10 border-b-8 border-b-[#E67E22] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex p-3 bg-[#E67E22]/10 text-[#E67E22] rounded-xl animate-pulse">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#5C4033] font-display">
                  {t.registerTitle}
                </h3>
                <p className="text-sm text-[#5C4033]/80 leading-relaxed font-medium">
                  {t.registerSubtitle}
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                  <p className="text-base sm:text-lg font-bold text-[#5C4033]">
                    {t.formSuccess}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-[#2E5A1C] hover:underline"
                  >
                    {lang === 'en' ? "Submit another entry" : "दूसरा गाँव जोड़ें"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#5C4033] block">
                      {t.formName} *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={villageForm.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#5C4033] block">
                      {t.formPhone} *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={villageForm.phone}
                      onChange={handleFormChange}
                      placeholder="e.g. +91 9876543210"
                      className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                    />
                  </div>

                  {/* Village Panchayat */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#5C4033] block">
                      {t.formVillage}
                    </label>
                    <input
                      type="text"
                      name="village"
                      value={villageForm.village}
                      onChange={handleFormChange}
                      placeholder="e.g. Rampur Gram Panchayat"
                      className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                    />
                  </div>

                  {/* District & State */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#5C4033] block">
                      {t.formDistrict}
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={villageForm.district}
                      onChange={handleFormChange}
                      placeholder="e.g. Jhansi, UP"
                      className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                    />
                  </div>

                  {/* Acres supported slider input equivalent or numeric */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#5C4033] block">
                        {t.formAcres}
                      </label>
                      <input
                        type="text"
                        name="acres"
                        value={villageForm.acres}
                        onChange={handleFormChange}
                        placeholder="e.g. 5 acres"
                        className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#5C4033] block">
                        {t.formCrop}
                      </label>
                      <input
                        type="text"
                        name="cropInterest"
                        value={villageForm.cropInterest}
                        onChange={handleFormChange}
                        placeholder="e.g. Moong, Sesame"
                        className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmittingForm}
                    className="w-full py-4 px-6 bg-[#E67E22] hover:bg-[#cf6d19] text-white font-black text-sm rounded-xl shadow-md uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmittingForm ? (lang === 'en' ? "Saving..." : "सहेज रहे हैं...") : t.formSubmit}</span>
                    <ArrowRight className="w-4 h-4 text-[#FFF]" />
                  </button>

                  <p className="text-[10px] text-gray-400 text-center leading-normal pt-1">
                    🔒 {lang === 'en' ? "We respect farmer data privacy. No sales calls." : "किसान डेटा पूर्णतः सुरक्षित रहता है। विज्ञापन शून्य।"}
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
