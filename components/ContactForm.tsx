'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { site } from '@/content/source-site';

function field(data: FormData, key: string) {
  return String(data.get(key) ?? '').trim();
}

export default function ContactForm({ mode = 'contact' }: { mode?: 'contact' | 'career' }) {
  const [sent, setSent] = useState<'endpoint' | 'email' | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

    if (endpoint) {
      fetch(endpoint, { method: 'POST', body: data })
        .then((response) => {
          if (!response.ok) throw new Error('Request failed');
          setSent('endpoint');
          form.reset();
        })
        .catch(() => setError(`We could not deliver that message. Please email ${site.email} directly.`))
        .finally(() => setBusy(false));
      return;
    }

    const name = field(data, 'name');
    const email = field(data, 'email');
    const phone = field(data, 'phone');
    const company = field(data, 'company');
    const role = field(data, 'role');
    const portfolio = field(data, 'portfolio');
    const message = field(data, 'message');
    const subject = mode === 'career' ? `Career application from ${name}` : `Website enquiry from ${name}`;
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      company && `Company: ${company}`,
      role && `Role: ${role}`,
      portfolio && `Portfolio: ${portfolio}`,
      '',
      message,
    ].filter((line): line is string => Boolean(line));

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    setSent('email');
    setBusy(false);
  }

  if (sent) {
    return (
      <div className="form-success">
        <CheckCircle2 size={34} />
        <h3>Thanks for reaching out.</h3>
        <p>
          {sent === 'endpoint'
            ? 'Your message has been sent. The Techsprout team will get back to you.'
            : <>Your email app should open with this message addressed to <a href={`mailto:${site.email}`}>{site.email}</a>. Send it from there to reach the team.</>}
        </p>
        <button className="button button-secondary" type="button" onClick={() => setSent(null)}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Full name<input name="name" required autoComplete="name" placeholder="Enter your name" /></label>
        <label>Work email<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" /></label>
        {mode === 'career'
          ? <label>Role you’re applying for<input name="role" required placeholder="Job title" /></label>
          : <label>Company <span className="optional">Optional</span><input name="company" placeholder="Your company" /></label>}
      </div>
      <label>
        {mode === 'career' ? 'Why would you be a good fit?' : 'How can we help?'}
        <textarea name="message" rows={5} required placeholder={mode === 'career' ? 'Tell us a little about your experience...' : 'Tell us about your project or goals...'} />
      </label>
      {mode === 'career' && <label>Portfolio or LinkedIn URL <span className="optional">Optional</span><input name="portfolio" type="url" placeholder="https://" /></label>}
      <label className="consent">
        <input type="checkbox" required />
        <span>I agree that Techsprout may use these details to respond to my enquiry.</span>
      </label>
      {error && <p className="form-note">{error}</p>}
      <button className="button button-primary" type="submit" disabled={busy}>
        {busy ? 'Processing…' : mode === 'career' ? 'Submit application' : 'Send message'} <Send size={16} />
      </button>
    </form>
  );
}
