import Head from "next/head";
import { TWITTER_USER_NAME } from "@/lib/constants";

const SocialMeta = ({ title, description, image, url, keywords, type }) => (
  <Head>
    <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
    <meta
      name="twitter:card"
      content={image ? "summary_large_image" : "summary"}
    />
    {title && <title>{title}</title>}
    {title && <meta property="og:title" content={title} />}
    {url && <meta property="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={image} />}
    {keywords && <meta name="keywords" content={keywords} />}
    {type && <meta property="og:type" content={type} />}
  </Head>
);

export default SocialMeta;
