## Problema

O hero da página `/azeitetr` usa `85vh` na imagem para empurrar o botão CTA abaixo da dobra, mas isso cria um vazio enorme entre a imagem e a subheadline — parece erro de carregamento.

## Solução: Header Editorial + Flexbox Space-Between + Conteúdo Extra

A ideia é atacar o problema em 3 frentes simultâneas:

### 1. Header editorial decorativo (no topo da página, ANTES do hero)

Um header fino estilo portal de conteúdo/saúde. Puramente visual — nenhum link funciona. Exemplo:

```text
┌─────────────────────────────────────────┐
│  🫒 Dropix Editora  │ Protocolo Mediterrâneo │ Ciência │ Bem-Estar  │
└─────────────────────────────────────────┘
```

- Fundo escuro (mesma paleta do hero), fonte DM Sans
- Ocupa ~50-60px naturais no topo
- Botões/links são `<span>` sem ação — apenas decoração
- Só aparece na página `/azeitetr`, não afeta o resto do site

### 2. Remover o `85vh` da imagem e usar `min-height: 85vh` + `space-between` no container

- O container `.azt-hero` fica com `min-height: 85vh` (mobile) e `display: flex; flex-direction: column; justify-content: space-between`
- A imagem volta ao tamanho natural (sem height forçado)
- Os elementos se distribuem uniformemente no espaço

### 3. Adicionar micro-conteúdo entre imagem e botão

Bullet points curtos entre a subheadline e o botão para preencher o espaço restante com conteúdo útil:

- "✓ Baseado em estudos "
- "✓ Protocolo 100% natural"  
- "✓ Apresentação gratuita"

Esses bullets ocupam espaço vertical, aumentam credibilidade e desejo de clique.

### Resultado esperado no mobile

```text
┌──────────────────────────┐
│  Header editorial fino   │  ~50px
├──────────────────────────┤
│  Badge "Protocolo..."    │
│                          │
│  Headline grande         │
│                          │
│  ┌────────────────────┐  │
│  │                    │  │
│  │   Imagem natural   │  │
│  │                    │  │
│  └────────────────────┘  │
│                          │
│  Subheadline             │
│  ✓ Bullet 1             │
│  ✓ Bullet 2             │
│  ✓ Bullet 3             │
│ ─ ─ ─ dobra ─ ─ ─ ─ ─ ─│
│  [ BOTÃO CTA DOURADO ]  │  ← leve scroll
└──────────────────────────┘
```

### Arquivos alterados

- `src/pages/AzeiteTR.tsx` — adicionar header editorial, CSS do header, ajustar flexbox do hero, remover `height: 85vh` da imagem, adicionar bullets