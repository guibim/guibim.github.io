import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';

const floatingTags = [
  { label: 'QA Automation', top: '14%', left: '7%', delay: '0s' },
  { label: 'React · TypeScript', top: '22%', right: '10%', delay: '0.8s' },
  { label: 'Robot Framework', top: '42%', left: '4%', delay: '1.4s' },
  { label: 'CI/CD · Docker', top: '38%', right: '6%', delay: '0.4s' },
  { label: 'API Testing', top: '18%', left: '52%', delay: '1.1s' },
  { label: 'Cypress', top: '58%', right: '4%', delay: '1.8s' },
  { label: 'Python · FastAPI', top: '62%', left: '8%', delay: '0.6s' },
  { label: 'Full-Stack Dev', top: '30%', left: '28%', delay: '2.0s' },
];

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { lang } = useLang();
  const c = content[lang].hero;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const v = Math.random() * 255;
        imageData.data[i] = v;
        imageData.data[i + 1] = v;
        imageData.data[i + 2] = v;
        imageData.data[i + 3] = 12;
      }
      ctx.putImageData(imageData, 0, 0);
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: 'var(--bg-main)' }}
    >
      {/* Teal gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(34,195,182,0.08), transparent 70%)',
        }}
      />

      {/* Canvas grain */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.25 }}
      />

      {/* Floating tags */}
      {floatingTags.map((tag) => (
        <div
          key={tag.label}
          className="absolute hidden lg:flex font-mono text-[10px] tracking-[0.12em] uppercase px-4 py-2 rounded-full animate-float select-none pointer-events-none"
          style={{
            top: tag.top,
            left: 'left' in tag ? (tag as { left: string }).left : undefined,
            right: 'right' in tag ? (tag as { right: string }).right : undefined,
            animationDelay: tag.delay,
            animationDuration: `${4.5 + parseFloat(tag.delay) * 0.8}s`,
            border: '1px solid rgba(34,195,182,0.25)',
            color: '#22C3B6',
            background: 'rgba(34,195,182,0.05)',
          }}
        >
          {tag.label}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-[60px] pb-14 w-full">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
          {c.location}
        </p>

        <h1
          className="font-display leading-[0.88] overflow-hidden"
          style={{ fontSize: 'clamp(72px, 11vw, 170px)', color: 'var(--text-primary)' }}
        >
          <span className="block">GUILHERME</span>
          <span className="block text-[#22C3B6]">BIM</span>
        </h1>

        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-8 pt-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase" style={{ color: '#22C3B6' }}>
              {c.role}
            </p>
            <p className="max-w-sm mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {c.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-3 flex items-center gap-2 transition-colors duration-200"
              style={{ background: '#22C3B6', color: '#0C0E12' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1aada1')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#22C3B6')}
            >
              {c.viewPortfolio}
              <ArrowDown size={13} />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-3 transition-colors duration-200"
              style={{
                border: '1px solid #22C3B6',
                color: '#22C3B6',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(34,195,182,0.1)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              {c.downloadCV}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
