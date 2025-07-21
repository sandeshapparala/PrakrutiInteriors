// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

'use client';

import { ArrowUpRight } from 'lucide-react';
import { getOptimizedImageUrl, type HomePageImages } from '@/sanity/lib/homePageImages';

interface CTASectionProps {
  homePageData?: HomePageImages | null;
}

export default function CTASection({ homePageData }: CTASectionProps) {
  // Use Sanity background image if available, otherwise fallback
  const backgroundImage = homePageData?.ctaSection?.backgroundImage 
    ? getOptimizedImageUrl(homePageData.ctaSection.backgroundImage, 1600, 800)
    : "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";

  return (
    <section className="relative w-full overflow-hidden min-h-[580px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Prakruti Interiors Eco Consultation"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-[580px]">
        <div className="text-left max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Have a Question? <br /> Start Your Eco-Stylish Consultation
          </h2>
          <p className="mt-6 text-lg text-gray-100 max-w-lg leading-relaxed">
            Our team at Prakruti Interiors is ready to bring your vision to life. Whether it's a soulful living space or a mindful workspace — let's make it happen, sustainably.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
