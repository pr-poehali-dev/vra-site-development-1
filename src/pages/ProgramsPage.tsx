import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { GraduationCap, Book, User, Clock, Calendar, ChevronDown } from 'lucide-react';

const schoolPrograms = [
  {
    title: "Начальное образование (1-4 классы)",
    description: "Программа для младших школьников с интерактивным VR-обучением основным предметам через игровые механики и виртуальные экскурсии.",
    subjects: ["Математика", "Русский язык", "Окружающий мир", "Английский язык", "Творческое развитие"],
    features: ["Игровое обучение", "Виртуальные экскурсии", "Развитие логики"],
    duration: "4 года",
    age: "6-10 лет",
    image: "/placeholder.svg"
  },
  {
    title: "Основное общее образование (5-9 классы)",
    description: "Углубленное изучение школьных предметов с использованием VR-лабораторий, интерактивных моделей и виртуальных экспериментов.",
    subjects: ["Математика", "Физика", "Химия", "Биология", "История", "Литература", "Иностранные языки"],
    features: ["VR-лаборатории", "Исторические реконструкции", "Виртуальные эксперименты"],
    duration: "5 лет",
    age: "11-15 лет",
    image: "/placeholder.svg"
  },
  {
    title: "Среднее общее образование (10-11 классы)",
    description: "Программа подготовки к поступлению в вуз с профильным обучением и погружением в выбранную специализацию через VR-симуляции реальных процессов.",
    subjects: ["Профильная математика", "Профильная физика", "Информатика", "Иностранные языки", "Профориентация"],
    features: ["Профильное обучение", "Подготовка к ЕГЭ", "Профессиональные симуляции"],
    duration: "2 года",
    age: "16-17 лет",
    image: "/placeholder.svg"
  }
];

const universityPrograms = [
  {
    title: "Бакалавриат VR/AR разработки",
    description: "Программа подготовки специалистов по созданию приложений виртуальной и дополненной реальности для образования, медицины, промышленности и развлечений.",
    subjects: ["Программирование для VR", "3D-моделирование", "Game-дизайн", "UX/UI для иммерсивных сред", "Проектирование VR-приложений"],
    features: ["Реальные проекты", "Стажировки в IT-компаниях", "Собственные разработки"],
    duration: "4 года",
    degree: "Бакалавр технических наук",
    image: "/placeholder.svg"
  },
  {
    title: "Инженерия виртуальных пространств",
    description: "Подготовка инженеров, создающих сложные виртуальные пространства для промышленных, научных и образовательных целей.",
    subjects: ["Системная архитектура VR", "Физические симуляции", "Интеграция IoT и VR", "Облачные решения для VR"],
    features: ["Лаборатория прототипирования", "Симуляторы для промышленности", "Международные стажировки"],
    duration: "4 года",
    degree: "Бакалавр инженерии",
    image: "/placeholder.svg"
  },
  {
    title: "Медицинская визуализация и симуляции",
    description: "Программа на стыке медицины и VR-технологий для создания медицинских тренажеров, систем визуализации анатомии и хирургических симуляторов.",
    subjects: ["Анатомия и физиология", "Медицинская визуализация", "Разработка хирургических симуляторов", "Биомеханика в VR"],
    features: ["Сотрудничество с медицинскими центрами", "Разработка медицинских тренажеров", "Исследовательские проекты"],
    duration: "5 лет",
    degree: "Специалист по медицинской визуализации",
    image: "/placeholder.svg"
  }
];

export default function ProgramsPage() {
  const [expandedSchool, setExpandedSchool] = useState<number | null>(null);
  const [expandedUniversity, setExpandedUniversity] = useState<number | null>(null);

  const toggleSchoolExpand = (index: number) => {
    setExpandedSchool(expandedSchool === index ? null : index);
  };

  const toggleUniversityExpand = (index: number) => {
    setExpandedUniversity(expandedUniversity === index ? null : index);
  };
  
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
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="vra-text-gradient">Образовательные программы</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              В VRA вы можете получить полный цикл образования — от начальной школы до высшего учебного заведения
            </p>
          </header>

          <Tabs defaultValue="school" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
              <TabsTrigger 
                value="school" 
                className="data-[state=active]:vra-gradient-2 data-[state=active]:text-white text-vra-purple"
              >
                <Book className="mr-2 h-4 w-4" />
                Школа
              </TabsTrigger>
              <TabsTrigger 
                value="university" 
                className="data-[state=active]:vra-gradient-2 data-[state=active]:text-white text-vra-purple"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Высшее образование
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="school" id="school">
              <div className="space-y-8">
                {schoolPrograms.map((program, index) => (
                  <div 
                    key={index}
                    className="vra-card overflow-hidden transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={program.image} 
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold mb-3 text-vra-purple">{program.title}</h3>
                        <p className="text-white/80 mb-4">{program.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                          <div className="flex items-center text-white/70 text-sm">
                            <Clock size={16} className="mr-2 text-vra-blue" />
                            Длительность: {program.duration}
                          </div>
                          <div className="flex items-center text-white/70 text-sm">
                            <User size={16} className="mr-2 text-vra-blue" />
                            Возраст: {program.age}
                          </div>
                          <div className="flex items-center text-white/70 text-sm">
                            <Calendar size={16} className="mr-2 text-vra-blue" />
                            Набор: ежегодно
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className="border-vra-purple/50 text-vra-purple hover:bg-vra-purple hover:text-white"
                          onClick={() => toggleSchoolExpand(index)}
                        >
                          {expandedSchool === index ? 'Свернуть' : 'Подробнее'}
                          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${expandedSchool === index ? 'rotate-180' : ''}`} />
                        </Button>
                      </div>
                    </div>
                    
                    {expandedSchool === index && (
                      <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-medium mb-3 text-vra-blue">Предметы</h4>
                          <ul className="space-y-1">
                            {program.subjects.map((subject, idx) => (
                              <li key={idx} className="text-white/70 flex items-center">
                                <span className="w-2 h-2 rounded-full bg-vra-purple mr-2"></span>
                                {subject}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-3 text-vra-blue">Особенности программы</h4>
                          <ul className="space-y-1">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="text-white/70 flex items-center">
                                <span className="w-2 h-2 rounded-full bg-vra-purple mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="university" id="university">
              <div className="space-y-8">
                {universityPrograms.map((program, index) => (
                  <div 
                    key={index}
                    className="vra-card overflow-hidden transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={program.image} 
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold mb-3 text-vra-purple">{program.title}</h3>
                        <p className="text-white/80 mb-4">{program.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                          <div className="flex items-center text-white/70 text-sm">
                            <Clock size={16} className="mr-2 text-vra-blue" />
                            Длительность: {program.duration}
                          </div>
                          <div className="flex items-center text-white/70 text-sm">
                            <GraduationCap size={16} className="mr-2 text-vra-blue" />
                            Степень: {program.degree}
                          </div>
                          <div className="flex items-center text-white/70 text-sm">
                            <Calendar size={16} className="mr-2 text-vra-blue" />
                            Набор: ежегодно
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className="border-vra-purple/50 text-vra-purple hover:bg-vra-purple hover:text-white"
                          onClick={() => toggleUniversityExpand(index)}
                        >
                          {expandedUniversity === index ? 'Свернуть' : 'Подробнее'}
                          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${expandedUniversity === index ? 'rotate-180' : ''}`} />
                        </Button>
                      </div>
                    </div>
                    
                    {expandedUniversity === index && (
                      <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-medium mb-3 text-vra-blue">Основные дисциплины</h4>
                          <ul className="space-y-1">
                            {program.subjects.map((subject, idx) => (
                              <li key={idx} className="text-white/70 flex items-center">
                                <span className="w-2 h-2 rounded-full bg-vra-purple mr-2"></span>
                                {subject}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-3 text-vra-blue">Особенности программы</h4>
                          <ul className="space-y-1">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="text-white/70 flex items-center">
                                <span className="w-2 h-2 rounded-full bg-vra-purple mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}