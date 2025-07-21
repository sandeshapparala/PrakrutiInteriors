import { Metadata } from 'next'
import { getAllProjects, getProjectCategories } from '@/sanity/lib/projects'
import ProjectsContainer from '@/components/ui/projects-container'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  title: 'Our Interior Design Projects Portfolio - 1000+ Completed Works',
  description: 'Explore our extensive portfolio of 1000+ interior design projects in Vijayawada & across India. Residential, commercial, and office interiors with eco-friendly fibre wood materials.',
  keywords: [
    'interior design portfolio Vijayawada',
    'completed interior projects',
    'residential interior design',
    'commercial interior design',
    'office interiors portfolio',
    'eco-friendly interior projects',
    'fibre wood interior gallery',
    'modern kitchen designs',
    'bedroom interior designs',
    'living room makeover ideas'
  ],
  openGraph: {
    title: 'Interior Design Projects Portfolio - Prakruti Interiors',
    description: 'Browse through 1000+ completed interior design projects featuring eco-friendly materials and innovative design solutions.',
    type: 'website',
    images: [
      {
        url: '/images/projects-showcase.jpg',
        width: 1200,
        height: 630,
        alt: 'Prakruti Interiors project portfolio showcase',
      },
    ],
  },
  alternates: {
    canonical: '/projects',
  },
}

export default async function ProjectsPage() {
  const [projects, categories] = await Promise.all([
    getAllProjects(),
    getProjectCategories()
  ])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        <ProjectsContainer projects={projects} categories={categories} />
      </main>
      
      <Footer />
    </div>
  )
}
