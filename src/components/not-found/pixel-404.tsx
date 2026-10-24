'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import { ArrowRightIcon } from 'lucide-react'

import Eyebrow from '@/components/shared/eyebrow/eyebrow'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { cn } from '@/lib/utils'

const DIGIT_4 = ['....X', '...XX', '..X.X', '.X..X', 'X...X', 'XXXXX', '....X', '....X']
const DIGIT_0 = ['.XXX.', 'X...X', 'X...X', 'X...X', 'X...X', 'X...X', 'X...X', '.XXX.']

const DIGIT_ROWS = DIGIT_4.map((row, index) => `..${row}..${DIGIT_0[index]}..${DIGIT_4[index]}..`)
const EMPTY_ROW = '.'.repeat(DIGIT_ROWS[0].length)
const GRID = [EMPTY_ROW, ...DIGIT_ROWS, EMPTY_ROW].map(row => row.split(''))

const TRAIL_DURATION = 700

const Pixel404 = () => {
  const [trail, setTrail] = useState<Set<string>>(new Set())
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map())

  useEffect(() => {
    const activeTimers = timers.current

    return () => activeTimers.forEach(clearTimeout)
  }, [])

  const light = (key: string) => {
    clearTimeout(timers.current.get(key))
    setTrail(previous => new Set(previous).add(key))

    timers.current.set(
      key,
      setTimeout(() => {
        setTrail(previous => {
          const next = new Set(previous)

          next.delete(key)

          return next
        })
        timers.current.delete(key)
      }, TRAIL_DURATION)
    )
  }

  return (
    <Card className='w-full max-w-xl gap-6 rounded-3xl p-6 shadow-lg'>
      <CardHeader className='gap-2 p-0'>
        <Eyebrow className='text-lg'>Error 404</Eyebrow>
        <p className='text-muted-foreground text-base'>In life, you can&apos;t have everything you wish for.</p>
        <h1 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
          Unfortunately, this page is one of those things.
        </h1>
      </CardHeader>

      <CardContent className='space-y-6 p-0'>
        <div className='flex w-fit flex-col gap-0.5 rounded-2xl bg-(--background-darker) p-2 max-sm:mx-auto sm:gap-1 sm:p-4'>
          {GRID.map((row, rowIndex) => (
            <div key={rowIndex} className='flex gap-0.5 sm:gap-1'>
              {row.map((cell, columnIndex) => {
                const key = `${rowIndex}-${columnIndex}`
                const isDigit = cell === 'X'
                const isLit = trail.has(key)

                return (
                  <span
                    key={key}
                    onMouseEnter={() => light(key)}
                    onClick={() => light(key)}
                    className={cn(
                      'size-2.5 rounded-[2px] sm:size-4 sm:rounded-[3px]',
                      isLit ? 'scale-110 duration-75' : 'duration-700',
                      isDigit
                        ? isLit
                          ? 'bg-foreground'
                          : 'bg-accent'
                        : isLit
                          ? 'bg-accent/50'
                          : 'bg-card',
                      'transition-all'
                    )}
                  />
                )
              })}
            </div>
          ))}
        </div>

        <div className='flex flex-wrap gap-2.5'>
          <Button
            className='group/home h-10 gap-2 rounded-full px-4 text-sm'
            render={<Link href='/' />}
            nativeButton={false}
          >
            Take me home
            <ArrowRightIcon className='size-4 transition-transform group-hover/home:translate-x-0.5' />
          </Button>
          <Button
            variant='outline'
            className='bg-card hover:text-accent h-10 rounded-full px-4 text-sm'
            render={<Link href='/contact' />}
            nativeButton={false}
          >
            Report a broken link
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Pixel404
