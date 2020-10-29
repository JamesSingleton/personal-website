import Page from '@/components/Page';
import SocialMeta from '@/components/SocialMeta';
import Hero from '@/components/Hero'
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
    <section className="text-secondary bg-secondary bg-gray-900 text-white">
      <Feed title="Recent Projects" />
    </section>
  </Page>
)

export default Index;