import { useLang } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';

const skillBadges = [
  'Cypress', 'Robot Framework', 'Selenium', 'Postman',
  'GitHub Actions', 'Docker', 'BDD/Gherkin', 'API Testing',
  'SQL', 'Git', 'Jira', 'TypeScript',
];
const primaryBadge = 'Python · React';

const About = () => {
  const { lang } = useLang();
  const c = content[lang].about;

  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-[60px]">

        <p className="reveal section-label mb-8" style={{ color: 'var(--text-muted)' }}>{c.label}</p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="reveal">
            <h2
              className="font-display leading-[0.9]"
              style={{ fontSize: 'clamp(64px, 7vw, 120px)', color: 'var(--text-primary)' }}
            >
              {c.h2a}
              <br />
              <span className="text-[#22C3B6]">{c.h2b}</span>
            </h2>

            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-3 transition-colors duration-200"
                style={{ background: '#22C3B6', color: '#0C0E12' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#1aada1')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#22C3B6')}
              >
                {c.cta1}
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-3 transition-colors duration-200"
                style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#22C3B6'; (e.currentTarget as HTMLElement).style.color = '#22C3B6'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
              >
                {c.cta2}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="reveal space-y-5">
            <p className="leading-relaxed text-sm lg:text-base" style={{ color: 'var(--text-muted)' }}>{c.bio1}</p>
            <p className="leading-relaxed text-sm lg:text-base" style={{ color: 'var(--text-muted)' }}>{c.bio2}</p>
            <p className="leading-relaxed text-sm lg:text-base" style={{ color: 'var(--text-muted)' }}>{c.bio3}</p>

            <div className="flex flex-wrap gap-2 pt-4">
              <span
                className="rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#0C0E12]"
                style={{ background: '#22C3B6' }}
              >
                {primaryBadge}
              </span>
              {skillBadges.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-200"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-20 pt-10"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {(['27', '3+', '10+', '10+', '2'] as const).map((val, i) => (
            <div key={i}>
              <p className="font-display text-[#22C3B6]" style={{ fontSize: 'clamp(44px, 4.5vw, 68px)' }}>
                {val}
              </p>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: 'var(--text-muted)' }}>
                {c.stats[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
