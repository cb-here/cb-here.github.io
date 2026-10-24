'use client'

// Third-party Imports
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

import GithubIcon from '@/assets/svg/github-icon'
import LinkedinIcon from '@/assets/svg/linkedin-icon'
import MailIcon from '@/assets/svg/mail'

// Component Imports
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Eyebrow from '@/components/shared/eyebrow/eyebrow'
import ContactForm from '@/components/contact/contact-form/contact-form'

const SOCIALS = [
  { label: 'Github', icon: GithubIcon, href: 'https://github.com/cb-here' },
  { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/in/chandrabhushan-vishwakarma-323347352' },
  { label: 'Email', icon: MailIcon, href: 'mailto:cbv934@gmail.com' }
]

const ContactHero = () => {
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 })

  const translateX = useTransform(springX, [0, 1], [20, -20])
  const translateY = useTransform(springY, [0, 1], [20, -20])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()

    mouseX.set((event.clientX - bounds.left) / bounds.width)
    mouseY.set((event.clientY - bounds.top) / bounds.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <section className='border-b py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-245 space-y-10 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='max-w-2xl space-y-2'>
          <Eyebrow>Contact me</Eyebrow>
          <h1 className='text-2xl font-semibold sm:text-3xl lg:text-[36px]'>
            Have a project in mind? Let&apos;s talk.
          </h1>
          <p className='text-muted-foreground text-base'>Let&apos;s build something amazing together.</p>
        </div>

        <div className='grid gap-8 lg:grid-cols-2'>
          <ContactForm className='order-2 lg:order-1' />

          <div className='order-1 mx-auto flex h-full max-h-130 w-full flex-col lg:order-2'>
            <div className='relative w-full overflow-hidden rounded-3xl'>
              <div className='aspect-square max-h-93.5 w-full bg-white bg-[radial-gradient(circle_at_50%_55%,rgb(59_130_246/0.12),transparent_60%)] dark:bg-zinc-200' />

              <motion.div
                className='absolute bottom-0 max-lg:left-1/2 max-lg:-translate-x-1/2'
                style={{ x: translateX, y: translateY }}
                whileHover={{ scale: 1.1 }}
                transition={{ scale: { duration: 0.4, ease: 'easeOut' } }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src='/images/services/services-profile-pixel.png'
                  alt='Chandrabhushan Vishwakarma'
                  className='max-w-105 object-cover [image-rendering:pixelated]'
                />
              </motion.div>

              <div className='absolute inset-x-0 bottom-0 flex justify-center'>
                <Badge
                  variant='outline'
                  className='bg-card h-7.5 gap-1.5 rounded-[12px] rounded-b-none border-0 px-3 py-1 text-sm text-green-600 uppercase shadow-sm dark:text-green-400'
                >
                  <span className='relative inline-flex size-1.5'>
                    <span className='absolute -inset-0.5 animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-green-600/40 opacity-75 dark:bg-green-400/40' />
                    <span className='relative inline-flex size-1.5 rounded-full bg-green-600 dark:bg-green-400' />
                  </span>
                  Available
                </Badge>
              </div>
            </div>

            <div className='flex flex-col items-center justify-between gap-1.5 px-5 py-4'>
              <div className='text-center'>
                <p className='font-medium'>Chandrabhushan Vishwakarma</p>
                <p className='text-muted-foreground'>Full Stack Developer</p>
              </div>

              <div className='flex items-center gap-1'>
                {SOCIALS.map(({ label, icon: Icon, href }) => (
                  <Button
                    key={label}
                    variant='ghost'
                    size='icon-sm'
                    aria-label={label}
                    className='text-muted-foreground/80 hover:bg-transparent dark:hover:bg-transparent'
                    render={<a href={href} target='_blank' rel='noopener noreferrer' />}
                    nativeButton={false}
                  >
                    <Icon className='size-4' />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
