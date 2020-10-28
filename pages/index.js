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
    <main>
      <Hero />
      <Feed title="Recent Projects" />
    </main>
  </Page>
)

export default Index;