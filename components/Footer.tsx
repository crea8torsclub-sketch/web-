import { MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER } from './Enroll';

export default function Footer() {
  const exploreLinks = [
    { name: 'About', href: '#about' },
    { name: 'Modules', href: '#modules' },
    { name: 'Demo', href: '#demo' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const whatsappMessage = encodeURIComponent("Hi, I'd like to know more about Crea8.AI");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#05060A] border-t border-white/[0.04] py-16 relative overflow-hidden">
      {/* Background neon border line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          
          {/* Brand Tagline Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <a href="#" className="font-space font-bold text-xl tracking-wider text-brand-text-primary flex items-center gap-1 hover:opacity-90 mb-4">
                <span className="text-brand-blue font-mono font-extrabold">&lt;</span>
                CREA8.AI
                <span className="text-brand-cyan font-mono font-extrabold">/&gt;</span>
              </a>
              <p className="text-sm text-brand-text-muted max-w-sm leading-relaxed mb-6 font-sans">
                Master-level AI content skills for creators, marketers, and entrepreneurs
                who want to scale their output and income.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/crea8.ai?igsh=dHp5dXlxdDZlaW9l" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded bg-brand-panel border border-white/5 flex items-center justify-center text-brand-text-muted hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-300" 
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold text-brand-cyan uppercase tracking-wider mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-brand-text-muted hover:text-brand-cyan transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold text-brand-cyan uppercase tracking-wider mb-6">
              Get Started
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#enroll" className="text-sm text-brand-text-muted hover:text-brand-cyan transition-colors">
                  Enroll Now
                </a>
              </li>
              <li>
                <a 
                  href={whatsappUrl}
                  className="text-sm text-brand-text-muted hover:text-brand-cyan transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={14} className="text-brand-cyan" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@crea8.ai" className="text-sm text-brand-text-muted hover:text-brand-cyan transition-colors">
                  hello@crea8.ai
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-text-muted">
          <span>© 2026 Crea8.AI. All rights reserved.</span>
          <span className="mt-4 sm:mt-0 font-mono text-[10px] text-brand-cyan/50">SECURE DISCLOSURE CHANNEL // CREA8_SYS_V2</span>
        </div>
      </div>
    </footer>
  );
}
