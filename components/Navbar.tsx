'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // detects focus around the upper/middle viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ['about', 'modules', 'demo', 'testimonials', 'faq'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Modules', href: '#modules' },
    { name: 'Demo', href: '#demo' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-space font-bold text-xl tracking-wider text-brand-text-primary flex items-center gap-1 hover:opacity-90">
          <span className="text-brand-blue font-mono font-extrabold">&lt;</span>
          CREA8.AI
          <span className="text-brand-cyan font-mono font-extrabold">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-sans font-medium transition-colors relative py-1 ${
                  isActive ? 'text-brand-cyan' : 'text-brand-text-muted hover:text-brand-cyan'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-brand-cyan transition-all duration-300 transform origin-left ${
                  isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`} />
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#enroll"
            className="px-5 py-2.5 rounded-lg text-sm font-space font-bold bg-brand-blue hover:bg-brand-blue/90 text-brand-text-primary border border-brand-cyan/20 hover:border-brand-cyan/50 hover:shadow-[0_0_20px_rgba(56,217,255,0.35)] transition-all duration-150 hover:scale-[1.02] active:scale-[0.97] inline-block cursor-pointer"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-text-primary p-2 hover:text-brand-cyan transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-brand-panel/95 backdrop-blur-md border-b border-white/5 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors ${
                  isActive ? 'text-brand-cyan' : 'text-brand-text-muted hover:text-brand-cyan'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#enroll"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-3 rounded-lg font-space font-bold bg-brand-blue text-brand-text-primary border border-brand-cyan/25 hover:shadow-[0_0_20px_rgba(56,217,255,0.35)] transition-all duration-150 hover:scale-[1.02] active:scale-[0.97] cursor-pointer"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
}
