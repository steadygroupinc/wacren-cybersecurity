import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main>
      <Navigation />
      
      <section className="not-found-section">
        <div className="error-code">404</div>
        
        <h1 className="not-found-title">Resource Not Found</h1>
        
        <p className="not-found-description">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="cta-container">
          <Link href="/" className="btn-home">
            <Home size={18} />
            Return Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
