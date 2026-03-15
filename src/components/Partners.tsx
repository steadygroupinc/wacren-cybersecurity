"use client";
import React, { useEffect, useRef } from 'react';

const partnerData = [
  "WACREN",
  "TrustBroker Africa",
  "Open CSIRT Foundation",
  "AfricaConnect / Global Gateway"
];

export default function Partners() {
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
    <section id="partners" ref={sectionRef}>
      <style jsx>{`
        #partners {
          max-width: 1100px; margin: 0 auto; text-align: center;
          padding: 5rem 2.5rem; background: var(--surface);
          border-top: 1px solid var(--border);
        }
        
        .section-label {
          font-family: var(--mono); font-size: 0.68rem;
          color: var(--grey); letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem;
          justify-content: center;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px; background: var(--grey);
          max-width: 3rem; opacity: 0.3;
        }

        h2 {
          font-family: var(--sans); font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 800; color: var(--text); line-height: 1.12;
          letter-spacing: -0.02em; margin-bottom: 1.5rem;
        }

        .partners-row {
          display: flex; justify-content: center; align-items: center;
          gap: 2.5rem; flex-wrap: wrap; margin-top: 2.5rem;
        }
        .partner-badge {
          border: 1px solid var(--border);
          background: var(--card);
          padding: 1rem 2rem;
          font-family: var(--mono); font-size: 0.72rem;
          color: var(--grey); letter-spacing: 0.1em; text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 8px rgba(26,44,70,0.06);
        }
        .partner-badge:hover { border-color: var(--teal); color: var(--teal); box-shadow: 0 4px 16px rgba(26,85,232,0.10); }
      `}</style>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label reveal">Ecosystem</div>
        <h2 className="reveal">Partners</h2>
        <div className="partners-row reveal">
          {partnerData.map((partner, index) => (
            <div key={index} className="partner-badge">{partner}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
