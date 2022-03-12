import { FC, HTMLAttributes, ReactElement } from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'

interface IconProps extends HTMLAttributes<HTMLAnchorElement> {
  icon: ReactElement
  href: string
}

const Icon: FC<IconProps> = ({ icon, href, className }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover="hover"
      initial="initial"
      className={cn('relative', className)}
    >
      <motion.div
        className="text-slate-900 dark:text-slate-50"
        variants={{
          initial: {
            rotate: 0,
            scale: 1,
          },
          hover: {
            rotate: 10,
            scale: 1.2,
          },
        }}
      >
        {icon}
      </motion.div>
    </motion.a>
  )
}

export default Icon
