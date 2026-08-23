export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'LaunchPad AI',
    quote:
      "Zaid delivered a production-ready SaaS platform in under 6 weeks. Reliable, sharp, and genuinely cares about the product.",
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'James Okafor',
    role: 'Engineering Director',
    company: 'Scalify',
    quote:
      "AI-enabled features shipped on time, every time. Zaid brought structure, speed, and reliability to our roadmap.",
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Priya Nair',
    role: 'Head of Product',
    company: 'Nexora Health',
    quote:
      "From design to deployment, the work was outstanding. Our conversion rate improved by 40% after the redesign.",
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop&crop=face',
  },
  {
    id: '4',
    name: 'Liam Hartley',
    role: 'Founder & CEO',
    company: 'TrustBridge',
    quote:
      "Zaid helped us go from idea to funded product. His technical judgment saved us months of re-work.",
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop&crop=face',
  },
  {
    id: '5',
    name: 'Amina Yusuf',
    role: 'Co-Founder',
    company: 'Flexi Commerce',
    quote:
      "Best engineering partner we've worked with. The e-commerce platform he built handles 10k+ daily users with zero downtime.",
    imageUrl:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&auto=format&fit=crop&crop=face',
  },
  {
    id: '6',
    name: 'Thomas Berg',
    role: 'VP Engineering',
    company: 'Cloudrift',
    quote:
      "Clean code, fast delivery, and always communicates proactively. Exactly what a startup needs in a technical partner.",
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop&crop=face',
  },
];

export default testimonials;
