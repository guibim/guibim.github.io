import { GraduationCap, Award, Clock } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.S. in Software Engineering',
      institution: 'Faculdade Anhanguera',
      status: 'Expected 2029',
      inProgress: true,
    },
    {
      degree: 'B.S. in Business Administration',
      institution: 'UniFAJ',
      status: 'Graduated 2022',
      inProgress: false,
    },
  ];

  const certifications = [
    {
      name: 'Certified Scrum Professional®',
      issuer: 'Scrum Alliance',
      inProgress: false,
    },
    {
      name: 'ISTQB CTFL',
      issuer: 'ISTQB',
      inProgress: true,
    },
  ];

  const languages = [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'Professional' },
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
          Education & Certifications
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="bg-card border border-border rounded-xl p-5 card-hover"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          edu.inProgress
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary text-secondary-foreground'
                        }`}
                      >
                        {edu.inProgress && <Clock size={12} className="inline mr-1" />}
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="bg-card border border-border rounded-xl p-5 card-hover"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      {cert.inProgress && (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1">
                          <Clock size={12} />
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-8">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Languages
                </h4>
                <div className="flex gap-3">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="px-4 py-2 bg-card border border-border rounded-lg"
                    >
                      <span className="text-foreground font-medium">{lang.name}</span>
                      <span className="text-muted-foreground text-sm ml-2">({lang.level})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
