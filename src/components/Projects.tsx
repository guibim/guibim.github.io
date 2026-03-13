import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'BTCheck',
      subtitle: 'Bitcoin Metrics & News Portal',
      description:
        'Modular full-stack portal for Bitcoin metrics and news using Python, PostgreSQL/NeonDB, and React. Integrates third-party market APIs and a relational database for real-time metrics, with E2E tests using Cypress and Robot Framework.',
      tags: ['Python', 'React', 'PostgreSQL', 'Cypress', 'Robot Framework', 'GitHub Actions'],
      liveUrl: 'https://guibim.github.io/btcheck-site/',
      githubUrl: 'https://github.com/guibim/btcheck',
    },
    {
      title: 'Conv+',
      subtitle: 'File Conversion Service',
      description:
        'Multi-format file conversion service (JSON, XML, CSV, XLSX, BIM/IFC) built with Python, FastAPI, and React. Includes automated API contract tests and edge-case validation using Postman and Robot Framework.',
      tags: ['Python', 'FastAPI', 'React', 'Postman', 'Robot Framework', 'Docker'],
      liveUrl: 'https://guibim.github.io/conv-site/',
      githubUrl: 'https://github.com/guibim/conv',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-xl overflow-hidden card-hover group"
            >
              {/* Card Header with gradient accent */}
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              
              <div className="p-6 lg:p-8">
                <div className="mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium">{project.subtitle}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center gap-2"
                  >
                    View Live
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
