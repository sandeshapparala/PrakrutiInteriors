'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Award, 
  Leaf, 
  Heart, 
  Calendar,
  Home,
  Sparkles,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
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
                  <div className="text-2xl font-bold text-primary">1000+</div>
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

          </motion.div>
          
        </div>

                  <motion.div
            className="mt-2 pt-6 border-t border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Philosophy Quote */}
              <div className="flex-1 max-w-md">
                <blockquote className="text-lg italic text-gray-600 leading-relaxed">
                  &ldquo;Every space has a soul. We simply help it speak.&rdquo;
                </blockquote>
                <div className="mt-3 text-sm text-gray-500">— Prakruti Design Philosophy</div>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <button className="group relative bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold shadow-lg overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      Begin Your Journey
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
      </div>
    </section>



      {/* Our Story Section */}
      <section className="section-padding bg-white">
        
        <div className="container-prakruti">
            
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            
            
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Heart className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium tracking-wide">OUR STORY</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="block">A Journey of</span>
                <span className="bg-gradient-to-r from-accent via-accent/90 to-primary bg-clip-text text-transparent">
                  Passion & Purpose
                </span>
              </motion.h2>

              {/* Story Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded with a vision to transform spaces while preserving our environment, Prakruti Interiors began as a small dream to create interiors that tell stories. Our founder&apos;s deep connection with nature and spirituality led to the birth of a design philosophy that marries sustainability with sophistication.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Over the years, we&apos;ve evolved from a passionate startup to a trusted name in eco-friendly interior design. Every project we undertake is infused with our core belief: beautiful spaces should enhance lives while respecting the planet.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we&apos;re proud to have transformed over 1000+ spaces, each one a testament to our commitment to quality, sustainability, and the timeless beauty of nature-inspired design.
                </p>
              </motion.div>

              {/* Milestones */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-gray-900">2009</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-semibold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Awards</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Images Grid */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4 h-96">
                {/* Main Image */}
                <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Our design journey"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold">Our Design Journey</div>
                    <div className="text-xs opacity-80">15+ Years of Excellence</div>
                  </div>
                </div>
                
                {/* Small Images */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Sustainable materials"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Happy clients"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-prakruti">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content - Takes 7 columns */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-primary text-sm font-medium tracking-wide">WHY CHOOSE US</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="block">A style that makes a</span>
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                  statement
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                At Prakruti Interiors, we create spaces that harmonize with nature while reflecting your unique personality. Our sustainable approach to design ensures every project contributes to a healthier planet and a more peaceful living environment.
              </motion.p>

              {/* Features Grid - 2x2 with dotted lines */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-12 border border-gray-200 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {[
                  {
                    icon: "🌿",
                    title: "Eco-Friendly Materials",
                    description: "We exclusively use sustainable fibre wood and non-toxic materials for healthier living spaces."
                  },
                  {
                    icon: "⚡",
                    title: "Quick Turnaround",
                    description: "Efficient project management ensures timely delivery without compromising on quality or craftsmanship."
                  },
                  {
                    icon: "🎯",
                    title: "Thoughtful Planning",
                    description: "Every design is meticulously planned to maximize functionality while maintaining aesthetic appeal."
                  },
                  {
                    icon: "✨",
                    title: "Perfect Execution",
                    description: "Our skilled craftsmen bring designs to life with precision and attention to every detail."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`
                      flex items-start gap-4 p-8 group
                      ${index === 1 || index === 3 ? 'border-l border-gray-200 border-dotted' : ''}
                      ${index === 2 || index === 3 ? 'border-t border-gray-200 border-dotted' : ''}
                    `}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center text-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual Area - Takes 5 columns */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Image Layout */}
              <div className="grid grid-cols-2 gap-4 min-h-[520px]">
                {/* Left Large Image - Workspace */}
                <motion.div
                  className="relative rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[3/5] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                      alt="Modern minimalist workspace with pendant light"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 21vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                </motion.div>

                {/* Right Column */}
                <div className="space-y-6 flex flex-col">
                  {/* Top Right Image - Modern Interior */}
                  <motion.div
                    className="relative rounded-xl overflow-hidden shadow-lg flex-1"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="aspect-[4/2.8] relative h-full min-h-[200px]">
                      <Image
                        src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        alt="Contemporary living room with geometric patterns"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 21vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                    </div>
                  </motion.div>

                  {/* Bottom Right - Testimonial Quote Card */}
                  <motion.div
                    className="bg-gray-100 rounded-xl p-8 shadow-lg flex-1 min-h-[180px] flex flex-col justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <blockquote className="text-lg italic text-gray-800 leading-relaxed mb-4 text-center">
                      &ldquo;The best rooms have something to say about the people who live in them.&rdquo;
                    </blockquote>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-600 tracking-wide">DAVID HICKS</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-prakruti">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium tracking-wide">OUR ACHIEVEMENTS</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Thousands</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our track record demonstrates our commitment to excellence and sustainable design innovation.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1000+",
                label: "Projects Delivered",
                description: "Completed successfully",
                icon: Home,
                color: "primary"
              },
              {
                number: "15+",
                label: "Years of Excellence",
                description: "Industry experience",
                icon: Calendar,
                color: "accent"
              },
              {
                number: "50+",
                label: "Industry Awards",
                description: "Recognition received",
                icon: Award,
                color: "primary"
              },
              {
                number: "100%",
                label: "Sustainable Materials",
                description: "Eco-friendly commitment",
                icon: Leaf,
                color: "accent"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -3 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}/10 border-2 border-${stat.color}/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                  </div>

                  {/* Number */}
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </div>

                  {/* Bottom accent line */}
                  <div className={`mt-6 h-1 bg-gradient-to-r from-${stat.color}/20 via-${stat.color} to-${stat.color}/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              Join our growing family of satisfied clients who trust us with their dream spaces.
            </p>
            <Link href="/projects">
              <motion.button
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-md border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Our Portfolio</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl transform -translate-x-32 -translate-y-32"></div>
          </div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 text-white/10"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Leaf className="w-16 h-16" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 text-white/10"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Sparkles className="w-12 h-12" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/3 right-1/4 text-white/8"
            animate={{ 
              y: [0, -10, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          >
            <Home className="w-14 h-14" />
          </motion.div>
        </div>

        <div className="relative z-10 container-prakruti">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              className="text-white space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium tracking-wide">READY TO START?</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-white">Let&apos;s Create Your</span>
                  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Dream Space Together
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-xl text-white/90 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Experience the perfect blend of sustainability, aesthetics, and functionality. Our expert team is ready to transform your vision into a stunning reality that reflects your unique style and values.
              </motion.p>

              {/* Features List */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {[
                  { icon: "🌿", text: "100% Eco-Friendly Materials" },
                  { icon: "⚡", text: "Fast & Efficient Delivery" },
                  { icon: "🎨", text: "Custom Design Solutions" },
                  { icon: "💫", text: "Lifetime Quality Guarantee" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-white/95"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Link href="/contact">
                  <motion.button
                    className="group relative bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </Link>

                <Link href="/projects">
                  <motion.button
                    className="group flex items-center gap-3 px-8 py-4 text-white border-2 border-white/30 hover:border-primary rounded-2xl font-semibold backdrop-blur-sm hover:bg-primary/20 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Portfolio</span>
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Card */}
              <motion.div
                className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Start Your Journey</h3>
                  <p className="text-white/70">Free consultation & quote</p>
                </div>

                {/* Process Steps */}
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Book Consultation", desc: "Free home visit & assessment" },
                    { step: "02", title: "Design & Quote", desc: "Custom design with transparent pricing" },
                    { step: "03", title: "Transform", desc: "Watch your dream space come to life" }
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                        {process.step}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{process.title}</div>
                        <div className="text-sm text-white/70">{process.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                  className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div>
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-xs text-white/60">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-xs text-white/60">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-white/60">Satisfaction</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Leaf className="w-6 h-6 text-accent" />
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Info Bar */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <div className="grid md:grid-cols-3 gap-6 text-center text-white">
              <motion.a
                href="tel:+918886148866"
                className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform text-primary" />
                <span className="font-medium">+91 88861 48866</span>
              </motion.a>
              
              <motion.a
                href="mailto:contact@prakrutiinteriors.com"
                className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform text-primary" />
                <span className="font-medium">contact@prakrutiinteriors.com</span>
              </motion.a>
              
              <motion.div
                className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Vijayawada, India</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
