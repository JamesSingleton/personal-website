import Link from "next/link";
import Image from "next/image";
import Page from "@/components/Layout/Page";
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
import MoreArticles from "@/components/Articles/more-articles";

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
      <ProjectsSection />
    </Page>
  );
};

export default Index;
