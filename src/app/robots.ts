import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio', '/admin', '/api']
    },
    sitemap: 'https://www.prakrutiinteriors.com/sitemap.xml',
  }
}