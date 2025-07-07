'use client';

import { motion } from 'framer-motion';
import { Star, Heart, MessageSquare, CheckCircle, ThumbsUp, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
  likes: number;
  verified: boolean;
  badge?: string;
  type: 'main' | 'compact' | 'mini';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner",
    quote: "Absolutely love the design of this home. It's not only stylish but also very functional, making it a perfect space for our family.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    likes: 124,
    verified: true,
    badge: "Verified Purchase",
    type: 'main'
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "CEO",
    quote: "Prompt and helpful responses to my inquiry! Superb quality, impressed.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    likes: 89,
    verified: true,
    type: 'compact'
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Interior Designer",
    quote: "Incredible service. Perfect service knowledge exceeded expectations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    likes: 156,
    verified: true,
    type: 'compact'
  },
  {
    id: 4,
    name: "Dr. Vikram",
    role: "Wellness Director",
    quote: "Highly satisfied with my purchase, thank you!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    likes: 203,
    verified: true,
    type: 'mini'
  },
  {
    id: 5,
    name: "Sarah Wilson",
    role: "Architect",
    quote: "Amazing Product! When it comes to quality, this product is top-notch.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    likes: 267,
    verified: true,
    type: 'compact'
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Developer",
    quote: "Great offers",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    likes: 92,
    verified: true,
    type: 'mini'
  }
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-prakruti relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Client Reviews</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block text-foreground">What Our</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>
        </motion.div>

        {/* Asymmetrical Grid Layout */}
        <div className="relative max-w-7xl mx-auto">
          {/* Main Featured Card - Top Left */}
          <motion.div
            className="absolute top-0 left-0 w-96 z-20"
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, z: 30 }}
          >
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={testimonials[0].image} alt={testimonials[0].name} fill className="object-cover" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-gray-900">{testimonials[0].name}</h4>
                    {testimonials[0].verified && <CheckCircle className="w-4 h-4 text-green-500" />}
                  </div>
                  <p className="text-sm text-gray-600">{testimonials[0].role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-800 text-sm leading-relaxed mb-4">
                {testimonials[0].quote}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-medium">
                  {testimonials[0].badge}
                </span>
                <div className="flex items-center gap-1 text-gray-500">
                  <Heart className="w-3 h-3" />
                  <span className="text-xs">{testimonials[0].likes}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compact Card - Top Right */}
          <motion.div
            className="absolute top-20 right-0 w-80 z-15"
            initial={{ opacity: 0, x: 50, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image src={testimonials[1].image} alt={testimonials[1].name} fill className="object-cover" sizes="40px" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonials[1].name}</h4>
                  <p className="text-xs text-gray-600">{testimonials[1].role}</p>
                </div>
                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">5.0</div>
              </div>
              
              <h3 className="font-bold text-gray-900 text-lg mb-2">Prompt and helpful responses to my inquiry!</h3>
              <p className="text-gray-600 text-sm">Superb quality, impressed</p>
            </div>
          </motion.div>

          {/* Quote Card - Center Left */}
          <motion.div
            className="absolute top-64 left-20 w-72 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-6xl text-primary/20 mb-2">&ldquo;</div>
                <p className="text-gray-800 font-medium text-sm italic mb-4">
                  &ldquo;Outstanding service quality and we achieved perfect customer satisfaction&rdquo;
                </p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image src={testimonials[2].image} alt={testimonials[2].name} fill className="object-cover" sizes="32px" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{testimonials[2].name}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mini Card 1 - Top Center */}
          <motion.div
            className="absolute top-10 left-1/2 transform -translate-x-1/2 w-48 z-25"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-lg text-center">
              <div className="flex items-center gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-900 font-medium text-sm mb-2">Highly satisfied with my purchase, thank you!</p>
              <div className="flex items-center justify-center gap-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <Image src={testimonials[3].image} alt={testimonials[3].name} fill className="object-cover" sizes="24px" />
                </div>
                <span className="text-xs text-gray-700">{testimonials[3].name}</span>
              </div>
            </div>
          </motion.div>

          {/* Service Rating Card - Bottom Left */}
          <motion.div
            className="absolute bottom-0 left-0 w-64 z-20"
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-br from-accent/15 to-primary/15 backdrop-blur-md border border-white/25 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="font-bold text-gray-900">Service Rating</span>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-2">Rated 4.9/5 stars</span>
              </div>
              <p className="text-xs text-gray-600">Based on 150+ reviews</p>
            </div>
          </motion.div>

          {/* Incredible Service Card - Bottom Right */}
          <motion.div
            className="absolute bottom-20 right-20 w-80 z-15"
            initial={{ opacity: 0, x: 30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={testimonials[4].image} alt={testimonials[4].name} fill className="object-cover" sizes="64px" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-500">20 Mar 2024</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Incredible service</h3>
                  <p className="text-sm text-gray-600 mb-3">Perfect service knowledge exceeded expectations</p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>194</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      <span>21.7k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mini Floating Cards */}
          <motion.div
            className="absolute top-80 right-40 w-40 z-30"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
          >
            <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-xl p-4 shadow-lg text-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden mx-auto mb-2">
                <Image src={testimonials[5].image} alt={testimonials[5].name} fill className="object-cover" sizes="40px" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm">Amazing Product!</h4>
              <p className="text-xs text-gray-600 mb-2">When it comes to quality, this product is top-notch.</p>
              <div className="flex items-center justify-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <Heart className="w-3 h-3 text-red-500" />
                  <span>1,944</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>👁</span>
                  <span>21.7k</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots - Bottom Center */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
              <motion.button
                className="w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-gray-700">←</span>
              </motion.button>
              
              <div className="flex gap-1">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeTestimonial % 3 ? 'bg-primary w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                className="w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-gray-700">→</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
