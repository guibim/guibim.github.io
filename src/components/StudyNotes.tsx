import { 
  FileText, 
  Code, 
  Server, 
  Terminal, 
  Container,
  FolderOpen,
  ExternalLink 
} from 'lucide-react';

const StudyNotes = () => {
  const contentTypes = [
    {
      icon: FileText,
      title: 'Software Testing & QA Fundamentals',
      description: 'Theory, test design techniques, and QA principles',
    },
    {
      icon: Code,
      title: 'Test Automation with Cypress & Robot Framework',
      description: 'Framework architecture, Page Objects, and advanced patterns',
    },
    {
      icon: Server,
      title: 'API Testing & Postman',
      description: 'REST strategies, collections, and contract testing',
    },
    {
      icon: Terminal,
      title: 'Python & JavaScript for QA',
      description: 'Automation scripts, data handling, and practical examples',
    },
    {
      icon: Container,
      title: 'DevOps, CI/CD & Docker',
      description: 'Pipelines, containerization basics, and continuous testing',
    },
  ];

  return (
    <section id="notes" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Study Notes & Learning Resources
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This section hosts downloadable notes, study summaries, and learning resources that I've compiled throughout my QA journey. These materials cover various topics from testing fundamentals to advanced automation techniques.
          </p>
        </div>

        {/* Single unified container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-elegant">
            {/* Header with folder icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <FolderOpen size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Unified Study Materials
                </h3>
                <p className="text-sm text-muted-foreground">
                  All resources in one organized folder
                </p>
              </div>
            </div>

            {/* Description paragraph */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              All materials are organized inside a single Google Drive folder for easy access. 
              The content is continuously updated as I learn and grow as a QA professional. 
              Feel free to explore, download, and use these resources for your own learning journey.
            </p>

            {/* Content types list */}
            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">
                What's Inside
              </h4>
              <ul className="grid gap-3">
                {contentTypes.map((item) => (
                  <li 
                    key={item.title}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
                  >
                    <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <span className="font-medium text-foreground block">
                        {item.title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Single CTA button */}
            <a
              href="https://drive.google.com/drive/folders/1FxiMYio-i2LRwopK0s9DcsQZzKuoU9Oi?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <FolderOpen size={20} />
              Download from Google Drive
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyNotes;
