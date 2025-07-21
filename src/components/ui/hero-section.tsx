'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getOptimizedImageUrl, type HomePageImages } from '@/sanity/lib/homePageImages';

interface HeroSectionProps {
  homePageData?: HomePageImages | null;
}

export default function HeroSection({ homePageData }: HeroSectionProps) {
  const router = useRouter();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Fallback interior designs if Sanity data isn't available
  const fallbackDesigns = [
    {
      id: 1,
      style: 'Modern Minimalist',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Clean lines, neutral tones, and clutter-free spaces'
    },
    {
      id: 2,
      style: 'Warm Contemporary',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Cozy textures, warm colors, and inviting atmosphere'
    },
    {
      id: 3,
      style: 'Natural Zen',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Organic materials, plants, and peaceful ambiance'
    },
    {
      id: 4,
      style: 'Luxury Classic',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Rich materials, elegant furniture, and timeless design'
    },
    {
      id: 5,
      style: 'Coastal Breeze',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Light blues, whites, and airy coastal-inspired elements'
    }
  ];

  // Use Sanity data if available, otherwise fallback to hardcoded data
  const interiorDesigns = homePageData?.heroSection?.interiorDesigns?.length 
    ? homePageData.heroSection.interiorDesigns.map((design, index) => ({
        id: index + 1,
        style: design.style || 'Interior Design',
        image: getOptimizedImageUrl(design.image, 1000, 750),
        description: `Beautiful ${design.style ? design.style.toLowerCase() : 'interior'} design`
      }))
    : fallbackDesigns;

  const [currentDesign, setCurrentDesign] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesign((prev) => (prev + 1) % interiorDesigns.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [interiorDesigns.length]);

  const currentDesign_data = interiorDesigns[currentDesign];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f6f3] via-background to-[#f5f3f0]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(15,125,50,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(240,106,0,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container-prakruti">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y, opacity }}
          >
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-primary text-sm font-medium tracking-wide">
                {/*Eco-Friendly Design Studio*/}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight text-gray-900">
                <span className="block">Create And</span>
                <span className="block">Customize Your</span>
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                  Dream Interior
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-light">
                We design interiors that reflect your unique style through eco-friendly fibre wood, spiritual aesthetics, and modern functionality — creating spaces filled with peace, beauty, and purpose.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Portfolio Button */}
              <motion.button
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-base shadow-lg shadow-primary/25 transition-all duration-300 flex items-center gap-3 justify-center"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/projects')}
              >
                <span>PORTFOLIO</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </motion.button>

              {/* Watch Tour Button */}
              <motion.button
                className="group flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://maps.app.goo.gl/cGhVTF8eH8K43ivKA?g_st=ac', '_blank')}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Play className="w-5 h-5 text-primary fill-current ml-0.5" />
                  </div>
                  <motion.div
                    className="absolute inset-0 border border-primary/30 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="font-medium">WATCH TOUR</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-white"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  {/* Real Interior Design Images */}
                  <AnimatePresence>
                    <motion.div
                      key={currentDesign}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <Image
                        src={currentDesign_data.image}
                        alt={currentDesign_data.style}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Gradient Overlay for Better Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Design Style Label */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <h3 className="font-semibold text-gray-900 text-sm">{currentDesign_data.style}</h3>
                    <p className="text-xs text-gray-600 mt-1">{currentDesign_data.description}</p>
                  </motion.div>
                  
                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {interiorDesigns.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentDesign(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentDesign 
                            ? 'bg-primary shadow-lg' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Trust Badges */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="text-xs text-gray-600 font-medium">Client Rating</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: -30, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-xs text-gray-600 font-medium">Projects</div>
                </div>
              </motion.div>

              {/* Ambient Light Effects */}
              <motion.div
                className="absolute top-1/4 -left-6 w-12 h-12 bg-primary/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 -right-6 w-8 h-8 bg-accent/15 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-xs text-gray-500 font-medium tracking-widest">SCROLL</span>
        <motion.div
          className="w-6 h-10 border border-gray-300 rounded-full flex justify-center relative overflow-hidden"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
