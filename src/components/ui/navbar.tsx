'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 20;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      setScrolled(isScrolled);
      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [lastScrollY]);

  const navigation = [
    { name: 'HOME', href: '/' },
    { 
      name: 'SERVICES', 
      href: '/services',
      dropdown: [
        { name: 'Interior Design', href: '/services/interior-design' },
        { name: 'Furniture Design', href: '/services/furniture-design' },
        { name: 'Space Planning', href: '/services/space-planning' },
        { name: 'Consultation', href: '/services/consultation' },
      ]
    },
    { 
      name: 'PROJECTS', 
      href: '/projects',
      dropdown: [
        { name: 'Residential', href: '/projects/residential' },
        { name: 'Commercial', href: '/projects/commercial' },
        { name: 'Hospitality', href: '/projects/hospitality' },
        { name: 'All Projects', href: '/projects' },
      ]
    },
    { 
      name: 'PAGES', 
      href: '/pages',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    { 
      name: 'BLOG', 
      href: '/blog',
      dropdown: [
        { name: 'Latest Posts', href: '/blog' },
        { name: 'Design Tips', href: '/blog/design-tips' },
        { name: 'Trends', href: '/blog/trends' },
        { name: 'Case Studies', href: '/blog/case-studies' },
      ]
    },
    { name: 'CONTACT', href: '/contact' },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container-prakruti">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-64 h-16">
                <Image
                  src="/logo.png"
                  alt="Prakruti Interiors Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group dropdown-container">
                  <button
                    className={`flex items-center gap-1 transition-colors duration-200 font-medium tracking-wide ${
                      scrolled 
                        ? 'text-gray-700 hover:text-primary' 
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    onClick={() => item.dropdown && toggleDropdown(item.name)}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.button
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg shadow-primary/25 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT US
                <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                scrolled 
                  ? 'hover:bg-gray-100 text-gray-700' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container-prakruti py-4">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <button
                        className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                        onClick={() => item.dropdown && toggleDropdown(item.name)}
                      >
                        {item.name}
                        {item.dropdown && (
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        )}
                      </button>
                      
                      {/* Mobile Dropdown */}
                      {item.dropdown && (
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              className="ml-4 mt-2 space-y-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block py-2 text-gray-600 hover:text-primary transition-colors duration-200"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-gray-200">
                    <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                      CONTACT US
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
