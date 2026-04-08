import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '@/stores/useStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';

const Checkout = () => {
  const { cart, cartTotal, clearCart, couponDiscount } = useStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const subtotal = cart.reduce((s, i) => s + i.book.price * i.quantity, 0);
  const total = cartTotal();

  const handleFinish = () => {
    toast.success('Pedido realizado com sucesso! 🎉');
    clearCart();
    navigate('/confirmacao');
  };

  if (cart.length === 0) return <div className="container py-20 text-center"><h1 className="font-serif text-2xl">Carrinho vazio</h1><Link to="/loja"><Button className="mt-4">Ir para a Loja</Button></Link></div>;

  return (
    <div className="container py-8 max-w-4xl">
      <nav className="text-sm text-muted-foreground mb-6"><Link to="/" className="hover:text-foreground">Início</Link> {' > '} <Link to="/carrinho" className="hover:text-foreground">Carrinho</Link> {' > '} <span className="text-foreground">Checkout</span></nav>
      
      {/* Steps */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {['Identificação', 'Endereço', 'Pagamento'].map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>{i + 1}</div>
            <span className={`text-sm hidden sm:inline ${step === i + 1 ? 'font-semibold' : 'text-muted-foreground'}`}>{s}</span>
            {i < 2 && <div className="w-8 h-0.5 bg-muted" />}
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-xl border bg-card p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-semibold">Identificação</h2>
              <div><Label>Nome Completo</Label><Input placeholder="Seu nome completo" /></div>
              <div><Label>Email</Label><Input type="email" placeholder="email@exemplo.com" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>CPF</Label><Input placeholder="000.000.000-00" /></div>
                <div><Label>Telefone</Label><Input placeholder="(00) 00000-0000" /></div>
              </div>
              <Button className="w-full" onClick={() => setStep(2)}>Continuar</Button>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-semibold">Endereço de Entrega</h2>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>CEP</Label><Input placeholder="00000-000" /></div>
                <div />
              </div>
              <div><Label>Rua / Logradouro</Label><Input placeholder="Rua dos Pinheiros" /></div>
              <div className="grid grid-cols-3 gap-4">
                <div><Label>Número</Label><Input placeholder="123" /></div>
                <div className="col-span-2"><Label>Complemento</Label><Input placeholder="Apto, bloco..." /></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div><Label>Bairro</Label><Input placeholder="Pinheiros" /></div>
                <div><Label>Cidade</Label><Input placeholder="São Paulo" /></div>
                <div><Label>Estado</Label><Input placeholder="SP" /></div>
              </div>
              <div className="rounded-lg border p-3 space-y-2 text-sm">
                <label className="flex items-center gap-2"><input type="radio" name="frete" defaultChecked /> Sedex — R$ 14,90 (3-5 dias úteis)</label>
                <label className="flex items-center gap-2"><input type="radio" name="frete" /> PAC — R$ 9,90 (7-10 dias úteis)</label>
                <label className="flex items-center gap-2"><input type="radio" name="frete" /> Retirar na loja — Grátis</label>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(1)}>← Voltar</Button>
                <Button className="flex-1" onClick={() => setStep(3)}>Continuar</Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-semibold">Pagamento</h2>
              <div className="rounded-lg border p-4 space-y-3">
                <label className="flex items-center gap-2 font-medium"><input type="radio" name="pay" defaultChecked /> Cartão de Crédito</label>
                <div className="pl-6 space-y-2">
                  <Input placeholder="Número do cartão" />
                  <div className="grid grid-cols-3 gap-2">
                    <Input placeholder="Nome no cartão" className="col-span-1" />
                    <Input placeholder="MM/AA" />
                    <Input placeholder="CVV" />
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <label className="flex items-center gap-2 font-medium"><input type="radio" name="pay" /> PIX <span className="text-xs text-green-600 ml-1">5% de desconto!</span></label>
              </div>
              <div className="rounded-lg border p-4">
                <label className="flex items-center gap-2 font-medium"><input type="radio" name="pay" /> Boleto Bancário</label>
              </div>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Li e aceito os <Link to="/termos" className="text-primary underline">Termos de Uso</Link> e <Link to="/privacidade" className="text-primary underline">Política de Privacidade</Link></label>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(2)}>← Voltar</Button>
                <Button className="flex-1" size="lg" onClick={handleFinish}>CONFIRMAR PEDIDO — R$ {total.toFixed(2)}</Button>
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="rounded-xl border bg-card p-6 h-fit">
          <h3 className="font-serif font-semibold mb-3">Resumo</h3>
          <div className="space-y-2 text-sm">
            {cart.map(i => <div key={i.book.id} className="flex justify-between"><span className="truncate mr-2">{i.book.title} x{i.quantity}</span><span>R$ {(i.book.price * i.quantity).toFixed(2)}</span></div>)}
            <div className="border-t pt-2 flex justify-between font-bold text-lg"><span>Total</span><span className="text-primary">R$ {total.toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
