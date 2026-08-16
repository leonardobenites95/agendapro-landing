import { CalendarDays, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeading } from "./section-heading";
import { DEMO_SITE_URL } from "./constants";

const OPTIONS = [
  {
    icon: CalendarDays,
    title: "Faça um agendamento como cliente",
    text: "Experimente toda a jornada de agendamento exatamente como as clientes do seu negócio vão ver.",
    cta: "Testar agendamento",
    href: `${DEMO_SITE_URL}/agendar`,
    credentials: null,
  },
  {
    icon: LayoutDashboard,
    title: "Conheça o painel administrativo",
    text: "Veja como aprovar agendamentos, cadastrar serviços, configurar horários e administrar a agenda.",
    cta: "Explorar painel",
    href: `${DEMO_SITE_URL}/admin/login`,
    // Conta compartilhada só de demonstração, com acesso de escrita total —
    // qualquer visitante pode alterar dados de outro. Aceitável nesta fase;
    // reset automático dos dados fica para depois.
    credentials: { email: "demo@agendapro.com.br", password: "MavoraDemo2026!" },
  },
] as const;

export function TryItSection() {
  return (
    <section id="experimente" className="section-padding bg-secondary">
      <div className="container">
        <SectionHeading
          eyebrow="Experimente agora"
          title="Sem formulário, sem espera"
          description="Veja os dois lados do sistema agora mesmo, sem esperar uma reunião."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {OPTIONS.map((option, index) => (
            <ScrollReveal key={option.title} delay={index * 100}>
              <Card className="flex h-full flex-col">
                <CardContent className="flex flex-1 flex-col p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 font-mavora text-xl font-semibold">{option.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{option.text}</p>

                  {option.credentials && (
                    <div className="mt-4 space-y-1 rounded-xl border border-border/60 bg-secondary/60 px-4 py-3 text-left text-xs">
                      <p className="font-medium text-foreground/70">Acesso de demonstração</p>
                      <p className="text-muted-foreground">
                        E-mail: <span className="font-medium text-foreground">{option.credentials.email}</span>
                      </p>
                      <p className="text-muted-foreground">
                        Senha: <span className="font-medium text-foreground">{option.credentials.password}</span>
                      </p>
                    </div>
                  )}

                  <div className={option.credentials ? "mt-6" : "mt-auto pt-6"}>
                    <Button size="lg" variant={index === 0 ? "default" : "outline"} className="w-full" asChild>
                      <a href={option.href} target="_blank" rel="noreferrer">
                        {option.cta}
                      </a>
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">Abre em uma nova aba.</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
