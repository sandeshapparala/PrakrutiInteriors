# Sanity CMS Integration for Prakruti Interiors

This setup allows your client to manage only images through Sanity CMS while keeping all text content hardcoded in your React components.

## What's Created

### 1. Schema (`/src/sanity/schemaTypes/homePage.ts`)
- **Home Page Images**: Single document type for all homepage images
- **Organized by Sections**: Hero, Services, Projects, Testimonials, etc.
- **Image-Only Fields**: Client can only upload/change images, not text
- **Reference Names**: Each image has a reference name for easy organization

### 2. Client Library (`/src/sanity/lib/homePageImages.ts`)
- **`getHomePageImages()`**: Fetch all homepage images
- **`getOptimizedImageUrl()`**: Generate optimized image URLs
- **TypeScript Support**: Full type safety for all image data
- **Error Handling**: Graceful fallbacks if Sanity is unavailable

### 3. Usage Examples (`/src/sanity/lib/usage-examples.ts`)
- **Integration Patterns**: Server and Client component examples
- **Fallback Images**: Local development images
- **Best Practices**: Image optimization guidelines

## How to Use

### Step 1: Access Sanity Studio
1. Go to `http://localhost:3000/studio`
2. Create a new "Home Page Images" document
3. Upload images for each section

### Step 2: Integrate in Components

#### Server Components (Recommended)
```tsx
import { getHomePageImages, getOptimizedImageUrl } from '@/sanity/lib/homePageImages'

export async function HeroSection() {
  const data = await getHomePageImages()
  const designs = data?.heroSection?.interiorDesigns || []

  return (
    <section>
      {/* Hardcoded text */}
      <h1>Create And Customize Your Dream Interior</h1>
      
      {/* Dynamic images */}
      {designs.map((design, index) => (
        <img 
          key={index}
          src={getOptimizedImageUrl(design.image, 400, 300)} 
          alt={design.style}
        />
      ))}
    </section>
  )
}
```

#### Client Components
```tsx
'use client'
import { useState, useEffect } from 'react'
import { getHomePageImages } from '@/sanity/lib/homePageImages'

export function ProjectsSection() {
  const [images, setImages] = useState(null)
  
  useEffect(() => {
    getHomePageImages().then(setImages)
  }, [])
  
  const projects = images?.projectsSection?.featuredProjects || []
  
  return (
    <section>
      <h2>Our Featured Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={getOptimizedImageUrl(project.image, 600, 400)} />
          <h3>{project.projectName}</h3>
        </div>
      ))}
    </section>
  )
}
```

## Section Mapping

| Section | Sanity Field | Purpose |
|---------|--------------|---------|
| **Hero** | `heroSection.interiorDesigns` | Carousel images |
| **Who We Are** | `whoWeAreSection.galleryImages` | Image grid |
| **Services** | `servicesSection.services` | Service thumbnails |
| **Expertise** | `interiorExpertiseSection.featuredImage` | Main showcase |
| **Our Story** | `ourStorySection.storyImages` | Story visuals |
| **Projects** | `projectsSection.featuredProjects` | Portfolio images |
| **Testimonials** | `testimonialsSection.clientAvatars` | Client photos |
| **CTA** | `ctaSection.backgroundImage` | Background image |

## Benefits

✅ **Client-Friendly**: Non-technical users can easily update images  
✅ **Content Control**: All text remains in your codebase  
✅ **Performance**: Automatic image optimization  
✅ **SEO-Friendly**: Server-side rendering support  
✅ **Type Safety**: Full TypeScript integration  
✅ **Fallback Ready**: Works without Sanity in development  

## Next Steps

1. **Upload Images**: Go to `/studio` and create your first document
2. **Update Components**: Replace hardcoded image paths with Sanity fetches
3. **Test Locally**: Verify images load correctly
4. **Deploy**: Your client can now manage images independently!

## Image Guidelines for Client

- **Hero Carousel**: 400x300px minimum, interior design photos
- **Services**: 600x400px, clear service-related images  
- **Projects**: 600x400px+, high-quality project photos
- **Testimonials**: 100x100px, square client headshots
- **Background**: 1920x1080px, high-resolution interior photos

The system automatically optimizes images for web performance!
