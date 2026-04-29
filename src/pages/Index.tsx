import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Ticker from '@/components/Ticker';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import StudyNotes from '@/components/StudyNotes';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Ticker />
        <Experience />
        <Portfolio />
        <StudyNotes />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
