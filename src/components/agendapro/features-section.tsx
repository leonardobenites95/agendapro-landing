import {
  Bell,
  CalendarCheck,
  CalendarDays,
  Clock,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Palette,
  Scissors,
  Search,
  ShieldCheck,
} from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeading } from "./section-heading";

const FEATURES = [
  { icon: CalendarDays, title: "Agendamento online", text: "Serviço, data e horário — disponível 24 horas, sem precisar ligar." },
  { icon: ShieldCheck, title: "Aprovação manual", text: "Nenhuma solicitação confirma sozinha. Você aprova, recusa ou reagenda." },
  { icon: LayoutDashboard, title: "Painel administrativo", text: "Dashboard do dia, agenda com filtros, clientes com histórico completo." },
  { icon: Scissors, title: "Cadastro de serviços", text: "Nome, duração, preço e foto — tudo editável, sem programador." },
  { icon: Clock, title: "Gestão de horários", text: "Turnos por dia da semana, intervalo entre horários e bloqueio de datas." },
  { icon: CalendarCheck, title: "Google Agenda", text: "Sincronização automática e opcional dos horários confirmados." },
  { icon: MessageCircle, title: "WhatsApp integrado", text: "Contato direto e mensagens já prontas para aprovação e confirmação." },
  { icon: Globe, title: "Landing personalizada", text: "Site institucional com sua identidade, serviços e depoimentos." },
  { icon: Search, title: "SEO automático", text: "Título, descrição e imagem de compartilhamento geradas a partir dos seus dados." },
  { icon: Palette, title: "Identidade configurável", text: "Nome, logo e favicon — tudo pelo painel, sem editar código." },
  { icon: Bell, title: "Notificações", text: "Aviso gratuito no seu celular a cada nova solicitação." },
] as const;

export function FeaturesSection() {
  return (
    <section id="recursos" className="section-padding bg-background">
      <div className="container">
        <SectionHeading eyebrow="Recursos" title="Tudo que o seu negócio precisa, já pronto" />

        <div className="mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-8 sm:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              delay={(index % 6) * 60}
              className="flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-nude">
                <feature.icon className="h-5 w-5 text-rose-gold-dark" />
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{feature.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
