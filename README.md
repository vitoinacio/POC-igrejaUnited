# Igreja United — Site Next.js

Projeto navegável em **Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui**.

## Rotas

- `/` — Home
- `/sobre-nos` — História, missão e liderança
- `/unidades` — Unidades
- `/ugroups` — UGroups com filtro por categoria
- `/escolas` — Escolas e FAQ
- `/voluntariado` — Times de voluntariado
- `/eventos` — Agenda e arquivos `.ics`
- `/lideres` — Acesso discreto da liderança
- `/lideres/dashboard` — Dashboard inicial

## Rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Organização

As rotas em `src/app` são finas e apontam para `src/features/*/view`. Componentes reutilizáveis ficam em `src/components`, dados públicos em `src/lib/site-data.ts` e imagens locais em `public/images`.

## Conteúdo a completar

Apenas o endereço da unidade de Andaraí foi informado. As demais unidades aparecem com “Endereço em atualização” para não inventar dados. Substitua depois pelas informações oficiais e, quando tiver as fotos reais da igreja, troque os arquivos em `public/images` mantendo os mesmos nomes ou atualize os caminhos no código.

A tela de login é apenas a interface inicial do fluxo. Para produção, conecte-a ao provedor de autenticação escolhido e proteja `/lideres/dashboard` no servidor/middleware.
