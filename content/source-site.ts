export const site = {
  name: "Techsprout",
  url: "https://techsprout.ai",
  homeTitle: "Techsprout help businesses research, experiment, and innovate with AI",
  homeDescription:
    "Techsprout AI Labs is more than a company, it’s a Global AI Innovation Center",
  footerBlurb:
    "At Techsprout AI Labs, we believe the next wave of transformation isn’t just about adopting new tools—it’s about reimagining what's possible when AI becomes your foundation, not an afterthought.",
  email: "info@techsprout.ai",
  india: {
    label: "India Address",
    address: "501, Manjeera Majestic Commercial, JNTU Road,KPHB, Hyderabad, 500085",
    phone: "+91 8790900881",
    email: "info@techsprout.ai",
  },
  us: {
    label: "US Address",
    address: "25730 Lennox Hale Dr, Aldie VA 20105",
    phone: "+1 (516) 673-6671",
    email: "info@techsprout.ai",
  },
  // The live site links these to the bare network home pages. Replace with
  // the real company profile URLs when you have them.
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
  ],
};

export function telHref(phone: string) {
  return "tel:" + phone.replace(/[^+\d]/g, "");
}
