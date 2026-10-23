export type JobSection = { title: string; text?: string; items?: string[] };

export type Job = {
  id: string;
  title: string;
  date: string;
  department: string;
  image: string;
  sections: JobSection[];
};

const DATE = "18, August 2026";

export const careersIntro = {
  h1: "Where Talent Meets Opportunity",
  sub: "Let’s grow, innovate, and lead—together.",
  text: "Your next big opportunity starts here—let’s build something great together. We’re looking for passionate minds to join our creative journey.",
};

export const whyWork = {
  eyebrow: "Career",
  title: "Design the Future With Techsprout",
  lead: "Why Work with Us?",
  points: [
    {
      title: "Innovation at the Core",
      text: "Work on impactful, AI-first products from day one. Every idea matters here.",
    },
    {
      title: "Diverse Products, Real Problems",
      text: "From EdTech to Retail Analytics to Enterprise Automation—we build across domains that touch lives and industries.",
    },
    {
      title: "Ownership & Growth",
      text: "Be more than an employee. Own your projects. Grow your skills. Influence our future.",
    },
    {
      title: "Startup Energy + Vision",
      text: "Join an early-stage team where you’ll shape not just products, but the company itself.",
    },
  ],
};

export const jobs: Job[] = [
  {
    id: "front-end-developer",
    title: "Front-End Developer (Next.js / React.js)",
    date: DATE,
    department: "Front End Developer",
    image: "/images/project-img6.png",
    sections: [
      {
        title: "Role Overview:",
        text: "We’re hiring passionate **Front-End Developers** who have strong experience with **Next.js** and **React.js**. As part of our product team, you’ll help architect and build high-performance front-end applications that are visually appealing, fast, and scalable. A working knowledge of **Laravel** or previous experience collaborating with Laravel-based backends is a strong plus.",
      },
      {
        title: "Key Responsibilities:",
        items: [
          "Build and optimize modern, responsive front-end applications using **Next.js** and **React.js**.",
          "Work closely with product managers, backend developers, and designers to develop new features and improve user experience.",
          "Ensure cross-platform optimization and maintain consistent performance across devices and browsers.",
          "Integrate APIs and backend services (preferably Laravel-based).",
          "Write reusable, testable, and efficient code with a focus on performance.",
          "Collaborate in code reviews, design discussions, and sprint planning.",
          "Continuously improve application architecture, scalability, and maintainability.",
        ],
      },
      {
        title: "Required Skills:",
        items: [
          "2 to 5 years of professional experience in **React.js** and **Next.js** development.",
          "Strong understanding of **JavaScript**, **TypeScript**, **HTML5**, **CSS3**, and modern front-end practices.",
          "Experience with responsive design, UI libraries (Tailwind CSS, Bootstrap, etc.), and component-based architecture.",
          "Familiarity with RESTful APIs, JSON, and client-server integration.",
          "Knowledge of Git, CI/CD workflows, and agile methodologies.",
        ],
      },
      {
        title: "Preferred / Bonus Skills:",
        items: [
          "Hands-on experience or familiarity with **Laravel** backend and Blade templates.",
          "Understanding of SSR (Server Side Rendering), SSG (Static Site Generation), and performance optimization using Next.js.",
          "Experience with tools like Redux, Zustand, or Context API for state management.",
          "Exposure to AWS, Vercel, or other cloud deployment environments.",
          "Basic understanding of SEO, analytics, and third-party service integration.",
          "Interest in AI or willingness to work on AI-integrated front-end interfaces.",
        ],
      },
    ],
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    date: DATE,
    department: "UX Designer",
    image: "/images/project-img6.png",
    sections: [
      {
        title: "Role Overview",
        text: "We are seeking a passionate UX Designer who can transform complex ideas into intuitive and engaging experiences. As part of our design team, you will work closely with product managers, engineers, and business teams to create human-centric, AI-driven interfaces that delight users and align with our brand.",
      },
      {
        title: "Key Responsibilities",
        items: [
          "Conduct user research, gather insights, and translate them into user journeys, wireframes, and interactive prototypes",
          "Design user flows and experiences that are simple, elegant, and effective",
          "Collaborate with cross-functional teams including product managers and developers to implement intuitive designs",
          "Participate in usability testing and iterate designs based on feedback",
          "Contribute to the evolution of the design system and brand guidelines",
          "Advocate for user-centric thinking in all product discussions",
        ],
      },
      {
        title: "Requirements",
        items: [
          "1–3 years of professional experience in UX design or interaction design",
          "Strong portfolio showcasing UX design process and high-quality deliverables",
          "Proficiency in design tools such as Figma, Adobe XD, Sketch, or similar",
          "Good understanding of UX principles, human-centered design, and accessibility",
          "Basic understanding of HTML/CSS (a plus, not mandatory)",
          "Strong communication and presentation skills",
          "Ability to work in a fast-paced, collaborative environment",
        ],
      },
      {
        title: "Preferred Qualities",
        items: [
          "Experience working on AI-based or data-heavy applications",
          "Familiarity with agile methodologies and product development cycles",
          "Interest in AI/ML technologies and how they impact design",
        ],
      },
      {
        title: "Why Join Us?",
        items: [
          "Work on real-world AI-powered products with a strong social and business impact",
          "Creative freedom and a high degree of ownership",
          "Dynamic and collaborative work culture",
          "Opportunities to learn and grow alongside passionate tech leaders",
        ],
      },
    ],
  },
  {
    id: "ai-software-developer",
    title: "AI Software Developer",
    date: DATE,
    department: "Software Developer",
    image: "/images/project-img5.png",
    sections: [
      {
        title: "Role Overview:",
        text: "We are looking for a passionate and innovative AI Software Developer to join our fast-growing team. In this role, you will be responsible for designing, developing, and deploying AI-driven features and integrations for our suite of SaaS products. You’ll work closely with product managers, backend and frontend developers, and data engineers to bring intelligent experiences to life.",
      },
      {
        title: "Key Responsibilities:",
        items: [
          "Develop AI/ML-powered features using technologies like Python, OpenAI APIs, LLMs, NLP, and prompt engineering.",
          "Integrate AI models into full-stack SaaS applications.",
          "Work on natural language understanding, recommendation engines, predictive analytics, and chatbot assistants.",
          "Collaborate with frontend and backend developers to implement AI functionality seamlessly.",
          "Design and fine-tune prompts to generate optimal results from LLMs.",
          "Analyze customer problems and identify how AI can deliver actionable solutions.",
          "Build scalable and secure AI components with a focus on performance and usability.",
          "Stay updated with the latest trends in GenAI, ML, and cloud AI services (OpenAI, AWS, etc.)",
        ],
      },
      {
        title: "Required Skills:",
        items: [
          "Proficiency in Python and experience with AI/ML libraries such as TensorFlow, PyTorch, or Scikit-learn.",
          "Hands-on experience using OpenAI APIs, LangChain, or similar LLM-based frameworks.",
          "Strong knowledge of prompt engineering, embeddings, and retrieval-based systems.",
          "Experience with REST APIs and integration of AI components in web applications.",
          "Familiarity with SQL/NoSQL databases and data pipelines.",
          "Good understanding of software engineering practices including Git, CI/CD, and agile methodology.",
          "Ability to translate business problems into AI-based solutions.",
        ],
      },
      {
        title: "Preferred Qualifications:",
        items: [
          "Experience working on SaaS products in any of the following domains: EdTech, Retail Analytics, Healthcare, or HRTech.",
          "Exposure to full-stack development (React.js / Next.js and Laravel is a plus).",
          "Knowledge of cloud platforms like AWS, GCP, or Azure.",
          "Experience in building chatbots, AI copilots, or recommendation engines.",
        ],
      },
    ],
  },
  {
    id: "platform-engineer-laravel-mysql",
    title: "Platform Engineer – Laravel + MySQL",
    date: DATE,
    department: "Platform Engineer – Laravel + MySQL",
    image: "/images/project-img4.png",
    sections: [
      {
        title: "Role Overview:",
        text: "We are looking for a hands-on and passionate Platform Engineer – Laravel + MySQL to architect and build the backend foundation of our AI-driven SaaS products. This is a core role in our engineering team where you’ll be responsible for developing scalable APIs, managing databases, and ensuring the stability and performance of our platforms.",
      },
      {
        title: "Key Responsibilities:",
        items: [
          "Design, develop, and maintain backend systems using Laravel and MySQL.",
          "Build and manage RESTful APIs for web and mobile frontends, third-party integrations, and AI modules.",
          "Ensure code quality, application performance, and system security.",
          "Work closely with frontend developers, AI engineers, and product managers to ship new features.",
          "Write clean, modular, and testable code following best software development practices.",
          "Manage database schema design, query optimization, and data migrations.",
          "Participate in sprint planning, code reviews, testing, and documentation efforts.",
        ],
      },
      {
        title: "Required Skills:",
        items: [
          "2–5 years of hands-on experience with Laravel (PHP) and MySQL.",
          "Strong understanding of REST APIs, MVC architecture, and backend design patterns.",
          "Solid experience with database optimization, indexing, and query performance tuning.",
          "Familiarity with Git, version control workflows, and deployment processes.",
          "Exposure to cloud environments like AWS, DigitalOcean, or similar platforms.",
          "Basic knowledge of frontend technologies (HTML, CSS, JavaScript) for integration purposes.",
        ],
      },
      {
        title: "Bonus Points For:",
        items: [
          "Experience with Laravel Nova, Livewire, or modern admin frameworks.",
          "Familiarity with React, Next.js, or frontend build tools.",
          "Previous work on scalable SaaS platforms or AI-integrated applications.",
          "Experience with payment gateway, SMS/WhatsApp API integrations.",
        ],
      },
    ],
  },
  {
    id: "ai-product-manager",
    title: "AI Product Manager",
    date: DATE,
    department: "AI Product Manager",
    image: "/images/project-img3.png",
    sections: [
      {
        title: "Role Overview:",
        text: "We are looking for a strategic and execution-focused AI Product Manager to lead the roadmap, development, and growth of our AI-powered SaaS products. You’ll work closely with engineering, design, marketing, and customers to define intelligent features that solve real-world problems using GenAI, LLMs, and machine learning.",
      },
      {
        title: "Key Responsibilities:",
        items: [
          "Own the end-to-end product lifecycle for AI/ML features across one or more SaaS platforms.",
          "Define product vision, roadmap, and strategy aligned with business goals and customer needs.",
          "Collaborate with engineering to design AI-driven features using LLMs (OpenAI, LangChain, etc.), prompt engineering, and NLP techniques.",
          "Create PRDs, user stories, and wireframes that translate AI capabilities into intuitive user experiences.",
          "Prioritize product backlogs based on impact, feasibility, and business value.",
          "Drive go-to-market strategy in partnership with sales, marketing, and customer success teams.",
          "Analyze product usage data and feedback to optimize and iterate on product features.",
          "Stay up-to-date with AI trends and bring innovative ideas to drive product differentiation.",
        ],
      },
      {
        title: "Required Skills & Experience:",
        items: [
          "4–8 years of total product management experience, with 2+ years in AI/ML product development.",
          "Strong understanding of LLMs, prompt engineering, embeddings, and applied AI in SaaS.",
          "Experience working closely with cross-functional teams (engineering, design, data, and GTM).",
          "Ability to translate technical concepts into user-centric features.",
          "Strong data-driven mindset; experience with tools like GA, Mixpanel, or Amplitude.",
          "Excellent communication, documentation, and stakeholder management skills.",
          "Familiarity with agile/scrum methodology.",
        ],
      },
      {
        title: "Preferred Qualifications:",
        items: [
          "Experience in launching AI copilots, recommendation engines, predictive analytics, or chatbot interfaces.",
          "Background in Computer Science, Data Science, or related technical field is a plus.",
          "Exposure to B2B SaaS domains like EdTech, Retail, or HRTech.",
          "Experience working with OpenAI APIs, LangChain, Pinecone, or vector databases is a strong advantage.",
        ],
      },
      {
        title: "Why Join Us?",
        items: [
          "Own and shape category-defining AI products from 0 to 1",
          "Work with a dynamic team of engineers, designers, and AI experts",
          "Get in early and grow with a fast-moving, high-impact startup",
          "Opportunity to build products that are used and loved by thousands of businesses and users",
        ],
      },
    ],
  },
  {
    id: "growth-marketing-specialist",
    title: "Growth Marketing Specialist – Digital & Performance Marketing",
    date: DATE,
    // The live site tags this role "Software Developer", which looks like a copy-paste slip.
    department: "Growth Marketing",
    image: "/images/project-img2.png",
    sections: [
      {
        title: "Role Overview:",
        text: "We are looking for a Growth Marketing Specialist who is data-driven, creative, and passionate about scaling startups through strategic digital marketing initiatives. You’ll be responsible for driving user acquisition, lead generation, and engagement across channels, blending organic tactics with performance marketing strategies.",
      },
      {
        title: "Key Responsibilities:",
        items: [
          "Develop and execute end-to-end digital marketing strategies across SEO, SEM, Social Media, Email Marketing, and Paid Ads.",
          "Run and optimize campaigns on Google Ads, Facebook, Instagram, and LinkedIn with a clear focus on ROAS and CPL.",
          "Own and improve website traffic and keyword rankings through on-page and off-page SEO techniques.",
          "Set up and analyze performance metrics using Google Analytics, Search Console, Tag Manager, and similar tools.",
          "Collaborate with design and content teams to develop compelling creatives, ad copies, landing pages, and blog posts.",
          "Manage email marketing, automation flows, and retargeting campaigns for lead nurturing.",
          "Monitor market trends and competitor strategies; adapt campaigns accordingly.",
          "Prepare campaign reports, growth dashboards, and actionable insights for stakeholders.",
        ],
      },
      {
        title: "Required Skills:",
        items: [
          "Proven experience (3–6 years) in digital marketing, preferably for a SaaS or tech-based product.",
          "Deep knowledge of Google Ads, Meta Ads Manager, SEO tools (Ahrefs, SEMrush), and analytics platforms.",
          "Hands-on expertise in keyword research, funnel design, and conversion optimization.",
          "Strong grasp of marketing metrics and A/B testing.",
          "Excellent verbal and written communication skills.",
          "Ability to multitask in a fast-paced startup environment.",
        ],
      },
      {
        title: "Bonus Points For:",
        items: [
          "Experience with B2B marketing and lead nurturing strategies.",
          "Knowledge of tools like HubSpot, Zoho, Mailchimp, or ActiveCampaign.",
          "Exposure to AI, EdTech, or Healthcare marketing domains.",
          "Prior experience in setting up affiliate or influencer campaigns.",
        ],
      },
    ],
  },
  {
    id: "ai-research-scientist",
    title: "AI Research Scientist",
    date: DATE,
    department: "AI Research Scientist",
    image: "/images/project-img1.png",
    sections: [
      {
        title: "Role Overview:",
        text: "We are looking for a highly motivated and curious AI Research Scientist to lead the development of innovative AI solutions that power our SaaS platforms. You’ll explore cutting-edge models, experiment with prompt engineering, and translate theoretical AI advancements into practical product features.",
      },
      {
        title: "Key Responsibilities:",
        items: [
          "Conduct applied research in natural language processing, generative AI, and machine learning.",
          "Design, develop, and optimize LLM-based applications using OpenAI, HuggingFace, LangChain, and similar frameworks.",
          "Build and evaluate prototypes that enhance AI copilots, recommendation systems, summarization engines, and forecasting models.",
          "Explore advancements in prompt engineering, embeddings, vector search, and fine-tuning techniques.",
          "Collaborate with product and engineering teams to integrate research outcomes into real-world SaaS products.",
          "Publish internal whitepapers, contribute to patents, and stay updated with the latest AI trends.",
          "Evaluate model performance, fairness, interpretability, and scalability for production use.",
        ],
      },
      {
        title: "Required Skills & Experience:",
        items: [
          "3–7 years of experience in AI/ML research, preferably in NLP or Generative AI.",
          "Strong programming skills in Python and experience with ML libraries (e.g., PyTorch, TensorFlow, Transformers).",
          "Deep understanding of LLMs, RAG (retrieval-augmented generation), vector databases (e.g., Pinecone, FAISS), and embeddings.",
          "Hands-on experience with OpenAI APIs, LangChain, HuggingFace models, and fine-tuning.",
          "Track record of building and scaling AI models in production or applied research environments.",
          "Solid grasp of model evaluation, data preprocessing, and A/B testing.",
          "Master’s or PhD in Computer Science, Artificial Intelligence, Machine Learning, or a related field.",
        ],
      },
      {
        title: "Bonus Points For:",
        items: [
          "Experience working on AI copilots or conversational agents.",
          "Knowledge of reinforcement learning from human feedback (RLHF).",
          "Contributions to academic publications or open-source AI projects.",
          "Previous experience in building AI features for SaaS or B2B platforms.",
        ],
      },
    ],
  },
];
