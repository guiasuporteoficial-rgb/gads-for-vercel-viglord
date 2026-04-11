import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import Loja from "./pages/Loja";
import Categoria from "./pages/Categoria";
import Livro from "./pages/Livro";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";
import Confirmacao from "./pages/Confirmacao";
import Busca from "./pages/Busca";
import Favoritos from "./pages/Favoritos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Trocas from "./pages/Trocas";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AzeiteTR from "./pages/AzeiteTR";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/categoria/:slug" element={<Categoria />} />
            <Route path="/livro/:slug" element={<Livro />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmacao" element={<Confirmacao />} />
            <Route path="/busca" element={<Busca />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/trocas" element={<Trocas />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/azeitetr" element={<AzeiteTR />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
