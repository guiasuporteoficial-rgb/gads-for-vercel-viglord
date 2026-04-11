import { Link } from 'react-router-dom';
import { BookOpen, Instagram, Facebook, Twitter, Youtube, Shield, Lock, Award } from 'lucide-react';

const Footer = () => (
  <footer className="mt-16">
    <div className="bg-card border-t">
      <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1 */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-serif text-lg font-bold">DROPIX EDITORA</span>
          </Link>
          <p className="text-sm text-muted-foreground mb-4">Sua editora online com os melhores títulos, preços e atendimento. Leitura transforma vidas.</p>
          <div className="flex gap-3">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
        {/* Col 2 */}
        <div>
          <h4 className="font-serif font-semibold mb-3">Institucional</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/sobre" className="hover:text-foreground transition-colors">Sobre Nós</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
            <Link to="/contato" className="hover:text-foreground transition-colors">Contato</Link>
            <span className="cursor-pointer hover:text-foreground transition-colors">Trabalhe Conosco</span>
          </nav>
        </div>
        {/* Col 3 */}
        <div>
          <h4 className="font-serif font-semibold mb-3">Ajuda</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/privacidade" className="hover:text-foreground transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="hover:text-foreground transition-colors">Termos de Uso</Link>
            <Link to="/trocas" className="hover:text-foreground transition-colors">Trocas e Devoluções</Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">Como Comprar</Link>
            <span className="cursor-pointer hover:text-foreground transition-colors">Rastrear Pedido</span>
          </nav>
        </div>
        {/* Col 4 */}
        <div>
          <h4 className="font-serif font-semibold mb-3">Pagamento & Contato</h4>
          <div className="flex gap-2 text-xs font-semibold text-muted-foreground mb-3">
            <span className="rounded border px-2 py-1">Visa</span>
            <span className="rounded border px-2 py-1">Master</span>
            <span className="rounded border px-2 py-1">Elo</span>
            <span className="rounded border px-2 py-1">PIX</span>
            <span className="rounded border px-2 py-1">Boleto</span>
          </div>
          <p className="text-sm text-muted-foreground">Atendimento: seg-sex 8h às 18h</p>
          <p className="text-sm text-muted-foreground">contato@dropixeditora.com.br</p>
          <p className="text-sm text-muted-foreground">(11) 4002-8922</p>
          <div className="mt-4 flex gap-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground"><Shield className="h-4 w-4" /> Site Seguro</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground"><Award className="h-4 w-4" /> Garantido</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground"><Lock className="h-4 w-4" /> SSL</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-brown text-brown-foreground">
      <div className="container py-3 text-center text-xs">
        © 2026 DROPIX EDITORA. Todos os direitos reservados. CNPJ: 12.345.678/0001-90
      </div>
    </div>
  </footer>
);

export default Footer;
