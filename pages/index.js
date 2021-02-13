import Page from '@/components/Layout/Page';
import SocialMeta from '@/components/SocialMeta';
import Hero from '@/components/Hero'
import { NAME, WEBSITE_URL, WEBSITE_DESCRIPTION } from '@/lib/constants';
import MoreArticles from '@/components/Articles/more-articles';


const Index = () => {
  return (
    <Page title={`Home | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
      <SocialMeta 
        image="/static/twitter-cards/home.jpg"
        title={`Home | ${NAME} - ${WEBSITE_DESCRIPTION}`}
        url={WEBSITE_URL}
        description={WEBSITE_DESCRIPTION}
      />
      <Hero />
    </Page>
  );
}



export default Index;