import { ArrowRight, Play } from 'lucide-react';
import { WHATSAPP_ENROLL_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-grid">
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow-blue opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-glow-cyan opacity-40 pointer-events-none" />

      {/* Decorative neon diagonal lines */}
      <div className="absolute top-0 right-0 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent rotate-[35deg] origin-top-right" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-blue/15 to-transparent -rotate-[25deg] origin-bottom-left" />

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-panel border border-brand-cyan/20 hover:border-brand-cyan/40 transition-colors duration-300 mb-4 md:mb-8 max-w-full">
          <span className="font-mono text-[11px] sm:text-xs font-semibold text-brand-cyan tracking-normal leading-normal">
            ⚡ ഈ Skill കൊണ്ട് നിങ്ങൾക്ക് പണം ഉണ്ടാക്കാം,
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-space font-extrabold text-[clamp(1.85rem,4.8vw,4.5rem)] text-brand-text-primary tracking-normal leading-[1.35] mb-4 md:mb-8 select-none">
          ZERO യിൽ നിന്ന് <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan drop-shadow-[0_0_30px_rgba(56,217,255,0.15)] pb-1 inline-block">
            AI CREATOR PRO ആവൂ
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm md:text-xl text-brand-text-muted mb-6 md:mb-10 leading-relaxed font-sans px-4 sm:px-0">
          Crea8.AI teaches you the exact AI workflows to write, design, and film
          high-performing content faster than ever, without losing your voice or
          quality.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-row items-center justify-center gap-3 mb-6 md:gap-4 md:mb-20 w-full px-4 sm:px-0">
          <a
            href={WHATSAPP_ENROLL_URL}
            className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 rounded-lg bg-brand-blue hover:bg-brand-blue/95 text-xs sm:text-base font-space font-bold text-brand-text-primary border border-brand-cyan/20 hover:border-brand-cyan/50 hover:shadow-[0_0_25px_rgba(56,217,255,0.4)] transition-all duration-150 hover:scale-[1.02] active:scale-[0.97]"
          >
            Enroll Now
            <ArrowRight size={18} className="text-brand-cyan" />
          </a>
          <a
            href="#demo"
            className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 rounded-lg bg-brand-panel text-xs sm:text-base font-space font-bold text-brand-text-primary border border-white/5 hover:border-brand-cyan/30 hover:bg-white/[0.02] hover:shadow-[0_0_20px_rgba(56,217,255,0.15)] transition-all duration-150 hover:scale-[1.02] active:scale-[0.97]"
          >
            <Play size={16} className="fill-brand-cyan text-brand-cyan" />
            Watch Demo
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 md:gap-8 max-w-4xl mx-auto border border-white/[0.05] bg-brand-panel/40 backdrop-blur-sm p-4 md:p-8 rounded-lg relative overflow-hidden mb-6 md:mb-16 mx-4 sm:mx-auto">
          {/* Subtle light border line inside */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/15 to-transparent" />
          
          <div className="flex flex-col items-center">
            <span className="font-mono text-xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand-text-primary to-brand-text-muted">
              12+
            </span>
            <span className="text-[9px] sm:text-xs uppercase tracking-wider text-brand-cyan font-mono font-medium mt-1 sm:mt-2 text-center">
              In-depth modules
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-white/[0.05] px-2 sm:px-0">
            <span className="font-mono text-xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand-text-primary to-brand-text-muted">
              20+
            </span>
            <span className="text-[9px] sm:text-xs uppercase tracking-wider text-brand-cyan font-mono font-medium mt-1 sm:mt-2 text-center">
              AI tools covered
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-mono text-xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand-text-primary to-brand-text-muted">
              1000+
            </span>
            <span className="text-[9px] sm:text-xs uppercase tracking-wider text-brand-cyan font-mono font-medium mt-1 sm:mt-2 text-center">
              Creators enrolled
            </span>
          </div>
        </div>

        {/* Compact Autoplay Video Preview */}
        <div className="relative max-w-xs sm:max-w-3xl mx-auto rounded-lg overflow-hidden border border-white/[0.08] bg-brand-panel/40 p-1 sm:p-2 hover:border-brand-cyan/25 transition-all duration-300 shadow-[0_0_30px_rgba(56,217,255,0.08)] mx-4 sm:mx-auto">
          <div className="relative aspect-video rounded overflow-hidden bg-brand-dark border border-white/5">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/aPT_omPh6p8?autoplay=1&mute=1&loop=1&playlist=aPT_omPh6p8&controls=1"
              title="Crea8.AI Hero Video Preview"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            {/* Muted overlay hint */}
            <div className="absolute bottom-4 right-4 bg-brand-dark/80 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-[10px] font-mono text-brand-cyan pointer-events-none select-none">
              🔇 Muted — tap to unmute
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
