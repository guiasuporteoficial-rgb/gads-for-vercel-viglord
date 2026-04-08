import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { allBooks } from '@/data/books';
import { categories } from '@/data/categories';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { LayoutGrid, List, SlidersHorizontal, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const ITEMS_PER_PAGE = 24;

const Loja = () => {
  const [searchParams] = useSearchParams();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sort, setSort] = useState(searchParams.get('sort') || 'relevance');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [minRating, setMinRating] = useState(0);
  const [page, setPage] = useState(1);

  const toggleCategory = (slug: string) => {
    setSelectedCategories(prev => prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]);
    setPage(1);
  };

  const filtered = useMemo(() => {
    let books = [...allBooks];
    if (selectedCategories.length > 0) books = books.filter(b => selectedCategories.includes(b.categorySlug));
    books = books.filter(b => b.price >= priceRange[0] && b.price <= priceRange[1]);
    if (minRating > 0) books = books.filter(b => b.rating >= minRating);
    switch (sort) {
      case 'price-asc': books.sort((a, b) => a.price - b.price); break;
      case 'price-desc': books.sort((a, b) => b.price - a.price); break;
      case 'rating': books.sort((a, b) => b.rating - a.rating); break;
      case 'newest': books.sort((a, b) => b.year - a.year); break;
      case 'bestsellers': books.sort((a, b) => b.reviewCount - a.reviewCount); break;
      case 'deals': books = books.filter(b => b.discount).sort((a, b) => (b.discount || 0) - (a.discount || 0)); break;
      case 'az': books.sort((a, b) => a.title.localeCompare(b.title)); break;
      case 'za': books.sort((a, b) => b.title.localeCompare(a.title)); break;
    }
    return books;
  }, [selectedCategories, priceRange, minRating, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const clearFilters = () => { setSelectedCategories([]); setPriceRange([0, 200]); setMinRating(0); setPage(1); };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-2">Categoria</h4>
        <div className="space-y-1 max-h-60 overflow-y-auto">
          {categories.map(c => (
            <label key={c.slug} className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox checked={selectedCategories.includes(c.slug)} onCheckedChange={() => toggleCategory(c.slug)} />
              {c.name} <span className="text-muted-foreground text-xs">({c.bookCount})</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Preço: R$ {priceRange[0]} — R$ {priceRange[1]}</h4>
        <Slider min={0} max={200} step={5} value={priceRange} onValueChange={v => { setPriceRange(v); setPage(1); }} />
      </div>
      <div>
        <h4 className="font-semibold mb-2">Avaliação mínima</h4>
        <div className="flex gap-2">
          {[0, 3, 4, 4.5].map(r => (
            <Button key={r} size="sm" variant={minRating === r ? 'default' : 'outline'} onClick={() => { setMinRating(r); setPage(1); }}>
              {r === 0 ? 'Todas' : `${r}+⭐`}
            </Button>
          ))}
        </div>
      </div>
      <Button variant="ghost" className="w-full" onClick={clearFilters}>Limpar Filtros</Button>
    </div>
  );

  return (
    <div className="container py-8">
      <nav className="text-sm text-muted-foreground mb-4"><Link to="/" className="hover:text-foreground">Início</Link> {' > '} <span className="text-foreground">Loja</span></nav>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-3xl font-bold">Loja</h1>
        <span className="text-sm text-muted-foreground">{filtered.length} livros</span>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterContent />
        </aside>

        {/* Main */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4 gap-2">
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="sm"><SlidersHorizontal className="h-4 w-4 mr-1" /> Filtros</Button>
              </SheetTrigger>
              <SheetContent side="left"><SheetTitle>Filtros</SheetTitle><FilterContent /></SheetContent>
            </Sheet>
            <div className="flex items-center gap-2 ml-auto">
              <Select value={sort} onValueChange={v => { setSort(v); setPage(1); }}>
                <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Mais Relevantes</SelectItem>
                  <SelectItem value="bestsellers">Mais Vendidos</SelectItem>
                  <SelectItem value="price-asc">Menor Preço</SelectItem>
                  <SelectItem value="price-desc">Maior Preço</SelectItem>
                  <SelectItem value="rating">Mais Avaliados</SelectItem>
                  <SelectItem value="newest">Lançamentos</SelectItem>
                  <SelectItem value="deals">Ofertas</SelectItem>
                  <SelectItem value="az">A-Z</SelectItem>
                  <SelectItem value="za">Z-A</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="icon" onClick={() => setView('grid')} className={view === 'grid' ? 'bg-muted' : ''}><LayoutGrid className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon" onClick={() => setView('list')} className={view === 'list' ? 'bg-muted' : ''}><List className="h-4 w-4" /></Button>
            </div>
          </div>

          {view === 'grid' ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {paged.map(b => <BookCard key={b.id} book={b} />)}
            </div>
          ) : (
            <div className="space-y-4">
              {paged.map(b => <BookCard key={b.id} book={b} variant="list" />)}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center gap-1">
              <Button variant="outline" size="sm" disabled={page === 1} onClick={() => setPage(p => p - 1)}>← Anterior</Button>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(p => (
                <Button key={p} size="sm" variant={p === page ? 'default' : 'outline'} onClick={() => setPage(p)}>{p}</Button>
              ))}
              {totalPages > 5 && <span className="px-2 self-center">...</span>}
              <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>Próxima →</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loja;
