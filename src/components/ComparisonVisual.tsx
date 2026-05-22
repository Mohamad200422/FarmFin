import { ArrowRight, CheckCircle2, XCircle, ChevronRight, CornerDownRight, Zap, Target } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ComparisonVisualProps {
  lang: Language;
}

export default function ComparisonVisual({ lang }: ComparisonVisualProps) {
  const t = translations[lang].difference;

  return (
    <section className="py-24 bg-[#FFF9F0] border-b border-[#5C4033]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#E67E22] text-xs font-bold tracking-widest uppercase font-mono bg-[#E67E22]/10 px-4 py-1.5 rounded-full">
            {lang === 'en' ? "The FarmFin Innovation" : "नया और अनोखा बदलाव"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#5C4033] tracking-tight font-display">
            {t.title}
          </h2>
          <p className="text-lg text-[#5C4033]/80 font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch max-w-5xl mx-auto">
          
          {/* Column 1: Crop apps */}
          <div className="lg:col-span-4 p-6 bg-[#FFF] border border-[#5C4033]/10 border-b-[6px] border-b-red-500 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#E67E22]">
                <XCircle className="w-4 h-4 text-red-500" />
                <span>{lang === 'en' ? "Crop-Only Apps" : "केवल कृषि सलाह ऐप्स"}</span>
              </div>
              <h3 className="text-xl font-bold text-[#5C4033] font-display">
                {t.left.title}
              </h3>
              <ul className="space-y-2 text-sm text-[#5C4033]/80">
                {t.left.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <span className="text-red-500 font-bold block pt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-[#5C4033]/10 flex items-center justify-between text-xs font-bold text-red-500/80">
              <span>{lang === 'en' ? "Missing: Loans & Financial warning" : "लोन व बचत की जानकारी न होना"}</span>
            </div>
          </div>

          {/* Merge Arrow (Mobile Indicator) */}
          <div className="lg:col-span-1 flex lg:flex-col items-center justify-center py-4 lg:py-0">
            <span className="text-3xl lg:rotate-90 text-[#F4B41A] font-extrabold animate-pulse">➔</span>
          </div>

          {/* Center Glowing: FarmFin */}
          <div className="lg:col-span-3 p-8 bg-gradient-to-b from-[#2E5A1C] to-[#203f13] text-[#FFF9F0] border-2 border-[#F4B41A] rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between transform lg:scale-105 z-10">
            {/* Absolute badge */}
            <div className="absolute top-3 right-3 bg-[#F4B41A] text-[#5C4033] px-2.5 py-0.5 text-[8px] font-mono tracking-widest font-black uppercase rounded-full">
              {lang === 'en' ? "FUSION" : "अनोखा संगम"}
            </div>

            <div className="space-y-6">
              <div className="inline-flex p-3 bg-[#FFF9F0]/10 rounded-xl text-[#F4B41A]">
                <Zap className="w-6 h-6 animate-pulse" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black tracking-tight text-[#F4B41A]">
                  {t.center.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#FFF9F0]/90">
                  {t.center.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#FFF9F0]/10 flex items-center space-x-1.5 text-[10px] font-mono font-bold text-[#F4B41A] uppercase tracking-wide">
              <Target className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? "Zero Guesswork" : "सच्चा और सटीक समाधान"}</span>
            </div>
          </div>

          {/* Merge Arrow (Mobile Indicator) */}
          <div className="lg:col-span-1 flex lg:flex-col items-center justify-center py-4 lg:py-0">
            <span className="text-3xl lg:-rotate-90 text-[#F4B41A] font-extrabold animate-pulse">➔</span>
          </div>

          {/* Column 2: Finance apps */}
          <div className="lg:col-span-3 p-6 bg-[#FFF] border border-[#5C4033]/10 border-b-[6px] border-b-trust-blue rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#E67E22]">
                <XCircle className="w-4 h-4 text-red-500" />
                <span>{lang === 'en' ? "Generic Finance Apps" : "पारंपरिक फाइनेंस ऐप्स"}</span>
              </div>
              <h3 className="text-xl font-bold text-[#5C4033] font-display">
                {t.right.title}
              </h3>
              <ul className="space-y-2 text-sm text-[#5C4033]/80">
                {t.right.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <span className="text-red-500 font-bold block pt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-[#5C4033]/10 flex items-center justify-between text-xs font-bold text-red-500/80">
              <span>{lang === 'en' ? "Missing: Crop cycle context" : "फसल चक्र की समझ का अभाव"}</span>
            </div>
          </div>

        </div>

        {/* Highlighting text block */}
        <p className="mt-12 text-center text-xs sm:text-sm text-[#5C4033]/70 font-bold max-w-2xl mx-auto font-mono uppercase tracking-wider">
          {lang === 'en' 
            ? "💡 Microeconomics built with real district guidelines from Government records" 
            : "💡 सरकारी आंकड़ों व क्षेत्रीय कृषि परिस्थितियों पर आधारित वास्तविक मार्गदर्शन"}
        </p>

      </div>
    </section>
  );
}
