'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Grid3X3, LayoutGrid, Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface ProjectsHeaderProps {
  categories: string[]
  onCategoryChange?: (category: string | null) => void
  onViewChange?: (view: 'grid' | 'masonry') => void
}

export default function ProjectsHeader({ categories, onCategoryChange, onViewChange }: ProjectsHeaderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid')

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
    onCategoryChange?.(category)
  }

  const handleViewChange = (view: 'grid' | 'masonry') => {
    setViewMode(view)
    onViewChange?.(view)
  }

  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  return (
    <motion.section 
      className="relative py-8 px-4 bg-white border-b border-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Breadcrumb and Project Count */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Breadcrumb */}
          <nav>          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Projects</span>
          </div>
          </nav>

          {/* Project Count */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full border border-neutral-200/50">
            <span className="text-neutral-600 text-sm">
              {selectedCategory 
                ? `${formatCategoryName(selectedCategory)} Projects`
                : 'All Projects'
              }
            </span>
          </div>
        </motion.div>

        {/* Enhanced Filter Bar */}
        <motion.div 
          className="bg-white/60 backdrop-blur-xl rounded-2xl border border-neutral-200/50 shadow-lg p-6 mb-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full lg:w-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-200 rounded-xl 
                          focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400
                          transition-all duration-300 placeholder-neutral-400"
              />
            </div>

            {/* Category Filter */}
            {categories.length > 0 && (
              <div className="flex items-center gap-3 flex-wrap">
                <Filter className="text-neutral-500 w-5 h-5" />
                <div className="flex flex-wrap gap-2">
                  <motion.button
                    onClick={() => handleCategoryChange(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === null
                        ? 'bg-orange-600 text-white shadow-lg'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    All Projects
                  </motion.button>
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-orange-600 text-white shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {formatCategoryName(category)}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-neutral-100 rounded-xl p-1">
              <motion.button
                onClick={() => handleViewChange('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Grid3X3 className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => handleViewChange('masonry')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'masonry'
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <LayoutGrid className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
