import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/source-site';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Techsprout AI Labs handles information shared through this website.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicy() {
  return (
    <section className="page-hero">
      <div className="container legal-content">
        <div className="breadcrumbs"><Link href="/">Home</Link> / Privacy policy</div>
        <span className="eyebrow">LEGAL</span>
        <h1>Privacy policy</h1>
        <p>This page explains what Techsprout AI Labs does with information you share on {site.url.replace('https://', '')}.</p>
        <h2>What we collect</h2>
        <p>If you email us or use a contact or careers form, we receive the details you choose to send: your name, email address, phone number, company, and message. We do not ask for account passwords on this website.</p>
        <h2>How we use it</h2>
        <p>We use that information to reply to your enquiry, consider a job application, and follow up about services or products you asked about. We do not sell personal information.</p>
        <h2>How long we keep it</h2>
        <p>We keep enquiry and application messages for as long as we need them to respond and to keep a record of the conversation, then delete them when they are no longer needed.</p>
        <h2>Contact</h2>
        <p>Questions about this policy can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>. India office: {site.india.address}.</p>
      </div>
    </section>
  );
}
