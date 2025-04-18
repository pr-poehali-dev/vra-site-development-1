import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
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
          <header className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="vra-text-gradient">О Virtual Reality Academy</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Инновационное образовательное учреждение, где традиционные учебники заменены передовыми VR/AR технологиями.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-vra-purple">Наша миссия</h2>
              <p className="text-white/80 mb-4">
                Virtual Reality Academy (VRA) была основана с целью революционизировать процесс обучения, сделав его более интуитивным, увлекательным и эффективным с помощью технологий виртуальной и дополненной реальности.
              </p>
              <p className="text-white/80 mb-4">
                Мы считаем, что образование должно идти в ногу с технологическим прогрессом, а учебный процесс должен быть адаптирован к потребностям современных учащихся. Вместо статичных учебников мы предлагаем динамичную образовательную среду, которая вовлекает все органы чувств и способствует лучшему пониманию и запоминанию материала.
              </p>
              <p className="text-white/80">
                VRA объединяет в себе все ступени образования – от начальной школы до высшего образования, обеспечивая непрерывный и последовательный образовательный путь.
              </p>
            </div>
            <div className="relative">
              <div className="w-full aspect-video rounded-xl overflow-hidden relative vra-gradient-3 p-1">
                <div className="absolute inset-0 opacity-50 vra-gradient-2"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="О Virtual Reality Academy" 
                  className="w-full h-full object-cover rounded-lg relative z-10"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-vra-purple">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="vra-card">
                <h3 className="text-xl font-semibold mb-4 text-vra-blue">Инновации</h3>
                <p className="text-white/80">
                  Мы постоянно исследуем и внедряем новейшие технологии и методики обучения, чтобы предоставить нашим студентам самое передовое образование.
                </p>
              </div>
              <div className="vra-card">
                <h3 className="text-xl font-semibold mb-4 text-vra-blue">Персонализация</h3>
                <p className="text-white/80">
                  Мы разрабатываем адаптивные учебные программы, которые подстраиваются под индивидуальные потребности и способности каждого учащегося.
                </p>
              </div>
              <div className="vra-card">
                <h3 className="text-xl font-semibold mb-4 text-vra-blue">Практичность</h3>
                <p className="text-white/80">
                  Наши программы ориентированы на приобретение практических навыков и знаний, которые будут востребованы в реальном мире.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-vra-purple">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="vra-card text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 vra-gradient-1 p-1">
                    <img 
                      src="/placeholder.svg" 
                      alt={`Член команды ${i}`} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-vra-blue">Иван Петров</h3>
                  <p className="text-vra-purple mb-4">Директор по инновациям</p>
                  <p className="text-white/80">
                    Имеет 15-летний опыт в образовательных технологиях и разработке VR/AR приложений для обучения.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-10 text-center text-vra-purple">Наши партнеры</h2>
            <div className="flex flex-wrap justify-center gap-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-48 h-24 vra-glass rounded-lg flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Логотип партнера ${i}`} 
                    className="max-w-[80%] max-h-[60%] opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}