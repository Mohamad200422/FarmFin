import { Brain, TrendingDown, ShieldAlert, Calendar, MessageSquare, Lock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FeaturesGridProps {
  lang: Language;
}

export default function FeaturesGrid({ lang }: FeaturesGridProps) {
  const t = translations[lang].features;

  const features = [
    {
      icon: Brain,
      title: t.suitability.title,
      desc: t.suitability.desc,
      color: "bg-green-100 text-green-700 border-green-200",
    },
    {
      icon: TrendingDown,
      title: t.kccCalculator.title,
      desc: t.kccCalculator.desc,
      color: "bg-sky-100 text-sky-700 border-sky-200",
    },
    {
      icon: ShieldAlert,
      title: t.ponziAlerts.title,
      desc: t.ponziAlerts.desc,
      color: "bg-amber-100 text-amber-700 border-amber-200",
    },
    {
      icon: Calendar,
      title: t.incomeStagger.title,
      desc: t.incomeStagger.desc,
      color: "bg-[#E67E22]/10 text-[#E67E22] border-[#E67E22]/20",
    },
    {
      icon: MessageSquare,
      title: t.smsStyle.title,
      desc: t.smsStyle.desc,
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
    {
      icon: Lock,
      title: t.secureMath.title,
      desc: t.secureMath.desc,
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#FFF9F0] border-b border-[#5C4033]/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#2E5A1C] text-xs font-bold tracking-widest uppercase font-mono bg-[#2E5A1C]/10 px-4 py-1.5 rounded-full">
            {lang === 'en' ? "Farmer Toolbox" : "एक नजर में सारे साधन"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#5C4033] tracking-tight font-display">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5C4033]/80 font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Features Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <div
                key={i}
                className="bg-white border border-[#5C4033]/10 hover:border-[#2E5A1C]/35 border-b-[6px] border-b-[#2E5A1C] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl border ${f.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#5C4033] tracking-tight leading-snug font-display">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#5C4033]/80 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
                
                {/* Visual accent subtle bar */}
                <div className="mt-6 w-8 h-1 bg-[#2E5A1C]/20 rounded-full group-hover:w-12 transition-all" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
