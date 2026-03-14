const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-base lg:text-lg">
              I am a QA Engineer with a strong passion for test automation and DevOps practices. My journey into technology began from a solid foundation in business administration and data analysis, where I developed analytical thinking and attention to detail that now drive my approach to software quality.
            </p>
            <p className="text-base lg:text-lg">
              Currently pursuing a degree in Software Engineering while preparing for the ISTQB CTFL certification, I am committed to continuous learning and staying current with industry best practices. My goal is to ensure software reliability through strategic testing approaches and modern automation frameworks.
            </p>
            <p className="text-base lg:text-lg">
              I believe in shift-left testing, integrating quality assurance from the earliest stages of development. By combining technical expertise with a deep understanding of business processes, I help teams deliver robust, high-quality software products.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">27</p>
              <p className="text-sm text-muted-foreground">Years Old</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">3+</p>
              <p className="text-sm text-muted-foreground">Years in QA</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">5+</p>
              <p className="text-sm text-muted-foreground">Tech Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">2</p>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
