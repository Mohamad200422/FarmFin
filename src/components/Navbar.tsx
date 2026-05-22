import React from 'react';
import { Sprout, Globe, Menu, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = translations[lang].nav;

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'hi' : 'en';
    setLang(nextLang);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF9F0]/90 backdrop-blur-md border-b border-[#5C4033]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 bg-[#2E5A1C] text-[#FFF9F0] rounded-xl shadow-md">
              <Sprout className="w-8 h-8" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#5C4033] tracking-tight block leading-none font-sans">
                {t.brand}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#2E5A1C] font-mono leading-none block mt-1 font-bold">
                Crop & Money Advisor
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('how-it-works')} className="text-sm font-medium text-[#5C4033] hover:text-[#2E5A1C] transition-colors">
              {t.howItWorks}
            </button>
            <button onClick={() => scrollTo('why-farmfin')} className="text-sm font-medium text-[#5C4033] hover:text-[#2E5A1C] transition-colors">
              {t.comparison}
            </button>
            <button onClick={() => scrollTo('calculator')} className="text-sm font-medium text-[#5C4033] hover:text-[#2E5A1C] transition-colors">
              {lang === 'en' ? 'Compare Loans' : 'ऋण तुलना'}
            </button>
            <button onClick={() => scrollTo('features')} className="text-sm font-medium text-[#5C4033] hover:text-[#2E5A1C] transition-colors">
              {t.features}
            </button>
            <button onClick={() => scrollTo('partners')} className="text-sm font-medium text-[#5C4033] hover:text-[#2E5A1C] transition-colors">
              {t.partners}
            </button>
          </div>

          {/* Action Area & Lang Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Lang Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-full border border-[#5C4033]/20 bg-[#FFF9F0] hover:bg-[#FFF] transition-all duration-300 text-sm font-bold text-[#5C4033] shadow-sm select-none"
            >
              <Globe className="w-4 h-4 text-[#2E5A1C]" />
              <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            <button
              onClick={() => scrollTo('demo')}
              className="px-5 py-2.5 bg-[#2E5A1C] text-[#FFF9F0] text-sm font-bold rounded-full shadow-md hover:bg-[#203f13] transition-colors"
            >
              {t.demo}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Lang Switch Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-[#5C4033]/20 bg-[#FFF9F0] text-xs font-bold text-[#5C4033] select-none"
            >
              <Globe className="w-3.5 h-3.5 text-[#2E5A1C]" />
              <span>{lang === 'en' ? 'हिन्दी' : 'ENGLISH'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#5C4033] hover:bg-[#FFF9F0] p-2 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF9F0] border-b border-[#5C4033]/10 px-4 pt-2 pb-6 space-y-3 shadow-inner">
          <button onClick={() => scrollTo('how-it-works')} className="block w-full text-left py-2 text-base font-medium text-[#5C4033] hover:text-[#2E5A1C]">
            {t.howItWorks}
          </button>
          <button onClick={() => scrollTo('why-farmfin')} className="block w-full text-left py-2 text-base font-medium text-[#5C4033] hover:text-[#2E5A1C]">
            {t.comparison}
          </button>
          <button onClick={() => scrollTo('calculator')} className="block w-full text-left py-2 text-base font-medium text-[#5C4033] hover:text-[#2E5A1C]">
            {lang === 'en' ? 'Compare Loans' : 'ऋण तुलना'}
          </button>
          <button onClick={() => scrollTo('features')} className="block w-full text-left py-2 text-base font-medium text-[#5C4033] hover:text-[#2E5A1C]">
            {t.features}
          </button>
          <button onClick={() => scrollTo('partners')} className="block w-full text-left py-2 text-base font-medium text-[#5C4033] hover:text-[#2E5A1C]">
            {t.partners}
          </button>
          <div className="pt-4 border-t border-[#5C4033]/10">
            <button
              onClick={() => scrollTo('demo')}
              className="w-full text-center py-3 bg-[#2E5A1C] text-[#FFF9F0] rounded-xl font-bold hover:bg-[#203f13] transition-colors"
            >
              {t.demo}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
