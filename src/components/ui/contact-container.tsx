'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Home, 
  ChevronRight, 
  MessageCircle,
  Calendar,
  User,
  Building,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export default function ContactContainer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for your inquiry! We will get back to you within 24 hours.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectTypes = [
    'Residential Interior',
    'Commercial Interior', 
    'Office Design',
    'Restaurant Design',
    'Retail Space',
    'Complete Home Renovation',
    'Room Renovation',
    'Consultation Only'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 px-4 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav 
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-orange-600 transition-colors flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Contact</span>
            </div>
          </motion.nav>

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
                Let&apos;s Create
                <span className="block text-orange-600">Something Beautiful</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to transform your space into something extraordinary? 
                We&apos;re here to bring your vision to life with innovative, 
                eco-friendly interior design solutions.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-orange-100">
                  <div className="text-2xl font-bold text-orange-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-orange-100">
                  <div className="text-2xl font-bold text-orange-600 mb-1">24hr</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Methods */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center p-4 bg-orange-50 rounded-2xl border border-orange-100 hover:shadow-md transition-all cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call Us</div>
                      <div className="text-orange-600 font-medium">+91 88861 48866</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center p-4 bg-emerald-50 rounded-2xl border border-emerald-100 hover:shadow-md transition-all cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email Us</div>
                      <div className="text-emerald-600 font-medium">prakruti.salesteam@gmail.com</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center p-4 bg-amber-50 rounded-2xl border border-amber-100 hover:shadow-md transition-all cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Visit Us</div>
                      <div className="text-amber-600 font-medium">MG Road, near bandar lakulu bus stop, Vijayawada</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
              Start Your Dream Project
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out this form and we&apos;ll get back to you within 24 hours with a 
              personalized consultation for your interior design needs.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-playfair font-bold text-gray-900 flex items-center">
                  <User className="w-5 h-5 mr-2 text-orange-600" />
                  Personal Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 transition-all"
                    placeholder="prakruti.salesteam@gmail.com"
                  />
                </div>
              </div>

              {/* Right Column - Project Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-playfair font-bold text-gray-900 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-orange-600" />
                  Project Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 transition-all"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 transition-all"
                    placeholder="+91 88861 48866"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <MessageCircle className="w-4 h-4 mr-2 text-orange-600" />
                Tell us about your vision
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 transition-all resize-none"
                placeholder="Describe your project, style preferences, specific requirements, or any questions you have..."
              />
            </div>

            {/* Status Message */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}
              >
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </motion.button>
              
              <p className="text-sm text-gray-500 mt-4">
                We&apos;ll respond within 24 hours with a personalized consultation
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about working with us
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical interior design project take?",
                answer: "Project timelines vary based on scope and complexity. A single room can take 4-6 weeks, while complete home renovations typically take 3-6 months. We'll provide a detailed timeline during consultation."
              },
              {
                question: "Do you provide 3D renderings and design visualizations?",
                answer: "Yes! We create detailed 3D renderings and visualizations so you can see exactly how your space will look before any work begins. This helps ensure the final result matches your vision perfectly."
              },
              {
                question: "What makes Prakruti Interiors different from other designers?",
                answer: "We specialize in eco-friendly, sustainable design using innovative materials like fibre wood. Our approach combines modern aesthetics with spiritual wellness, creating spaces that are both beautiful and harmonious."
              },
              {
                question: "Do you handle the entire project including contractors and execution?",
                answer: "Absolutely! We manage the entire process from concept to completion, including coordinating with trusted contractors, sourcing materials, and overseeing installation to ensure quality results."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <ArrowRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who&apos;ve transformed their spaces with us.
              Your dream interior is just a conversation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+918886148866"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 88861 48866
              </Link>
              <Link
                href="#form"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
