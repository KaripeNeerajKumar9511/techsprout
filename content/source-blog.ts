export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string };

export type Post = {
  slug: string;
  title: string;
  /** Date as displayed on the live blog listing */
  date: string;
  /** ISO date for metadata */
  iso: string;
  excerpt: string;
  image: string;
  author: string;
  body: PostBlock[];
};

export const blogIntro = {
  h1: "Explore Ideas, Insights & Inspiration",
  sub: "Dive into stories that matter to you.",
  text: "Thoughts that spark action, stories that stick. Discover what’s shaping our world, one post at a time.",
  image: "/images/blog-banner-img.png",
};

/*
 * CONTENT NOTE
 * ------------
 * The excerpt, title and date below are exactly as shown on techsprout.ai.
 * The article body is a faithful write-up of the post's seven points, because
 * the full original text could not be copied verbatim while building this
 * project. To make the page word-for-word identical, replace the `body`
 * array with the original paragraphs (copy from the WordPress editor).
 */
export const posts: Post[] = [
  {
    slug: "techsprout-ai-blog-ai-first-product-development-india",
    title: "What It Takes to Build AI-First Products in India",
    date: "September 07, 2026",
    iso: "2026-09-07",
    excerpt:
      "Discover what it truly takes to build scalable, AI-first products in India — from user-first design to cost-effective, intelligent software architecture.",
    image: "/images/blog6.png",
    author: "Techsprout AI Labs",
    body: [
      {
        type: "p",
        text: "Building an AI-first product in India calls for a different mindset than adding AI features to traditional software. Here are the seven principles we keep coming back to at Techsprout AI Labs.",
      },
      { type: "h2", text: "1. Solve root-level problems" },
      {
        type: "p",
        text: "Start from the core inefficiencies in a business, not from whatever is trending or from surface-level automation.",
      },
      { type: "h2", text: "2. Design for non-technical users" },
      {
        type: "p",
        text: "Many business users, from school administrators to retail managers, need plain-language insights, conversational interfaces, and guided decisions rather than dashboards full of raw data.",
      },
      { type: "h2", text: "3. Make AI invisible but impactful" },
      {
        type: "p",
        text: "The best AI lives inside existing workflows: predictive analytics, conversational search, automated summaries, and recommendations that show up where people already work.",
      },
      { type: "h2", text: "4. Rethink architecture" },
      {
        type: "p",
        text: "AI-first systems need real-time context, a hybrid of rule-based and generative approaches, memory layers, and feedback loops that let the product keep learning.",
      },
      { type: "h2", text: "5. Balance intelligence with affordability" },
      {
        type: "p",
        text: "Optimize API and model costs, and make sure the value delivered justifies the price for a price-sensitive market.",
      },
      { type: "h2", text: "6. Prioritize explainability and trust" },
      {
        type: "p",
        text: "Make predictions understandable, give users control over automation, and be transparent about what the system is doing and why.",
      },
      { type: "h2", text: "7. Build products, not services" },
      {
        type: "p",
        text: "Adopt a product mindset: reusable IP, clear user journeys, measurable outcomes, and the discipline to cut features that do not earn their place.",
      },
      {
        type: "p",
        text: "India is a demanding, cost-aware market, and that is exactly why it can produce global SaaS leaders for teams that balance deep technology with practical usefulness.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
