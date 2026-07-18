import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'How long does the course take to complete?',
      a: "The core curriculum takes about 8–10 hours across 12 modules. It's fully self-paced, so most students finish comfortably within two to three weeks while working on real projects alongside each lesson.",
    },
    {
      q: 'What skill level do I need to start?',
      a: "None. We start from the fundamentals and build up to advanced workflows. If you can use a web browser and type a sentence, you're ready to begin.",
    },
    {
      q: 'How long do I have access to the material?',
      a: 'You get lifetime access to all current and future modules. As tools evolve, we update the content and you keep everything at no extra cost.',
    },
    {
      q: 'Do I receive a certificate?',
      a: "Yes. Once you complete all modules you'll receive a Crea8.AI Certificate of Completion you can add to LinkedIn and your portfolio.",
    },
    {
      q: 'What kind of support do I get?',
      a: 'You get access to our private creator community and monthly live Q&A sessions with instructors, plus email support for any course-related questions.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[300px] bg-glow-blue opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase mb-4 block">
            ❓ QUESTIONS
          </span>
          <h2 className="font-space font-extrabold text-3xl md:text-5xl text-brand-text-primary mb-4">
            Things you&apos;ll want to know
          </h2>
        </div>

        {/* Accordion Group */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              name="faq-accordion"
              className="group hairline-border rounded-lg bg-brand-panel/40 overflow-hidden cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 text-brand-text-primary font-space font-bold text-base md:text-lg select-none outline-none">
                <span>{faq.q}</span>
                <ChevronDown size={18} className="text-brand-cyan transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-sm md:text-base text-brand-text-muted font-sans leading-relaxed border-t border-white/[0.03] pt-4 bg-brand-dark/20">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
