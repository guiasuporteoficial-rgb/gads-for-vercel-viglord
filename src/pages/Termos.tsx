import { useEffect } from 'react';

const Termos = () => {
  useEffect(() => { document.title = 'Termos de Uso | DROPIX EDITORA'; }, []);

  return (
    <div className="container py-12 max-w-3xl prose prose-sm">
      <h1 className="font-serif text-3xl font-bold">Termos de Uso</h1>
      <p className="text-muted-foreground text-sm">Última atualização: 01 de março de 2026</p>

      <h2>1. Aceitação dos Termos</h2>
      <p>Ao acessar e utilizar o site dropixeditoralivros.com, você concorda com estes Termos de Uso. Se não concordar, por favor não utilize nosso site. O uso continuado do site após alterações constitui aceitação dos termos modificados.</p>

      <h2>2. Cadastro e Conta</h2>
      <p>Para realizar compras, você deve fornecer informações verdadeiras e atualizadas. Você é responsável por manter a confidencialidade de sua senha. Notifique-nos imediatamente sobre uso não autorizado de sua conta. Reservamo-nos o direito de suspender contas que violem estes termos.</p>

      <h2>3. Produtos e Preços</h2>
      <p>Os preços são exibidos em Reais (BRL) e podem ser alterados sem aviso prévio. Promoções têm prazo determinado e estão sujeitas a disponibilidade de estoque. Imagens são ilustrativas e podem apresentar variações de cor. Nos reservamos o direito de limitar quantidades por pedido.</p>

      <h2>4. Processo de Compra</h2>
      <p>A confirmação do pedido está sujeita à aprovação do pagamento. Reservamo-nos o direito de cancelar pedidos em caso de erro de preço, suspeita de fraude ou indisponibilidade do produto. Você receberá confirmação por email após aprovação do pagamento.</p>

      <h2>5. Pagamento</h2>
      <p>Aceitamos: cartões de crédito (Visa, Mastercard, Elo), PIX e boleto bancário. Parcelamento em até 6x sem juros para compras acima de R$ 50,00. Pagamentos via PIX recebem 5% de desconto. Boletos vencem em 3 dias úteis.</p>

      <h2>6. Entrega</h2>
      <p>Realizamos entregas para todo o Brasil via Sedex e PAC dos Correios. Os prazos começam a contar após a confirmação do pagamento. Prazos são estimativas e podem sofrer alterações. Frete grátis para compras acima de R$ 149,90 (via PAC).</p>

      <h2>7. Propriedade Intelectual</h2>
      <p>Todo o conteúdo do site (textos, imagens, layout, código) é de propriedade da DROPIX EDITORA ou de seus licenciadores. É proibida a reprodução, distribuição ou modificação sem autorização prévia por escrito.</p>

      <h2>8. Responsabilidades do Usuário</h2>
      <p>Você se compromete a: usar o site de forma lícita, não tentar acessar áreas restritas, não realizar engenharia reversa do site, não utilizar robôs ou scrapers, fornecer informações verdadeiras.</p>

      <h2>9. Limitação de Responsabilidade</h2>
      <p>A DROPIX EDITORA não se responsabiliza por: interrupções temporárias do site, atrasos causados por terceiros (Correios, operadoras de pagamento), uso indevido de sua conta por terceiros, danos indiretos decorrentes do uso do site.</p>

      <h2>10. Lei Aplicável e Foro</h2>
      <p>Estes termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias.</p>
    </div>
  );
};

export default Termos;
