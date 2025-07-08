/**
 * Usage Examples for Home Page Images from Sanity
 * 
 * This file shows how to integrate Sanity images into your existing components
 * while keeping all text content hardcoded in the components.
 */

// Example of fallback image URLs for development/testing
export const fallbackImages = {
  heroDesigns: [
    '/images/hero/modern-minimalist.jpg',
    '/images/hero/warm-contemporary.jpg',
    '/images/hero/natural-zen.jpg',
    '/images/hero/luxury-classic.jpg',
    '/images/hero/coastal-breeze.jpg'
  ],
  whoWeAreGallery: [
    '/images/about/team-1.jpg',
    '/images/about/workspace-1.jpg',
    '/images/about/project-1.jpg'
  ],
  services: {
    'Living Room': '/images/services/living-room.jpg',
    'Kitchen': '/images/services/kitchen.jpg',
    'Bedroom': '/images/services/bedroom.jpg',
    'Furniture': '/images/services/furniture.jpg',
    'Office': '/images/services/office.jpg',
    'Complete Home': '/images/services/complete-home.jpg'
  }
}

/**
 * INTEGRATION GUIDE:
 * 
 * 1. Server Components (Recommended for SEO):
 * ```tsx
 * import { getHomePageImages, getOptimizedImageUrl } from '@/sanity/lib/homePageImages'
 * 
 * export async function HeroSection() {
 *   const homePageData = await getHomePageImages()
 *   const { interiorDesigns } = homePageData?.heroSection || { interiorDesigns: [] }
 * 
 *   return (
 *     <section className="hero-section">
 *       // Your existing hardcoded text content
 *       <div className="hero-content">
 *         <span className="badge">Eco-Friendly Design Studio</span>
 *         <h1>Create And Customize Your Dream Interior</h1>
 *       </div>
 * 
 *       // Dynamic images from Sanity
 *       <div className="carousel">
 *         {interiorDesigns.map((design, index) => (
 *           <img
 *             key={index}
 *             src={getOptimizedImageUrl(design.image, 400, 300)}
 *             alt={design.style}
 *           />
 *         ))}
 *       </div>
 *     </section>
 *   )
 * }
 * ```
 * 
 * 2. Client Components:
 * ```tsx
 * 'use client'
 * import { useState, useEffect } from 'react'
 * import { getHomePageImages, getOptimizedImageUrl, type HomePageImages } from '@/sanity/lib/homePageImages'
 * 
 * export function ServicesSection() {
 *   const [images, setImages] = useState<HomePageImages | null>(null)
 *   const [loading, setLoading] = useState(true)
 * 
 *   useEffect(() => {
 *     async function fetchImages() {
 *       const data = await getHomePageImages()
 *       setImages(data)
 *       setLoading(false)
 *     }
 *     fetchImages()
 *   }, [])
 *   
 *   if (loading) return <div>Loading...</div>
 *   
 *   const serviceImages = images?.servicesSection?.services || []
 *   
 *   return (
 *     <section>
 *       // Hardcoded text content
 *       <h2>Our Services</h2>
 *       
 *       // Dynamic images
 *       {serviceImages.map((service, index) => (
 *         <div key={index}>
 *           <img src={getOptimizedImageUrl(service.image, 600, 400)} />
 *           <h3>{service.serviceName}</h3>
 *         </div>
 *       ))}
 *     </section>
 *   )
 * }
 * ```
 * 
 * 3. Image Optimization Examples:
 * - Hero carousel: getOptimizedImageUrl(image, 400, 300, 90)
 * - Service thumbnails: getOptimizedImageUrl(image, 300, 200, 85)
 * - Project gallery: getOptimizedImageUrl(image, 600, 400, 85)
 * - Testimonial avatars: getOptimizedImageUrl(image, 100, 100, 90)
 * - Background images: getOptimizedImageUrl(image, 1920, 1080, 80)
 * 
 * 4. How to Use in Each Section:
 * 
 * Hero Section:
 * - Use homePageData.heroSection.interiorDesigns for carousel images
 * - Keep all text hardcoded: "Create And Customize Your Dream Interior"
 * 
 * Who We Are Section:
 * - Use homePageData.whoWeAreSection.galleryImages for image grid
 * - Keep text hardcoded: "Crafting Interiors That Tell Your Story"
 * 
 * Services Section:
 * - Use homePageData.servicesSection.services for service images
 * - Match serviceName with your hardcoded service titles
 * 
 * Projects Section:
 * - Use homePageData.projectsSection.featuredProjects for project images
 * - Filter by isFeatured: true for highlighted projects
 * 
 * Testimonials Section:
 * - Use homePageData.testimonialsSection.clientAvatars for profile images
 * - Keep testimonial text hardcoded in components
 * 
 * CTA Section:
 * - Use homePageData.ctaSection.backgroundImage for hero background
 * - Keep CTA text hardcoded: "Ready to Transform Your Space?"
 */
