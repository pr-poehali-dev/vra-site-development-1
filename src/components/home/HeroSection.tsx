import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-vra-purple/20 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-vra-blue/20 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-vra-pink/20 filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full vra-glass text-vra-purple text-sm font-medium">
              Будущее образования уже здесь
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block vra-text-gradient">Virtual Reality</span>
              <span className="block mt-2">Academy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Первое в России образовательное учреждение, использующее в своем обучении исключительно VR/AR технологии вместо традиционных учебников.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button className="vra-button">
                  Начать обучение
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" className="border-vra-purple text-vra-purple hover:text-white hover:bg-vra-purple hover:border-vra-purple">
                  Узнать о программах
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="w-full h-full rounded-full vra-gradient-3 opacity-20 animate-pulse-glow absolute"></div>
              <div className="absolute inset-4 rounded-full vra-gradient-2 opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 relative">
                  <img 
                    src="/placeholder.svg" 
                    alt="Студент в VR-гарнитуре" 
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-vra-purple/20 to-vra-blue/20 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}