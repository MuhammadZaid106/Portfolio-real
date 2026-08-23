export interface TechItem {
  name: string;
  color: string;      // icon bg color (brand color)
  textColor: string;  // icon text/letter color
  abbr: string;       // short label shown in the icon badge
  tag?: string;       // optional sub-label like "> 5 yrs"
}

export interface TechCategory {
  id: string;
  label: string;
}

export const techCategories: TechCategory[] = [
  { id: 'frontend',  label: 'Front End' },
  { id: 'backend',   label: 'Back End'  },
  { id: 'database',  label: 'Database'  },
  { id: 'devops',    label: 'DevOps'    },
  { id: 'mobile',    label: 'Mobile'    },
  { id: 'ai',        label: 'AI & ML'   },
];

export const techStack: Record<string, TechItem[]> = {
  frontend: [
    { name: 'React',         color: '#20232a', textColor: '#61DAFB', abbr: 'Re',  tag: '> 3 yrs' },
    { name: 'Next.js',       color: '#000000', textColor: '#ffffff', abbr: 'N.',  tag: '> 3 yrs' },
    { name: 'TypeScript',    color: '#3178c6', textColor: '#ffffff', abbr: 'TS',  tag: '> 2 yrs' },
    { name: 'Tailwind CSS',  color: '#06b6d4', textColor: '#ffffff', abbr: 'TW',  tag: '> 2 yrs' },
    { name: 'Framer Motion', color: '#0055FF', textColor: '#ffffff', abbr: 'Fm',  tag: '> 1 yr'  },
    { name: 'Vue.js',        color: '#42b883', textColor: '#ffffff', abbr: 'Vu',  tag: '> 1 yr'  },
    { name: 'HTML5',         color: '#e34f26', textColor: '#ffffff', abbr: 'H5',  tag: 'Expert'  },
    { name: 'CSS3',          color: '#264de4', textColor: '#ffffff', abbr: 'C3',  tag: 'Expert'  },
  ],
  backend: [
    { name: 'Node.js',   color: '#339933', textColor: '#ffffff', abbr: 'No',  tag: '> 3 yrs' },
    { name: 'Express',   color: '#000000', textColor: '#ffffff', abbr: 'Ex',  tag: '> 3 yrs' },
    { name: 'Python',    color: '#3572A5', textColor: '#ffd43b', abbr: 'Py',  tag: '> 2 yrs' },
    { name: 'FastAPI',   color: '#009688', textColor: '#ffffff', abbr: 'FA',  tag: '> 1 yr'  },
    { name: 'NestJS',    color: '#e0234e', textColor: '#ffffff', abbr: 'Ne',  tag: '> 1 yr'  },
    { name: 'GraphQL',   color: '#e535ab', textColor: '#ffffff', abbr: 'GQ',  tag: '> 1 yr'  },
    { name: 'REST APIs', color: '#ff6f00', textColor: '#ffffff', abbr: 'API', tag: 'Expert'  },
    { name: 'tRPC',      color: '#398ccb', textColor: '#ffffff', abbr: 'tR',  tag: '> 1 yr'  },
  ],
  database: [
    { name: 'PostgreSQL', color: '#336791', textColor: '#ffffff', abbr: 'PG',  tag: '> 2 yrs' },
    { name: 'MongoDB',    color: '#47a248', textColor: '#ffffff', abbr: 'MG',  tag: '> 2 yrs' },
    { name: 'MySQL',      color: '#00758f', textColor: '#ffffff', abbr: 'MY',  tag: '> 2 yrs' },
    { name: 'Redis',      color: '#dc382d', textColor: '#ffffff', abbr: 'Re',  tag: '> 1 yr'  },
    { name: 'Supabase',   color: '#3ecf8e', textColor: '#1c1c1c', abbr: 'SB',  tag: '> 1 yr'  },
    { name: 'Prisma',     color: '#0c3249', textColor: '#ffffff', abbr: 'Pr',  tag: '> 2 yrs' },
    { name: 'Drizzle',    color: '#c5f74f', textColor: '#1c1c1c', abbr: 'Dr',  tag: '> 1 yr'  },
    { name: 'Firebase',   color: '#FFCA28', textColor: '#1c1c1c', abbr: 'FB',  tag: '> 1 yr'  },
  ],
  devops: [
    { name: 'Docker',          color: '#2496ed', textColor: '#ffffff', abbr: 'Do',  tag: '> 1 yr'  },
    { name: 'AWS',             color: '#FF9900', textColor: '#ffffff', abbr: 'AW',  tag: '> 1 yr'  },
    { name: 'Vercel',          color: '#000000', textColor: '#ffffff', abbr: 'Vc',  tag: '> 2 yrs' },
    { name: 'GitHub Actions',  color: '#2088ff', textColor: '#ffffff', abbr: 'GA',  tag: '> 1 yr'  },
    { name: 'Nginx',           color: '#009639', textColor: '#ffffff', abbr: 'Nx',  tag: '> 1 yr'  },
    { name: 'Linux',           color: '#FCC624', textColor: '#1c1c1c', abbr: 'Li',  tag: 'Expert'  },
    { name: 'Git',             color: '#f05032', textColor: '#ffffff', abbr: 'Gt',  tag: 'Expert'  },
    { name: 'CI/CD',           color: '#555555', textColor: '#ffffff', abbr: 'CI',  tag: '> 1 yr'  },
  ],
  mobile: [
    { name: 'React Native', color: '#20232a', textColor: '#61DAFB', abbr: 'RN',  tag: '> 2 yrs' },
    { name: 'Expo',         color: '#000020', textColor: '#ffffff', abbr: 'Ep',  tag: '> 1 yr'  },
    { name: 'Flutter',      color: '#027DFD', textColor: '#ffffff', abbr: 'Fl',  tag: '> 1 yr'  },
    { name: 'iOS (Swift)',  color: '#F05138', textColor: '#ffffff', abbr: 'SW',  tag: 'Familiar' },
    { name: 'Android',      color: '#3DDC84', textColor: '#1c1c1c', abbr: 'An',  tag: 'Familiar' },
    { name: 'PWA',          color: '#5a0fc8', textColor: '#ffffff', abbr: 'PW',  tag: '> 1 yr'  },
  ],
  ai: [
    { name: 'OpenAI API',    color: '#10a37f', textColor: '#ffffff', abbr: 'AI',  tag: '> 1 yr'  },
    { name: 'LangChain',     color: '#1c3a5e', textColor: '#ffffff', abbr: 'LC',  tag: '> 1 yr'  },
    { name: 'Hugging Face',  color: '#FFD21E', textColor: '#1c1c1c', abbr: 'HF',  tag: 'Familiar' },
    { name: 'TensorFlow',    color: '#FF6F00', textColor: '#ffffff', abbr: 'TF',  tag: 'Familiar' },
    { name: 'Pinecone',      color: '#000000', textColor: '#ffffff', abbr: 'Pi',  tag: '> 1 yr'  },
    { name: 'Vercel AI SDK', color: '#000000', textColor: '#ffffff', abbr: 'VA',  tag: '> 1 yr'  },
  ],
};
