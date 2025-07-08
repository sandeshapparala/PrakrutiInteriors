'use client'

import { useState } from 'react'
import { Project } from '@/sanity/lib/projects'
import ProjectsHeader from './projects-header'
import ProjectsGrid from './projects-grid'

interface ProjectsContainerProps {
  projects: Project[]
  categories: string[]
}

export default function ProjectsContainer({ projects, categories }: ProjectsContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid')

  // Filter projects based on selected category
  const filteredProjects = selectedCategory 
    ? projects.filter(project => project.category === selectedCategory)
    : projects

  return (
    <>
      <ProjectsHeader 
        categories={categories} 
        onCategoryChange={setSelectedCategory}
        onViewChange={setViewMode}
      />
      <ProjectsGrid 
        projects={filteredProjects}
        viewMode={viewMode}
      />
    </>
  )
}
