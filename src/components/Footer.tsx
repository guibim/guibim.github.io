import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/guibim',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/guilherme-bim',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="py-16 border-t border-border bg-secondary/30">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Interested in working together?
            </h3>
            <a
              href="mailto:guilhermebim016@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-medium group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="underline underline-offset-4 decoration-primary/50 group-hover:decoration-primary">
                guilhermebim016@gmail.com
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-105"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground pt-4 border-t border-border/50">
            © {currentYear} Guilherme Bim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
