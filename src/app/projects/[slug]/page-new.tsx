import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Home, User, ArrowLeft, Award, Eye, ArrowUpRight } from 'lucide-react'
import { getProjectBySlug, getAllProjects, getProjectImageUrl } from '@/sanity/lib/projects'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = await getAllProjects()
  
  return projects.map((project) => ({
    slug: project.slug.current,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found - Prakruti Interiors',
    }
  }
  
  return {
    title: `${project.title} - Prakruti Interiors`,
    description: project.shortDescription,
    keywords: [
      'interior design',
      project.category,
      project.location,
      'eco-friendly interiors',
      'fibre wood'
    ],
    openGraph: {
      title: `${project.title} - Prakruti Interiors`,
      description: project.shortDescription,
      type: 'article',
      images: [
        {
          url: getProjectImageUrl(project.mainImage, 1200, 630),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] overflow-hidden">
          {/* Main Project Image */}
          <div className="absolute inset-0">
            <Image
              src={getProjectImageUrl(project.mainImage, 1920, 1080)}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto px-4 pb-16 w-full">
              <div className="max-w-4xl">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-sm text-white/80 mb-6">
                  <Link href="/" className="hover:text-white transition-colors flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                  <span>/</span>
                  <span className="text-white">{project.title}</span>
                </div>

                {/* Project Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {formatCategoryName(project.category)}
                    </span>
                    {project.featured && (
                      <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
                    {project.title}
                  </h1>
                  
                  <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <Calendar className="w-6 h-6 text-emerald-400 mb-2" />
                    <div className="text-white font-semibold">{project.year}</div>
                    <div className="text-white/70 text-sm">Completed</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <MapPin className="w-6 h-6 text-emerald-400 mb-2" />
                    <div className="text-white font-semibold text-sm">{project.location}</div>
                    <div className="text-white/70 text-sm">Location</div>
                  </div>
                  {project.area && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <Home className="w-6 h-6 text-emerald-400 mb-2" />
                      <div className="text-white font-semibold">{project.area} sq ft</div>
                      <div className="text-white/70 text-sm">Area</div>
                    </div>
                  )}
                  {project.client && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <User className="w-6 h-6 text-emerald-400 mb-2" />
                      <div className="text-white font-semibold text-sm">{project.client}</div>
                      <div className="text-white/70 text-sm">Client</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Project Description */}
                {project.description && (
                  <div>
                    <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8">
                      Project Overview
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                        {project.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Challenges & Solutions */}
                {project.challenges && (
                  <div>
                    <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8">
                      Challenges & Solutions
                    </h2>
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
                      <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                        {project.challenges}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Project Info Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-6">
                    Project Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Category</span>
                      <span className="font-semibold text-gray-900">{formatCategoryName(project.category)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Year</span>
                      <span className="font-semibold text-gray-900">{project.year}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Location</span>
                      <span className="font-semibold text-gray-900">{project.location}</span>
                    </div>
                    {project.area && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Area</span>
                        <span className="font-semibold text-gray-900">{project.area} sq ft</span>
                      </div>
                    )}
                    {project.client && (
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Client</span>
                        <span className="font-semibold text-gray-900">{project.client}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Services */}
                {project.services && project.services.length > 0 && (
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <h3 className="text-xl font-playfair font-bold text-gray-900 mb-6">
                      Services Provided
                    </h3>
                    <div className="space-y-3">
                      {formatServices(project.services).map((service, index) => (
                        <div 
                          key={index}
                          className="flex items-center p-3 bg-emerald-50 rounded-xl border border-emerald-100"
                        >
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                          <span className="text-emerald-800 font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-playfair font-bold mb-4">
                    Love This Project?
                  </h3>
                  <p className="text-emerald-100 mb-6">
                    Let&apos;s create something equally stunning for your space.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
                  >
                    Start Your Project
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                  Project Gallery
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore every detail of this stunning transformation through our curated gallery.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group ${
                      index % 3 === 1 ? 'md:mt-8' : ''
                    }`}
                    style={{ height: index % 4 === 0 ? '400px' : '320px' }}
                  >
                    <Image
                      src={getProjectImageUrl(image, 800, 600)}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">View Full Size</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation & CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Let&apos;s create something beautiful together. Our team of expert designers 
              is ready to bring your vision to life with the same attention to detail 
              and craftsmanship you see in this project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors border border-gray-200 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                View More Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
