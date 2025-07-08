import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Import env variables
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Set up the image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Type definitions for the home page images
export interface HomePageImages {
  heroSection: {
    interiorDesigns: Array<{
      style: string
      image: SanityImageSource
    }>
  }
  whoWeAreSection: {
    galleryImages: Array<{
      image: SanityImageSource
      caption?: string
    }>
  }
  servicesSection: {
    services: Array<{
      serviceName: string
      image: SanityImageSource
    }>
  }
  interiorExpertiseSection: {
    featuredImage: SanityImageSource
  }
  ourStorySection: {
    founderImage?: SanityImageSource
    storyImages: Array<{
      image: SanityImageSource
      description?: string
    }>
  }
  projectsSection: {
    featuredProjects: Array<{
      projectName: string
      category: string
      image: SanityImageSource
      isFeatured: boolean
    }>
  }
  testimonialsSection: {
    clientAvatars: Array<{
      clientName: string
      avatar: SanityImageSource
    }>
  }
  ctaSection: {
    backgroundImage: SanityImageSource
  }
  brandAssets: {
    logo?: SanityImageSource
    favicon?: SanityImageSource
    ogImage?: SanityImageSource
  }
}

// Function to fetch home page images
export async function getHomePageImages(): Promise<HomePageImages | null> {
  try {
    const homePageImages = await client.fetch<HomePageImages>(`
      *[_type == "homePage"][0] {
        heroSection {
          interiorDesigns[] {
            style,
            image
          }
        },
        whoWeAreSection {
          galleryImages[] {
            image,
            caption
          }
        },
        servicesSection {
          services[] {
            serviceName,
            image
          }
        },
        interiorExpertiseSection {
          featuredImage
        },
        ourStorySection {
          founderImage,
          storyImages[] {
            image,
            description
          }
        },
        projectsSection {
          featuredProjects[] {
            projectName,
            category,
            image,
            isFeatured
          }
        },
        testimonialsSection {
          clientAvatars[] {
            clientName,
            avatar
          }
        },
        ctaSection {
          backgroundImage
        },
        brandAssets {
          logo,
          favicon,
          ogImage
        }
      }
    `)
    
    return homePageImages
  } catch (error) {
    console.error('Error fetching home page images:', error)
    return null
  }
}

// Helper function to get optimized image URL
export function getOptimizedImageUrl(
  image: SanityImageSource,
  width?: number,
  height?: number,
  quality: number = 85
) {
  let url = urlFor(image).quality(quality)
  
  if (width) {
    url = url.width(width)
  }
  
  if (height) {
    url = url.height(height)
  }
  
  return url.url()
}
