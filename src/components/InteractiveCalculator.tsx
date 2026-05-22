import React from 'react';
import { Coins, AlertTriangle, TrendingDown, HelpCircle, Landmark, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface InteractiveCalculatorProps {
  lang: Language;
}

export default function InteractiveCalculator({ lang }: InteractiveCalculatorProps) {
  const t = translations[lang].calculator;

  const [amount, setAmount] = React.useState(50000);
  const [tenure, setTenure] = React.useState(12);

  // KCC Calculation: 4% simple interest annually
  const kccRate = 0.04;
  const kccInterest = Math.round(amount * kccRate * (tenure / 12));
  const kccTotal = amount + kccInterest;

  // Local Moneylender: 3% simple interest MONTHLY (36% annually)
  const lenderRate = 0.36;
  const lenderInterest = Math.round(amount * lenderRate * (tenure / 12));
  const lenderTotal = amount + lenderInterest;

  const saved = lenderTotal - kccTotal;
  
  // Calculate average monthly rural income relative (assuming Rural Avg: 80,000/yr = ~6,600/mo)
  const ruralMonthlyAvg = 6600;
  const savingsEquivalentMonths = (saved / ruralMonthlyAvg).toFixed(1);

  return (
    <section id="calculator" className="py-24 bg-[#FFF9F0] border-b border-[#5C4033]/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#1E4D8C] text-xs font-bold tracking-widest uppercase font-mono bg-[#1E4D8C]/10 px-4 py-1.5 rounded-full">
            {lang === 'en' ? "Education Tool" : "वित्त साक्षरता कैलकुलेटर"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#5C4033] tracking-tight font-display">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5C4033]/80 leading-relaxed font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Dynamic Widget Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch bg-white border border-[#5C4033]/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            
            {/* Amount Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-[#5C4033] flex items-center space-x-2">
                  <Landmark className="w-4 h-4 text-[#2E5A1C]" />
                  <span>{t.amountLabel}</span>
                </label>
                <span className="text-xl font-black text-[#2E5A1C] font-mono">
                  ₹{amount.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="100000"
                step="5000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-[#2E5A1C] cursor-pointer h-2 bg-[#5C4033]/10 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] font-mono font-bold text-[#5C4033]/55">
                <span>₹10,000</span>
                <span>₹50,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-[#5C4033] flex items-center space-x-2">
                  <Coins className="w-4 h-4 text-[#E67E22]" />
                  <span>{t.tenureLabel}</span>
                </label>
                <span className="text-xl font-black text-[#E67E22] font-mono">
                  {tenure} {lang === 'en' ? 'Months' : 'महीने'}
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="24"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-[#E67E22] cursor-pointer h-2 bg-[#5C4033]/10 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] font-mono font-bold text-[#5C4033]/55">
                <span>3 {lang === 'en' ? 'm' : 'म'}</span>
                <span>12 {lang === 'en' ? 'm (1 yr)' : 'म (1 वर्ष)'}</span>
                <span>24 {lang === 'en' ? 'm (2 yrs)' : 'म (2 वर्ष)'}</span>
              </div>
            </div>

            {/* Educational red flag warn */}
            <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start space-x-3 text-xs text-[#5C4033] leading-relaxed">
              <AlertTriangle className="w-5 h-5 text-[#E67E22] shrink-0 mt-0.5" />
              <p>{t.warningText}</p>
            </div>

          </div>

          {/* Results Side-by-Side Visuals */}
          <div className="lg:col-span-6 bg-[#FFF9F0] border border-[#5C4033]/15 rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* KCC bar block */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-[#2E5A1C] flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-[#2E5A1C]" />
                    <span>{t.kccName} <span className="font-mono text-[10px] text-gray-500">(4%)</span></span>
                  </span>
                  <span className="font-mono font-black text-[#2E5A1C]">₹{kccTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="w-full bg-[#5C4033]/10 h-4 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#2E5A1C] h-full rounded-full transition-all duration-300" 
                    style={{ width: `${(kccTotal / lenderTotal) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-semibold font-mono">
                  <span>{lang === 'en' ? "7% Base - 3% Repay Subsidy" : "7% मूल दर - 3% चुकौती छूट"}</span>
                  <span>{t.interestPaid}: <span className="font-bold">₹{kccInterest.toLocaleString('en-IN')}</span></span>
                </div>
              </div>

              {/* Moneylender bar block */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-red-600 flex items-center space-x-1">
                    <AlertTriangle className="w-4 h-4 text-red-600 animate-pulse" />
                    <span>{t.lenderName} <span className="font-mono text-[10px] text-gray-500">(36% simple)</span></span>
                  </span>
                  <span className="font-mono font-black text-red-600">₹{lenderTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="w-full bg-[#5C4033]/10 h-4 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full w-full" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-semibold font-mono">
                  <span className="text-red-500">{lang === 'en' ? "High Interest Compounding Trap" : "चक्रवृद्धि चक्र खतरनाक दलदल"}</span>
                  <span>{t.interestPaid}: <span className="font-bold">₹{lenderInterest.toLocaleString('en-IN')}</span></span>
                </div>
              </div>

            </div>

            {/* Savings Callout Banner */}
            <div className="border-t border-b border-dashed border-[#5C4033]/20 py-4 space-y-4">
              <div className="space-y-2 bg-white p-4 rounded-xl border border-[#2E5A1C]/20 shadow-sm">
                <p className="text-xs font-bold text-[#2E5A1C] uppercase tracking-wider font-mono flex items-center space-x-1.5 justify-center">
                  <TrendingDown className="w-4 h-4" />
                  <span>{lang === 'en' ? "Total Money Saved:" : "कुल पैसों की बचत:"}</span>
                </p>
                <p className="text-2xl sm:text-3xl font-black text-[#2E5A1C] text-center font-mono">
                  ₹{saved.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-[#5C4033]/90 text-center leading-relaxed font-semibold">
                  {t.differenceMessage.replace('{saved}', `₹${saved.toLocaleString('en-IN')}`)}
                </p>
                {saved > 0 && (
                  <p className="text-[10px] bg-[#E67E22]/10 text-[#E67E22] font-mono font-extrabold text-center rounded-lg py-1 px-2.5">
                    {lang === 'en' 
                      ? `Equivalent to ${savingsEquivalentMonths} months of rural family food expenses!` 
                      : `यह बचत लगभग ${savingsEquivalentMonths} महीने के घरेलू परिवार चक्र खर्चे के बराबर है!`}
                  </p>
                )}
              </div>
            </div>

            {/* Document and Eligibility Assistance Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-black uppercase text-[#5C4033] tracking-wider">
                📋 {lang === 'en' ? "KCC Bank Loan Eligibility Documents" : "KCC बैंक लोन के लिए आवश्यक दस्तावेज"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-sans text-gray-600 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'en' ? "Land Deed (Khasra & Khatauni)" : "भू-अभिलेख (खसरा और खतौनी पर्चा)"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'en' ? "Identity Proof (Aadhaar/Voter)" : "पहचान पत्र (आधार / वोटर आईडी)"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'en' ? "Official Crop Sowing Statement" : "बोआई की गई फसल का विवरण / पटवारी रिपोर्ट"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'en' ? "PACS Cooperative Zero Default Cert" : "सहकारी बैंक से बकाएदार न होने का प्रमाण"}</span>
                </div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#FFF9F0] text-[10px] text-gray-500 leading-normal font-sans pt-3">
                💡 <span className="font-extrabold text-[#5C4033]">{lang === 'en' ? "Prompt Repay Rule" : "समय पर भुगतान नियम"}:</span> {
                  lang === 'en' 
                    ? "Government subvention reduces rate from 7% down to 4% effective interest rates ONLY if you pay within the 1-year timeline. Complete cycles on-time to keep eligibility high!"
                    : "केसीसी लोन की मूल दर 7% होती है, किन्तु भारत सरकार द्वारा 3% समय पर भुगतान करने वाले किसानों को सीधे ब्याज छूट (Subvention) मिलती है, जिससे शुद्ध ब्याज दर मात्र 4% रहती है।"
                }
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
