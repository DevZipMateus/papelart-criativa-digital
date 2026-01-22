import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <img
              src="/logo.png"
              alt="Papelart Copiadora e Papelaria"
              className="h-16 w-auto mb-4"
            />
            <p className="font-body text-background/70 leading-relaxed">
              Encantando pessoas através da papelaria, com produtos que despertam criatividade, organização e alegria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6">
              Navegação
            </h4>
            <nav className="space-y-3">
              <a href="#inicio" className="block font-body text-background/70 hover:text-accent transition-colors">
                Início
              </a>
              <a href="#sobre" className="block font-body text-background/70 hover:text-accent transition-colors">
                Sobre nós
              </a>
              <a href="#servicos" className="block font-body text-background/70 hover:text-accent transition-colors">
                Serviços
              </a>
              <a href="#produtos" className="block font-body text-background/70 hover:text-accent transition-colors">
                Produtos
              </a>
              <a href="#contato" className="block font-body text-background/70 hover:text-accent transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-body text-background/70">
                  Avenida Monteiro Lobato, 1640
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+551639640669" className="font-body text-background/70 hover:text-accent transition-colors">
                  (16) 3964-0669
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:papelartcop2021@outlook.com" className="font-body text-background/70 hover:text-accent transition-colors">
                  papelartcop2021@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-accent" />
                <a 
                  href="https://www.instagram.com/papelartcopiadora" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-background/70 hover:text-accent transition-colors"
                >
                  @papelartcopiadora
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="font-body text-background/50 text-sm">
            CNPJ: 10.625.790/0001-54
          </p>
          <p className="font-body text-background/50 text-sm mt-2">
            © {currentYear} Papelart Copiadora e Papelaria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
