import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center">
      {/* Background gradient */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-vra-darkestBlue via-vra-darkBlue to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#977DFF,_transparent_40%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_#0033FF,_transparent_40%)]"></div>
        </div>
      </div>

      <div className="container px-4 text-center z-10">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="text-[150px] font-bold vra-text-gradient">404</div>
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full vra-gradient-3 opacity-20 filter blur-3xl"></div>
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight">Страница не найдена</h1>
          <p className="mt-4 text-lg text-white/70 max-w-md">
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