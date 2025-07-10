'use client';

import { TestimonialsWithMarquee } from "@/components/ui/testimonials-with-marquee"
import { getTestimonials, type Testimonial } from "@/sanity/lib/testimonials"
import { useEffect, useState } from "react"

// Default avatar for all testimonials
const DEFAULT_AVATAR = "data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100' height='100' fill='%23f3f4f6'/%3e%3cpath d='M50 55c13.8 0 25-11.2 25-25S63.8 5 50 5 25 16.2 25 30s11.2 25 25 25zm0 10c-16.67 0-50 8.33-50 25v5h100v-5c0-16.67-33.33-25-50-25z' fill='%239ca3af'/%3e%3c/svg%3e"

// Fallback testimonials in case Sanity is unavailable
const fallbackTestimonials = [
  {
    author: {
      name: "Aditya Unnam",
      handle: "Living Room Redesign",
      avatar: DEFAULT_AVATAR
    },
    text: "I had the pleasure of working with this team for my living room redesign. They listened carefully to my ideas and combined them with their own expertise. The result? A stunning, functional space with beautiful attention to detail. Worth every penny!"
  },
  {
    author: {
      name: "Karanam Shivani",
      handle: "Living Room Design",
      avatar: DEFAULT_AVATAR
    },
    text: "I recently got my living room designed and I'm so happy with the results! The project was completed on time and the team was extremely professional and easy to work with. Highly recommend!"
  },
  {
    author: {
      name: "Mandali Phani",
      handle: "Interior Finishing",
      avatar: DEFAULT_AVATAR
    },
    text: "They delivered a high-gloss acrylic finish with hand-finished seamless edges—better than factory-made work. I'm fully satisfied with the craftsmanship and detail."
  },
  {
    author: {
      name: "Venu Murala",
      handle: "Apartment Interiors",
      avatar: DEFAULT_AVATAR
    },
    text: "Getting our apartment interiors done by Prakruti Interiors was one of the best decisions. They offer top-quality materials and designs at prices unmatched in AP and Telangana."
  },
  {
    author: {
      name: "Dontam Vasanthi",
      handle: "Complete Interior",
      avatar: DEFAULT_AVATAR
    },
    text: "I'm delighted with the results. From consultation to final execution, their professionalism, creativity, and commitment were top-notch. Highly satisfied!"
  }
]

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const sanityTestimonials = await getTestimonials()
        
        if (sanityTestimonials.length > 0) {
          // Transform Sanity data to component format
          const transformedTestimonials = sanityTestimonials.map((testimonial: Testimonial) => ({
            author: {
              name: testimonial.clientName,
              handle: testimonial.projectType,
              avatar: DEFAULT_AVATAR
            },
            text: testimonial.testimonialText
          }))
          
          setTestimonials(transformedTestimonials)
        }
      } catch (error) {
        console.error('Error loading testimonials:', error)
        // Fallback testimonials are already set
      }
    }

    fetchTestimonials()
  }, [])

  // Calculate speed based on number of testimonials
  // Formula: Base speed + (number of testimonials * speed per testimonial)
  // This ensures consistent reading time per testimonial regardless of total count
  const calculateSpeed = (count: number) => {
    const baseSpeed = 15 // Minimum speed for smooth animation
    const speedPerTestimonial = 4 // Additional seconds per testimonial
    const calculatedSpeed = baseSpeed + (count * speedPerTestimonial)
    
    // Cap the maximum speed to prevent it from being too slow
    const maxSpeed = 60
    return Math.min(calculatedSpeed, maxSpeed)
  }

  const animationSpeed = calculateSpeed(testimonials.length)

  return (
    <TestimonialsWithMarquee
      title="Loved by Clients Across India"
      description="Join hundreds of satisfied clients who have transformed their spaces with our sustainable and spiritual interior design approach"
      testimonials={testimonials}
      speed={animationSpeed} // Dynamic speed based on testimonial count
      className="bg-gradient-to-b from-background to-muted/20"
    />
  )
}
                              