import { 
  TestTube2, 
  Server, 
  GitBranch, 
  Code2, 
  Users 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: TestTube2,
      title: 'Test Automation (Web & E2E)',
      skills: ['Cypress', 'Robot Framework', 'Selenium', 'Page Object Model', 'BDD/Gherkin'],
    },
    {
      icon: Server,
      title: 'API Testing',
      skills: ['Postman', 'REST API Testing', 'Contract Validation', 'Integration Tests', 'API Automation'],
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      skills: ['GitHub Actions', 'Docker', 'Pipeline Automation', 'Containerization', 'Infrastructure'],
    },
    {
      icon: Code2,
      title: 'Languages & Tools',
      skills: ['Python', 'JavaScript', 'SQL', 'Git/GitHub', 'VS Code'],
    },
    {
      icon: Users,
      title: 'Methodologies & Processes',
      skills: ['Agile/Scrum', 'BDD', 'Test Planning', 'Defect Management', 'Shift-left Testing'],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
          Skills & Core Competencies
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
