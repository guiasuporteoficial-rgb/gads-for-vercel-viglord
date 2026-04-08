import { Book } from '@/data/types';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '@/stores/useStore';
import StarRating from './StarRating';
import { toast } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';

const categoryColors: Record<string, string> = {
  'romance': '#E91E63',
  'suspense-e-thriller': '#B71C1C',
  'ficcao-cientifica': '#1565C0',
  'literatura-classica': '#5D4037',
  'autoajuda': '#2E7D32',
  'negocios': '#1A237E',
  'infantil-e-juvenil': '#F9A825',
  'historia-e-biografias': '#795548',
  'ciencia-e-tecnologia': '#00838F',
  'gastronomia': '#E65100',
  'arte-e-fotografia': '#6A1B9A',
  'poesia': '#7E57C2',
  'terror': '#37474F',
  'bem-estar-e-saude': '#00695C',
};

interface BookCardProps {
  book: Book;
  variant?: 'grid' | 'list';
  showBestSeller?: boolean;
}

const BookCard = ({ book, variant = 'grid', showBestSeller }: BookCardProps) => {
  const { addToCart, toggleFavorite, isFavorite } = useStore();
  const fav = isFavorite(book.id);
  const bgColor = categoryColors[book.categorySlug] || '#3E2723';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(book);
    toast.success(`"${book.title}" adicionado ao carrinho!`);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(book.id);
    toast.success(fav ? 'Removido dos favoritos' : 'Adicionado aos favoritos!');
  };

  if (variant === 'list') {
    return (
      <Link to={`/livro/${book.slug}`} className="flex gap-4 rounded-lg border bg-card p-4 transition-shadow hover:shadow-lg">
        <div className="relative h-40 w-28 flex-shrink-0 overflow-hidden rounded-md" style={{ backgroundColor: bgColor }}>
          <div className="flex h-full flex-col items-center justify-center p-2 text-center text-white">
            <span className="text-[10px] font-bold leading-tight">{book.title}</span>
            <span className="mt-1 text-[8px] opacity-80">{book.author}</span>
          </div>
          {book.discount && <span className="absolute left-1 top-1 rounded bg-destructive px-1.5 py-0.5 text-[10px] font-bold text-white">-{book.discount}%</span>}
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">{book.title}</h3>
            <p className="text-sm text-muted-foreground">{book.author}</p>
            <StarRating rating={book.rating} reviewCount={book.reviewCount} />
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{book.synopsis}</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              {book.originalPrice && <span className="text-sm text-muted-foreground line-through">R$ {book.originalPrice.toFixed(2)}</span>}
              <span className="ml-2 text-lg font-bold text-primary">R$ {book.price.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" onClick={handleToggleFavorite}>
                <Heart className={`h-4 w-4 ${fav ? 'fill-destructive text-destructive' : ''}`} />
              </Button>
              <Button size="sm" onClick={handleAddToCart}>
                <ShoppingCart className="mr-1 h-4 w-4" /> Adicionar
              </Button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/livro/${book.slug}`} className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:scale-[1.02]">
      <div className="relative aspect-[3/4] w-full overflow-hidden" style={{ backgroundColor: bgColor }}>
        <div className="flex h-full flex-col items-center justify-center p-4 text-center text-white">
          <span className="text-xs font-bold leading-tight drop-shadow-md">{book.title}</span>
          <span className="mt-2 text-[10px] opacity-80">{book.author}</span>
        </div>
        {book.discount && (
          <span className="absolute left-2 top-2 rounded-full bg-destructive px-2 py-0.5 text-xs font-bold text-white">-{book.discount}%</span>
        )}
        {showBestSeller && book.isBestSeller && (
          <span className="absolute right-2 top-2 rounded-full bg-gold px-2 py-0.5 text-xs font-bold text-brown">Mais Vendido</span>
        )}
        <button onClick={handleToggleFavorite} className="absolute right-2 bottom-2 rounded-full bg-white/90 p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
          <Heart className={`h-4 w-4 ${fav ? 'fill-destructive text-destructive' : 'text-foreground'}`} />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="font-serif text-sm font-semibold leading-tight text-foreground line-clamp-2">{book.title}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{book.author}</p>
        <div className="mt-1">
          <StarRating rating={book.rating} reviewCount={book.reviewCount} />
        </div>
        <div className="mt-auto pt-2">
          {book.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">R$ {book.originalPrice.toFixed(2)}</span>
          )}
          <div className="text-lg font-bold text-primary">R$ {book.price.toFixed(2)}</div>
        </div>
        <Button size="sm" className="mt-2 w-full" onClick={handleAddToCart}>
          <ShoppingCart className="mr-1 h-3.5 w-3.5" /> Adicionar
        </Button>
      </div>
    </Link>
  );
};

export default BookCard;
