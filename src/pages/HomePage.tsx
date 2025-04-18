import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CtaSection from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProgramsSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
}