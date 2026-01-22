import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Endereço",
      value: "Avenida Monteiro Lobato, 1640",
      href: "https://www.google.com/maps/search/?api=1&query=Avenida+Monteiro+Lobato+1640",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(16) 3964-0669",
      href: "tel:+551639640669",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "papelartcop2021@outlook.com",
      href: "mailto:papelartcop2021@outlook.com",
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg-Sex 08:00-18:00 | Sáb 08:00-14:00",
      href: null,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@papelartcopiadora",
      href: "https://www.instagram.com/papelartcopiadora",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Entre em contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fale conosco
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos prontos para atender você! Visite nossa loja ou entre em contato pelos canais abaixo.
          </p>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft flex items-start gap-4 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                    {info.label}
                  </span>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-body text-foreground font-medium block mt-1 hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-body text-foreground font-medium mt-1">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/551639640669"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-accent hover:bg-gold-dark text-accent-foreground px-8 py-5 rounded-2xl font-body text-lg font-semibold transition-all duration-300 shadow-gold hover:shadow-lg w-full"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border/50 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.123456789!2d-47.8123456!3d-21.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzI0LjQiUyA0N8KwNDgnNDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Papelart Copiadora e Papelaria"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
