import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import StudyNotes from '@/components/StudyNotes';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <StudyNotes />
        <Experience />
        <Portfolio />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
