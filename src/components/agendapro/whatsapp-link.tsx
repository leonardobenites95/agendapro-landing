import * as React from "react";
import { getAgendaProWhatsappHref, AGENDAPRO_WHATSAPP_CONFIGURED } from "./constants";

interface WhatsAppLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Texto pré-preenchido na conversa do WhatsApp. */
  message?: string;
  children: React.ReactNode;
}

/**
 * `<a>` para o WhatsApp comercial do AgendaPro — href, target e rel resolvidos
 * a partir de `constants.ts` num único lugar. Usado dentro de `<Button asChild>`.
 */
export function WhatsAppLink({ message, children, ...props }: WhatsAppLinkProps) {
  return (
    <a
      href={getAgendaProWhatsappHref(message)}
      target={AGENDAPRO_WHATSAPP_CONFIGURED ? "_blank" : undefined}
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
