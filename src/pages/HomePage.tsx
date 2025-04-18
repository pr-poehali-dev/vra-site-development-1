import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CtaSection from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background gradient */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-vra-darkestBlue via-vra-darkBlue to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#977DFF,_transparent_40%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_#0033FF,_transparent_40%)]"></div>
        </div>
      </div>

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