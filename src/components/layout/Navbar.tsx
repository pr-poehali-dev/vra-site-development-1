import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <Link
    to={href}
    className={cn(
      "px-4 py-2 text-sm font-medium rounded-md transition-colors",
      isActive
        ? "bg-vra-blue text-white"
        : "text-vra-darkBlue hover:text-vra-purple hover:bg-white/30"
    )}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/60 backdrop-blur-lg shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full vra-gradient-2 flex items-center justify-center">
            <span className="text-white font-bold text-xl">VR</span>
          </div>
          <span className="text-xl font-bold text-vra-darkBlue">VRA</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="/" isActive={location.pathname === '/'}>
            Главная
          </NavLink>
          <NavLink href="/about" isActive={location.pathname === '/about'}>
            О нас
          </NavLink>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 text-sm font-medium rounded-md transition-colors text-vra-darkBlue hover:text-vra-purple hover:bg-white/30 flex items-center">
              Программы <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/90 backdrop-blur-md border-vra-purple/20">
              <DropdownMenuItem>
                <Link to="/programs#school" className="w-full hover:text-vra-purple">Школьное образование</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/programs#university" className="w-full hover:text-vra-purple">Высшее образование</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <NavLink href="/programs" isActive={location.pathname === '/programs'}>
            Программы
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="border-vra-purple text-vra-purple hover:text-white hover:bg-vra-purple">
              Вход
            </Button>
          </Link>
          <Link to="/register">
            <Button className="vra-button">Регистрация</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-vra-darkBlue rounded-md hover:text-vra-purple"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg absolute top-full left-0 right-0 p-4 border-t border-vra-purple/10 shadow-md z-50">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="px-4 py-2 text-vra-darkBlue hover:text-vra-purple rounded-md hover:bg-white/50"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-vra-darkBlue hover:text-vra-purple rounded-md hover:bg-white/50"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/programs"
              className="px-4 py-2 text-vra-darkBlue hover:text-vra-purple rounded-md hover:bg-white/50"
              onClick={() => setIsOpen(false)}
            >
              Программы
            </Link>
            
            <div className="flex items-center justify-center gap-4 mt-2 pt-2 border-t border-vra-purple/10">
              <Link
                to="/login"
                className="py-2 px-4 text-vra-purple border border-vra-purple/30 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Вход
              </Link>
              <Link
                to="/register"
                className="py-2 px-4 bg-vra-purple text-white rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Регистрация
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}