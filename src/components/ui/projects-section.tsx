'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Award, Eye, Sparkles, ArrowUpRight, Ruler, Heart } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project, getProjectImageUrl, fallbackProjects } from '@/sanity/lib/projects';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects: initialProjects = [] }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('carousel');
  
  // Use provided projects or fallback to sample data
  const projects = initialProjects.length > 0 ? initialProjects : fallbackProjects;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);

  // Auto-rotate projects in carousel mode
  useEffect(() => {
    if (viewMode === 'carousel' && projects.length > 0) {
      const interval = setInterval(() => {
        setActiveProject(prev => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [viewMode, projects.length]);

  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  // Format services for display
  const formatServices = (services: string[] | undefined) => {
    if (!services || services.length === 0) return ['Interior Design'];
    return services.map(service => 
      service.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    );
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative py-20 px-4 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y, rotateX }}
      >
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-600/20 to-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div className="container-prakruti relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-600/10 via-orange-500/5 to-amber-500/10 backdrop-blur-sm border border-orange-600/20 rounded-full shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-orange-600 text-sm font-semibold tracking-wide">
              Award-Winning Projects
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="block text-gray-900">Crafting</span>
            <span className="block bg-gradient-to-r from-accent via-amber-500 to-accent/80 bg-clip-text text-transparent animate-gradient">
              Extraordinary Spaces
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            viewport={{ once: true }}
          >
            Discover our portfolio of transformative spaces where innovation meets elegance.
          </motion.p>

          {/* View Mode Toggle */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-gray-600">View:</span>
            <div className="flex bg-white rounded-xl border border-gray-200 shadow-sm p-1">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  viewMode === 'carousel' 
                    ? 'bg-orange-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Carousel
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-orange-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Grid
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Show message if no projects */}
        {projects.length === 0 ? (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-3xl p-16 border border-gray-200/50 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                Projects Coming Soon
              </h3>
              <p className="text-gray-600">
                We&apos;re currently curating our latest projects. Check back soon to see our amazing work!
              </p>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            {viewMode === 'carousel' ? (
              <motion.div
                key="carousel"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="mb-16"
              >
                {/* Featured Project Showcase */}
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                  <Link href={`/projects/${projects[activeProject].slug.current}`}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProject}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={getProjectImageUrl(projects[activeProject].mainImage, 1200, 600)}
                          alt={projects[activeProject].title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority
                          sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </motion.div>
                    </AnimatePresence>

                    {/* Category and Award Badges - Top Left */}
                    <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
                      <span className="px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                        {formatCategoryName(projects[activeProject].category)}
                      </span>
                      {projects[activeProject].featured && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-600/80 backdrop-blur-sm rounded-full">
                          <Award className="w-4 h-4 text-white" />
                          <span className="text-sm font-medium text-white">Award Winner</span>
                        </div>
                      )}
                    </div>

                    {/* Project Info Overlay - Bottom Left */}
                    <motion.div
                      className="absolute bottom-8 left-8 right-20 text-white z-10"
                      key={`info-${activeProject}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-4 leading-tight">
                        {projects[activeProject].title}
                      </h3>
                      
                      <p className="text-lg text-white/90 mb-6 max-w-2xl leading-relaxed">
                        {projects[activeProject].shortDescription}
                      </p>
                      
                      {/* Project Stats */}
                      <div className="flex items-center gap-6 text-sm text-white/80">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{projects[activeProject].location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{projects[activeProject].year}</span>
                        </div>
                        {projects[activeProject].area && (
                          <div className="flex items-center gap-2">
                            <Ruler className="w-4 h-4" />
                            <span>{projects[activeProject].area} sq ft</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          <span>12.4K</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          <span>342</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Small Arrow - Bottom Right */}
                    <div className="absolute bottom-8 right-8 z-10">
                      <motion.div 
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </Link>

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveProject(prev => prev === 0 ? projects.length - 1 : prev - 1);
                    }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveProject(prev => (prev + 1) % projects.length);
                    }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Dots Indicator - Bottom Center */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {projects.slice(0, Math.min(6, projects.length)).map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveProject(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === activeProject
                            ? 'bg-white scale-110' 
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Grid View - All Projects */
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.slice(0, 6).map((project, index) => (
                  <motion.div
                    key={project._id}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onHoverStart={() => setHoveredProject(project._id)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    <Link href={`/projects/${project.slug.current}`}>
                      {/* Project Image */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={getProjectImageUrl(project.mainImage, 600, 400)}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        
                        {/* Hover Overlay */}
                        <AnimatePresence>
                          {hoveredProject === project._id && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center"
                            >
                              <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-lg text-gray-900 font-semibold hover:bg-white transition-all duration-200 flex items-center gap-2"
                              >
                                View Details
                                <ArrowUpRight className="w-4 h-4" />
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-orange-600 text-white rounded-lg text-xs font-medium shadow-lg">
                            {formatCategoryName(project.category)}
                          </span>
                        </div>
                        
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-bold shadow-lg flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-playfair font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                            {project.title}
                          </h3>
                          <span className="text-orange-600 text-sm font-medium ml-4 flex-shrink-0">
                            {project.year}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-gray-600 text-sm mb-4">
                          <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
                          {project.location}
                        </div>
                        
                        <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-2">
                          {project.shortDescription}
                        </p>
                        
                        {/* Project Details */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            {project.area && (
                              <span className="flex items-center">
                                <span className="mr-1">📐</span>
                                {project.area} sq ft
                              </span>
                            )}
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1 text-emerald-500" />
                              {project.year}
                            </span>
                          </div>
                          
                          <div className="flex items-center text-orange-600 text-xs font-medium group-hover:text-orange-700 transition-colors">
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
                                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                                >
                                  {service}
                                </span>
                              ))}
                              {project.services.length > 2 && (
                                <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded-md text-xs font-medium">
                                  +{project.services.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <motion.div
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/25 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative">Explore All Projects</span>
              <motion.div
                className="relative"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
