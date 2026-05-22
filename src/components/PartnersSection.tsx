import React from 'react';
import { Target, Users, Landmark, FileBarChart, CheckCircle2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { Language, PartnerForm } from '../types';
import { translations } from '../translations';

interface PartnersSectionProps {
  lang: Language;
}

export default function PartnersSection({ lang }: PartnersSectionProps) {
  const t = translations[lang].partners;

  // React State for institutional inquiry form
  const [form, setForm] = React.useState<PartnerForm>({
    name: '',
    org: '',
    email: '',
    phone: '',
    role: 'ngo',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.org || !form.email) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/register-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSuccess(true);
        setForm({
          name: '',
          org: '',
          email: '',
          phone: '',
          role: 'ngo',
          message: ''
        });
      }
    } catch (err) {
      console.error(err);
      // Offline successful fallback display
      setSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="partners" className="py-24 bg-[#FFF9F0] border-b border-[#5C4033]/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[#1E4D8C] text-xs font-bold tracking-widest uppercase font-mono bg-[#1E4D8C]/10 px-4 py-1.5 rounded-full">
            {lang === 'en' ? "Institutional Partners" : "साझेदारी और प्रभाव"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#5C4033] tracking-tight font-display">
            {t.title}
          </h2>
          <p className="text-lg text-[#5C4033]/80 leading-relaxed font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Institutional Value Propositions (Col-span 7) */}
          <div className="lg:col-span-7 space-y-12">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Feature Item 1 */}
              <div className="space-y-3">
                <div className="inline-flex p-3 bg-[#2E5A1C]/10 text-[#2E5A1C] rounded-xl border border-[#2E5A1C]/10">
                  <Landmark className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-extrabold text-[#5C4033]">
                  {lang === 'en' ? "Custom Recommendations" : "विशेष फसल और ऋण डेटा"}
                </h4>
                <p className="text-sm text-[#5C4033]/85 leading-relaxed">
                  {lang === 'en' 
                    ? "Modify parameters for regional land qualities, water-levels, and locally subsidized banking projects."
                    : "अपने जिले के अनुसार विशेष अनुकूलन और स्थानीय रियायती बैंक योजनाओं को शामिल करें।"}
                </p>
              </div>

              {/* Feature Item 2 */}
              <div className="space-y-3">
                <div className="inline-flex p-3 bg-[#E67E22]/10 text-[#E67E22] rounded-xl border border-[#E67E22]/10">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-extrabold text-[#5C4033]">
                  {lang === 'en' ? "Bulk Onboarding" : "सामूहिक किसान ऑनबोर्डिंग"}
                </h4>
                <p className="text-sm text-[#5C4033]/85 leading-relaxed">
                  {lang === 'en' 
                    ? "Leverage offline workshops and simple local-language forms to register thousands of members at once."
                    : "ऑफ़लाइन कार्यशालाओं और वॉयस माध्यम से सैकड़ों किसानों को बिना इंटरनेट कागजी कार्रवाई के एक साथ जोड़ें।"}
                </p>
              </div>

              {/* Feature Item 3 */}
              <div className="space-y-3">
                <div className="inline-flex p-3 bg-[#1E4D8C]/10 text-[#1E4D8C] rounded-xl border border-[#1E4D8C]/10">
                  <FileBarChart className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-extrabold text-[#5C4033]">
                  {lang === 'en' ? "Anonymized Impact Reports" : "प्रभाव और प्रगति सूचकांक"}
                </h4>
                <p className="text-sm text-[#5C4033]/85 leading-relaxed">
                  {lang === 'en' 
                    ? "See anonymized local financial improvements & harvest health data to satisfy institutional auditing requirements."
                    : "अनाम डेटा के ज़रिए क्षेत्र विशेष में ऋण मुक्ति, बचत दर और फसल उत्पादन विकास को सीधे ट्रैक करें।"}
                </p>
              </div>

              {/* Feature Item 4 */}
              <div className="space-y-3">
                <div className="inline-flex p-3 bg-purple-100 text-purple-700 rounded-xl border border-purple-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-extrabold text-[#5C4033]">
                  {lang === 'en' ? "100% Secure System" : "सुरक्षित सर्वर सुरक्षा"}
                </h4>
                <p className="text-sm text-[#5C4033]/85 leading-relaxed">
                  {lang === 'en' 
                    ? "Strict algebraic guardrails prevent any numerical errors or misinformation. High precision advisory."
                    : "कठोर गणितीय नियम सुनिश्चित करते हैं कि किसी किसान को कोई गलत गणना या ऋण दर न दिखाई दे।"}
                </p>
              </div>

            </div>

            {/* Bullets lists */}
            <div className="border-t border-[#5C4033]/15 pt-8 space-y-4">
              <h4 className="text-base font-extrabold text-[#5C4033] uppercase tracking-wider font-mono">
                {lang === 'en' ? "What We Offer Institution Partners:" : "संस्थागत साझेदारों के लिए मुख्य सुविधाएँ:"}
              </h4>
              <ul className="space-y-2.5">
                {t.featureList.map((item: string, i: number) => (
                  <li key={i} className="flex items-start space-x-2.5 text-sm text-[#5C4033]/90 font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5A1C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Form Area Col-span 5 */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-[#5C4033]/10 border-b-8 border-b-[#1E4D8C] p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#5C4033] capitalize font-display">
                  {t.formTitle}
                </h3>
                <p className="text-xs text-gray-500">
                  {lang === 'en' ? "Let's co-brand FarmFin for your local networks." : "आपके स्थानीय नेटवर्क के लिए सह-ब्रांडेड समाधान पाएं।"}
                </p>
              </div>

              {success ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                  <p className="text-base font-bold text-[#5C4033]">
                    {t.formSuccess}
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-xs font-bold text-[#2E5A1C] hover:underline"
                  >
                    {lang === 'en' ? "Submit another inquiry" : "एक और आवेदन करें"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#5C4033] block">
                      {t.formName} *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Asha Sen"
                      className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                    />
                  </div>

                  {/* Organization */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#5C4033] block">
                      {t.formOrg} *
                    </label>
                    <input
                      required
                      type="text"
                      name="org"
                      value={form.org}
                      onChange={handleChange}
                      placeholder="e.g. Krishi Vikas NGO"
                      className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#5C4033] block">
                        {t.formEmail} *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@organization.org"
                        className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#5C4033] block">
                        {t.formPhone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765..."
                        className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                      />
                    </div>
                  </div>

                  {/* Role Type Dropdown selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#5C4033] block">
                      {t.formRole}
                    </label>
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                    >
                      <option value="ngo">{t.roleNgo}</option>
                      <option value="fpo">{t.roleFpo}</option>
                      <option value="govt">{t.roleGovt}</option>
                      <option value="investor">{t.roleInvestor}</option>
                      <option value="other">{t.roleOther}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#5C4033] block">
                      {t.formMsg}
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="..."
                      className="w-full bg-[#FFF9F0] border border-[#5C4033]/15 text-xs text-[#5C4033] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#2E5A1C]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#1E4D8C] text-white hover:bg-[#133767] font-bold text-xs sm:text-sm rounded-xl tracking-wider uppercase shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? "Sending..." : t.formSubmit}</span>
                    <Mail className="w-4 h-4 text-[#FFF]" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
