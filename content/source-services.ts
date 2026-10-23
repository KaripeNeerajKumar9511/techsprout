export type Group = { title: string; items: string[] };
export type Step = { title: string; text: string };
export type Quote = { text: string; author: string };

export type Service = {
  slug: string;
  /** label used in the header drop-down */
  navLabel: string;
  /** label used in the footer list */
  footerLabel: string;
  cardTitle: string;
  cardDesc: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: string;
  intro: { title: string; text: string; image: string };
  overview: { title: string; paragraphs: string[]; image: string };
  offerings: { title: string; groups: Group[]; image: string };
  benefits?: { title: string; items: string[]; image: string };
  whoFor?: { title: string; items: { lead: string; text: string }[]; image: string };
  process: { eyebrow: string; title: string; steps: Step[] };
  proof?: { title: string; quotes: Quote[] };
  why: { title: string; items: string[]; image: string };
  cta?: { title: string; label: string; href: string };
};

export const services: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "ai-driven-product-development",
    navLabel: "Product Development As a Service",
    footerLabel: "Product Development As a Service",
    cardTitle: "AI-Driven Product Development",
    cardDesc: "Build intelligent, future-ready products that adapt, learn, and scale.",
    metaTitle: "AI-Driven Product Development - Techsprout",
    metaDescription: "Build intelligent, future-ready products that adapt, learn, and scale.",
    h1: "Product Development as a Service",
    heroImage: "/images/service-details-banner-img.png",
    intro: {
      title: "Transform Your Vision into Market-Winning Products",
      text: "Techsprout's Product Development as a Service empowers you to bring innovative ideas to life. We combine deep industry expertise with cutting-edge AI to guide you through every stage, from concept to launch and beyond.",
      image: "/images/spp-1.png",
    },
    overview: {
      title: "Overview",
      paragraphs: [
        "Techsprout's Product Development as a Service offers end-to-end support to help businesses create and launch successful products. We go beyond simply building—we partner with you to refine your vision, strategize for market entry, and ensure continuous improvement. Our AI-driven approach accelerates development, enhances decision-making, and maximizes your product's potential.",
      ],
      image: "/images/Group-110.png",
    },
    offerings: {
      title: "Offerings:",
      image: "/images/Group-120.png",
      groups: [
        {
          title: "Ideation & Validation:",
          items: [
            "Deep-Dive Concept Analysis",
            "AI-Powered Product Idea Validator",
            "Strategic Business Model Refinement",
          ],
        },
        {
          title: "Blueprinting & Strategy:",
          items: ["Tailored Roadmap Development", "Market Positioning & Go-To-Market Strategy"],
        },
        {
          title: "Design, Development & AI Integration:",
          items: ["Innovative Product Design", "Agile Product Development", "Advanced AI Integration"],
        },
        {
          title: "Content & Promotion:",
          items: [
            "Organic Product Promotion (StoryPulse)",
            "Holistic Brand Storytelling",
            "Integrated Marketing Strategies",
          ],
        },
        {
          title: "Go-To-Market & Scaling:",
          items: [
            "Comprehensive Marketing & Sales Enablement",
            "Partner & Ecosystem Connectivity",
            "Continuous Optimization & Support",
          ],
        },
      ],
    },
    benefits: {
      title: "Benefits:",
      image: "/images/carrer-img-1.png",
      items: [
        "Accelerated product development cycles",
        "Reduced risk through AI-powered validation",
        "Enhanced product quality and user experience",
        "Effective market entry and adoption",
        "Continuous improvement and growth",
      ],
    },
    process: {
      eyebrow: "Our Process:",
      title: "We follow a structured, yet flexible, process",
      steps: [
        {
          title: "Ideation & Validation:",
          text: "We begin by thoroughly understanding your vision and validating its market potential using AI-driven analysis.",
        },
        {
          title: "Blueprinting & Strategy:",
          text: "We develop a tailored roadmap and go-to-market strategy to guide your product's journey.",
        },
        {
          title: "Design, Development & AI Integration:",
          text: "Our expert team designs and develops your product, seamlessly integrating AI to optimize performance and user experience.",
        },
        {
          title: "Content & Promotion:",
          text: "Through StoryPulse, we craft compelling narratives to build brand awareness and drive customer engagement.",
        },
        {
          title: "Go-To-Market & Scaling:",
          text: "We support your product launch and provide ongoing optimization to ensure continued success.",
        },
      ],
    },
    proof: {
      title: "Social Proof:",
      quotes: [
        {
          text: "Techsprout's product development expertise was instrumental in the successful launch of our flagship product. Their AI-driven approach helped us to identify key market opportunities and deliver a solution that exceeded customer expectations.",
          author: "Social Entrepreneur",
        },
        {
          text: "As a healthcare expert, I needed a reliable partner to develop a patient management application. Techsprout not only delivered a user-friendly and efficient product but also provided valuable insights that improved our workflow.",
          author: "Healthcare Technology Consultant",
        },
        {
          text: "Techsprout's StoryPulse service helped us craft a compelling narrative around our product, which significantly boosted our market penetration and brand recognition.",
          author: "E-commerce Business Owner",
        },
      ],
    },
    why: {
      title: "Why Choose Techsprout?",
      image: "/images/Group-101.png",
      items: [
        "End-to-end expertise across the entire product lifecycle",
        "AI-driven innovation for smarter, faster results",
        "A focus on creating impactful, market-winning products",
        "Collaborative partnership and a commitment to your success",
      ],
    },
    cta: {
      title: "Ready to turn your vision into reality?",
      label: "Talk to Our Product Experts Today",
      href: "/contact-us/",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ai-research-innovation-hub",
    navLabel: "AI Research & Innovation Hub",
    footerLabel: "AI Research & Innovation Hub",
    cardTitle: "AI Research & Innovation Hub",
    cardDesc:
      "Partner with us to experiment, innovate, and create AI-first solutions tailored to your business.",
    metaTitle: "AI Research & Innovation Hub - Techsprout",
    metaDescription:
      "Partner with us to experiment, innovate, and create AI-first solutions tailored to your business.",
    h1: "AI Research & Innovation Hub",
    heroImage: "/images/Group-100-2.png",
    intro: {
      title: "Where Bold Ideas Meet AI Breakthroughs",
      text: "Techsprout’s AI Research & Innovation Hub is your launchpad for exploring, prototyping, and co-creating AI-powered solutions that transform industries. We go beyond implementation—this is where future-defining innovation begins.",
      image: "/images/Group-141.png",
    },
    overview: {
      title: "Overview:",
      paragraphs: [
        "Techsprout’s AI Research & Innovation Hub empowers organizations to move from ideation to impact with confidence. Whether you're a startup validating a novel concept or an enterprise exploring AI-led transformation, we help you experiment, build, and test in a controlled, expert-led environment.",
        "Our hub is where businesses co-innovate with AI engineers, data scientists, domain experts, and strategic thinkers to discover what’s possible—before scaling what works.",
      ],
      image: "/images/Group-139.png",
    },
    offerings: {
      title: "Key Offerings:",
      image: "/images/Group-132.png",
      groups: [
        {
          title: "AI Use Case Discovery & Validation",
          items: ["AI Opportunity Assessment", "Proof-of-Concept Design", "AI Feasibility Studies"],
        },
        {
          title: "Prototyping & Experimentation",
          items: [
            "Rapid AI Prototyping (MVPs)",
            "Model Testing & Optimization",
            "A/B Testing with Real-Time Feedback",
          ],
        },
        {
          title: "Applied Research",
          items: [
            "AI Algorithm Customization",
            "NLP, Computer Vision, and Predictive Modeling",
            "Agentic AI & LLM Fine-Tuning",
          ],
        },
        {
          title: "Co-Innovation Partnerships",
          items: [
            "Joint Innovation Labs with Clients",
            "Research-as-a-Service (RaaS)",
            "Academic & Industry Collaborations",
          ],
        },
        {
          title: "Ethics, Governance & AI Readiness",
          items: [
            "AI Compliance Frameworks",
            "Risk Assessment & Fairness Audits",
            "Responsible AI Strategy Development",
          ],
        },
      ],
    },
    // Reproduced as published (the live page lists the four stages here too).
    whoFor: {
      title: "Who It’s For:",
      image: "/images/Group-115-1.png",
      items: [
        { lead: "Discovery & Alignment:", text: "Identify the innovation opportunity and align on KPIs." },
        { lead: "Design & Experiment:", text: "Co-design POCs or MVPs using AI and data strategy." },
        {
          lead: "Test & Iterate:",
          text: "Run agile experiments and fine-tune AI models with feedback loops.",
        },
        { lead: "Deploy & Scale:", text: "Transition successful pilots into enterprise-grade solutions." },
      ],
    },
    process: {
      eyebrow: "How It Works:",
      title: "How It Works:",
      steps: [
        { title: "Discovery & Alignment:", text: "Identify the innovation opportunity and align on KPIs." },
        { title: "Design & Experiment:", text: "Co-design POCs or MVPs using AI and data strategy." },
        {
          title: "Test & Iterate:",
          text: "Run agile experiments and fine-tune AI models with feedback loops.",
        },
        { title: "Deploy & Scale:", text: "Transition successful pilots into enterprise-grade solutions." },
      ],
    },
    why: {
      title: "Why Techsprout?",
      image: "/images/Group-129.png",
      items: [
        "AI-First Thinking",
        "Deep Research + Real-World Execution",
        "Multi-disciplinary Experts in AI, Design, & Strategy",
        "Agile Infrastructure for Rapid Experimentation",
        "Long-Term Innovation Partner, Not Just a Vendor",
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "staff-augmentation-ai-talent-solutions",
    navLabel: "Staffing Services",
    footerLabel: "Staffing Services",
    cardTitle: "Staff Augmentation & AI Talent Solutions",
    cardDesc: "Get access to top AI and tech talent to accelerate your vision.",
    metaTitle: "Staff Augmentation & AI Talent Solutions - Techsprout",
    metaDescription: "Get access to top AI and tech talent to accelerate your vision.",
    h1: "Staffing Services",
    heroImage: "/images/Group-20-1-1.png",
    intro: {
      title: "Build the Future with AI-Powered Talent Solutions",
      text: "Techsprout's Staffing Services connects you with top AI and tech talent, providing a strategic, AI-driven approach to building future-ready workforces.",
      image: "/images/Group-97.png",
    },
    overview: {
      title: "Overview:",
      paragraphs: [
        "Techsprout's Staffing Services offers a comprehensive solution for businesses seeking to acquire and manage top tech talent. We go beyond traditional staffing by leveraging AI to identify, assess, and match candidates with unparalleled precision. Our focus is on building long-term success by aligning talent strategy with your business objectives.",
      ],
      image: "/images/Group-98.png",
    },
    offerings: {
      title: "Offerings:",
      image: "/images/Group-99-1.png",
      groups: [
        {
          title: "Talent Acquisition & Sourcing:",
          items: ["Holistic Talent Identification", "Digital Candidate Profiling", "Proactive Engagement"],
        },
        {
          title: "Candidate Matching & Assessment:",
          items: [
            "Smart, Hyper-Personalized Matching",
            "AI-Enhanced Screening & Interviews",
            "Comprehensive Evaluation of Skills & Culture Fit",
          ],
        },
        {
          title: "Engagement, Onboarding & Integration:",
          items: ["Seamless candidate experience", "Cultural fit analysis", "Optimized onboarding"],
        },
        {
          title: "Ongoing Talent Management & Upskilling:",
          items: [
            "Continuous performance analytics",
            "Personalized upskilling",
            "AI-Powered Career Twin",
          ],
        },
        {
          title: "Strategic Workforce Planning & Future Readiness:",
          items: [
            "Real-Time market intelligence",
            "Data-driven recruitment strategies",
            "Ecosystem connectivity",
          ],
        },
      ],
    },
    benefits: {
      title: "Benefits:",
      image: "/images/Group-119.png",
      items: [
        "Access to a vast pool of highly qualified AI and tech talent",
        "Reduced time-to-hire and recruitment costs",
        "Improved candidate quality and retention rates",
        "Enhanced workforce productivity and innovation",
        "Strategic alignment of talent with business objectives",
      ],
    },
    process: {
      eyebrow: "Our Process:",
      title: "Our process is designed for efficiency and effectiveness:",
      steps: [
        {
          title: "Needs Analysis:",
          text: "We work closely with you to understand your specific talent needs and business goals.",
        },
        {
          title: "AI-Powered Sourcing:",
          text: "We use AI to identify and engage top talent from a wide range of sources.",
        },
        {
          title: "Rigorous Assessment:",
          text: "Our AI-enhanced screening and interview process ensures that candidates possess the required skills and align with your company culture.",
        },
        {
          title: "Seamless Integration:",
          text: "We facilitate a smooth onboarding process to ensure new hires quickly become productive members of your team.",
        },
        {
          title: "Ongoing Support:",
          text: "We provide continuous support and talent management solutions to help your workforce thrive.",
        },
      ],
    },
    proof: {
      title: "Social Proof:",
      quotes: [
        {
          text: "Techsprout's AI-powered staffing solutions have transformed our recruitment process. We've seen a significant improvement in the quality of hires and a reduction in our time-to-fill.",
          author: "CTO, Software Company",
        },
        {
          text: "Their team took the time to understand our unique needs and company culture, ensuring they found candidates who were not only skilled but also a great fit for our organization.",
          author: "HR Director, Technology Firm",
        },
        {
          text: "The ongoing talent management support has been invaluable in helping us retain and develop our top performers.",
          author: "VP of Engineering, AI Startup",
        },
      ],
    },
    why: {
      title: "Why Choose Techsprout?",
      image: "/images/Group-101.png",
      items: [
        "Holistic, AI-driven approach to staffing",
        "Deep understanding of the tech industry and its talent needs",
        "Commitment to building long-term partnerships",
        "Focus on delivering an exceptional candidate experience",
      ],
    },
    cta: {
      title: "Ready to build your future-ready workforce?",
      label: "Connect with Our Talent Experts Today",
      href: "/contact-us/",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "corporate-ai-training-workforce-upskilling",
    navLabel: "Training Services",
    footerLabel: "Training Services",
    cardTitle: "Corporate AI Training & Workforce Upskilling",
    cardDesc: "Equip your teams with AI expertise to drive innovation from within.",
    metaTitle: "Corporate AI Training & Workforce Upskilling - Techsprout",
    metaDescription: "Equip your teams with AI expertise to drive innovation from within.",
    h1: "Training Services (Retail & Corporate)",
    heroImage: "/images/Group-100-1.png",
    intro: {
      title: "Empower Your Teams with Future-Ready Skills through SkillVedika",
      text: "Techsprout's Training Services, delivered through SkillVedika.com, provide tailored programs for retail and corporate organizations, equipping your workforce with the skills to excel in a rapidly evolving world.",
      image: "/images/Group-103.png",
    },
    overview: {
      title: "Overview:",
      paragraphs: [
        "Techsprout's Training Services, offered on the SkillVedika platform, deliver customized learning solutions designed to drive performance and innovation. We provide specialized programs for both retail teams and corporate organizations, focusing on practical skills, AI-driven personalization, and continuous development.",
      ],
      image: "/images/Group-105.png",
    },
    offerings: {
      title: "Offerings (via SkillVedika):",
      image: "/images/Group-104.png",
      groups: [
        {
          title: "Retail Training Solutions:",
          items: [
            "Customized training programs on SkillVedika",
            "Focus on customer engagement",
            "Enhancement of sales techniques",
            "Improvement of operational efficiency",
          ],
        },
        {
          title: "Corporate Training Solutions:",
          items: [
            "Comprehensive courses and workshops on SkillVedika",
            "Upskilling employees",
            "Boosting productivity",
            "Fostering innovation",
          ],
        },
        {
          title: "AI-Driven Personalized Learning:",
          items: [
            "Adaptive learning paths on SkillVedika",
            "AI-powered skill gap identification",
            "Targeted training modules",
          ],
        },
        {
          title: "Expert-Led Sessions & Workshops:",
          items: [
            "Hands-on sessions via SkillVedika",
            "Industry-veteran instructors",
            "20+ years of experience",
          ],
        },
        {
          title: "Continuous Learning & Development:",
          items: ["Ongoing support on SkillVedika", "Periodic assessments", "Market relevance focus"],
        },
      ],
    },
    benefits: {
      title: "Benefits of SkillVedika Training:",
      image: "/images/Group-101.png",
      items: [
        "Increased employee engagement and motivation",
        "Improved customer satisfaction and loyalty (for Retail)",
        "Enhanced productivity and efficiency across teams",
        "Development of future-ready skills",
        "Stronger company culture and innovation",
      ],
    },
    process: {
      eyebrow: "Our Process (on SkillVedika):",
      title: "Our training process on SkillVedika is designed to maximize impact:",
      steps: [
        {
          title: "Needs Assessment:",
          text: "We collaborate with you to identify specific training requirements and learning objectives.",
        },
        {
          title: "Custom Program Development:",
          text: "We design tailored training programs that align with your industry, company culture, and employee skill levels.",
        },
        {
          title: "Engaging Delivery:",
          text: "We deliver training through a variety of methods on the SkillVedika platform, including workshops, online courses, and hands-on sessions.",
        },
        {
          title: "AI-Powered Personalization:",
          text: "Our AI-driven platform on SkillVedika adapts to individual learning styles and paces, ensuring optimal knowledge retention.",
        },
        {
          title: "Evaluation and Support:",
          text: "We provide ongoing support and assess training effectiveness to ensure continuous improvement and ROI.",
        },
      ],
    },
    proof: {
      title: "Social Proof:",
      quotes: [
        {
          text: "SkillVedika's retail training program significantly improved our sales team's performance and customer service skills. We saw an immediate positive impact on our customer satisfaction ratings.",
          author: "Retail Operations Manager",
        },
        {
          text: "The corporate training sessions on SkillVedika were highly engaging and relevant. Our employees gained valuable skills that have boosted productivity and innovation within the company.",
          author: "Learning and Development Specialist",
        },
        {
          text: "The AI-driven personalized learning platform on SkillVedika ensured that each employee received targeted training, maximizing the effectiveness of our training investment.",
          author: "HR Director",
        },
      ],
    },
    why: {
      title: "Why Choose Techsprout's SkillVedika?",
      image: "/images/Group-117.png",
      items: [
        "Tailored training solutions for specific needs",
        "AI-driven personalized learning experiences",
        "Expert instructors with extensive industry experience",
        "Focus on practical skills and real-world application",
        "Commitment to continuous learning and development",
      ],
    },
    cta: {
      title: "Ready to empower your team's success through SkillVedika?",
      label: "Explore SkillVedika Training",
      href: "https://www.skillvedika.com/",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ai-powered-digital-marketing-growth-strategies",
    navLabel: "AI Powered Digital Marketing",
    footerLabel: "AI Powered Digital Marketing",
    cardTitle: "AI-Powered Digital Marketing & Growth Strategies",
    cardDesc: "Leverage AI-driven insights for data-backed marketing and customer engagement.",
    metaTitle: "AI-Powered Digital Marketing & Growth Strategies - Techsprout",
    metaDescription: "Leverage AI-driven insights for data-backed marketing and customer engagement.",
    h1: "AI-Powered Digital Marketing",
    heroImage: "/images/Group-100-2.png",
    intro: {
      title: "Unlock Exponential Growth with AI-Powered Digital Marketing",
      text: "Techsprout's AI-Powered Digital Marketing services drive exceptional results by leveraging cutting-edge AI to optimize your strategies, enhance customer engagement, and maximize your ROI.",
      image: "/images/Group-120.png",
    },
    overview: {
      title: "Overview:",
      paragraphs: [
        "Techsprout's AI-Powered Digital Marketing services transform your online presence and deliver tangible business outcomes. We move beyond traditional marketing methods by employing AI to gain deep insights into customer behavior, automate campaign optimization, and personalize customer experiences.",
      ],
      image: "/images/Group-109.png",
    },
    offerings: {
      title: "Offerings:",
      image: "/images/Group-110.png",
      groups: [
        {
          title: "AI-Driven Strategy & Analytics:",
          items: ["Data-Driven Insights", "Predictive Analytics", "Personalized Marketing Strategies"],
        },
        {
          title: "Campaign Optimization & Automation:",
          items: ["Automated Campaign Management", "AI-Powered A/B Testing", "Real-Time Optimization"],
        },
        {
          title: "Personalized Customer Engagement:",
          items: [
            "Personalized Content Creation",
            "Chatbot & AI-Driven Communication",
            "Customer Journey Optimization",
          ],
        },
        {
          title: "Multi-Channel Marketing:",
          items: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Paid Advertising (PPC)",
            "Email Marketing",
          ],
        },
        {
          title: "Performance Measurement & Reporting:",
          items: ["Detailed Analytics Dashboards", "ROI Tracking", "Actionable Recommendations"],
        },
      ],
    },
    benefits: {
      title: "Benefits:",
      image: "/images/Group-104.png",
      items: [
        "Increased website traffic and lead generation",
        "Improved customer engagement and conversion rates",
        "Higher ROI on marketing investments",
        "Greater efficiency through automation",
        "Data-driven insights for informed decision-making",
      ],
    },
    process: {
      eyebrow: "Our Process:",
      title: "Our AI-powered digital marketing process is designed for maximum impact:",
      steps: [
        {
          title: "Data Analysis & Strategy:",
          text: "We begin by analyzing your existing data and market trends to develop a customized digital marketing strategy.",
        },
        {
          title: "AI-Powered Campaign Setup:",
          text: "We use AI to automate campaign setup and optimization across multiple channels.",
        },
        {
          title: "Personalized Content & Engagement:",
          text: "We create personalized content and engagement strategies to connect with your target audience.",
        },
        {
          title: "Continuous Optimization:",
          text: "AI continuously analyzes campaign performance and makes real-time adjustments to maximize results.",
        },
        {
          title: "Reporting & Analysis:",
          text: "We provide detailed reports and actionable insights to track your ROI and inform future strategies.",
        },
      ],
    },
    proof: {
      title: "Social Proof:",
      quotes: [
        {
          text: "Techsprout's AI-powered digital marketing services have significantly increased our online visibility and lead generation. Their data-driven approach has been instrumental in our success.",
          author: "Marketing Manager, E-commerce Company",
        },
        {
          text: "The personalized customer engagement strategies implemented by Techsprout have improved our conversion rates and customer satisfaction. We highly recommend their services.",
          author: "CEO, SaaS Startup",
        },
        {
          text: "Their team's expertise in AI and digital marketing is unmatched. They have helped us optimize our campaigns and achieve a remarkable return on investment.",
          author: "Digital Marketing Director, Retail Chain",
        },
      ],
    },
    why: {
      title: "Why Choose Techsprout?",
      image: "/images/Group-119.png",
      items: [
        "Cutting-edge AI technology for superior results",
        "Experienced digital marketing professionals",
        "Data-driven approach to strategy and execution",
        "Focus on delivering measurable ROI",
        "Transparent communication and reporting",
      ],
    },
    cta: {
      title: "Ready to transform your digital presence?",
      label: "Get a Free Consultation",
      href: "/contact-us/",
    },
  },
];

/** Order used on the home and services listing pages (matches the live site). */
export const homeServiceOrder = [
  "ai-driven-product-development",
  "ai-research-innovation-hub",
  "corporate-ai-training-workforce-upskilling",
  "staff-augmentation-ai-talent-solutions",
  "ai-powered-digital-marketing-growth-strategies",
];
export const servicesPageOrder = [
  "ai-powered-digital-marketing-growth-strategies",
  "staff-augmentation-ai-talent-solutions",
  "corporate-ai-training-workforce-upskilling",
  "ai-research-innovation-hub",
  "ai-driven-product-development",
];
/** Order in the header drop-down. */
export const navServiceOrder = [
  "ai-driven-product-development",
  "ai-research-innovation-hub",
  "staff-augmentation-ai-talent-solutions",
  "corporate-ai-training-workforce-upskilling",
  "ai-powered-digital-marketing-growth-strategies",
];
/** Order in the footer list. */
export const footerServiceOrder = [
  "ai-driven-product-development",
  "staff-augmentation-ai-talent-solutions",
  "corporate-ai-training-workforce-upskilling",
  "ai-powered-digital-marketing-growth-strategies",
  "ai-research-innovation-hub",
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
export function servicesInOrder(order: string[]) {
  return order.map((slug) => getService(slug)).filter((s): s is Service => Boolean(s));
}
