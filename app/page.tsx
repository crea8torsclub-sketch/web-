import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Curriculum from '@/components/Curriculum';
import Tools from '@/components/Tools';
import Demo from '@/components/Demo';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Enroll from '@/components/Enroll';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Curriculum />
        </ScrollReveal>
        <ScrollReveal>
          <Tools />
        </ScrollReveal>
        <ScrollReveal>
          <Demo />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
        <ScrollReveal>
          <Enroll />
        </ScrollReveal>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
