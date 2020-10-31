import Page from '@/components/Page';
import SocialMeta from '@/components/SocialMeta';
import Hero from '@/components/Hero'
import Posts from '@/components/Home/Posts/Posts'
import Feed from '@/components/Feed';
import { NAME, WEBSITE_URL, WEBSITE_DESCRIPTION } from '@/lib/constants';


const Index = () => (
  <Page title={`Home | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
    <SocialMeta 
      image="/static/twitter-cards/home.jpg"
      title={`Home | ${NAME} - ${WEBSITE_DESCRIPTION}`}
      url={WEBSITE_URL}
      description={WEBSITE_DESCRIPTION}
    />
    <Hero />
    <section className="bg-gray-900 text-gray-100">
      <Feed title="Projects" />
    </section>
    <section className=" text-gray-100">
      {/* <Posts /> */}
    </section>
  </Page>
)

export default Index;