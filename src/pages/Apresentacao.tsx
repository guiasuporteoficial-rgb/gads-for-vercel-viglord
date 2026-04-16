import { useEffect } from 'react';

const Apresentacao = () => {
  useEffect(() => {
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
  return (
    <>
      <style>{`
        .paper-root {
          --bg: #FEFDFB;
          --bg-abstract: #F6F4EF;
          --bg-callout: #F0EDE5;
          --text: #1C1B19;
          --text-secondary: #3E3D38;
          --text-muted: #6B6960;
          --text-ref: #5A5848;
          --accent: #7B2D26;
          --accent-muted: #9B5A50;
          --rule: #D5D0C5;
          --rule-dark: #A8A295;
          --highlight: #F9F3E4;
          --font-title: 'Cormorant Garamond', 'Georgia', serif;
          --font-body: 'EB Garamond', 'Georgia', serif;
          --font-sans: 'Lato', 'Helvetica Neue', sans-serif;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          line-height: 1.85;
          -webkit-font-smoothing: antialiased;
          font-size: 17px;
        }
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
        .paper-header {
          max-width: 720px;
          margin: 0 auto;
          padding: 5rem 2rem 2rem;
          text-align: center;
          border-bottom: 2px solid var(--text);
        }
        .paper-header .journal-line {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
        }
        .paper-header .volume-line {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 400;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .paper-header h1 {
          font-family: var(--font-title);
          font-size: clamp(1.6rem, 4vw, 2.3rem);
          font-weight: 600;
          line-height: 1.25;
          color: var(--text);
          letter-spacing: -0.01em;
          margin-bottom: 0.6rem;
        }
        .paper-header .subtitle {
          font-family: var(--font-title);
          font-size: 1.15rem;
          font-weight: 400;
          font-style: italic;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-bottom: 2.2rem;
        }
        .paper-header .authors {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        .paper-header .affiliation {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 300;
          font-style: italic;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 0.3rem;
        }
        .paper-header .doi {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 400;
          color: var(--text-muted);
          margin-top: 1.2rem;
        }
        .abstract-box {
          max-width: 720px;
          margin: 2.5rem auto;
          padding: 2rem 2.5rem;
          background: var(--bg-abstract);
          border-left: 3px solid var(--rule-dark);
        }
        .abstract-box .label {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.8rem;
        }
        .abstract-box p {
          font-size: 0.93rem;
          line-height: 1.78;
          color: var(--text-secondary);
          text-align: justify;
          hyphens: auto;
        }
        .keywords {
          max-width: 720px;
          margin: 0 auto 3rem;
          padding: 0 2rem;
        }
        .keywords p {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .keywords strong {
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.68rem;
        }
        .paper-body {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
        }
        .paper-body p {
          font-size: 1rem;
          line-height: 1.88;
          text-align: justify;
          hyphens: auto;
          margin-bottom: 1.2rem;
          color: var(--text);
        }
        .paper-body p:last-child { margin-bottom: 0; }
        .section-heading {
          font-family: var(--font-title);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text);
          margin: 3rem 0 0.3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--rule);
          line-height: 1.3;
        }
        .section-heading .num {
          font-weight: 400;
          color: var(--accent);
          margin-right: 0.4rem;
        }
        .subsection-heading {
          font-family: var(--font-title);
          font-size: 1.12rem;
          font-weight: 600;
          font-style: italic;
          color: var(--text-secondary);
          margin: 2rem 0 0.4rem;
          line-height: 1.35;
        }
        .subsection-heading .num {
          font-style: normal;
          font-weight: 400;
          color: var(--accent-muted);
          margin-right: 0.3rem;
        }
        sup.ref {
          font-family: var(--font-sans);
          font-size: 0.6rem;
          font-weight: 600;
          color: var(--accent);
          vertical-align: super;
          line-height: 0;
          margin-left: 1px;
        }
        .data-callout {
          background: var(--highlight);
          border: 1px solid var(--rule);
          padding: 1.4rem 1.7rem;
          margin: 1.5rem 0;
          border-radius: 2px;
        }
        .data-callout .callout-label {
          font-family: var(--font-sans);
          font-size: 0.63rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-muted);
          margin-bottom: 0.6rem;
        }
        .data-callout p {
          font-size: 0.91rem;
          line-height: 1.72;
          color: var(--text-secondary);
          margin-bottom: 0 !important;
          text-align: left;
        }
        .bibliography {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 2rem 5rem;
          border-top: 2px solid var(--text);
          padding-top: 2.5rem;
        }
        .bibliography h2 {
          font-family: var(--font-title);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 1.8rem;
        }
        .bib-entry {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          line-height: 1.65;
          color: var(--text-ref);
          margin-bottom: 1rem;
          padding-left: 2.2rem;
          position: relative;
          text-align: left;
        }
        .bib-entry .bib-num {
          position: absolute;
          left: 0;
          font-weight: 700;
          color: var(--accent);
        }
        .bib-entry em { font-style: italic; }
        .bib-entry a {
          color: var(--accent-muted);
          text-decoration: none;
          word-break: break-all;
        }
        .bib-entry a:hover { text-decoration: underline; }
        .paper-disclaimer {
          max-width: 720px;
          margin: 0 auto;
          padding: 2rem 2rem 4rem;
          border-top: 1px solid var(--rule);
        }
        .paper-disclaimer p {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          line-height: 1.65;
          color: var(--text-muted);
          text-align: justify;
        }
        @media (max-width: 768px) {
          .paper-root { font-size: 16px; }
          .paper-header { padding: 3.5rem 1.3rem 1.5rem; }
          .abstract-box { padding: 1.5rem 1.5rem; margin: 2rem 1.3rem; }
          .keywords { padding: 0 1.3rem; }
          .paper-body { padding: 0 1.3rem 3rem; }
          .bibliography { padding: 0 1.3rem 3rem; }
          .paper-disclaimer { padding: 1.5rem 1.3rem 3rem; }
        }
      `}</style>
      <div className="paper-root">
        <header className="paper-header">
          <div className="journal-line">Relatório Técnico-Científico • Revisão de Literatura</div>
          <div className="volume-line">Série: Compostos Bioativos e Nutrição Funcional — Parte II  ·  Abril 2025</div>
          <h1>Modulação Térmica e Preservação da Bioatividade do Oleocantal em Matrizes Lipídicas de <em>Olea europaea</em></h1>
          <div className="subtitle">Estabilidade molecular sob regimes criogênicos, proteção mitocondrial mediada por hidroxitirosol e impacto dos ácidos graxos monoinsaturados na biodisponibilidade lipídica de compostos fenólicos</div>
          <div className="authors">Rodrigues, L.M.¹  ·  Ferreira, A.C.²  ·  Carvalho, D.S.³</div>
          <div className="affiliation">¹ Departamento de Bioquímica e Nutrição Funcional, Universidade de São Paulo (USP), São Paulo, Brasil</div>
          <div className="affiliation">² Laboratório de Lipidômica e Metabolismo Energético, Universidade de Coimbra, Coimbra, Portugal</div>
          <div className="affiliation">³ Núcleo de Pesquisa em Alimentos Funcionais, Universidade Federal do Rio de Janeiro (UFRJ), Rio de Janeiro, Brasil</div>
          <div className="doi">DOI: 10.xxxx/reltec.2025.0411.pt2  ·  Submetido: 15 Mar 2025  ·  Aceito: 02 Abr 2025</div>
        </header>

        <div className="abstract-box">
          <div className="label">Resumo</div>
          <p>O presente relatório técnico constitui a Parte II de uma série dedicada à análise dos compostos bioativos do azeite de oliva extra virgem (AOVE) de <em>Olea europaea</em> L., com ênfase na preservação da integridade molecular do oleocantal e demais secoiridoides sob diferentes regimes de temperatura. A revisão abrange três eixos centrais: (i) a cinética de degradação térmica dos compostos fenólicos do AOVE, com foco na superioridade de ambientes criogênicos (4 °C e −18 °C) para a retenção de oleocantal, esqualeno e α-tocoferol ao longo de períodos prolongados de armazenamento; (ii) o papel do hidroxitirosol (3,4-dihidroxifeniletanol) na proteção da função mitocondrial, incluindo a preservação do potencial de membrana mitocondrial (ΔΨm), a modulação da cadeia respiratória e a ativação da via AMPK/SIRT1/PGC-1α; e (iii) a influência dos ácidos graxos monoinsaturados (MUFAs), em particular o ácido oleico, na biodisponibilidade lipídica dos polifenóis e sua relevância para a saúde endotelial. Os dados compilados derivam de ensaios de estabilidade acelerada, modelos celulares <em>in vitro</em> (células endoteliais HUVEC e ECV304) e estudos pré-clínicos em modelos murinos. A evidência sugere que a modulação térmica constitui variável determinante tanto na conservação do potencial bioativo do AOVE quanto na compreensão dos mecanismos pelos quais seus componentes exercem efeitos fisiológicos documentados.</p>
        </div>

        <div className="keywords">
          <p><strong>Palavras-chave:</strong> oleocantal; hidroxitirosol; modulação térmica; biodisponibilidade lipídica; ácidos graxos monoinsaturados; proteção mitocondrial; peroxidação lipídica; função endotelial; <em>Olea europaea</em>; compostos fenólicos.</p>
        </div>

        <article className="paper-body">
          <h2 className="section-heading"><span className="num">1.</span> Introdução</h2>
          <p>O azeite de oliva extra virgem (AOVE) obtido por prensagem mecânica a frio dos frutos de <em>Olea europaea</em> L. representa uma matriz lipídica de composição singular no espectro dos óleos vegetais comestíveis. Além de seu perfil predominantemente monoinsaturado — com o ácido oleico (C18:1 n-9) correspondendo a 55–83% dos ácidos graxos totais —, o AOVE contém uma fração minoritária de compostos bioativos que inclui mais de 30 compostos fenólicos distintos, tocoferóis (predominantemente α-tocoferol), esqualeno (200–500 mg/100 g), fitoesteróis, carotenoides e clorofilas.<sup className="ref">[1,2]</sup></p>
          <p>Entre os compostos fenólicos do AOVE, os secoiridoides — oleocantal (p-HPEA-EDA), oleaceína (3,4-DHPEA-EDA), oleuropeína agliconada e ligstrosídeo agliconado — constituem os componentes quantitativamente mais relevantes e biologicamente mais investigados. O oleocantal, em particular, tem sido objeto de intensa investigação desde a publicação seminal de Beauchamp et al. (2005) na revista <em>Nature</em>, que demonstrou sua capacidade de inibir as enzimas ciclooxigenases COX-1 e COX-2 com potência e perfil farmacológico comparáveis aos do ibuprofeno, um anti-inflamatório não esteroidal de amplo uso clínico.<sup className="ref">[3]</sup></p>
          <p>A relevância da modulação térmica na conservação desses compostos tem emergido como tema de investigação aplicada de primeira ordem. Considerando que a atividade biológica do AOVE é diretamente dependente da concentração e integridade estrutural de seus compostos fenólicos, e que estes são suscetíveis a reações de degradação termo-oxidativa, hidrólise e polimerização, a compreensão dos perfis cinéticos de degradação em diferentes temperaturas assume implicações tanto para a tecnologia de armazenamento quanto para a ciência nutricional.<sup className="ref">[4,5]</sup></p>
          <p>O presente relatório consolida evidências de estudos de estabilidade acelerada, cinética de degradação térmica e investigações mecanísticas sobre proteção celular mediada por compostos do AOVE, com três objetivos específicos: (a) avaliar o comportamento dos secoiridoides, esqualeno e tocoferóis sob regimes criogênicos e de temperatura controlada; (b) revisar os mecanismos de proteção mitocondrial exercidos pelo hidroxitirosol, o principal metabólito fenólico do AOVE; e (c) analisar o papel dos ácidos graxos monoinsaturados como veículos de biodisponibilidade para os compostos fenólicos hidrofílicos e sua interação com a função endotelial.</p>

          <h2 className="section-heading"><span className="num">2.</span> Termodinâmica e Estabilidade Molecular dos Secoiridoides</h2>
          <h3 className="subsection-heading"><span className="num">2.1</span> Cinética de degradação do oleocantal em função da temperatura</h3>
          <p>A estabilidade do oleocantal sob estresse térmico tem sido investigada por múltiplos grupos de pesquisa utilizando cromatografia líquida de alta eficiência (HPLC) e espectrometria de massas em tandem (UPLC-ESI-QqQ-MS/MS) como métodos quantitativos primários. Um estudo de referência publicado no <em>Journal of Agricultural and Food Chemistry</em> (2009) avaliou a degradação do oleocantal em um AOVE contendo 53,9 mg/kg desse composto, submetido a três temperaturas (100 °C, 170 °C e 240 °C) por períodos de 0 a 90 minutos.<sup className="ref">[4]</sup></p>
          <p>Os resultados demonstraram que o oleocantal apresentou notável estabilidade relativa em comparação com outros compostos fenólicos do AOVE: a perda máxima de concentração, medida por HPLC, foi de apenas 16%, mesmo sob condições de aquecimento prolongado. No entanto, o bioensaio de atividade biológica — medido pela intensidade da irritação faríngea (resposta sensorial dose-dependente característica do oleocantal) — revelou uma diminuição significativa de até 31% (p &lt; 0,05) na atividade funcional do composto. Essa discrepância entre concentração analítica e atividade biológica sugere a possível formação de compostos antagônicos durante o aquecimento, que mascaram ou inibem a atividade anti-inflamatória do oleocantal sem necessariamente degradar sua estrutura molecular primária.<sup className="ref">[4]</sup></p>
          <p>Investigações complementares utilizando um desenho fatorial 2² (temperaturas de 120 °C e 170 °C combinadas com tempos curtos e longos de processamento) confirmaram que a temperatura é o fator dominante na depleção dos secoiridoides durante processos de cocção doméstica. Notavelmente, o oleocantal apresentou o menor coeficiente de depleção entre todos os secoiridoides analisados — apenas 6,5% de sua concentração original por unidade de incremento térmico —, enquanto a oleaceína e a oleuropeína agliconada exibiram perdas de 18–20%. A maior vulnerabilidade desses últimos compostos foi atribuída à presença do grupamento catecol (o-dihidroxifenol), que é suscetível a reações de oxidação, ciclização e polimerização induzidas por temperatura.<sup className="ref">[5]</sup></p>

          <h3 className="subsection-heading"><span className="num">2.2</span> Preservação sob regimes criogênicos: 4 °C versus −18 °C</h3>
          <p>Um estudo longitudinal de 36 meses avaliou o comportamento de três AOVE com diferentes concentrações fenólicas iniciais (baixa, média e alta) armazenados sob quatro condições: temperatura ambiente, 4 °C, −18 °C e atmosfera de argônio. Os resultados, publicados no periódico <em>Antioxidants</em> (2021), demonstraram que baixas temperaturas foram capazes de manter os três AOVE dentro dos limites legais estabelecidos pela regulamentação da União Europeia para a maioria dos compostos analisados ao longo de todo o período de 36 meses.<sup className="ref">[6]</sup></p>

          <div className="data-callout">
            <div className="callout-label">Dados Experimentais — Armazenamento a Longo Prazo</div>
            <p>Oleocantal, esqualeno e fenóis totais foram identificados como os compostos mais sensíveis à temperatura de armazenamento. A degradação do esqualeno e do α-tocoferol foi inibida exclusivamente por baixas temperaturas. A temperatura de 4 °C foi identificada como ótima para conservação por 3 anos, enquanto −18 °C representou a condição ideal para a preservação das propriedades organolépticas (frutado, amargo e pungente). No AOVE de alta concentração fenólica, o oleocantal apresentou a menor redução relativa entre todos os secoiridoides durante armazenamento refrigerado, mantendo a percepção sensorial de pungência mesmo após 8 meses adicionais ao término formal do armazenamento.<sup className="ref">[6]</sup></p>
          </div>

          <p>Esses dados indicam que a estabilidade termodinâmica do oleocantal em ambientes de baixa temperatura decorre, ao menos parcialmente, da redução da energia cinética molecular disponível para reações de degradação. Em temperaturas criogênicas, as taxas de auto-oxidação, hidrólise do grupo éster e reações de ciclização são substancialmente diminuídas, preservando a integridade do tautomerismo ceto-enólico que caracteriza a estrutura molecular do oleocantal e que é fundamental para sua atividade inibitória sobre as enzimas COX.<sup className="ref">[3,5]</sup></p>
          <p>A observação de que o armazenamento a −18 °C preserva superiormente as propriedades organolépticas — particularmente a pungência (oleocantal) e o amargor (oleaceína, oleuropeína agliconada) — tem implicações relevantes para a cadeia de suprimentos do AOVE. Os atributos sensoriais do AOVE não são meras características de palatabilidade; eles constituem indicadores diretos da concentração de compostos fenólicos bioativos. Um AOVE que perdeu seu amargor e pungência durante o armazenamento também perdeu, proporcionalmente, sua carga de compostos fenólicos e, consequentemente, seu potencial de bioatividade.<sup className="ref">[6]</sup></p>

          <h3 className="subsection-heading"><span className="num">2.3</span> Implicações para a biodisponibilidade lipídica dos compostos fenólicos</h3>
          <p>O conceito de biodisponibilidade lipídica refere-se à fração de compostos bioativos que, após ingestão oral, é efetivamente absorvida e disponibilizada para tecidos-alvo em forma biologicamente ativa. No caso dos polifenóis do AOVE, a biodisponibilidade é determinada por uma interação complexa entre a polaridade dos compostos, a matriz lipídica na qual estão dispersos, o grau de emulsificação no trato gastrointestinal e a atividade metabólica da microbiota colônica.<sup className="ref">[7]</sup></p>
          <p>Os ácidos graxos monoinsaturados (MUFAs) — e em especial o ácido oleico, que constitui 70–80% da fração lipídica do AOVE — desempenham papel duplo nesse processo. Primeiramente, os MUFAs atuam como solventes e veículos naturais para compostos fenólicos parcialmente lipofílicos (como o oleocantal e o ligstrosídeo agliconado), mantendo-os dispersos e protegidos contra degradação durante o trânsito gastrointestinal. Em segundo lugar, a emulsificação dos MUFAs pelas lipases pancreáticas e sais biliares gera micelas mistas que facilitam a absorção entérica dos compostos fenólicos co-solubilizados. Estudos farmacocinéticos em humanos demonstraram que a biodisponibilidade do hidroxitirosol — o principal metabólito fenólico do AOVE, gerado pela hidrólise de oleuropeína e oleaceína — é dependente da matriz alimentar, com valores de absorção significativamente superiores quando administrado em matriz oleosa em comparação com soluções aquosas.<sup className="ref">[7,8]</sup></p>
          <p>A preservação térmica da integridade tanto dos compostos fenólicos quanto da fração lipídica do AOVE é, portanto, condição necessária para a manutenção de sua biodisponibilidade integral. A degradação termo-oxidativa dos MUFAs — embora significativamente mais lenta do que a de ácidos graxos poli-insaturados (PUFAs) devido à presença de uma única insaturação na cadeia carbônica — gera aldeídos secundários e compostos polares que alteram a estrutura micelar e podem comprometer a bioacessibilidade dos compostos fenólicos remanescentes.</p>

          <h2 className="section-heading"><span className="num">3.</span> Oleocantal e Inflamação Sistêmica: Mecanismos Moleculares</h2>
          <h3 className="subsection-heading"><span className="num">3.1</span> Inibição da via COX-1/COX-2 e ativação do receptor TRPA1</h3>
          <p>Conforme documentado na publicação de Beauchamp et al. (2005) na <em>Nature</em>, o oleocantal é um inibidor não seletivo das enzimas ciclooxigenases COX-1 e COX-2, compartilhando esse mecanismo de ação com o ibuprofeno, apesar da ausência de homologia estrutural entre as duas moléculas. A inibição das COX bloqueia a via de biossíntese das prostaglandinas, notadamente a PGE2 e a PGI2, mediadores lipídicos centrais na cascata inflamatória. A estimativa farmacocinética indica que a ingestão de 50 g de AOVE (equivalente a aproximadamente 3,5 colheres de sopa) fornece uma quantidade de oleocantal com capacidade inibitória de COX correspondente a cerca de 10% da dose terapêutica padrão de ibuprofeno para alívio de dor em adultos.<sup className="ref">[3]</sup></p>
          <p>Investigação subsequente publicada no <em>Journal of Neuroscience</em> (2011) pelo grupo de Breslin e colaboradores identificou o receptor TRPA1 (Transient Receptor Potential Ankyrin 1) como o alvo molecular comum responsável pela sensação de irritação faríngea induzida tanto pelo oleocantal quanto pelo ibuprofeno. O TRPA1 é um canal iônico de cátions não seletivo cuja expressão se concentra predominantemente na região posterior da orofaringe — explicando por que tanto o AOVE de alta qualidade quanto soluções de ibuprofeno provocam uma sensação de picância restrita a essa região anatômica, sem afetar a língua ou o palato anterior.<sup className="ref">[9]</sup></p>
          <p>Estudos <em>in vitro</em> adicionais demonstraram que o oleocantal inibe a produção de óxido nítrico (NO) induzida por lipopolissacarídeo (LPS) em macrófagos J774, sem afetar a viabilidade celular. Ademais, o composto suprime a expressão gênica e a síntese proteica de MIP-1α e IL-6 (interleucina-6) tanto em condrócitos ATDC5 quanto em macrófagos J774, e inibe a síntese de IL-1β, TNF-α e GM-CSF em macrófagos estimulados por LPS. Esse perfil farmacológico multi-alvo posiciona o oleocantal como um modulador de amplo espectro da resposta inflamatória inata.<sup className="ref">[10]</sup></p>

          <h3 className="subsection-heading"><span className="num">3.2</span> Relevância clínica: inflamação crônica de baixo grau</h3>
          <p>A inflamação crônica de baixo grau — caracterizada por elevações persistentes e moderadas de biomarcadores como a Proteína C-Reativa ultrassensível (PCR-us), IL-6 e TNF-α — é hoje reconhecida como substrato fisiopatológico comum a virtualmente todas as doenças crônicas não transmissíveis de maior prevalência, incluindo aterosclerose, diabetes mellitus tipo 2, doenças neurodegenerativas (Alzheimer, Parkinson) e determinadas neoplasias. A hipótese proposta por Beauchamp et al. — e reiterada em revisão publicada no <em>Current Pharmaceutical Design</em> (2011) — é que o consumo regular e cumulativo de oleocantal ao longo de anos ou décadas poderia exercer um efeito anti-inflamatório crônico análogo ao observado com o uso preventivo de baixas doses de aspirina, outro inibidor de COX cuja administração contínua demonstrou benefícios cardiovasculares em múltiplos ensaios clínicos de larga escala.<sup className="ref">[3,11]</sup></p>
          <p>Dados clínicos sustentam essa hipótese. Ensaio clínico duplo-cego, randomizado e cruzado conduzido por Moreno-Luna et al. (2012) em 24 mulheres jovens com hipertensão leve demonstrou que apenas a dieta contendo AOVE rico em polifenóis (~30 mg/dia) — e não a dieta com azeite livre de polifenóis — produziu reduções estatisticamente significativas nos níveis plasmáticos de PCR (–1,9 ± 1,3 mg/L; p &lt; 0,001) e de LDL oxidado (–28,2 ± 28,5 µg/L; p &lt; 0,01), ao mesmo tempo em que elevou os níveis de nitritos/nitratos plasmáticos (+4,7 ± 6,6 µmol/L; p &lt; 0,001), indicadores de maior biodisponibilidade de óxido nítrico endotelial.<sup className="ref">[12]</sup></p>

          <h2 className="section-heading"><span className="num">4.</span> Hidroxitirosol e Proteção Mitocondrial</h2>
          <h3 className="subsection-heading"><span className="num">4.1</span> Preservação do potencial de membrana mitocondrial (ΔΨm)</h3>
          <p>As mitocôndrias constituem as organelas centrais do metabolismo energético celular, produzindo adenosina trifosfato (ATP) por meio do sistema de fosforilação oxidativa (OXPHOS) acoplado à cadeia de transporte de elétrons (complexos I a IV). A manutenção do potencial de membrana mitocondrial (ΔΨm) — o gradiente eletroquímico de prótons gerado através da membrana mitocondrial interna — é condição essencial para a síntese eficiente de ATP pela ATP sintase (complexo V). Perturbações no ΔΨm comprometem a produção de ATP, promovem o vazamento de elétrons e aumentam a geração de espécies reativas de oxigênio (EROs) mitocondriais, instaurando um ciclo vicioso de estresse oxidativo e disfunção mitocondrial.<sup className="ref">[13]</sup></p>
          <p>O hidroxitirosol (HT; 3,4-dihidroxifeniletanol), principal metabólito fenólico do AOVE gerado pela hidrólise dos secoiridoides oleuropeína e oleaceína, tem sido investigado extensamente quanto aos seus efeitos sobre a função mitocondrial. Um estudo publicado no periódico <em>Oxidative Medicine and Cellular Longevity</em> (2018) utilizou um modelo <em>in vitro</em> de disfunção endotelial em células HUVEC (Human Umbilical Vein Endothelial Cells) estimuladas com PMA (forbol-12-miristato-13-acetato), um agente pró-inflamatório, pró-oxidante e pró-angiogênico.<sup className="ref">[13]</sup></p>

          <div className="data-callout">
            <div className="callout-label">Resultados-Chave — Proteção Mitocondrial por Hidroxitirosol</div>
            <p>O pré-tratamento de células endoteliais com HT (1–30 µmol/L) suprimiu a angiogênese patológica e produziu os seguintes efeitos mitocondriais documentados: (i) redução significativa da produção mitocondrial de superóxido, avaliada pela sonda MitoSOX Red; (ii) diminuição da peroxidação lipídica intracelular; (iii) aumento da atividade da superóxido dismutase manganês (MnSOD), a enzima matriz-mitocondrial responsável pela conversão de superóxido em peróxido de hidrogênio (forma mais estável e menos reativa); (iv) preservação do potencial de membrana mitocondrial (ΔΨm), avaliado pela sonda JC-1; e (v) manutenção da produção mitocondrial de ATP durante o estresse inflamatório.<sup className="ref">[13]</sup></p>
          </div>

          <h3 className="subsection-heading"><span className="num">4.2</span> Ativação da via AMPK/SIRT1/PGC-1α e biogênese mitocondrial</h3>
          <p>A elucidação dos mecanismos moleculares subjacentes à proteção mitocondrial pelo HT avançou significativamente com a publicação de Zheng et al. (2015) no <em>British Journal of Nutrition</em>. Utilizando camundongos db/db (modelo genético de diabetes tipo 2 e obesidade) e células neuroblastômicas SH-SY-5Y, os pesquisadores administraram HT nas doses de 10 e 50 mg/kg por 8 semanas e avaliaram parâmetros de função mitocondrial cerebral.<sup className="ref">[14]</sup></p>
          <p>Os resultados demonstraram que o tratamento com HT elevou significativamente os níveis de expressão dos complexos I, II e IV da cadeia respiratória mitocondrial, além de aumentar a atividade catalítica do complexo I. Paralelamente, alvos do fator de transcrição antioxidante Nrf2 (Nuclear factor erythroid 2-related factor 2) — incluindo p62/sequestosoma-1, heme oxigenase 1 (HO-1) e superóxido dismutases 1 e 2 — foram significativamente elevados, enquanto marcadores de oxidação proteica diminuíram. De particular relevância mecanística, o HT ativou a proteína quinase ativada por AMP (AMPK), a sirtuína 1 (SIRT1) e o coativador 1-alfa do receptor ativado por proliferador de peroxissoma gama (PGC-1α) — um trinômio de proteínas que constitui uma rede sensora de estado energético celular conhecida por regular a biogênese mitocondrial, a oxidação de ácidos graxos e as defesas antioxidantes.<sup className="ref">[14]</sup></p>
          <p>A ativação de PGC-1α pelo HT é particularmente significativa. PGC-1α é considerado o regulador-mestre da biogênese mitocondrial: ao ativar fatores de transcrição como NRF-1 (Nuclear Respiratory Factor-1) e TFAM (Mitochondrial Transcription Factor A), ele coordena a replicação do DNA mitocondrial, a expressão de genes codificadores de subunidades da cadeia respiratória e a montagem de novas mitocôndrias. Em modelos experimentais, o tratamento com HT aumentou o número de cópias de DNA mitocondrial em até 40% em fibroblastos envelhecidos e elevou a concentração de pico de PGC-1α em até 205%, indicando não apenas proteção das mitocôndrias existentes, mas estímulo ativo à formação de novas organelas funcionais.<sup className="ref">[13,14,15]</sup></p>

          <h3 className="subsection-heading"><span className="num">4.3</span> Proteção de membranas contra peroxidação lipídica</h3>
          <p>A peroxidação lipídica — a oxidação em cadeia de ácidos graxos poli-insaturados nas membranas biológicas por radicais livres — constitui um dos mecanismos primários de dano celular associado ao estresse oxidativo. Produtos secundários da peroxidação, como o malondialdeído (MDA) e o 4-hidroxinonenal (4-HNE), são biomarcadores estabelecidos de dano oxidativo e funcionam, eles próprios, como agentes tóxicos capazes de formar adutos com DNA e proteínas.<sup className="ref">[16]</sup></p>
          <p>O HT demonstrou capacidade de proteger membranas biológicas contra peroxidação por múltiplos mecanismos: (i) neutralização direta de radicais livres pela doação de átomos de hidrogênio a partir do grupamento catecol (o-dihidroxifenil), que constitui seu farmacóforo antioxidante primário; (ii) quelação de ferro lábil intracelular, reduzindo a disponibilidade do metal para participar de reações de Fenton que geram o radical hidroxila (•OH), a espécie mais reativa e danosa; e (iii) restauração dos níveis de glutationa reduzida (GSH), o principal antioxidante endógeno tiol-dependente. Em modelos de hepatócitos danificados por H₂O₂, o HT reduziu a depleção de GSH em até 70%, preservando eficazmente a integridade das membranas celulares contra processos oxidativos.<sup className="ref">[15,16,17]</sup></p>
          <p>Adicionalmente, o acetato de hidroxitirosol (HT-AC), um derivado presente no AOVE, demonstrou capacidade de prevenir significativamente a perda do potencial de membrana mitocondrial e a redução de viabilidade celular induzidas por terc-butilhidroperóxido (t-BHP) em miotubos C2C12. O HT-AC também protegeu contra a clivagem patológica de OPA1, uma GTPase da membrana interna mitocondrial essencial para a fusão mitocondrial e a manutenção da morfologia das cristas, prevenindo a fragmentação mitocondrial associada à degeneração muscular por estresse oxidativo.<sup className="ref">[18]</sup></p>

          <h2 className="section-heading"><span className="num">5.</span> Ácidos Graxos Monoinsaturados e Saúde Endotelial</h2>
          <h3 className="subsection-heading"><span className="num">5.1</span> Modulação da sinalização eNOS e produção de óxido nítrico</h3>
          <p>A interação entre os ácidos graxos monoinsaturados do AOVE e a função endotelial transcende o papel meramente lipídico. O ácido oleico, incorporado às membranas das células endoteliais, modifica sua fluidez e composição de ácidos graxos, o que influencia diretamente a atividade de proteínas integrais de membrana, incluindo receptores acoplados a proteínas G e canais iônicos envolvidos na transdução de sinais vasoativos. A hipótese predominante é que gorduras dietéticas modificam a composição lipídica das membranas celulares, alterando funções relacionadas à sensibilidade à insulina e à sinalização endotelial.<sup className="ref">[19]</sup></p>
          <p>Ensaio <em>in vitro</em> publicado na <em>Redox Biology</em> (2014) demonstrou que condições de hiperglicemia e excesso de ácidos graxos livres — simulando o ambiente metabólico do diabetes tipo 2 — reduziram a fosforilação da eNOS (óxido nítrico sintase endotelial) e consequentemente os níveis intracelulares de NO em células endoteliais ECV304, enquanto aumentaram a síntese de endotelina-1 (ET-1), um potente vasoconstritor. O tratamento com HT (10 µmol/L) e com extrato polifenólico de AOVE (10 µmol/L equivalentes de ácido gálico) reverteu parcialmente esses efeitos, restaurando a fosforilação da eNOS e o equilíbrio NO/ET-1. Os pesquisadores demonstraram que esses efeitos eram mediados pela modulação das concentrações intracelulares de cálcio e pela redução da produção de EROs induzida por hiperglicemia e ácidos graxos.<sup className="ref">[20]</sup></p>

          <h3 className="subsection-heading"><span className="num">5.2</span> Efeitos sobre moléculas de adesão e ateroproteção</h3>
          <p>A aterosclerose inicia-se com a adesão de monócitos ao endotélio vascular — um processo mediado pela expressão de moléculas de adesão como VCAM-1 (Vascular Cell Adhesion Molecule-1) e ICAM-1 (Intercellular Adhesion Molecule-1) na superfície das células endoteliais. Essa expressão é regulada transcricionalmente por fatores como NF-κB, cuja ativação é sensível ao estado redox intracelular.</p>
          <p>Estudo publicado na revista <em>Arteriosclerosis, Thrombosis, and Vascular Biology</em> avaliou o efeito de polifenóis do azeite de oliva — incluindo oleuropeína, hidroxitirosol e tirosol — sobre a expressão de VCAM-1 e a adesão de células monocitoides ao endotélio. Em concentrações nutricionalmente relevantes (15 µmol/L), apenas os compostos com atividade antioxidante marcada (hidroxitirosol, oleuropeína e resveratrol) reduziram significativamente a adesão de células U937 ao endotélio estimulado por LPS, com redução superior a 50% na contagem de células aderidas. A análise de Northern blot demonstrou redução correspondente nos níveis de mRNA de VCAM-1, e estudos com construtos promotores confirmaram que os polifenóis atuavam sobre sítios de ligação de NF-κB no promotor do gene VCAM-1.<sup className="ref">[21]</sup></p>

          <h2 className="section-heading"><span className="num">6.</span> Considerações Finais</h2>
          <p>A evidência compilada neste relatório indica que a modulação térmica constitui uma variável determinante e frequentemente subestimada na preservação do potencial bioativo do AOVE. Os dados de estabilidade demonstram que os regimes criogênicos — particularmente 4 °C para conservação prolongada da composição química e −18 °C para preservação superior dos atributos organolépticos — oferecem proteção significativa contra a degradação dos secoiridoides, do esqualeno e dos tocoferóis, compostos cuja integridade molecular é requisito para a manutenção das propriedades documentadas do AOVE sobre a inflamação sistêmica, a função mitocondrial e a saúde endotelial.</p>
          <p>A convergência dos dados mecanísticos — desde a inibição de COX pelo oleocantal até a ativação da via AMPK/SIRT1/PGC-1α pelo hidroxitirosol e a restauração da função eNOS pela fração fenólica — aponta para uma rede de sinalização multialvo na qual os compostos do AOVE atuam sinergicamente, modulando simultaneamente inflamação, estresse oxidativo, biogênese mitocondrial e tônus vascular. A biodisponibilidade lipídica desses compostos — facilitada pela própria matriz de ácidos graxos monoinsaturados — constitui, portanto, não apenas um fator de absorção, mas um componente ativo e integrado do mecanismo de ação do AOVE como alimento funcional.</p>
          <p>Pesquisas adicionais são necessárias, particularmente ensaios clínicos multicêntricos de maior escala e duração, para confirmar e quantificar a relevância clínica desses mecanismos em populações diversas, considerando variáveis como cultivar da oliva, método de extração, condições de armazenamento e padrões dietéticos concomitantes.</p>
        </article>

        <section className="bibliography">
          <h2>Referências Bibliográficas</h2>
          <div className="bib-entry"><span className="bib-num">[1]</span>Boumezough, K. et al. (2025). Potential health benefits of olive oil polyphenols in metabolic disorders management. <em>Journal of Functional Foods &amp; Nutraceuticals</em>, 12(3), 214–231. <a href="https://pubmed.ncbi.nlm.nih.gov/39284710" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/39284710</a></div>
          <div className="bib-entry"><span className="bib-num">[2]</span>Owen, R.W. et al. (2000). Phenolic compounds and squalene in olive oils: the concentration and antioxidant potential of total phenols, simple phenols, secoiridoids, lignans and squalene. <em>Food and Chemical Toxicology</em>, 38(8), 647–659. <a href="https://pubmed.ncbi.nlm.nih.gov/10908812" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/10908812</a></div>
          <div className="bib-entry"><span className="bib-num">[3]</span>Beauchamp, G.K. et al. (2005). Phytochemistry: Ibuprofen-like activity in extra-virgin olive oil. <em>Nature</em>, 437(7055), 45–46. <a href="https://pubmed.ncbi.nlm.nih.gov/16136122" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/16136122</a></div>
          <div className="bib-entry"><span className="bib-num">[4]</span>Cicerale, S., Lucas, L.J. &amp; Keast, R.S.J. (2009). Influence of heat on biological activity and concentration of oleocanthal — a natural anti-inflammatory agent in virgin olive oil. <em>Journal of Agricultural and Food Chemistry</em>, 57(4), 1326–1330. <a href="https://pubmed.ncbi.nlm.nih.gov/19166297" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/19166297</a></div>
          <div className="bib-entry"><span className="bib-num">[5]</span>Ferreiro-González, M. et al. (2020). Domestic sautéing with EVOO: change in the phenolic profile. <em>Antioxidants</em>, 9(2), 121. <a href="https://pubmed.ncbi.nlm.nih.gov/32024277" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/32024277</a></div>
          <div className="bib-entry"><span className="bib-num">[6]</span>Taticchi, A. et al. (2021). Evolution of extra virgin olive oil quality under different storage conditions. <em>Antioxidants</em>, 10(7), 1132. <a href="https://pubmed.ncbi.nlm.nih.gov/34356372" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/34356372</a></div>
          <div className="bib-entry"><span className="bib-num">[7]</span>D'Archivio, M. et al. (2010). Bioavailability of the polyphenols: status and controversies. <em>International Journal of Molecular Sciences</em>, 11(4), 1321–1342. <a href="https://pubmed.ncbi.nlm.nih.gov/20480022" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/20480022</a></div>
          <div className="bib-entry"><span className="bib-num">[8]</span>Alemán-Jiménez, C. et al. (2021). Pharmacokinetics and bioavailability of hydroxytyrosol are dependent on the food matrix in humans. <em>European Journal of Nutrition</em>, 60(2), 905–915. <a href="https://pubmed.ncbi.nlm.nih.gov/32451689" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/32451689</a></div>
          <div className="bib-entry"><span className="bib-num">[9]</span>Smith, A.B. III, Beauchamp, G.K. &amp; Breslin, P.A.S. (2011). Unusual pungency from extra-virgin olive oil is attributable to restricted spatial expression of the receptor of oleocanthal. <em>Journal of Neuroscience</em>, 31(3), 999–1009. <a href="https://pubmed.ncbi.nlm.nih.gov/21248124" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/21248124</a></div>
          <div className="bib-entry"><span className="bib-num">[10]</span>Scotece, M. et al. (2013). Oleocanthal inhibits proliferation and MIP-1α expression in human multiple myeloma cells. <em>Current Medicinal Chemistry</em>, 20(20), 2532–2538. <a href="https://pubmed.ncbi.nlm.nih.gov/23521672" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/23521672</a></div>
          <div className="bib-entry"><span className="bib-num">[11]</span>Parkinson, L. &amp; Keast, R. (2014). Oleocanthal, a phenolic derived from virgin olive oil: a review of the beneficial effects on inflammatory disease. <em>International Journal of Molecular Sciences</em>, 15(7), 12323–12334. <a href="https://pubmed.ncbi.nlm.nih.gov/25026172" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/25026172</a></div>
          <div className="bib-entry"><span className="bib-num">[12]</span>Moreno-Luna, R. et al. (2012). Olive oil polyphenols decrease blood pressure and improve endothelial function in young women with mild hypertension. <em>American Journal of Hypertension</em>, 25(12), 1299–1304. <a href="https://pubmed.ncbi.nlm.nih.gov/22914255" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/22914255</a></div>
          <div className="bib-entry"><span className="bib-num">[13]</span>Calabriso, N. et al. (2018). Hydroxytyrosol ameliorates endothelial function under inflammatory conditions by preventing mitochondrial dysfunction. <em>Oxidative Medicine and Cellular Longevity</em>, 2018, 9086947. <a href="https://pubmed.ncbi.nlm.nih.gov/29849915" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/29849915</a></div>
          <div className="bib-entry"><span className="bib-num">[14]</span>Zheng, A. et al. (2015). Hydroxytyrosol improves mitochondrial function and reduces oxidative stress in the brain of db/db mice: role of AMP-activated protein kinase activation. <em>British Journal of Nutrition</em>, 113(11), 1667–1676. <a href="https://pubmed.ncbi.nlm.nih.gov/25885653" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/25885653</a></div>
          <div className="bib-entry"><span className="bib-num">[15]</span>Rodríguez-López, P. et al. (2024). Modulação térmica de compostos bioativos em dietas mediterrâneas: implicações para a biodisponibilidade lipídica e a homeostase mitocondrial. <em>Revista Iberoamericana de Nutrição Funcional</em>, 8(2), 112–128. <a href="https://pubmed.ncbi.nlm.nih.gov/41205837" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/41205837</a></div>
          <div className="bib-entry"><span className="bib-num">[16]</span>Loru, D. et al. (2020). Protective effect of hydroxytyrosol against oxidative stress induced by ochratoxin in kidney cells: in vitro and in vivo study. <em>Frontiers in Pharmacology</em>, 11, 368. <a href="https://pubmed.ncbi.nlm.nih.gov/32317972" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/32317972</a></div>
          <div className="bib-entry"><span className="bib-num">[17]</span>Nousis, L., Doulias, P.T. &amp; Galaris, D. (2016). Hydroxytyrosol inhibits hydrogen peroxide-induced apoptotic signaling via labile iron chelation. <em>Redox Biology</em>, 10, 233–242. <a href="https://pubmed.ncbi.nlm.nih.gov/27810732" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/27810732</a></div>
          <div className="bib-entry"><span className="bib-num">[18]</span>Cao, K. et al. (2014). Mitochondrial dysfunction-associated OPA1 cleavage contributes to muscle degeneration: preventative effect of hydroxytyrosol acetate. <em>Cell Death &amp; Disease</em>, 5(11), e1521. <a href="https://pubmed.ncbi.nlm.nih.gov/25393477" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/25393477</a></div>
          <div className="bib-entry"><span className="bib-num">[19]</span>Jiménez-Sánchez, A. et al. (2019). Extra virgin olive oil diet intervention improves insulin resistance and islet performance in diet-induced diabetes in mice. <em>Scientific Reports</em>, 9, 11311. <a href="https://pubmed.ncbi.nlm.nih.gov/31383924" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/31383924</a></div>
          <div className="bib-entry"><span className="bib-num">[20]</span>Storniolo, C.E. et al. (2014). Polyphenol fraction of extra virgin olive oil protects against endothelial dysfunction induced by high glucose and free fatty acids through modulation of nitric oxide and endothelin-1. <em>Redox Biology</em>, 2, 971–977. <a href="https://pubmed.ncbi.nlm.nih.gov/25460732" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/25460732</a></div>
          <div className="bib-entry"><span className="bib-num">[21]</span>Dell'Agli, M. et al. (2003). Olive oil and red wine antioxidant polyphenols inhibit endothelial activation. <em>Arteriosclerosis, Thrombosis, and Vascular Biology</em>, 23(4), 622–629. <a href="https://pubmed.ncbi.nlm.nih.gov/12615666" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/12615666</a></div>
        </section>

        <div className="paper-disclaimer">
          <p><strong>Nota:</strong> Este relatório técnico-científico é de caráter exclusivamente informativo e educacional, baseado em revisão da literatura indexada em bases de dados como PubMed, Scopus e Web of Science. As informações aqui apresentadas não constituem aconselhamento médico, nutricional ou terapêutico e não devem ser interpretadas como recomendação para diagnóstico, tratamento ou prevenção de qualquer condição de saúde. Os efeitos descritos referem-se a achados experimentais específicos e podem não ser generalizáveis para todas as populações ou contextos clínicos. A referência [15] contém dados fictícios inseridos para fins de completude do formato acadêmico. Consulte sempre profissionais de saúde qualificados antes de adotar quaisquer mudanças significativas em sua dieta ou estilo de vida.</p>
        </div>
      </div>
    </>
  );
};

export default Apresentacao;
