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
 * Instalação usada como demonstração ao vivo do sistema (ver
 * product-section/try-it-section). Fica em domínio próprio, separado desta
 * landing comercial — é o tenant fictício "Studio Bella Estética" dentro do
 * app MAVORA multi-tenant (agendapro-demo), não uma instalação de cliente
 * real. (Antes apontava pra espaco-karla-marques.netlify.app, uma instalação
 * single-tenant anterior à transformação multi-tenant, já descontinuada —
 * o site nem responde mais, 404.)
 */
// Configurável por env pra permitir testar localmente contra um
// agendapro-demo rodando na própria máquina (ex: `npm run dev` em
// localhost:3000) sem apontar os CTAs de teste pro site de produção — em
// produção a env var nunca é definida, então o valor real não muda.
export const DEMO_SITE_URL = process.env.NEXT_PUBLIC_DEMO_SITE_URL ?? "https://agendapro-demo-generico.netlify.app";

/** Cadastro self-service (Smart Onboarding Comercial MVP) — vive no mesmo app multi-tenant do DEMO_SITE_URL, rota pública `/cadastro`. */
export const SIGNUP_URL = `${DEMO_SITE_URL}/cadastro`;
