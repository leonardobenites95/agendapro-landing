import { ScrollReveal } from "./scroll-reveal";
import { SectionHeading } from "./section-heading";

const FAQ = [
  {
    q: "Preciso saber programar para usar?",
    a: "Não. Todo o conteúdo — textos, fotos, serviços, horários e dados de contato — é editado pelo próprio painel, sem mexer em código.",
  },
  {
    q: "Meus dados ficam misturados com os de outros clientes do AgendaPro?",
    a: "Não. Cada negócio tem seu próprio site e seus próprios dados — não é um sistema compartilhado.",
  },
  {
    q: "O sistema confirma os agendamentos sozinho?",
    a: "Não. Toda solicitação feita pelo site chega como pendente. Você decide aprovar, recusar ou reagendar.",
  },
  {
    q: "Funciona bem no celular?",
    a: "Sim — tanto o site de agendamento quanto o painel administrativo são responsivos, para você e suas clientes.",
  },
  {
    q: "Posso usar minha própria logo e cores?",
    a: "Logo, favicon e imagem de compartilhamento são configuráveis pelo painel. A paleta de cores é definida na implantação.",
  },
] as const;

/** Gera o JSON-LD FAQPage a partir da mesma lista renderizada — uma única fonte de verdade. */
function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-background">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />

      <div className="container">
        <SectionHeading eyebrow="Perguntas frequentes" title="Ainda com dúvidas?" />

        <div className="mx-auto mt-14 max-w-2xl space-y-3">
          {FAQ.map((item, index) => (
            <ScrollReveal key={item.q} delay={index * 50}>
              <details className="group rounded-2xl border border-border/60 bg-card p-5 open:shadow-sm">
                <summary className="cursor-pointer list-none font-serif text-base font-semibold marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="shrink-0 text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
