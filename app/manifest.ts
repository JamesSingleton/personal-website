import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JamesSingleton.me',
    short_name: 'JamesSingleton.me',
    description: 'JamesSingleton.me - personal website for James Singleton.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
  }
}
