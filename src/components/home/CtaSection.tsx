import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0 vra-gradient-4 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="vra-card max-w-5xl mx-auto text-center py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 vra-text-gradient">
            Готовы шагнуть в будущее образования?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к Virtual Reality Academy и откройте для себя новые горизонты обучения с использованием современных VR/AR технологий.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="vra-button text-lg">
                Подать заявку
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-vra-purple text-vra-purple hover:bg-vra-purple hover:text-white text-lg">
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}