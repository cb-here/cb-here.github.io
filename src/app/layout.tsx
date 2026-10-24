import type { ReactNode } from 'react'

import { Geist_Mono, Delicious_Handrawn } from 'next/font/google'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import CustomCursor from '@/components/layout/custom-cursor'
import EdgeBlur from '@/components/layout/edge-blur'


import { cn } from '@/lib/utils'

import './globals.css'
import { SITE_URL } from '@/lib/site'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const deliciousHandrawn = Delicious_Handrawn({
  variable: '--font-delicious-handrawn',
  weight: '400',
  subsets: ['latin']
})

const satoshi = localFont({
  variable: '--font-satoshi',
  display: 'swap',
  src: [
    { path: '../assets/fonts/satoshi/satoshi-400.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/satoshi/satoshi-500.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/satoshi/satoshi-700.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/satoshi/satoshi-900.woff2', weight: '900', style: 'normal' }
  ]
})

export const metadata: Metadata = {
  title: {
    template: '%s - cbhere',
    default: 'Chandrabhushan Vishwakarma | Full Stack Developer'
  },
  description:
    'Full Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable web applications.',
  robots: 'index,follow',
  keywords: ['Full Stack Developer', 'React Developer', 'Node.js', 'JavaScript', 'TypeScript', 'Web Development', 'Portfolio', 'Chandrabhushan Vishwakarma'],
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: {
      template: '%s - cbhere',
      default: 'Chandrabhushan Vishwakarma | Full Stack Developer'
    },
    description:
      'Full Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable web applications.',
    type: 'website',
    siteName: 'cbhere',
    url: SITE_URL,
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'cbhere - Chandrabhushan Vishwakarma, Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s - cbhere',
      default: 'Chandrabhushan Vishwakarma | Full Stack Developer'
    },
    description:
      'Full Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable web applications.'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(
        geistMono.variable,
        satoshi.variable,
        deliciousHandrawn.variable,
        'flex min-h-full w-full scroll-smooth antialiased'
      )}
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
          <EdgeBlur />
          <Toaster />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
