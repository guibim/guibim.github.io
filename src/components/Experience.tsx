import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Nuclear Gaming',
      role: 'QA Analyst (Freelance)',
      period: 'Jan 2025 – Dec 2025',
      location: 'Remote',
      focus: 'Build stabilization and test infrastructure automation for Unity/HTML5 games.',
      highlights: [
        'Performance Testing: Validated stability and performance in Unity WebGL environments, focusing on rendering bottlenecks and usability.',
        'Pipeline & Infra: Implemented CI/CD workflows with Docker, automating deployment and ensuring code integrity across releases.',
        'Shift-left Testing: Strategic involvement in defining software architecture and testability standards from the design phase.',
      ],
    },
    {
      company: 'Grupo BIM',
      role: 'Administrative Operations',
      period: 'Jan 2017 – Aug 2025',
      location: 'On-site',
      focus: 'Administrative, financial, and operational management.',
      highlights: [
        'Managed logistics operations, data organization, and coordination between legal and accounting departments.',
        'Developed analytical skills and attention to detail that now drive my approach to software quality.',
        'Built a strong foundation in process optimization and systematic problem-solving.',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
          Professional Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative pl-8 md:pl-20 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-1.5 ring-4 ring-background" />

                {/* Content card */}
                <div className="bg-card border border-border rounded-xl p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 italic">{exp.focus}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
