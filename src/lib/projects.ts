
export type Project = {
  slug: string
  title: string
  description: string
  organisation: string
  role: string
  status: string
  href: string
  image?: string
  tools: string[]
  logo: string
}

export const projects: Project[] = [
  {
    slug: 'suno-kahani',
    organisation: 'Personal Project',
    role: 'Full Stack Developer',
    logo: '/images/projects/suno-kahani-logo.webp',
    title: 'Suno Kahani',
    description: 'Story-to-audio generator with Hinglish→Hindi translation and real-time text-to-speech playback.',
    status: 'In Progress',
    href: 'https://suno-kahani.vercel.app/',
    image: '/images/projects/suno-kahani.webp',
    tools: ['React', 'Node.js', 'Express', 'TTS', 'Hinglish Translation']
  },
  {
    slug: 'noter',
    organisation: 'Personal Project',
    role: 'Full Stack Developer',
    logo: '/images/projects/noter-logo.webp',
    title: 'Noter',
    description: 'A note taking web app.',
    status: 'Deployed',
    href: 'https://noter-new.vercel.app/',
    image: '/images/projects/noter.webp',
    tools: ['React', 'TypeScript', 'Vercel', 'Node', 'Express']
  },
  {
    slug: 'quickserve',
    organisation: 'Personal Project',
    role: 'Full Stack Developer',
    logo: '/images/projects/quickserve-logo.webp',
    title: 'Quickserve',
    description: 'Book trusted household workers like cleaners, cooks and plumbers, with real-time slot booking.',
    status: 'Deployed',
    href: 'https://github.com/cb-here/QuickServe',
    image: '/images/projects/quickserve.webp',
    tools: ['React', 'Node.js', 'MongoDB']
  },
  {
    slug: 'personal-learning-path',
    organisation: 'Personal Project',
    role: 'Full Stack Developer',
    logo: '/images/projects/personal-learning-path-logo.webp',
    title: 'Personal Learning Path',
    description: 'Personalized learning roadmap generator with progress tracking.',
    status: 'Deployed',
    href: 'https://personal-learning-path.vercel.app/',
    image: '/images/projects/personal-learning-path.webp',
    tools: ['React', 'TypeScript', 'Vercel', 'Node', 'Express']
  }
]
