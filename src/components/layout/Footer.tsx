import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-vra-darkBlue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full vra-gradient-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">VR</span>
              </div>
              <span className="text-xl font-bold text-white">VRA</span>
            </Link>
            <p className="text-white/70 mb-4">
              Virtual Reality Academy — образовательное учреждение нового поколения с применением VR/AR технологий.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-vra-purple transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-vra-purple transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-vra-purple transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-vra-purple transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-vra-purple">Образование</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs#school" className="text-white/70 hover:text-vra-purple transition-colors">
                  Начальное образование
                </Link>
              </li>
              <li>
                <Link to="/programs#school" className="text-white/70 hover:text-vra-purple transition-colors">
                  Основное общее образование
                </Link>
              </li>
              <li>
                <Link to="/programs#school" className="text-white/70 hover:text-vra-purple transition-colors">
                  Среднее общее образование
                </Link>
              </li>
              <li>
                <Link to="/programs#university" className="text-white/70 hover:text-vra-purple transition-colors">
                  Высшее образование
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-vra-purple">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 hover:text-vra-purple transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white/70 hover:text-vra-purple transition-colors">
                  Программы
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white/70 hover:text-vra-purple transition-colors">
                  Вход в систему
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-white/70 hover:text-vra-purple transition-colors">
                  Регистрация
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-vra-purple">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-vra-purple mt-1" />
                <span className="text-white/70">г. Москва, Технологический проспект, 42</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-vra-purple" />
                <span className="text-white/70">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-vra-purple" />
                <span className="text-white/70">info@vracademy.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Virtual Reality Academy (VRA). Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}