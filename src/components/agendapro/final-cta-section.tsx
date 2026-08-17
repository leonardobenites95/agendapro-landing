import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./scroll-reveal";
import { WhatsAppLink } from "./whatsapp-link";
import { MAVORA_WHATSAPP_CONFIGURED, SIGNUP_URL } from "./constants";

export function FinalCtaSection() {
  return (
    <section id="contato" className="section-padding bg-gradient-to-b from-background to-secondary">
      <div className="container text-center">
        <ScrollReveal>
          <h2 className="mx-auto max-w-2xl font-mavora text-3xl font-semibold text-foreground md:text-4xl">
            Vamos organizar a sua agenda?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Crie sua conta grátis por 15 dias e veja como ficaria o site e o
            painel do seu negócio.
          </p>
          {!MAVORA_WHATSAPP_CONFIGURED && (
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Canal comercial em configuração — em breve, contato direto por aqui.
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href={SIGNUP_URL}>Criar conta grátis</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <WhatsAppLink message="Olá! Quero conhecer a MAVORA.">
                <MessageCircle className="h-5 w-5" />
                Conversar pelo WhatsApp
              </WhatsAppLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#experimente">Ver demonstração</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
