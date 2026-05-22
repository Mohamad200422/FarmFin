import { ArrowRight, Sparkles, Coins, Leaf, Shield, UserCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FFF9F0] pt-12 pb-24 md:py-32 border-b border-[#5C4033]/10">
      
      {/* Dynamic Background Sun glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4B41A]/10 rounded-full blur-3xl -mr-48 -mt-24 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2E5A1C]/5 rounded-full blur-3xl -ml-40 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            
            {/* Government trust badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#2E5A1C]/10 border border-[#2E5A1C]/20 shadow-sm animate-fade-in">
              <Shield className="w-4 h-4 text-[#2E5A1C]" />
              <p className="text-xs font-bold text-[#2E5A1C] uppercase tracking-wide font-mono">
                {t.trustBadge}
              </p>
            </div>

            {/* Tagline Stack */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#5C4033] tracking-tight leading-[1.1] font-display">
                <span className="block italic text-[#E67E22] text-3xl sm:text-4xl lg:text-5xl mb-2 font-normal">
                  “{t.hindiTagline}”
                </span>
                <span className="block text-[#2E5A1C]">
                  {lang === 'en' ? "What to plant? How to manage money?" : "फसल का निर्णय और पैसों की सुरक्षा"}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#5C4033]/85 max-w-2xl font-sans font-medium !leading-relaxed pt-2">
                {t.subheadline}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch gap-4">
              <button
                onClick={() => scrollTo('demo')}
                className="group flex items-center justify-center space-x-3.5 px-8 py-4.5 bg-[#2E5A1C] text-[#FFF9F0] text-base font-extrabold rounded-2xl shadow-xl hover:bg-[#203f13] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>{t.demoCta}</span>
                <ArrowRight className="w-5 h-5 text-[#F4B41A] group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollTo('partners')}
                className="flex items-center justify-center space-x-2 px-8 py-4.5 bg-transparent border-2 border-[#5C4033]/30 text-[#5C4033] text-base font-bold rounded-2xl hover:bg-[#5C4033]/5 transition-all duration-300"
              >
                <span>{t.partnerCta}</span>
              </button>
            </div>

            {/* Little micro-proof indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-[#5C4033]/15 w-full">
              <div className="flex items-center space-x-2">
                <UserCheck className="w-5 h-5 text-[#E67E22]" />
                <span className="text-xs text-[#5C4033]/70 font-mono font-bold">Bilingual: EN / हिन्दी</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#F4B41A]" />
                <span className="text-xs text-[#5C4033]/70 font-mono font-bold">Works via SMS/Web</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coins className="w-5 h-5 text-[#1E4D8C]" />
                <span className="text-xs text-[#5C4033]/70 font-mono font-bold">100% Secure Server Logic</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase (Smiling Farmer Sketch Portrait illustration layout) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            {/* Background Solar Sun circle glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#F4B41A] rounded-full opacity-10 blur-xl animate-pulse" />

            <div className="relative bg-white p-8 rounded-3xl border border-[#5C4033]/10 border-b-8 border-b-[#2E5A1C] shadow-2xl max-w-sm w-full relative z-10 overflow-hidden group">
              
              {/* Floating element 1: Wheat seedling */}
              <div className="absolute top-6 left-6 p-2.5 bg-[#2E5A1C] text-[#FFF9F0] rounded-2xl shadow-lg -rotate-12 animate-bounce">
                <Leaf className="w-6 h-6" />
              </div>

              {/* Floating element 2: Rupee Coin */}
              <div className="absolute bottom-16 right-6 p-2.5 bg-[#F4B41A] text-[#5C4033] rounded-2xl shadow-lg rotate-12 transition-transform duration-500 hover:rotate-45">
                <span className="text-lg font-black">₹</span>
              </div>

              {/* Central Vector Symbolism of smiling farmer looking at phone */}
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
                
                {/* Visual Avatar frame */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-[#2E5A1C] bg-[#FFF9F0] flex items-center justify-center overflow-hidden shadow-inner">
                    <span className="text-5xl text-[#5C4033] font-black">🌾</span>
                  </div>
                  <div className="absolute bottom-0 right-0 p-1.5 bg-[#2E5A1C] text-[#FFF9F0] rounded-full border-2 border-[#FFF9F0]">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#5C4033]">{lang === 'en' ? "Ramesh Patel" : "रमेश पटेल"}</h3>
                  <p className="text-xs text-[#2E5A1C] font-semibold tracking-wider font-mono uppercase bg-[#2E5A1C]/10 px-3 py-1 rounded-full">
                    {lang === 'en' ? "Jhansi, Uttar Pradesh" : "झाँसी, उत्तर प्रदेश"}
                  </p>
                </div>

                {/* Simulated simple text advice preview bubble */}
                <div className="w-full bg-[#FFF] p-4 rounded-2xl border border-[#5C4033]/10 text-left space-y-2 max-w-xs shadow-md">
                  <p className="text-[10px] font-bold text-[#E67E22] uppercase tracking-wider font-mono">
                    {lang === 'en' ? "FarmFin Message" : "फार्मफिन का संदेश"}
                  </p>
                  <p className="text-xs leading-relaxed text-[#5C4033] italic">
                    {lang === 'en' 
                      ? "“Since your soil is sandy loamy, sowing Moong crop is highly safe. Expected rainfall: 82% normal.”"
                      : "“चूंकि आपकी मिट्टी रेतीली दोमट है, मूंग की बोनी सुरक्षित है। संभावित वर्षा: 82%।”"}
                  </p>
                </div>
              </div>

              {/* Bottom tag line */}
              <div className="border-t border-[#5C4033]/10 pt-4 text-center">
                <span className="text-xs font-semibold text-[#5C4033]/70">
                  {lang === 'en' ? "Bringing Science & Finance to the soil" : "मिट्टी से मुनाफे तक का सच्चा सारथी"}
                </span>
              </div>
            </div>

            {/* Secondary circular badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-[#1E4D8C] text-[#FFF9F0] px-4 py-3 rounded-2xl shadow-xl border border-[#FFF] text-center max-w-[130px] hidden sm:block">
              <p className="text-xs font-mono tracking-widest font-black leading-none text-[#F4B41A]">4% APR</p>
              <p className="text-[9px] font-bold mt-1 text-[#FFF]/80 leading-tight">Vs 36-60% Moneylender Trap</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
