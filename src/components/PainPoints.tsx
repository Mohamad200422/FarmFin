import { HelpCircle, Sparkles, Sprout, TrendingDown, RefreshCw } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface PainPointsProps {
  lang: Language;
}

export default function PainPoints({ lang }: PainPointsProps) {
  const t = translations[lang].pain;

  return (
    <section id="why-farmfin" className="py-24 bg-[#FFF9F0] border-b border-[#5C4033]/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#E67E22] text-xs font-bold tracking-widest uppercase font-mono bg-[#E67E22]/10 px-4 py-1.5 rounded-full">
            {lang === 'en' ? "The Dual Challenges" : "दोहरी विपदा"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#5C4033] tracking-tight font-display">
            {t.title}
          </h2>
          <p className="text-lg text-[#5C4033]/80 font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* The Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Agronomic */}
          <div className="relative group p-8 bg-[#FFF] border border-[#5C4033]/10 hover:border-[#2E5A1C]/30 border-b-[6px] border-b-[#2E5A1C] rounded-3xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E5A1C]/5 rounded-bl-[160px] pointer-events-none transition-all duration-500 group-hover:bg-[#2E5A1C]/10" />
            
            <div className="space-y-6">
              <div className="inline-flex p-4 bg-[#2E5A1C]/10 rounded-2xl text-[#2E5A1C]">
                <Sprout className="w-8 h-8" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-[#5C4033] leading-tight font-display">
                  {t.card1.title}
                </h3>
                <p className="text-[#5C4033]/85 text-base leading-relaxed">
                  {t.card1.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-[#5C4033]/10 pt-4 flex items-center space-x-2 text-xs font-mono font-bold text-[#2E5A1C]">
              <HelpCircle className="w-4 h-4" />
              <span>{lang === 'en' ? "District crop science advice needed" : "जिला विशिष्ट फसल विज्ञान की आवश्यकता"}</span>
            </div>
          </div>

          {/* Card 2: Financial */}
          <div className="relative group p-8 bg-[#FFF] border border-[#5C4033]/10 hover:border-[#1E4D8C]/30 border-b-[6px] border-b-[#1E4D8C] rounded-3xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E4D8C]/5 rounded-bl-[160px] pointer-events-none transition-all duration-500 group-hover:bg-[#1E4D8C]/10" />
            
            <div className="space-y-6">
              <div className="inline-flex p-4 bg-[#1E4D8C]/10 rounded-2xl text-[#1E4D8C]">
                <TrendingDown className="w-8 h-8" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-[#5C4033] leading-tight font-display">
                  {t.card2.title}
                </h3>
                <p className="text-[#5C4033]/85 text-base leading-relaxed">
                  {t.card2.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-[#5C4033]/10 pt-4 flex items-center space-x-2 text-xs font-mono font-bold text-[#1E4D8C]">
              <HelpCircle className="w-4 h-4" />
              <span>{lang === 'en' ? "Household finance security needed" : "घरेलू बजट और ऋण सुरक्षा की आवश्यकता"}</span>
            </div>
          </div>

        </div>

        {/* Transition callout */}
        <div className="mt-16 text-center max-w-4xl mx-auto bg-[#5C4033]/5 border border-[#5C4033]/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="p-3 bg-[#E67E22]/10 text-[#E67E22] rounded-full shrink-0">
              <RefreshCw className="w-6 h-6 animate-spin-slow" />
            </div>
            <p className="text-base sm:text-lg text-[#5C4033] font-medium leading-relaxed text-left">
              {t.footer}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
