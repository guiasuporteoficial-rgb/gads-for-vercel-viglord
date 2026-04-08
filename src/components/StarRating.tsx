import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md';
}

const StarRating = ({ rating, reviewCount, size = 'sm' }: StarRatingProps) => {
  const s = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} className={`${s} ${i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-muted-foreground/30'}`} />
        ))}
      </div>
      <span className="text-xs font-medium text-foreground">{rating}</span>
      {reviewCount !== undefined && (
        <span className="text-xs text-muted-foreground">({reviewCount.toLocaleString('pt-BR')})</span>
      )}
    </div>
  );
};

export default StarRating;
