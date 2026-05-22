import { Phone, CheckCircle2, User, HelpCircle, Smartphone, Send, Landmark } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HowItWorksProps {
  lang: Language;
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const t = translations[lang].howItWorks;

  return (
    <section id="how-it-works" className="py-24 bg-[#FFF9F0] border-b border-[#5C4033]/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[#2E5A1C] text-xs font-bold tracking-widest uppercase font-mono bg-[#2E5A1C]/10 px-4 py-1.5 rounded-full">
            {lang === 'en' ? "Simplicity First" : "विश्वास और सरलता"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#5C4033] tracking-tight font-display">
            {t.title}
          </h2>
          <p className="text-lg text-[#5C4033]/80 font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Steps + Phone Mockup Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 3 Step Walkthrough */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Step 1 */}
            <div className="flex items-start space-x-5 group">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#2E5A1C]/10 text-[#2E5A1C] text-lg font-black font-mono transition-transform duration-300 group-hover:scale-110">
                {t.step1.num}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#5C4033] group-hover:text-[#2E5A1C] transition-colors font-display">
                  {t.step1.title}
                </h3>
                <p className="text-[#5C4033]/85 text-sm sm:text-base leading-relaxed">
                  {t.step1.desc}
                </p>
                <p className="text-xs font-mono font-bold text-[#E67E22] pt-1">
                  {lang === 'en' ? "Examples: soil type, rainfall, crop cycles" : "जैसे: काली या रेतीली मिट्टी, जिला, सीजन"}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-5 group">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#E67E22]/10 text-[#E67E22] text-lg font-black font-mono transition-transform duration-300 group-hover:scale-110">
                {t.step2.num}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#5C4033] group-hover:text-[#E67E22] transition-colors font-display">
                  {t.step2.title}
                </h3>
                <p className="text-[#5C4033]/85 text-sm sm:text-base leading-relaxed">
                  {t.step2.desc}
                </p>
                <p className="text-xs font-mono font-bold text-[#2E5A1C] pt-1">
                  {lang === 'en' ? "Backed by true soil-climatic district lookup" : "विश्वसनीय जिला-स्तरीय वैज्ञानिक आंकड़ों पर आधारित"}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-5 group">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#1E4D8C]/10 text-[#1E4D8C] text-lg font-black font-mono transition-transform duration-300 group-hover:scale-110">
                {t.step3.num}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#5C4033] group-hover:text-[#1E4D8C] transition-colors font-display">
                  {t.step3.title}
                </h3>
                <p className="text-[#5C4033]/85 text-sm sm:text-base leading-relaxed">
                  {t.step3.desc}
                </p>
                <p className="text-xs font-mono font-bold text-[#1E4D8C] pt-1">
                  {lang === 'en' ? "Includes predatory interest alarm warnings & Ponzi filters" : "साहूकार का ब्याज चक्र एवं धोखाधड़ी से बचने के नुस्खे"}
                </p>
              </div>
            </div>

          </div>

          {/* Chat Mockup Smartphone */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] bg-[#5C4033] p-3 rounded-[40px] shadow-2xl border-4 border-[#5C4033]/30">
              
              {/* Speaker & camera slot */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#5C4033] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-[#FFF]/20 rounded-full" />
                <div className="w-2.5 h-2.5 bg-[#FFF]/20 rounded-full ml-3" />
              </div>

              {/* Inner screen content */}
              <div className="relative bg-[#FFF9F0] rounded-[32px] overflow-hidden border border-[#5C4033]/20 pt-8 pb-4 flex flex-col h-[520px]">
                
                {/* Simulated Header */}
                <div className="bg-[#2E5A1C] text-[#FFF9F0] p-4 flex items-center space-x-3 shadow-md">
                  <div className="w-9 h-9 rounded-full bg-[#FFF9F0] text-[#2E5A1C] flex items-center justify-center font-black">
                    🌾
                  </div>
                  <div className="leading-tight">
                    <p className="text-xs font-bold">{t.mockupHeader}</p>
                    <p className="text-[10px] text-[#F4B41A]/90 font-mono font-bold">{t.mockupSub}</p>
                  </div>
                </div>

                {/* Simulated Chat Window list */}
                <div className="flex-1 p-3 overflow-y-auto space-y-4 text-xs font-medium scrollbar-thin">
                  
                  {/* System Greeting */}
                  <div className="max-w-[85%] bg-white border border-[#5C4033]/10 p-2.5 rounded-2xl text-left text-[#5C4033] shadow-sm">
                    <p className="text-[9px] uppercase tracking-wider text-[#2E5A1C] font-black font-mono">
                      FarmFin AI
                    </p>
                    <p className="mt-1 leading-relaxed text-[#5C4033]/90">
                      {lang === 'en' 
                        ? "Hello! I help you pick safe crops and avoid interest traps. Ask me anything!"
                        : "नमस्कार! मैं आपको सही फसल चुनने और कर्ज जाल से बचने में मदद करता हूँ।"}
                    </p>
                  </div>

                  {/* User message */}
                  <div className="flex flex-col items-end space-y-1">
                    <div className="max-w-[85%] bg-[#FFEBCD] p-2.5 rounded-2xl text-left text-[#5C4033] border border-[#5C4033]/5 shadow-sm">
                      <p className="text-[8px] text-right font-bold text-[#E67E22] uppercase tracking-widest font-mono">
                        {lang === 'en' ? "Farmer (You)" : "किसान (आप)"}
                      </p>
                      <p className="mt-1 leading-relaxed text-[#5C4033]">
                        {t.mockupUser}
                      </p>
                    </div>
                  </div>

                  {/* Bot reply */}
                  <div className="max-w-[85%] bg-white border-l-4 border-l-[#2E5A1C] border border-[#5C4033]/10 p-2.5 rounded-2xl text-left text-[#5C4033] shadow-xs">
                    <p className="text-[9px] uppercase tracking-wider text-[#2E5A1C] font-black font-mono">
                      FarmFin AI
                    </p>
                    <p className="mt-1 leading-relaxed text-[#5C4033]/90">
                      {t.mockupBot}
                    </p>
                  </div>

                </div>

                {/* Simulated footer input */}
                <div className="border-t border-[#5C4033]/10 p-2 bg-white flex items-center justify-between">
                  <div className="text-[10px] text-gray-400 pl-2">
                    {lang === 'en' ? "Type answer..." : "उत्तर लिखें..."}
                  </div>
                  <div className="p-2 bg-[#2E5A1C] text-[#FFF9F0] rounded-full">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
