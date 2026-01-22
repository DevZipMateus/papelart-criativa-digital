import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#produtos", label: "Produtos" },
    { href: "#contato", label: "Contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) return; // Allow normal navigation if not on home page
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-soft" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Captura_de_tela_de_2026-01-22_09-38-07-removebg-preview.png"
              alt="Papelart Copiadora e Papelaria"
              className="h-24 sm:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              isHomePage ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-body text-primary-foreground/90 hover:text-accent transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  className="font-body text-primary-foreground/90 hover:text-accent transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/vitrine"
              className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-full font-body text-sm font-semibold transition-all duration-200 shadow-gold hover:shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              Vitrine
            </Link>
            <a
              href="https://wa.me/551639640669"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-200"
            >
              Fale conosco
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary-foreground"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/20 bg-primary/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                isHomePage ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-body text-primary-foreground/90 hover:text-accent transition-colors duration-200 text-base font-medium px-4 py-2"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={`/${link.href}`}
                    className="font-body text-primary-foreground/90 hover:text-accent transition-colors duration-200 text-base font-medium px-4 py-2"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/vitrine"
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-200 mx-4"
              >
                <ShoppingBag className="w-4 h-4" />
                Vitrine de Produtos
              </Link>
              <a
                href="https://wa.me/551639640669"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-200 mx-4 text-center"
              >
                Fale conosco
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;