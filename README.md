# MAVORA — Landing comercial

Site de vendas do produto MAVORA (antigo "AgendaPro" — nome de marca atualizado; sistema de agendamento online para negócios de beleza). Separado da instalação de qualquer cliente — não lê nenhum banco de dados, é 100% estático.

Stack: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · shadcn/ui.

## Rodando localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Site em [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sim | URL final do site (SEO, sitemap, robots, Open Graph) |
| `NEXT_PUBLIC_MAVORA_WHATSAPP` | Não | WhatsApp comercial. Sem isso, os CTAs caem em `#contato` |

## Capturas reais do sistema

Os componentes `hero-section.tsx` e `proof-section.tsx` têm constantes `..._SHOT_SRC` no topo do arquivo, hoje `undefined` — quando as capturas reais existirem, coloque os arquivos em `public/images/` e preencha essas constantes. O layout já está pronto para receber, sem precisar mudar mais nada.

## Deploy

Netlify (`netlify.toml` já configurado): importar o repositório, configurar as variáveis de ambiente acima com o domínio final, publicar.
