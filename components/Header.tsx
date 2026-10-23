'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { products } from '@/content/source-products';
import ProductLogo from '@/components/ProductLogo';
import { services, navServiceOrder } from '@/content/source-services';

const desktopNav = () =>
  typeof window !== 'undefined' && window.matchMedia('(min-width: 761px) and (hover: hover) and (pointer: fine)').matches;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<'products' | 'services' | null>(null);

  const closeAll = () => {
    setMega(null);
    setOpen(false);
  };

  const toggleMega = (key: 'products' | 'services') => {
    setMega((current) => (current === key ? null : key));
  };

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Techsprout home" onClick={closeAll}>
          <Image src="/images/logo.svg" alt="Techsprout" width={165} height={42} priority />
        </Link>
        <button
          className="mobile-toggle"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => {
            setOpen((value) => !value);
            setMega(null);
          }}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={`main-nav ${open ? 'nav-open' : ''}`}>
          <Link href="/" onClick={closeAll}>Home</Link>
          <Link href="/about-us" onClick={closeAll}>About us</Link>
          <div
            className="nav-dropdown"
            onMouseEnter={() => { if (desktopNav()) setMega('services'); }}
            onMouseLeave={() => { if (desktopNav()) setMega(null); }}
          >
            <button type="button" onClick={() => toggleMega('services')} aria-expanded={mega === 'services'}>
              Services <ChevronDown size={15} className={mega === 'services' ? 'chevron-open' : ''} />
            </button>
            {mega === 'services' && (
              <div className="mega-menu">
                <div className="mega-intro">
                  <span className="eyebrow">WHAT WE DO</span>
                  <h3>Build smarter. Grow faster.</h3>
                  <p>AI-first services designed around real business outcomes.</p>
                  <Link href="/services" className="text-link" onClick={closeAll}>Explore all services <ArrowUpRight size={15} /></Link>
                </div>
                <div className="mega-links">
                  {navServiceOrder.map((slug) => services.find((s) => s.slug === slug)).filter((s): s is (typeof services)[number] => Boolean(s)).map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={closeAll}>{s.cardTitle}<ArrowUpRight size={14} /></Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div
            className="nav-dropdown"
            onMouseEnter={() => { if (desktopNav()) setMega('products'); }}
            onMouseLeave={() => { if (desktopNav()) setMega(null); }}
          >
            <button type="button" onClick={() => toggleMega('products')} aria-expanded={mega === 'products'}>
              Products <ChevronDown size={15} className={mega === 'products' ? 'chevron-open' : ''} />
            </button>
            {mega === 'products' && (
              <div className="mega-menu product-mega">
                <div className="mega-intro">
                  <span className="eyebrow">OUR PORTFOLIO</span>
                  <h3>Ideas built into products.</h3>
                  <p>Explore the platforms we’re growing across different industries.</p>
                  <Link href="/products" className="text-link" onClick={closeAll}>View all products <ArrowUpRight size={15} /></Link>
                </div>
                <div className="mega-links">
                  {products.map((p) => (
                    <Link key={p.slug} href={`/products/${p.slug}`} onClick={closeAll}>
                      <ProductLogo src={p.logo} alt="" surface={p.logoSurface} size="sm" />
                      {p.name}
                      <ArrowUpRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/careers" onClick={closeAll}>Careers</Link>
          <Link href="/blogs" onClick={closeAll}>Blog</Link>
          <Link href="/contact-us" className="nav-cta" onClick={closeAll}>Let’s talk <ArrowUpRight size={16} /></Link>
        </nav>
      </div>
    </header>
  );
}
