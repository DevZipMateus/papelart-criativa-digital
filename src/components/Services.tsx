import { Printer, FileImage, Layers, Camera, ScanLine, Copy } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Copy,
      title: "Cópia P&B e colorida",
      description: "Cópias em preto e branco ou coloridas nos formatos A3 e A4 com qualidade profissional.",
      formats: "A3 e A4",
    },
    {
      icon: Printer,
      title: "Impressão P&B e colorida",
      description: "Impressões de alta qualidade para documentos, trabalhos, fotos e muito mais.",
      formats: "A3 e A4",
    },
    {
      icon: Layers,
      title: "Plastificação",
      description: "Proteja seus documentos importantes com plastificação de qualidade e durabilidade.",
      formats: "Diversos tamanhos",
    },
    {
      icon: Camera,
      title: "Revelação de foto",
      description: "Transforme seus momentos especiais em fotos impressas com cores vibrantes.",
      formats: "Vários formatos",
    },
    {
      icon: ScanLine,
      title: "Digitalização",
      description: "Digitalize documentos, fotos e materiais para arquivos digitais de alta resolução.",
      formats: "PDF, JPG",
    },
    {
      icon: FileImage,
      title: "Acabamento",
      description: "Encadernação, corte e outros acabamentos para deixar seu material perfeito.",
      formats: "Sob consulta",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            O que fazemos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos serviços
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma variedade de serviços para atender suas necessidades de impressão, cópia e acabamento.
          </p>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block font-body text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                {service.formats}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/551639640669"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-gold-dark text-accent-foreground px-8 py-4 rounded-full font-body text-lg font-semibold transition-all duration-300 shadow-gold hover:shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
