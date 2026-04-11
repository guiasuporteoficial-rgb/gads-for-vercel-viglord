import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Package, CreditCard, RefreshCw, ShieldCheck, Star, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BookCard from '@/components/BookCard';
import StarRating from '@/components/StarRating';
import { getBestSellers, getNewReleases, getOnSaleBooks } from '@/data/books';
import { categories } from '@/data/categories';
import { testimonials } from '@/data/testimonials';
import { blogPosts } from '@/data/blog-posts';
import { toast } from '@/components/ui/sonner';

const slides = [
  { bg: 'linear-gradient(135deg, #3E2723, #E65100)', title: 'Descubra Mundos Infinitos', sub: 'Mais de 5.000 títulos com até 40% de desconto. Sua próxima grande leitura está aqui.', cta: 'Explorar Loja →', to: '/loja' },
  { bg: 'linear-gradient(135deg, #5D4037, #795548)', title: 'Lançamentos da Semana', sub: 'Os títulos mais aguardados acabaram de chegar. Garanta o seu antes que esgote.', cta: 'Ver Lançamentos →', to: '/loja?sort=newest' },
  { bg: 'linear-gradient(135deg, #E65100, #FFB300)', title: 'Clube Página Viva', sub: 'Assine e receba 1 livro surpresa por mês + frete grátis em todas as compras.', cta: 'Conhecer o Clube →', to: '/sobre' },
  { bg: 'linear-gradient(135deg, #1B5E20, #4CAF50)', title: 'Semana do Leitor', sub: 'Livros selecionados a partir de R$ 9,90. Promoção por tempo limitado!', cta: 'Aproveitar Ofertas →', to: '/loja?sort=deals' },
];

const Index = () => {
  const [slide, setSlide] = useState(0);
  const [email, setEmail] = useState('');
  const bestSellers = getBestSellers();
  const newReleases = getNewReleases();
  const onSale = getOnSaleBooks();
  const [scrollCarousel, setScrollCarousel] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  // Fake countdown
  const [countdown, setCountdown] = useState({ d: 2, h: 14, m: 32, s: 7 });
  useEffect(() => {
    const t = setInterval(() => {
      setCountdown(c => {
        let { d, h, m, s } = c;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) return { d: 2, h: 14, m: 32, s: 7 };
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      toast.success('Cadastro realizado! Você ganhou 10% OFF na primeira compra. 🎉');
      setEmail('');
    } else {
      toast.error('Por favor, insira um email válido.');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[400px] md:h-[500px] transition-all duration-700" style={{ background: slides[slide].bg }}>
          <div className="container flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{slides[slide].title}</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90">{slides[slide].sub}</p>
            <Link to={slides[slide].to}>
              <Button id="btn-hero-explore" size="lg" className="text-lg px-8">{slides[slide].cta}</Button>
            </Link>
          </div>
          <button onClick={() => setSlide(s => (s - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/40"><ChevronLeft /></button>
          <button onClick={() => setSlide(s => (s + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/40"><ChevronRight /></button>
        </div>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => <button key={i} onClick={() => setSlide(i)} className={`h-2.5 w-2.5 rounded-full transition-all ${i === slide ? 'bg-white w-6' : 'bg-white/50'}`} />)}
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="border-b bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          {[
            { icon: Package, text: 'Frete Grátis acima de R$ 149,90' },
            { icon: CreditCard, text: 'Parcele em até 6x sem juros' },
            { icon: RefreshCw, text: 'Troca Fácil em até 30 dias' },
            { icon: ShieldCheck, text: 'Compra 100% Segura' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <b.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container py-12">
        <h2 className="font-serif text-3xl font-bold mb-2">🔥 Mais Vendidos da Semana</h2>
        <p className="text-muted-foreground mb-8">Os livros que todo mundo está lendo agora.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSellers.map(book => <BookCard key={book.id} book={book} showBestSeller />)}
        </div>
        <div className="mt-8 text-center">
          <Link to="/loja?sort=bestsellers"><Button variant="outline" size="lg">Ver Todos os Mais Vendidos →</Button></Link>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="mx-4 md:mx-auto max-w-6xl rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFB300, #E65100)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-8 text-white">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold">📚 MEGA PROMOÇÃO: 3 livros por R$ 99,90</h3>
            <p className="opacity-90">Escolha os seus favoritos!</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 text-center">
              {[
                { v: countdown.d, l: 'd' },
                { v: countdown.h, l: 'h' },
                { v: countdown.m, l: 'm' },
                { v: countdown.s, l: 's' },
              ].map((t, i) => (
                <div key={i} className="rounded-lg bg-white/20 px-3 py-2 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{String(t.v).padStart(2, '0')}</div>
                  <div className="text-xs">{t.l}</div>
                </div>
              ))}
            </div>
            <Link to="/loja"><Button className="bg-white text-primary hover:bg-white/90">Montar meu Kit →</Button></Link>
          </div>
        </div>
      </section>

      {/* New Releases */}
      <section className="container py-12">
        <h2 className="font-serif text-3xl font-bold mb-2">✨ Acabaram de Chegar</h2>
        <p className="text-muted-foreground mb-8">Novidades fresquinhas para sua estante.</p>
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {newReleases.map(book => (
              <div key={book.id} className="w-[200px] flex-shrink-0">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12">
        <h2 className="font-serif text-3xl font-bold mb-2">📂 Explore por Categoria</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.slice(0, 12).map(cat => (
            <Link key={cat.slug} to={`/categoria/${cat.slug}`} className="group relative overflow-hidden rounded-xl border bg-card p-6 text-center transition-all hover:shadow-lg hover:scale-[1.02]">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <h3 className="font-serif font-semibold">{cat.name}</h3>
              <p className="text-sm text-muted-foreground">{cat.bookCount} livros</p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: cat.color }} />
            </Link>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section className="container py-12">
        <h2 className="font-serif text-3xl font-bold mb-2">🏷️ Ofertas que Você Não Pode Perder</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {onSale.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card border-y py-12">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">💬 O Que Nossos Leitores Dizem</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map(t => (
              <div key={t.id} className="rounded-xl border bg-background p-6">
                <div className="flex mb-2">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
                <p className="text-sm text-muted-foreground italic mb-4">"{t.text}"</p>
                <p className="font-semibold text-sm">— {t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brown text-brown-foreground py-12">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold mb-2">📬 Receba Novidades e Promoções Exclusivas</h2>
          <p className="opacity-80 mb-6">Cadastre-se e ganhe 10% OFF na primeira compra.</p>
          <form onSubmit={handleNewsletter} className="mx-auto flex max-w-md gap-2">
            <Input placeholder="Seu melhor email" value={email} onChange={e => setEmail(e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
            <Button type="submit">Quero Meu Desconto!</Button>
          </form>
          <p className="mt-3 text-xs opacity-60">Prometemos não enviar spam. Você pode cancelar a qualquer momento.</p>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="container py-12">
        <h2 className="font-serif text-3xl font-bold mb-8">📝 Do Nosso Blog</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map(post => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg">
              <div className="h-40" style={{ backgroundColor: post.imageColor }} />
              <div className="p-4">
                <span className="text-xs font-semibold text-primary">{post.category}</span>
                <h3 className="font-serif font-semibold mt-1 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.summary}</p>
                <p className="text-xs text-muted-foreground mt-2">{post.date} • {post.author}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/blog"><Button variant="outline" size="lg">Ver Todos os Posts →</Button></Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
