import { Link } from 'react-router-dom';
import { useStore } from '@/stores/useStore';
import { allBooks } from '@/data/books';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const Favoritos = () => {
  const { favorites } = useStore();
  const books = allBooks.filter(b => favorites.includes(b.id));

  if (books.length === 0) {
    return (
      <div className="container py-20 text-center">
        <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="font-serif text-2xl font-bold mb-2">Você ainda não tem favoritos!</h1>
        <p className="text-muted-foreground mb-6">Explore nossa loja e marque os livros que mais gostar.</p>
        <Link to="/loja"><Button size="lg">Explorar Loja</Button></Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="font-serif text-3xl font-bold mb-8">♥ Meus Favoritos</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map(b => <BookCard key={b.id} book={b} />)}
      </div>
    </div>
  );
};

export default Favoritos;
