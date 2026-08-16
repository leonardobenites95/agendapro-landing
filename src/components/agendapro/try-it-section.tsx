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
    // Login automático de 1 clique (ver agendapro-demo/src/app/admin/demo-entrar/route.ts)
    // — sempre a mesma conta fixa de demonstração, cai direto no dashboard.
    href: `${DEMO_SITE_URL}/admin/demo-entrar`,
    // Alternativa de entrada manual (ex: se o login automático estiver com
    // limite de taxa atingido) — mesma conta, escrita total, compartilhada
    // entre visitantes. Aceitável nesta fase; reset automático dos dados
    // fica para depois.
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
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{option.text}</p>

                  <div className="mt-6">
                    <Button size="lg" variant={index === 0 ? "default" : "outline"} className="w-full" asChild>
                      <a href={option.href} target="_blank" rel="noreferrer">
                        {option.cta}
                      </a>
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">Abre em uma nova aba.</p>

                    {option.credentials && (
                      <p className="mt-3 text-xs text-muted-foreground">
                        Prefere entrar manualmente? Use{" "}
                        <span className="font-medium text-foreground">{option.credentials.email}</span> /{" "}
                        <span className="font-medium text-foreground">{option.credentials.password}</span>
                      </p>
                    )}
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
