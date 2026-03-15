"use client";

export default function Hero() {
  return (
    <section id="hero">
      <style jsx>{`
        #hero {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 10rem 2.5rem 6rem;
          position: relative;
          overflow: hidden;
          background: var(--hero-bg);
          max-width: 100%;
        }

        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 60% 60% at 80% 40%, rgba(26,85,232,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 80%, rgba(77,134,255,0.10) 0%, transparent 60%);
        }

        .grid-overlay {
          position: absolute; inset: 0; z-index: 0; opacity: 0.07;
          background-image:
            linear-gradient(var(--teal) 1px, transparent 1px),
            linear-gradient(90deg, var(--teal) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }

        .hero-content { position: relative; z-index: 1; max-width: 700px; }

        .hero-eyebrow {
          font-family: var(--mono); font-size: 0.72rem;
          color: #4d86ff; letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .hero-eyebrow::before {
          content: ''; display: block;
          width: 2rem; height: 1px; background: #4d86ff;
        }

        h1 {
          font-family: var(--sans); font-size: clamp(2.6rem, 5vw, 4.4rem);
          font-weight: 800; color: #e8f0ff; line-height: 1.06;
          margin-bottom: 1.5rem; letter-spacing: -0.03em;
        }
        h1 em {
          font-style: normal; color: #4d86ff;
          display: block;
        }

        .hero-subtitle {
          font-size: 1.1rem; color: #8aaad0; max-width: 600px;
          margin-bottom: 2.5rem; line-height: 1.8;
        }

        .btn-group { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
          font-family: var(--mono); font-size: 0.78rem;
          background: #1e6eff; color: #fff;
          border: none; padding: 0.9rem 1.8rem; cursor: pointer;
          letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none; display: inline-block;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(30,110,255,0.35);
        }
        .btn-secondary {
          font-family: var(--mono); font-size: 0.78rem;
          background: transparent; color: #c8daee;
          border: 1px solid #2a4278; padding: 0.9rem 1.8rem; cursor: pointer;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s;
          text-decoration: none; display: inline-block;
        }
        .btn-secondary:hover { border-color: #4d86ff; color: #4d86ff; }

        @media (max-width: 900px) {
          #hero { 
            padding-top: 8rem; 
            padding-bottom: 4rem;
            align-items: center;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-eyebrow {
            justify-content: center;
            margin-bottom: 1rem;
          }
          .hero-eyebrow::before { display: none; }
          .hero-eyebrow::after {
            content: ''; display: block;
            width: 1.5rem; height: 1px; background: #4d86ff;
            margin-left: 0.75rem;
          }
          h1 {
            font-size: 2.4rem;
            margin-bottom: 1rem;
          }
          .hero-subtitle {
            font-size: 0.95rem;
            margin-bottom: 2rem;
          }
          .btn-group {
            justify-content: center;
            gap: 0.75rem;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            padding: 0.8rem 1.2rem;
            font-size: 0.7rem;
          }
        }
      `}</style>

      <div className="hero-bg"></div>
      <div className="grid-overlay"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">Programme Overview</div>
        <h1>
          WACREN Cybersecurity
          <em>& Trust Programme</em>
        </h1>
        <p className="hero-subtitle">
          Building Africa's Cybersecurity Trust Infrastructure for Research and Education — connecting trusted communities, training initiatives, operational incident response teams, and sectoral threat intelligence.
        </p>
        <div className="btn-group">
          <a href="https://trustbroker.africa" className="btn-primary">Explore TrustBroker Africa ↗</a>
          <a href="#overview" className="btn-secondary">Learn about the Programme</a>
        </div>
      </div>
    </section>
  );
}
