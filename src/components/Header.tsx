import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/logo.png'; // import do logo

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm shadow-card transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={Logo} 
              alt="Logo PER5" 
              className="h-10 w-auto" 
            />
            <h2 className="text-xl font-bold text-primary">
              PER5 PROJETOS E CONSULTORIA
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('quem-somos')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contato
            </button>
            <Button 
              variant="default" 
              size="sm"
              className="gradient-cta text-accent-foreground hover:opacity-90 shadow-cta"
              asChild
            >
              <a 
                href="http://wa.me/5519991508664"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('quem-somos')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              Contato
            </button>
            <Button 
              variant="default" 
              size="sm"
              className="gradient-cta text-accent-foreground hover:opacity-90 shadow-cta w-full"
              asChild
            >
              <a 
                href="http://wa.me/5519991508664"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
