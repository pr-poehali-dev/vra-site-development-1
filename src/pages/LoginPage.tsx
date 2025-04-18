import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  
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
      
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-md mx-auto">
          <Card className="vra-glass border-vra-purple/20">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold vra-text-gradient">Вход в систему</CardTitle>
              <CardDescription className="text-white/70">
                Введите ваши учетные данные для доступа
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Электронная почта</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com"
                  className="vra-input" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Пароль</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="vra-input pr-10" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-vra-purple/60 hover:text-vra-purple"
                  >
                    {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                </div>
                <div className="text-right">
                  <Link to="#" className="text-sm text-vra-purple hover:underline">
                    Забыли пароль?
                  </Link>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full vra-button">Войти</Button>
              <p className="mt-4 text-center text-sm text-white/70">
                Еще нет аккаунта?{" "}
                <Link to="/register" className="text-vra-purple hover:underline">
                  Зарегистрироваться
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}