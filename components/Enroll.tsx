'use client';

import { useState } from 'react';
import { Check, ShieldAlert, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

// ==========================================
// CONFIGURATION: Set your WhatsApp Number here
// (International format, numbers only, no "+", no spaces/dashes)
// ==========================================
export const WHATSAPP_NUMBER = '918594075550';

export default function Enroll() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [source, setSource] = useState('Instagram');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsRedirecting(true);

    // Build the message
    const message = `New Crea8.AI enrollment:\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nHeard about us via: ${source}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Optional Supabase logging (fire-and-forget, non-blocking)
    if (supabase) {
      supabase
        .from('crea8_leads')
        .insert([{ 
          full_name: fullName, 
          email: email, 
          phone: phone, 
          source: source 
        }])
        .then(({ error }) => {
          if (error) {
            console.error('Error inserting lead to Supabase:', error);
          }
        });
    }

    // Wait for 1 second to show the "Redirecting you to WhatsApp..." message
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsRedirecting(false);
    }, 1000);
  };

  const benefits = [
    'Lifetime access to all 12 modules & future updates',
    'Private creator community & monthly live Q&A',
    'Certificate of Completion',
    'Flexible payment options at checkout',
  ];

  return (
    <section id="enroll" className="relative py-24 bg-brand-dark/40 overflow-hidden border-t border-white/[0.03]">
      {/* Background glow */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-glow-blue opacity-35 pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-glow-cyan opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Checklist */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase mb-4 block">
              🚀 ENROLL TODAY
            </span>
            <h2 className="font-space font-extrabold text-3xl md:text-5xl text-brand-text-primary mb-6 leading-tight">
              ഇനി എന്തിന് കാത്തിരിക്കണം
            </h2>
            <p className="text-base md:text-lg text-brand-text-muted mb-10 leading-relaxed font-sans">
              Join 1000+ creators building a faster, smarter content engine.
              Reserve your seat in seconds — we&apos;ll send your access details and next
              steps right away.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                    <Check size={12} className="text-brand-cyan" />
                  </div>
                  <span className="text-sm md:text-base text-brand-text-primary font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Enrollment Form Card */}
          <div className="lg:col-span-6 relative">
            <div className="hairline-border bg-brand-panel p-8 rounded-lg relative overflow-hidden shadow-2xl">
              
              {/* Redirecting Overlay State */}
              {isRedirecting && (
                <div className="absolute inset-0 bg-brand-panel/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center">
                  <Loader2 size={40} className="text-brand-cyan animate-spin mb-4" />
                  <h3 className="font-space font-bold text-xl text-brand-text-primary">
                    Redirecting you to WhatsApp...
                  </h3>
                  <p className="text-sm text-brand-text-muted mt-2 max-w-xs">
                    We are launching secure channel to complete your enrollment reservation.
                  </p>
                </div>
              )}

              <h3 className="font-space font-extrabold text-2xl text-brand-text-primary mb-2">
                Enroll now…
              </h3>
              <p className="text-sm text-brand-text-muted mb-6">
                Fill in your details and we&apos;ll confirm your enrollment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
                    Full name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded bg-brand-dark border border-white/10 text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-400 font-mono mt-1 block">{errors.fullName}</span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
                    Email address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@creator.com"
                    className="w-full px-4 py-3 rounded bg-brand-dark border border-white/10 text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 font-mono mt-1 block">{errors.email}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
                    Phone number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 555 123 4567"
                    className="w-full px-4 py-3 rounded bg-brand-dark border border-white/10 text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-400 font-mono mt-1 block">{errors.phone}</span>
                  )}
                </div>

                {/* Heard About Us */}
                <div>
                  <label htmlFor="source" className="block text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
                    How did you hear about us?
                  </label>
                  <div className="relative">
                    <select
                      id="source"
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      className="w-full px-4 py-3 rounded bg-brand-dark border border-white/10 text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-cyan transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Instagram">Instagram</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Google">Google</option>
                      <option value="Friend/Referral">Friend/Referral</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Other">Other</option>
                    </select>
                    {/* Select arrow indicator */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-text-muted">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-brand-blue hover:bg-brand-blue/95 font-space font-bold text-base text-brand-text-primary border border-brand-cyan/20 hover:border-brand-cyan/50 hover:shadow-[0_0_20px_rgba(56,217,255,0.35)] transition-all duration-150 hover:scale-[1.02] active:scale-[0.97] uppercase tracking-wider cursor-pointer"
                >
                  ENROLL
                </button>
              </form>

              {/* Footnote */}
              <div className="flex items-center gap-2 mt-6 justify-center text-brand-text-muted">
                <ShieldAlert size={14} className="text-brand-cyan" />
                <span className="text-xs font-sans">
                  No spam. Secure enrollment. Cancel anytime before start.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
