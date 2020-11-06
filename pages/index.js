import Page from '@/components/Page';
import SocialMeta from '@/components/SocialMeta';
import Hero from '@/components/Hero'
import Posts from '@/components/Home/Posts/Posts'
import Projects from '@/components/Home/Projects/Projects'
import { NAME, WEBSITE_URL, WEBSITE_DESCRIPTION } from '@/lib/constants';
import { getAllPostsForHome } from '@/lib/api'
import MoreArticles from '@/components/Articles/more-articles';


const Index = ({allPosts}) => {
  const morePosts = allPosts.slice(0,4)
  return (
    <Page title={`Home | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
      <SocialMeta 
        image="/static/twitter-cards/home.jpg"
        title={`Home | ${NAME} - ${WEBSITE_DESCRIPTION}`}
        url={WEBSITE_URL}
        description={WEBSITE_DESCRIPTION}
      />
      <Hero />
      <section className="bg-gray-900 text-gray-100">
        <Projects />
      </section>
      <section className=" text-gray-100">
        {morePosts.length > 0 && <Posts posts={morePosts} />}
      </section>
    </Page>
  );
}

export async function getStaticProps({preview = false}) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: {
      preview,
      allPosts
    }
  }
}

export default Index;