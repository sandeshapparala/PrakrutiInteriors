'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Award, Eye, Heart, Star, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  year: string;
  client: string;
  awards?: string[];
  tags: string[];
  featured: boolean;
  likes: number;
  views: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mystic Mountain Retreat",
    category: "Luxury Resort",
    description: "A breathtaking mountain retreat that seamlessly blends with nature, featuring sustainable architecture and zen-inspired interiors that create a perfect harmony between luxury and mindfulness.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Himachal Pradesh, India",
    year: "2024",
    client: "Serenity Resorts",
    awards: ["World Architecture Festival - Winner"],
    tags: ["Sustainable", "Luxury", "Nature"],
    featured: true,
    likes: 342,
    views: "12.4K"
  },
  {
    id: 2,
    title: "Azure Coastal Villa",
    category: "Private Residence",
    description: "An oceanfront villa where modern minimalism meets coastal charm, featuring floor-to-ceiling windows and organic textures.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Goa, India",
    year: "2024",
    client: "Private Client",
    tags: ["Coastal", "Minimalist", "Luxury"],
    featured: false,
    likes: 156,
    views: "8.9K"
  },
  {
    id: 3,
    title: "Urban Forest Office",
    category: "Commercial Space",
    description: "A revolutionary office design that brings nature indoors with living walls, natural lighting, and biophilic elements.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Bangalore, India",
    year: "2023",
    client: "TechFlow Solutions",
    awards: ["Green Building Award"],
    tags: ["Biophilic", "Sustainable", "Modern"],
    featured: true,
    likes: 289,
    views: "15.2K"
  },
  {
    id: 4,
    title: "Heritage Fusion Palace",
    category: "Cultural Project",
    description: "A masterful restoration project blending traditional Indian architecture with contemporary functionality.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Rajasthan, India",
    year: "2023",
    client: "Heritage Foundation",
    awards: ["Cultural Preservation Award"],
    tags: ["Heritage", "Traditional", "Restoration"],
    featured: false,
    likes: 445,
    views: "22.1K"
  },
  {
    id: 5,
    title: "Skyline Penthouse",
    category: "Urban Living",
    description: "A sophisticated penthouse with panoramic city views, featuring smart home technology and contemporary aesthetics.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Mumbai, India",
    year: "2024",
    client: "Elite Residences",
    tags: ["Smart Home", "Luxury", "Urban"],
    featured: false,
    likes: 178,
    views: "9.3K"
  },
  {
    id: 6,
    title: "Zen Wellness Sanctuary",
    category: "Hospitality",
    description: "A holistic wellness center designed to promote healing and tranquility through thoughtful spatial design.",
    image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Kerala, India",
    year: "2023",
    client: "Harmony Wellness",
    tags: ["Wellness", "Zen", "Healing"],
    featured: true,
    likes: 203,
    views: "11.7K"
  }
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('carousel');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);

  // Auto-rotate featured projects
  useEffect(() => {
    const featuredProjects = projects.filter(p => p.featured);
    if (viewMode === 'carousel') {
      const interval = setInterval(() => {
        setActiveProject(prev => {
          const nextIndex = (prev + 1) % featuredProjects.length;
          return projects.findIndex(p => p.id === featuredProjects[nextIndex].id);
        });
      }, 3000); // Faster auto-rotation: 3 seconds
      return () => clearInterval(interval);
    }
  }, [viewMode]);

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section ref={containerRef} className="section-padding bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y, rotateX }}
      >
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div className="container-prakruti relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">
              Award-Winning Projects
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="block text-foreground">Crafting</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Extraordinary Spaces
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
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
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-muted-foreground">View Mode:</span>
            <div className="flex bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === 'carousel' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Carousel
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Grid
              </button>
            </div>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === 'carousel' ? (
            /* Carousel View - Featured Projects */
            <motion.div
              key="carousel"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              {/* Featured Project Showcase */}
              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={projects[activeProject].image}
                      alt={projects[activeProject].title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Project Info Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                        {projects[activeProject].category}
                      </span>
                      {projects[activeProject].awards && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full">
                          <Award className="w-3 h-3" />
                          <span className="text-xs font-medium">Award Winner</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                      {projects[activeProject].title}
                    </h3>
                    
                    <p className="text-lg text-white/90 mb-6 max-w-2xl">
                      {projects[activeProject].description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{projects[activeProject].location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{projects[activeProject].year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        <span>{projects[activeProject].likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{projects[activeProject].views}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 left-6">
                  <motion.button
                    onClick={() => setActiveProject(prev => prev > 0 ? prev - 1 : featuredProjects.length - 1)}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.button>
                </div>
                
                <div className="absolute top-1/2 -translate-y-1/2 right-6">
                  <motion.button
                    onClick={() => setActiveProject(prev => (prev + 1) % featuredProjects.length)}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-8 right-8 flex gap-2">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(projects.findIndex(p => p.id === featuredProjects[index].id))}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === featuredProjects.findIndex(p => p.id === projects[activeProject].id)
                          ? 'bg-white' 
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
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Hover Overlay */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center"
                        >
                          <motion.button
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-lg text-gray-900 font-semibold hover:bg-white transition-all duration-200"
                          >
                            View Details
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-1 bg-primary/90 backdrop-blur-sm rounded-md text-xs font-medium text-white flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-4 right-4 flex gap-3 text-white">
                      <div className="flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-md">
                        <Heart className="w-3 h-3" />
                        <span className="text-xs">{project.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-md">
                        <Eye className="w-3 h-3" />
                        <span className="text-xs">{project.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/25 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.99 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative flex items-center gap-3">
              Explore All Projects
              <ArrowRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
