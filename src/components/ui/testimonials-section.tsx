'use client';

import { TestimonialsWithMarquee } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Priya Sharma",
      handle: "Residential Client",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    text: "Prakruti Interiors transformed our home into a sanctuary. Their attention to sustainable materials and spiritual design created the perfect balance of luxury and mindfulness we were seeking."
  },
  {
    author: {
      name: "Rajesh Kumar",
      handle: "CEO, TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The biophilic office design revolutionized our workplace culture. Productivity increased by 30% and employee satisfaction soared. Prakruti truly understands the connection between environment and wellbeing."
  },
  {
    author: {
      name: "Dr. Vikram Patel",
      handle: "Wellness Center Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The zen-inspired design of our wellness center creates an immediate sense of calm for our clients. Every element promotes healing and tranquility."
  },
  {
    author: {
      name: "Anita Desai",
      handle: "Boutique Owner",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Their heritage restoration expertise brought new life to our 100-year-old property while preserving its cultural essence. The result is breathtaking!"
  },
  {
    author: {
      name: "Meera Reddy",
      handle: "Resort Owner",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Our mountain retreat has become a destination in itself. Guests specifically mention the harmonious design that connects them with nature. Bookings increased 40%!"
  },
  {
    author: {
      name: "Arjun Singh",
      handle: "Private Client",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The smart home integration with sustainable design is incredible. Our penthouse is not just beautiful, it's intelligently designed for modern living."
  }
]

export default function TestimonialsSection() {
  return (
    <TestimonialsWithMarquee
      title="Loved by Clients Across India"
      description="Join hundreds of satisfied clients who have transformed their spaces with our sustainable and spiritual interior design approach"
      testimonials={testimonials}
      className="bg-gradient-to-b from-background to-muted/20"
    />
  )
}
                              