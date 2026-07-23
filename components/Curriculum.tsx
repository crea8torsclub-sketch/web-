import { 
  PenTool, 
  Image as ImageIcon, 
  Video, 
  Terminal, 
  Layers, 
  Mic, 
  UserCheck, 
  MessageSquare, 
  Film, 
  Wallet 
} from 'lucide-react';

export default function Curriculum() {
  const modules = [
    {
      num: '01',
      title: 'AI Writing Mastery',
      desc: 'Draft posts, emails, and long-form content that keeps your voice using ChatGPT, Claude, and custom style prompts.',
      icon: PenTool,
    },
    {
      num: '02',
      title: 'AI Image Generation',
      desc: 'Generate scroll-stopping images, thumbnails, and brand assets with Midjourney and DALL·E workflows.',
      icon: ImageIcon,
    },
    {
      num: '03',
      title: 'AI Video Generation',
      desc: 'Script, edit, and produce short-form video with AI avatars, voiceovers, and automated editing tools.',
      icon: Video,
    },
    {
      num: '04',
      title: 'Prompt Engineering',
      desc: 'Build reusable prompt frameworks that get consistent, high-quality output on the first try, every time.',
      icon: Terminal,
    },
    {
      num: '05',
      title: 'Deep Dive – Higgsfield',
      desc: 'Plan, repurpose, and schedule a full content calendar so one idea becomes ten pieces across channels.',
      icon: Layers,
    },
    {
      num: '06',
      title: 'Voice Cloning',
      desc: 'Turn your output into income with productized services, digital offers, and client-ready deliverables.',
      icon: Mic,
    },
    {
      num: '07',
      title: 'Build AI Avatar',
      desc: 'Create a realistic AI version of yourself for scalable video content without being on camera every time.',
      icon: UserCheck,
    },
    {
      num: '08',
      title: 'AI Talking Video Generation',
      desc: 'Turn scripts into polished talking-head videos using AI avatars, cloned voices, and auto lip-sync.',
      icon: MessageSquare,
    },
    {
      num: '09',
      title: 'Post Production',
      desc: 'Edit, caption, and repurpose raw footage into platform-ready shorts with AI-assisted editing tools.',
      icon: Film,
    },
    {
      num: '10',
      title: 'Monetization Session',
      desc: 'Package your new AI skills into paid offers — pricing, positioning, and outreach scripts to land your first paying clients.',
      icon: Wallet,
    },
  ];

  return (
    <section id="modules" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background glow in center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-cyan opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest uppercase mb-4 block">
            ☰ THE CURRICULUM
          </span>
          <h2 className="font-space font-extrabold text-3xl md:text-5xl text-brand-text-primary mb-4">
            Zero to AI Creator Pro
          </h2>
          <p className="text-base md:text-lg text-brand-text-muted font-sans leading-relaxed">
            A step-by-step path from AI basics to a full content engine you can monetize.
          </p>
        </div>

        {/* 3 Column Grid with Centered Module 10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className={`hairline-border relative rounded-lg bg-brand-panel/60 p-8 flex flex-col justify-between group cursor-default transition-all duration-300 ${
                  mod.num === '10'
                    ? 'md:col-span-2 lg:col-span-1 lg:col-start-2'
                    : ''
                }`}
              >
                {/* Subtle top indicator line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-brand-blue/30 group-hover:bg-brand-cyan transition-colors duration-300" />
                
                <div>
                  {/* Module Header with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-brand-cyan uppercase tracking-wider block">
                      Module {mod.num}
                    </span>
                    <Icon size={20} className="text-brand-cyan/70 stroke-[1.5] group-hover:text-brand-cyan transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-space font-bold text-xl text-brand-text-primary mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                    {mod.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-text-muted font-sans leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                {/* Huge transparent overlay number on the bottom right */}
                <div className="absolute bottom-4 right-6 font-mono text-6xl font-black text-white/[0.015] group-hover:text-white/[0.035] transition-colors duration-300 select-none">
                  {mod.num}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
