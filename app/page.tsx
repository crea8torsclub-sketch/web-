import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Curriculum from '@/components/Curriculum';
import Demo from '@/components/Demo';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Enroll from '@/components/Enroll';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Curriculum />
        <Demo />
        <Testimonials />
        <FAQ />
        <Enroll />
      </main>
      <Footer />
    </>
  );
}
