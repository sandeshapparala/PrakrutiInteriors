import HeroSection from '@/components/ui/hero-section';
import WhoWeAreSection from '@/components/ui/who-we-are-section';
import ServicesSection from '@/components/ui/services-section';
import InteriorExpertiseSection from '@/components/ui/interior-expertise-section';
import ProjectsSection from '@/components/ui/projects-section';
import TestimonialsSection from '@/components/ui/testimonials-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Interior Expertise Section */}
      <InteriorExpertiseSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />




    </div>
  );
}
 