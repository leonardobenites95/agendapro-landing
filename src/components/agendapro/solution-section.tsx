import { Check } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const SOLUTION_POINTS = [
  "Site institucional profissional, com sua identidade",
  "Agenda sempre organizada, sem risco de conflito de horário",
  "Confirmação automática, com aprovação manual quando você quiser",
];

export function SolutionSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            A solução
          </span>
          <h2 className="mt-3 font-mavora text-3xl font-semibold text-foreground md:text-4xl">
            Um sistema pensado para o seu ramo, não adaptado de outro
          </h2>
          <p className="mt-4 text-muted-foreground">
            A MAVORA é um site institucional + sistema de agendamento
            online, construído para o fluxo real de um pequeno negócio de
            beleza. A cliente agenda pelo site e o horário{" "}
            <strong className="text-foreground">confirma automaticamente</strong> —
            ou fica pendente pra você aprovar, se preferir revisar antes.
            Seus dados ficam isolados dos de outros negócios —
            nenhum outro cliente da MAVORA tem acesso a eles.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {SOLUTION_POINTS.map((text, index) => (
            <ScrollReveal
              key={text}
              delay={index * 70}
              className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-foreground/80">{text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
