import { useState } from "react";
import { Star, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import testimonialsCustomersImg from "@/assets/testimonials-customers.jpg";

const Testimonials = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    experiencia: "",
    atendimento: "",
    qualidade: "",
    recomendaria: "",
    maisGostou: "",
    melhorar: "",
    depoimento: "",
    nome: "",
    cidade: "",
    autorizo: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Avaliação enviada!",
      description: "Obrigado por compartilhar sua experiência conosco.",
    });
    setFormData({
      experiencia: "",
      atendimento: "",
      qualidade: "",
      recomendaria: "",
      maisGostou: "",
      melhorar: "",
      depoimento: "",
      nome: "",
      cidade: "",
      autorizo: false,
    });
  };

  // Depoimentos de exemplo
  const testimonials = [
    {
      name: "Maria Silva",
      city: "Porto Ferreira",
      text: "Excelente atendimento! Sempre encontro tudo que preciso para meu escritório. Recomendo muito!",
      rating: 5,
    },
    {
      name: "João Santos",
      city: "Santa Rita do Passa Quatro",
      text: "Serviço de impressão de alta qualidade e preço justo. A equipe é muito atenciosa.",
      rating: 5,
    },
    {
      name: "Ana Paula",
      city: "Porto Ferreira",
      text: "Compro material escolar dos meus filhos aqui há anos. Qualidade e variedade incomparáveis!",
      rating: 5,
    },
  ];

  return (
    <section id="avaliacoes" className="py-20 bg-muted/30">
      {/* Header Image Banner */}
      <div className="w-full h-[200px] md:h-[250px] overflow-hidden mb-16 relative">
        <img 
          src={testimonialsCustomersImg} 
          alt="Clientes sendo atendidos na Papelart" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center">
            O Que Nossos Clientes Dizem
          </h2>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Subtitle */}
        <div className="text-center mb-12">
          <p className="font-body text-foreground/70 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="font-body text-foreground/80 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-body font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-body text-sm text-foreground/60">
                  {testimonial.city}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Formulário de Avaliação */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-card">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
                Avaliação de Experiência - Papelart
              </h3>
              <p className="font-body text-foreground/70">
                Queremos ouvir você!
              </p>
              <p className="font-body text-sm text-foreground/60 mt-2 flex items-center justify-center gap-1">
                Sua opinião é muito importante para continuarmos oferecendo produtos e um atendimento feitos com carinho
                <Heart className="w-4 h-4 fill-destructive text-destructive" />
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pergunta 1 */}
              <div className="space-y-3">
                <Label className="font-body font-semibold text-foreground">
                  1. Como você avalia sua experiência geral com a Papelart?
                </Label>
                <RadioGroup
                  value={formData.experiencia}
                  onValueChange={(value) =>
                    setFormData({ ...formData, experiencia: value })
                  }
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excelente" id="exp-excelente" />
                    <Label htmlFor="exp-excelente" className="flex items-center gap-1 cursor-pointer">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      Excelente
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="muito-boa" id="exp-muito-boa" />
                    <Label htmlFor="exp-muito-boa" className="flex items-center gap-1 cursor-pointer">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      Muito boa
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="boa" id="exp-boa" />
                    <Label htmlFor="exp-boa" className="flex items-center gap-1 cursor-pointer">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      Boa
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="regular" id="exp-regular" />
                    <Label htmlFor="exp-regular" className="flex items-center gap-1 cursor-pointer">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <Star className="w-4 h-4 text-accent" />
                      Regular
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ruim" id="exp-ruim" />
                    <Label htmlFor="exp-ruim" className="flex items-center gap-1 cursor-pointer">
                      <Star className="w-4 h-4 text-accent" />
                      Ruim
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Pergunta 2 */}
              <div className="space-y-3">
                <Label className="font-body font-semibold text-foreground">
                  2. O que você achou do nosso atendimento?
                </Label>
                <RadioGroup
                  value={formData.atendimento}
                  onValueChange={(value) =>
                    setFormData({ ...formData, atendimento: value })
                  }
                  className="space-y-2"
                >
                  {["Excelente", "Bom", "Regular", "Ruim"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase()} id={`atend-${option.toLowerCase()}`} />
                      <Label htmlFor={`atend-${option.toLowerCase()}`} className="cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Pergunta 3 */}
              <div className="space-y-3">
                <Label className="font-body font-semibold text-foreground">
                  3. Como avalia a qualidade dos nossos produtos?
                </Label>
                <RadioGroup
                  value={formData.qualidade}
                  onValueChange={(value) =>
                    setFormData({ ...formData, qualidade: value })
                  }
                  className="space-y-2"
                >
                  {["Excelente", "Boa", "Regular", "Ruim"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase()} id={`qual-${option.toLowerCase()}`} />
                      <Label htmlFor={`qual-${option.toLowerCase()}`} className="cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Pergunta 4 */}
              <div className="space-y-3">
                <Label className="font-body font-semibold text-foreground">
                  4. Você recomendaria a Papelart para amigos ou familiares?
                </Label>
                <RadioGroup
                  value={formData.recomendaria}
                  onValueChange={(value) =>
                    setFormData({ ...formData, recomendaria: value })
                  }
                  className="space-y-2"
                >
                  {["Sim, com certeza", "Talvez", "Não"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase()} id={`rec-${option.toLowerCase().replace(/\s/g, "-")}`} />
                      <Label htmlFor={`rec-${option.toLowerCase().replace(/\s/g, "-")}`} className="cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Pergunta 5 */}
              <div className="space-y-3">
                <Label htmlFor="maisGostou" className="font-body font-semibold text-foreground">
                  5. O que mais gostou na sua experiência conosco?
                </Label>
                <Input
                  id="maisGostou"
                  value={formData.maisGostou}
                  onChange={(e) =>
                    setFormData({ ...formData, maisGostou: e.target.value })
                  }
                  className="bg-background"
                />
              </div>

              {/* Pergunta 6 */}
              <div className="space-y-3">
                <Label htmlFor="melhorar" className="font-body font-semibold text-foreground">
                  6. O que podemos melhorar?
                </Label>
                <Input
                  id="melhorar"
                  value={formData.melhorar}
                  onChange={(e) =>
                    setFormData({ ...formData, melhorar: e.target.value })
                  }
                  className="bg-background"
                />
              </div>

              {/* Pergunta 7 */}
              <div className="space-y-3">
                <Label htmlFor="depoimento" className="font-body font-semibold text-foreground">
                  7. Deseja deixar um depoimento para aparecer em nosso site?
                </Label>
                <Textarea
                  id="depoimento"
                  value={formData.depoimento}
                  onChange={(e) =>
                    setFormData({ ...formData, depoimento: e.target.value })
                  }
                  className="bg-background min-h-[100px]"
                />
              </div>

              {/* Pergunta 8 */}
              <div className="space-y-3">
                <Label className="font-body font-semibold text-foreground">
                  8. Identificação (opcional)
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-sm text-foreground/70">Nome:</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                      }
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cidade" className="text-sm text-foreground/70">Cidade:</Label>
                    <Input
                      id="cidade"
                      value={formData.cidade}
                      onChange={(e) =>
                        setFormData({ ...formData, cidade: e.target.value })
                      }
                      className="bg-background"
                    />
                  </div>
                </div>
              </div>

              {/* Autorização */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="autorizo"
                  checked={formData.autorizo}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, autorizo: checked as boolean })
                  }
                />
                <Label htmlFor="autorizo" className="text-sm text-foreground/70 cursor-pointer leading-tight">
                  Autorizo a divulgação do meu depoimento no site e redes sociais da Papelart.
                </Label>
              </div>

              {/* Botão Enviar */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Avaliação
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
