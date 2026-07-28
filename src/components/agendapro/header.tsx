"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppLink } from "./whatsapp-link";

const NAV_LINKS = [
  { href: "#problema", label: "O problema" },
  { href: "#recursos", label: "Recursos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#faq", label: "Perguntas" },
];

export function AgendaProHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-xl font-semibold text-rose-gold-dark md:text-2xl">
          AgendaPro
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" asChild>
            <WhatsAppLink message="Olá! Quero conhecer o AgendaPro.">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </WhatsAppLink>
          </Button>
          <Button size="sm" asChild>
            <a href="#experimente">Ver demonstração</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="font-serif text-rose-gold-dark">AgendaPro</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a href={link.href} className="text-base font-medium text-foreground/80 hover:text-primary">
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-4">
                  <a href="#experimente">Ver demonstração</a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="outline" asChild>
                  <WhatsAppLink message="Olá! Quero conhecer o AgendaPro.">
                    <MessageCircle className="h-4 w-4" />
                    Falar no WhatsApp
                  </WhatsAppLink>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
