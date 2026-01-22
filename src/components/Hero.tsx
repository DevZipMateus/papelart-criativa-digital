import { Feather, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-primary/85" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <Feather className="absolute top-40 right-20 text-background/10 w-24 h-24 animate-float" />
        <Sparkles className="absolute bottom-40 left-20 text-accent/20 w-16 h-16" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Animation */}
          <div className="mb-8 animate-fade-in">
            <img
              src="/Captura_de_tela_de_2026-01-22_09-38-07-removebg-preview.png"
              alt="Papelart Copiadora e Papelaria"
              className="h-32 md:h-40 w-auto mx-auto"
            />
          </div>

          {/* H1 - Company Name */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Papelart Copiadora e Papelaria
          </h1>

          {/* H2 - Description */}
          <h2 className="font-body text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Encantando pessoas através da papelaria, com produtos que despertam criatividade, organização e alegria em cada detalhe
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://wa.me/551639640669"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-gold-dark text-accent-foreground px-8 py-4 rounded-full font-body text-lg font-semibold transition-all duration-300 shadow-gold hover:shadow-lg flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="border-2 border-primary-foreground/30 hover:border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-full font-body text-lg font-medium transition-all duration-300"
            >
              Nossos serviços
            </a>
          </div>

          {/* Schedule Info */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="font-body text-sm text-primary-foreground/70">
              <span className="font-semibold text-primary-foreground">Horário de funcionamento:</span>
              <br className="sm:hidden" />
              <span className="sm:ml-2">Segunda a sexta 08:00 às 18:00 | Sábado 08:00 às 14:00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
