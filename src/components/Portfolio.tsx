import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { useLang } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';

const Portfolio = () => {
  const { lang } = useLang();
  const c = content[lang].projects;

  return (
    <section id="projects" className="py-24 lg:py-32" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-[60px]">

        <p className="reveal section-label mb-8" style={{ color: 'var(--text-muted)' }}>{c.label}</p>

        <h2
          className="reveal font-display leading-[0.9] mb-16"
          style={{ fontSize: 'clamp(56px, 7vw, 110px)', color: 'var(--text-primary)' }}
        >
          {c.h2a}
          <br />
          <span className="text-[#22C3B6]">{c.h2b}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.slug}`}
              className="reveal group relative flex flex-col gap-4 p-7 no-underline transition-all duration-300"
              style={{
                background: 'var(--bg-alt)',
                border: '1px dashed var(--border)',
                transitionDelay: `${(index % 3) * 50}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderStyle = 'solid';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,195,182,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderStyle = 'dashed';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(34,195,182,0.06), transparent 70%)' }}
              />

              {/* Number + logo */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: '#22C3B6' }}>
                  [{String(project.id).padStart(2, '0')}]
                </span>
                <div className="flex items-center gap-2">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-8 h-8 object-contain rounded p-1 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'var(--border)' }}
                  />
                  <span
                    className="font-mono text-[20px] group-hover:text-[#22C3B6] transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    +
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="relative z-10">
                <h4
                  className="font-display group-hover:text-[#22C3B6] transition-colors duration-200"
                  style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h4>
                <p className="font-mono text-[10px] tracking-[0.1em] uppercase mt-1" style={{ color: 'var(--text-muted)' }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Summary */}
              <p className="relative z-10 text-sm leading-relaxed line-clamp-3 flex-1" style={{ color: 'var(--text-muted)' }}>
                {project.summary}
              </p>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded px-2.5 py-1 font-mono text-[9px] tracking-[0.08em]"
                    style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="font-mono text-[9px] py-1 px-1" style={{ color: 'var(--text-muted)' }}>
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
