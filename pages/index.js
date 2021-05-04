import Link from "next/link";
import Image from "next/image";
import Page from "@/components/Layout/Page";
import Posts from "@/components/Home/Posts";
import SocialMeta from "@/components/SocialMeta";
import Hero from "@/components/Home/Hero";
import ProjectsSection from "@/components/Home/ProjectsSection";
import {
  NAME,
  WEBSITE_URL,
  WEBSITE_DESCRIPTION,
  TWITTER_USER_NAME,
  LINKEDIN_USER_NAME,
} from "@/lib/constants";
import { getAllPostsForHome } from "@/lib/api";

const Index = ({ preview, allPosts }) => {
  const morePosts = allPosts.slice(0, 3);

  return (
    <Page title={`Home | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`Home | ${NAME} - ${WEBSITE_DESCRIPTION}`}
        url={WEBSITE_URL}
        description={WEBSITE_DESCRIPTION}
      />
      <Hero />
      <ProjectsSection />
      <div className="relative pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              From the blog
            </h2>
          </div>
          <Posts posts={morePosts} />
        </div>
      </div>
    </Page>
  );
};

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}

export default Index;
