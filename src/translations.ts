import { Language } from './types';

export const translations: Record<Language, any> = {
  en: {
    nav: {
      brand: "FarmFin",
      features: "Features",
      howItWorks: "How It Works",
      comparison: "Why FarmFin",
      demo: "Try Demo",
      partners: "For Partners",
      cta: "Join Waitlist"
    },
    hero: {
      tagline: "What to plant? How to manage money? Now get answers in one place.",
      hindiTagline: "Kya boni karein? Paise kaise sambhalein? Ab ek hi jagah jawab milega.",
      subheadline: "The first bilingual advisor for India’s smallholder farmers that combines crop science with smart money planning — like a wise friend on your phone.",
      demoCta: "Try Advisor Planner",
      partnerCta: "For NGOs & Partners",
      trustBadge: "Built with district-level data from Govt of India"
    },
    pain: {
      title: "You face two unknowns every season",
      subtitle: "Traditional tools treat farming and money separately. We unite them.",
      card1: {
        title: "Agronomic Uncertainty",
        desc: "Which crop will actually grow well in my district this season? I can't afford to guess wrong."
      },
      card2: {
        title: "Financial Uncertainty",
        desc: "Even if I earn, how do I stretch ₹80,000 a year? How do I know if a loan is safe or a trap?"
      },
      footer: "No tool today solves both. Farmers are forced to juggle separate apps, radio tips, or middlemen advice. FarmFin changes that."
    },
    howItWorks: {
      title: "Like chatting on SMS, but smarter",
      subtitle: "No complex dashboards. Just simple, conversation-based planning tailored to your exact boundaries.",
      step1: {
        num: "01",
        title: "Tell us about your land",
        desc: "Enter your land size, soil type, district, and season through simple voice or text commands."
      },
      step2: {
        num: "02",
        title: "Get a crop plan",
        desc: "Discover the best crops for your zone, risk scores, and planting windows derived from verified soil-climatic records."
      },
      step3: {
        num: "03",
        title: "Get your money plan",
        desc: "Learn to budget, manage Kisan Credit Card (KCC) loans, and spot predatory interest rates or fraudulent local investment traps."
      },
      mockupHeader: "FarmFin Chat Support",
      mockupSub: "Active on Web/SMS",
      mockupUser: "Mere paas 1.5 acre, loamy soil, Jhansi, Kharif. Kya lagau?",
      mockupBot: "Aapke liye moong (greengram) aur til (sesame) sabase safe hain. Baarish 80% probability, expected return ₹22k-28k per acre. Chaahiye vistaar mein sujhaav?"
    },
    difference: {
      title: "Nobody in Indian agritech fuses these two worlds",
      subtitle: "We merge precision agriculture with micro-level household economics.",
      left: {
        title: "Crop Advisory Apps",
        items: [
          "Generic weather updates",
          "Mandi prices (after harvest)",
          "No financial planning advice",
          "Lacks cost-to-repay warnings"
        ]
      },
      right: {
        title: "Generic Finance Apps",
        items: [
          "Complex expense charts",
          "Tailored for urban salaries",
          "No understanding of crop cycles",
          "Assumes constant monthly cashflows"
        ]
      },
      center: {
        title: "The FarmFin Fusion",
        desc: "Precision agriculture data + behavioral finance, served in a simple chat. No complicated dashboards. Secure, on-server calculations prevent AI hallucinations."
      }
    },
    calculator: {
      title: "Interact: Loan Cost Visualizer",
      subtitle: "Indian farmers often borrow from informal moneylenders because it's fast. See how much of your hard labor is taken when you pick predatory rates over a Kisan Credit Card (KCC) loan.",
      amountLabel: "Loan Amount (Principal):",
      tenureLabel: "Repayment Period (Months):",
      kccName: "KCC (Govt Subsidy Rate)",
      lenderName: "Local Moneylender Rate",
      trueCost: "Total Repayment Cost",
      interestPaid: "Interest Component",
      differenceMessage: "By choosing a subsidized KCC loan, you save {saved} — that is equivalent to a full month of average rural household income!",
      warningText: "⚠️ local moneylenders charge hidden high daily/monthly interest. FarmFin teaches farmers to calculate the annual percentage rate (APR) to avoid bankruptcy.",
      compareBtn: "Save calculation in FarmFin Chat"
    },
    features: {
      title: "Key Features for a Smallholder",
      subtitle: "Everything a marginal farming family needs to survive and thrive on ₹80,000/year.",
      suitability: {
        title: "Crop Suitability Engine",
        desc: "Based on real soil-climatic parameters of your sub-district, not generic regional tips."
      },
      kccCalculator: {
        title: "KCC vs Moneylender Compare",
        desc: "Instant text-friendly calculation of true compound repayment costs to help avoid debt traps."
      },
      ponziAlerts: {
        title: "Ponzi Red Flags",
        desc: "Simple alerts and safety checklists in regional languages to avoid high-yield investment scams."
      },
      incomeStagger: {
        title: "Income Staggering Assistant",
        desc: "Turn one-time crop earnings into a reliable continuous monthly food and education safety net."
      },
      smsStyle: {
        title: "SMS & WhatsApp Friendly",
        desc: "Optimized to work flawlessly on entry-level ₹5,000 Android phones and via WhatsApp."
      },
      secureMath: {
        title: "On-Server Math Guard",
        desc: "Strict logical checkers guarantee that financial rates and crop formulas NEVER suffer from GPT text hallucination."
      }
    },
    impact: {
      title: "120 million smallholder families. Even 1% change is billions.",
      tagline: "When a farmer avoids one bad loan and picks one right crop, a family’s entire trajectory shifts.",
      stat1: {
        num: "120M+",
        label: "Smallholder Farmers in India"
      },
      stat2: {
        num: "₹1L Cr+",
        label: "Predatory lending interest drained yearly"
      },
      stat3: {
        num: "30-40%",
        label: "Potential income increase with crop-finance plans"
      }
    },
    demo: {
      title: "Try talking to FarmFin",
      subtitle: "Interact below to test our bilingual advisory. Enter land details or budget questions.",
      inputPlaceholder: "Ask FarmFin (e.g., '1 acre loamy soil Jhansi Kharif' or 'KCC rate vs moneylender')",
      registerTitle: "Want full access for your village/FPO?",
      registerSubtitle: "Register your interest today to bring FarmFin to your Gram Panchayat or Farmers Producers Organization.",
      formName: "Your Full Name",
      formPhone: "Mobile Number (WhatsApp)",
      formVillage: "Village / Gram Panchayat",
      formDistrict: "District & State",
      formAcres: "Estimated Acres Supported",
      formCrop: "Primary Crops Grown",
      formSuccess: "Dhanyawad! We have recorded your interest. Our representative will contact you on WhatsApp soon.",
      formSubmit: "Register Village Interest",
      connecting: "Connecting with FarmFin AI Advisor..."
    },
    partners: {
      title: "Scale Impact with NGOs, Rural Banks & FPOs",
      subtitle: "FarmFin works with institutions to co-brand, distribute, and track local prosperity indexes safely.",
      featureList: [
        "Co-branded web & SMS interfaces for your members",
        "Configurable crop databases curated for regional topography",
        "Anonymized local economic indicators & success reports",
        "Bulk registration and paper-free offline workshop boarding tool"
      ],
      formTitle: "partner with us",
      formName: "Contact Person Name",
      formOrg: "Organization Name",
      formEmail: "Work Email Address",
      formPhone: "Mobile Number",
      formRole: "Organization Type",
      roleNgo: "Impact NGO / Non-profit",
      roleFpo: "Farmer Producer Org (FPO)",
      roleGovt: "Government Department",
      roleInvestor: "Impact Investor / Agritech Fund",
      roleOther: "Other",
      formMsg: "Tell us about your farmer network",
      formSubmit: "Book Co-Branded Demo",
      formSuccess: "Thank choosing FarmFin! Our Partnership Lead will email you within 24 hours."
    },
    footer: {
      tagline: "FarmFin – Sowing Smarts, Growing Security.",
      proud: "Proudly built to enable India's marginal farming families.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact Support"
    }
  },
  hi: {
    nav: {
      brand: "फार्मफिन (FarmFin)",
      features: "मुख्य विशेषताएँ",
      howItWorks: "यह कैसे काम करता है",
      comparison: "फार्मफिन क्यों?",
      demo: "डेमो आजमाएं",
      partners: "सहयोगियों के लिए",
      cta: "सूची में जुड़ें"
    },
    hero: {
      tagline: "क्या बोनी करें? पैसे कैसे संभालें? अब एक ही जगह जवाब मिलेगा।",
      hindiTagline: "क्या बोनी करें? पैसे कैसे संभालें? अब एक ही जगह जवाब मिलेगा।",
      subheadline: "भारत के छोटे किसानों के लिए पहला द्विभाषी सलाहकार जो फसल विज्ञान और स्मार्ट वित्तीय योजना को जोड़ता है — आपके फोन पर एक जानकार मित्र की तरह।",
      demoCta: "सुरक्षा योजना शुरू करें",
      partnerCta: "एनजीओ और पार्टनर के लिए",
      trustBadge: "भारत सरकार के जिला-स्तरीय आंकड़ों के साथ निर्मित"
    },
    pain: {
      title: "हर सीजन में आपके सामने दो अज्ञात चुनौतियाँ होती हैं",
      subtitle: "पारंपरिक साधन खेती और पैसों से जुड़े फैसलों को अलग-अलग रखते हैं। हम उन्हें जोड़ते हैं।",
      card1: {
        title: "कृषि विज्ञान सम्बन्धी अनिश्चितता",
        desc: "इस सीजन में मेरे जिले में कौन सी फसल वास्तव में अच्छी उगेगी? मैं गलत अनुमान लगाने का जोखिम नहीं उठा सकता।"
      },
      card2: {
        title: "वित्तीय अनिश्चितता",
        desc: "भले ही मैं कमा लूं, साल के ₹80,000 को कैसे चलाऊं? मुझे कैसे पता चलेगा कि कोई कर्ज सुरक्षित है या फंदा?"
      },
      footer: "आज कोई भी टूल दोनों को एक साथ हल नहीं करता। किसानों को अलग-अलग ऐप्स, रेडियो टिप्स या बिचौलियों की सलाह पर निर्भर रहना पड़ता है। फार्मफिन इसे बदलता है।"
    },
    howItWorks: {
      title: "एसएमएस पर चैट करने जैसा, लेकिन अधिक समझदार",
      subtitle: "कोई जटिल डैशबोर्ड नहीं। आपके क्षेत्र के अनुरूप सरल, बातचीत-आधारित योजना।",
      step1: {
        num: "०१",
        title: "हमें अपनी जमीन के बारे में बताएं",
        desc: "सरल वॉयस या टेक्स्ट निर्देशों के माध्यम से अपनी जमीन का आकार, मिट्टी का प्रकार, जिला और सीजन दर्ज करें।"
      },
      step2: {
        num: "०२",
        title: "फसल योजना प्राप्त करें",
        desc: "सत्यापित मिट्टी-जलवायु आंकड़ों से तैयार अपनी मिट्टी के क्षेत्र के लिए सबसे बेहतरीन फसलें, रिस्क स्कोर और बोने का उचित समय जानें।"
      },
      step3: {
        num: "०३",
        title: "पैसों की बचत और सुरक्षा योजना पाएं",
        desc: "बजट बनाना, किसान क्रेडिट कार्ड (KCC) ऋणों को संभालना और ऊंची ब्याज दरों वाली धोखेबाज निवेश योजनाओं को पहचानना सीखें।"
      },
      mockupHeader: "फार्मफिन चैट सहायता",
      mockupSub: "वेब और एसएमएस पर लाइव",
      mockupUser: "मेरे पास 1.5 acre, loamy soil, Jhansi, Kharif. Kya lagau?",
      mockupBot: "आपके लिए मूंग (greengram) और तिल (sesame) सबसे सुरक्षित हैं। बारिश की संभावना 80%, संभावित मुनाफा ₹22k-28k प्रति एकड़। क्या आप विस्तार में सुझाव चाहते हैं?"
    },
    difference: {
      title: "भारतीय एग्रीटेक में कोई भी इन दो दुनियाओं को नहीं मिलाता",
      subtitle: "हम कृषि विज्ञान के आंकड़ों को किसान परिवार के घरेलू बजट के साथ जोड़ते हैं।",
      left: {
        title: "फसल सलाह ऐप्स",
        items: [
          "सामान्य मौसम अपडेट",
          "मंडी भाव (फसल कटने के बाद)",
          "कोई वित्तीय योजना सलाह नहीं",
          "ब्याज और चुकाने की कोई चेतावनी नहीं"
        ]
      },
      right: {
        title: "सामान्य फाइनेंस ऐप्स",
        items: [
          "जटिल खर्चे के चार्ट",
          "शहरी वेतनभोगी लोगों के लिए बने",
          "फसल चक्र की कोई समझ नहीं",
          "समान मासिक आय मानकर चलते हैं"
        ]
      },
      center: {
        title: "फार्मफिन का संगम",
        desc: "सटीक कृषि आंकड़े + व्यावहारिक वित्त सलाह, एक सरल चैट में उपलब्ध। कोई जटिल डैशबोर्ड नहीं। सर्वर पर सुरक्षित गणना की जाती है जिससे गलतियों का कोई जोखिम नहीं।"
      }
    },
    calculator: {
      title: "ब्याज दर कैलकुलेटर",
      subtitle: "भारतीय किसान अक्सर अनौपचारिक साहूकारों या साहूकारों से कर्ज लेते हैं क्योंकि यह बहुत ही जल्दी मिल जाता है। देखें कि जब आप किसान क्रेडिट कार्ड (KCC) के बजाय साहूकार दरें चुनते हैं तो आपकी कितनी मेहनत की कमाई ब्याज में चली जाती है।",
      amountLabel: "ऋण राशि (मूलधन):",
      tenureLabel: "चुकाने की अवधि (महीने):",
      kccName: "KCC आसान ऋण (सरकारी छूट दर)",
      lenderName: "स्थानीय साहूकार / साहूकार दर",
      trueCost: "कुल चुकाने की लागत",
      interestPaid: "कुल चुकाया गया ब्याज",
      differenceMessage: "रियायती KCC ऋण चुनकर, आप {saved} बचा सकते हैं — जो कि एक ग्रामीण परिवार की पूरी महीने की औसत आय के बराबर है!",
      warningText: "⚠️ स्थानीय साहूकार बहुत अधिक ब्याज लेते हैं। फार्मफिन किसानों को ब्याज दरों की सही गणना सिखाता है ताकि वे कर्ज के जाल से बच सकें।",
      compareBtn: "यह गणना चैट में सहेजें"
    },
    features: {
      title: "एक छोटे किसान के लिए मुख्य सुविधाएँ",
      subtitle: "साल की ₹80,000 आय पर अपने परिवार को सुरक्षित रखने और आगे बढ़ने के लिए जरूरी टूल्स।",
      suitability: {
        title: "मिट्टी-अनुकूल फसल इंजन",
        desc: "आपके विशिष्ट क्षेत्र की मिट्टी और जलवायु पर आधारित सटीक जानकारी, न कि कोई हवा-हवाई सामान्य सलाह।"
      },
      kccCalculator: {
        title: "KCC बनाम साहूकार तुलना",
        desc: "ऋण की वास्तविक चुकाने योग्य राशि और चक्रवृद्धि ब्याज की तुरंत सीधी तुलना, ताकि आप कर्ज के चंगुल से दूर रहें।"
      },
      ponziAlerts: {
        title: "पोंजी/धोखाधड़ी चेतावनी",
        desc: "अत्यधिक मुनाफे का लालच देने वाली नकली योजनाओं से सावधान करने के लिए स्थानीय भाषाओं में सरल सुरक्षा सूचियां और अलर्ट।"
      },
      incomeStagger: {
        title: "आमदनी वितरण सहायक",
        desc: "फसल बेचने के बाद एक ही बार मिलने वाले पैसे को पूरे साल के राशन, बच्चों की शिक्षा की जरूरतों में मासिक बांटने की योजना।"
      },
      smsStyle: {
        title: "एसएमएस और व्हाट्सएप समर्थन",
        desc: "₹5,000 कीमत वाले मामूली एंड्रॉइड फोन और व्हाट्सएप पर भी बिना किसी अड़चन के तेजी से काम करने के लिए अनुकूलित।"
      },
      secureMath: {
        title: "सुरक्षित सर्वर गणना",
        desc: "सख्त और सुरक्षित नियम सुनिश्चित करते हैं कि ऋण दरों और फसल की योजना सूत्रों में AI द्वारा की जाने वाली गणना हमेशा 100% सही हो।"
      }
    },
    impact: {
      title: "12 करोड़ किसान परिवार। केवल 1% बदलाव भी अरबों का मूल्य लाएगा।",
      tagline: "जब एक किसान एक बुरे कर्ज से बच जाता है और सही फसल का चयन करता है, तो पूरे परिवार का पूरा जीवन बदल जाता है।",
      stat1: {
        num: "12 करोड़+",
        label: "भारत के लघु और सीमांत किसान"
      },
      stat2: {
        num: "₹1L करोड़+",
        label: "साहूकारी कर्ज के ब्याज में दबे किसान परिवारों का पैसा"
      },
      stat3: {
        num: "30-40%",
        label: "फसल और वित्त योजना से किसान की आय में वृद्धि संभव"
      }
    },
    demo: {
      title: "फार्मफिन सलाहकार से बात करके देखें",
      subtitle: "नीचे चैट में हमारे द्विभाषी सलाहकार का लाइव डेमो आजमाएं। अपनी जमीन का विवरण या ब्याज का सवाल पूछें।",
      inputPlaceholder: "फार्मफिन से पूछें (उदा. '1 acre loamy soil Jhansi Kharif' या 'KCC rate kya hai')",
      registerTitle: "क्या आप अपने गाँव या FPO के लिए पूर्ण पहुँच चाहते हैं?",
      registerSubtitle: "अपने गाँव, ग्राम पंचायत या किसान उत्पादक संगठन (FPO) में फार्मफिन लाने के लिए यहाँ अपनी रुचि दर्ज करें।",
      formName: "आपका पूरा नाम",
      formPhone: "मोबाइल नंबर (व्हाट्सएप)",
      formVillage: "गाँव / ग्राम पंचायत का नाम",
      formDistrict: "जिला और राज्य",
      formAcres: "कुल अनुमानित जमीन (एकड़ में)",
      formCrop: "मुख्य फसलें जो आप उगाते हैं",
      formSuccess: "धन्यवाद! हमने आपका विवरण सहेज लिया है। हमारे प्रतिनिधि जल्द ही आपसे व्हाट्सएप पर संपर्क करेंगे।",
      formSubmit: "गाँव की रुचि दर्ज करें",
      connecting: "फार्मफिन AI सलाहकार से जुड़ रहे हैं..."
    },
    partners: {
      title: "स्वयंसेवी संस्थाओं (NGOs), ग्रामीण बैंकों और FPOs के लिए",
      subtitle: "फार्मफिन संस्थाओं के साथ जुड़कर उनके किसान नेटवर्क के लिए सह-ब्रांडेड (Co-brand) समाधान प्रदान करता है।",
      featureList: [
        "आपके किसानों के लिए सह-ब्रांडेड वॉयस, वेब और एसएमएस इंटरफेस",
        "स्थानीय स्थलाकृति और कृषि विभाग के अनुकूल विशेष फसल डेटाबेस",
        "अनाम स्थानीय आर्थिक प्रगति सूचकांक और प्रभाव रिपोर्ट",
        "सामूहिक किसान पंजीकरण और आसान ऑफ़लाइन कार्यशाला ऑनबोर्डिंग टूल"
      ],
      formTitle: "हमारे साथ साझेदारी करें",
      formName: "संपर्क व्यक्ति का नाम",
      formOrg: "संस्था (NGO/FPO) का नाम",
      formEmail: "ईमेल एड्रेस",
      formPhone: "मोबाइल नंबर",
      formRole: "संस्था का प्रकार",
      roleNgo: "स्वयंसेवी संस्था (NGO)",
      roleFpo: "किसान उत्पादक संगठन (FPO)",
      roleGovt: "कृषि विभाग / सरकारी एजेंसी",
      roleInvestor: "इम्पैक्ट इन्वेस्टर / एग्रीटेक फंड",
      roleOther: "अन्य संगठन",
      formMsg: "अपने किसान नेटवर्क के बारे में हमें बताएं",
      formSubmit: "सह-ब्रांडेड डेमो बुक करें",
      formSuccess: "फार्मफिन को चुनने के लिए धन्यवाद! हमारी टीम 24 घंटों के भीतर आपसे सीधे संपर्क करेगी।"
    },
    footer: {
      tagline: "फार्मफिन – बोनी समझदार, सुरक्षा दमदार।",
      proud: "भारत के सीमांत और छोटे किसान परिवारों को सशक्त बनाने के लिए समर्पित।",
      privacy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें",
      contact: "सहायता केंद्र"
    }
  }
};
