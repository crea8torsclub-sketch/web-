'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Anju',
      role: 'Student',
      initials: 'AJ',
      quote: 'As a girl , എനിക്ക് വീട്ടിലിരുന്ന് ആരെയും ആശ്രയിക്കാതെ തന്നെ AI Content creation ചെയ്യാൻ പറ്റുമെന്നുള്ള confident വന്നത് നിങ്ങളെ Courseയിൽ ജോയിൻ ചെയ്തപ്പോളാണ്. Thanks for this team & supportive community🥹🙌',
    },
    {
      name: 'Fathima Rasheed',
      role: 'Freelancer',
      initials: 'FR',
      quote: 'മോണിറ്റൈസേഷൻ മൊഡ്യൂൾ ആണ് എനിക്ക് ഏറ്റവും വാല്യൂ തന്നത് എന്റെ സ്കില്ലുകൾ ഒരു paid സർവീസ് ആക്കി മാറ്റാൻ വേണ്ട exact steps കിട്ടി.',
    },
    {
      name: 'Mubarak',
      role: 'UG Student',
      initials: 'M',
      quote: 'ഞാൻ ഒട്ടും technical skills ഇല്ലാത്ത ആളായിരുന്ന് , എന്നിട്ടും എല്ലാ modules പൂർത്തിയായി മനസിലായി , ഇപ്പോൾ videos ചെയ്തു തുടങ്ങി , ഇതിന്റെ full credits ഞാൻ crea8tors club ന് കൊടുക്കും.',
    },
    {
      name: 'Shinas',
      role: 'Entrepreneur',
      initials: 'S',
      quote: 'ഒരു Business owner എന്ന നിലയിൽ എനിക്ക് ഈ Skill തികച്ചും Useful ആയി. കാരണം സ്വന്തം Companyil ആരുടേയും സഹായം ഇല്ലാതെത്തന്നെ AI Videos ചെയ്യാനും പറഞ്ഞ് കൊടുക്കാനും കയ്യുന്നുണ്ട്.',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-24 bg-brand-dark/40 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute right-1/4 top-1/4 w-[400px] h-[400px] bg-glow-cyan opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase mb-4 block">
            💬 STUDENT RESULTS
          </span>
          <h2 className="font-space font-extrabold text-3xl md:text-5xl text-brand-text-primary mb-4 leading-relaxed tracking-normal">
            അഭിപ്രായം
          </h2>
          <p className="text-base md:text-lg text-brand-text-muted font-sans leading-relaxed">
            Real people, real workflows, real momentum after Crea8.AI.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Card Carousel for Mobile/Tablet */}
          <div className="relative overflow-hidden md:hidden min-h-[300px]">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <div className="hairline-border bg-brand-panel p-8 rounded-lg min-h-[250px] flex flex-col justify-between relative overflow-hidden">
                    <div>
                      {/* 5 Stars */}
                      <div className="flex gap-1 text-brand-cyan mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-brand-cyan text-brand-cyan" />
                        ))}
                      </div>
                      <p className="text-brand-text-primary text-base italic font-sans leading-relaxed mb-6">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center font-space font-bold text-brand-cyan text-xs shrink-0 select-none">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="font-space font-bold text-brand-text-primary text-base">
                          {t.name}
                        </h4>
                        {t.role && (
                          <p className="font-mono text-xs text-brand-cyan uppercase tracking-wider mt-0.5">
                            {t.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Layout for Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="hairline-border bg-brand-panel p-8 rounded-lg flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual accent top line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-brand-blue transition-colors duration-300" />
                
                <div>
                  {/* 5 Stars */}
                  <div className="flex gap-1 text-brand-cyan mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-brand-cyan text-brand-cyan" />
                    ))}
                  </div>
                  <p className="text-brand-text-primary text-sm italic font-sans leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center font-space font-bold text-brand-cyan text-xs shrink-0 select-none">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-space font-bold text-brand-text-primary text-sm">
                      {t.name}
                    </h4>
                    {t.role && (
                      <p className="font-mono text-[10px] text-brand-cyan uppercase tracking-wider mt-0.5">
                        {t.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls for Mobile */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/5 bg-brand-panel hover:border-brand-cyan/35 flex items-center justify-center text-brand-text-muted hover:text-brand-cyan transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-brand-cyan' : 'bg-white/10'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/5 bg-brand-panel hover:border-brand-cyan/35 flex items-center justify-center text-brand-text-muted hover:text-brand-cyan transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
