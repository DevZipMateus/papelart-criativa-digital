import { Heart, Target, Eye, Award, Users, Sparkles, Lightbulb, Smile, TrendingUp } from "lucide-react";
import aboutStoreImg from "@/assets/about-store.jpg";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Criatividade que inspira",
      description: "Acreditamos no poder das ideias e na liberdade de criar.",
    },
    {
      icon: Heart,
      title: "Cuidado em cada detalhe",
      description: "Valorizamos o carinho no atendimento e na escolha dos produtos.",
    },
    {
      icon: Award,
      title: "Qualidade com propósito",
      description: "Priorizamos qualidade, durabilidade e bom custo-benefício.",
    },
    {
      icon: Users,
      title: "Conexão com as pessoas",
      description: "Queremos criar vínculos e fazer parte do dia a dia dos clientes.",
    },
    {
      icon: TrendingUp,
      title: "Aprendizado e evolução",
      description: "Buscamos inovação e melhorias para oferecer sempre o melhor.",
    },
    {
      icon: Smile,
      title: "Alegria em servir",
      description: "Um atendimento com empatia e entusiasmo transforma experiências.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-background relative">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold opacity-30" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Conheça a Papelart
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre nós
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        {/* History with Image */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img 
                src={aboutStoreImg} 
                alt="Interior da loja Papelart com prateleiras de materiais escolares e escritório" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Text Content */}
            <div className="bg-secondary/50 rounded-3xl p-8 md:p-10 shadow-soft">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Nossa história
                </h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                A Papelart nasceu de um sonho simples, construído em família, com carinho, dedicação e muito amor pelo que fazemos. Desde o começo, nosso desejo sempre foi criar um lugar acolhedor, onde cada cliente se sentisse em casa e encontrasse tudo o que precisa para estudar, trabalhar, ensinar e criar.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mt-4">
                Hoje, a Papelart é mais do que uma papelaria: é um espaço feito para acolher famílias, incentivar sonhos e escrever histórias todos os dias, com a mesma dedicação de quando tudo começou.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Missão
              </h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              Encantar pessoas por meio da papelaria, oferecendo produtos que despertam criatividade, organização e alegria em cada detalhe. Nosso compromisso é acolher, inspirar e facilitar o dia a dia de quem estuda, trabalha, ensina e cria.
            </p>
          </div>

          <div className="bg-accent/5 rounded-3xl p-8 border border-accent/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Visão
              </h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              Ser uma marca querida e lembrada, reconhecida por inspirar sonhos, ideias e aprendizados. Queremos crescer junto com nossos clientes, levando beleza, criatividade e propósito a cada história escrita, desenhada ou planejada.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-3xl font-semibold text-foreground text-center mb-12">
            Nossos valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="font-body text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
