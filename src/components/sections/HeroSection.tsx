import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-slate-800 mb-6 font-['Montserrat']">
          PRO МЕБЕЛЬ
        </h1>
        <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto font-['Open_Sans']">
          Комплексное решение «под ключ»: от консультации до монтажа
        </p>
        <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
          Делаем вашу мебель точно под стиль, комфорт и бюджет
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            <Icon name="Phone" className="mr-2" />
            Заказать замер
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg border-blue-600 text-blue-600"
          >
            <Icon name="Eye" className="mr-2" />
            Получить 3D-проект
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
