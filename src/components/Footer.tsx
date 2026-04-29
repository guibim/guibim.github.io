import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';

const socialLinks = [
  { icon: Github, href: 'https://github.com/guibim', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/guilherme-bim', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:guilhermebim016@gmail.com', label: 'guilhermebim016@gmail.com' },
];

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { lang } = useLang();
  const c = content[lang].contact;
  const f = content[lang].footer;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    const draw = () => {
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const v = Math.random() * 255;
        imageData.data[i] = v; imageData.data[i + 1] = v; imageData.data[i + 2] = v; imageData.data[i + 3] = 12;
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
    <>
      {/* Contact section */}
      <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--bg-card)' }}>
        {/* Teal glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 30%, rgba(34,195,182,0.07), transparent 70%)' }}
        />
        {/* Grain */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.2 }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-[60px]">
          <p className="reveal section-label mb-8" style={{ color: 'var(--text-muted)' }}>{c.label}</p>

          <h2
            className="reveal font-display leading-[0.9] mb-16"
            style={{ fontSize: 'clamp(60px, 8vw, 120px)', color: 'var(--text-primary)' }}
          >
            {c.h2a}
            <br />
            <span className="text-[#22C3B6]">{c.h2b}</span>
          </h2>

          <div className="reveal grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Social links */}
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 shrink-0"
                    style={{ background: 'var(--border)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(34,195,182,0.15)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--border)')}
                  >
                    <link.icon size={17} style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.15em] group-hover:text-[#22C3B6] transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {link.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Email CTA */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
                {c.sendMessage}
              </p>
              <a
                href="mailto:guilhermebim016@gmail.com"
                className="block font-display leading-tight break-all hover:text-[#22C3B6] transition-colors duration-200"
                style={{ fontSize: 'clamp(20px, 3vw, 38px)', color: 'var(--text-primary)' }}
              >
                guilhermebim016@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer
        className="py-6"
        style={{ background: 'var(--bg-main)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-[60px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-[22px] tracking-wider leading-none" style={{ color: 'var(--text-primary)' }}>
            GUI<span className="text-[#22C3B6]">BIM</span>
          </span>
          <span className="font-mono text-[10px] tracking-[0.1em] text-center" style={{ color: 'var(--text-muted)' }}>
            {f.copyright}
          </span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-colors duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#22C3B6'; (e.currentTarget as HTMLElement).style.color = '#22C3B6'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
          >
            {f.downloadCV}
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
