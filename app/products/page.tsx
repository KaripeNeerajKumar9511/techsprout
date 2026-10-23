import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import { products } from '@/content/source-products';
export const metadata: Metadata = { title: 'Products & Solutions', description: 'Explore Techsprout AI Labs products and solutions: Trooba, Splash AI Studios, Postmngr, StartupSaga, and SkillVedika.' };
export default function ProductsPage(){return <><section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link> / Products &amp; Solutions</div><span className="eyebrow">VIEW OUR</span><h1>Product &amp; Solutions.</h1><p>Explore the Techsprout AI Labs product and solution portfolio.</p></div></section><section className="section"><div className="container"><SectionHeading eyebrow="PRODUCT & SOLUTIONS" title="Our products and solutions" description="Explore the products and solutions featured on the Techsprout.ai website."/><div className="product-grid">{products.map((p,i)=><ProductCard key={p.slug} product={p} index={i}/>)}</div></div></section><section className="section-sm"><div className="container"><div className="cta-band"><div><h2>Let’s Build the Future Together</h2><p>We're eager to hear from you. Whether you have a project in mind, a question about our services, or just want to connect, reach out to the Techsprout team.</p></div><Link className="button" href="/contact-us">Contact With Us <ArrowUpRight size={16}/></Link></div></div></section></>}
