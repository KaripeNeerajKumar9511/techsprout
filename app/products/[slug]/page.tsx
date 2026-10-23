import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getProduct, products } from "@/content/source-products";
import ProductLogo from "@/components/ProductLogo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: p.metaTitle, description: p.metaDescription, images: [p.heroImage] },
  };
}

const clean = (s: string) => s.replace(/:$/, "");

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const index = products.findIndex((x) => x.slug === p.slug);

  return (
    <>
      <section className="product-editorial-hero">
        <div className="container product-editorial-grid">
          <div className="product-editorial-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / <Link href="/products">Products &amp; Solutions</Link> / {p.name}
            </div>
            <span className="product-category-label">
              <i />
              Techsprout product
            </span>
            <h1>{p.name}</h1>
            <p className="product-tagline-large">{p.tagline}</p>
            <p className="product-intro">{p.summary}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={p.cta.href}>
                {p.cta.label} <ArrowUpRight size={16} />
              </Link>
              <Link className="button button-secondary" href="/products">
                Explore all products
              </Link>
            </div>
          </div>
          <div className="product-logo-stage">
            <div className="product-artboard-top">
              <span>TECHSPROUT / PRODUCT</span>
              <span>0{index + 1}</span>
            </div>
            <ProductLogo src={p.logo} alt={`${p.name} logo`} surface={p.logoSurface} size="lg" />
            <p>{p.h1}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-media">
          <div>
            <span className="eyebrow">{p.solutions.eyebrow}</span>
            <h2>{p.solutions.title}</h2>
            <p className="source-copy-paragraph">{p.solutions.text}</p>
          </div>
          <figure className="media-frame">
            <Image src={p.solutions.image} alt="" width={900} height={640} sizes="(max-width: 760px) 100vw, 46vw" />
          </figure>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">{p.can.eyebrow}</span>
            <h2>{clean(p.can.title)}</h2>
          </div>
          <div className="split-media split-media-reverse">
            <figure className="media-frame">
              <Image src={p.can.image} alt="" width={900} height={640} sizes="(max-width: 760px) 100vw, 46vw" />
            </figure>
            <div className="product-feature-grid product-feature-grid-stack">
              {p.can.items.map((item, i) => (
                <article className="product-feature-card" key={item.title}>
                  <span className="product-feature-number">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{clean(item.title)}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-media">
          <div>
            <span className="eyebrow">{p.special.eyebrow}</span>
            <h2>{clean(p.special.title)}</h2>
            <p className="source-copy-paragraph">{p.special.poweredText}</p>
            <p className="product-powered-label">{p.special.poweredTitle}</p>
            <ul className="product-benefit-list">
              {p.special.items.map((item, i) => (
                <li className="product-benefit" key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                  <CheckCircle2 size={18} />
                </li>
              ))}
            </ul>
          </div>
          <figure className="media-frame">
            <Image src={p.special.image} alt="" width={900} height={640} sizes="(max-width: 760px) 100vw, 46vw" />
          </figure>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">{p.whom.eyebrow}</span>
            <h2>{p.whom.title}</h2>
          </div>
          <div className="audience-grid">
            {p.whom.items.map((item, i) => (
              <article key={`${item.lead || "audience"}-${i}`}>
                <span>0{i + 1}</span>
                {item.lead ? <h3>{item.lead}</h3> : null}
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>{p.cta.title}</h2>
              <p>{p.metaDescription}</p>
            </div>
            <Link className="button" href={p.cta.href}>
              {p.cta.label} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
