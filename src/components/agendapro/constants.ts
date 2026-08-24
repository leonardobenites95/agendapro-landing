import { whatsappLink } from "@/lib/utils";

/**
 * WhatsApp comercial da MAVORA. Configurável via variável de ambiente
 * (NEXT_PUBLIC_MAVORA_WHATSAPP, no Netlify — renomeada de
 * NEXT_PUBLIC_AGENDAPRO_WHATSAPP no rebranding; nunca esteve configurada em
 * produção, então a troca de nome não quebra nada) — enquanto vazio, todo
 * CTA cai no fallback "#contato" (a seção final da própria landing).
 */
export const MAVORA_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_MAVORA_WHATSAPP ?? "";

export const MAVORA_WHATSAPP_CONFIGURED = Boolean(MAVORA_WHATSAPP_NUMBER);

/** Link do WhatsApp comercial, ou "#contato" enquanto o número não existir. */
export function getMavoraWhatsappHref(message?: string): string {
  return MAVORA_WHATSAPP_CONFIGURED
    ? whatsappLink(MAVORA_WHATSAPP_NUMBER, message)
    : "#contato";
}

/**
 * Instalação usada como demonstração ao vivo do sistema — o tenant fictício
 * "Studio Bella Estética" dentro do app MAVORA multi-tenant (agendapro-demo),
 * nunca uma instalação de cliente real. Usada SÓ pelos CTAs de demonstração
 * (try-it-section: "Faça um agendamento como cliente" / "Conheça o painel
 * administrativo") — nunca pelo CTA de cadastro, mesmo que hoje aponte pro
 * mesmo host em produção (ver MAVORA_APP_URL abaixo: são conceitos
 * diferentes, propositalmente separados, mesmo com o mesmo valor default).
 * Configurável por env pra testar localmente contra uma instância própria,
 * sem afetar o valor real em produção (env var nunca definida lá).
 */
export const DEMO_SITE_URL = process.env.NEXT_PUBLIC_DEMO_SITE_URL ?? "https://agendapro-demo-generico.netlify.app";

/**
 * URL base da aplicação MAVORA (agendapro-demo) — usada pelos CTAs de
 * cadastro ("Criar conta grátis"/"Quero testar grátis"), nunca pelos de
 * demonstração (esses usam DEMO_SITE_URL). Hoje aponta pro mesmo host que
 * DEMO_SITE_URL em produção (é o mesmo deploy multi-tenant que hospeda tanto
 * o tenant de demonstração quanto o cadastro público) — mas são variáveis
 * independentes de propósito, pra nunca acoplar "onde fica a demo" a "onde
 * fica o cadastro" caso um dia sejam hosts diferentes.
 */
export const MAVORA_APP_URL = process.env.NEXT_PUBLIC_MAVORA_APP_URL ?? "https://agendapro-demo-generico.netlify.app";

/** Cadastro self-service (Smart Onboarding Comercial MVP) — rota pública `/cadastro` dentro de MAVORA_APP_URL. */
export const SIGNUP_URL = `${MAVORA_APP_URL}/cadastro`;

/**
 * Vitrine oficial dos 3 tenants demo por segmento (ver
 * agendapro-demo/src/services/demo-tenants/specs/) — cada um roda no seu
 * próprio subdomínio (PLATFORM_BASE_DOMAIN = mavorapro.com.br), confirmado
 * ao vivo em produção em 24/08/2026 (HTTP 200, título correto nos 3). Usada
 * pelo seletor de segmento em try-it-section.tsx. O tenant antigo único
 * (DEMO_SITE_URL acima, "Studio Bella Estética") continua existindo no
 * banco e ainda é usado pelo footer, mas deixou de ser a vitrine comercial
 * principal.
 */
export const SEGMENT_DEMOS = [
  {
    slug: "studio-lumiere",
    segment: "Salão de Beleza",
    businessName: "Studio Lumière",
    url: process.env.NEXT_PUBLIC_DEMO_SALAO_URL ?? "https://studio-lumiere.mavorapro.com.br",
  },
  {
    slug: "barbearia-north",
    segment: "Barbearia",
    businessName: "Barbearia North",
    url: process.env.NEXT_PUBLIC_DEMO_BARBEARIA_URL ?? "https://barbearia-north.mavorapro.com.br",
  },
  {
    slug: "aura-estetica",
    segment: "Estética",
    businessName: "Aura Estética",
    url: process.env.NEXT_PUBLIC_DEMO_ESTETICA_URL ?? "https://aura-estetica.mavorapro.com.br",
  },
] as const;
