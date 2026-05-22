import React from 'react';
import { Sprout, Globe, Mail, Phone, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  lang: Language;
  setLang: (l: Language) => void;
}

export default function Footer({ lang, setLang }: FooterProps) {
  const t = translations[lang].footer;

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'hi' : 'en';
    setLang(nextLang);
  };

  return (
    <footer className="bg-[#5C4033] text-[#FFF9F0]/90 pt-16 pb-12 border-t border-[#FFF9F0]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#FFF9F0]/10">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#2E5A1C] text-[#FFF9F0] rounded-xl">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#FFF9F0]">
                {translations[lang].nav.brand}
              </span>
            </div>
            
            <p className="text-base font-bold italic text-[#F4B41A]">
              “{t.tagline}”
            </p>
            <p className="text-xs text-[#FFF9F0]/75 leading-relaxed max-w-sm">
              {t.proud}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B41A] font-mono">
              {lang === 'en' ? "Compliance & Legal" : "नियम और शर्तें"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#privacy" className="hover:text-[#F4B41A] transition-colors">
                  {t.privacy}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#F4B41A] transition-colors">
                  {t.terms}
                </a>
              </li>
              <li>
                <span className="text-[#FFF9F0]/50 block pt-1 font-mono">
                  Govt Data: DAC&FW, Govt of India
                </span>
              </li>
            </ul>
          </div>

          {/* Support / Contact Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B41A] font-mono">
              {t.contact}
            </h4>
            <ul className="space-y-3.5 text-xs text-[#FFF9F0]/80 font-mono">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#F4B41A] shrink-0" />
                <a href="mailto:support@farmfin.org" className="hover:underline">
                  support@farmfin.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#F4B41A] shrink-0" />
                <a href="tel:+918002345678" className="hover:underline">
                  +91-800-234-5678 (Toll Free)
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={toggleLanguage}
                  className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-[#FFF9F0]/20 bg-[#FFF9F0]/10 hover:bg-[#FFF9F0]/20 text-xs font-bold font-sans tracking-wide"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? "हिन्दी में बदलें" : "Switch to English"}</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits block */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-[10px] text-[#FFF9F0]/55 font-mono">
          <p>
            © 2026 FarmFin Advisor Initiative. All Rights Reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
            <span>for smallholder farm families across India</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
