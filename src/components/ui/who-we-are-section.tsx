'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhoWeAreSection() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-[#ffffff] via-background to-[#ffffff] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Leaf Pattern Background */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
          <div className="w-full h-full bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 w-40 h-40 opacity-20">
          <div className="w-full h-full bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating Leaf Icons */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-primary/20"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Leaf className="w-12 h-12" />
        </motion.div>
        
        <motion.div
          className="absolute top-3/4 right-1/4 text-accent/20"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="relative z-10 container-prakruti">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary text-sm font-medium tracking-wide">WHO WE ARE</span>
            </motion.div>

            {/* Image Grid Layout */}
            <div className="grid grid-cols-2 gap-4 h-96">
              {/* Main Large Image */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Eco-friendly living room with natural materials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">Sustainable Living Spaces</div>
                  <div className="text-xs opacity-80">Eco-friendly & Peaceful</div>
                </div>
              </div>
              
              {/* Small Images Row */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Modern kitchen design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  Modern Kitchen
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Natural zen bedroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  Zen Bedroom
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 min-w-[280px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-gray-600">Eco-Friendly</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                <span className="block">Interiors Rooted in</span>
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                  Nature, Designed with Purpose
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                At Prakruti Interiors, we blend eco-friendly fibre wood, elegant Indian aesthetics, and modern functionality to create spaces that inspire peace, beauty, and purpose. With years of experience and a passion for sustainability, we design every interior to reflect not just your style, but the soul of your space.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[
                { icon: "🌿", title: "Eco-Friendly Materials", desc: "Sustainable fibre wood" },
                { icon: "🕉️", title: "Spiritual Aesthetics", desc: "Peaceful, purposeful design" },
                { icon: "🏡", title: "Modern Functionality", desc: "Contemporary solutions" },
                { icon: "💚", title: "Soul-Centered Design", desc: "Reflects your essence" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                    <p className="text-gray-600 text-xs">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link href="/about">
                <motion.button
                  className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-base shadow-lg shadow-primary/25 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>About Us</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
