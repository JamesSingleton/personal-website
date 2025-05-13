import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'jamessingleton.me'
  const websiteUrl = `https://www.${domain}`

  return [
    {
      url: websiteUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${websiteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${websiteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${websiteUrl}/uses`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
