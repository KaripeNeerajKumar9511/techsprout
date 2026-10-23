export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  listImage: string;
  logo: string;
  /** Light logos sit on a pale plate. White wordmarks sit on a dark plate. */
  logoSurface: "light" | "dark";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: string;
  solutions: { eyebrow: string; title: string; text: string; image: string };
  can: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
    image: string;
  };
  special: {
    eyebrow: string;
    title: string;
    items: string[];
    poweredTitle: string;
    poweredText: string;
    image: string;
  };
  whom: {
    eyebrow: string;
    title: string;
    items: { lead?: string; text: string }[];
    image: string;
  };
  cta: { title: string; label: string; href: string };
};

export const products: Product[] = [
  /* -------------------------------------------------------------- Trooba */
  {
    slug: "trooba-factory-flow-intelligence-manufacturing",
    name: "Trooba",
    tagline: "Factory Flow Intelligence for Modern Manufacturing",
    summary:
      "In today’s high-mix manufacturing environment, production is about more than keeping machines running—it’s about understanding how work moves and where flow breaks down. Trooba, our factory flow intelligence solution, goes beyond traditional production analytics to reveal bottlenecks, hidden queues, and capacity constraints, empowering teams to make smarter, faster, and more informed operational decisions.",
    listImage: "/images/project-img9.png",
    logo: "/images/logos/trooba.svg",
    logoSurface: "light",
    metaTitle: "Trooba - Factory Flow Intelligence for Modern Manufacturing - Techsprout",
    metaDescription:
      "AI-powered factory flow intelligence to identify bottlenecks, reduce manufacturing lead times, unlock hidden capacity, and make faster operational decisions.",
    h1: "Trooba – Factory Flow Intelligence for Modern Manufacturing",
    heroImage: "/images/Group-28-3.png",
    solutions: {
      eyebrow: "Solutions",
      title: "Stop Guessing, Start Flowing: AI-Powered Manufacturing Intelligence",
      text: "Trooba helps manufacturers understand how work moves through their production system, identify bottlenecks, expose hidden queues, and improve throughput using real operational data. Instead of relying on guesswork, teams can see where flow breaks, what causes delays, and what to fix first.",
      image: "/images/Group-141.png",
    },
    can: {
      eyebrow: "How This Help",
      title: "What Trooba Can Do:",
      image: "/images/Group-140.png",
      items: [
        {
          title: "Bottleneck Detection:",
          text: "Identify the operations, equipment, or process steps that slow down production flow.",
        },
        {
          title: "Queue & WIP Visibility:",
          text: "See where work is waiting, where WIP is building up, and how delays affect output.",
        },
        {
          title: "Manufacturing Cycle Time Analysis:",
          text: "Understand how long products spend moving through the system, including waiting, processing, and delay time.",
        },
        {
          title: "Throughput Improvement:",
          text: "Find opportunities to increase production output without immediately adding new equipment or capacity.",
        },
        {
          title: "Data-Driven Flow Recommendations:",
          text: "Turn factory data into clear improvement priorities so teams know what to fix first.",
        },
      ],
    },
    special: {
      eyebrow: "What’s So Special",
      title: "Why Manufacturers Trust Trooba:",
      image: "/images/Group-139.png",
      items: [
        "Detect bottlenecks before they create major production delays.",
        "Reduce waiting time, queues, and hidden WIP across the factory.",
        "Improve throughput using existing production capacity.",
        "Understand cycle time, equipment utilization, and flow performance clearly.",
        "Make faster operational decisions based on real factory data.",
      ],
      poweredTitle: "Powered by Factory Flow Intelligence",
      poweredText:
        "Trooba transforms production data into a clear view of factory performance. It helps teams move beyond static reports by showing how work flows, where delays happen, and which improvements can create the biggest operational impact.",
    },
    whom: {
      eyebrow: "For Whom",
      title: "Who is it for?",
      image: "/images/Group-138.png",
      items: [
        { text: "Manufacturing companies looking to improve production flow." },
        { text: "Factory managers and operations leaders." },
        { text: "Industrial engineering and continuous improvement teams." },
        { text: "Teams struggling with bottlenecks, queues, WIP, and long lead times." },
        { text: "Businesses that want to improve throughput before adding more capacity." },
      ],
    },
    cta: {
      title: "Ready to Unlock Hidden Capacity in Your Factory?",
      label: "Request a Demo",
      href: "https://trooba.com/flow-analysis",
    },
  },

  /* ------------------------------------------------------ Splash AI Studios */
  {
    slug: "splash-ai-studios",
    name: "Splash AI Studios",
    tagline: "AI-Powered Jewellery Photography",
    summary:
      "Create studio-quality jewellery visuals without traditional photoshoots. Splash AI Studios transforms product images into professional product shots, model imagery, lifestyle scenes, and campaign-ready visuals in minutes.",
    listImage: "/images/sol-img.png",
    logo: "/images/logos/splash.png",
    logoSurface: "dark",
    metaTitle: "Splash AI Studios - AI-Powered Jewellery Photography - Techsprout",
    metaDescription:
      "AI-powered product photography and campaign visual creation for jewellery brands and retailers.",
    h1: "Splash AI Studios – AI-Powered Jewellery Photography",
    heroImage: "/images/Group-28-1.png",
    solutions: {
      eyebrow: "Solutions",
      title: "Your Jewellery. Studio-Quality Visuals. No Photographer Needed.",
      text: "Transform simple jewellery photos into professional, campaign-ready visuals with Splash AI Studios. Create product photography, model imagery, lifestyle scenes, and marketing assets in minutes—without the cost and complexity of traditional photoshoots.",
      image: "/images/Group-132.png",
    },
    can: {
      eyebrow: "How This Help",
      title: "What Splash Can Do:",
      image: "/images/Group-115-1.png",
      items: [
        {
          title: "AI Product Photography:",
          text: "Generate clean, professional jewellery images for online stores, product catalogues, marketplaces, and digital campaigns.",
        },
        {
          title: "AI Model Imagery:",
          text: "Showcase jewellery on AI-generated models and create styled visuals featuring coordinated pieces without arranging traditional model photoshoots.",
        },
        {
          title: "Lifestyle & Campaign Visuals:",
          text: "Create editorial-style imagery, themed scenes, and campaign visuals that reflect your brand's desired mood, lighting, and aesthetic.",
        },
        {
          title: "Bulk Catalogue Generation:",
          text: "Generate consistent visuals across multiple products to help you prepare catalogues and launch collections more efficiently.",
        },
        {
          title: "Reference-Based Styling:",
          text: "Upload an inspiration image to guide the lighting, background, colour palette, and overall mood of your generated visuals.",
        },
      ],
    },
    special: {
      eyebrow: "What’s So Special",
      title: "Why Brands Likes Splash:",
      image: "/images/Group-131.png",
      items: [
        "No complex prompts: upload a product photo and let AI compose the scene.",
        "Jewellery-aware generation: create imagery with attention to metals, gemstones, silhouettes, and styling.",
        "Consistent brand aesthetics: use reference imagery to guide creative direction.",
        "Multiple outputs from one product: generate different visual formats and campaign variations.",
        "Team collaboration: share projects, review outputs, and work with designers, marketers, or agencies where supported.",
      ],
      poweredTitle: "Powered by AI-Powered Visual Creation",
      poweredText:
        "Splash AI Studios combines jewellery-aware AI generation with guided creative workflows to simplify product visual creation. Upload or start from scratch. Generate your scene. Refine and export.",
    },
    whom: {
      eyebrow: "For Whom",
      title: "Who is it for?",
      image: "/images/Group-130.png",
      items: [
        {
          lead: "Jewellery and D2C brands",
          text: "looking to create product imagery, campaign assets, and e-commerce visuals without organizing frequent photoshoots.",
        },
        {
          lead: "Traditional jewellers going digital",
          text: "seeking to transform simple product photos into catalogue-ready visuals for websites, digital storefronts, and WhatsApp catalogues.",
        },
        {
          lead: "Creative agencies",
          text: "aiming to scale visual content production for jewellery clients and collaborate through shared projects.",
        },
        {
          lead: "Social media managers",
          text: "looking to create consistent jewellery imagery for social media campaigns, promotions, and product launches.",
        },
      ],
    },
    cta: { title: "Start Creating for Free", label: "Get a Demo", href: "https://www.gosplash.ai/" },
  },

  /* ------------------------------------------------------------ Postmngr */
  {
    slug: "postmngr",
    name: "Postmngr",
    tagline: "Your AI Social Media Manager",
    summary:
      "Plan, create, and schedule smarter social content with PostMngr. Set your goals, generate platform-specific posts, review content before publishing, and improve your social media strategy using performance insights.",
    listImage: "/images/project-img8.png",
    logo: "/images/logos/postmngr.svg",
    logoSurface: "light",
    metaTitle: "Postmngr - AI-Powered Social Media Management - Techsprout",
    metaDescription:
      "AI-powered social media management with goal-based planning, platform-specific content, review/approval, scheduling, and performance learning.",
    h1: "Postmngr – AI-Powered Social Media Management",
    heroImage: "/images/Group-28.png",
    solutions: {
      eyebrow: "Solutions",
      title: "Your AI Social Media Manager",
      text: "Tell PostMngr what you want to achieve on each social network. It plans what to post, writes platform-specific content, schedules your posts for review, and learns from performance to make your next content plan smarter.",
      image: "/images/Group-126.png",
    },
    can: {
      eyebrow: "How This Help",
      title: "What Postmngr Can Do:",
      image: "/images/Group-127.png",
      items: [
        {
          title: "Goal-Based Content Strategy:",
          text: "Define what you want to achieve, whether that means generating leads, growing your audience, reaching customers, or building industry authority.",
        },
        {
          title: "AI-Powered Content Creation:",
          text: "Generate platform-specific posts that reflect your business context, audience, and writing style.",
        },
        {
          title: "Automated Weekly Planning:",
          text: "Build a weekly content plan with relevant themes, post ideas, and a publishing schedule for your connected social accounts.",
        },
        {
          title: "Review & Approval:",
          text: "Review, edit, remove, or approve your posts before publication. Nothing gets published without your approval.",
        },
        {
          title: "Performance-Based Learning:",
          text: "Understand which content formats and themes perform best against your goals and use those insights to shape future content plans.",
        },
      ],
    },
    special: {
      eyebrow: "What’s So Special",
      title: "Why PostMngr Is More Than a Scheduler:",
      image: "/images/Group-143.png",
      items: [
        "Strategy before scheduling: start with business goals rather than a queue of empty slots.",
        "Platform-specific content: tailor content to the social network and its audience.",
        "Your brand voice: use your business context, writing style, and feedback to personalize content.",
        "Human approval: maintain control over the content that gets published.",
        "Continuous improvement: use performance insights to adjust future content plans.",
      ],
      poweredTitle: "Powered by Goal-Driven AI Content Intelligence",
      poweredText:
        "Postmngr.ai combines business insights, AI-powered content creation, scheduling, and performance analysis in one streamlined workflow, helping businesses plan, create, review, publish, and continuously improve their social media content based on their goals and results.",
    },
    whom: {
      eyebrow: "For Whom",
      title: "Who is it for?",
      image: "/images/Group-129.png",
      items: [
        {
          lead: "Founders and small businesses",
          text: "maintaining a consistent social media presence without spending hours planning and writing posts.",
        },
        {
          lead: "Marketing teams",
          text: "coordinating content planning, approvals, publishing, and performance analysis in one workflow.",
        },
        {
          lead: "Creators and personal brands",
          text: "building a recognizable voice and publishing content aligned with their goals.",
        },
        {
          lead: "Agencies and multi-brand teams",
          text: "managing content across multiple accounts and brand workspaces with plans tailored to different needs.",
        },
      ],
    },
    cta: {
      title: "Want to plan your next week content with Postmngr?",
      label: "Join Early Access",
      href: "https://www.postmngr.ai/",
    },
  },

  /* --------------------------------------------------------- StartupSaga */
  {
    slug: "startupsaga",
    name: "StartupSaga",
    tagline: "Discover India's Startup Stories",
    summary:
      "Explore India's startup ecosystem with StartupSaga. Discover innovative companies, learn from founder journeys, follow funding developments, explore industry categories, and uncover the startup hubs shaping India's entrepreneurial future.",
    listImage: "/images/project-img4-1.png",
    logo: "/images/logos/startupsaga.png",
    logoSurface: "light",
    metaTitle: "StartupSaga - INDIA'S Startup Discovery & Storytelling Platform - Techsprout",
    metaDescription:
      "A startup discovery and editorial platform focused on Indian startups, founder journeys, funding developments, industry categories, and startup hubs.",
    h1: "StartupSaga – INDIA’S Startup Discovery & Storytelling Platform",
    heroImage: "/images/Group-28-2.png",
    solutions: {
      eyebrow: "Solutions",
      title: "Discover Startups. Explore Stories. Get Inspired to Build.",
      text: "Explore the people, ideas, and businesses shaping India's startup ecosystem. StartupSaga brings together startup profiles, founder journeys, funding developments, industry insights, and emerging startup hubs to help you discover what's happening across India's entrepreneurial landscape.",
      image: "/images/Group-133.png",
    },
    can: {
      eyebrow: "How This Help",
      title: "What StartupSaga Can Do:",
      image: "/images/Group-134.png",
      items: [
        {
          title: "Discover Startups:",
          text: "Explore startup profiles across sectors and discover businesses by industry, location, and other available company details.",
        },
        {
          title: "Founder Stories & Startup Journeys:",
          text: "Learn about the challenges, decisions, milestones, and lessons behind entrepreneurial journeys.",
        },
        { title: "Personalized Recommendations:", text: "Provides tailored advice on career moves." },
        {
          title: "Funding News & Developments:",
          text: "Follow funding-related stories and developments to understand how startups are growing and how the investment ecosystem is evolving.",
        },
        {
          title: "Explore Industry Categories:",
          text: "Discover companies and stories across sectors such as AI and technology, fintech, edtech, healthtech, foodtech, SaaS, and other startup categories.",
        },
        {
          title: "Discover Startup Hubs:",
          text: "Explore startup ecosystems across Indian cities and learn about the industries, businesses, and opportunities associated with different locations.",
        },
        {
          title: "Share Your Startup Journey:",
          text: "Give founders and startup teams an opportunity to submit their startup information or journey for consideration on the platform.",
        },
      ],
    },
    special: {
      eyebrow: "What’s So Special",
      title: "What Makes StartupSaga Special:",
      image: "/images/Group-136.png",
      items: [
        "Startup discovery in one place: explore companies across multiple industries and locations.",
        "Stories behind the businesses: learn from founder experiences, startup milestones, and business decisions.",
        "A broader industry perspective: discover how different sectors are developing.",
        "Location-based exploration: find startup ecosystems and innovation hubs across India.",
        "A platform for entrepreneurial visibility: enable founders to submit their startup information and journeys.",
      ],
      poweredTitle: "Powered by Startup Intelligence & Storytelling",
      poweredText:
        "StartupSaga brings together startup information and editorial content, helping users discover companies, explore founder stories, understand funding developments and market trends, and stay connected with the startup ecosystem.",
    },
    whom: {
      eyebrow: "For Whom",
      title: "Who is it for?",
      image: "/images/Group-137.png",
      items: [
        {
          lead: "Aspiring entrepreneurs",
          text: "discover businesses, explore new ideas, and learn from the journeys of founders.",
        },
        {
          lead: "Startup founders",
          text: "explore the wider ecosystem, gain exposure to relevant stories, and submit your startup journey for consideration.",
        },
        {
          lead: "Investors & Ecosystem participants",
          text: "research startup profiles, explore industries, and follow funding-related developments.",
        },
        {
          lead: "Students & Professionals",
          text: "understand startup business models, emerging industries, and entrepreneurial career opportunities.",
        },
        {
          lead: "Researchers & Business enthusiasts",
          text: "explore startup categories, company profiles, city ecosystems, and relevant editorial content.",
        },
      ],
    },
    cta: {
      title: "Ready to discover your next big startup opportunity?",
      label: "Explore Startups",
      href: "https://startupsaga.in/",
    },
  },

  /* ----------------------------------------------------------- SkillVedika */
  {
    slug: "skillvedika",
    name: "SkillVedika",
    tagline: "Industry-Ready Training & Career Development",
    summary:
      "Build in-demand skills with SkillVedika through expert-led training, practical projects, flexible learning, and career support. Explore technology courses and professional development programs designed to help learners and teams grow.",
    listImage: "/images/project-img7.png",
    logo: "/images/logos/skillvedika.png",
    logoSurface: "light",
    metaTitle: "SkillVedika - Technical Training & Professional Development - Techsprout",
    metaDescription:
      "Techsprout's training and professional development initiative for technical learning, practical projects, career support, and corporate upskilling.",
    h1: "SkillVedika – Technical Training & Professional Development",
    heroImage: "/images/product-banner-img.png",
    solutions: {
      eyebrow: "Solutions",
      title: "Learn In-Demand Skills. Build Your Future.",
      text: "SkillVedika, a Techsprout training initiative, helps students and professionals build industry-relevant skills through expert-led instruction, practical projects, and structured learning programs. From emerging technologies to professional upskilling, develop the capabilities to take your next career step.",
      image: "/images/pr-1.png",
    },
    can: {
      eyebrow: "How This Help",
      title: "What SkillVedika Can Do:",
      image: "/images/pr-2.png",
      items: [
        {
          title: "In-Demand Technical Courses:",
          text: "Explore training in AI, data analytics, data engineering, cloud and DevOps, cybersecurity, Python, software development, SAP, Salesforce, and related technical disciplines.",
        },
        {
          title: "Practical Project-Based Learning:",
          text: "Apply concepts through guided exercises, practical assignments, live sessions, and projects that reinforce your understanding.",
        },
        {
          title: "Expert-Led Training:",
          text: "Learn from experienced trainers who help you understand concepts, work through challenges, and develop practical knowledge.",
        },
        {
          title: "Flexible Learning:",
          text: "Choose learning programs and resources suited to your goals and schedule, based on the available course format.",
        },
        {
          title: "Career Development Support:",
          text: "Access relevant career resources, including resume building, mock interviews, mentorship, and job-assistance support where offered by the selected program.",
        },
        {
          title: "Corporate & Workforce Training:",
          text: "Help organizations develop employee capabilities through tailored training, workshops, and workforce upskilling aligned with business needs.",
        },
      ],
    },
    special: {
      eyebrow: "What’s So Special",
      title: "What Makes SkillVedika Different:",
      image: "/images/carrer-img-1.png",
      items: [
        "Industry-relevant curriculum: learn technologies and skills used in professional environments.",
        "Practical learning: reinforce concepts through hands-on projects and exercises.",
        "Expert guidance: learn with support from trainers and mentors.",
        "Career-oriented resources: prepare for professional opportunities through relevant career support.",
        "Flexible learning options: explore programs suited to different goals and learning requirements.",
        "Organizational upskilling: support technical and professional development across teams.",
      ],
      poweredTitle: "Powered by Practical, Industry-Aligned Learning",
      poweredText:
        "SkillVedika brings together structured courses, expert guidance, hands-on projects, and career resources to help learners develop practical skills, strengthen their knowledge, and achieve their professional goals.",
    },
    whom: {
      eyebrow: "For Whom",
      title: "Who is it for?",
      image: "/images/pr-3.png",
      items: [
        {
          lead: "Students & Recent graduates",
          text: "build technical foundations and develop practical skills relevant to your chosen career path.",
        },
        {
          lead: "Aspiring technology professionals",
          text: "explore structured learning programs to develop capabilities in software development, AI, cloud technologies, data, and other technical fields.",
        },
        {
          lead: "Working professionals",
          text: "strengthen existing skills, learn new technologies, and prepare for changing professional requirements.",
        },
        {
          lead: "Career changers",
          text: "develop a foundation in a new technical discipline through relevant courses and practical learning.",
        },
        {
          lead: "Businesses & Corporate teams",
          text: "explore customized technical training and workforce upskilling programs aligned with organizational needs.",
        },
      ],
    },
    cta: {
      title: "Ready to build your skills and shape your future?",
      label: "Explore Courses",
      href: "https://skillvedika.com/",
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
