import { Check } from 'lucide-react';

export default function About() {
  const features = [
    {
      title: 'Practical over theoretical',
      description: 'Every lesson ends with a workflow you can use the same day on real projects.',
    },
    {
      title: 'Always current',
      description: 'Tools change fast. We update modules as the AI landscape evolves, at no extra cost.',
    },
    {
      title: 'Community of creators',
      description: 'Learn alongside 1000+ creators sharing prompts, wins, and feedback daily.',
    },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-white/[0.03] bg-brand-dark/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-glow-blue opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase mb-4 block">
              ✓ WHO WE ARE
            </span>
            <h2 className="font-space font-extrabold text-3xl md:text-5xl text-brand-text-primary mb-6 leading-tight">
              We turn everyday creators into AI-powered pro&apos;s
            </h2>
            <p className="text-base md:text-lg text-brand-text-muted mb-10 leading-relaxed font-sans">
              Crea8.AI is an education studio built by working creators, marketers,
              and prompt engineers who ship AI content every single day. Our mission is
              simple: give you a repeatable system to produce more, better, faster, so AI
              becomes your unfair advantage instead of a shiny distraction. No hype, no
              theory dumps, just battle-tested workflows.
            </p>

            {/* Feature Rows */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mt-1">
                    <Check size={14} className="text-brand-cyan" />
                  </div>
                  <div>
                    <h3 className="font-space font-bold text-base text-brand-text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-brand-text-muted mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Thumbnail Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-lg overflow-hidden border border-white/[0.08] bg-brand-panel/60 p-2.5 hover:border-brand-cyan/20 transition-all duration-500 shadow-2xl">
              {/* Glassmorphic border glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Inner video card container */}
              <div className="relative aspect-video rounded bg-brand-dark overflow-hidden flex items-center justify-center border border-white/5">
                {/* Simulated grid background inside player */}
                <div className="absolute inset-0 bg-grid opacity-10" />

                {/* Simulated course content abstract design */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Badge */}
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/15">
                      LIVE COURSE WORKFLOW
                    </span>
                    <span className="font-mono text-[9px] text-white/40">
                      04:12
                    </span>
                  </div>

                  {/* Flow graphic visual mock */}
                  <div className="flex flex-col gap-2">
                    <div className="h-1.5 w-1/3 bg-brand-blue/40 rounded animate-pulse" />
                    <div className="h-1.5 w-2/3 bg-brand-cyan/30 rounded" />
                    <div className="h-1.5 w-1/2 bg-white/10 rounded" />
                  </div>
                </div>

                {/* Central Play Button */}
                <a 
                  href="#demo"
                  className="relative z-10 w-16 h-16 rounded-full bg-brand-blue/90 text-brand-text-primary flex items-center justify-center border border-brand-cyan/35 shadow-[0_0_20px_rgba(56,217,255,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(56,217,255,0.35)] transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-current text-white translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>

              {/* Bottom caption / banner */}
              <div className="mt-4 px-3 py-1 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-medium text-brand-cyan">MASTERCLASS PREVIEW</span>
                  <span className="text-sm font-space font-bold text-brand-text-primary mt-0.5">AI Creator Engine Workflows</span>
                </div>
                <span className="text-xs font-mono text-brand-text-muted">12 Lessons</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
