import { Check, X } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeading } from "./section-heading";

const ROWS = [
  {
    label: "Risco de horário duplicado",
    manual: "Depende de atenção constante",
    agendapro: "Impossível — travado automaticamente pelo sistema",
  },
  {
    label: "Consultar horário livre",
    manual: "Cliente pergunta, você responde uma a uma",
    agendapro: "Cliente vê os horários livres sozinho, 24h",
  },
  {
    label: "Histórico do cliente",
    manual: "Depende de memória ou caderno",
    agendapro: "Histórico completo, sempre acessível",
  },
  {
    label: "Confirmação do agendamento",
    manual: "Manual, por mensagem, um a um",
    agendapro: "Confirma automaticamente — ou você aprova pelo painel, se preferir",
  },
  {
    label: "Presença profissional online",
    manual: "Depende só de redes sociais",
    agendapro: "Site institucional próprio, com sua identidade",
  },
  {
    label: "Agenda pessoal (Google Agenda)",
    manual: "Copiar manualmente",
    agendapro: "Sincronização automática e opcional",
  },
] as const;

export function ComparisonSection() {
  return (
    <section id="comparativo" className="section-padding bg-secondary">
      <div className="container">
        <SectionHeading eyebrow="Comparativo" title="Caderno e WhatsApp vs. MAVORA" />

        {/* Mobile: cartões empilhados */}
        <ScrollReveal className="mt-12 space-y-4 md:hidden">
          {ROWS.map((row) => (
            <div key={row.label} className="rounded-2xl border border-border/60 bg-card p-5">
              <p className="font-mavora text-sm font-semibold text-foreground">{row.label}</p>
              <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-foreground/30" />
                {row.manual}
              </div>
              <div className="mt-2 flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {row.agendapro}
              </div>
            </div>
          ))}
        </ScrollReveal>

        {/* Desktop/tablet: tabela */}
        <ScrollReveal className="mt-12 hidden overflow-x-auto rounded-2xl border border-border/60 bg-card md:block">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Comparação entre organizar a agenda manualmente e usar a MAVORA
            </caption>
            <thead>
              <tr className="border-b border-border/60">
                <th scope="col" className="w-1/3 p-5 font-mavora text-base font-semibold text-foreground">
                  Aspecto
                </th>
                <th scope="col" className="w-1/3 p-5 font-medium text-muted-foreground">
                  Caderno / WhatsApp
                </th>
                <th scope="col" className="w-1/3 bg-primary/5 p-5 font-mavora text-base font-semibold text-primary">
                  MAVORA
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-border/60 last:border-0">
                  <th scope="row" className="p-5 font-medium text-foreground">
                    {row.label}
                  </th>
                  <td className="p-5 text-muted-foreground">
                    <span className="flex items-start gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-foreground/30" />
                      {row.manual}
                    </span>
                  </td>
                  <td className="bg-primary/5 p-5 text-foreground">
                    <span className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {row.agendapro}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>
      </div>
    </section>
  );
}
