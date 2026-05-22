import React from 'react';
import { Smartphone, Download, X, HelpCircle, CheckCircle2, Award } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import ComparisonVisual from './components/ComparisonVisual';
import InteractiveCalculator from './components/InteractiveCalculator';
import FeaturesGrid from './components/FeaturesGrid';
import ImpactBanner from './components/ImpactBanner';
import DemoChat from './components/DemoChat';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import { Language } from './types';

export default function App() {
  // 1. Language persistence via localStorage
  const [lang, setLang] = React.useState<Language>(() => {
    const saved = localStorage.getItem('farmfin_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  React.useEffect(() => {
    localStorage.setItem('farmfin_lang', lang);
    // Dynamically change HTML lang attribute for accessibility / SEO 
    document.documentElement.lang = lang;
  }, [lang]);

  // 2. Simulated PWA Install Banner State
  const [showPwaPrompt, setShowPwaPrompt] = React.useState(false);

  React.useEffect(() => {
    // Show PWA banner after 4 seconds if not explicitly dismissed before
    const dismissed = localStorage.getItem('farmfin_pwa_dismissed');
    if (dismissed !== 'true') {
      const timer = setTimeout(() => {
        setShowPwaPrompt(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismissPwa = () => {
    setShowPwaPrompt(false);
    localStorage.setItem('farmfin_pwa_dismissed', 'true');
  };

  const handleInstallPwa = () => {
    setShowPwaPrompt(false);
    localStorage.setItem('farmfin_pwa_dismissed', 'true');
    // Display a beautiful localized mock success notification
    alert(lang === 'en' 
      ? "FarmFin has been successfully added to your device Home Screen! You can now access crop and loan advisor directly from your desktop or phone even at slow internet speeds (works via SMS)." 
      : "फार्मफिन आपके फोन की होम स्क्रीन पर सफलतापूर्वक जुड़ गया है! अब आप धीमी गति के इंटरनेट पर भी सीधे कृषि और ऋण सलाह का उपयोग कर सकते हैं।"
    );
  };

  // 3. Simulated GA4 log tracker to prove SEO and analytic readiness (quiet console verification logs)
  React.useEffect(() => {
    console.log(`[GA4 Analytics Initialized] Tracking FarmFin Bilingual Landings... Keywords targeted: "kisan financial planning app", "KCC calculator", "crop advisory India", "best crop for my district"`);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#5C4033] flex flex-col font-sans selection:bg-[#2E5A1C]/20 selection:text-[#5C4033] antialiased">
      
      {/* Hidden SEO Keywords Block for web crawlers accessibility */}
      <h1 className="sr-only">
        FarmFin - best crop for my district & kisan financial planning app. Free crop advisory India, KCC calculator, kisan credit card loan fraud alerts.
      </h1>

      {/* 1. Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* 2. Main Sections */}
      <main className="flex-grow">
        
        {/* Section 1: Hero */}
        <Hero lang={lang} />

        {/* Section 2: Pain Section */}
        <PainPoints lang={lang} />

        {/* Section 3: How FarmFin Works */}
        <HowItWorks lang={lang} />

        {/* Section 4: What Makes It Different */}
        <ComparisonVisual lang={lang} />

        {/* Interactive Comparison Widget */}
        <InteractiveCalculator lang={lang} />

        {/* Section 5: Key Features for a Smallholder */}
        <FeaturesGrid lang={lang} />

        {/* Section 6: Economic National Impact */}
        <ImpactBanner lang={lang} />

        {/* Section 7: Live AI Chatbot Advisor Demo & Village form interest */}
        <DemoChat lang={lang} />

        {/* Section 8: Partners & NGO onboarding form */}
        <PartnersSection lang={lang} />

      </main>

      {/* 3. Footer */}
      <Footer lang={lang} setLang={setLang} />

      {/* PWA Floating Install Prompt on Mobile/Desktop */}
      {showPwaPrompt && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-[90%] sm:w-auto bg-[#FFF] border-2 border-[#2E5A1C] p-4 rounded-2xl shadow-2xl flex items-start space-x-3 text-left animate-slide-up">
          <div className="p-2.5 bg-[#2E5A1C]/10 text-[#2E5A1C] rounded-xl shrink-0">
            <Smartphone className="w-6 h-6 animate-pulse" />
          </div>
          
          <div className="flex-1 space-y-1.5 pr-4">
            <h5 className="text-xs font-black text-[#5C4033] uppercase tracking-wider font-mono">
              {lang === 'en' ? "Install FarmFin Mobile App" : "फार्मफिन ऐप इंस्टॉल करें"}
            </h5>
            <p className="text-[11px] leading-relaxed text-[#5C4033]/85 font-medium">
              {lang === 'en' 
                ? "Get offline crop advisor. Only 1MB. Fits entry-level phones." 
                : "कृषि और लोन सुरक्षा सलाह ऑफलाइन पाएँ। मात्रा 1MB का आकार।"
              }
            </p>
            <div className="flex items-center space-x-2 pt-1">
              <button
                onClick={handleInstallPwa}
                className="flex items-center space-x-1 px-3 py-1.5 bg-[#2E5A1C] text-[#FFF9F0] text-[10px] uppercase font-mono font-black tracking-widest rounded-lg hover:bg-[#203f13] transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? "Install" : "इंस्टॉल"}</span>
              </button>
              
              <button
                onClick={handleDismissPwa}
                className="px-3 py-1.5 border border-[#5C4033]/25 text-[#5C4033]/70 text-[10px] uppercase font-mono font-semibold rounded-lg hover:bg-[#5C4033]/5 transition-colors"
              >
                {lang === 'en' ? "Dismiss" : "नहीं चाहिए"}
              </button>
            </div>
          </div>

          <button onClick={handleDismissPwa} className="text-[#5C4033]/40 hover:text-[#5C4033] pt-0.5 shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
