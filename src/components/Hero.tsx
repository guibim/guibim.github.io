import { ArrowDown, Download, MapPin } from 'lucide-react';

const Hero = () => {
  const tags = [
    'QA Automation',
    'DevOps',
    'CI/CD',
    'Cypress',
    'Robot Framework',
    'API Testing',
  ];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <MapPin size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Based in Jaguariúna – São Paulo, Brazil</span>
          </div>

          {/* Name */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Guilherme Bim
          </h1>

          {/* Role */}
          <p 
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-gradient mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            QA Engineer & SDET
          </p>

          {/* Description */}
          <p 
            className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            QA Engineer focused on test automation and DevOps culture. Solid background in process and data analysis, transitioning to technology with hands-on experience in Cypress, Selenium, Robot Framework, and Postman, as well as CI/CD integration and Agile methodologies.
          </p>

          {/* Tags */}
          <div 
            className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {tags.map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary px-8 py-3 rounded-lg font-medium flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={18} />
            </button>
            <a
              href="#"
              className="btn-outline px-8 py-3 rounded-lg font-medium flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
