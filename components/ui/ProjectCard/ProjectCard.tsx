import { FC, HTMLAttributes } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import cn from 'classnames'
import { Icon } from '..'

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle: string
  description: string
  externalLink: string
  imageLink: string
  rightShift?: boolean
  technologies: readonly string[]
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  externalLink,
  imageLink,
  rightShift,
  technologies,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative z-[1] mb-10 bg-cover md:mb-20 md:mt-28',
        className
      )}
    >
      <div className="px-6 py-6">
        <div className={cn(rightShift && 'md:text-right')}>
          <a
            href={externalLink}
            className="dark:text-white-900 text-black-900 text-xl font-bold md:text-2xl"
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
          <p className="text-base font-medium text-slate-700 dark:text-slate-200 md:text-xl">
            {subtitle}
          </p>
        </div>
        <p
          className={cn(
            'my-8 max-w-md rounded-md text-base text-slate-700 dark:text-slate-200 md:bg-slate-700 md:px-8 md:py-6',
            rightShift && 'md:ml-auto md:text-right'
          )}
        >
          {description}
        </p>
        <div
          className={cn('mb-2 flex md:mb-4', rightShift && 'md:justify-end')}
        >
          {technologies.map((tech, i) => (
            <p
              className={cn(
                'text-base text-slate-700 dark:text-slate-200',
                i !== technologies.length - 1 && 'mr-5 md:mr-8'
              )}
              key={tech}
            >
              {tech}
            </p>
          ))}
        </div>
        <div
          className={cn('flex items-center', rightShift && 'md:justify-end')}
        >
          <Icon
            icon={<FaExternalLinkAlt className="h-6 w-6 stroke-current" />}
            href={externalLink}
          />
        </div>
      </div>
      <motion.div
        className={cn(
          'absolute top-0 h-full rounded-lg md:right-0 md:-top-6 md:w-7/12',
          rightShift && 'md:left-0'
        )}
        style={{ zIndex: -1 }}
        variants={{
          initial: {
            y: 0,
          },
          hovered: {
            y: -5,
          },
        }}
        animate="initial"
        initial="initial"
      >
        <Image
          className="h-full w-full rounded-lg object-cover opacity-30 dark:opacity-40 md:h-auto md:opacity-100 md:dark:opacity-80"
          src={imageLink}
          alt={title}
          width={1920}
          height={1080}
          // layout="responsive"
          // sizes="50vw"
        />
      </motion.div>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        // ref={hoverRef}
        target="_blank"
        className={cn(
          'absolute top-0 hidden h-full rounded-lg md:right-0 md:block md:w-7/12',
          rightShift && 'md:left-0'
        )}
        href={externalLink}
        rel="noreferrer"
      />
    </div>
  )
}

export default ProjectCard
