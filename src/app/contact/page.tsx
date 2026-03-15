"use client";
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const phone = "030 294 2873";
  const email = "cybersecurity@wacren.net";

  return (
    <main>
      <Navigation />
      
      <section className="contact-section">
        <style jsx>{`
          .contact-section {
            padding: 10rem 2.5rem 6rem;
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            min-height: 80vh;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          h1 {
            font-family: var(--sans);
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            font-weight: 800;
            color: var(--text);
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }

          .subtitle {
            font-size: 1.1rem;
            color: var(--muted);
            max-width: 450px;
            line-height: 1.6;
            margin-bottom: 2rem;
          }

          .info-group {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .info-item {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }

          .info-item label {
            font-family: var(--mono);
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--text);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .info-item span, .info-item a {
            font-size: 0.95rem;
            color: var(--muted);
            text-decoration: none;
          }

          .location-title {
            font-family: var(--sans);
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--teal);
            margin-bottom: 0.5rem;
          }

          .contact-form-container {
            background: #fff;
            padding: 3rem;
            border: 1px solid var(--border);
            box-shadow: 0 4px 24px rgba(0,0,0,0.03);
          }

          .form-grid {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .form-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .form-field label {
            font-family: var(--mono);
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--text);
            letter-spacing: 0.02em;
          }

          input, textarea {
            padding: 0.8rem 1rem;
            border: 1px solid var(--border);
            border-radius: 0;
            font-family: inherit;
            font-size: 0.95rem;
            color: var(--text);
            transition: border-color 0.2s;
          }

          input:focus, textarea:focus {
            outline: none;
            border-color: var(--teal);
          }

          .btn-submit {
            margin-top: 1rem;
            font-family: var(--mono);
            font-size: 0.85rem;
            font-weight: 700;
            background: var(--teal);
            color: #fff;
            border: none;
            padding: 1rem 2rem;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            transition: opacity 0.2s;
          }

          .btn-submit:hover {
            opacity: 0.9;
          }

          @media (max-width: 900px) {
            .contact-section {
              grid-template-columns: 1fr;
              padding: 7rem 1.5rem 4rem;
              gap: 2.5rem;
              text-align: center;
            }
            .subtitle {
              margin: 0 auto 2rem;
            }
            .info-group {
              align-items: center;
              text-align: center;
            }
            .contact-form-container {
              padding: 1.5rem;
            }
          }
        `}</style>

        <div className="contact-info">
          <h1>Get in touch</h1>
          <p className="subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="info-group">
            <div className="location">
              <div className="location-title">Accra, Ghana</div>
              <div className="info-item">
                <span>West and Central African Research and Education Network</span>
              </div>
            </div>

            <div className="info-item">
              <label>Address</label>
              <a href="https://www.google.com/maps?sca_esv=df890eccffbfa804&aep=1&prmd=ivns&sxsrf=ANbL-n6VizXt2phx2HBO7wpgIw0HEcgfPA:1773331859691&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-R5R-93bnJN-gfJetFY0A5M6NANLPFEQzj1dcFq3LKKBXHVoOgyWf6JqUwGOohIri1ZbKlIdZIYLCoWCcgdvvLUCGHg9yRK_YDxJ9L6Z2ZB_2aQaHCOnhTyYCnPFqsoOfSnoVwLX5ZQJDHa7zyZ3qmdVvO99Q&biw=1536&bih=742&dpr=1.25&um=1&ie=UTF-8&fb=1&gl=gh&sa=X&geocode=KZfUp8nwm98PMY5U-qS4GZJg&daddr=VCG+Office+Complex,+IPS+Rd,+Accra" target="_blank" rel="noopener noreferrer">
                VCG Office Complex, IPS Rd, Accra
              </a>
            </div>

            <div className="info-item">
              <label>Phone</label>
              {showPhone ? (
                <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              ) : (
                <button 
                  onClick={() => setShowPhone(true)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    padding: 0, 
                    font: 'inherit', 
                    color: 'var(--teal)', 
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textAlign: 'left'
                  }}
                >
                  Click to view phone
                </button>
              )}
            </div>

            <div className="info-item">
              <label>Email</label>
              {showEmail ? (
                <a href={`mailto:${email}`}>{email}</a>
              ) : (
                <button 
                  onClick={() => setShowEmail(true)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    padding: 0, 
                    font: 'inherit', 
                    color: 'var(--teal)', 
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textAlign: 'left'
                  }}
                >
                  Click to reveal email
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
            <div className="form-field">
              <label>Name</label>
              <input type="text" placeholder="Jane Smith" required />
            </div>

            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="jane@company.com" required />
            </div>

            <div className="form-field">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 (555) 555-1234" />
            </div>

            <div className="form-field">
              <label>Company Name</label>
              <input type="text" placeholder="Your Company" />
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea rows={4} placeholder="Tell us about your project or how we can help you..." required></textarea>
            </div>

            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
