import { UserIcon } from 'lucide-react'
import {
  SiDjango,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite
} from 'react-icons/si'

import { getGithubContributions } from '@/lib/github'

import GithubIcon from '@/assets/svg/github-icon'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import ContributionGraph from './contribution-graph'

import { cn } from '@/lib/utils'

const GITHUB_USERNAME = 'cb-here'

const TECH_STACK = [
  { name: 'React', icon: SiReact, className: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, className: 'text-black dark:text-white' },
  { name: 'TypeScript', icon: SiTypescript, className: 'text-[#3178C6]' },
  { name: 'JavaScript', icon: SiJavascript, className: 'text-[#F7DF1E]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, className: 'text-[#38BDF8]' },
  { name: 'Vite', icon: SiVite, className: 'text-[#646CFF]' },
  { name: 'Node.js', icon: SiNodedotjs, className: 'text-[#68A063]' },
  { name: 'Express', icon: SiExpress, className: 'text-black dark:text-white' },
  { name: 'Django', icon: SiDjango, className: 'text-[#0C4B33] dark:text-[#44B78B]' },
  { name: 'Python', icon: SiPython, className: 'text-[#3776AB]' },
  { name: 'MongoDB', icon: SiMongodb, className: 'text-[#4DB33D]' },
  { name: 'Git', icon: SiGit, className: 'text-[#F1502F]' },
  { name: 'GitHub', icon: SiGithub, className: 'text-black dark:text-white' },
  { name: 'Vercel', icon: SiVercel, className: 'text-black dark:text-white' },
  { name: 'Postman', icon: SiPostman, className: 'text-[#FF6C37]' },
  { name: 'NPM', icon: SiNpm, className: 'text-[#CB3837]' }
]

const LOGO_ROWS = [TECH_STACK.slice(0, 8), TECH_STACK.slice(8)]

const ActivityCard = async () => {
  const contributions = await getGithubContributions(GITHUB_USERNAME)

  return (
    <Card className='ring-border gap-6 rounded-3xl p-6 shadow-lg'>
      <CardContent className='space-y-4 p-0'>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target='_blank'
          rel='noopener noreferrer'
          className='group/github flex w-fit items-center gap-3'
        >
          <span className='relative shrink-0'>
            <Avatar size='lg'>
              <AvatarImage src={`https://github.com/${GITHUB_USERNAME}.png?size=80`} alt={GITHUB_USERNAME} />
              <AvatarFallback className='bg-(--background-darker)'>
                <UserIcon className='text-muted-foreground size-5' />
              </AvatarFallback>
            </Avatar>
            <span className='bg-card ring-card absolute -right-1 -bottom-1 flex size-4.5 items-center justify-center rounded-full ring-2'>
              <GithubIcon className='size-3' />
            </span>
          </span>
          <div>
            <p className='group-hover/github:text-accent text-sm font-semibold transition-colors'>{GITHUB_USERNAME}</p>
            <p className='text-muted-foreground text-xs opacity-75'>
              {contributions?.total
                ? `${contributions.total} contributions in the last year`
                : 'Contribution activity on GitHub'}
            </p>
          </div>
        </a>

        {contributions && <ContributionGraph rows={contributions.rows} />}
      </CardContent>

      <div className='border-border -mx-6 border-t' />

      <div className='min-w-0 space-y-8'>
        {LOGO_ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]'
          >
            <div
              className={cn(
                'flex w-max animate-[marquee_25s_linear_infinite] gap-8',
                rowIndex % 2 === 1 && 'direction-reverse'
              )}
            >
              {[...row, ...row, ...row, ...row].map(({ name, icon: Icon, className }, logoIndex) => (
                <div
                  key={`${name}-${logoIndex}`}
                  title={name}
                  className='group/logo bg-background flex size-16 shrink-0 items-center justify-center rounded-md'
                >
                  <Icon
                    className={cn(
                      'size-9 transition-transform duration-300 group-hover/logo:scale-110',
                      className
                    )}
                  />
                  <span className='sr-only'>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default ActivityCard
