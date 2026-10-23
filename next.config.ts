import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { remotePatterns: [{ protocol: 'https', hostname: 'techsprout.ai' }] },
  async redirects() {
    return [
      { source: '/products-solutions', destination: '/products', permanent: true },
      { source: '/products-solutions/', destination: '/products', permanent: true },
      { source: '/services/staff-augmentation', destination: '/services/staff-augmentation-ai-talent-solutions', permanent: true },
      { source: '/services/corporate-ai-training', destination: '/services/corporate-ai-training-workforce-upskilling', permanent: true },
      { source: '/services/ai-powered-digital-marketing', destination: '/services/ai-powered-digital-marketing-growth-strategies', permanent: true },
      { source: '/product/trooba-factory-flow-intelligence-manufacturing', destination: '/products/trooba-factory-flow-intelligence-manufacturing', permanent: true },
      { source: '/product/splash-ai-studios', destination: '/products/splash-ai-studios', permanent: true },
      { source: '/product/postmngr', destination: '/products/postmngr', permanent: true },
      { source: '/product/startupsaga', destination: '/products/startupsaga', permanent: true },
      { source: '/product/skillvedika', destination: '/products/skillvedika', permanent: true },
      { source: '/product/surestart-ai-ai-powered-product-idea-validator', destination: '/products', permanent: true },
      { source: '/product/kairos-ai-the-future-of-sap-development', destination: '/products', permanent: true },
      { source: '/product/futureforge-ai-powered-career-twin', destination: '/products', permanent: true },
      { source: '/product/dealgenie-your-autonomous-sales-sidekick', destination: '/products', permanent: true },
      { source: '/product/dealgenie-autonomous-sales-sidekick', destination: '/products', permanent: true },
      { source: '/service/ai-driven-product-development', destination: '/services/ai-driven-product-development', permanent: true },
      { source: '/service/ai-research-innovation-hub', destination: '/services/ai-research-innovation-hub', permanent: true },
      { source: '/service/corporate-ai-training-workforce-upskilling', destination: '/services/corporate-ai-training-workforce-upskilling', permanent: true },
      { source: '/service/staff-augmentation-ai-talent-solutions', destination: '/services/staff-augmentation-ai-talent-solutions', permanent: true },
      { source: '/service/ai-powered-digital-marketing-growth-strategies', destination: '/services/ai-powered-digital-marketing-growth-strategies', permanent: true },
      { source: '/techsprout-ai-blog-ai-first-product-development-india', destination: '/blogs/techsprout-ai-blog-ai-first-product-development-india', permanent: true },
    ];
  },
};
export default nextConfig;
