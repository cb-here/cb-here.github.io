// Next Imports
import Image from 'next/image'

// Component Imports
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import DitherVeil from '@/components/react-bits/dither-veil'

const socials = [
  { label: 'GitHub', src: '/images/footer/github-logo.webp', href: 'https://github.com/cb-here' },
  { label: 'Email', src: '/images/footer/gmail.webp', href: 'mailto:cbv934@gmail.com' },
  {
    label: 'LinkedIn',
    src: '/images/footer/linkedin.webp',
    href: 'https://linkedin.com/in/chandrabhushan-vishwakarma-323347352'
  }
]

const Footer = () => {
  return (
    <footer className='lg:px-10.5'>
      <div className='mx-auto max-w-4xl space-y-12 pb-12 lg:border-x xl:max-w-245'>
        <div className='flex items-center gap-3'>
          <Separator className='flex-1' />
          <div className='flex items-center gap-3'>
            {socials.map(({ label, src, href }) => (
              <Button
                key={label}
                variant='outline'
                size='icon'
                aria-label={label}
                className='hover:bg-muted/5 min-w-10 rounded-md'
                render={<a href={href} target='_blank' rel='noopener noreferrer' />}
                nativeButton={false}
              >
                <Image src={src} alt={label} width={16} height={16} />
              </Button>
            ))}
          </div>
          <Separator className='flex-1' />
        </div>

        <div className='mb-8 flex items-center justify-center gap-5 text-center max-lg:hidden xl:ml-8'>
          <p className='text-muted-foreground'>Thank you, for visiting here</p>
          <div className='size-28 shrink-0 overflow-hidden rounded-full shadow-md'>
            <DitherVeil
              src='/images/footer/profile.png'
              fit='cover'
              pixelSize={2}
              inkColor='#1e293b'
              paperColor='#f4f1ea'
              rimColor='#2563eb'
              rim={0.6}
              revealRadius={50}
            />
          </div>
          <p className='text-muted-foreground'>Let&apos;s create something beautiful</p>
        </div>

        <div className='space-y-1 text-center'>
          <p className='text-foreground text-5xl [font-family:var(--font-delicious-handrawn)]'>cbhere</p>
          <p className='text-xs'>@cbhere {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
