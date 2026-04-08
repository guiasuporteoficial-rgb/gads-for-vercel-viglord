import { useSearchParams, Link } from 'react-router-dom';
import { searchBooks } from '@/data/books';
import { useStore } from '@/stores/useStore';
import BookCard from '@/components/BookCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { getBestSellers } from '@/data/books';

const Busca = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const { searchTerm, setSearchTerm } = useStore();
  const [local, setLocal] = useState(q || searchTerm);
  const results = useMemo(() => searchBooks(local), [local]);
  const popular = getBestSellers().slice(0, 4);

  return (
    <div className="container py-8">
      <form onSubmit={e => { e.preventDefault(); setSearchTerm(local); }} className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Busque por título, autor ou ISBN..." value={local} onChange={e => setLocal(e.target.value)} className="pl-10 h-12 text-lg" />
        </div>
      </form>
      {local.trim() ? (
        <>
          <p className="text-muted-foreground mb-6">{results.length} resultados para "<strong>{local}</strong>"</p>
          {results.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {results.map(b => <BookCard key={b.id} book={b} />)}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-6">Não encontramos resultados. Tente outro termo.</p>
              <h3 className="font-serif text-xl font-bold mb-4">Livros populares</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{popular.map(b => <BookCard key={b.id} book={b} />)}</div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Digite algo para buscar...</p>
        </div>
      )}
    </div>
  );
};

export default Busca;
