// Next Imports
import Link from 'next/link'

// Third-party Imports
import { ArrowRightIcon } from 'lucide-react'

// Type Imports
import type { Project } from '@/lib/projects'

// Component Imports
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import TechLogo from './tech-logo'

// Util Imports
import { cn } from '@/lib/utils'

type FeaturedWorkCardProps = {
  project: Project
  variant?: 'hero' | 'grid'
  imageSide?: 'left' | 'right'
}

const FeaturedWorkCard = ({ project, variant = 'grid', imageSide = 'right' }: FeaturedWorkCardProps) => {
  const isHero = variant === 'hero'

  return (
    <Link href={project.href} target='_blank' rel='noopener noreferrer' className='block h-full'>
      <Card
        className={cn(
          'group ring-border h-full gap-0 overflow-hidden rounded-[24px] p-0 shadow-lg transition-all duration-300',
          isHero && (imageSide === 'left' ? 'md:flex-row-reverse' : 'md:flex-row')
        )}
      >
        <div
          className={cn('order-2 flex flex-1 flex-col justify-between gap-3 p-4 sm:p-6', isHero ? 'sm:py-8 md:order-0' : '')}
        >
          <div className='space-y-3'>
            <h3 className='line-clamp-2 text-xl font-medium md:text-2xl lg:text-[26px]'>{project.title}</h3>
            <div className='flex items-center gap-2.5'>
              <Badge variant='outline' className='rounded-full border-(--background-darker) bg-(--background-darker)'>
                {project.status}
              </Badge>
              <div className='flex items-center gap-1'>
                {project.tools.map(tool => (
                  <TechLogo key={tool} name={tool} />
                ))}
              </div>
            </div>
            <p className='text-muted-foreground line-clamp-3 text-base'>{project.description}</p>
          </div>

          <div className='flex items-center justify-between gap-2 border-t pt-3'>
            <div className='flex items-center gap-3'>
              <div className='bg-background flex size-10.5 shrink-0 items-center justify-center rounded-md'>
                <img src={project.logo} alt={`${project.title} logo`} className='size-7' />
              </div>
              <div className='text-base'>
                <p className='text-foreground font-medium'>{project.organisation}</p>
                <p className='text-muted-foreground'>{project.role}</p>
              </div>
            </div>
            <div className='bg-card dark:border-accent-foreground/10 flex size-11 items-center justify-center rounded-full border shadow-md'>
              <Button
                size='icon'
                variant='outline'
                className='hover:bg-accent dark:hover:bg-accent bg-accent dark:bg-accent text-background hover:text-background dark:text-accent-foreground border-accent size-7 shrink-0 overflow-hidden rounded-full'
              >
                <span className='relative block size-4'>
                  <ArrowRightIcon className='absolute inset-0 size-4 -rotate-45 transition-transform duration-400 ease-in-out group-hover:translate-x-5 group-hover:-translate-y-5' />
                  <ArrowRightIcon className='absolute inset-0 size-4 -translate-x-5 translate-y-5 -rotate-45 transition-transform duration-400 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0' />
                </span>
                <span className='sr-only'>View project: {project.title}</span>
              </Button>
            </div>
          </div>
        </div>

        {project.image && (
          <div className={cn('relative order-1 w-full overflow-hidden', isHero ? 'md:order-0 md:max-w-1/2' : '')}>
            <img
              src={project.image}
              alt={project.title}
              className={cn(
                'w-full object-cover transition-all duration-300 group-hover:scale-105',
                isHero ? 'h-full max-h-81' : 'max-h-68'
              )}
            />
          </div>
        )}
      </Card>
    </Link>
  )
}

export default FeaturedWorkCard
