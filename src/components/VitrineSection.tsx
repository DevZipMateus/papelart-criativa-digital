import { ShoppingBag, ArrowRight, Sparkles, Tag, Package } from "lucide-react";
import { Link } from "react-router-dom";

const VitrineSection = () => {
  const features = [
    {
      icon: Package,
      title: "Produtos Variados",
      description: "Ampla variedade de materiais escolares, escritório e papelaria fina.",
    },
    {
      icon: Tag,
      title: "Preços Especiais",
      description: "Ofertas exclusivas e preços competitivos para você.",
    },
    {
      icon: Sparkles,
      title: "Novidades",
      description: "Produtos novos chegando constantemente em nossa loja.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4 bg-accent/10 px-4 py-2 rounded-full">
              <ShoppingBag className="w-4 h-4" />
              Vitrine Online
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Confira Nossa Vitrine de Produtos
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              Navegue por nossa seleção completa de produtos sem sair de casa. 
              Encontre tudo o que precisa para estudar, trabalhar e criar!
            </p>
            <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full mt-6" />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <div className="max-w-2xl mx-auto">
              <ShoppingBag className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Explore Nossa Vitrine Completa
              </h3>
              <p className="font-body text-primary-foreground/80 mb-8 text-lg">
                Acesse agora nossa vitrine online e descubra todos os produtos disponíveis. 
                Materiais escolares, papelaria fina, artigos de escritório e muito mais!
              </p>
              <Link
                to="/vitrine"
                className="inline-flex items-center gap-3 bg-accent hover:bg-gold-dark text-accent-foreground px-10 py-5 rounded-full font-body text-xl font-semibold transition-all duration-300 shadow-gold hover:shadow-lg group"
              >
                <ShoppingBag className="w-6 h-6" />
                Acessar Vitrine de Produtos
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
