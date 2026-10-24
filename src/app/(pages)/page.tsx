// Component Imports
import Hero from '@/components/home/hero/hero'
import FeaturedWorks from '@/components/shared/featured-works/featured-works'
import Experience from '@/components/home/experience/experience'

// Data Imports
import { projects } from '@/lib/projects'
import { SITE_URL } from '@/lib/site'

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
    }
  ]
}

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedWorks projects={projects} title='Things I&apos;ve built' />
      <Experience />

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

export default Home
