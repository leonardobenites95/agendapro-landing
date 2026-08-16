import { ScrollReveal } from "./scroll-reveal";
import { ProductShot } from "./product-shot";
import { SectionHeading } from "./section-heading";

/** Trocar pelos caminhos reais em public/images/ assim que as capturas existirem — o layout não muda. */
const BOOKING_SHOT_SRC: string | undefined = undefined;
const PANEL_SHOT_SRC: string | undefined = undefined;

const FACTS = [
  "Sistema real, em uso hoje por um negócio de verdade",
  "Aprovação manual em cada agendamento, sempre",
] as const;

/**
 * Prova social honesta: a MAVORA não é um protótipo — é o mesmo sistema que
 * já roda em produção para o Espaço Karla Marques. Sem depoimentos ou métricas
 * inventadas (não existem ainda) — só o que já é verificável.
 */
export function ProofSection() {
  return (
    <section id="prova" className="section-padding bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="Já em produção"
          title="Não é uma maquete — é o sistema que já funciona"
          description="A MAVORA é a mesma base que roda hoje para o Espaço Karla Marques, aprovando agendamentos reais todos os dias."
        />

        <ScrollReveal delay={80} className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
          {FACTS.map((fact) => (
            <span
              key={fact}
              className="rounded-full border border-border/60 bg-card px-4 py-2 text-xs font-medium text-foreground/80"
            >
              {fact}
            </span>
          ))}
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0}>
            <ProductShot
              src={BOOKING_SHOT_SRC}
              alt="Tela de agendamento vista pela cliente"
              caption="Site de agendamento — visão da cliente"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ProductShot
              src={PANEL_SHOT_SRC}
              alt="Painel administrativo mostrando a agenda"
              caption="Painel administrativo — Agenda"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
