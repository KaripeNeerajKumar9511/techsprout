import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { site } from '@/content/source-site';
import { services, footerServiceOrder } from '@/content/source-services';
import { products } from '@/content/source-products';

function SocialIcon({ label }: { label: string }) {
  if (label === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M6.5 9H4V20h2.5V9ZM5.25 4A1.5 1.5 0 1 0 5.26 7a1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.6c0-1.55-.55-2.6-1.93-2.6-1.05 0-1.68.7-1.96 1.38-.1.24-.12.58-.12.92V20H11s.04-9.5 0-10.5h2.5v1.49c.33-.51 1.22-1.74 2.97-1.74C18.7 9.25 20 10.64 20 13.86V20Z" />
      </svg>
    );
  }
  if (label === 'X') {
    return (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
        <path d="M14.7 10.3 21.4 3h-1.6l-5.8 6.4L9.2 3H3.4l7 10.1L3.4 21h1.6l6.2-6.8 4.9 6.8h5.8l-7.2-10.7Zm-2.2 2.4-.7-1-5.7-8h2.4l4.6 6.5.7 1 6 8.4h-2.4l-4.9-6.9Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.2-1.3H17V3h-1.8C12.9 3 12 4.2 12 6.4v2.1H10v2.6h2V21h2.5v-9.9h2.1l.4-2.6h-2.5Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/"><Image src="/images/foot-logo.svg" alt="Techsprout" width={165} height={42} /></Link>
          <p>{site.footerBlurb}</p>
          <Link href="/contact-us" className="footer-cta">Let’s build the future <ArrowUpRight size={16} /></Link>
        </div>
        <div className="footer-column">
          <h4>Explore</h4>
          <Link href="/about-us">About us</Link>
          <Link href="/services">Our services</Link>
          <Link href="/products">Products & solutions</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/blogs">Blog</Link>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          {footerServiceOrder.map((slug) => services.find((s) => s.slug === slug)).filter((s): s is (typeof services)[number] => Boolean(s)).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>{s.footerLabel}</Link>
          ))}
        </div>
        <div className="footer-column">
          <h4>Products</h4>
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`}>{p.name}</Link>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <h4>Contact</h4>
          <a href={`mailto:${site.email}`}><Mail size={16} />{site.email}</a>
          <a href="tel:+918790900881"><Phone size={16} />{site.india.phone}</a>
          <p><MapPin size={16} />Hyderabad, Telangana, India</p>
          <div className="footer-social">
            {site.social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                <SocialIcon label={item.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Techsprout AI Labs. All rights reserved.</span>
        <div><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms &amp; conditions</Link></div>
      </div>
    </footer>
  );
}
