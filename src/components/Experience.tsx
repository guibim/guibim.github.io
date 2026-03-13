import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'PER5 Engenharia',
      role: 'OpenBIM (IFC) QA Analyst & Business Development',
      period: 'Oct 2024 – Present',
      location: 'Remote — Freelance',
      focus: 'Validating deliverables and standardizing documentation to ensure interoperability.',
      highlights: [
        'I lead the OpenBIM (IFC) QA/QC front, validating deliverables and standardizing documentation to ensure interoperability, reduce rework, and improve overall project quality, aligned with ISO 19650 guidelines.',
        'I manage the technical-commercial interface: I structure and maintain lead qualification processes, translate client needs into clear and traceable scope and criteria, and ensure seamless handoff to the operational team.',
        'I also support the organization of the services portfolio and the production of technical materials (PT/EN).',
      ],
    },
    {
      company: 'Nuclear Gaming',
      role: 'QA Analyst',
      period: 'Jan 2025 – Present',
      location: 'Remote — Freelance',
      focus: 'Planned and executed functional, regression, and exploratory tests for Unity games.',
      highlights: [
        'Worked on a Unity WebGL/HTML5 game development project, planning and executing functional, regression, and exploratory tests to ensure requirement compliance and release stability.',
        'Logged, prioritized, and tracked defects with complete evidence, aligning severity and impact with cross-functional teams through resolution.',
        'Supported performance and stability validations, release checklists, and contributed to execution routines and automations within a standardized environment, leveraging CI and Docker.',
      ],
    },
    {
      company: 'Grupo BIM',
      role: 'Administrative | Process & Data Quality',
      period: 'Jan 2017 – Aug 2025',
      location: 'On-site',
      focus: 'Administrative, financial, and operational management.',
      highlights: [
        'Developed and improved internal systems for process control and traceability, with a strong focus on data quality and consistency. Created dashboards and spreadsheet models with validations, standardization, and auditing, applying Quality Assurance practices to reduce defects and rework.',
        'Automated routines using JavaScript for data validation, transformation, and reporting with automated checks.',
        'Implemented Python scripts and applications for data consolidation and analysis, ensuring reliability and traceability of information.',
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
