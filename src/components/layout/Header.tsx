import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Heart, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useStore } from '@/stores/useStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { categories } from '@/data/categories';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isBottom = pathname === '/azeitetr';
  const { cartCount, favorites, searchTerm, setSearchTerm, cart } = useStore();
  const count = cartCount();
  const favCount = favorites.length;
  const cartSubtotal = cart.reduce((s, i) => s + i.book.price * i.quantity, 0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchTerm);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(localSearch);
    navigate(`/busca?q=${encodeURIComponent(localSearch)}`);
  };

  const navLinks = [
    { label: 'Início', to: '/' },
    { label: 'Loja', to: '/loja' },
    { label: 'Mais Vendidos', to: '/loja?sort=bestsellers' },
    { label: 'Lançamentos', to: '/loja?sort=newest' },
    { label: 'Ofertas', to: '/loja?sort=deals' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contato', to: '/contato' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-brown text-brown-foreground">
        <div className="container flex items-center justify-between py-1.5 text-xs">
          <span className="hidden sm:inline">Frete grátis para compras acima de R$ 149,90 | Parcele em até 6x sem juros</span>
          <span className="sm:hidden text-[10px]">Frete grátis acima de R$ 149,90</span>
          <div className="flex gap-3">
            <span className="cursor-pointer hover:underline">Minha Conta</span>
            <span className="cursor-pointer hover:underline">Rastrear Pedido</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b bg-background">
        <div className="container flex items-center gap-4 py-3">
          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 overflow-y-auto">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <form onSubmit={handleSearch} className="mb-4">
                <Input placeholder="Buscar..." value={localSearch} onChange={e => setLocalSearch(e.target.value)} />
              </form>
              <nav className="flex flex-col gap-1">
                {navLinks.map(l => (
                  <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-muted">{l.label}</Link>
                ))}
                <div className="mt-2 border-t pt-2">
                  <p className="px-3 py-1 text-xs font-semibold text-muted-foreground">Categorias</p>
                  {categories.map(c => (
                    <Link key={c.slug} to={`/categoria/${c.slug}`} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-1.5 text-sm hover:bg-muted">{c.icon} {c.name}</Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <BookOpen className="h-7 w-7 text-primary" />
            <span className="font-serif text-xl font-bold text-foreground hidden sm:inline">DROPIX EDITORA</span>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Busque por título, autor ou ISBN..."
                value={localSearch}
                onChange={e => setLocalSearch(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
          </form>

          {/* Icons */}
          <div className="flex items-center gap-1 ml-auto">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => { navigate('/busca'); }}>
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/favoritos" className="relative">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                {favCount > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{favCount}</span>}
              </Button>
            </Link>
            <Link to="/carrinho" className="relative flex items-center gap-1">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
                {count > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{count}</span>}
              </Button>
              {count > 0 && <span className="hidden lg:inline text-sm font-medium">R$ {cartSubtotal.toFixed(2)}</span>}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:block border-b bg-background">
        <div className="container flex items-center gap-1 py-1">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors">{l.label}</Link>
          ))}
          <div className="group relative">
            <button className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-muted">Categorias ▾</button>
            <div className="invisible absolute left-0 top-full z-50 grid w-[500px] grid-cols-2 gap-1 rounded-lg border bg-card p-3 shadow-lg opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              {categories.map(c => (
                <Link key={c.slug} to={`/categoria/${c.slug}`} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted">
                  <span>{c.icon}</span> {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
