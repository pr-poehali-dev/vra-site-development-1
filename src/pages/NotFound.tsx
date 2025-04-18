import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-vra-lightPink flex flex-col items-center justify-center">
      <div className="container px-4 text-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="text-[150px] font-bold text-vra-purple">404</div>
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full bg-vra-purple opacity-10 filter blur-3xl"></div>
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-vra-darkBlue">Страница не найдена</h1>
          <p className="mt-4 text-lg text-vra-darkBlue/70 max-w-md">
            Похоже, что вы пытаетесь получить доступ к странице, которой не существует или была перемещена.
          </p>
          <Link to="/" className="mt-8">
            <Button className="vra-button">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}