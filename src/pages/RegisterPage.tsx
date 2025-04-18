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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen bg-vra-lightPink">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <Card className="bg-white shadow-lg border-none">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-vra-darkBlue">Регистрация</CardTitle>
              <CardDescription className="text-vra-darkBlue/70">
                Создайте аккаунт для начала обучения в VRA
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstname" className="text-vra-darkBlue">Имя</Label>
                  <Input 
                    id="firstname" 
                    placeholder="Иван"
                    className="border-vra-purple/30 focus:ring-vra-purple/50 focus:border-vra-purple" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastname" className="text-vra-darkBlue">Фамилия</Label>
                  <Input 
                    id="lastname" 
                    placeholder="Иванов"
                    className="border-vra-purple/30 focus:ring-vra-purple/50 focus:border-vra-purple" 
                  />
                </div>
              </div>
              
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
                <p className="text-xs text-vra-darkBlue/60">
                  Пароль должен содержать не менее 8 символов, включать заглавные и строчные буквы, цифры
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="userType" className="text-vra-darkBlue">Я регистрируюсь как</Label>
                <Select>
                  <SelectTrigger className="border-vra-purple/30 focus:ring-vra-purple/50 focus:border-vra-purple">
                    <SelectValue placeholder="Выберите тип пользователя" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-vra-purple/20">
                    <SelectItem value="student">Ученик/Студент</SelectItem>
                    <SelectItem value="parent">Родитель</SelectItem>
                    <SelectItem value="teacher">Преподаватель</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="border-vra-purple data-[state=checked]:bg-vra-purple data-[state=checked]:text-white" />
                <label
                  htmlFor="terms"
                  className="text-sm text-vra-darkBlue/70 leading-none"
                >
                  Я согласен с <Link to="#" className="text-vra-purple hover:underline">условиями использования</Link> и <Link to="#" className="text-vra-purple hover:underline">политикой конфиденциальности</Link>
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full vra-button">Зарегистрироваться</Button>
              <p className="mt-4 text-center text-sm text-vra-darkBlue/70">
                Уже есть аккаунт?{" "}
                <Link to="/login" className="text-vra-purple hover:underline">
                  Войти
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