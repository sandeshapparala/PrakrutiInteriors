'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Home, ChefHat, Bed, Sofa, Building, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Living Room Design",
      tagline: "Aesthetic, spacious, & cozy living",
      description: "Transform your living space into a harmonious blend of comfort and style with eco-friendly materials.",
      icon: Sofa,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Space Optimization", "Natural Materials", "Aesthetic Balance"],
      color: "from-primary to-primary/80"
    },
    {
      id: 2,
      title: "Modular Kitchen",
      tagline: "Smart, space-saving kitchens",
      description: "Innovative kitchen designs that maximize functionality while maintaining beautiful aesthetics.",
      icon: ChefHat,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Smart Storage", "Modern Appliances", "Efficient Layout"],
      color: "from-accent to-accent/80"
    },
    {
      id: 3,
      title: "Bedroom Interiors",
      tagline: "Elegant, serene personal spaces",
      description: "Create peaceful sanctuaries that promote rest and reflect your personal style.",
      icon: Bed,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Peaceful Ambiance", "Custom Storage", "Comfort Design"],
      color: "from-primary to-primary/80"
    },
    {
      id: 4,
      title: "Furniture & Decor",
      tagline: "Eco-friendly & customized designs",
      description: "Handcrafted furniture pieces using sustainable fibre wood and spiritual design principles.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Sustainable Materials", "Custom Designs", "Artisan Crafted"],
      color: "from-accent to-accent/80"
    },
    {
      id: 5,
      title: "Office Spaces",
      tagline: "Functional + brand-aligned layouts",
      description: "Professional environments that boost productivity while reflecting your company's values.",
      icon: Building,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Productivity Focus", "Brand Identity", "Flexible Layouts"],
      color: "from-primary to-primary/80"
    },
    {
      id: 6,
      title: "Custom Design Consult",
      tagline: "Tailored interior guidance",
      description: "Personalized consultation to bring your unique vision to life with expert guidance.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Personalized Plans", "Expert Guidance", "Budget Optimization"],
      color: "from-accent to-accent/80"
    }
  ];

  return (
    <section className="relative section-padding bg-gradient-to-br from-gray-50 via-gray-50/80 to-primary/5 overflow-hidden prakruti-texture">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 wood-grain-texture">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 container-prakruti">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full signature-shadow mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Home className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium tracking-wide">WHAT WE OFFER</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6 brush-stroke"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block">Our Interior Design</span>
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            From conceptual design to complete execution, we offer comprehensive interior solutions 
            that transform spaces into beautiful, functional, and sustainable environments.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl signature-shadow hover-lift transition-all duration-300 overflow-hidden border border-white/80 cursor-magic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Content - Now at the top */}
              <div className="p-6 pb-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 signature-shadow group-hover:signature-glow transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-all duration-300 group-hover:gap-3"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200" />
                </Link>
              </div>

              {/* Service Image - Now at the bottom */}
              <div className="relative h-48 overflow-hidden rounded-b-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
