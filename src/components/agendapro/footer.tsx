import { MavoraLogo } from "@/components/mavora/logo";
import { DEMO_SITE_URL } from "./constants";

const LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#faq", label: "Perguntas frequentes" },
];

const TRY_LINKS = [
  { href: `${DEMO_SITE_URL}/agendar`, label: "Ver agendamento" },
  // /admin/demo-entrar (não /admin/login) — login automático de 1 clique,
  // mesma rota usada em try-it-section.tsx. Levar pro login puro deixaria
  // quem clica aqui direto (sem passar pela seção "experimente") sem
  // credencial nenhuma pra usar.
  { href: `${DEMO_SITE_URL}/admin/demo-entrar`, label: "Ver painel" },
];

export function AgendaProFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container grid gap-10 py-14 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <MavoraLogo size={28} />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Sistema de agendamento online e site institucional para negócios
            da área da beleza. Dados de cada cliente isolados dos demais.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Produto
          </p>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Experimente
          </p>
          <ul className="mt-4 space-y-2.5">
            {TRY_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MAVORA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
