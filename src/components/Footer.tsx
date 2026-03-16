"use client";
import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/west-and-central-african-research-and-education-network/',
      icon: <Linkedin size={18} />
    },
    { 
      name: 'BlueSky', 
      url: 'https://bsky.app/profile/wacren.bsky.social',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.8c-1.321-1.196-3.376-1.196-4.697 0-1.321 1.196-1.321 3.328 0 4.524a3.178 3.178 0 0 0 .91.643l-.91 3.11h6.694l-.91-3.11a3.178 3.178 0 0 0 .91-.643c1.321-1.196 1.321-3.328 0-4.524Z" />
          <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" />
        </svg>
      )
    },
    { 
      name: 'Mastodon', 
      url: 'https://mastodon.social/@wacren',
      icon: (
        <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
          <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z"/>
        </svg>
      )
    },
    { 
      name: 'X', 
      url: 'https://twitter.com/wacren',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

  return (
    <footer>
      <style jsx>{`
        footer {
          background: #002d5c;
          border-top: 3px solid var(--amber);
          padding: 4rem 2.5rem 2rem;
          color: #ffffff;
        }
        .footer-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 3rem; flex-wrap: wrap;
        }
        .footer-brand { flex: 1; min-width: 280px; }
        .nav-logo {
          font-family: var(--mono); font-size: 0.8rem; color: #7ab4ff !important;
          letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 1rem; display: block;
        }
        .nav-logo span { color: #ffffff !important; }
        
        .footer-brand p {
          font-size: 0.82rem; color: #c8d3e8; max-width: 360px; line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .social-links { display: flex; gap: 0.75rem; margin-top: 1.5rem; }
        .social-link {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(122, 180, 255, 0.2); border-radius: 8px;
          color: #c8d3e8; transition: all 0.2s ease; text-decoration: none;
        }
        .social-link:hover {
          background: rgba(122, 180, 255, 0.1); border-color: #7ab4ff;
          color: #ffffff; transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 74, 153, 0.25);
        }
        
        .footer-links { min-width: 140px; }
        .footer-links h4 {
          font-family: var(--mono); font-size: 0.68rem;
          color: var(--amber); letter-spacing: 0.15em; text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .footer-links ul { list-style: none; padding: 0; }
        .footer-links li { margin-bottom: 0.6rem; }
        .footer-links :global(a) {
          font-size: 0.82rem; color: #e2e8f0 !important; text-decoration: none;
          transition: all 0.2s;
        }
        .footer-links :global(a:hover) { color: var(--amber) !important; }
        
        .footer-logos {
          max-width: 1100px; margin: 4rem auto 2rem;
          padding-top: 3rem; border-top: 1px solid rgba(255,255,255,0.1);
          display: flex; justify-content: center; align-items: center;
          gap: 3rem; flex-wrap: wrap;
        }
        .logo-placeholder {
          font-family: var(--mono); font-size: 0.6rem; color: #a0aec0;
          letter-spacing: 0.1em; text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.08); padding: 0.8rem 1.75rem;
          background: rgba(255, 255, 255, 0.02);
        }

        .footer-bottom {
          max-width: 1100px; margin: 0 auto;
          padding: 2rem 0; border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; justify-content: space-between; align-items: center;
          font-family: var(--mono); font-size: 0.65rem; color: #718096;
          letter-spacing: 0.05em; gap: 2rem;
        }
        .footer-bottom div:last-child { max-width: 600px; text-align: right; line-height: 1.6; }

        @media (max-width: 900px) {
          footer { padding: 4rem 1.5rem 2rem; }
          .footer-inner { flex-direction: column; gap: 2.5rem; }
          .footer-brand { text-align: center; }
          .footer-brand p { margin: 0 auto 1.5rem; }
          .social-links { justify-content: center; }
          .footer-links { text-align: center; width: 100%; }
          .footer-logos { gap: 1.5rem; margin: 3rem auto 1.5rem; padding-top: 2rem; }
          .footer-bottom { flex-direction: column; text-align: center; gap: 1.5rem; }
          .footer-bottom div:last-child { text-align: center; max-width: 100%; }
        }
      `}</style>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="nav-logo">WACREN · <span>Cybersecurity &amp; Trust</span></span>
          <p>Building Africa's Cybersecurity Trust Infrastructure through trusted communities, cybersecurity training initiatives, operational incident response teams, and sectoral threat intelligence capabilities.</p>
          
          <div className="social-links">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          <h4>Programme</h4>
          <ul>
            <li><a href="https://trustbroker.africa" target="_blank" rel="noopener noreferrer">TrustBroker Africa</a></li>
            <li><a href="#milestones">Training Resources</a></li>
            <li><a href="#components">WACREN ISAC</a></li>
            <li><a href="#components">CyberBastion League</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Events</h4>
          <ul>
            <li><a href="https://wacren2026.wacren.net/" target="_blank" rel="noopener noreferrer">WACREN Conference 2026</a></li>
            <li><a href="#milestones">TrustBroker Africa Event</a></li>
            <li><a href="#milestones">Community Calendar</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://trustbroker.africa" target="_blank" rel="noopener noreferrer">Join the Community</a></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 WACREN. All Rights Reserved.</div>
        <div className="support-text">The WACREN Cybersecurity Program is supported by the AfricaConnect Project co-funded by the European Union through the Global Gateway Program.</div>
      </div>
      <style jsx>{`

        .footer-bottom {
          max-width: 1100px; margin: 0 auto;
          padding: 2.5rem 0; border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; justify-content: space-between; align-items: center;
          font-family: var(--mono); font-size: 0.65rem; color: #718096;
          letter-spacing: 0.05em; gap: 3rem;
        }
        .support-text { max-width: 600px; text-align: right; line-height: 1.7; }

        @media (max-width: 900px) {
          .footer-bottom { flex-direction: column; text-align: center; gap: 1.5rem; padding: 2.5rem 1.25rem; }
          .support-text { text-align: center; max-width: 100%; }
        }
      `}</style>
    </footer>
  );
}
