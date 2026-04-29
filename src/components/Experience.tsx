import { useLang } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';

const Experience = () => {
  const { lang } = useLang();
  const c = content[lang].experience;

  return (
    <section id="experience" className="py-24 lg:py-32" style={{ background: 'var(--bg-main)' }}>
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

        <div>
          {c.items.map((exp) => (
            <div
              key={exp.company}
              className="reveal group relative grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-12 py-10 transition-all duration-300"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {/* Teal hover bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: '#22C3B6' }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(34,195,182,0.06), transparent 70%)',
                }}
              />

              {/* Left: period */}
              <div className="relative z-10">
                <p className="font-mono text-[11px] tracking-[0.1em]" style={{ color: '#22C3B6' }}>
                  {exp.period}
                </p>
                <p className="font-mono text-[10px] mt-1 tracking-[0.08em]" style={{ color: 'var(--text-muted)' }}>
                  {exp.location}
                </p>
              </div>

              {/* Right: content */}
              <div className="relative z-10">
                <h3
                  className="font-display"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', color: 'var(--text-primary)' }}
                >
                  {exp.company}
                </h3>
                <p
                  className="font-mono text-[10px] tracking-[0.12em] uppercase mt-1"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {exp.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-muted)' }}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded px-3 py-1 font-mono text-[10px] tracking-[0.08em] transition-colors duration-200"
                      style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
