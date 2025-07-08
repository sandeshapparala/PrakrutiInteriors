'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, Calendar, MapPin, ArrowUpRight, Award, Home } from 'lucide-react'
import { Project, getProjectImageUrl } from '@/sanity/lib/projects'

interface ProjectsGridProps {
  projects: Project[]
  viewMode?: 'grid' | 'masonry'
}

export default function ProjectsGrid({ projects, viewMode = 'grid' }: ProjectsGridProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  const formatServices = (services: string[] | undefined) => {
    if (!services || services.length === 0) return ['Interior Design']
    return services.map(service => 
      service.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    )
  }

  if (projects.length === 0) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-3xl p-16 border border-gray-200/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full 
                           flex items-center justify-center mx-auto mb-8">
              <Eye className="w-10 h-10 text-orange-600" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
              No Projects Available
            </h3>
            <p className="text-gray-600 text-lg">
              We&apos;re currently updating our portfolio. Please check back soon to see our latest projects.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="py-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Projects Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'masonry' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group"
            >
              <Link href={`/projects/${project.slug.current}`}>
                <article
                  className="relative bg-white rounded-2xl overflow-hidden border border-gray-200
                           transition-all duration-300 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10"
                  onMouseEnter={() => setHoveredProject(project._id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={getProjectImageUrl(project.mainImage, 800, 600)}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-600 text-white rounded-lg text-xs font-medium
                                     shadow-lg backdrop-blur-sm">
                        {formatCategoryName(project.category)}
                      </span>
                    </div>
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-bold
                                       shadow-lg backdrop-blur-sm flex items-center">
                          <Award className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Hover arrow */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-10 h-10 bg-orange-600 rounded-full 
                               flex items-center justify-center shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: hoveredProject === project._id ? 1 : 0,
                        scale: hoveredProject === project._id ? 1 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    {/* Title and Year */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-playfair font-bold text-gray-900 
                                   group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <span className="text-orange-600 text-sm font-medium ml-4 flex-shrink-0">
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
                      {project.location}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    
                    {/* Project Details Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        {project.area && (
                          <span className="flex items-center">
                            <Home className="w-3 h-3 mr-1 text-emerald-500" />
                            {project.area} sq ft
                          </span>
                        )}
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1 text-emerald-500" />
                          {project.year}
                        </span>
                      </div>
                      
                      {/* View indicator */}
                      <div className="flex items-center text-orange-600 text-xs font-medium
                                    group-hover:text-orange-700 transition-colors">
                        View Details
                        <motion.div
                          animate={{ x: hoveredProject === project._id ? 3 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight className="w-3 h-3 ml-1" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Services tags */}
                    {project.services && project.services.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                          {formatServices(project.services).slice(0, 2).map((service, serviceIndex) => (
                            <span 
                              key={serviceIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs
                                       border border-gray-200"
                            >
                              {service}
                            </span>
                          ))}
                          {formatServices(project.services).length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs
                                           border border-gray-200">
                              +{formatServices(project.services).length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Project count with animation */}
        {projects.length > 0 && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-600 text-sm font-medium">
                Showing {projects.length} project{projects.length !== 1 ? 's' : ''}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
