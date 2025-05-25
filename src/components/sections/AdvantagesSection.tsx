import Icon from "@/components/ui/icon";
import { advantages } from "@/data/constants";

const AdvantagesSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 font-['Montserrat']">
          Почему выбирают PRO МЕБЕЛЬ
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={advantage.icon as any}
                  className="w-10 h-10 text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-slate-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
