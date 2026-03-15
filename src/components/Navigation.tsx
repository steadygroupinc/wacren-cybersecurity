"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <>
    <header className="header-sticky">
      <style jsx global>{`
        .header-sticky {
          position: fixed !important;
          top: 0 !important;
          left: 0;
          right: 0;
          z-index: 2000 !important;
          width: 100%;
          background: #fff;
        }
        .top-bar {
          background: #1c2c46 !important;
          width: 100%;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
        .top-bar-content {
          padding: 0.5rem 1.5rem;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100%;
        }
        .top-bar span {
          font-family: var(--mono);
          font-size: 0.58rem;
          color: #c8d3e8 !important;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1.4;
          text-align: center;
          display: inline-block;
        }
        .top-bar a {
          color: #ffffff !important;
          text-decoration: none !important;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          margin-left: 0.4rem;
        }

        .nav-container {
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          padding: 0.8rem 2.5rem;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(28,44,70,0.05);
        }
        
        .nav-logo {
          font-family: var(--mono); font-size: 0.7rem; color: #008080 !important;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none !important;
        }
        .nav-logo span { color: #1c2c46 !important; }
        
        .nav-links { 
          display: flex; gap: 2rem; list-style: none; align-items: center;
        }
        
        .nav-links li a {
          font-family: var(--mono); font-size: 0.68rem; color: #64748b;
          text-decoration: none; letter-spacing: 0.08em; text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-links li a:hover { color: #008080; }
        
        .nav-cta {
          font-family: var(--mono); font-size: 0.68rem;
          background: #008080; color: #fff;
          border: none; padding: 0.5rem 1.2rem; cursor: pointer;
          letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700;
          text-decoration: none;
        }

        .mobile-toggle {
          display: none;
          background: none; border: none; color: #1c2c46;
          cursor: pointer;
        }

        .mobile-cta { display: none; }

        @media (max-width: 900px) {
          .nav-container { padding: 0.7rem 1.5rem; }
          .mobile-toggle { display: flex; }
          
          .nav-links {
            position: fixed; 
            top: 5.5rem; 
            right: 1.5rem; 
            left: 1.5rem;
            background: #fff;
            flex-direction: column; 
            justify-content: flex-start; 
            align-items: flex-start;
            padding: 2.22rem 1.5rem;
            border-radius: 20px;
            box-shadow: 0 20px 80px rgba(0,0,0,0.2);
            border: 1px solid rgba(0,0,0,0.08);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-20px);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 1050;
            gap: 0.6rem;
          }

          .nav-links li { 
            width: 100%; 
            padding: 0.15rem 0;
            list-style: none;
          }
          
          .nav-links li a { 
            font-size: 0.72rem !important; 
            font-family: var(--sans) !important; 
            font-weight: 800 !important;
            color: #0055b8 !important;
            letter-spacing: 0.02em !important; 
            text-transform: uppercase !important;
            width: 100% !important;
            display: block !important;
            text-decoration: none !important;
          }

          .nav-links li:nth-child(2) {
            border-bottom: 2px solid #f0f3f8;
            padding-bottom: 0.6rem;
            margin-bottom: 0.2rem;
          }

          .mobile-cta {
            display: block !important;
            width: 100%;
            background: #e67e22 !important;
            color: #ffffff !important;
            text-align: center;
            padding: 0.85rem;
            border-radius: 12px;
            font-family: var(--sans);
            font-weight: 800;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            text-decoration: none !important;
            margin-top: 0.4rem;
          }
          
          .nav-cta { display: none; }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-content">
          <span>
            Part of the TrustBroker Africa Ecosystem &nbsp;·&nbsp;
            <a href="https://trustbroker.africa" target="_blank" rel="noopener noreferrer">trustbroker.africa ↗</a>
          </span>
        </div>
      </div>

      {/* NAV */}
      <nav className="nav-container">
        
        <Link href="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
          WACREN · <span>Cybersecurity & Trust</span>
        </Link>
        
        <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <li><Link href="/#why" onClick={() => setIsMenuOpen(false)}>Why It Matters</Link></li>
          <li><Link href="/#components" onClick={() => setIsMenuOpen(false)}>Components</Link></li>
          <li><Link href="/#milestones" onClick={() => setIsMenuOpen(false)}>Milestones</Link></li>
          <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <a href="https://trustbroker.africa" className="mobile-cta">TrustBroker Africa</a>
        </ul>

        <a href="https://trustbroker.africa" className="nav-cta">
          TrustBroker Africa <ArrowRight size={14} />
        </a>
        
        <button className="mobile-toggle" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </header>
    </>
  );
}
