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
 * Instalação real usada como prova/demonstração ao vivo do sistema
 * (ver product-section/try-it-section). Fica em domínio próprio, separado
 * desta landing comercial.
 */
export const DEMO_SITE_URL = "https://espaco-karla-marques.netlify.app";
