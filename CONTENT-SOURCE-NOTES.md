# Source archive notes and remaining limitations

This rebuild uses the content data and media shipped inside the uploaded `techsprout-next.zip` archive, captured by that project on 23 October 2026. The source archive's original `CONTENT-NOTES.md` has been reviewed.

## Asset handling in this rebuild

The source archive includes `public/images/logo.svg`, `public/images/foot-logo.svg`, `public/images/fav-icon.png`, and the site's illustrations. These files have been copied into this project. Header/footer logo references and metadata favicon references now point to those supplied assets.

## Content limitations already present in the supplied archive

1. **Blog article body:** The supplied archive itself says the title, date, and excerpt match the live site, but the article body is a faithful write-up of the post's seven points rather than a word-for-word copy of the original WordPress article. This rebuild preserves the article body exactly as it exists in the uploaded archive.
2. **Founder portraits:** The archive lists the three founders but does not include their portrait files. Cards show initials and roles until portraits are supplied.
3. **Forms:** Forms validate in the browser and show a confirmation state, but submissions are not stored or delivered unless `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` is configured.
4. **Legacy site quirks:** Content and wording quirks noted in the source archive are intentionally preserved because the goal is to retain the supplied copy rather than edit it.
5. **Legal links:** The source archive says the live site's Terms and Privacy links point to `#`; this rebuild retains those placeholder links rather than inventing legal text.

## Build verification

TypeScript checking passed with a temporary declaration stub for `lucide-react`. The full Next.js production build could not complete in this environment because the installed Next.js attempted to fetch its Linux SWC binary and registry DNS access failed (`EAI_AGAIN registry.npmjs.org`). Run `npm install` and `npm run build` on a network-enabled machine before deploying.
