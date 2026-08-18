import { ScrollReveal } from "./scroll-reveal";
import { ProductShot } from "./product-shot";
import { SectionHeading } from "./section-heading";

/** Capturas reais do sistema (tenant de demonstração, dados fictícios). */
const BOOKING_SHOT_SRC: string | undefined = "/images/agendamento-cliente.png";
const PANEL_SHOT_SRC: string | undefined = "/images/painel-agenda.png";

const FACTS = [
  "Sistema real, em produção — não é um protótipo",
  "Aprovação manual em cada agendamento, sempre",
] as const;

/**
 * Prova social honesta: a MAVORA não é uma maquete — é o mesmo sistema em
 * produção que você experimenta no painel de demonstração (ver
 * try-it-section). Sem depoimentos/métricas inventadas nem cliente real
 * nomeado — a instalação citada antes aqui (Espaço Karla Marques) foi
 * descontinuada; ajustar este texto de novo quando houver um primeiro
 * cliente real pra citar por nome.
 */
export function ProofSection() {
  return (
    <section id="prova" className="section-padding bg-background">
      <div className="container">
        <SectionHeading
          eyebrow="Já em produção"
          title="Não é uma maquete — é o sistema que já funciona"
          description="A MAVORA é a mesma base de código que roda no painel de demonstração completo — experimente você mesmo, sem espera."
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
