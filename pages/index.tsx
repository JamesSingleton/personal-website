import { NextSeo } from 'next-seo'
import { Layout } from '@components/common'

const Home = () => {
  return (
    <>
      <NextSeo title="James Singleton" titleTemplate="%s" />
      <div>Hello</div>
    </>
  )
}

Home.Layout = Layout

export default Home
