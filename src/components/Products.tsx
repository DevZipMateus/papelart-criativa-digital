import { BookOpen, Palette, Briefcase, PenTool, Ruler, Package } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Materiais escolares",
      items: ["Cadernos", "Fichários", "Mochilas", "Estojos", "Agendas"],
    },
    {
      icon: Briefcase,
      title: "Escritório",
      items: ["Pastas", "Organizadores", "Grampeadores", "Calculadoras", "Papéis"],
    },
    {
      icon: Palette,
      title: "Artes e criatividade",
      items: ["Tintas", "Pincéis", "Telas", "Lápis de cor", "Marcadores"],
    },
    {
      icon: PenTool,
      title: "Papelaria fina",
      items: ["Canetas especiais", "Blocos decorados", "Adesivos", "Washi tapes", "Post-its"],
    },
    {
      icon: Ruler,
      title: "Desenho técnico",
      items: ["Réguas", "Esquadros", "Compassos", "Transferidores", "Papel milimetrado"],
    },
    {
      icon: Package,
      title: "Embalagens e presentes",
      items: ["Papéis de presente", "Laços", "Sacolas", "Caixas decoradas", "Cartões"],
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Tudo em um só lugar
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos produtos
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Encontre materiais escolares, de escritório, artes e muito mais para estudar, trabalhar e criar.
          </p>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full mt-6" />
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-3xl p-8 hover:shadow-card transition-all duration-300 group border border-border/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <category.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="font-body text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Visit Store CTA */}
        <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center border border-primary/10">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Venha nos visitar!
          </h3>
          <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
            Temos uma grande variedade de produtos esperando por você. Nossa equipe está pronta para ajudar a encontrar tudo o que você precisa.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-dark text-primary-foreground px-8 py-4 rounded-full font-body text-lg font-semibold transition-all duration-300"
          >
            Ver localização
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
