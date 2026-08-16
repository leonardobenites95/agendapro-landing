import Image from "next/image";
import { MonitorSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductShotProps {
  /** Caminho em /public (ex: "/images/painel-agenda.png"). Sem isso, mostra um espaço reservado. */
  src?: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Moldura para uma captura real do sistema. Sem `src`, mostra um espaço
 * reservado honesto (nunca uma tela inventada simulando o produto) — quando a
 * captura existir, basta passar `src` apontando para um arquivo em
 * public/images/; nada no layout muda.
 */
export function ProductShot({ src, alt, caption, priority, className }: ProductShotProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl shadow-primary/5",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-secondary/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/60" />
      </div>

      <div className="relative aspect-[16/10] w-full bg-secondary">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
            <MonitorSmartphone className="h-8 w-8 text-primary/50" />
            <p className="text-sm font-medium text-foreground/70">{alt}</p>
            <p className="text-xs text-muted-foreground">
              Captura real do sistema — em preparação
            </p>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="border-t border-border/60 px-4 py-3 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
