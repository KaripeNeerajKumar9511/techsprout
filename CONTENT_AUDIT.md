# Content migration audit

## Source

Content and media were taken from the user-uploaded `techsprout-next.zip` project. The visual system in `app/globals.css` and the current header, footer, cards, spacing, colors, and responsive layouts were retained. Page copy and content data were switched to the supplied source files.

## Content now used by the UI

- Homepage: the source site's headline, intro, company positioning, services and product data.
- Services listing and all five service detail routes: full source data including overview, offering groups, benefits, process steps, social proof, reasons to choose Techsprout and CTAs.
- Products listing and all five product detail routes: full source data for Trooba, Splash AI Studios, Postmngr, StartupSaga and SkillVedika, including feature descriptions, differentiators, audiences and CTAs.
- About Us: source company story, differentiators, vision and who the company works with, plus the requested founder list.
- Careers: source introduction, reasons to work at Techsprout, and all supplied job descriptions.
- Blog: source listing metadata, excerpts, images, and the article body exactly as supplied in the uploaded folder.
- Contact: source contact information and office addresses.
- Branding: supplied `logo.svg`, `foot-logo.svg`, `fav-icon.png`, and the site's local image assets.

## Known source limitations retained

The uploaded archive's own `CONTENT-NOTES.md` says the blog article body is a faithful write-up rather than a verbatim copy of the live WordPress article. This rebuild uses that supplied body without rewriting it. The archive also does not include the founder portrait image files; the founder cards therefore show initials and roles. Legal links on the original site pointed to `#`; they remain placeholders rather than inventing legal copy.

## Verification

- TypeScript syntax/type pass completed using a temporary declaration stub for `lucide-react` because the supplied archive's `node_modules` did not contain that dependency.
- A full Next.js production build could not complete in this environment because Next.js attempted to download its Linux SWC binary and registry DNS access failed (`EAI_AGAIN registry.npmjs.org`). Run `npm install` and `npm run build` in a network-enabled environment before deploying.
- Forms remain frontend-only unless `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` is configured.
