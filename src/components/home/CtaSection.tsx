import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-vra-blue to-vra-purple opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Готовы шагнуть в будущее образования?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к Virtual Reality Academy и откройте для себя новые горизонты обучения с использованием современных VR/AR технологий.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-vra-purple hover:bg-white/90 text-lg">
                Подать заявку
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white text-lg">
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
    </section>
  );
}