import * as React from "react";
import { getMavoraWhatsappHref, MAVORA_WHATSAPP_CONFIGURED } from "./constants";

interface WhatsAppLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Texto pré-preenchido na conversa do WhatsApp. */
  message?: string;
  children: React.ReactNode;
}

/**
 * `<a>` para o WhatsApp comercial da MAVORA — href, target e rel resolvidos
 * a partir de `constants.ts` num único lugar. Usado dentro de `<Button asChild>`.
 */
export function WhatsAppLink({ message, children, ...props }: WhatsAppLinkProps) {
  return (
    <a
      href={getMavoraWhatsappHref(message)}
      target={MAVORA_WHATSAPP_CONFIGURED ? "_blank" : undefined}
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
