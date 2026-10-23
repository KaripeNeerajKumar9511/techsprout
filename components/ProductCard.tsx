import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { products } from "@/content/source-products";
import ProductLogo from "@/components/ProductLogo";

type Product = (typeof products)[number];

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article className="product-card">
      <ProductLogo src={product.logo} alt="" surface={product.logoSurface} />
      <div className="product-card-copy">
        <div className="product-card-meta">
          <span className="product-category">Product &amp; Solution</span>
          <span className="card-index">0{index + 1}</span>
        </div>
        <h3>{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-blurb">{product.summary}</p>
      </div>
      <Link className="text-link" href={`/products/${product.slug}`}>
        Explore {product.name} <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
