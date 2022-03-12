import { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { Layout } from '@components/common'
import Hero from '@components/Home/Hero'
import Projects from '@components/Home/Projects'
import { motion } from 'framer-motion'

const Home = () => {
  const [main, setMain] = useState(false)

  useEffect(() => {
    const ids = [setTimeout(() => setMain(true), 500)]

    return () => ids.forEach((id) => clearTimeout(id))
  }, [])
  return (
    <>
      <NextSeo title="James Singleton" titleTemplate="%s" />
      <motion.div
        variants={{
          initial: {
            opacity: 0,
            display: 'none',
          },
          visible: {
            opacity: 1,
            display: 'block',
          },
        }}
        initial="initial"
        animate={main ? 'visible' : 'initial'}
        transition={{
          duration: 1.0,
        }}
      >
        <Hero />
        <Projects />
      </motion.div>
    </>
  )
}

Home.Layout = Layout

export default Home
