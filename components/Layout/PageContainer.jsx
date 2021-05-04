import SocialMeta from "../SocialMeta";
import Router from "next/router";
import { pageview } from "@/lib/gtag";
import { NAME, WEBSITE_DESCRIPTION } from "@/lib/constants";

Router.events.on("routeChangeComplete", (url) => {
  pageview(url);
});

const PageContainer = ({
  title,
  description,
  children,
  shouldIndex = true,
}) => (
  <div className="flex flex-col h-screen">
    <SocialMeta
      title={title || `${NAME} - ${WEBSITE_DESCRIPTION}`}
      description={description || `${WEBSITE_DESCRIPTION}`}
    />
    {children}
  </div>
);

export default PageContainer;
