import { useParams, Link } from 'react-router-dom';
import { getBookBySlug, getBooksByCategory } from '@/data/books';
import { categories } from '@/data/categories';
import { useStore } from '@/stores/useStore';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StarRating from '@/components/StarRating';
import BookCard from '@/components/BookCard';
import { Heart, ShoppingCart, Share2, Minus, Plus, Star } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

const categoryColors: Record<string, string> = {
  'romance': '#E91E63', 'suspense-e-thriller': '#B71C1C', 'ficcao-cientifica': '#1565C0',
  'literatura-classica': '#5D4037', 'autoajuda': '#2E7D32', 'negocios': '#1A237E',
  'infantil-e-juvenil': '#F9A825', 'historia-e-biografias': '#795548', 'ciencia-e-tecnologia': '#00838F',
  'gastronomia': '#E65100', 'arte-e-fotografia': '#6A1B9A', 'poesia': '#7E57C2',
  'terror': '#37474F', 'bem-estar-e-saude': '#00695C',
};

const Livro = () => {
  const { slug } = useParams();
  const book = getBookBySlug(slug || '');
  const { addToCart, toggleFavorite, isFavorite } = useStore();
  const [qty, setQty] = useState(1);
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState<string | null>(null);

  if (!book) return <div className="container py-20 text-center"><h1 className="font-serif text-2xl">Livro não encontrado</h1><Link to="/loja"><Button className="mt-4">Voltar para a Loja</Button></Link></div>;

  const fav = isFavorite(book.id);
  const bgColor = categoryColors[book.categorySlug] || '#3E2723';
  const related = getBooksByCategory(book.categorySlug).filter(b => b.id !== book.id).slice(0, 6);
  const cat = categories.find(c => c.slug === book.categorySlug);

  const handleAdd = () => { for (let i = 0; i < qty; i++) addToCart(book); toast.success(`"${book.title}" adicionado ao carrinho!`); };
  const calcFrete = () => { if (cep.length >= 8) setFrete('ok'); };

  const fakeReviews = [
    { name: 'Ana Costa', date: '10/03/2026', rating: 5, text: 'Simplesmente incrível! Não consegui parar de ler. Recomendo para todos.' },
    { name: 'Pedro Lima', date: '05/03/2026', rating: 5, text: 'Um dos melhores livros que li nos últimos anos. A escrita é envolvente e os personagens são memoráveis.' },
    { name: 'Mariana Silva', date: '28/02/2026', rating: 4, text: 'Muito bom! Achei o final um pouco apressado, mas no geral é uma leitura excelente.' },
    { name: 'Lucas Oliveira', date: '20/02/2026', rating: 5, text: 'Comprei para dar de presente e acabei lendo primeiro. Não me arrependo!' },
    { name: 'Carla Santos', date: '15/02/2026', rating: 4, text: 'Ótima qualidade de impressão e a história é maravilhosa. Entrega rápida da DROPIX EDITORA.' },
  ];

  return (
    <div className="container py-8">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Início</Link> {' > '}
        <Link to="/loja" className="hover:text-foreground">Loja</Link> {' > '}
        <Link to={`/categoria/${book.categorySlug}`} className="hover:text-foreground">{book.category}</Link> {' > '}
        <span className="text-foreground">{book.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
        {/* Image */}
        <div className="relative aspect-[3/4] max-h-[500px] overflow-hidden rounded-xl" style={{ backgroundColor: bgColor }}>
          <div className="flex h-full flex-col items-center justify-center p-8 text-center text-white">
            <span className="text-2xl font-bold font-serif leading-tight drop-shadow-lg">{book.title}</span>
            <span className="mt-4 text-lg opacity-80">{book.author}</span>
          </div>
          {book.discount && <span className="absolute left-4 top-4 rounded-full bg-destructive px-3 py-1 text-sm font-bold text-white">-{book.discount}%</span>}
        </div>

        {/* Details */}
        <div>
          <h1 className="font-serif text-3xl font-bold mb-1">{book.title}</h1>
          <p className="text-lg text-muted-foreground mb-2">por <span className="text-foreground font-medium">{book.author}</span></p>
          <StarRating rating={book.rating} reviewCount={book.reviewCount} size="md" />

          <div className="mt-4">
            {book.originalPrice && <span className="text-lg text-muted-foreground line-through mr-2">R$ {book.originalPrice.toFixed(2)}</span>}
            <span className="text-3xl font-bold text-primary">R$ {book.price.toFixed(2)}</span>
            {book.discount && <span className="ml-2 rounded bg-destructive px-2 py-0.5 text-sm font-bold text-white">-{book.discount}%</span>}
          </div>
          <p className="text-sm text-muted-foreground mt-1">ou 6x de R$ {(book.price / 6).toFixed(2)} sem juros</p>
          <p className="text-sm text-green-600 mt-1">Frete grátis para compras acima de R$ 149,90</p>

          {/* CEP */}
          <div className="mt-4 flex gap-2 max-w-xs">
            <Input placeholder="CEP" value={cep} onChange={e => setCep(e.target.value)} maxLength={9} />
            <Button variant="outline" onClick={calcFrete}>Calcular</Button>
          </div>
          {frete && (
            <div className="mt-2 text-sm space-y-1">
              <p className="text-green-600">✓ Sedex: R$ 14,90 — entrega em 3-5 dias úteis</p>
              <p className="text-green-600">✓ PAC: R$ 9,90 — entrega em 7-10 dias úteis</p>
            </div>
          )}

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-medium">Quantidade:</span>
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="h-4 w-4" /></Button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setQty(qty + 1)}><Plus className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Button size="lg" className="flex-1" onClick={handleAdd}><ShoppingCart className="mr-2 h-5 w-5" /> ADICIONAR AO CARRINHO</Button>
            <Button size="lg" variant="outline" onClick={() => { toggleFavorite(book.id); toast.success(fav ? 'Removido dos favoritos' : 'Adicionado aos favoritos!'); }}>
              <Heart className={`mr-2 h-5 w-5 ${fav ? 'fill-destructive text-destructive' : ''}`} /> {fav ? 'Favoritado' : 'Favoritar'}
            </Button>
          </div>
          <Link to="/carrinho"><Button size="lg" variant="secondary" className="mt-2 w-full" onClick={handleAdd}>Comprar Agora</Button></Link>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="description" className="mt-12">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="description">Descrição</TabsTrigger>
          <TabsTrigger value="details">Detalhes</TabsTrigger>
          <TabsTrigger value="reviews">Avaliações ({book.reviewCount.toLocaleString('pt-BR')})</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4">
          <p className="text-muted-foreground leading-relaxed">{book.synopsis}</p>
          <h4 className="font-serif font-semibold mt-6 mb-2">Por que ler este livro?</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Uma narrativa envolvente que prende da primeira à última página</li>
            <li>Personagens complexos e memoráveis que ficam com você</li>
            <li>Temas relevantes e atuais abordados com profundidade</li>
          </ul>
        </TabsContent>
        <TabsContent value="details" className="mt-4">
          <table className="w-full max-w-md text-sm">
            <tbody>
              {[['Título', book.title], ['Autor', book.author], ['Editora', book.publisher], ['ISBN', book.isbn], ['Páginas', book.pages], ['Formato', book.format], ['Idioma', 'Português'], ['Ano', book.year], ['Dimensões', '14 x 21 cm']].map(([k, v]) => (
                <tr key={k as string} className="border-b"><td className="py-2 font-medium text-muted-foreground">{k}</td><td className="py-2">{v}</td></tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
        <TabsContent value="reviews" className="mt-4">
          <div className="space-y-4">
            {fakeReviews.map((r, i) => (
              <div key={i} className="border-b pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className={`h-3.5 w-3.5 ${s <= r.rating ? 'fill-gold text-gold' : 'text-muted-foreground/30'}`} />)}</div>
                  <span className="text-sm font-medium">{r.name}</span>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                  <span className="text-xs text-green-600">✓ Compra Verificada</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{r.text}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold mb-6">Livros Relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {related.map(b => <BookCard key={b.id} book={b} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default Livro;
