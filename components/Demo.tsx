'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="relative py-24 border-y border-white/[0.03] bg-brand-dark/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute left-1/4 bottom-1/4 w-[450px] h-[450px] bg-glow-blue opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase mb-4 block">
            🎥 SEE IT IN ACTION
          </span>
          <h2 className="font-space font-extrabold text-3xl md:text-5xl text-brand-text-primary mb-4">
            Preview a real workflow lesson
          </h2>
          <p className="text-base md:text-lg text-brand-text-muted font-sans leading-relaxed">
            Watch how creators go from blank page to published content in minutes.
          </p>
        </div>

        {/* Video Player Wrapper */}
        <div className="relative group max-w-4xl mx-auto rounded-lg overflow-hidden border border-white/[0.08] bg-brand-panel/60 p-3 hover:border-brand-cyan/20 transition-all duration-500 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative aspect-video rounded overflow-hidden bg-brand-dark border border-white/5">
            {!isPlaying ? (
              // Video Cover / Placeholder State
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid opacity-10" />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
                
                {/* Visual tech HUD elements */}
                <div className="absolute inset-6 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start font-mono text-[10px] text-brand-cyan/60">
                    <span>STATUS: READY</span>
                    <span>SECURE LINK: SECURE_CHANNEL_04</span>
                  </div>
                  <div className="flex justify-between items-end font-mono text-[10px] text-brand-text-muted">
                    <span>SYS_PREVIEW // MOD_04</span>
                    <span>LENGTH: 03:00</span>
                  </div>
                </div>

                {/* Big Futuristic Play Button */}
                <button 
                  className="relative z-10 w-20 h-20 rounded-full bg-brand-blue/90 hover:bg-brand-blue text-brand-text-primary flex items-center justify-center border border-brand-cyan/35 shadow-[0_0_30px_rgba(56,217,255,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(56,217,255,0.4)] transition-all duration-300"
                  aria-label="Play video"
                >
                  <Play size={24} className="fill-brand-cyan text-brand-cyan translate-x-0.5" />
                </button>
                
                <span className="relative z-10 font-space font-bold text-sm uppercase tracking-wider text-brand-text-primary mt-6 group-hover:text-brand-cyan transition-colors">
                  Launch Course Walkthrough
                </span>
              </div>
            ) : (
              // Embedded YouTube Iframe
              <iframe
                className="w-full h-full rounded"
                src="https://www.youtube.com/embed/aPT_omPh6p8?autoplay=1&loop=1&playlist=aPT_omPh6p8"
                title="Crea8.AI Module 04 Walkthrough Preview"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* Video Caption */}
        <p className="text-center text-xs md:text-sm font-mono text-brand-text-muted mt-6 max-w-xl mx-auto leading-relaxed">
          A 3-minute walkthrough of Module 04: building a reusable prompt framework from scratch.
        </p>

      </div>
    </section>
  );
}
