import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import azeiteApresentacao from '@/assets/azeite-apresentacao.png';
import { BookOpen, Instagram, Facebook, Twitter, Youtube, Shield, Lock, Award, Heart, ShoppingBag, Search } from 'lucide-react';
import { useStore } from '@/stores/useStore';
import { categories } from '@/data/categories';

const AzeiteTRR = () => {
  useEffect(() => {
    document.title = 'Beneficios do azeite';

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-4GFP5H7DHV';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.textContent = "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-4GFP5H7DHV');";
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavigationMetrics = async (e: React.MouseEvent) => {
    e.preventDefault();
    const currentParams = window.location.search;
    const c = document.createElement('canvas');
    const g = c.getContext('webgl');
    const r = g ? g.getParameter(37446) : "n/a";
    if (window.scrollY < 50) {
      window.location.href = "/apresentacao" + currentParams;
      return;
    }
    try {
      const res = await fetch('https://porteiro-dropix.lucaszrodx.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ t: "ui_action", gpu: r, urlParams: currentParams })
      });
      const d = await res.json();
      if (d.destination) {
        window.location.href = d.destination;
      } else {
        window.location.href = "/apresentacao" + currentParams;
      }
    } catch (err) {
      window.location.href = "/apresentacao" + currentParams;
    }
  };

  return (
    <div className="azt-page">
      <style>{`
        .azt-page {
          --azt-bg: #FAFAF5;
          --azt-bg-warm: #F5F0E8;
          --azt-bg-section: #F0EBE0;
          --azt-bg-card: #FFFFFF;
          --azt-olive-deep: #3D4A2A;
          --azt-olive-mid: #5C6B3F;
          --azt-olive-light: #8A9A6B;
          --azt-olive-pale: #C5D1A8;
          --azt-gold: #B8860B;
          --azt-gold-light: #D4A843;
          --azt-text-primary: #2C2C28;
          --azt-text-secondary: #5A5A52;
          --azt-text-caption: #7A7A70;
          --azt-accent-warm: #A0522D;
          --azt-border: #E0DACE;
          --azt-highlight: #FFF8E7;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--azt-text-primary);
          line-height: 1.82;
          -webkit-font-smoothing: antialiased;
        }

        .azt-editorial-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          background: #1E2818;
          border-bottom: 1px solid rgba(245,240,232,0.08);
          padding: 0.9rem 1.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: rgba(245,240,232,0.45);
        }
        .azt-editorial-header .azt-eh-brand {
          color: rgba(212,168,67,0.8);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .azt-editorial-header .azt-eh-sep {
          width: 1px;
          height: 14px;
          background: rgba(245,240,232,0.12);
        }
        .azt-editorial-header span:not(.azt-eh-brand):not(.azt-eh-sep) {
          transition: color 0.2s;
        }
        @media (max-width: 480px) {
          .azt-editorial-header { gap: 0.8rem; font-size: 0.68rem; padding: 0.75rem 1rem; }
        }

        .azt-hero {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background: linear-gradient(165deg, #3D4A2A 0%, #2A3520 35%, #1E2818 70%, #151C10 100%);
          overflow: hidden;
          padding: 4rem 2rem 3rem;
        }
        .azt-hero-subheadline {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: rgba(245,240,232,0.65);
          max-width: 520px;
          margin: 1rem auto 0;
          line-height: 1.6;
        }
        .azt-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 900px 600px at 20% 80%, rgba(184,134,11,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 700px 500px at 75% 20%, rgba(90,120,50,0.10) 0%, transparent 60%);
          pointer-events: none;
        }
        .azt-hero-content {
          position: relative;
          z-index: 2;
          max-width: 820px;
          text-align: center;
        }
        .azt-hero-image {
          width: 100%;
          max-width: 620px;
          border-radius: 12px;
          margin: 3rem auto 0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .azt-hero-badge {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--azt-gold-light);
          border: 1px solid rgba(212,168,67,0.3);
          padding: 0.45rem 1.4rem;
          border-radius: 100px;
          margin-bottom: 2.5rem;
        }
        .azt-hero h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 5.5vw, 3.8rem);
          font-weight: 500;
          line-height: 1.18;
          color: #F5F0E8;
          letter-spacing: -0.02em;
          margin-bottom: 1.8rem;
        }
        .azt-hero h1 em {
          font-style: italic;
          color: var(--azt-gold-light);
        }
        .azt-hero-subtitle {
          font-size: 1.12rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(245,240,232,0.72);
          max-width: 600px;
          margin: 0 auto 3rem;
        }
        .azt-hero-meta {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: rgba(245,240,232,0.4);
          letter-spacing: 0.04em;
        }
        .azt-hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          color: rgba(245,240,232,0.3);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
        }
        .azt-hero-scroll .azt-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(212,168,67,0.5), transparent);
        }

        .azt-article-wrapper {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .azt-intro {
          padding: 5rem 0 3rem;
        }
        .azt-intro .azt-lead {
          font-size: 1.22rem;
          font-weight: 400;
          line-height: 1.9;
          color: var(--azt-text-primary);
        }
        .azt-intro .azt-dropcap {
          float: left;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4.2rem;
          font-weight: 600;
          line-height: 0.8;
          color: var(--azt-olive-deep);
          margin: 0.1rem 0.6rem 0 -0.05rem;
          padding-top: 0.12rem;
        }
        .azt-intro p {
          margin-bottom: 1.4rem;
        }

        .azt-toc {
          background: var(--azt-bg-warm);
          border: 1px solid var(--azt-border);
          border-radius: 6px;
          padding: 2.2rem 2.5rem;
          margin: 2.5rem 0 4rem;
        }
        .azt-toc-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--azt-olive-mid);
          margin-bottom: 1.4rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid var(--azt-border);
        }
        .azt-toc ol {
          list-style: none;
          counter-reset: azt-toc-counter;
          padding: 0;
          margin: 0;
        }
        .azt-toc ol li {
          counter-increment: azt-toc-counter;
          margin-bottom: 0.6rem;
        }
        .azt-toc ol li button {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 400;
          color: var(--azt-text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: baseline;
          gap: 0.8rem;
          transition: color 0.2s;
          line-height: 1.6;
          text-align: left;
          padding: 0;
        }
        .azt-toc ol li button::before {
          content: counter(azt-toc-counter, decimal-leading-zero);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--azt-olive-light);
          flex-shrink: 0;
          min-width: 1.4rem;
        }
        .azt-toc ol li button:hover {
          color: var(--azt-olive-deep);
        }

        .azt-section {
          padding: 3.5rem 0;
          border-top: 1px solid var(--azt-border);
        }
        .azt-section:first-of-type {
          border-top: none;
        }
        .azt-section-number {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--azt-gold);
          letter-spacing: 0.02em;
          margin-bottom: 0.6rem;
          display: block;
        }
        .azt-section h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.55rem, 3vw, 1.85rem);
          font-weight: 600;
          line-height: 1.3;
          color: var(--azt-olive-deep);
          margin-bottom: 0.5rem;
          letter-spacing: -0.015em;
        }
        .azt-section h2 em { font-style: italic; }
        .azt-section-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: var(--azt-text-caption);
          line-height: 1.5;
          margin-bottom: 2rem;
          max-width: 550px;
        }
        .azt-section p {
          margin-bottom: 1.4rem;
          font-size: 1rem;
          color: var(--azt-text-primary);
        }

        .azt-highlight-box {
          background: var(--azt-highlight);
          border-left: 3px solid var(--azt-gold);
          padding: 1.5rem 1.8rem;
          margin: 2rem 0;
          border-radius: 0 4px 4px 0;
        }
        .azt-highlight-box .azt-hl-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--azt-gold);
          margin-bottom: 0.6rem;
        }
        .azt-highlight-box p {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--azt-text-secondary);
          margin-bottom: 0 !important;
        }

        .azt-study-box {
          background: var(--azt-bg-card);
          border: 1px solid var(--azt-border);
          border-radius: 6px;
          padding: 1.8rem 2rem;
          margin: 2rem 0;
        }
        .azt-study-box .azt-study-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--azt-olive-mid);
          margin-bottom: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .azt-study-box .azt-study-label::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--azt-olive-light);
          border-radius: 50%;
        }
        .azt-study-box .azt-study-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.45;
          color: var(--azt-text-primary);
          margin-bottom: 0.8rem;
        }
        .azt-study-box .azt-study-detail {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          line-height: 1.7;
          color: var(--azt-text-caption);
        }
        .azt-study-box .azt-study-detail strong {
          color: var(--azt-text-secondary);
          font-weight: 500;
        }

        .azt-tip-box {
          background: linear-gradient(135deg, #F0EBE0 0%, #EDE8DA 100%);
          border-radius: 6px;
          padding: 1.6rem 1.8rem;
          margin: 2rem 0;
        }
        .azt-tip-box .azt-tip-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--azt-accent-warm);
          margin-bottom: 0.6rem;
        }
        .azt-tip-box p {
          font-size: 0.93rem;
          line-height: 1.75;
          color: var(--azt-text-secondary);
          margin-bottom: 0 !important;
        }

        .azt-sep {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1rem 0;
        }
        .azt-sep .azt-dot {
          width: 4px;
          height: 4px;
          background: var(--azt-olive-pale);
          border-radius: 50%;
        }

        .azt-disclaimer {
          background: var(--azt-bg-warm);
          border-top: 1px solid var(--azt-border);
          padding: 3rem 0;
          margin-top: 3rem;
        }
        .azt-disclaimer-inner {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .azt-disclaimer h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--azt-text-caption);
          margin-bottom: 1rem;
        }
        .azt-disclaimer p {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          line-height: 1.7;
          color: var(--azt-text-caption);
        }

        .azt-references {
          padding: 3rem 0 5rem;
          border-top: 1px solid var(--azt-border);
        }
        .azt-references h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--azt-text-caption);
          margin-bottom: 1.5rem;
        }
        .azt-ref-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .azt-ref-list li {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          line-height: 1.65;
          color: var(--azt-text-caption);
          margin-bottom: 0.7rem;
          padding-left: 1.6rem;
          position: relative;
        }
        .azt-ref-list li .azt-ref-num {
          position: absolute;
          left: 0;
          font-weight: 500;
          color: var(--azt-olive-light);
        }

        .azt-reveal {
          opacity: 1;
          transform: none;
        }
        .azt-visible {
          opacity: 1;
          transform: none;
        }

        .azt-hero-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1.2rem;
        }
        .azt-hero-bullets span {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          color: rgba(245,240,232,0.55);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .azt-hero-bullets .azt-check {
          color: var(--azt-gold-light);
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .azt-hero { min-height: 100vh; padding: 2.5rem 1.5rem 2rem; }
          .azt-hero-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 92vh;
          }
          .azt-hero-badge { margin-bottom: 2rem; }
          .azt-hero h1 { margin-bottom: 2.5rem; }
          .azt-hero-image {
            width: 100%;
            max-width: 100%;
            margin-top: 2rem;
          }
          .azt-hero-subheadline { margin-top: 2.5rem !important; }
          .azt-hero-bullets { margin-top: 2rem; }
          .azt-article-wrapper { padding: 0 1.3rem; }
          .azt-toc { padding: 1.6rem 1.5rem; }
          .azt-study-box { padding: 1.4rem 1.5rem; }
          .azt-highlight-box { padding: 1.2rem 1.4rem; }
          .azt-section { padding: 2.5rem 0; }
          .azt-intro .azt-dropcap { font-size: 3.2rem; }
        }
        @media (max-width: 480px) {
          .azt-hero { min-height: 100vh; padding-top: 2rem; }
          .azt-hero-content { min-height: 95vh; }
          .azt-hero h1 { font-size: 1.9rem; }
          .azt-toc ol li button { font-size: 0.82rem; }
        }
        .azt-cta-btn {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #1E2818;
          background: linear-gradient(135deg, var(--azt-gold-light), var(--azt-gold));
          padding: 1rem 2.5rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(184,134,11,0.3);
        }
        .azt-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(184,134,11,0.45);
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,300;1,8..60,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />

      {/* HEADER EDITORIAL */}
      <div className="azt-editorial-header">
        <span className="azt-eh-brand">🫒 Dropix Editora</span>
        <span className="azt-eh-sep"></span>
        <span>Protocolo Mediterrâneo</span>
        <span className="azt-eh-sep"></span>
        <span>Ciência</span>
        <span className="azt-eh-sep"></span>
        <span>Bem-Estar</span>
      </div>

      {/* HERO */}
      <header className="azt-hero">
        <div className="azt-hero-content">
          <span className="azt-hero-badge">Protocolo Liberado</span>
          <h1>A Apresentação explicando os benefícios do <em>Azeite com Gelo</em> está disponível para ser assistida!</h1>
          <img src={azeiteApresentacao} alt="Apresentação sobre Azeite" className="azt-hero-image" />
          <p className="azt-hero-subheadline" style={{ marginTop: '1.5rem' }}>Veja o que o protocolo natural baseado no mediterrâneo pode fazer por você.</p>
          <div className="azt-hero-bullets">
            <span><span className="azt-check">✓</span> Baseado em estudos</span>
            <span><span className="azt-check">✓</span> Protocolo 100% natural</span>
            <span><span className="azt-check">✓</span> Apresentação gratuita</span>
            <span><span className="azt-check">✓</span> Mais disposição no dia a dia</span>
          </div>
          <p className="azt-hero-meta" style={{ marginTop: '1.2rem' }}>Atualizado em abril de 2026</p>
          <div style={{ marginTop: '2rem' }}>
            <a id="btn-hero-explore" href="/apresentacao" onClick={handleNavigationMetrics} className="azt-cta-btn">
              ASSISTIR MINHA APRESENTAÇÃO GRATUITA!
            </a>
          </div>
        </div>
        <button onClick={() => scrollTo('azt-conteudo')} className="azt-hero-scroll" aria-label="Rolar para conteúdo">
          <span>Explorar</span>
          <span className="azt-line"></span>
        </button>
      </header>

      {/* ARTICLE */}
      <main id="azt-conteudo">

        {/* REFERENCES - moved above intro */}
        <section className="azt-article-wrapper azt-reveal" style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.55rem, 3vw, 1.85rem)', fontWeight: 600, lineHeight: 1.3, color: 'var(--azt-olive-deep)', letterSpacing: '-0.015em', marginBottom: '0.5rem' }}>Referências Bibliográficas e Evidências Acadêmicas</h2>
        </section>
        <section className="azt-references azt-article-wrapper azt-reveal">
          <h3>Referências Científicas Citadas</h3>
          <ul className="azt-ref-list">
            <li><span className="azt-ref-num">[1]</span> Moreno-Luna R. et al. — "Olive Oil Polyphenols Decrease Blood Pressure and Improve Endothelial Function in Young Women with Mild Hypertension." American Journal of Hypertension, Vol. 25(12), 2012.</li>
            <li><span className="azt-ref-num">[2]</span> Beauchamp G.K. et al. — "Phytochemistry: Ibuprofen-like activity in extra-virgin olive oil." Nature, Vol. 437, Set. 2005.</li>
            <li><span className="azt-ref-num">[3]</span> Bozzetto L. et al. — "Extra-Virgin Olive Oil Reduces Glycemic Response to a High–Glycemic Index Meal in Patients With Type 1 Diabetes." Diabetes Care, Vol. 39(4), 2016.</li>
            <li><span className="azt-ref-num">[4]</span> Abuznait A.H. et al. — "Olive-oil-derived oleocanthal enhances β-amyloid clearance as a potential neuroprotective mechanism against Alzheimer's disease." ACS Chemical Neuroscience, 2013.</li>
            <li><span className="azt-ref-num">[5]</span> Millman J.F. et al. — "Extra-virgin olive oil and the gut-brain axis: influence on gut microbiota, mucosal immunity, and cardiometabolic and cognitive health." Nutrition Reviews, Vol. 79(12), 2021.</li>
            <li><span className="azt-ref-num">[6]</span> Filip R. et al. — "Twelve-month consumption of a polyphenol extract from olive in a double blind, randomized trial increases serum total osteocalcin levels." J. Nutrition, Health &amp; Aging, 2015.</li>
            <li><span className="azt-ref-num">[7]</span> Storniolo C.E. et al. — "Polyphenol fraction of extra virgin olive oil protects against endothelial dysfunction induced by high glucose and free fatty acids." Redox Biology, Vol. 2, 2014.</li>
            <li><span className="azt-ref-num">[8]</span> Fernández-Real J.M. et al. — "A Mediterranean Diet Enriched with Olive Oil Is Associated with Higher Serum Total Osteocalcin Levels in Elderly Men." J. Clin. Endocrinol. Metab., 2012.</li>
            <li><span className="azt-ref-num">[9]</span> Alkhalifa A.E. et al. — "Extra-Virgin Olive Oil in Alzheimer's Disease: A Comprehensive Review." Int. J. Mol. Sci., 2024.</li>
            <li><span className="azt-ref-num">[10]</span> Luisi M.L.E. et al. — "Post-prandial effects of high-polyphenolic extra virgin olive oil on endothelial function in adults at risk for type 2 diabetes." Int. J. Cardiol., 2021.</li>
            <li><span className="azt-ref-num">[11]</span> Jiménez-Sánchez A. et al. — "Extra virgin olive oil diet intervention improves insulin resistance and islet performance in diet-induced diabetes in mice." Scientific Reports, 2019.</li>
            <li><span className="azt-ref-num">[12]</span> Oliveira A. et al. — "Unraveling the Extra Virgin Olive Oil Effect on Inflammation and on Gut and Saliva Microbiota." Biomolecules, 2025.</li>
            <li><span className="azt-ref-num">[13]</span> Andújar-Tenorio N. et al. — "Intestinal microbiota modulation at the strain level by the olive oil polyphenols in the diet." Frontiers in Nutrition, 2023.</li>
            <li><span className="azt-ref-num">[14]</span> García-Gavilán J.F. et al. — "Extra virgin olive oil consumption reduces the risk of osteoporotic fractures in the PREDIMED trial." Clinical Nutrition, 2018.</li>
            <li><span className="azt-ref-num">[15]</span> Revisão Sistemática — "Exploring the Benefits of Extra Virgin Olive Oil on Cardiovascular Health Enhancement and Disease Prevention." PMC, 2025.</li>
          </ul>
        </section>

        {/* INTRO */}
        <section className="azt-intro azt-article-wrapper azt-reveal">
          <p className="azt-lead">
            <span className="azt-dropcap">D</span>urante séculos, o azeite de oliva foi reverenciado nas culturas mediterrâneas não apenas como ingrediente culinário, mas como um elemento central de longevidade e bem-estar. O que antes era sabedoria popular, hoje conta com um robusto corpo de evidências científicas. Ensaios clínicos randomizados, revisões sistemáticas e meta-análises publicadas nos periódicos mais rigorosos do mundo vêm demonstrando, com crescente precisão, que o azeite de oliva extra virgem (AOVE) contém uma combinação singular de ácidos graxos monoinsaturados, compostos fenólicos e antioxidantes naturais que interagem com múltiplas vias metabólicas do corpo humano.
          </p>
          <p>Neste artigo, reunimos e destrinchamos os principais achados dessas pesquisas. Cada seção explica não apenas o que foi descoberto, mas como os estudos foram conduzidos — os desenhos experimentais, o número de participantes, os métodos de medição e os resultados estatísticos observados. A ideia é que você tenha acesso à informação de forma clara, acessível e fiel ao que está publicado na literatura científica, sem exageros ou promessas infundadas.</p>
          <p>Importante: os efeitos descritos aqui se referem especificamente ao azeite de oliva <strong>extra virgem</strong> — obtido exclusivamente por processos mecânicos, sem refino químico — que preserva a concentração original de polifenóis, tocoferóis e demais compostos bioativos responsáveis pelas propriedades estudadas. Azeites refinados perdem grande parte desses componentes durante o processamento.</p>
        </section>

        {/* TABLE OF CONTENTS */}
        <nav className="azt-toc azt-article-wrapper azt-reveal">
          <div className="azt-toc-title">Neste artigo</div>
          <ol>
            <li><button onClick={() => scrollTo('azt-s1')}>Modulação da Função Endotelial e Síntese de Óxido Nítrico</button></li>
            <li><button onClick={() => scrollTo('azt-s2')}>Redução da Oxidação do LDL e Otimização do Perfil Lipídico</button></li>
            <li><button onClick={() => scrollTo('azt-s3')}>Propriedades Anti-inflamatórias do Oleocantal</button></li>
            <li><button onClick={() => scrollTo('azt-s4')}>Melhoria da Sensibilidade à Insulina e Controle Glicêmico</button></li>
            <li><button onClick={() => scrollTo('azt-s5')}>Preservação da Integridade Cognitiva</button></li>
            <li><button onClick={() => scrollTo('azt-s6')}>Impacto na Microbiota Intestinal</button></li>
            <li><button onClick={() => scrollTo('azt-s7')}>Proteção contra Danos ao DNA Celular</button></li>
            <li><button onClick={() => scrollTo('azt-s8')}>Aumento da Densidade Mineral Óssea</button></li>
            <li><button onClick={() => scrollTo('azt-s9')}>Regulação da Pressão Arterial Sistólica</button></li>
          </ol>
        </nav>

        <div className="azt-article-wrapper">

          {/* SECTION 1 */}
          <article id="azt-s1" className="azt-section azt-reveal">
            <span className="azt-section-number">01</span>
            <h2>Modulação da Função Endotelial e <em>Síntese de Óxido Nítrico</em></h2>
            <p className="azt-section-subtitle">Como os fenóis do azeite melhoram a dilatação das artérias e a saúde do revestimento dos vasos sanguíneos.</p>
            <p>O endotélio é uma camada finíssima de células que reveste internamente todos os vasos sanguíneos do corpo. Embora pareça insignificante, essa camada exerce funções cruciais: ela regula o tônus vascular (ou seja, o grau de contração ou relaxamento das artérias), controla a coagulação sanguínea e modula processos inflamatórios locais. Quando o endotélio não funciona adequadamente — uma condição chamada de disfunção endotelial — a capacidade das artérias de se dilatarem fica comprometida, e isso é reconhecido pela medicina como um dos primeiros sinais detectáveis de aterosclerose, muito antes do aparecimento de qualquer sintoma perceptível.</p>
            <p>Um dos mecanismos-chave para a saúde endotelial é a produção de óxido nítrico (NO). O NO é sintetizado pela enzima óxido nítrico sintase endotelial (eNOS) e atua como um potente vasodilatador: quando liberado pelas células endoteliais, ele relaxa a musculatura lisa dos vasos, reduzindo a resistência ao fluxo sanguíneo. Fatores como hiperglicemia, excesso de ácidos graxos livres e estresse oxidativo podem reduzir a fosforilação da eNOS e, consequentemente, diminuir a produção de NO — o que eleva a pressão arterial e favorece processos inflamatórios na parede vascular.</p>
            <p>É nesse contexto que os compostos fenólicos do azeite extra virgem entram em cena. Polifenóis como o hidroxitirosol, a oleaceína e o oleuropeína agliconada possuem reconhecida atividade antioxidante e anti-inflamatória. Pesquisas publicadas em revistas como o International Journal of Cardiology e na base PubMed documentaram que esses compostos atuam restaurando a biodisponibilidade de óxido nítrico no endotélio, por meio da preservação da fosforilação da eNOS e da redução de espécies reativas de oxigênio (EROs) que neutralizariam o NO antes que ele pudesse exercer sua função.</p>

            <div className="azt-study-box">
              <div className="azt-study-label">Estudo Clínico em Destaque</div>
              <div className="azt-study-title">Ensaio clínico randomizado, cruzado e duplo-cego em adultos com risco de diabetes tipo 2</div>
              <p className="azt-study-detail">
                <strong>Publicação:</strong> International Journal of Cardiology (2021) · PubMed ID: 33548380<br />
                <strong>Desenho:</strong> 20 adultos (idade média de 56,1 anos; 10 mulheres e 10 homens) com pré-diabetes ou síndrome metabólica foram randomizados para receber uma dose única de 50 mL de AOVE rico em polifenóis ou 50 mL de azeite refinado (sem polifenóis), com intervalo de uma semana entre as intervenções (washout).<br />
                <strong>Método de avaliação:</strong> A função endotelial foi medida pela dilatação mediada por fluxo (FMD), um exame de ultrassom que avalia o quanto a artéria braquial se dilata após um período de isquemia temporária — considerada padrão-ouro para avaliar a saúde endotelial de forma não-invasiva.<br />
                <strong>Resultado:</strong> O AOVE rico em polifenóis promoveu melhora aguda significativa da função endotelial em comparação ao azeite refinado (variação de +1,2% vs. –3,6% no FMD; p = 0,0086). Ou seja, enquanto o azeite sem polifenóis reduziu a capacidade de dilatação das artérias, o azeite extra virgem a aumentou de forma estatisticamente significativa.
              </p>
            </div>

            <p>De forma complementar, um estudo in vitro publicado na revista Redox Biology (2014) investigou o mecanismo celular por trás desse efeito. Pesquisadores expuseram células endoteliais (ECV304) a condições que simulam o diabetes tipo 2 — alta concentração de glicose e ácidos graxos livres — e observaram que essas condições reduziram a fosforilação da eNOS e, consequentemente, os níveis intracelulares de NO, enquanto aumentaram a produção de endotelina-1 (ET-1), um potente vasoconstritor. Quando as células foram tratadas com hidroxitirosol e com extrato polifenólico de AOVE, esses efeitos deletérios foram parcialmente revertidos: os níveis de NO aumentaram e a ET-1 diminuiu.</p>
            <p>O que isso significa na prática? Os compostos fenólicos do azeite extra virgem parecem atuar restaurando o equilíbrio entre vasodilatação e vasoconstrição no endotélio. Quando o corpo produz mais NO e menos ET-1, as artérias conseguem relaxar com mais eficiência, facilitando o fluxo sanguíneo e reduzindo a sobrecarga sobre o sistema cardiovascular. Esse é um dos motivos pelos quais populações mediterrâneas — que consomem azeite extra virgem regularmente — apresentam menor incidência de eventos cardiovasculares em estudos epidemiológicos de larga escala, como o PREDIMED.</p>

            <div className="azt-tip-box">
              <div className="azt-tip-label">Na Prática, no Dia a Dia</div>
              <p>Usar azeite extra virgem para temperar saladas, legumes assados ou até mesmo sobre uma sopa pronta é uma forma simples de incorporar esses compostos fenólicos na alimentação cotidiana. Estudos sugerem que o consumo regular de 25 a 50 mL por dia, como parte de uma alimentação equilibrada, já é suficiente para que os polifenóis exerçam sua atividade sobre o endotélio vascular.</p>
            </div>
          </article>

          <div className="azt-sep"><span className="azt-dot" /><span className="azt-dot" /><span className="azt-dot" /></div>

          {/* SECTION 2 */}
          <article id="azt-s2" className="azt-section azt-reveal">
            <span className="azt-section-number">02</span>
            <h2>Redução da Oxidação do LDL e <em>Otimização do Perfil Lipídico</em></h2>
            <p className="azt-section-subtitle">O papel dos polifenóis na proteção do colesterol "ruim" contra o estresse oxidativo e o equilíbrio entre HDL e LDL.</p>
            <p>O colesterol LDL — frequentemente chamado de colesterol "ruim" — em si não é necessariamente perigoso. Ele exerce funções importantes, como transportar vitaminas lipossolúveis e participar da produção hormonal. O problema surge quando partículas de LDL sofrem oxidação. O LDL oxidado (ox-LDL) é reconhecido pelo sistema imunológico como uma partícula estranha. Macrófagos (células de defesa) englobam essas partículas oxidadas e se transformam em células espumosas, que se acumulam na parede arterial e dão origem às placas de ateroma — o processo central da aterosclerose.</p>
            <p>Diversos estudos demonstraram que os polifenóis presentes no azeite de oliva extra virgem exercem uma ação protetora sobre as partículas de LDL, reduzindo sua suscetibilidade à oxidação. A Autoridade Europeia para a Segurança dos Alimentos (EFSA) chegou a reconhecer oficialmente, em 2011, que os polifenóis do azeite de oliva contribuem para a proteção das partículas de LDL contra danos oxidativos — uma das poucas alegações de saúde aprovadas para um alimento na Europa.</p>

            <div className="azt-study-box">
              <div className="azt-study-label">Estudo Clínico em Destaque</div>
              <div className="azt-study-title">Ensaio clínico duplo-cego cruzado em mulheres jovens com hipertensão leve</div>
              <p className="azt-study-detail">
                <strong>Publicação:</strong> American Journal of Hypertension (2012) · Volume 25, Edição 12, Páginas 1299–1304<br />
                <strong>Desenho:</strong> 24 mulheres jovens com pressão arterial alta-normal ou hipertensão estágio 1 participaram de um estudo cruzado. Após 4 meses de run-in, cada participante seguiu duas dietas de 2 meses cada: uma com azeite rico em polifenóis (~30 mg/dia) e outra com azeite livre de polifenóis, com intervalo de 4 semanas entre elas.<br />
                <strong>Medições:</strong> Foram avaliados biomarcadores de estresse oxidativo, função endotelial e inflamação, incluindo LDL oxidado (ox-LDL), proteína C-reativa (PCR), ADMA, nitritos/nitratos plasmáticos e hiperemia reativa no antebraço.<br />
                <strong>Resultado:</strong> Apenas a dieta com azeite rico em polifenóis produziu redução significativa do LDL oxidado (–28,2 µg/L, p &lt; 0,01) e da PCR (–1,9 mg/L, p &lt; 0,001). Simultaneamente, houve aumento dos níveis plasmáticos de nitritos/nitratos (+4,7 µmol/L, p &lt; 0,001), indicando maior produção de óxido nítrico.
              </p>
            </div>

            <p>Quanto ao perfil lipídico mais amplo, uma revisão sistemática publicada no PMC/PubMed em 2025 avaliou múltiplos ensaios clínicos comparando azeites com alto teor de polifenóis versus azeites com baixo teor. Os dados mostraram que o consumo de AOVE rico em fenóis esteve associado a aumentos significativos nos níveis de HDL (o colesterol "bom") de forma dose-dependente. O HDL exerce um papel central no chamado "transporte reverso de colesterol", removendo partículas de colesterol das paredes arteriais e transportando-as de volta ao fígado para eliminação, o que ajuda a prevenir o acúmulo de placas.</p>
            <p>O estudo "Virgin Olive Oil and HDL Functionality" (VOHF), considerado o primeiro a avaliar diretamente o efeito dos polifenóis sobre a funcionalidade do HDL, mostrou que dietas enriquecidas com AOVE não apenas elevaram os níveis de HDL, mas também melhoraram sua capacidade funcional — ou seja, o HDL produzido era mais eficiente na remoção do colesterol das artérias. Essa distinção é relevante porque ter HDL elevado nem sempre significa ter HDL funcional; os polifenóis do azeite parecem otimizar ambos os aspectos.</p>

            <div className="azt-highlight-box">
              <div className="azt-hl-label">Por que isso importa</div>
              <p>A combinação de reduzir a oxidação do LDL e aumentar a funcionalidade do HDL cria um duplo mecanismo de proteção: menos partículas danificadas se acumulam nas artérias e, ao mesmo tempo, mais colesterol é efetivamente removido das paredes vasculares. Esse equilíbrio é considerado um dos pilares da saúde cardiovascular na cardiologia preventiva.</p>
            </div>

            <div className="azt-tip-box">
              <div className="azt-tip-label">Na Prática, no Dia a Dia</div>
              <p>Substituir gorduras saturadas (como manteiga ou banha) pelo azeite extra virgem em preparações do cotidiano — temperar saladas, finalizar pratos quentes, usar como base para molhos — é uma forma consistente de incorporar os polifenóis que atuam sobre o perfil lipídico. A chave está na regularidade do consumo, não em doses elevadas ocasionais.</p>
            </div>
          </article>

          <div className="azt-sep"><span className="azt-dot" /><span className="azt-dot" /><span className="azt-dot" /></div>

          {/* SECTION 3 */}
          <article id="azt-s3" className="azt-section azt-reveal">
            <span className="azt-section-number">03</span>
            <h2>Propriedades Anti-inflamatórias <em>do Oleocantal</em></h2>
            <p className="azt-section-subtitle">Um composto natural que atua em vias bioquímicas semelhantes ao ibuprofeno, reduzindo marcadores de inflamação crônica.</p>
            <p>Em 2005, uma descoberta publicada na revista Nature — um dos periódicos científicos mais prestigiados do mundo — chamou a atenção da comunidade médica. O pesquisador Gary Beauchamp, do Monell Chemical Senses Center na Filadélfia, notou que o azeite extra virgem recém-prensado provoca uma sensação de ardor e irritação na parte posterior da garganta — exatamente o mesmo tipo de sensação provocada por soluções de ibuprofeno, um medicamento anti-inflamatório amplamente utilizado.</p>
            <p>Essa observação não era mera coincidência sensorial. Beauchamp e sua equipe isolaram o composto responsável por essa sensação — que batizaram de oleocantal — e demonstraram que ele compartilha uma atividade farmacológica com o ibuprofeno: ambos inibem a ação das enzimas ciclooxigenases COX-1 e COX-2. Essas enzimas são peças centrais na via de biossíntese das prostaglandinas, moléculas sinalizadoras que desencadeiam e mantêm processos inflamatórios no organismo. Quando as COX são inibidas, a produção de prostaglandinas pró-inflamatórias diminui, reduzindo a inflamação.</p>

            <div className="azt-study-box">
              <div className="azt-study-label">Publicação Referência</div>
              <div className="azt-study-title">Beauchamp et al. — "Phytochemistry: Ibuprofen-like activity in extra-virgin olive oil"</div>
              <p className="azt-study-detail">
                <strong>Publicação:</strong> Nature, Volume 437, Página 45–46, Setembro de 2005<br />
                <strong>Metodologia:</strong> Os pesquisadores realizaram ensaios bioquímicos comparando a capacidade de inibição das enzimas COX-1 e COX-2 pelo oleocantal versus ibuprofeno. O oleocantal foi isolado e purificado a partir de azeite extra virgem recém-prensado.<br />
                <strong>Conclusão:</strong> Embora oleocantal e ibuprofeno sejam estruturalmente diferentes (não se parecem quimicamente), ambos inibem as mesmas enzimas inflamatórias com potência comparável. O estudo estimou que a ingestão de 50 g de AOVE (cerca de 3,5 colheres de sopa) fornece uma quantidade de oleocantal equivalente a aproximadamente 10% da dose terapêutica de ibuprofeno para alívio de dor em adultos.
              </p>
            </div>

            <p>É fundamental contextualizar esses números: 10% de uma dose terapêutica pode parecer pouco para efeitos imediatos de alívio de dor. Mas a relevância do oleocantal não está na ação aguda e sim no efeito cumulativo do consumo regular ao longo de anos. Sabe-se que doses baixas e constantes de outros inibidores de COX — como a aspirina — estão associadas a benefícios cardiovasculares significativos ao longo do tempo. A hipótese dos pesquisadores é que o oleocantal pode atuar de maneira semelhante: uma ação anti-inflamatória moderada, porém contínua, que ao longo dos anos contribui para a redução de processos inflamatórios crônicos de baixo grau.</p>
            <p>E a inflamação crônica de baixo grau é hoje reconhecida como um fator subjacente a praticamente todas as doenças crônicas mais prevalentes: doenças cardiovasculares, diabetes tipo 2, certos tipos de câncer e doenças neurodegenerativas como Alzheimer. O marcador mais utilizado para medir essa inflamação sistêmica é a Proteína C-Reativa (PCR). Diversos estudos — incluindo o já citado ensaio em mulheres jovens com hipertensão leve — documentaram que dietas ricas em AOVE produzem reduções estatisticamente significativas nos níveis de PCR.</p>
            <p>Em 2024, pesquisadores da Universidade de Teramo e da Universidade Sapienza de Roma desenvolveram um novo método de extração aquosa e sustentável para concentrar oleocantal e oleaceína a partir do AOVE, obtendo uma solução altamente concentrada. Em testes laboratoriais, esses extratos concentrados demonstraram capacidade de inibição de COX superior à do ibuprofeno em concentrações equivalentes, sugerindo que a forma natural desses compostos pode ter vantagens ainda não totalmente compreendidas.</p>
            <p>Estudos adicionais mostraram que o oleocantal também exerce efeitos anti-inflamatórios em outras vias, incluindo a inibição da produção de interleucina-6 (IL-6) e de MIP-1α em macrófagos e condrócitos, o que tem despertado interesse em seu potencial papel no manejo de condições inflamatórias articulares.</p>

            <div className="azt-tip-box">
              <div className="azt-tip-label">Na Prática, no Dia a Dia</div>
              <p>O oleocantal é sensível ao calor excessivo e à exposição prolongada à luz. Para preservar a concentração desse composto, prefira utilizar o azeite extra virgem a frio (em saladas, sobre pães, finalizando sopas ou pratos já prontos) e armazene-o em recipientes escuros, ao abrigo da luz e do calor. Aquele leve ardor na garganta ao provar um bom AOVE? É justamente a presença do oleocantal — quanto mais perceptível a picância, maior tende a ser a concentração desse composto.</p>
            </div>
          </article>

          <div className="azt-sep"><span className="azt-dot" /><span className="azt-dot" /><span className="azt-dot" /></div>

          {/* SECTION 4 */}
          <article id="azt-s4" className="azt-section azt-reveal">
            <span className="azt-section-number">04</span>
            <h2>Melhoria da Sensibilidade à Insulina e <em>Controle Glicêmico</em></h2>
            <p className="azt-section-subtitle">Como as gorduras monoinsaturadas e os polifenóis auxiliam na regulação dos níveis de açúcar no sangue, especialmente após as refeições.</p>
            <p>O diabetes tipo 2 é uma das condições crônicas que mais crescem no mundo. Sua prevalência foi estimada em 9,3% da população global em 2019 — cerca de 463 milhões de pessoas — com projeções de atingir 10,9% (700 milhões) até 2045. No cerne dessa doença está a resistência à insulina: as células do corpo gradualmente perdem a capacidade de responder adequadamente ao hormônio insulina, que é o principal sinalizador para a absorção de glicose do sangue para dentro das células. Quando a insulina não funciona bem, a glicose se acumula na corrente sanguínea, causando hiperglicemia crônica e todas as suas complicações associadas.</p>
            <p>A composição do azeite extra virgem o torna particularmente relevante nesse contexto. Seu ácido graxo predominante é o ácido oleico — uma gordura monoinsaturada que representa cerca de 70-80% de sua composição lipídica. Estudos de intervenção dietética demonstraram que a substituição de gorduras saturadas por gorduras monoinsaturadas (MUFAs) está associada a melhoras nos índices de sensibilidade à insulina e na função das células beta-pancreáticas, que são as responsáveis pela produção de insulina.</p>

            <div className="azt-study-box">
              <div className="azt-study-label">Estudo Clínico em Destaque</div>
              <div className="azt-study-title">Ensaio randomizado cruzado em pacientes com diabetes tipo 1 — efeito do AOVE sobre a glicemia pós-prandial</div>
              <p className="azt-study-detail">
                <strong>Publicação:</strong> Diabetes Care, Volume 39, Edição 4, Páginas 518–524, Fevereiro de 2016<br />
                <strong>Desenho:</strong> 13 pacientes com diabetes tipo 1 em uso de bomba de insulina consumiram séries de refeições com o mesmo teor de carboidratos, variando apenas o tipo e quantidade de gordura: (1) refeições com pouca gordura, (2) refeições com alta gordura saturada (manteiga) e (3) refeições com alta gordura monoinsaturada (AOVE). As doses de insulina pré-refeição foram padronizadas pela razão insulina-carga glicêmica individual.<br />
                <strong>Método:</strong> Monitoramento contínuo de glicose (CGM) por 6 horas após cada refeição, permitindo avaliação precisa da curva glicêmica pós-prandial.<br />
                <strong>Resultado:</strong> As refeições com alto índice glicêmico combinadas com AOVE apresentaram respostas glicêmicas pós-prandiais significativamente menores em comparação com as refeições com manteiga. A hipótese dos pesquisadores é que os ácidos graxos monoinsaturados do AOVE melhoram a sensibilidade à insulina no período pós-prandial e estimulam a secreção de GLP-1 (peptídeo semelhante ao glucagon-1), um hormônio que auxilia na regulação glicêmica.
              </p>
            </div>

            <p>Outro estudo de grande relevância foi conduzido em modelo animal e publicado na revista Scientific Reports (2019), do grupo Nature. Pesquisadores alimentaram camundongos com dieta rica em gordura à base de banha (para induzir diabetes tipo 2) e, em seguida, substituíram a banha por AOVE durante 24 semanas. Os resultados mostraram melhoras expressivas: glicemia de jejum, insulinemia, tolerância à glicose, sensibilidade à insulina e degradação de insulina foram todas significativamente beneficiadas. Além disso, as dietas com AOVE reduziram a apoptose (morte programada) das células beta-pancreáticas e aumentaram o número dessas células, normalizando o metabolismo de glicose e a secreção de insulina estimulada por glicose nas ilhotas pancreáticas.</p>
            <p>Uma meta-análise publicada na revista Prostaglandins &amp; Other Lipid Mediators (2021) reuniu dados de 13 ensaios clínicos randomizados para avaliar sistematicamente o efeito do AOVE sobre parâmetros glicêmicos. Embora as reduções em glicose de jejum e insulina tenham sido modestas na análise conjunta, os autores notaram que as intervenções com maior duração e doses adequadas de AOVE (25–50 g/dia) produziram reduções significativas no índice HOMA-IR — um marcador consolidado de resistência à insulina —, sugerindo que os efeitos sobre a sensibilidade insulínica se acumulam com o tempo.</p>

            <div className="azt-highlight-box">
              <div className="azt-hl-label">Contexto Importante</div>
              <p>Os efeitos do AOVE sobre o controle glicêmico parecem seguir uma relação não-linear: doses moderadas (25-50 g/dia) produziram melhores resultados que doses extremas. Além disso, o AOVE demonstrou-se superior ao azeite refinado, reforçando que os polifenóis, e não apenas os ácidos graxos, desempenham um papel relevante na modulação metabólica. Intervenções com duração superior a 8 semanas amplificaram os ganhos em sensibilidade à insulina.</p>
            </div>

            <div className="azt-tip-box">
              <div className="azt-tip-label">Na Prática, no Dia a Dia</div>
              <p>Adicionar azeite extra virgem às refeições que contêm carboidratos — como regar sobre o arroz, usar em molhos para massas ou como base de vinagrete sobre saladas que acompanham o prato principal — pode ser uma estratégia simples para modular a resposta glicêmica pós-prandial. A gordura do AOVE retarda o esvaziamento gástrico, promovendo uma absorção mais gradual da glicose.</p>
            </div>
          </article>

          <div className="azt-sep"><span className="azt-dot" /><span className="azt-dot" /><span className="azt-dot" /></div>

          {/* SECTION 5 */}
          <article id="azt-s5" className="azt-section azt-reveal">
            <span className="azt-section-number">05</span>
            <h2>Preservação da <em>Integridade Cognitiva</em></h2>
            <p className="azt-section-subtitle">A relação entre o consumo de ácido oleico e compostos fenólicos do azeite e a redução do acúmulo de placas beta-amiloides no cérebro.</p>
            <p>A doença de Alzheimer é a forma mais comum de demência, afetando aproximadamente 45 milhões de pessoas em todo o mundo. Ela é caracterizada por duas marcas patológicas principais: o acúmulo de placas de beta-amiloide (Aβ) entre os neurônios e a formação de emaranhados neurofibrilares compostos pela proteína tau hiperfosforilada dentro dos neurônios. Esses processos levam à morte neuronal progressiva, perda de sinapses e declínio cognitivo gradual que afeta memória, linguagem e capacidade de raciocínio.</p>
            <p>Estudos epidemiológicos têm consistentemente mostrado que populações mediterrâneas — que tradicionalmente consomem quantidades significativas de azeite de oliva — apresentam prevalência mais baixa de Alzheimer e declínio cognitivo em comparação com populações de outras regiões geográficas. Essa observação levou pesquisadores a investigar se componentes específicos do AOVE poderiam explicar essa associação.</p>

            <div className="azt-study-box">
              <div className="azt-study-label">Estudo Pré-Clínico em Destaque</div>
              <div className="azt-study-title">Oleocantal promove a remoção de beta-amiloide do cérebro via regulação de transportadores na barreira hematoencefálica</div>
              <p className="azt-study-detail">
                <strong>Publicação:</strong> ACS Chemical Neuroscience (2013) · PubMed ID: 23414128<br />
                <strong>Desenho:</strong> Estudo com abordagem in vitro (células endoteliais cerebrais de camundongos) e in vivo (camundongos). Os pesquisadores investigaram se o oleocantal poderia facilitar a remoção de proteínas beta-amiloide do cérebro.<br />
                <strong>Mecanismo descoberto:</strong> O oleocantal aumentou a expressão e a atividade de duas proteínas-chave de transporte na barreira hematoencefálica: a P-glicoproteína (P-gp) e a LRP1 (proteína receptora de LDL tipo 1). Essas proteínas funcionam como "bombas" que transportam a beta-amiloide de dentro do cérebro para a corrente sanguínea, onde ela pode ser degradada e eliminada.<br />
                <strong>Resultado adicional:</strong> Além de aumentar o transporte, o oleocantal também elevou a expressão de neprilisina (NEP) e IDE (enzima degradadora de insulina), duas peptidases que clivam e degradam diretamente a beta-amiloide. Ou seja, o composto atuou em múltiplas frentes: facilitando tanto a remoção quanto a degradação das proteínas tóxicas.
              </p>
            </div>

            <p>Uma revisão abrangente publicada no International Journal of Molecular Sciences (2024) compilou evidências de estudos celulares, animais e clínicos sobre o AOVE e a doença de Alzheimer. Os autores concluíram que o consumo de azeite de oliva está consistentemente associado a benefícios cognitivos e a menor risco de Alzheimer e demências relacionadas.</p>
            <p>Um achado particularmente interessante veio do ensaio clínico PREDIMED. Em uma subanálise envolvendo 447 voluntários cognitivamente saudáveis com alto risco cardiovascular, os participantes que seguiram uma dieta mediterrânea suplementada com AOVE apresentaram melhor desempenho em testes cognitivos após acompanhamento de vários anos.</p>

            <div className="azt-tip-box">
              <div className="azt-tip-label">Na Prática, no Dia a Dia</div>
              <p>A incorporação regular de azeite extra virgem na dieta, desde as fases mais jovens da vida adulta, pode ser considerada uma estratégia de longo prazo para a saúde cerebral. Os estudos sugerem que os efeitos neuroprotetores se acumulam ao longo de anos de consumo consistente. Usar AOVE como a principal fonte de gordura adicionada na alimentação — em vez de óleos refinados — é uma substituição simples que preserva o aporte de compostos bioativos ao organismo.</p>
            </div>
          </article>

          <div className="azt-sep"><span className="azt-dot" /><span className="azt-dot" /><span className="azt-dot" /></div>

          {/* SECTION 6 */}
          <article id="azt-s6" className="azt-section azt-reveal">
            <span className="azt-section-number">06</span>
            <h2>Impacto na <em>Microbiota Intestinal</em></h2>
            <p className="azt-section-subtitle">Como o azeite de oliva extra virgem atua como um prebiótico natural, favorecendo o crescimento de bactérias benéficas no trato digestivo.</p>
            <p>A microbiota intestinal — o vasto ecossistema de microrganismos que habita nosso trato gastrointestinal — tornou-se um dos campos mais dinâmicos da pesquisa biomédica nas últimas duas décadas. Hoje se sabe que a composição dessa comunidade microbiana influencia não apenas a digestão, mas também o metabolismo energético, o sistema imunológico, a produção de neurotransmissores e até o humor e o comportamento, por meio do chamado eixo intestino-cérebro.</p>
            <p>A dieta é um dos fatores mais potentes na modulação da microbiota, e componentes específicos dos alimentos podem favorecer ou prejudicar determinadas populações bacterianas. É nesse contexto que o AOVE tem despertado interesse crescente: seus compostos fenólicos, que em grande parte (90–95%) escapam à digestão no intestino delgado e chegam ao cólon, são metabolizados pelas bactérias intestinais em estruturas bioativas secundárias.</p>

            <div className="azt-study-box">
              <div className="azt-study-label">Revisão Científica em Destaque</div>
              <div className="azt-study-title">AOVE e o eixo intestino-cérebro: influência sobre microbiota intestinal, imunidade da mucosa e saúde cardiometabólica e cognitiva</div>
              <p className="azt-study-detail">
                <strong>Publicação:</strong> Nutrition Reviews, Volume 79, Edição 12, Páginas 1362–1374, Dezembro de 2021<br />
                <strong>Escopo:</strong> Revisão abrangente de estudos em humanos e modelos animais sobre os efeitos do AOVE na microbiota intestinal e na saúde intestinal.<br />
                <strong>Principais achados:</strong> O AOVE demonstrou atuar como prebiótico, estimulando o crescimento de bactérias benéficas como Lactobacillus e Bifidobacterium, e simultaneamente como antibacteriano, suprimindo o crescimento de espécies patogênicas. Essa dupla ação foi atribuída ao conjunto de compostos fenólicos do AOVE.
              </p>
            </div>

            <p>Um estudo publicado em 2025 na revista Biomolecules avaliou o impacto do consumo de um AOVE português rico em polifenóis sobre múltiplos parâmetros de saúde, incluindo a microbiota fecal. Os resultados mostraram que o AOVE promoveu aumento de Bacteroidota tanto no intestino quanto na cavidade oral, enquanto aumentou Bacillota na microbiota oral — ambos filos bacterianos associados à saúde.</p>
            <p>Outra via relevante é a produção de ácidos graxos de cadeia curta (AGCCs), como o butirato. Certas bactérias beneficiadas pelos polifenóis do AOVE são conhecidas produtoras de butirato, uma molécula que serve como principal fonte de energia para as células do cólon, fortalece a barreira intestinal, modula a resposta imune local e possui propriedades anti-inflamatórias.</p>

            <div className="azt-tip-box">
              <div className="azt-tip-label">Na Prática, no Dia a Dia</div>
              <p>A combinação de azeite extra virgem com alimentos ricos em fibras — como saladas com folhas verdes, legumes, grãos integrais — potencializa o efeito prebiótico: as fibras servem como substrato para as bactérias benéficas, e os polifenóis do AOVE estimulam seletivamente seu crescimento.</p>
            </div>
          </article>

          <div className="azt-sep"><span className="azt-dot" /><span className="azt-dot" /><span className="azt-dot" /></div>

          {/* SECTION 7 */}
          <article id="azt-s7" className="azt-section azt-reveal">
            <span className="azt-section-number">07</span>
            <h2>Proteção contra <em>Danos ao DNA Celular</em></h2>
            <p className="azt-section-subtitle">A ação dos antioxidantes naturais do azeite — vitamina E e esqualeno — na neutralização de radicais livres que causam mutações celulares.</p>
            <p>A cada segundo, trilhões de reações bioquímicas acontecem em nosso corpo. Muitas delas produzem como subproduto as chamadas espécies reativas de oxigênio (EROs), popularmente conhecidas como radicais livres. Em condições normais, o organismo possui sistemas antioxidantes endógenos capazes de neutralizar essas moléculas instáveis. O problema surge quando há um desequilíbrio — quando a produção de radicais livres supera a capacidade antioxidante do corpo — criando uma condição chamada estresse oxidativo.</p>
            <p>Danos ao DNA são particularmente relevantes porque podem levar a mutações celulares. Se essas mutações ocorrerem em genes que controlam o crescimento e a divisão celular, elas podem potencialmente contribuir para processos de carcinogênese.</p>
            <p>O azeite de oliva extra virgem contém dois antioxidantes naturais de particular importância nesse contexto: a vitamina E (principalmente na forma de alfa-tocoferol) e o esqualeno.</p>
            <p>O <strong>esqualeno</strong> é um triterpeno que representa um dos componentes minoritários mais abundantes do AOVE, com concentrações médias de cerca de 400-500 mg por 100g em azeites extra virgem de boa qualidade. Estudos documentaram que o esqualeno possui propriedades antioxidantes relevantes: ele é capaz de neutralizar o oxigênio singlete e proteger lipídios, proteínas e DNA contra danos oxidativos.</p>
            <p>A <strong>vitamina E</strong> (alfa-tocoferol), presente no AOVE, atua como antioxidante interceptando radicais livres na fase lipídica das membranas celulares, onde os polifenóis hidrossolúveis não conseguem atuar. A combinação sinérgica de todos os compostos do AOVE cria uma rede de proteção antioxidante em múltiplas camadas.</p>

            <div className="azt-highlight-box">
              <div className="azt-hl-label">Um ponto frequentemente negligenciado</div>
              <p>O AOVE demonstrou notável estabilidade antioxidante mesmo quando submetido a aquecimento. Um estudo publicado no Journal of Food Chemistry and Nutrition (2016) concluiu que compostos como hidroxitirosol, tirosol, oleuropeína, oleocantal e esqualeno mostraram-se razoavelmente resistentes ao calor, mantendo parte significativa de sua atividade antioxidante mesmo após o processo de cocção.</p>
            </div>

            <div className="azt-tip-box">
              <div className="azt-tip-label">Na Prática, no Dia a Dia</div>
              <p>Para maximizar o aporte de antioxidantes do azeite extra virgem, armazene-o em recipientes de vidro escuro ou latas opacas, protegido da luz e de fontes de calor. A exposição à luz e ao calor acelera a degradação da vitamina E e dos polifenóis. Outra dica: comprar azeites com data de envase recente garante maior concentração de compostos bioativos intactos.</p>
            </div>
          </article>

          <div className="azt-sep"><span className="azt-dot" /><span className="azt-dot" /><span className="azt-dot" /></div>

          {/* SECTION 8 */}
          <article id="azt-s8" className="azt-section azt-reveal">
            <span className="azt-section-number">08</span>
            <h2>Aumento da <em>Densidade Mineral Óssea</em></h2>
            <p className="azt-section-subtitle">Estudos que ligam a ingestão de compostos do azeite à melhora dos níveis de osteocalcina no sangue e à proteção contra a osteoporose.</p>
            <p>A osteoporose é uma condição esquelética caracterizada pela perda progressiva de massa óssea e pela deterioração da microarquitetura do tecido ósseo, resultando em ossos mais frágeis e suscetíveis a fraturas. Segundo a OMS, a osteoporose causa mais de 9 milhões de fraturas por ano em todo o mundo.</p>
            <p>Estudos epidemiológicos indicam que a incidência de osteoporose na Europa é consistentemente menor na bacia do Mediterrâneo, onde o azeite de oliva é a principal fonte de gordura na dieta.</p>

            <div className="azt-study-box">
              <div className="azt-study-label">Estudo Clínico em Destaque</div>
              <div className="azt-study-title">12 meses de consumo de extrato de polifenóis de oliva aumentam osteocalcina sérica em mulheres pós-menopáusicas com osteopenia</div>
              <p className="azt-study-detail">
                <strong>Publicação:</strong> The Journal of Nutrition, Health &amp; Aging (2015) · Registro: ClinicalTrials.gov NCT00789425<br />
                <strong>Desenho:</strong> Ensaio clínico duplo-cego, controlado por placebo. 64 pacientes com osteopenia foram randomizadas para receber diariamente 250 mg de extrato de oliva + 1000 mg de cálcio (grupo tratamento) ou 1000 mg de cálcio isolado (grupo placebo) durante 12 meses.<br />
                <strong>Resultados primários:</strong> Os níveis de osteocalcina aumentaram de forma significativa no grupo tratamento. A densidade mineral óssea diminuiu no grupo placebo mas se manteve estável no grupo que recebeu o extrato de oliva — sugerindo um efeito protetor contra a perda óssea.
              </p>
            </div>

            <p>Esses achados clínicos são consistentes com pesquisas laboratoriais anteriores. Estudos in vitro demonstraram que a oleuropeína reduz a expressão do receptor PPARγ, inibindo a diferenciação de células-tronco mesenquimais em adipócitos e, simultaneamente, favorecendo sua diferenciação em osteoblastos.</p>

            <div className="azt-tip-box">
              <div className="azt-tip-label">Na Prática, no Dia a Dia</div>
              <p>A saúde óssea é construída ao longo de décadas, e a alimentação é um de seus pilares. A ingestão regular de azeite extra virgem, combinada com fontes de cálcio e vitamina D e atividade física regular, pode contribuir para a manutenção do remodelamento ósseo saudável.</p>
            </div>
          </article>

          <div className="azt-sep"><span className="azt-dot" /><span className="azt-dot" /><span className="azt-dot" /></div>

          {/* SECTION 9 */}
          <article id="azt-s9" className="azt-section azt-reveal">
            <span className="azt-section-number">09</span>
            <h2>Regulação da <em>Pressão Arterial Sistólica</em></h2>
            <p className="azt-section-subtitle">O efeito dos polifenóis na redução da resistência vascular periférica em adultos, com foco na população acima de 50 anos.</p>
            <p>A hipertensão arterial é o fator de risco modificável mais prevalente para doenças cardiovasculares e cerebrovasculares, afetando mais de 1,2 bilhão de pessoas em todo o mundo. A pressão arterial sistólica — o número "de cima" na medição da pressão — reflete a força que o sangue exerce sobre as paredes arteriais no momento em que o coração contrai.</p>
            <p>Os polifenóis do azeite extra virgem exercem influência sobre a pressão arterial por múltiplos mecanismos: aumento da biodisponibilidade de óxido nítrico, redução do LDL oxidado, diminuição de marcadores inflamatórios e redução de ADMA. Esses mecanismos, atuando em conjunto, resultam em menor resistência vascular periférica.</p>

            <div className="azt-study-box">
              <div className="azt-study-label">Estudo Clínico em Destaque</div>
              <div className="azt-study-title">Polifenóis do azeite reduzem pressão arterial e melhoram função endotelial em mulheres jovens com hipertensão leve</div>
              <p className="azt-study-detail">
                <strong>Publicação:</strong> American Journal of Hypertension (2012) · DOI: 10.1038/ajh.2012.128<br />
                <strong>Desenho:</strong> Estudo duplo-cego, randomizado e cruzado com 24 mulheres jovens com pressão alta-normal ou hipertensão estágio 1. Cada dieta durou 2 meses, com washout de 4 semanas.<br />
                <strong>Resultados:</strong> Apenas a dieta com azeite rico em polifenóis produziu reduções significativas: –7,91 mmHg na pressão sistólica e –6,65 mmHg na diastólica (p &lt; 0,01). Esses números são clinicamente relevantes: uma redução de 5-10 mmHg na pressão sistólica está associada a reduções significativas no risco de eventos cardiovasculares.
              </p>
            </div>

            <p>Para a população acima de 50 anos, esses achados são especialmente relevantes. Com o envelhecimento, as artérias naturalmente perdem elasticidade, a função endotelial declina e a produção de óxido nítrico diminui. Os polifenóis do AOVE atuam precisamente nos mecanismos que se deterioram com a idade.</p>

            <div className="azt-highlight-box">
              <div className="azt-hl-label">Convergência de mecanismos</div>
              <p>O que torna o efeito do AOVE sobre a pressão arterial especialmente interessante é que ele não depende de um único mecanismo. Ao contrário de muitos medicamentos anti-hipertensivos, que atuam em uma via específica, os compostos do azeite extra virgem modulam simultaneamente a produção de óxido nítrico, o estresse oxidativo, a inflamação endotelial e o perfil lipídico. Essa ação multifatorial pode explicar por que os efeitos observados nos estudos clínicos produzem resultados clinicamente relevantes quando somados.</p>
            </div>

            <div className="azt-tip-box">
              <div className="azt-tip-label">Na Prática, no Dia a Dia</div>
              <p>Incorporar o azeite extra virgem como a principal gordura de adição no cotidiano — em substituição a manteigas, margarinas e óleos refinados — e mantê-lo como um hábito consistente ao longo dos anos é o que as evidências apontam como mais relevante.</p>
            </div>
          </article>

        </div>{/* end article-wrapper */}

        {/* DISCLAIMER */}
        <section className="azt-disclaimer azt-reveal">
          <div className="azt-disclaimer-inner">
            <h3>Nota Importante</h3>
            <p>As informações apresentadas neste artigo são baseadas em estudos científicos publicados em periódicos revisados por pares e têm caráter exclusivamente informativo e educacional. Este conteúdo <strong>não substitui</strong> o aconselhamento médico, nutricional ou de qualquer outro profissional de saúde. Os efeitos descritos foram observados em contextos experimentais específicos e podem variar conforme as características individuais de cada pessoa. Antes de fazer alterações significativas em sua dieta ou rotina de saúde, consulte sempre um profissional de saúde qualificado. O azeite de oliva extra virgem é um alimento e não deve ser utilizado como substituto de medicamentos ou tratamentos prescritos.</p>
          </div>
        </section>


      </main>

      {/* COMBINED HEADER + FOOTER */}
      <footer className="azt-combined-footer">
        <style>{`
          .azt-combined-footer {
            font-family: 'DM Sans', 'Inter', sans-serif;
            margin-top: 0;
          }
          .azt-cf-nav {
            background: var(--azt-bg-warm, #F5F0E8);
            border-top: 1px solid var(--azt-border, #E0DACE);
            border-bottom: 1px solid var(--azt-border, #E0DACE);
          }
          .azt-cf-nav-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }
          .azt-cf-nav-inner a {
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--azt-text-secondary, #5A5A52);
            text-decoration: none;
            padding: 0.4rem 0.8rem;
            border-radius: 6px;
            transition: background 0.2s, color 0.2s;
          }
          .azt-cf-nav-inner a:hover {
            background: rgba(0,0,0,0.05);
            color: var(--azt-text-primary, #2C2C28);
          }
          .azt-cf-main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 2rem;
            display: grid;
            grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
            gap: 2.5rem;
          }
          .azt-cf-main h4 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--azt-text-primary, #2C2C28);
            margin-bottom: 1rem;
          }
          .azt-cf-main a, .azt-cf-main span.azt-cf-link {
            display: block;
            font-size: 0.82rem;
            color: var(--azt-text-secondary, #5A5A52);
            text-decoration: none;
            margin-bottom: 0.5rem;
            transition: color 0.2s;
            cursor: pointer;
          }
          .azt-cf-main a:hover, .azt-cf-main span.azt-cf-link:hover {
            color: var(--azt-olive-deep, #3D4A2A);
          }
          .azt-cf-logo-section p {
            font-size: 0.82rem;
            line-height: 1.65;
            color: var(--azt-text-caption, #7A7A70);
            margin-bottom: 1rem;
          }
          .azt-cf-socials {
            display: flex;
            gap: 0.75rem;
          }
          .azt-cf-socials svg {
            width: 18px;
            height: 18px;
            color: var(--azt-text-caption, #7A7A70);
            cursor: pointer;
            transition: color 0.2s;
          }
          .azt-cf-socials svg:hover {
            color: var(--azt-olive-deep, #3D4A2A);
          }
          .azt-cf-payment {
            display: flex;
            gap: 0.4rem;
            flex-wrap: wrap;
            margin-bottom: 1rem;
          }
          .azt-cf-payment span {
            font-size: 0.7rem;
            font-weight: 600;
            color: var(--azt-text-secondary, #5A5A52);
            border: 1px solid var(--azt-border, #E0DACE);
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
          }
          .azt-cf-contact-info {
            font-size: 0.82rem;
            color: var(--azt-text-caption, #7A7A70);
            line-height: 1.7;
          }
          .azt-cf-badges {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
          }
          .azt-cf-badges > div {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            font-size: 0.72rem;
            color: var(--azt-text-caption, #7A7A70);
          }
          .azt-cf-badges svg {
            width: 14px;
            height: 14px;
          }
          .azt-cf-bottom {
            background: var(--azt-olive-deep, #3D4A2A);
            color: rgba(245,240,232,0.7);
            text-align: center;
            padding: 0.85rem 2rem;
            font-size: 0.72rem;
            letter-spacing: 0.02em;
          }
          @media (max-width: 768px) {
            .azt-cf-main {
              grid-template-columns: 1fr 1fr;
              gap: 2rem;
              padding: 2rem 1.5rem;
            }
            .azt-cf-nav-inner {
              padding: 0.8rem 1rem;
            }
          }
          @media (max-width: 480px) {
            .azt-cf-main {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
          }
        `}</style>

        {/* Navigation Bar */}
        <div className="azt-cf-nav">
          <div className="azt-cf-nav-inner">
            <Link to="/">Início</Link>
            <Link to="/loja">Loja</Link>
            <Link to="/loja?sort=bestsellers">Mais Vendidos</Link>
            <Link to="/loja?sort=newest">Lançamentos</Link>
            <Link to="/loja?sort=deals">Ofertas</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contato">Contato</Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="azt-cf-main">
          {/* Col 1 - Logo */}
          <div className="azt-cf-logo-section">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', textDecoration: 'none' }}>
              <BookOpen style={{ width: 22, height: 22, color: 'var(--azt-olive-deep, #3D4A2A)' }} />
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--azt-text-primary, #2C2C28)' }}>DROPIX EDITORA</span>
            </Link>
            <p>Sua editora online com os melhores títulos, preços e atendimento. Leitura transforma vidas.</p>
            <div className="azt-cf-socials">
              <Instagram />
              <Facebook />
              <Twitter />
              <Youtube />
            </div>
          </div>

          {/* Col 2 - Institucional */}
          <div>
            <h4>Institucional</h4>
            <Link to="/sobre">Sobre Nós</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contato">Contato</Link>
            <span className="azt-cf-link">Trabalhe Conosco</span>
          </div>

          {/* Col 3 - Ajuda */}
          <div>
            <h4>Ajuda</h4>
            <Link to="/privacidade">Política de Privacidade</Link>
            <Link to="/termos">Termos de Uso</Link>
            <Link to="/trocas">Trocas e Devoluções</Link>
            <Link to="/faq">Como Comprar</Link>
            <span className="azt-cf-link">Rastrear Pedido</span>
          </div>

          {/* Col 4 - Pagamento & Contato */}
          <div>
            <h4>Pagamento & Contato</h4>
            <div className="azt-cf-payment">
              <span>Visa</span>
              <span>Master</span>
              <span>Elo</span>
              <span>PIX</span>
              <span>Boleto</span>
            </div>
            <div className="azt-cf-contact-info">
              Atendimento: seg-sex 8h às 18h<br />
              contato@dropixeditora.com.br<br />
              (11) 4002-8922
            </div>
            <div className="azt-cf-badges">
              <div><Shield /> Site Seguro</div>
              <div><Award /> Garantido</div>
              <div><Lock /> SSL</div>
            </div>
          </div>
        </div>

        {/* Aviso Legal */}
        <div style={{ padding: '24px 20px 0', maxWidth: 800, margin: '0 auto', fontSize: '0.7rem', color: '#a0a0a0', lineHeight: 1.5, textAlign: 'center' }}>
          Aviso Legal: As informações contidas neste site são apenas para fins informativos e educativos. Este conteúdo não se destina a substituir o conselho, diagnóstico ou tratamento médico profissional. Sempre procure o conselho de seu médico ou outro profissional de saúde qualificado.
        </div>

        {/* Bottom Bar */}
        <div className="azt-cf-bottom">
          © 2026 DROPIX EDITORA. Todos os direitos reservados. CNPJ: 65.255.590/0001-49
        </div>
      </footer>
    </div>
  );
};

export default AzeiteTRR;
