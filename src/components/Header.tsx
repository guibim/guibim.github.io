import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLang } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dark, toggle: toggleTheme } = useTheme();
  const { lang, setLang } = useLang();
  const nav = content[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: nav.about },
    { href: '#experience', label: nav.experience },
    { href: '#projects', label: nav.projects },
    { href: '#notes', label: nav.notes },
    { href: '#certifications', label: nav.certifications },
    { href: '#contact', label: nav.contact },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const headerBg = isScrolled
    ? dark
      ? 'bg-[#0C0E12]/95 border-b border-[#272C35]'
      : 'bg-white/95 border-b border-black/10'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm ${headerBg}`}>
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-[60px] flex items-center justify-between h-16">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-display text-3xl tracking-wider leading-none"
          style={{ color: 'var(--text-primary)' }}
        >
          GUI<span className="text-[#22C3B6]">BIM</span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className="relative group font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-300"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#22C3B6] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            className="font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border transition-colors duration-200"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-muted)',
            }}
            title="Toggle language"
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden border-t px-6 py-6"
          style={{ background: 'var(--bg-main)', borderColor: 'var(--border)' }}
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="font-mono text-[11px] tracking-[0.15em] uppercase transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
