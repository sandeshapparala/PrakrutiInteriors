import HeroSection from '@/components/ui/hero-section';
import WhoWeAreSection from '@/components/ui/who-we-are-section';
import ServicesSection from '@/components/ui/services-section';
import InteriorExpertiseSection from '@/components/ui/interior-expertise-section';
import ProjectsSection from '@/components/ui/projects-section';
import TestimonialsSection from '@/components/ui/testimonials-section';
import CTASection from '@/components/ui/cta-section';
import Footer from '@/components/ui/footer';
import { getFeaturedProjects } from '@/sanity/lib/projects';
import { getHomePageImages } from '@/sanity/lib/homePageImages';

export default async function Home() {
  // Fetch both featured projects and homepage images
  const [featuredProjects, homePageData] = await Promise.all([
    getFeaturedProjects(),
    getHomePageImages()
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Now with Sanity images */}
      <HeroSection homePageData={homePageData} />

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* Services Section - Now with Sanity images */}
      <ServicesSection homePageData={homePageData} />

      {/* Interior Expertise Section - Now with Sanity images */}
      <InteriorExpertiseSection homePageData={homePageData} />

      {/* Projects Section */}
      <ProjectsSection projects={featuredProjects} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section - Now with Sanity images */}
      <CTASection homePageData={homePageData} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
 