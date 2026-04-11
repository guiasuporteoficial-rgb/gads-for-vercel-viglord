import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, Clock, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { toast } from 'sonner';

const Contato = () => {
  useEffect(() => { document.title = 'Contato | DROPIX EDITORA'; }, []);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success('Mensagem enviada! Respondemos em até 24h úteis.');
  };

  return (
    <div className="container py-12">
      <h1 className="font-serif text-3xl font-bold mb-8">Fale Conosco</h1>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <p className="text-lg font-semibold text-green-700 mb-2">Mensagem enviada com sucesso! ✉️</p>
              <p className="text-muted-foreground">Respondemos em até 24h úteis.</p>
              <Button className="mt-4" onClick={() => setSent(false)}>Enviar outra mensagem</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Nome Completo *" required />
              <Input type="email" placeholder="Email *" required />
              <Input placeholder="Telefone" />
              <Select>
                <SelectTrigger><SelectValue placeholder="Assunto" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="duvida">Dúvida sobre pedido</SelectItem>
                  <SelectItem value="troca">Troca/Devolução</SelectItem>
                  <SelectItem value="parceria">Parceria comercial</SelectItem>
                  <SelectItem value="imprensa">Imprensa</SelectItem>
                  <SelectItem value="sugestao">Sugestão</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Mensagem *" required rows={6} />
              <Button type="submit" className="bg-burnt-orange hover:bg-burnt-orange/90 text-white">Enviar Mensagem</Button>
            </form>
          )}
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-3"><Mail className="h-5 w-5 text-burnt-orange mt-0.5" /><div><p className="font-semibold text-sm">Email</p><p className="text-sm text-muted-foreground"><div className="flex items-start gap-3"><Mail className="h-5 w-5 text-burnt-orange mt-0.5" /><div><p className="font-semibold text-sm">Email</p><p className="text-sm text-muted-foreground">contato@dropixeditora.com.br</p></div></div></p></div></div>
          <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-burnt-orange mt-0.5" /><div><p className="font-semibold text-sm">Telefone</p><p className="text-sm text-muted-foreground">(11) 4002-8922</p></div></div>
          <div className="flex items-start gap-3"><Clock className="h-5 w-5 text-burnt-orange mt-0.5" /><div><p className="font-semibold text-sm">Horário</p><p className="text-sm text-muted-foreground">Seg-Sex: 8h às 18h | Sáb: 9h às 13h</p></div></div>
          <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-burnt-orange mt-0.5" /><div><p className="font-semibold text-sm">Endereço</p><p className="text-sm text-muted-foreground">Rua dos Pinheiros, 847 — Pinheiros, São Paulo/SP — CEP 05422-012</p></div></div>
          <div className="flex gap-3 pt-4">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-burnt-orange cursor-pointer" />
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-burnt-orange cursor-pointer" />
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-burnt-orange cursor-pointer" />
            <Youtube className="h-5 w-5 text-muted-foreground hover:text-burnt-orange cursor-pointer" />
          </div>
          <div className="bg-muted rounded-lg h-48 flex items-center justify-center text-muted-foreground text-sm">📍 Mapa — Rua dos Pinheiros, 847</div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
