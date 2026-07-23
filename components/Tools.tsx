'use client';

import { useState } from 'react';

interface ToolIconProps {
  name: string;
  domain: string;
  initial: string;
}

function ToolIcon({ name, domain, initial }: ToolIconProps) {
  const [hasError, setHasError] = useState(false);
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  if (hasError) {
    return (
      <span className="font-space font-extrabold text-brand-cyan text-xl tracking-tight select-none">
        {initial}
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={faviconUrl}
      alt={`${name} logo`}
      className="w-10 h-10 object-contain relative z-10"
      onError={() => setHasError(true)}
    />
  );
}

export default function Tools() {
  const toolsList = [
    { name: 'ChatGPT', initial: 'C', domain: 'openai.com' },
    { name: 'ElevenLabs', initial: 'E', domain: 'elevenlabs.io' },
    { name: 'Higgsfield', initial: 'H', domain: 'higgsfield.ai' },
    { name: 'Wan AI', initial: 'W', domain: 'wan.video' },
    { name: 'Gemini', initial: 'G', domain: 'gemini.google.com' },
    { name: 'Google Veo', initial: 'V', domain: 'labs.google' },
    { name: 'Nano Banana', initial: 'N', domain: 'gemini.google.com' },
    { name: 'Claude', initial: 'C', domain: 'claude.ai' },
    { name: 'Hedra', initial: 'H', domain: 'hedra.com' },
    { name: 'Google Flow', initial: 'F', domain: 'labs.google' },
    { name: 'Kling AI', initial: 'K', domain: 'klingai.com' },
    { name: 'Midjourney', initial: 'M', domain: 'midjourney.com' },
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
              className="hairline-border bg-brand-panel/40 backdrop-blur-sm p-5 rounded-lg flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Neutral Icon Placeholder Slot */}
              <div className="w-14 h-14 rounded-md bg-gradient-to-br from-brand-blue/15 to-brand-cyan/5 border border-white/[0.05] flex items-center justify-center shadow-inner relative overflow-hidden group-hover:border-brand-cyan/30 transition-colors">
                {/* Visual grid backdrop inside placeholder */}
                <div className="absolute inset-0 bg-grid opacity-10" />
                <ToolIcon name={tool.name} domain={tool.domain} initial={tool.initial} />
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
