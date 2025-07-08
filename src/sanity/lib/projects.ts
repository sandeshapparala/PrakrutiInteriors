import { client } from './client'
import { urlFor } from './image'

export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  shortDescription: string
  mainImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
    crop?: {
      top: number
      bottom: number
      left: number
      right: number
    }
  }
  gallery?: Array<{
    asset: {
      _ref: string
      _type: 'reference'
    }
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
    crop?: {
      top: number
      bottom: number
      left: number
      right: number
    }
  }>
  year: number
  location: string
  category: string
  area?: number
  services?: string[]
  featured: boolean
  client?: string
  description?: string
  challenges?: string
  publishedAt: string
}

// Fetch all projects for the projects page
export async function getAllProjects(): Promise<Project[]> {
  try {
    const projects = await client.fetch(`
      *[_type == "project"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        shortDescription,
        mainImage,
        gallery,
        year,
        location,
        category,
        area,
        services,
        featured,
        client,
        description,
        challenges,
        publishedAt
      }
    `)
    return projects || []
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

// Fetch featured projects for homepage
export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const projects = await client.fetch(`
      *[_type == "project" && featured == true] | order(publishedAt desc) [0...6] {
        _id,
        title,
        slug,
        shortDescription,
        mainImage,
        year,
        location,
        category,
        publishedAt
      }
    `)
    return projects || []
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }
}

// Fetch projects by category
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  try {
    const projects = await client.fetch(`
      *[_type == "project" && category == $category] | order(publishedAt desc) {
        _id,
        title,
        slug,
        shortDescription,
        mainImage,
        year,
        location,
        category,
        area,
        services,
        featured,
        publishedAt
      }
    `, { category })
    return projects || []
  } catch (error) {
    console.error('Error fetching projects by category:', error)
    return []
  }
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const project = await client.fetch(`
      *[_type == "project" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        shortDescription,
        mainImage,
        gallery,
        year,
        location,
        category,
        area,
        services,
        featured,
        client,
        description,
        challenges,
        publishedAt
      }
    `, { slug })
    return project || null
  } catch (error) {
    console.error('Error fetching project by slug:', error)
    return null
  }
}

// Get unique categories
export async function getProjectCategories(): Promise<string[]> {
  try {
    const categories = await client.fetch(`
      array::unique(*[_type == "project"].category)
    `)
    return categories || []
  } catch (error) {
    console.error('Error fetching project categories:', error)
    return []
  }
}

// Helper function to get optimized project image URL
export function getProjectImageUrl(
  image: Project['mainImage'], 
  width: number = 600, 
  height: number = 400, 
  quality: number = 85
): string {
  if (!image?.asset?._ref) {
    return '/images/placeholder-project.svg'
  }
  return urlFor(image)
    .width(width)
    .height(height)
    .quality(quality)
    .format('webp')
    .url()
}

// Fallback data for development/testing
export const fallbackProjects: Project[] = [
  {
    _id: '1',
    title: 'Modern Minimalist Villa',
    slug: { current: 'modern-minimalist-villa' },
    shortDescription: 'A stunning contemporary villa featuring clean lines, natural materials, and eco-friendly fibre wood interiors.',
    mainImage: {
      asset: { _ref: 'fallback', _type: 'reference' }
    },
    year: 2024,
    location: 'Bangalore, Karnataka',
    category: 'residential',
    area: 2500,
    services: ['interior-design', 'complete-home', 'furniture-decor'],
    featured: true,
    description: 'Complete interior transformation of a modern villa.',
    publishedAt: '2024-03-15T00:00:00Z'
  },
  {
    _id: '2',
    title: 'Corporate Office Renovation',
    slug: { current: 'corporate-office-renovation' },
    shortDescription: 'Professional workspace design promoting productivity and well-being with sustainable materials.',
    mainImage: {
      asset: { _ref: 'fallback', _type: 'reference' }
    },
    year: 2024,
    location: 'Mumbai, Maharashtra',
    category: 'office',
    area: 3200,
    services: ['office-interiors', 'space-planning', 'lighting-design'],
    featured: true,
    description: 'Modern office space with focus on employee wellness.',
    publishedAt: '2024-02-20T00:00:00Z'
  },
  {
    _id: '3',
    title: 'Luxury Apartment Makeover',
    slug: { current: 'luxury-apartment-makeover' },
    shortDescription: 'Elegant apartment transformation blending traditional Indian aesthetics with modern functionality.',
    mainImage: {
      asset: { _ref: 'fallback', _type: 'reference' }
    },
    year: 2023,
    location: 'Pune, Maharashtra',
    category: 'apartment',
    area: 1800,
    services: ['interior-design', 'modular-kitchen', 'bedroom-interiors'],
    featured: false,
    description: 'Complete apartment renovation with luxury finishes.',
    publishedAt: '2023-12-10T00:00:00Z'
  }
]
