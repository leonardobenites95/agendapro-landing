import { ScrollReveal } from "./scroll-reveal";
import { SectionHeading } from "./section-heading";

const DIFFERENTIATORS = [
  {
    title: "Você aprova, o sistema não decide sozinho",
    text: "Diferente de agendas automáticas genéricas, toda solicitação passa por revisão antes de virar compromisso.",
  },
  {
    title: "Instalação própria, não conta compartilhada",
    text: "Cada negócio tem seu próprio site e seus próprios dados — nada se mistura com o de outros clientes.",
  },
  {
    title: "Configuração sem código",
    text: "Identidade, conteúdo, serviços e horários geridos 100% pelo painel administrativo, a qualquer momento.",
  },
  {
    title: "Feito para o setor de beleza",
    text: "Pensado para o fluxo real de salões, clínicas e estúdios — não é um sistema genérico de reservas adaptado.",
  },
] as const;

export function DifferentiatorsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <SectionHeading eyebrow="Diferenciais" title="Por que escolher o AgendaPro" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {DIFFERENTIATORS.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 80}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <h3 className="font-serif text-lg font-semibold text-rose-gold-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
