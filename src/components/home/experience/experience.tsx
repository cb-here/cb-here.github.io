import { SiGithub, SiNextdotjs, SiPython, SiReact } from 'react-icons/si'

// Component Imports
import Eyebrow from '@/components/shared/eyebrow/eyebrow'
import Timeline from '@/components/ui/timeline'
import ActivityCard from './activity-card'
import ExperienceTimelineItem from './experience-timeline-item'

const EXPERIENCES = [
  {
    index: '01',
    icon: SiPython,
    iconClassName: 'text-[#3776AB]',
    company: 'AI Chatbot & Automation',
    role: 'Python Developer',
    period: 'Aug 2026 -',
    status: { text: 'Present', tone: 'positive' as const },
    stack: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'PostgreSQL', 'Playwright'],
    achievement: 'Built an AI assistant for the CRM with LangGraph',
    description:
      'Built an AI chatbot service on FastAPI and LangGraph with Postgres-backed conversation memory, plus Playwright automation that collects data from external portals and syncs it into the CRM.'
  },
  {
    index: '02',
    icon: SiNextdotjs,
    iconClassName: 'text-black dark:text-white',
    company: 'Enterprise CRM Platform',
    role: 'Full Stack Developer',
    period: 'Nov 2025 -',
    status: { text: 'Present', tone: 'positive' as const },
    stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io', 'AWS S3'],
    achievement: 'Shipped 1,300+ commits across the CRM frontend and backend',
    description:
      'Building a full CRM platform: real-time updates over Socket.io, calendars and scheduling, a rich-text editor, background jobs with BullMQ and Redis, file storage on S3, Microsoft Teams integration and PDF / Excel exports.'
  },
  {
    index: '03',
    icon: SiReact,
    iconClassName: 'text-[#61DAFB]',
    company: 'Payroll & Document Signing',
    role: 'Full Stack Developer',
    period: 'Aug 2025 - Sep 2026',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'pdf-lib', 'AWS S3'],
    achievement: 'Shipped 4 production apps with 390+ commits across 7 repos in just over a year',
    description:
      'Owned the frontend and backend of two payroll platforms and two document-signing tools, from first commit to production. Built employee management, bulk CSV and Excel imports, automated payslip PDFs, and e-signatures placed precisely onto PDFs and stored securely on S3.'
  },
  {
    index: '04',
    icon: SiGithub,
    iconClassName: 'text-black dark:text-white',
    company: 'Self-initiated',
    role: 'Side Projects & Open Source',
    period: '2024 -',
    status: { text: 'Ongoing · Personal', tone: 'accent' as const },
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Python'],
    achievement: 'Built and shipped Noter, QuickServe, Suno Kahani and more',
    description:
      'Where most of the learning happens: a note-taking app, a household worker booking platform, a story-to-audio generator with Hinglish to Hindi translation, and a personalised learning path tool. No deadlines, no clients, just curiosity.'
  }
]

const Experience = () => {
  return (
    <section id='experience' className='min-w-0 py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='space-y-2'>
          <Eyebrow>Stacks & Experience</Eyebrow>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            Where I&apos;m good and where I learned from
          </h2>
        </div>

        <ActivityCard />

        <Timeline
          data={EXPERIENCES.map(({ index, ...experience }) => ({
            index,
            content: <ExperienceTimelineItem {...experience} />
          }))}
        />
      </div>
    </section>
  )
}

export default Experience
