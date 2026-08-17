import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductShot } from "./product-shot";
import { WhatsAppLink } from "./whatsapp-link";
import { SIGNUP_URL } from "./constants";

/** Trocar por "/images/painel-agenda.png" assim que a captura real existir — o layout não muda. */
const HERO_SHOT_SRC: string | undefined = undefined;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-32">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Agendamento online para negócios de beleza
          </span>

          <h1 className="mx-auto mt-6 max-w-xl font-mavora text-4xl font-semibold leading-[1.1] text-foreground text-balance md:text-6xl lg:mx-0">
            Sua agenda online, sempre sob o seu controle.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground md:text-lg lg:mx-0">
            A MAVORA organiza os agendamentos do seu salão, clínica ou
            estúdio — mas quem decide continua sendo você. Nenhuma
            solicitação é confirmada sozinha.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button size="lg" asChild>
              <a href={SIGNUP_URL}>
                Criar conta grátis
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <WhatsAppLink message="Olá! Quero conhecer a MAVORA.">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </WhatsAppLink>
            </Button>
          </div>
          <a
            href="#como-funciona"
            className="mt-4 inline-block text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Ver como funciona
          </a>
        </div>

        <div className="animate-fade-in [animation-delay:150ms]">
          <ProductShot
            src={HERO_SHOT_SRC}
            alt="Painel administrativo da MAVORA"
            caption="Painel administrativo — visão da Agenda"
            priority
          />
        </div>
      </div>
    </section>
  );
}
