import type { Metadata } from 'next'

// Component Imports
import ContactHero from '@/components/contact/contact-hero/contact-hero'
import FeaturedWorks from '@/components/shared/featured-works/featured-works'

// Data Imports
import { projects } from '@/lib/projects'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Have a project in mind? Get in touch with Chandrabhushan Vishwakarma, Full Stack Developer.",
  keywords: ['Full Stack Developer', 'React Developer', 'Node.js', 'Contact', 'Chandrabhushan Vishwakarma'],
  alternates: {
    canonical: `${SITE_URL}/contact`
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      name: 'Chandrabhushan Vishwakarma',
      description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
      url: SITE_URL,
      inLanguage: 'en-US'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}#webpage`,
      name: 'Contact',
      description: "Have a project in mind? Get in touch with Chandrabhushan Vishwakarma, Full Stack Developer.",
      url: `${SITE_URL}/contact`,
      isPartOf: {
        '@id': `${SITE_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${SITE_URL}/contact`]
      }
    }
  ]
}

const ContactUsPage = () => {
  return (
    <>
      <ContactHero />
      <FeaturedWorks
        projects={projects.slice(0, 2)}
        layout='vertical'
        title='Have a look at some of my work'
        showBorder={false}
      />

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default ContactUsPage
