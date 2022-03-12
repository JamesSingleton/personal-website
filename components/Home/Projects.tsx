import { FC } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ProjectCard, Section } from '@components/ui'

const projects = [
  {
    title: 'Redshirt Sports',
    subtitle: 'Project title',
    description:
      'Redshirt Sports is a college sports website dedicated to the FCS.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Sanity.io',
      'Tailwind CSS',
    ],
    externalLink: 'https://www.redshirtsports.xyz',
    imageLink: `/images/Redshirt_Sports_Screenshot.png`,
  },
  {
    title: 'HLB Electric',
    subtitle: 'Project title',
    description:
      'A website that I built for a local electrician here in Maricopa, AZ.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Sanity.io',
      'Tailwind CSS',
    ],
    externalLink: 'https://www.hlbelectric.com',
    imageLink: `/images/HLB_Electric_Screenshot.png`,
  },
  {
    title: 'Railwayz',
    subtitle: 'Project title',
    description: 'Project description',
    technologies: ['React', 'XGBoost', 'Django'],
    externalLink: 'https://railwayz.ironsoul.me',
    githubLink: 'https://github.com/ironsoul0/samruk-hackathon',
    imageLink: `/images/profile.png`,
  },
]

const Projects: FC = () => {
  return (
    <Section
      className="mt-14 md:mt-20"
      title="Projects"
      description="Projects I have worked on"
    >
      <div className="mx-auto mt-10 max-w-screen-lg px-4 md:mt-20 md:px-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
