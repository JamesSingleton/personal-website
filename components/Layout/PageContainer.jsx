import Head from "next/head";
import Router from "next/router";
import { trackPageview } from "@/lib/analytics";
import { NAME, WEBSITE_DESCRIPTION } from "@/lib/constants";

Router.events.on("routeChangeComplete", (url) => {
  trackPageview(url);
});

const PageContainer = ({
  title,
  description,
  children,
  shouldIndex = true,
}) => (
  <div className="flex flex-col h-screen">
    <Head>
      <title>{title || `${NAME} - ${WEBSITE_DESCRIPTION}`}</title>
      {description !== false && (
        <meta
          name="description"
          content={description || `${NAME} - ${WEBSITE_DESCRIPTION}`}
        />
      )}
      {!shouldIndex && <meta name="robots" content="noindex" />}
    </Head>
    {children}
  </div>
);

export default PageContainer;
