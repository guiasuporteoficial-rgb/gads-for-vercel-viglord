import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBestSellers } from '@/data/books';
import BookCard from '@/components/BookCard';

const Confirmacao = () => {
  const suggestions = getBestSellers().slice(0, 4);
  return (
    <div className="container py-16 text-center">
      <CheckCircle className="mx-auto h-20 w-20 text-green-500 mb-4" />
      <h1 className="font-serif text-3xl font-bold mb-2">Pedido Realizado com Sucesso! 🎉</h1>
      <p className="text-lg text-muted-foreground mb-1">Número do pedido: <strong>#DX-2026-00001</strong></p>
      <p className="text-muted-foreground mb-1">Você receberá um email de confirmação em breve.</p>
      <p className="text-muted-foreground mb-8">Prazo estimado de entrega: 5-7 dias úteis</p>
      <div className="flex justify-center gap-4">
        <Link to="/loja"><Button size="lg">Continuar Comprando</Button></Link>
      </div>
      <section className="mt-16 text-left">
        <h2 className="font-serif text-2xl font-bold mb-6">Enquanto seu pedido chega, que tal explorar?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {suggestions.map(b => <BookCard key={b.id} book={b} />)}
        </div>
      </section>
    </div>
  );
};

export default Confirmacao;
