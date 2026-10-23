import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/source-site';

export const metadata: Metadata = {
  title: 'Terms & conditions',
  description: 'Terms for using the Techsprout AI Labs website.',
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return (
    <section className="page-hero">
      <div className="container legal-content">
        <div className="breadcrumbs"><Link href="/">Home</Link> / Terms &amp; conditions</div>
        <span className="eyebrow">LEGAL</span>
        <h1>Terms &amp; conditions</h1>
        <p>By using this website you agree to these terms. The site is operated by Techsprout AI Labs.</p>
        <h2>Using the site</h2>
        <p>The pages describe our services, products, and open roles. They are general information, not a binding offer. A project, purchase, or hire only starts when both sides agree in writing.</p>
        <h2>Content</h2>
        <p>Text, logos, and images on this site belong to Techsprout AI Labs or to the product brands shown. Please do not copy them for another business without permission. Product names such as Trooba, Splash AI Studios, Postmngr, StartupSaga, and SkillVedika refer to those products.</p>
        <h2>Enquiries</h2>
        <p>Messages you send through the site or by email should be accurate. We use them only to respond. Delivery depends on your email app or the form service configured for this deployment.</p>
        <h2>Contact</h2>
        <p>Questions about these terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div>
    </section>
  );
}
