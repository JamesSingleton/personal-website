import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const domain = 'jamessingleton.me'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/',
    },
    sitemap: `https://www.${domain}/sitemap.xml`,
  }
}
