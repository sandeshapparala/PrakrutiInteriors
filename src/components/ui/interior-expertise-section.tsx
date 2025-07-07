'use client';

import { motion } from 'framer-motion';
import { Leaf, CircleDot, Heart } from 'lucide-react';
import Image from 'next/image';

export default function InteriorExpertiseSection() {
  const expertiseStats = [
    { 
      label: "SUSTAINABLE VISION", 
      percentage: 92, 
      color: "bg-orange-500", 
      icon: Leaf,
      description: "Eco-friendly materials & design"
    },
    { 
      label: "DESIGN HARMONY", 
      percentage: 87, 
      color: "bg-primary", 
      icon: CircleDot,
      description: "Balanced layouts & spiritual calm"
    },
    { 
      label: "CLIENT SATISFACTION", 
      percentage: 95, 
      color: "bg-yellow-500", 
      icon: Heart,
      description: "Happy families & peaceful homes"
    }
  ];

  return (
    <section className="relative section-padding bg-white overflow-hidden">
      <div className="container-prakruti">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Badge */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase">
                INTERIOR EXPERTISE
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold leading-tight text-gray-900">
                Designing Interiors That Feel Spacious, Soulful, and Sustainable
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
                At Prakruti Interiors, we design spaces that breathe — blending thoughtful layouts 
                with spiritual calm and nature-inspired materials to create harmony and openness.
              </p>
            </motion.div>

            {/* Progress Bars */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {expertiseStats.map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-800 tracking-wide">
                          {stat.label}
                        </span>
                        <p className="text-xs text-gray-500">{stat.description}</p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-gray-900">
                      {stat.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                    <motion.div
                      className={`h-2 rounded-full ${stat.color} shadow-sm`}
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.3)'
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.2, duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Image Container with exact layout from reference */}
            <div className="relative">
              {/* Outer gray frame - positioned at top and right */}
              <div className="absolute top-4 right-4 w-full h-full bg-gray-400"></div>
              
              {/* Main white container with image */}
              <div className="relative bg-white p-0 shadow-2xl" style={{
                boxShadow: '0 25px 50px -12px rgba(21, 128, 61, 0.15), 0 0 0 1px rgba(21, 128, 61, 0.05)'
              }}>
                {/* Inner image container */}
                <div className="relative h-96 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Modern interior workspace with geometric black and white floor pattern"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Caption Overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <p className="text-white text-sm font-medium">
                      Minimalist Living Room – Designed for Peace & Light
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
