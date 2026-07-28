import { whatsappLink } from "@/lib/utils";

/**
 * WhatsApp comercial do AgendaPro. Configurável via variável de ambiente
 * (NEXT_PUBLIC_AGENDAPRO_WHATSAPP, no Netlify) — enquanto vazio, todo CTA
 * cai no fallback "#contato" (a seção final da própria landing).
 */
export const AGENDAPRO_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_AGENDAPRO_WHATSAPP ?? "";

export const AGENDAPRO_WHATSAPP_CONFIGURED = Boolean(AGENDAPRO_WHATSAPP_NUMBER);

/** Link do WhatsApp comercial, ou "#contato" enquanto o número não existir. */
export function getAgendaProWhatsappHref(message?: string): string {
  return AGENDAPRO_WHATSAPP_CONFIGURED
    ? whatsappLink(AGENDAPRO_WHATSAPP_NUMBER, message)
    : "#contato";
}

/**
 * Instalação real usada como prova/demonstração ao vivo do sistema
 * (ver product-section/try-it-section). Fica em domínio próprio, separado
 * desta landing comercial.
 */
export const DEMO_SITE_URL = "https://espaco-karla-marques.netlify.app";
