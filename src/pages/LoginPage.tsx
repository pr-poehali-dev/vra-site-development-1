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
    <div className="min-h-screen bg-vra-lightPink">
      <Navbar />
      
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-md mx-auto">
          <Card className="bg-white shadow-lg border-none">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-vra-darkBlue">Вход в систему</CardTitle>
              <CardDescription className="text-vra-darkBlue/70">
                Введите ваши учетные данные для доступа
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-vra-darkBlue">Электронная почта</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com"
                  className="border-vra-purple/30 focus:ring-vra-purple/50 focus:border-vra-purple" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-vra-darkBlue">Пароль</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="border-vra-purple/30 focus:ring-vra-purple/50 focus:border-vra-purple pr-10" 
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
              <p className="mt-4 text-center text-sm text-vra-darkBlue/70">
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