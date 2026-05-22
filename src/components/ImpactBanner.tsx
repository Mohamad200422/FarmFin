import { Landmark, TrendingUp, Users, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ImpactBannerProps {
  lang: Language;
}

export default function ImpactBanner({ lang }: ImpactBannerProps) {
  const t = translations[lang].impact;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#5C4033] to-[#203f13] text-[#FFF9F0] py-24 border-b border-[#5C4033]/20">
      
      {/* Decorative earthy pattern */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4B41A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2E5A1C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="text-[#F4B41A] text-xs font-bold tracking-widest uppercase font-mono bg-[#FFF9F0]/10 px-4 py-1.5 rounded-full">
            {lang === 'en' ? "Massive National Scale" : "राष्ट्रीय स्तर पर बदलाव"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFF9F0] tracking-tight leading-tight font-display">
            {t.title}
          </h2>
        </div>

        {/* Stats Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-5xl mx-auto pt-6 pb-12 border-b border-[#FFF9F0]/15 divide-y md:divide-y-0 md:divide-x divide-[#FFF9F0]/10 items-stretch">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
            <div className="p-3 bg-[#FFF9F0]/10 text-[#F4B41A] rounded-xl">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-[#F4B41A] tracking-tighter font-mono">
                {t.stat1.num}
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#FFF9F0]/70 uppercase tracking-widest mt-2 max-w-[200px] mx-auto leading-normal">
                {t.stat1.label}
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
            <div className="p-3 bg-[#FFF9F0]/10 text-red-400 rounded-xl">
              <Landmark className="w-7 h-7" />
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-red-400 tracking-tighter font-mono">
                {t.stat2.num}
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#FFF9F0]/70 uppercase tracking-widest mt-2 max-w-[220px] mx-auto leading-normal">
                {t.stat2.label}
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
            <div className="p-3 bg-[#FFF9F0]/10 text-green-400 rounded-xl">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-black text-green-400 tracking-tighter font-mono">
                {t.stat3.num}
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#FFF9F0]/70 uppercase tracking-widest mt-2 max-w-[200px] mx-auto leading-normal">
                {t.stat3.label}
              </p>
            </div>
          </div>

        </div>

        {/* Highlighted Quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto flex flex-col items-center space-y-4">
          <HeartHandshake className="w-10 h-10 text-[#F4B41A] animate-pulse" />
          <blockquote className="text-xl sm:text-2xl font-medium text-[#FFF9F0] leading-relaxed italic font-display">
            “{t.tagline}”
          </blockquote>
          <cite className="text-xs font-bold text-[#F4B41A]/85 uppercase tracking-widest font-mono not-italic mt-2">
            — {lang === 'en' ? "FarmFin Mission Statement" : "फार्मफिन का लक्ष्य वाक्य"}
          </cite>
        </div>

      </div>
    </section>
  );
}
