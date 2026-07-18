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
              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded bg-brand-panel border border-white/5 flex items-center justify-center text-brand-text-muted hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-300" 
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.003 3.003 0 0 0-2.11 2.108C0 8.028 0 12 0 12s0 3.972.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.863.51 9.388.51 9.388.51s7.524 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.972 24 12 24 12s0-3.972-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
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
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded bg-brand-panel border border-white/5 flex items-center justify-center text-brand-text-muted hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-300" 
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded bg-brand-panel border border-white/5 flex items-center justify-center text-brand-text-muted hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-300" 
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-text-muted hover:text-brand-cyan transition-colors inline-flex items-center gap-2"
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
