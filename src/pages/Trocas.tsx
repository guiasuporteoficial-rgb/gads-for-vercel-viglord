import { useEffect } from 'react';

const Trocas = () => {
  useEffect(() => { document.title = 'Trocas e Devoluções | DROPIX EDITORA'; }, []);

  return (
    <div className="container py-12 max-w-3xl prose prose-sm">
      <h1 className="font-serif text-3xl font-bold">Política de Trocas e Devoluções</h1>
      <p className="text-muted-foreground text-sm">Última atualização: 01 de março de 2026</p>

      <h2>Seu direito de arrependimento</h2>
      <p>Conforme o Código de Defesa do Consumidor (Art. 49), você pode desistir da compra em até 7 dias corridos após o recebimento do produto, sem necessidade de justificativa.</p>

      <h2>Condições para troca/devolução</h2>
      <ul>
        <li>O livro deve estar em perfeito estado, sem marcas de uso, rasuras ou danos.</li>
        <li>Deve estar com a embalagem original.</li>
        <li>Livros lacrados devem estar com lacre intacto.</li>
        <li>eBooks e audiobooks não são passíveis de devolução após download.</li>
      </ul>

      <h2>Prazo para troca por defeito</h2>
      <p>30 dias corridos após o recebimento.</p>

      <h2>Defeitos cobertos</h2>
      <ul>
        <li>Páginas faltantes ou em branco</li>
        <li>Erros de impressão</li>
        <li>Encadernação danificada</li>
        <li>Produto diferente do pedido</li>
      </ul>

      <h2>Como solicitar</h2>
      <ol>
        <li>Acesse "Minha Conta" {'>'} "Meus Pedidos"</li>
        <li>Selecione o pedido e clique em "Solicitar Troca/Devolução"</li>
        <li>Escolha o motivo e descreva o problema</li>
        <li>Aguarde nosso email com as instruções de envio (em até 24h úteis)</li>
        <li>Envie o produto (frete por conta da DROPIX EDITORA em caso de defeito)</li>
      </ol>

      <h2>Reembolso</h2>
      <ul>
        <li><strong>Cartão de crédito:</strong> estorno em até 2 faturas.</li>
        <li><strong>PIX:</strong> reembolso em até 5 dias úteis.</li>
        <li><strong>Boleto:</strong> reembolso via transferência em até 10 dias úteis.</li>
      </ul>

      <h2>Contato</h2>
      <p>trocas@dropixeditora.com.br | (11) 4002-8922</p>
    </div>
  );
};

export default Trocas;
