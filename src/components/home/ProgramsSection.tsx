import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const educationLevels = [
  {
    title: 'Начальное образование',
    description: 'Игровой формат обучения с использованием VR технологий для развития основных навыков и творческого мышления.',
    age: '6-10 лет',
    classes: '1-4 классы',
    image: '/placeholder.svg',
    color: 'from-vra-pink to-vra-purple'
  },
  {
    title: 'Основное общее образование',
    description: 'Интерактивные VR-уроки по всем предметам школьной программы с углубленным изучением выбранных направлений.',
    age: '11-15 лет',
    classes: '5-9 классы',
    image: '/placeholder.svg',
    color: 'from-vra-purple to-vra-blue'
  },
  {
    title: 'Высшее образование',
    description: 'Профессиональное образование с использованием передовых VR симуляций и практик от ведущих специалистов.',
    age: '17+ лет',
    subjects: 'IT, Дизайн, Инженерия, Медицина и др.',
    image: '/placeholder.svg',
    color: 'from-vra-blue to-vra-darkBlue'
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 vra-text-gradient">
            Образовательные программы
          </h2>
          <p className="text-white/70">
            VRA предлагает полный цикл образования — от начальной школы до университета.
            Все программы основаны на государственных стандартах и дополнены инновационными методиками.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationLevels.map((level, index) => (
            <div key={index} className="vra-card overflow-hidden group">
              <div className={`h-48 mb-6 rounded-lg overflow-hidden relative`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${level.color} opacity-50`}></div>
                <img 
                  src={level.image} 
                  alt={level.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-vra-purple">{level.title}</h3>
              <p className="text-white/70 mb-4">{level.description}</p>
              
              <div className="mb-6 space-y-2">
                {level.age && (
                  <div className="text-sm text-white/60">
                    <span className="font-medium text-vra-purple">Возраст:</span> {level.age}
                  </div>
                )}
                {level.classes && (
                  <div className="text-sm text-white/60">
                    <span className="font-medium text-vra-purple">Классы:</span> {level.classes}
                  </div>
                )}
                {level.subjects && (
                  <div className="text-sm text-white/60">
                    <span className="font-medium text-vra-purple">Направления:</span> {level.subjects}
                  </div>
                )}
              </div>
              
              <Link to="/programs">
                <Button variant="outline" className="w-full border-vra-purple/50 text-vra-purple hover:bg-vra-purple hover:text-white">
                  Подробнее
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/programs">
            <Button className="vra-button">Все образовательные программы</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}