import { ExternalLink } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';

const COURSES_URL =
  'https://docs.google.com/spreadsheets/d/1CD9x_f_cSd1cHMqV2ocq6ZeNRr0EsZ32hiYcxnFE1Xw/edit?gid=0#gid=0';

const certifications = [
  { name: 'Certified Scrum Professional®', issuer: 'CertiPROF', approved: true },
  { name: 'ISTQB CTFL', issuer: 'ISTQB — Expected 2026', approved: false },
];

const education = [
  { degree: 'B.Sc. Software Engineering', institution: 'Faculdade Anhanguera', period: 'Jan 2026 – In Progress', inProgress: true },
  { degree: 'B.B.A. Business Administration', institution: 'Centro Universitário de Jaguariúna (UniFAJ)', period: 'Jan 2019 – Dec 2022', inProgress: false },
];

const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Advanced' },
];

const Education = () => {
  const { lang } = useLang();
  const c = content[lang].certifications;

  return (
    <section id="certifications" className="py-24 lg:py-32" style={{ background: 'var(--bg-main)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-[60px]">

        <p className="reveal section-label mb-8" style={{ color: 'var(--text-muted)' }}>{c.label}</p>

        <h2
          className="reveal font-display leading-[0.9] mb-16"
          style={{ fontSize: 'clamp(44px, 6vw, 90px)', color: 'var(--text-primary)' }}
        >
          {c.h2a}
          <br />
          <span className="text-[#22C3B6]">{c.h2b}</span>
        </h2>

        {/* Certifications */}
        <div className="reveal mb-14">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <p className="section-label" style={{ color: 'var(--text-muted)' }}>{c.certsTitle}</p>
            <a
              href={COURSES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase px-4 py-2 transition-colors duration-200"
              style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#22C3B6'; (e.currentTarget as HTMLElement).style.color = '#22C3B6'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
            >
              <ExternalLink size={11} />
              {lang === 'en' ? 'View All Courses & Certificates' : 'Ver Todos os Cursos & Certificados'}
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group p-6 transition-colors duration-300"
                style={{
                  border: cert.approved ? '1px solid var(--border)' : '1px dashed var(--border)',
                  opacity: cert.approved ? 1 : 0.65,
                }}
                onMouseEnter={(e) => cert.approved && ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,195,182,0.5)')}
                onMouseLeave={(e) => cert.approved && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ background: '#22C3B6' }}
                >
                  <span className="font-mono text-xs text-[#0C0E12]">&gt;_</span>
                </div>
                <h4
                  className="font-display leading-tight"
                  style={{ fontSize: 'clamp(18px, 2vw, 22px)', color: 'var(--text-primary)' }}
                >
                  {cert.name}
                </h4>
                <p className="font-mono text-[10px] tracking-[0.1em] mt-1" style={{ color: 'var(--text-muted)' }}>
                  {cert.issuer}
                </p>
                <p className={`font-mono text-[10px] tracking-[0.12em] uppercase mt-4 ${cert.approved ? 'text-emerald-500' : 'text-yellow-500'}`}>
                  {cert.approved ? '✓ APPROVED' : '○ IN PROGRESS'}
                </p>
              </div>
            ))}

            {/* Next placeholder */}
            <div
              className="p-6 flex flex-col items-center justify-center gap-2 opacity-30"
              style={{ border: '1px dashed var(--border)' }}
            >
              <span className="font-mono text-2xl" style={{ color: 'var(--text-muted)' }}>+</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>
                {c.next}
              </span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="reveal mb-10">
          <p className="section-label mb-5" style={{ color: 'var(--text-muted)' }}>{c.eduTitle}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 transition-colors duration-300"
                style={{ border: '1px solid var(--border)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,195,182,0.4)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
              >
                <h4
                  className="font-display leading-tight"
                  style={{ fontSize: 'clamp(18px, 2vw, 22px)', color: 'var(--text-primary)' }}
                >
                  {edu.degree}
                </h4>
                <p className="font-mono text-[10px] tracking-[0.1em] mt-1" style={{ color: 'var(--text-muted)' }}>
                  {edu.institution}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>{edu.period}</span>
                  <span className={`font-mono text-[10px] tracking-[0.12em] uppercase ${edu.inProgress ? 'text-yellow-500' : 'text-emerald-500'}`}>
                    {edu.inProgress ? '○ IN PROGRESS' : '✓ COMPLETED'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="reveal" style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
          <p className="section-label mb-4" style={{ color: 'var(--text-muted)' }}>{c.langsTitle}</p>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <div key={lang.name} className="px-5 py-2.5" style={{ border: '1px solid var(--border)' }}>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: 'var(--text-primary)' }}>
                  {lang.name}
                </span>
                <span className="font-mono text-[10px] ml-2" style={{ color: 'var(--text-muted)' }}>
                  — {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
