import { Flower2, Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeading } from "./section-heading";
import { SEGMENT_DEMOS } from "./constants";

const SEGMENT_ICONS = {
  "studio-lumiere": Sparkles,
  "barbearia-north": Scissors,
  "aura-estetica": Flower2,
} as const;

const SEGMENT_TEXT: Record<(typeof SEGMENT_DEMOS)[number]["slug"], string> = {
  "studio-lumiere":
    "Veja como fica a agenda de um salão real — o Studio Lumière, com serviços, profissionais e horários configurados de verdade.",
  "barbearia-north":
    "Explore a Barbearia North: agenda, serviços e barbeiros organizados exatamente como em um negócio em funcionamento.",
  "aura-estetica":
    "Conheça a Aura Estética e veja como a MAVORA organiza uma clínica de estética na prática, do site à agenda.",
};

export function TryItSection() {
  return (
    <section id="experimente" className="section-padding bg-secondary">
      <div className="container">
        <SectionHeading
          eyebrow="Experimente agora"
          title="Veja a MAVORA funcionando no seu tipo de negócio"
          description="Escolha o segmento mais parecido com o seu negócio e explore um site e uma agenda reais, sem formulário e sem esperar uma reunião."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SEGMENT_DEMOS.map((demo, index) => {
            const Icon = SEGMENT_ICONS[demo.slug];
            return (
              <ScrollReveal key={demo.slug} delay={index * 100}>
                <Card className="flex h-full flex-col">
                  <CardContent className="flex flex-1 flex-col p-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-5 font-mavora text-xl font-semibold">{demo.segment}</h3>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{SEGMENT_TEXT[demo.slug]}</p>

                    <div className="mt-6">
                      <Button size="lg" variant={index === 0 ? "default" : "outline"} className="w-full" asChild>
                        <a href={demo.url} target="_blank" rel="noreferrer">
                          Ver demonstração ao vivo
                        </a>
                      </Button>
                      <p className="mt-3 text-xs text-muted-foreground">Abre em uma nova aba.</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
