# Techsprout.ai — Next.js rebuild

This project keeps the existing redesigned UI/UX and replaces the prior placeholder/shortened copy with the content data and media supplied in `techsprout-next.zip`.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- CSS design system in `app/globals.css`
- Static content in `content/source-*.ts`
- Local assets from the supplied site folder in `public/images/`
- Vercel-compatible deployment

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Content source of truth

The following files were copied from the uploaded `techsprout-next.zip` folder and are used by the pages:

- `content/source-services.ts` — five detailed service pages, including overview, offerings, benefits, audience, process, testimonials, reasons to choose Techsprout, CTA and metadata.
- `content/source-products.ts` — detailed pages for Trooba, Splash AI Studios, Postmngr, StartupSaga and SkillVedika.
- `content/source-careers.ts` — careers intro, company benefits and full role descriptions.
- `content/source-blog.ts` — blog listing and article body supplied in the archive.
- `content/source-founders.ts` — the three founder names and roles.
- `content/source-site.ts` — official site metadata, addresses, contact information and footer copy.
- `public/images/` — the supplied illustrations, logo SVGs and `fav-icon.png`.

The three founders appear as:
- Vishwanath Srirangam — Founder and CEO
- Raghu Chandra Gidda — Co-founder
- Ramanatha BV — Co-founder

## Forms

Contact and careers forms validate in the browser. Without a form service they open the visitor’s email app addressed to info@techsprout.ai. To deliver submissions directly, set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` in the Vercel project environment variables and redeploy.

## Original brand assets

The header uses `public/images/logo.svg`; the footer uses `public/images/foot-logo.svg`; metadata points to `public/images/fav-icon.png`. These assets were copied from the user-provided project archive without redrawing them.

## Notes

`CONTENT-SOURCE-NOTES.md` records caveats already present in the supplied archive. In particular, that archive itself notes that the blog article body is a faithful write-up rather than word-for-word source text. This project preserves the blog body exactly as it appears in the supplied archive. The uploaded folder does not contain founder portrait files, so founder cards use initials until portraits are supplied.
