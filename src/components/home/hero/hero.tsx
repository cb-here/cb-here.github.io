'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import { ArrowRightIcon } from 'lucide-react'

// Component Imports
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import GreetingWord from '@/components/home/hero/greeting-word'
import IdCard from '@/components/ui/id-card'

const CARD_FRAMES = Array.from({ length: 7 }, (_, index) => `/images/3d-card/cbhere-card-${index}.webp`)

const Hero = () => {
  return (
    <section className='lg:relative'>
      <div className='border-b pb-8 max-sm:pt-20 sm:py-16 lg:pt-32 lg:pb-24'>
        <div className='px-4 sm:px-6 lg:px-10.5'>
          <div className='space-y-6 lg:max-w-lg'>
            <Badge
              variant='outline'
              className='bg-card h-6.5 gap-1 rounded-full text-green-600 shadow-sm dark:text-green-400'
            >
              <span className='relative inline-flex size-1.5'>
                <span className='absolute -inset-0.5 animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-green-600/40 opacity-75 dark:bg-green-400/40' />
                <span className='relative inline-flex size-1.5 rounded-full bg-green-600 dark:bg-green-400' />
              </span>
              Available
            </Badge>
            <h1 className='mb-2 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[64px] lg:font-bold'>
              I build
              <br />
              <GreetingWord />
            </h1>
            <p className='text-muted-foreground text-xl font-medium sm:text-2xl lg:text-3xl'>
              Hi, I&apos;m Chandrabhushan 👋🏻
            </p>
            <p className='mb-8 max-w-2xl text-base'>
              A passionate Full Stack Developer with a Bachelor&apos;s degree in Information Technology. I transform
              ideas into powerful web applications.
            </p>
            <div className='flex items-center gap-2.5 pt-2'>
              <Button
                variant='outline'
                className='hover:bg-background dark:bg-background hover:text-accent h-11 rounded-full px-4 text-base'
                render={
                  <a href='/Chandrabhushan_Vishwakarma_Resume.pdf' download='Chandrabhushan_Vishwakarma_Resume.pdf' />
                }
                nativeButton={false}
              >
                Download CV
              </Button>
              <Button
                variant='outline'
                className='hover:bg-card bg-card dark:bg-card hover:text-accent h-11 gap-2.5 rounded-full pr-4 pl-4 text-base shadow-sm transition-[padding] duration-300 hover:pl-2'
                render={
                  <Link href='/contact'>
                    <span className='bg-accent relative flex size-2.5 items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover/button:size-6.5'>
                      <ArrowRightIcon className='text-accent-foreground absolute size-4.5 -translate-x-3 opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100' />
                    </span>
                    Let&apos;s connect
                  </Link>
                }
                nativeButton={false}
              />
            </div>
          </div>
        </div>
      </div>
      <IdCard
        frontImages={CARD_FRAMES}
        className='mx-auto mt-8 aspect-4/5 w-full max-w-80 max-lg:hidden lg:absolute lg:-top-31 lg:right-0 lg:left-0 lg:z-10 lg:mt-0 lg:aspect-auto lg:h-192 lg:max-w-none'
      />
    </section>
  )
}

export default Hero
