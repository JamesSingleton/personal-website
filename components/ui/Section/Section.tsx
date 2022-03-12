import { FC, useEffect, HTMLAttributes } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title: string
  description: string
}

const Section: FC<SectionProps> = ({
  title,
  description,
  className,
  children,
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.section
      className={className}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          y: 30,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        damping: 5,
        mass: 1,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-50 md:text-3xl">
          {title}
        </h2>
        <p className="text-base text-slate-700 dark:text-slate-200 md:text-xl">
          {description}
        </p>
      </div>
      {children}
    </motion.section>
  )
}

export default Section
