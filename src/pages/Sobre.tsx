import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { BookOpen, Users, Star, Truck, Heart, Eye, Shield, Leaf, Award } from 'lucide-react';

const stats = [
  { icon: BookOpen, label: 'Títulos no catálogo', value: '+5.000' },
  { icon: Users, label: 'Leitores atendidos', value: '+100.000' },
  { icon: Star, label: 'Nota média de avaliação', value: '4.8/5.0' },
  { icon: Truck, label: 'Entregas no prazo', value: '98%' },
];

const team = [
  { name: 'Maria Helena Rocha', role: 'Co-fundadora & Curadora-Chefe', bio: 'Ex-professora de literatura com 20 anos de experiência. Lê 5 livros por semana.', color: 'bg-primary' },
  { name: 'Eduardo Vasconcelos', role: 'Co-fundador & Diretor Criativo', bio: 'Designer gráfico que acredita que um livro bonito é lido duas vezes.', color: 'bg-burnt-orange' },
  { name: 'Ana Beatriz Santos', role: 'Head de Experiência do Leitor', bio: 'Formada em Biblioteconomia, garante que cada leitor encontre seu livro perfeito.', color: 'bg-gold' },
];

const Sobre = () => {
  useEffect(() => { document.title = 'Sobre a Livraria Página Viva | Nossa História'; }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brown to-burnt-orange py-20 text-white">
        <div className="container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nossa História</h1>
          <p className="text-lg opacity-90">Desde 2018 conectando leitores aos livros que transformam vidas.</p>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="container py-16">
        <h2 className="font-serif text-3xl font-bold mb-6">Quem Somos</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>A Livraria Página Viva nasceu em 2018 como um pequeno sebo em Pinheiros, São Paulo. Fundada por dois apaixonados por literatura — a professora de literatura Maria Helena Rocha e o designer gráfico Eduardo Vasconcelos — nosso sonho era criar mais do que uma livraria: queríamos criar um ponto de encontro entre pessoas e histórias.</p>
          <p>Em 2020, quando o mundo parou, nós aceleramos. Levamos nossa curadoria cuidadosa para o digital, alcançando leitores em todos os cantos do Brasil. Hoje, somos uma das livrarias online mais bem avaliadas do país, com mais de 5.000 títulos, entregas para todo o Brasil e uma comunidade de mais de 100.000 leitores.</p>
          <p>Mas uma coisa nunca mudou: cada livro em nosso catálogo é lido, avaliado e aprovado por nossa equipe de curadores. Não vendemos qualquer livro — vendemos livros que importam.</p>
        </div>
      </section>

      {/* Números */}
      <section className="bg-card border-y py-16">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Nossos Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-10 w-10 mx-auto mb-3 text-burnt-orange" />
                <p className="text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão Visão Valores */}
      <section className="container py-16">
        <h2 className="font-serif text-3xl font-bold text-center mb-10">Missão, Visão e Valores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 border">
            <Eye className="h-8 w-8 text-burnt-orange mb-3" />
            <h3 className="font-serif font-bold text-lg mb-2">Missão</h3>
            <p className="text-muted-foreground text-sm">Democratizar o acesso à leitura de qualidade, conectando pessoas a livros que expandem horizontes.</p>
          </div>
          <div className="bg-card rounded-lg p-6 border">
            <Star className="h-8 w-8 text-burnt-orange mb-3" />
            <h3 className="font-serif font-bold text-lg mb-2">Visão</h3>
            <p className="text-muted-foreground text-sm">Ser a livraria mais amada do Brasil até 2030 — não a maior, mas a que mais transforma vidas através da leitura.</p>
          </div>
          <div className="bg-card rounded-lg p-6 border">
            <Heart className="h-8 w-8 text-burnt-orange mb-3" />
            <h3 className="font-serif font-bold text-lg mb-2">Valores</h3>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Curadoria com alma</li><li>• Atendimento humano</li><li>• Preço justo</li><li>• Impacto social</li><li>• Sustentabilidade</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-card border-y py-16">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((t) => (
              <div key={t.name} className="text-center">
                <div className={`w-24 h-24 rounded-full mx-auto mb-4 ${t.color} flex items-center justify-center text-white text-2xl font-bold`}>
                  {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <h3 className="font-serif font-bold">{t.name}</h3>
                <p className="text-sm text-burnt-orange mb-2">{t.role}</p>
                <p className="text-sm text-muted-foreground">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto Social */}
      <section className="container py-16 text-center">
        <h2 className="font-serif text-3xl font-bold mb-6">Impacto Social</h2>
        <div className="max-w-2xl mx-auto space-y-3 text-muted-foreground">
          <p>Para cada 10 livros vendidos, doamos 1 para escolas públicas.</p>
          <p>Já doamos mais de <strong className="text-foreground">10.000 livros</strong> desde 2020.</p>
          <p>Parceria ativa com o projeto "Leitura pra Todos" em 47 comunidades.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
