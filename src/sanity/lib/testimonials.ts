import { client } from './client'

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  clientName: string
  projectType: string
  testimonialText: string
  rating: number
  isActive: boolean
  dateAdded: string
  sortOrder?: number
}

// Function to fetch all active testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonials = await client.fetch<Testimonial[]>(`
      *[_type == "testimonial" && isActive == true] | order(dateAdded desc) {
        _id,
        _type,
        clientName,
        projectType,
        testimonialText,
        rating,
        isActive,
        dateAdded,
        sortOrder
      }
    `)
    
    return testimonials || []
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

// Function to get testimonials count
export async function getTestimonialsCount(): Promise<number> {
  try {
    const count = await client.fetch<number>(`count(*[_type == "testimonial" && isActive == true])`)
    return count || 0
  } catch (error) {
    console.error('Error fetching testimonials count:', error)
    return 0
  }
}

// Function to get a specific testimonial by ID
export async function getTestimonialById(id: string): Promise<Testimonial | null> {
  try {
    const testimonial = await client.fetch<Testimonial>(`
      *[_type == "testimonial" && _id == $id][0] {
        _id,
        _type,
        clientName,
        projectType,
        testimonialText,
        rating,
        isActive,
        dateAdded,
        sortOrder
      }
    `, { id })
    
    return testimonial || null
  } catch (error) {
    console.error('Error fetching testimonial:', error)
    return null
  }
}
