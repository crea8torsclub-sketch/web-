export default function Tools() {
  const toolsList = [
    { name: 'ChatGPT', initial: 'C' },
    { name: 'Grok', initial: 'G' },
    { name: 'ElevenLabs', initial: 'E' },
    { name: 'Higgsfield', initial: 'H' },
    { name: 'Wan AI', initial: 'W' },
    { name: 'Gemini', initial: 'G' },
    { name: 'Google Veo', initial: 'V' },
    { name: 'Pixverse AI', initial: 'P' },
    { name: 'Heygen', initial: 'H' },
    { name: 'AI Studio', initial: 'A' },
    { name: 'Nano Banana', initial: 'N' },
    { name: 'Claude', initial: 'C' },
    { name: 'Hedra', initial: 'H' },
    { name: 'Google Flow', initial: 'F' },
    { name: 'Synthesia', initial: 'S', isSynthesia: true },
  ];

  return (
    <section id="tools" className="relative py-24 bg-brand-dark/40 overflow-hidden border-t border-white/[0.03]">
      {/* Background ambient light */}
      <div className="absolute left-1/3 top-1/4 w-[400px] h-[400px] bg-glow-blue opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase mb-4 block">
            ⚙ INDUSTRY-STANDARD TOOLS
          </span>
          <h2 className="font-space font-extrabold text-3xl md:text-5xl text-brand-text-primary mb-4 leading-tight">
            ഈ course-ൽ ഉപയോഗിക്കുന്ന Tools
          </h2>
        </div>

        {/* 7 Columns Grid for Desktop, 4 for Tablet, 2 for Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 max-w-6xl mx-auto">
          {toolsList.map((tool, idx) => (
            <div
              key={idx}
              className={`hairline-border bg-brand-panel/40 backdrop-blur-sm p-5 rounded-lg flex flex-col items-center justify-center transition-all duration-300 ${
                tool.isSynthesia 
                  ? 'col-span-2 md:col-span-1 md:col-start-auto lg:col-span-1 lg:col-start-4' 
                  : ''
              }`}
            >
              {/* Neutral Icon Placeholder */}
              <div className="w-14 h-14 rounded-md bg-gradient-to-br from-brand-blue/15 to-brand-cyan/5 border border-white/[0.05] flex items-center justify-center shadow-inner relative overflow-hidden group-hover:border-brand-cyan/30 transition-colors">
                {/* Visual grid backdrop inside placeholder */}
                <div className="absolute inset-0 bg-grid opacity-10" />
                <span className="font-space font-extrabold text-brand-cyan text-xl tracking-tight select-none">
                  {tool.initial}
                </span>
              </div>

              {/* Tool Name */}
              <span className="text-sm font-space font-bold text-brand-text-primary text-center mt-4 tracking-wide">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="text-center text-xs md:text-sm font-mono text-brand-text-muted mt-12 uppercase tracking-wider">
          New tools will be added as industry trends evolve.
        </p>

      </div>
    </section>
  );
}
