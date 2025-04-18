import { 
  Gamepad2, 
  GraduationCap, 
  Brain, 
  User, 
  Lightbulb, 
  Globe 
} from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="h-10 w-10 vra-gradient-1" />,
    title: 'Иммерсивное обучение',
    description: 'Погружение в виртуальную среду делает процесс обучения увлекательным и эффективным.'
  },
  {
    icon: <GraduationCap className="h-10 w-10 vra-gradient-1" />,
    title: 'От школы до вуза',
    description: 'Полный цикл образования: начальное, основное общее, среднее и высшее образование.'
  },
  {
    icon: <Brain className="h-10 w-10 vra-gradient-1" />,
    title: 'Развитие когнитивных навыков',
    description: 'Технологии VR/AR способствуют лучшему запоминанию и пониманию сложного материала.'
  },
  {
    icon: <User className="h-10 w-10 vra-gradient-1" />,
    title: 'Индивидуальный подход',
    description: 'Программы адаптируются под каждого учащегося, учитывая его темп и стиль обучения.'
  },
  {
    icon: <Lightbulb className="h-10 w-10 vra-gradient-1" />,
    title: 'Инновационные методики',
    description: 'Применение передовых педагогических практик в сочетании с новейшими технологиями.'
  },
  {
    icon: <Globe className="h-10 w-10 vra-gradient-1" />,
    title: 'Глобальное образование',
    description: 'Виртуальные экскурсии и уроки с преподавателями со всего мира без границ.'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-vra-darkBlue/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 vra-text-gradient">
            Преимущества обучения с VR/AR технологиями
          </h2>
          <p className="text-white/70">
            В VRA мы преобразуем традиционное образование, создавая увлекательную и эффективную среду обучения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="vra-card hover:translate-y-[-5px]">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-vra-purple">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}