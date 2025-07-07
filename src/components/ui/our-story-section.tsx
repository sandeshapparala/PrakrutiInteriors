'use client';

import { motion } from 'framer-motion';
import { Quote, Heart, Leaf, Star, Users } from 'lucide-react';
import Image from 'next/image';

export default function OurStorySection() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-background via-primary/5 to-accent/5 overflow-hidden leaf-pattern-bg">
      {/* Decorative Elements */}
      <div className="absolute inset-0 wood-grain-texture opacity-30"></div>
      
      {/* Floating Organic Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 organic-border floating-animation"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-accent/10 organic-border floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/5 organic-border floating-animation" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 container-prakruti">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Founder Story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full signature-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium tracking-wide">OUR STORY</span>
            </motion.div>

            {/* Main Heading with Brush Stroke */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 brush-stroke">
                <span className="block">Where Nature Meets</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Beautiful Living
                </span>
              </h2>
            </motion.div>

            {/* Founder Quote */}
            <motion.div
              className="relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl signature-shadow cursor-magic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-4">
                &quot;Every space has a soul waiting to be awakened. At Prakruti Interiors, we don&apos;t just design rooms—we create sanctuaries where families grow, dreams flourish, and spirits find peace. Our journey began with a simple belief: homes should heal, not just house.&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-primary">Founder & Principal Designer</div>
                </div>
              </div>
            </motion.div>

            {/* Story Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {[
                { icon: Users, number: "500+", label: "Happy Families", color: "text-primary" },
                { icon: Leaf, number: "15+", label: "Years of Love", color: "text-accent" },
                { icon: Star, number: "98%", label: "Client Satisfaction", color: "text-primary" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group hover-lift"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 signature-shadow group-hover:signature-glow transition-all duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Story */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Main Image */}
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden signature-shadow hover-lift group cursor-magic">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Founder Priya Sharma designing a beautiful living space"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-semibold mb-1">Our Design Philosophy</div>
                  <div className="text-sm opacity-90">Nature • Peace • Purpose</div>
                </div>
              </div>
              
              {/* Floating Achievement Card */}
              <motion.div
                className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 signature-shadow hover-lift"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">Award</div>
                  <div className="text-xs text-gray-600">Eco-Design 2024</div>
                </div>
              </motion.div>

              {/* Floating Client Love Card */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 signature-shadow hover-lift"
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ rotate: -5, scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">500+ Families</div>
                    <div className="text-xs text-gray-600">Trust Prakruti</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Client Testimonial */}
        <motion.div
          className="mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 signature-shadow hover-lift">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-6">
              &quot;Prakruti didn&apos;t just design our home, they created our sanctuary. Every corner breathes peace, every material tells a story of sustainability. Our children love playing in spaces that feel alive and connected to nature.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                RS
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Rajesh & Sunita Gupta</div>
                <div className="text-sm text-primary">3BHK Villa, Whitefield</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
