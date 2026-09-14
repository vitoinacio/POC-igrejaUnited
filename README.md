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

As rotas em `src/app` são finas e apontam para a `view` da página. A organização segue MVVM:

- `types`: contratos de dados e propriedades.
- `model`: dados locais tipados, sem dependências de apresentação.
- `service`: acesso à fonte de dados, atualmente local e síncrona.
- `viewmodels`: preparação dos dados, estado e ações da interface.
- `view`: composição visual da página.
- `components`: componentes exclusivos daquela página.
- `hooks`: hooks auxiliares quando necessários; hooks de estado da tela ficam em `viewmodels`.

Recursos exclusivos permanecem dentro da página: a sidebar administrativa, por exemplo, pertence a `src/app/(private)/dashboard`, com seus components, model, service, types e viewmodels.

Componentes usados em várias páginas ficam em `src/components`. As views, os tipos e os viewmodels exclusivos desses componentes ficam dentro da pasta do próprio componente. Por exemplo, `src/components/layout/site-header/viewmodels` cuida apenas do cabeçalho. A faixa de horários pertence a `src/components/shared/page-hero/components`. Não existe uma pasta `src/viewmodels`.

A navegação pública e os horários permanecem em `src/constants`, com services e tipos globais, pois são consumidos por mais de um módulo. As primitivas shadcn permanecem em `src/components/ui`, com seus hooks de infraestrutura em `src/hooks`.

Pastas com o mesmo nome em páginas diferentes representam escopos independentes; não devem conter cópias de recursos compartilhados. Não se criam camadas vazias: o login possui apenas a view e seu viewmodel enquanto não houver autenticação.

Fluxo de dados: `view/components → viewmodels → service → model/constants`. Tipos são importados pelas camadas que precisam deles. Imagens permanecem em `public/images`.

## Conteúdo a completar

Apenas o endereço da unidade de Andaraí foi informado. As demais unidades aparecem com “Endereço em atualização” para não inventar dados. Substitua depois pelas informações oficiais e, quando tiver as fotos reais da igreja, troque os arquivos em `public/images` mantendo os mesmos nomes ou atualize os caminhos no código.

A tela de login é apenas a interface inicial do fluxo. Para produção, conecte-a ao provedor de autenticação escolhido e proteja `/lideres/dashboard` no servidor/middleware.
