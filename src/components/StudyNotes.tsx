import { ExternalLink } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const DRIVE_URL =
  'https://drive.google.com/drive/folders/1FxiMYio-i2LRwopK0s9DcsQZzKuoU9Oi?usp=sharing';

const categories = {
  en: [
    { label: 'Software Testing & QA Fundamentals', desc: 'Theory, test design techniques, and QA principles' },
    { label: 'Test Automation with Cypress & Robot Framework', desc: 'Framework architecture, Page Objects, and advanced patterns' },
    { label: 'API Testing & Postman', desc: 'REST strategies, collections, and contract testing' },
    { label: 'Python & JavaScript for QA', desc: 'Automation scripts, data handling, and practical examples' },
    { label: 'DevOps, CI/CD & Docker', desc: 'Pipelines, containerization basics, and continuous testing' },
    { label: 'Software Engineering themes', desc: 'Design patterns, clean code, architecture, and software fundamentals' },
  ],
  pt: [
    { label: 'Fundamentos de QA & Testes de Software', desc: 'Teoria, técnicas de design de testes e princípios de QA' },
    { label: 'Automação com Cypress & Robot Framework', desc: 'Arquitetura de frameworks, Page Objects e padrões avançados' },
    { label: 'Testes de API & Postman', desc: 'Estratégias REST, coleções e testes de contrato' },
    { label: 'Python & JavaScript para QA', desc: 'Scripts de automação, manipulação de dados e exemplos práticos' },
    { label: 'DevOps, CI/CD & Docker', desc: 'Pipelines, fundamentos de containerização e testes contínuos' },
    { label: 'Temas de Engenharia de Software', desc: 'Padrões de design, código limpo, arquitetura e fundamentos de software' },
  ],
};

const strings = {
  en: {
    label: '[04] — STUDY NOTES',
    h2a: 'LEARNING',
    h2b: 'RESOURCES',
    subtitle: 'Unified Study Materials · All resources in one organized folder',
    description:
      'All materials are organized inside a single Google Drive folder for easy access. The content is continuously updated as I learn and grow as a QA professional. Feel free to explore, download, and use these resources for your own learning journey.',
    whatsInside: "What's Inside",
    driveLabel: 'Access on Google Drive',
  },
  pt: {
    label: '[04] — NOTAS DE ESTUDO',
    h2a: 'RECURSOS DE',
    h2b: 'APRENDIZADO',
    subtitle: 'Materiais Unificados · Todos os recursos em uma pasta organizada',
    description:
      'Todos os materiais estão organizados em uma única pasta no Google Drive para fácil acesso. O conteúdo é atualizado continuamente conforme aprendo e evoluo como profissional de QA. Sinta-se à vontade para explorar, baixar e usar esses recursos na sua jornada de aprendizado.',
    whatsInside: 'O que tem lá dentro',
    driveLabel: 'Acessar no Google Drive',
  },
};

const StudyNotes = () => {
  const { lang } = useLang();
  const s = strings[lang];
  const cats = categories[lang];

  return (
    <section id="notes" className="py-24 lg:py-32" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-[60px]">

        <p className="reveal section-label mb-8" style={{ color: 'var(--text-muted)' }}>{s.label}</p>

        <h2
          className="reveal font-display leading-[0.9] mb-4"
          style={{ fontSize: 'clamp(52px, 6.5vw, 100px)', color: 'var(--text-primary)' }}
        >
          {s.h2a}
          <br />
          <span className="text-[#22C3B6]">{s.h2b}</span>
        </h2>

        <p className="reveal font-mono text-[11px] tracking-[0.1em] mb-12" style={{ color: 'var(--text-muted)' }}>
          {s.subtitle}
        </p>

        <div className="reveal grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: description + CTA */}
          <div className="flex flex-col gap-8">
            <p className="text-sm lg:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {s.description}
            </p>
            <a
              href={DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-4 self-start transition-colors duration-200"
              style={{ background: '#22C3B6', color: '#0C0E12' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#1aada1')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#22C3B6')}
            >
              <ExternalLink size={14} />
              {s.driveLabel}
            </a>
          </div>

          {/* Right: categories list */}
          <div>
            <p className="section-label mb-4" style={{ color: 'var(--text-muted)' }}>{s.whatsInside}</p>
            <div>
              {cats.map((cat, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 py-4"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <span className="font-mono text-[10px] mt-0.5 shrink-0" style={{ color: '#22C3B6' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p
                      className="font-display group-hover:text-[#22C3B6] transition-colors duration-200 leading-tight"
                      style={{ fontSize: 'clamp(15px, 1.4vw, 19px)', color: 'var(--text-primary)' }}
                    >
                      {cat.label}
                    </p>
                    <p className="font-mono text-[10px] mt-1 tracking-[0.05em]" style={{ color: 'var(--text-muted)' }}>
                      {cat.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyNotes;
