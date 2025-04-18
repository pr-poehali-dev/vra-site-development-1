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
    icon: <Gamepad2 className="h-10 w-10 text-vra-blue" />,
    title: 'Иммерсивное обучение',
    description: 'Погружение в виртуальную среду делает процесс обучения увлекательным и эффективным.'
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-vra-blue" />,
    title: 'От школы до вуза',
    description: 'Полный цикл образования: начальное, основное общее, среднее и высшее образование.'
  },
  {
    icon: <Brain className="h-10 w-10 text-vra-blue" />,
    title: 'Развитие когнитивных навыков',
    description: 'Технологии VR/AR способствуют лучшему запоминанию и пониманию сложного материала.'
  },
  {
    icon: <User className="h-10 w-10 text-vra-blue" />,
    title: 'Индивидуальный подход',
    description: 'Программы адаптируются под каждого учащегося, учитывая его темп и стиль обучения.'
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-vra-blue" />,
    title: 'Инновационные методики',
    description: 'Применение передовых педагогических практик в сочетании с новейшими технологиями.'
  },
  {
    icon: <Globe className="h-10 w-10 text-vra-blue" />,
    title: 'Глобальное образование',
    description: 'Виртуальные экскурсии и уроки с преподавателями со всего мира без границ.'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-vra-darkBlue">
            Преимущества обучения с VR/AR технологиями
          </h2>
          <p className="text-vra-darkBlue/70">
            В VRA мы преобразуем традиционное образование, создавая увлекательную и эффективную среду обучения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 
                         hover:shadow-lg hover:border-vra-purple/30 transition-all 
                         hover:translate-y-[-5px]"
            >
              <div className="mb-4 p-3 bg-vra-purple/10 inline-block rounded-lg">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-vra-darkBlue">{feature.title}</h3>
              <p className="text-vra-darkBlue/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}