import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-vra-lightPink pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-vra-blue/10 text-vra-blue text-sm font-medium">
              Будущее образования уже здесь
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-vra-darkBlue">
              <span className="block">Virtual Reality</span>
              <span className="block mt-2">Academy</span>
            </h1>
            <p className="text-lg md:text-xl text-vra-darkBlue/80 mb-8">
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
                <Button variant="outline" className="border-vra-purple text-vra-purple hover:text-white hover:bg-vra-purple">
                  Узнать о программах
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full vra-gradient-2 opacity-20 animate-pulse-glow"></div>
              <div className="absolute inset-4 rounded-full bg-white opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 relative">
                  <img 
                    src="/placeholder.svg" 
                    alt="Студент в VR-гарнитуре" 
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-vra-purple/20 to-vra-blue/20 rounded-2xl"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-vra-pink opacity-60 animate-float"></div>
            <div className="absolute bottom-10 -left-10 w-16 h-16 rounded-full bg-vra-blue opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}