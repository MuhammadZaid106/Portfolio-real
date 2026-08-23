export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 'pegador',
    title: 'Pegador',
    category: 'E-Commerce',
    description: 'A premium, high-performance streetwear shopping platform with smooth animations and layout transitions.',
    link: 'https://pegador.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'aetheria',
    title: 'Aetheria Travel',
    category: 'Travel & Booking',
    description: 'Modern travel and booking platform featuring rich search capabilities, interactive maps, and itinerary builders.',
    link: 'https://aetheria-travel.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'landly',
    title: 'Landly Real Estate',
    category: 'Real Estate Portal',
    description: 'Full-featured real estate listing portal with filters, custom property detail pages, and contact integrations.',
    link: 'https://landlyrealestate.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'aethermart',
    title: 'AetherMart',
    category: 'E-Commerce',
    description: 'Fully responsive e-commerce hub featuring a product catalog, user cart system, and secure checkout simulation.',
    link: 'https://aethermart.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'portfolio',
    title: 'Zaid Portfolio',
    category: 'Creative Portfolio',
    description: 'Ultra-fast personal portfolio utilizing Next.js, Framer Motion, and Tailwind CSS for a premium showcase.',
    link: 'https://zaidn.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80&auto=format&fit=crop',
  },
];

export default projects;
