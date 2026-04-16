import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AzeiteTR = () => {
  useEffect(() => {
    // Load Smartplayer script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/88c2dd25-2774-43f4-a038-f2a84bb4bd89/players/69c5a3b796fd2c2d9b236afe/v4/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="atr-page">
      <style>{`
        .atr-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          min-height: 100vh;
          background: linear-gradient(180deg, #1a0b0e 0%, #3d1218 30%, #5a1a1a 60%, #3d1218 100%);
          background-attachment: fixed;
          color: #f0e6e6;
        }

        .atr-top-bar {
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 12px 20px;
          text-align: center;
        }

        .atr-top-bar span {
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .atr-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px 60px;
          max-width: 820px;
          margin: 0 auto;
        }

        .atr-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(229, 57, 53, 0.12);
          border: 1px solid rgba(229, 57, 53, 0.3);
          border-radius: 20px;
          padding: 6px 16px;
          margin-bottom: 30px;
        }

        .atr-badge-dot {
          width: 6px;
          height: 6px;
          background: #e53935;
          border-radius: 50%;
          animation: atr-pulse-dot 2s ease-in-out infinite;
        }

        @keyframes atr-pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .atr-badge-text {
          font-size: 11px;
          font-weight: 600;
          color: #e53935;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .atr-player-wrapper {
          width: 100%;
          margin-bottom: 36px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          background: #1a0b0e;
        }

        .atr-player-wrapper div {
          display: block;
          width: 100%;
        }

        .atr-info-text {
          font-size: 22px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 32px;
          text-align: center;
          line-height: 1.6;
        }

        .atr-info-text strong {
          color: #ffffff;
          font-weight: 600;
          border-bottom: 2px solid rgba(229, 57, 53, 0.6);
          padding-bottom: 1px;
        }

        .atr-cta-link {
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

        .atr-cta-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(229, 57, 53, 0.5);
          background: linear-gradient(180deg, #ef5350 0%, #d32f2f 100%);
        }

        .atr-cta-link .atr-play-icon {
          font-size: 14px;
        }

        .atr-footer {
          margin-top: 300px;
          padding: 24px 20px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .atr-footer-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .atr-footer-nav a {
          color: rgba(255, 255, 255, 0.25);
          text-decoration: none;
          font-size: 11px;
          transition: color 0.2s;
        }

        .atr-footer-nav a:hover {
          color: rgba(255, 255, 255, 0.5);
        }

        .atr-footer-nav .atr-sep {
          color: rgba(255, 255, 255, 0.12);
          font-size: 10px;
          user-select: none;
        }

        @media (max-width: 600px) {
          .atr-top-bar {
            padding: 10px 15px;
          }

          .atr-top-bar span {
            font-size: 10px;
            letter-spacing: 2px;
          }

          .atr-hero {
            padding: 28px 16px 40px;
          }

          .atr-badge {
            margin-bottom: 22px;
          }

          .atr-player-wrapper {
            border-radius: 12px;
            margin-bottom: 28px;
          }

          .atr-info-text {
            font-size: 18px;
            margin-bottom: 26px;
          }

          .atr-cta-link {
            font-size: 15px;
            padding: 16px 35px;
            width: 100%;
            max-width: 340px;
            justify-content: center;
          }

          .atr-footer {
            margin-top: 200px;
          }
        }
      `}</style>

      <div className="atr-top-bar">
        <span>Apresentação Exclusiva</span>
      </div>

      <div className="atr-hero">
        <div className="atr-player-wrapper">
          <div id="ifr_69c5a3b796fd2c2d9b236afe_wrapper" style={{ margin: '0 auto', width: '100%' }}>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} id="ifr_69c5a3b796fd2c2d9b236afe_aspect">
              <div id="ifr_69c5a3b796fd2c2d9b236afe" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
            </div>
          </div>
        </div>

        <div className="atr-badge">
          <span className="atr-badge-dot"></span>
          <span className="atr-badge-text">Disponível agora</span>
        </div>

        <p className="atr-info-text">
          Assista a <strong>apresentação exclusiva</strong><br />neste momento
        </p>

        <Link to="/azeitetrr" className="atr-cta-link">
          <span className="atr-play-icon">▶</span>
          ASSISTIR AGORA
        </Link>
      </div>

      <footer className="atr-footer">
        <nav className="atr-footer-nav">
          <Link to="/privacidade">Privacidade</Link>
          <span className="atr-sep">·</span>
          <Link to="/termos">Termos</Link>
          <span className="atr-sep">·</span>
          <Link to="/termos">Legal</Link>
        </nav>
      </footer>
    </div>
  );
};

export default AzeiteTR;
