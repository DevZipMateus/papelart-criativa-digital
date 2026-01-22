import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#inicio",
    label: "Início"
  }, {
    href: "#sobre",
    label: "Sobre"
  }, {
    href: "#servicos",
    label: "Serviços"
  }, {
    href: "#produtos",
    label: "Produtos"
  }, {
    href: "#contato",
    label: "Contato"
  }];
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/Captura_de_tela_de_2026-01-22_09-38-07-removebg-preview.png"
              alt="Papelart Copiadora e Papelaria"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} onClick={e => handleNavClick(e, link.href)} className="font-body text-foreground/80 hover:text-primary transition-colors duration-200 text-sm font-medium">
                {link.label}
              </a>)}
            <a href="https://wa.me/551639640669" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-200 shadow-gold hover:shadow-lg">
              Fale conosco
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground" aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={e => handleNavClick(e, link.href)} className="font-body text-foreground/80 hover:text-primary transition-colors duration-200 text-base font-medium px-4 py-2">
                  {link.label}
                </a>)}
              <a href="https://wa.me/551639640669" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-200 mx-4 text-center">
                Fale conosco
              </a>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;