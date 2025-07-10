'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Send, CheckCircle, User, MessageSquare, Phone, Mail, Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    projectType: '',
    testimonialText: '',
    rating: 5
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const projectTypes = [
    { value: 'Living Room Redesign', label: 'Living Room Design' },
    { value: 'Modular Kitchen', label: 'Modular Kitchen' },
    { value: 'Bedroom Interiors', label: 'Bedroom Interiors' },
    { value: 'Office Spaces', label: 'Office Spaces' },
    { value: 'Complete Home', label: 'Complete Home Solutions' },
    { value: 'Furniture & Decor', label: 'Furniture & Decor' },
    { value: 'Custom Design', label: 'Custom Design Consultation' },
    { value: 'Other', label: 'Other' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/submit-testimonial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          clientName: '',
          email: '',
          phone: '',
          projectType: '',
          testimonialText: '',
          rating: 5
        })
      } else {
        setError(result.message || 'Failed to submit testimonial')
      }
    } catch (err) {
      console.error('Error submitting testimonial:', err)
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
              Thank You for Your Feedback! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your testimonial has been submitted successfully. We truly appreciate you taking the time to share your experience with Prakruti Interiors.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What happens next?</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Review Process</h3>
                    <p className="text-gray-600 text-sm">Our team will review your testimonial and may feature it on our website to help other customers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Confirmation</h3>
                    <p className="text-gray-600 text-sm">You&apos;ll receive a confirmation email, and we may reach out for any follow-up if needed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setError('')
                }}
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
              >
                Submit Another Testimonial
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
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
            <span className="text-gray-900 font-medium">Share Your Experience</span>
          </div>
        </motion.nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Share Your Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;d love to hear about your journey with Prakruti Interiors. Your feedback helps us improve and helps other families make informed decisions about their interior design needs.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary to-accent p-8">
            <h2 className="text-2xl font-semibold text-white mb-2">Tell Us About Your Experience</h2>
            <p className="text-orange-100">Your testimonial may be featured on our website to help other customers</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                {error}
              </div>
            )}

            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your phone number (optional)"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Overall Rating *
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className={`w-10 h-10 transition-colors ${
                      star <= formData.rating
                        ? 'text-yellow-400 hover:text-yellow-500'
                        : 'text-gray-300 hover:text-gray-400'
                    }`}
                  >
                    <Star className="w-8 h-8 fill-current" />
                  </button>
                ))}
                <span className="ml-3 text-sm text-gray-600">
                  {formData.rating} out of 5 stars
                </span>
              </div>
            </div>

            {/* Testimonial Text */}
            <div>
              <label htmlFor="testimonialText" className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Your Experience *
              </label>
              <textarea
                id="testimonialText"
                name="testimonialText"
                value={formData.testimonialText}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Tell us about your experience with Prakruti Interiors. What did you like about our service? How was the quality of work? Would you recommend us to others?"
              />
              <div className="text-sm text-gray-500 mt-1">
                {formData.testimonialText.length}/500 characters
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-3" />
                    Submit Your Testimonial
                  </div>
                )}
              </button>
            </div>

            <div className="text-center text-sm text-gray-500">
              By submitting this form, you agree that your testimonial may be featured on our website and marketing materials.
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
