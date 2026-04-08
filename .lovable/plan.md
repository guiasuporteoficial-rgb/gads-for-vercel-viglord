

# Livraria Página Viva — Plano de Implementação

## Visão Geral
E-commerce completo de livros com 180+ livros, 17+ páginas, carrinho funcional, favoritos, busca, filtros e checkout. React + TypeScript + Tailwind + Shadcn/UI.

## Fases de Implementação

### Fase 1 — Fundação (dados, estado global, layout base)
- **Fontes e tema**: Adicionar Playfair Display + Inter via Google Fonts. Configurar paleta customizada no Tailwind (creme #FDF6E3, marrom #3E2723, laranja #E65100, cinza #212121, dourado #FFB300)
- **Dados**: Criar `src/data/books.ts` com todos os 180 livros, `src/data/categories.ts` com as 14 categorias, `src/data/blog-posts.ts` com os 6 posts, `src/data/testimonials.ts` com os 6 depoimentos
- **Estado global (Zustand)**: Store para carrinho (add/remove/update qty/cupom/frete), favoritos (toggle), busca (termo + filtros)
- **Layout global**: Componente `Layout.tsx` com Header (top bar + logo + busca + ícones + nav com dropdown) + Footer (4 colunas + barra inferior). Menu mobile com Sheet/sidebar

### Fase 2 — Homepage
- Hero carrossel (4 slides, autoplay 5s, setas, dots)
- Barra de benefícios (4 ícones)
- Seção Mais Vendidos (8 livros em grid com BookCard component reutilizável)
- Banner promocional com timer fake
- Seção Lançamentos (carrossel horizontal 10 livros)
- Categorias em destaque (grid 12 cards)
- Ofertas especiais (4 livros)
- Depoimentos (carrossel)
- Newsletter (form com validação)
- Blog preview (3 cards)

### Fase 3 — Componente BookCard reutilizável
- Imagem placeholder colorida (cor por gênero)
- Badge desconto, badge "Mais Vendido"
- Título, autor, estrelas, preço antigo/atual
- Botão adicionar carrinho + coração favoritar
- Variante grid e variante lista
- Hover com sombra + scale

### Fase 4 — Loja, Categorias e Busca
- `/loja`: Sidebar filtros (categoria, preço slider, avaliação, formato, idioma) + grid de livros + ordenação + toggle grid/lista + paginação (24/página)
- `/categoria/:slug`: Mesmo layout, pré-filtrado, com banner temático
- `/busca`: Resultados filtrados por título/autor/ISBN + autocomplete no header

### Fase 5 — Página do Produto
- `/livro/:slug`: Layout 2 colunas, imagem + detalhes completos
- Tabs: Descrição, Detalhes, Avaliações (com reviews fake)
- Calculador de frete fake, seletor formato/quantidade
- Botões carrinho/favoritos/comprar agora
- Carrosséis de relacionados

### Fase 6 — Carrinho e Checkout
- `/carrinho`: Lista de itens, qty selector, cupom "PRIMEIRACOMPRA", resumo, calculador frete
- `/checkout`: 3 steps (Identificação com máscaras CPF/tel, Endereço com frete, Pagamento com cartão/PIX/boleto)
- `/confirmacao`: Tela de sucesso com resumo

### Fase 7 — Páginas Institucionais
- `/sobre`: Hero + história + números animados + missão/visão/valores + equipe + impacto social
- `/contato`: Formulário com validação + informações laterais
- `/privacidade`, `/termos`, `/trocas`: Conteúdo legal completo
- `/faq`: Accordion com todas as perguntas
- `/favoritos`: Grid de livros favoritados

### Fase 8 — Blog
- `/blog`: Grid de posts + sidebar
- `/blog/:slug`: Post completo com conteúdo

### Fase 9 — Polish
- Scroll-to-top button
- Toast notifications (sonner) em ações
- Skeleton loading nos cards
- Animações de scroll (fade-in)
- SEO: document title por página
- Responsividade final em todas as páginas
- Rotas no App.tsx para todas as 17+ páginas

## Detalhes Técnicos

```text
src/
├── data/
│   ├── books.ts          (180 livros tipados)
│   ├── categories.ts     (14 categorias)
│   ├── blog-posts.ts     (6 posts)
│   └── testimonials.ts   (6 depoimentos)
├── stores/
│   └── useStore.ts       (Zustand: cart, favorites, search)
├── components/
│   ├── layout/
│   │   ├── Header.tsx    (top bar + main + nav + mobile)
│   │   ├── Footer.tsx    (4 cols + bottom bar)
│   │   └── Layout.tsx    (wrapper)
│   ├── BookCard.tsx      (reutilizável grid/list)
│   ├── HeroCarousel.tsx
│   ├── BookCarousel.tsx
│   ├── CategoryCard.tsx
│   ├── TestimonialCarousel.tsx
│   ├── FilterSidebar.tsx
│   ├── NewsletterForm.tsx
│   ├── ScrollToTop.tsx
│   └── StarRating.tsx
├── pages/
│   ├── Index.tsx
│   ├── Loja.tsx
│   ├── Categoria.tsx
│   ├── Livro.tsx
│   ├── Carrinho.tsx
│   ├── Checkout.tsx
│   ├── Confirmacao.tsx
│   ├── Busca.tsx
│   ├── Favoritos.tsx
│   ├── Sobre.tsx
│   ├── Contato.tsx
│   ├── Privacidade.tsx
│   ├── Termos.tsx
│   ├── Trocas.tsx
│   ├── FAQ.tsx
│   ├── Blog.tsx
│   └── BlogPost.tsx
```

- **Dependencias novas**: `zustand` para estado global
- **Paleta Tailwind**: cores customizadas `cream`, `brown`, `burnt-orange`, `gold` no config
- **Fontes**: Link no index.html para Playfair Display + Inter
- **Imagens**: Componente que gera div colorida com iniciais do título como placeholder

## Escopo e Prioridade
O projeto será implementado sequencialmente nas fases acima. Cada fase produz funcionalidade visível. A Fase 1-3 entrega o esqueleto navegável; Fases 4-6 completam o fluxo de compra; Fases 7-9 adicionam conteúdo e polish.

