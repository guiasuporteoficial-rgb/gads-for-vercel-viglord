import { useMemo, useRef } from 'react';

const AzeiteTR = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const html = useMemo(
    () => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GADS PR - TR</title>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-4GFP5H7DHV"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-4GFP5H7DHV');</script>
  <script>!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);</script>
  <link rel="preload" href="https://scripts.converteai.net/88c2dd25-2774-43f4-a038-f2a84bb4bd89/players/69c5a3b796fd2c2d9b236afe/v4/player.js" as="script">
  <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script">
  <link rel="preload" href="https://cdn.converteai.net/88c2dd25-2774-43f4-a038-f2a84bb4bd89/69a0b0dadfeab82d62493612/main.m3u8" as="fetch">
  <link rel="dns-prefetch" href="https://cdn.converteai.net">
  <link rel="dns-prefetch" href="https://scripts.converteai.net">
  <link rel="dns-prefetch" href="https://images.converteai.net">
  <link rel="dns-prefetch" href="https://api.vturb.com.br">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      min-height: 100%;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      min-height: 100vh;
      background: linear-gradient(180deg, #1a0b0e 0%, #3d1218 30%, #5a1a1a 60%, #3d1218 100%);
      background-attachment: fixed;
      color: #f0e6e6;
    }

    .top-bar {
      background: rgba(255, 255, 255, 0.04);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      padding: 12px 20px;
      text-align: center;
    }

    .top-bar span {
      font-size: 12px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.45);
      letter-spacing: 2.5px;
      text-transform: uppercase;
    }

    .hero-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 20px 60px;
      max-width: 820px;
      margin: 0 auto;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(229, 57, 53, 0.12);
      border: 1px solid rgba(229, 57, 53, 0.3);
      border-radius: 20px;
      padding: 6px 16px;
      margin-bottom: 30px;
    }

    .badge-dot {
      width: 6px;
      height: 6px;
      background: #e53935;
      border-radius: 50%;
      animation: pulse-dot 2s ease-in-out infinite;
    }

    @keyframes pulse-dot {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .badge-text {
      font-size: 11px;
      font-weight: 600;
      color: #e53935;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .player-wrapper {
      width: 100%;
      margin-bottom: 36px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      background: #1a0b0e;
    }

    .player-wrapper vturb-smartplayer {
      display: block;
      width: 100%;
    }

    .info-text {
      font-size: 22px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 32px;
      text-align: center;
      line-height: 1.6;
    }

    .info-text strong {
      color: #ffffff;
      font-weight: 600;
      border-bottom: 2px solid rgba(229, 57, 53, 0.6);
      padding-bottom: 1px;
    }

    .cta-link {
      background: linear-gradient(180deg, #e53935 0%, #c62828 100%);
      color: #fff;
      font-size: 17px;
      font-weight: 600;
      padding: 18px 50px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 8px 25px rgba(229, 57, 53, 0.4);
    }

    .cta-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(229, 57, 53, 0.5);
      background: linear-gradient(180deg, #ef5350 0%, #d32f2f 100%);
    }

    .play-icon {
      font-size: 14px;
    }

    .site-footer {
      margin-top: 300px;
      padding: 24px 20px;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .site-footer-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .site-footer-nav a {
      color: rgba(255, 255, 255, 0.25);
      text-decoration: none;
      font-size: 11px;
      transition: color 0.2s;
    }

    .site-footer-nav a:hover {
      color: rgba(255, 255, 255, 0.5);
    }

    .site-footer-nav .sep {
      color: rgba(255, 255, 255, 0.12);
      font-size: 10px;
      user-select: none;
    }

    @media (max-width: 600px) {
      .top-bar {
        padding: 10px 15px;
      }

      .top-bar span {
        font-size: 10px;
        letter-spacing: 2px;
      }

      .hero-section {
        padding: 28px 16px 40px;
      }

      .badge {
        margin-bottom: 22px;
      }

      .player-wrapper {
        border-radius: 12px;
        margin-bottom: 28px;
      }

      .info-text {
        font-size: 18px;
        margin-bottom: 26px;
      }

      .cta-link {
        font-size: 15px;
        padding: 16px 35px;
        width: 100%;
        max-width: 340px;
        justify-content: center;
      }

      .site-footer {
        margin-top: 200px;
      }
    }
  </style>
</head>
<body>
  <div class="top-bar">
    <span>Apresentação Exclusiva</span>
  </div>

  <section class="hero-section">
    <div class="badge">
      <span class="badge-dot"></span>
      <span class="badge-text">Disponível agora</span>
    </div>

    <div class="player-wrapper">
      <vturb-smartplayer id="vid-69c5a3b796fd2c2d9b236afe" style="display:block;margin:0 auto;width:100%;"></vturb-smartplayer>
    </div>

    <p class="info-text">
      Assista a <strong>apresentação exclusiva</strong><br>
      neste momento
    </p>

    <a id="cta-btn" href="https://lordvigor1.shop/google2.html" target="_top" class="cta-link">
      <span class="play-icon">▶</span>
      ASSISTIR AGORA
    </a>

    <script>
      try {
        var params = window.parent.location.search;
        if (params) {
          var btn = document.getElementById('cta-btn');
          if (btn) {
            var base = btn.getAttribute('href');
            btn.setAttribute('href', base + params);
          }
        }
      } catch(e) {}
    </script>
  </section>

  <footer class="site-footer">
    <nav class="site-footer-nav">
      <a href="/privacidade" target="_top">Privacidade</a>
      <span class="sep">·</span>
      <a href="/termos" target="_top">Termos</a>
      <span class="sep">·</span>
      <a href="/termos" target="_top">Legal</a>
    </nav>
  </footer>

  <script src="https://scripts.converteai.net/88c2dd25-2774-43f4-a038-f2a84bb4bd89/players/69c5a3b796fd2c2d9b236afe/v4/player.js" async></script>
</body>
</html>`,
    []
  );

  const handleLoad = () => {
    const iframe = iframeRef.current;
    const doc = iframe?.contentDocument;

    if (!iframe || !doc) return;

    const resize = () => {
      const height = Math.max(
        doc.documentElement.scrollHeight,
        doc.body.scrollHeight,
        window.innerHeight
      );
      iframe.style.height = `${height}px`;
    };

    resize();
    setTimeout(resize, 500);
    setTimeout(resize, 1500);
  };

  return (
    <iframe
      ref={iframeRef}
      title="Assista Agora"
      srcDoc={html}
      onLoad={handleLoad}
      style={{ width: '100%', minHeight: '100vh', border: '0', display: 'block' }}
    />
  );
};

export default AzeiteTR;
