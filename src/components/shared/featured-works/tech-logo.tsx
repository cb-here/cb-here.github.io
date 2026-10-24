import type { ComponentType } from 'react'

import { AudioLinesIcon, CodeIcon, LanguagesIcon } from 'lucide-react'
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from 'react-icons/si'

type TechIcon = {
  icon: ComponentType<{ className?: string }>
  className: string
}

const TECH_ICONS: Record<string, TechIcon> = {
  React: { icon: SiReact, className: 'text-[#61DAFB]' },
  'Next.js': { icon: SiNextdotjs, className: 'text-black dark:text-white' },
  TypeScript: { icon: SiTypescript, className: 'text-[#3178C6]' },
  'Tailwind CSS': { icon: SiTailwindcss, className: 'text-[#38BDF8]' },
  Node: { icon: SiNodedotjs, className: 'text-[#68A063]' },
  'Node.js': { icon: SiNodedotjs, className: 'text-[#68A063]' },
  Express: { icon: SiExpress, className: 'text-black dark:text-white' },
  MongoDB: { icon: SiMongodb, className: 'text-[#4DB33D]' },
  Vercel: { icon: SiVercel, className: 'text-black dark:text-white' },
  TTS: { icon: AudioLinesIcon, className: 'text-accent' },
  'Hinglish Translation': { icon: LanguagesIcon, className: 'text-accent' }
}

const TechLogo = ({ name }: { name: string }) => {
  const { icon: Icon, className } = TECH_ICONS[name] ?? { icon: CodeIcon, className: 'text-muted-foreground' }

  return (
    <span title={name} className='flex size-6 items-center justify-center rounded-full bg-(--background-darker)'>
      <Icon className={`size-3.5 ${className}`} />
      <span className='sr-only'>{name}</span>
    </span>
  )
}

export default TechLogo
