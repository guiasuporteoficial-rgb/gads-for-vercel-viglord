import { Link } from 'react-router-dom';
import { useStore } from '@/stores/useStore';
import { allBooks } from '@/data/books';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { useState } from 'react';

const Carrinho = () => {
  const { cart, removeFromCart, updateQuantity, applyCoupon, removeCoupon, coupon, couponDiscount, cartTotal } = useStore();
  const [couponInput, setCouponInput] = useState('');
  const subtotal = cart.reduce((s, i) => s + i.book.price * i.quantity, 0);
  const discount = subtotal * couponDiscount;
  const total = cartTotal();

  const handleCoupon = () => {
    if (applyCoupon(couponInput)) {
      toast.success('Cupom aplicado com sucesso! 10% de desconto.');
      setCouponInput('');
    } else {
      toast.error('Cupom inválido.');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="font-serif text-2xl font-bold mb-2">Seu carrinho está vazio!</h1>
        <p className="text-muted-foreground mb-6">Que tal explorar nossos mais vendidos?</p>
        <Link to="/loja"><Button size="lg">Continuar Comprando</Button></Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <nav className="text-sm text-muted-foreground mb-6"><Link to="/" className="hover:text-foreground">Início</Link> {' > '} <span className="text-foreground">Carrinho</span></nav>
      <h1 className="font-serif text-3xl font-bold mb-8">Carrinho de Compras</h1>
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.book.id} className="flex gap-4 rounded-lg border bg-card p-4">
              <Link to={`/livro/${item.book.slug}`} className="h-24 w-16 flex-shrink-0 rounded" style={{ backgroundColor: '#3E2723' }}>
                <div className="flex h-full items-center justify-center text-[8px] text-white text-center p-1 font-bold">{item.book.title}</div>
              </Link>
              <div className="flex-1">
                <Link to={`/livro/${item.book.slug}`} className="font-serif font-semibold hover:text-primary">{item.book.title}</Link>
                <p className="text-sm text-muted-foreground">{item.book.author} • {item.format}</p>
                <p className="font-bold text-primary mt-1">R$ {item.book.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { removeFromCart(item.book.id); toast.info('Item removido.'); }}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
                <div className="flex items-center border rounded-md">
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.book.id, item.quantity - 1)}><Minus className="h-3 w-3" /></Button>
                  <span className="w-6 text-center text-sm">{item.quantity}</span>
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.book.id, item.quantity + 1)}><Plus className="h-3 w-3" /></Button>
                </div>
                <span className="text-sm font-semibold">R$ {(item.book.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
          <div className="flex gap-2">
            <Input placeholder="Cupom de desconto" value={couponInput} onChange={e => setCouponInput(e.target.value)} className="max-w-xs" />
            <Button variant="outline" onClick={handleCoupon}>Aplicar</Button>
          </div>
          {coupon && <p className="text-sm text-green-600">✓ Cupom "{coupon}" aplicado — 10% de desconto <button onClick={removeCoupon} className="text-destructive underline ml-1">remover</button></p>}
          <Link to="/loja"><Button variant="ghost">← Continuar Comprando</Button></Link>
        </div>

        <div className="rounded-xl border bg-card p-6 h-fit sticky top-32">
          <h3 className="font-serif text-xl font-semibold mb-4">Resumo do Pedido</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>R$ {subtotal.toFixed(2)}</span></div>
            {discount > 0 && <div className="flex justify-between text-green-600"><span>Desconto ({(couponDiscount * 100).toFixed(0)}%)</span><span>-R$ {discount.toFixed(2)}</span></div>}
            <div className="flex justify-between"><span>Frete</span><span className="text-green-600">{subtotal >= 149.90 ? 'Grátis' : 'A calcular'}</span></div>
            <div className="border-t pt-2 flex justify-between text-lg font-bold"><span>Total</span><span className="text-primary">R$ {total.toFixed(2)}</span></div>
            <p className="text-xs text-muted-foreground">ou 6x de R$ {(total / 6).toFixed(2)} sem juros</p>
          </div>
          <Link to="/checkout"><Button size="lg" className="w-full mt-4">FINALIZAR COMPRA →</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
