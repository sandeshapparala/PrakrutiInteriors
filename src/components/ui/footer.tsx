'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin,
  ChevronRight,
  Leaf,
  Heart,
  ArrowUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-neutral-50 border-t border-neutral-200">
      {/* Main Footer Content */}
      <div className="container-prakruti section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-40 h-10">
                <Image
                  src="/logo.png"
                  alt="Prakruti Interiors"
                  fill
                  className="object-contain"
                  sizes="40x"
                />
              </div>

            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming spaces with sustainable design and spiritual harmony. 
              We create beautiful, functional environments that reflect your unique style.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Leaf className="w-4 h-4 text-primary" />
              <span>Sustainable • Spiritual • Beautiful</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Projects', href: '#projects' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <nav className="space-y-3">
              {[
                'Residential Design',
                'Commercial Spaces',
                'Heritage Restoration',
                'Biophilic Design',
                'Wellness Centers',
                'Smart Home Integration'
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  <span>{service}</span>
                </div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>MG Road, near bandar lakulu bus stop</p>
                  <p>Vijayawada, Andhra Pradesh</p>
                  <p>India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>+91 88861 48866</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>prakruti.salesteam@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Follow Us</h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/prakrutiinteriors/', color: 'hover:text-pink-500' },
                  { icon: Facebook, href: 'https://www.facebook.com/prakruti.interiors.9', color: 'hover:text-blue-600' },
                  { icon: Youtube, href: 'https://www.youtube.com/@prakrutiinteriors9', color: 'hover:text-red-500' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/prakruti-interiors-0b80a8214/', color: 'hover:text-blue-700' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200 bg-neutral-50/50">
        <div className="container-prakruti py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Code & Craft Credits */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link 
                href="https://sandesh.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <span>Code & Craft by Sandesh</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 Prakruti Interiors. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              whileHover={{ y: -2 }}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
