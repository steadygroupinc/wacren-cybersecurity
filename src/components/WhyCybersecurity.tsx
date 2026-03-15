"use client";
import React, { useEffect, useRef } from 'react';
import { Globe, AlertTriangle, Shield } from 'lucide-react';

export default function WhyCybersecurity() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" ref={sectionRef}>
      <style jsx>{`
        #why {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 6rem 2.5rem;
        }
        .why-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 3rem; align-items: center;
          max-width: 1100px; margin: 0 auto;
        }
        .section-label {
          font-family: var(--mono); font-size: 0.68rem;
          color: var(--teal); letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px; background: var(--border);
          max-width: 3rem;
        }
        .section-label.grey { color: var(--grey); }
        .section-label.grey::after { background: var(--grey); opacity: 0.3; }
        
        h2 {
          font-family: var(--sans); font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 800; color: var(--text); line-height: 1.12;
          letter-spacing: -0.02em; margin-bottom: 1.5rem;
        }

        .why-text p {
          color: var(--muted); margin-bottom: 1rem; line-height: 1.8;
        }
        .stat-stack {
          display: flex; flex-direction: column; gap: 1rem;
        }
        .stat-card {
          border: 1px solid var(--border); padding: 1.25rem 1.5rem;
          display: flex; align-items: flex-start; gap: 1rem;
          background: var(--card);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .stat-card:hover { border-color: var(--teal); box-shadow: 0 4px 18px rgba(26,85,232,0.08); }
        .stat-icon {
          width: 2.5rem; height: 2.5rem; flex-shrink: 0;
          border: 1px solid var(--grey); color: var(--grey);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
        }
        .stat-text strong {
          font-family: var(--mono); font-size: 0.72rem;
          color: var(--text); display: block; margin-bottom: 0.25rem;
          letter-spacing: 0.04em;
        }
        .stat-text span { font-size: 0.85rem; color: var(--muted); }

        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="why-grid">
        <div className="why-text reveal">
          <div className="section-label grey">Context</div>
          <h2>Why Cybersecurity Matters for Research &amp; Education Networks</h2>
          <p>Research and education networks across Africa are expanding rapidly, connecting universities, research institutes, digital libraries, and digital learning platforms.</p>
          <p>As digital infrastructure grows, cybersecurity threats targeting academic networks and research systems are also increasing.</p>
          <p>Protecting these environments requires trusted collaboration, cybersecurity skills development, coordinated incident response capabilities, and sectoral threat intelligence.</p>
        </div>
        <div className="stat-stack reveal">
          <div className="stat-card">
            <div className="stat-icon"><Globe size={20} /></div>
            <div className="stat-text">
              <strong>Expanding Networks</strong>
              <span>Universities, research institutes, and digital libraries connecting across the continent</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><AlertTriangle size={20} /></div>
            <div className="stat-text">
              <strong>Rising Threats</strong>
              <span>Academic networks face increasing cybersecurity incidents requiring coordinated response</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Shield size={20} /></div>
            <div className="stat-text">
              <strong>Trusted Collaboration</strong>
              <span>Building operational trust between teams protecting research &amp; education infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
