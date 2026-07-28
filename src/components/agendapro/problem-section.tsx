import { Quote } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const PAIN_POINTS = [
  "Recebo pedido de horário no WhatsApp o dia inteiro e às vezes marco duas clientes no mesmo horário sem perceber.",
  "Uso um caderno de papel e às vezes some, ou fico sem saber quem já confirmou.",
  "Cliente some depois de marcar e eu não sei se vai aparecer ou não.",
  "Perco tempo respondendo a mesma pergunta de horário disponível várias vezes por dia.",
  "Não tenho site, só uma rede social — passo a impressão de ser informal demais para os preços que cobro.",
];

export function ProblemSection() {
  return (
    <section id="problema" className="section-padding bg-background">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            O problema
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Reconhece alguma dessas situações?
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            São queixas comuns de quem organiza a agenda de um negócio de
            beleza só pelo WhatsApp e por um caderno de papel.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {PAIN_POINTS.map((text, index) => (
            <ScrollReveal
              key={text}
              delay={index * 70}
              className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5"
            >
              <Quote className="mt-0.5 h-4 w-4 shrink-0 text-rose-gold/60" />
              <p className="text-sm text-foreground/80">{text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
