import { Metadata } from 'next'
import { getAllProjects, getProjectCategories } from '@/sanity/lib/projects'
import ProjectsContainer from '@/components/ui/projects-container'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  title: 'Our Projects - Prakruti Interiors',
  description: 'Explore our portfolio of interior design projects featuring eco-friendly fibre wood interiors with spiritual and elegant aesthetics.',
  keywords: ['interior design projects', 'portfolio', 'eco-friendly interiors', 'fibre wood', 'residential projects', 'commercial projects'],
  openGraph: {
    title: 'Our Projects - Prakruti Interiors',
    description: 'Explore our portfolio of interior design projects featuring eco-friendly fibre wood interiors.',
    type: 'website',
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
