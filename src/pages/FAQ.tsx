import { useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const sections = [
  {
    title: '🛒 Compras',
    items: [
      { q: 'Como faço para comprar?', a: 'Escolha o livro desejado, clique em "Adicionar ao Carrinho", vá ao carrinho, confira os itens, preencha seus dados e finalize o pagamento. Você receberá um email de confirmação.' },
      { q: 'Quais formas de pagamento vocês aceitam?', a: 'Cartão de crédito (Visa, Mastercard, Elo) com parcelamento em até 6x sem juros, PIX (com 5% de desconto) e boleto bancário (vencimento em 3 dias).' },
      { q: 'É seguro comprar na Página Viva?', a: 'Sim! Nosso site possui certificado SSL, todos os dados são criptografados e trabalhamos com gateways de pagamento certificados.' },
      { q: 'Posso alterar meu pedido após a compra?', a: 'Você pode solicitar alteração em até 2 horas após a compra, desde que o pedido ainda não tenha sido enviado. Entre em contato pelo nosso SAC.' },
      { q: 'Como usar um cupom de desconto?', a: 'No carrinho de compras, insira o código do cupom no campo "Cupom de Desconto" e clique em "Aplicar". O desconto será exibido no resumo do pedido.' },
    ],
  },
  {
    title: '🚚 Entrega',
    items: [
      { q: 'Qual o prazo de entrega?', a: 'O prazo varia conforme sua localização e a modalidade escolhida: Sedex (3-5 dias úteis) ou PAC (7-10 dias úteis). O prazo começa a contar após a confirmação do pagamento.' },
      { q: 'Vocês entregam em todo o Brasil?', a: 'Sim! Realizamos entregas em todas as regiões do Brasil através dos Correios.' },
      { q: 'O frete é grátis?', a: 'Sim, para compras acima de R$ 149,90 o frete é grátis na modalidade PAC.' },
      { q: 'Como rastreio meu pedido?', a: 'Após o envio, você receberá um email com o código de rastreamento. Use esse código no site dos Correios ou na seção "Meus Pedidos".' },
    ],
  },
  {
    title: '🔄 Trocas e Devoluções',
    items: [
      { q: 'Posso devolver um livro?', a: 'Sim! Você tem até 7 dias após o recebimento para solicitar a devolução por arrependimento. Para defeitos, o prazo é de 30 dias.' },
      { q: 'Quem paga o frete da devolução?', a: 'Em caso de defeito ou erro nosso, nós pagamos. Em caso de arrependimento, o frete é por conta do cliente.' },
    ],
  },
  {
    title: '👤 Conta e Dados',
    items: [
      { q: 'Preciso ter uma conta para comprar?', a: 'Não, você pode comprar como visitante. Mas com uma conta, você acompanha pedidos, salva favoritos e tem um checkout mais rápido.' },
      { q: 'Como excluo minha conta?', a: 'Envie um email para privacidade@paginaviva.com.br solicitando a exclusão. Processaremos em até 10 dias úteis conforme a LGPD.' },
    ],
  },
];

const FAQ = () => {
  useEffect(() => { document.title = 'FAQ — Perguntas Frequentes | Página Viva'; }, []);

  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="font-serif text-3xl font-bold mb-2">Perguntas Frequentes</h1>
      <p className="text-muted-foreground mb-8">Tire suas dúvidas sobre compras, entregas, trocas e mais.</p>
      {sections.map((s) => (
        <div key={s.title} className="mb-8">
          <h2 className="font-serif text-xl font-semibold mb-3">{s.title}</h2>
          <Accordion type="multiple">
            {s.items.map((item, i) => (
              <AccordionItem key={i} value={`${s.title}-${i}`}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
