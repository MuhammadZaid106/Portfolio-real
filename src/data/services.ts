export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const services: ServiceItem[] = [
  {
    id: 'travel',
    title: 'Travel & Tourism',
    description:
      'Build platforms users trust, book, and return to — from booking engines to travel blogs.',
    imageUrl:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Airplane wing over clouds',
  },
  {
    id: 'edtech',
    title: 'EdTech',
    description:
      'Top EdTech platforms with LMS systems, course builders, and better learning outcomes.',
    imageUrl:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Stack of books with graduation cap',
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    description:
      'Streamline property management, listings, and lead generation for real estate businesses.',
    imageUrl:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Modern real estate building',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description:
      'High-converting storefronts, product catalogs, and seamless checkout experiences.',
    imageUrl:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'E-commerce shopping products',
  },
  {
    id: 'saas',
    title: 'SaaS & Dashboards',
    description:
      'Scalable SaaS applications with beautiful dashboards, analytics, and user management.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'SaaS dashboard analytics',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'HIPAA-compliant healthcare platforms — patient portals, telemedicine, and scheduling.',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Healthcare medical technology',
  },
  {
    id: 'fintech',
    title: 'FinTech',
    description:
      'Secure financial platforms — banking dashboards, crypto tools, and payment integrations.',
    imageUrl:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Financial charts and graphs',
  },
  {
    id: 'ondemand',
    title: 'On Demand',
    description:
      'Get dedicated developers for any on-demand product — delivery, booking, marketplace.',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'On demand delivery service',
  },
  {
    id: 'creative',
    title: 'Creative Agency',
    description:
      'Stunning portfolios and agency sites that showcase brands and win clients instantly.',
    imageUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Creative design agency workspace',
  },
];

export default services;
