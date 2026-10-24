// Type Imports
import type { Project } from '@/lib/projects'

// Component Imports
import Eyebrow from '@/components/shared/eyebrow/eyebrow'
import FeaturedWorkCard from './featured-work-card'
import { cn } from '@/lib/utils'

type FeaturedWorksProps = {
  projects: Project[]
  id?: string
  eyebrow?: string
  title?: string
  layout?: 'bento' | 'vertical'
  showBorder?: boolean
}

const CYCLE_SIZE = 3

// Groups projects into cycles of [hero, grid, grid] for the bento layout
const chunkIntoCycles = (projects: Project[]): Project[][] => {
  const cycles: Project[][] = []

  for (let i = 0; i < projects.length; i += CYCLE_SIZE) {
    cycles.push(projects.slice(i, i + CYCLE_SIZE))
  }

  return cycles
}

const FeaturedWorks = ({
  projects,
  id = 'featured-works',
  eyebrow = 'Featured works',
  title = 'These are ones that taught me the most',
  layout = 'bento',
  showBorder = true
}: FeaturedWorksProps) => {
  return (
    <section id={id} className={cn('py-8 sm:py-16 lg:py-24', showBorder && 'border-b')}>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='space-y-2'>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{title}</h2>
        </div>

        {layout === 'vertical' ? (
          <div className='grid gap-8 sm:grid-cols-2'>
            {projects.map(project => (
              <FeaturedWorkCard key={project.slug} project={project} variant='grid' />
            ))}
          </div>
        ) : (
          <div className='space-y-8'>
            {chunkIntoCycles(projects).map((cycle, cycleIndex) => (
              <div key={cycle[0].slug} className='space-y-8'>
                <FeaturedWorkCard
                  project={cycle[0]}
                  variant='hero'
                  imageSide={cycleIndex % 2 === 0 ? 'right' : 'left'}
                />

                {cycle.length > 1 && (
                  <div className='grid gap-8 sm:grid-cols-2'>
                    {cycle.slice(1).map(project => (
                      <FeaturedWorkCard key={project.slug} project={project} variant='grid' />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedWorks
