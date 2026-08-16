import { cn } from "@/lib/utils";

/**
 * Marca institucional MAVORA — cópia autocontida do mesmo componente usado
 * no produto (`agendapro-demo/src/components/brand/mavora-logo.tsx`); os
 * dois projetos são repositórios/deploys separados de propósito (ver
 * README), então não há como importar um do outro. Implementação temporária
 * em SVG inline (símbolo "M" geométrico abstrato) até existirem assets
 * oficiais — quando existirem, só este arquivo precisa mudar.
 */

interface MavoraSymbolProps {
  className?: string;
  style?: React.CSSProperties;
}

export function MavoraSymbol({ className, style }: MavoraSymbolProps) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-8 w-8", className)} style={style} role="img" aria-label="MAVORA">
      <defs>
        <linearGradient id="mavora-symbol-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#885CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#mavora-symbol-gradient)" />
      <path
        d="M11 28V13.5a1.5 1.5 0 0 1 2.7-.9l6.3 8.4 6.3-8.4a1.5 1.5 0 0 1 2.7.9V28"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface MavoraLogoProps {
  className?: string;
  size?: number;
}

export function MavoraLogo({ className, size = 32 }: MavoraLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <MavoraSymbol style={{ height: size, width: size }} />
      <span className="font-mavora font-bold tracking-wide text-foreground" style={{ fontSize: size * 0.62 }}>
        MAVORA
      </span>
    </span>
  );
}
