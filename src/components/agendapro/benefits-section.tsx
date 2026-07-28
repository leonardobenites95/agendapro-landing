import { Check } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const BENEFITS = [
  "Menos tempo perdido organizando horário por mensagem.",
  "Zero risco de marcar duas pessoas no mesmo horário — o sistema trava automaticamente.",
  "Presença profissional online, sem custo de criar um site do zero.",
  "Seus dados ficam na sua própria instalação, isolados de outros negócios.",
  "Você continua no controle de cada aprovação.",
] as const;

export function BenefitsSection() {
  return (
    <section id="beneficios" className="section-padding bg-beige">
      <div className="container grid gap-12 md:grid-cols-2 md:items-center">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Benefícios
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            O que muda no seu dia a dia
          </h2>
        </ScrollReveal>
        <div className="space-y-4">
          {BENEFITS.map((text, index) => (
            <ScrollReveal key={text} delay={index * 70} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-foreground/80 md:text-base">{text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
