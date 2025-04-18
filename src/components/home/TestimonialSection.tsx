import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "VRA полностью изменила представление моего сына об обучении. Теперь он с нетерпением ждет уроков и показывает отличные результаты.",
    name: "Мария Иванова",
    role: "Родитель ученика 4 класса",
    avatar: "/placeholder.svg"
  },
  {
    quote: "Методики VRA помогли мне лучше понимать сложные концепции физики и химии. Виртуальные эксперименты делают науку увлекательной.",
    name: "Александр Петров",
    role: "Студент VRA, 10 класс",
    avatar: "/placeholder.svg"
  },
  {
    quote: "Как преподаватель с 20-летним стажем, я восхищена тем, как VR технологии помогают детям быстрее усваивать материал и развивать пространственное мышление.",
    name: "Елена Сергеевна",
    role: "Преподаватель математики",
    avatar: "/placeholder.svg"
  },
  {
    quote: "Получение высшего образования в VRA дало мне практические навыки, которые сразу востребованы на рынке труда. VR-тренажеры создают реальный опыт.",
    name: "Дмитрий Козлов",
    role: "Выпускник факультета VR-инженерии",
    avatar: "/placeholder.svg"
  },
  {
    quote: "Моя дочь поступила в VRA после обычной школы. Разница в подходе колоссальная — инновационные методы обучения действительно работают.",
    name: "Анна Соколова",
    role: "Родитель студентки VRA",
    avatar: "/placeholder.svg"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-vra-darkBlue">
            Отзывы о VRA
          </h2>
          <p className="text-vra-darkBlue/70">
            Что говорят студенты, родители и преподаватели о нашем уникальном подходе к образованию
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="bg-white shadow-md border border-gray-100 h-full">
                  <CardContent className="flex flex-col h-full p-6">
                    <blockquote className="text-vra-darkBlue/80 italic mb-6 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center mt-4">
                      <Avatar className="h-10 w-10 border-2 border-vra-purple">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-vra-blue text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <div className="font-medium text-vra-darkBlue">{testimonial.name}</div>
                        <div className="text-vra-darkBlue/60 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static translate-y-0 border-vra-purple text-vra-purple hover:bg-vra-purple hover:text-white" />
            <CarouselNext className="static translate-y-0 border-vra-purple text-vra-purple hover:bg-vra-purple hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}