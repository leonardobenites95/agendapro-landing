import { ScrollReveal } from "./scroll-reveal";
import { SectionHeading } from "./section-heading";

const STEPS = [
  { title: "Cliente acessa o site", text: "Escolhe um ou mais serviços, a data e um horário realmente disponível." },
  { title: "Solicitação fica pendente", text: "Você recebe uma notificação — nada é confirmado automaticamente." },
  { title: "Você aprova pelo painel", text: "Aprovar, recusar ou reagendar em um clique, com atalho pronto para o WhatsApp." },
  { title: "Horário fica reservado", text: "O sistema trava o horário automaticamente — impossível haver conflito." },
] as const;

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-padding bg-beige">
      <div className="container">
        <SectionHeading eyebrow="Como funciona" title="Do pedido à confirmação, em 4 passos" />

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-8 hidden h-px bg-border lg:block"
          />
          {STEPS.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 90} className="relative">
              <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-beige font-serif text-sm font-semibold text-rose-gold-dark">
                {index + 1}
              </span>
              <h3 className="mt-4 font-serif text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
