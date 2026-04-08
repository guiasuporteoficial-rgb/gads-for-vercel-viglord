import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';

const Privacidade = () => {
  useEffect(() => { document.title = 'Política de Privacidade | Página Viva'; }, []);

  return (
    <Layout>
      <div className="container py-12 max-w-3xl prose prose-sm">
        <h1 className="font-serif text-3xl font-bold">Política de Privacidade</h1>
        <p className="text-muted-foreground text-sm">Última atualização: 01 de março de 2026</p>

        <h2>1. Introdução</h2>
        <p>A Livraria Página Viva Ltda. ("nós", "nosso" ou "Página Viva"), inscrita no CNPJ 12.345.678/0001-90, com sede na Rua dos Pinheiros, 847, Pinheiros, São Paulo/SP, CEP 05422-012, é responsável pelo tratamento dos seus dados pessoais conforme descrito nesta Política de Privacidade. Esta política foi elaborada em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018) e demais normas aplicáveis.</p>

        <h2>2. Dados que Coletamos</h2>
        <p>Coletamos os seguintes dados pessoais: dados de identificação (nome, CPF, data de nascimento), dados de contato (email, telefone, endereço), dados de navegação (cookies, IP, páginas visitadas, tempo de permanência), dados de transação (itens comprados, valores, forma de pagamento), dados de preferência (favoritos, histórico de busca, avaliações).</p>

        <h2>3. Finalidade do Tratamento</h2>
        <p>Utilizamos seus dados para: processar e entregar pedidos, enviar atualizações sobre status de entrega, personalizar sua experiência de navegação, enviar comunicações de marketing (com seu consentimento), prevenir fraudes e garantir segurança, cumprir obrigações legais e regulatórias, melhorar nossos produtos e serviços.</p>

        <h2>4. Base Legal</h2>
        <p>O tratamento de dados pessoais pela Página Viva é fundamentado nas seguintes bases legais previstas na LGPD: execução de contrato (para processar pedidos), consentimento (para marketing), interesse legítimo (para melhoria de serviços), cumprimento de obrigação legal (para obrigações fiscais).</p>

        <h2>5. Compartilhamento de Dados</h2>
        <p>Podemos compartilhar seus dados com: operadores de pagamento (para processar transações), transportadoras (para entrega de pedidos), prestadores de serviços de TI (para manutenção da plataforma), autoridades públicas (quando exigido por lei). Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing.</p>

        <h2>6. Armazenamento e Segurança</h2>
        <p>Seus dados são armazenados em servidores seguros com criptografia SSL/TLS. Mantemos seus dados pelo período necessário ao cumprimento das finalidades descritas nesta política, respeitando os prazos legais de retenção. Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição.</p>

        <h2>7. Seus Direitos</h2>
        <p>Conforme a LGPD, você tem direito a: confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar anonimização ou eliminação de dados desnecessários, solicitar portabilidade de dados, revogar consentimento a qualquer momento. Para exercer seus direitos, entre em contato pelo email privacidade@paginaviva.com.br.</p>

        <h2>8. Cookies</h2>
        <p>Utilizamos cookies essenciais (funcionamento do site), cookies de performance (análise de uso), cookies de funcionalidade (preferências), cookies de marketing (com consentimento). Você pode gerenciar cookies nas configurações do seu navegador.</p>

        <h2>9. Alterações desta Política</h2>
        <p>Podemos atualizar esta política periodicamente. A versão mais recente estará sempre disponível nesta página com a data de atualização.</p>

        <h2>10. Contato do Encarregado (DPO)</h2>
        <p>Eduardo Vasconcelos — DPO. Email: privacidade@paginaviva.com.br. Telefone: (11) 4002-8922.</p>
      </div>
    </Layout>
  );
};

export default Privacidade;
