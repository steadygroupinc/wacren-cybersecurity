"use client";
import React, { useEffect, useRef } from 'react';

export default function GetInvolved() {
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
    <section id="get-involved" ref={sectionRef}>
      <style jsx>{`
        #get-involved {
          text-align: center;
          background: #1a2d52;
          padding: 6rem 2.5rem;
        }
        .involved-inner { max-width: 640px; margin: 0 auto; }
        
        .section-label {
          font-family: var(--mono); font-size: 0.68rem;
          color: #4d86ff; letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem;
          justify-content: center;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px; background: #2a3e6a;
          max-width: 3rem;
        }

        h2 {
          font-family: var(--sans); font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 800; color: #e8f0ff; line-height: 1.12;
          letter-spacing: -0.02em; margin-bottom: 1.5rem;
        }

        #get-involved p {
          color: #8aaad0; margin-bottom: 2rem; font-size: 1rem; line-height: 1.8;
        }
        
        .involved-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        
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
      `}</style>
      <div className="involved-inner">
        <div className="section-label reveal">Participate</div>
        <h2 className="reveal">Get Involved</h2>
        <p className="reveal">Cybersecurity professionals, research networks, and institutions can participate in the programme through the TrustBroker Africa community.</p>
        <div className="involved-btns reveal">
          <a href="https://trustbroker.africa" target="_blank" rel="noopener noreferrer" className="btn-primary">Join the Community ↗</a>
          <a href="#milestones" className="btn-secondary">Participate in Training</a>
          <a href="/contact" className="btn-secondary">Contact the Programme Team</a>
        </div>
      </div>
    </section>
  );
}
