'use client'

// Type Imports
import { useEffect, useRef, type CSSProperties } from 'react'

import type { ContributionDay } from '@/lib/github'

// Component Imports
import { Tooltip, TooltipContent, TooltipTrigger, createTooltipHandle } from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

const CONTRIBUTION_LEVEL_STYLES = [
  'bg-background',
  'bg-[#9be9a8] dark:bg-[#0e4429]',
  'bg-[#40c463] dark:bg-[#006d32]',
  'bg-[#30a14e] dark:bg-[#26a641]',
  'bg-[#216e39] dark:bg-[#39d353]'
]

// One tooltip shared by every cell: it moves between cells instead of each cell opening its own
const tooltipHandle = createTooltipHandle<string>()

const ContributionGraph = ({ rows }: { rows: (ContributionDay | null)[][] }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // On phones the year scrolls sideways; start at the latest weeks like GitHub does
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
  }, [])

  return (
    <>
      <div ref={scrollRef} className='-mx-6 -my-1 overflow-x-auto px-6 py-1 [scrollbar-width:none] sm:mx-0 sm:px-0'>
        <div
          className='grid w-max grid-cols-[repeat(var(--weeks),--spacing(3))] gap-0.5 sm:w-full sm:grid-cols-[repeat(var(--weeks),minmax(0,1fr))] sm:gap-1'
          style={{ '--weeks': rows[0].length } as CSSProperties}
        >
          {rows.flatMap((row, rowIndex) =>
            row.map((cell, columnIndex) =>
              cell ? (
                <TooltipTrigger
                  key={cell.date}
                  handle={tooltipHandle}
                  payload={cell.label}
                  delay={0}
                  closeDelay={0}
                  render={
                    <span
                      className={cn(
                        'aspect-square rounded-[2px] transition-transform duration-150 hover:scale-125 sm:rounded-xs',
                        CONTRIBUTION_LEVEL_STYLES[cell.level]
                      )}
                    />
                  }
                />
              ) : (
                <span key={`${rowIndex}-${columnIndex}`} className='aspect-square' />
              )
            )
          )}
        </div>
      </div>

      <Tooltip handle={tooltipHandle}>
        {({ payload }) => (
          <TooltipContent className='dark:text-primary bg-black font-medium [&>*:last-child]:hidden'>
            {payload as string}
          </TooltipContent>
        )}
      </Tooltip>
    </>
  )
}

export default ContributionGraph
