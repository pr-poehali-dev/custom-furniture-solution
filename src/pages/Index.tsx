import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { processSteps, stats } from "@/data/constants";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 font-['Montserrat']">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Home" className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Кухни на заказ</CardTitle>
                <CardDescription>
                  Прямые, угловые, П- или Г-образные конфигурации
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Package" className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Корпусная мебель</CardTitle>
                <CardDescription>
                  Шкафы-купе, стеллажи, комоды, прихожие
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Layers" className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Встроенная мебель</CardTitle>
                <CardDescription>
                  В ниши, под лестницы, антресоли, гардеробные
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Armchair"
                  className="w-12 h-12 text-blue-600 mb-4"
                />
                <CardTitle>Мягкая мебель</CardTitle>
                <CardDescription>
                  Диваны, кресла, банкетки на каркасе из массива
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Building"
                  className="w-12 h-12 text-blue-600 mb-4"
                />
                <CardTitle>Офисная мебель</CardTitle>
                <CardDescription>
                  Ресепшн, витрины, островные подиумы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Droplets"
                  className="w-12 h-12 text-blue-600 mb-4"
                />
                <CardTitle>Мебель для ванной</CardTitle>
                <CardDescription>
                  Влагостойкие фасады, мебель из ПВХ
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 font-['Montserrat']">
            Почему выбирают PRO МЕБЕЛЬ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Гарантия 36 месяцев
              </h3>
              <p className="text-slate-600">
                Полная гарантия и послегарантийное обслуживание
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрые сроки</h3>
              <p className="text-slate-600">
                От эскиза до сборки за 10-14 рабочих дней
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Команда профи</h3>
              <p className="text-slate-600">
                15 специалистов, 5 штатных дизайнеров
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100+ материалов</h3>
              <p className="text-slate-600">ЛДСП, МДФ, массив, шпон, акрил</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Собственное производство
              </h3>
              <p className="text-slate-600">
                Современные станки ЧПУ, лазерная резка
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Прозрачная стоимость
              </h3>
              <p className="text-slate-600">
                Смета на каждом этапе, без скрытых наценок
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 font-['Montserrat']">
            Как мы работаем
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Консультация",
                  desc: "Звонок или заявка → бесплатная консультация",
                },
                {
                  step: 2,
                  title: "Замер",
                  desc: "Выезд замерщика + фотосъёмка + первичное ТЗ",
                },
                {
                  step: 3,
                  title: "Дизайн-проект",
                  desc: "Разработка и 3D-визуализация",
                },
                {
                  step: 4,
                  title: "Договор",
                  desc: "Согласование бюджета и подписание договора",
                },
                {
                  step: 5,
                  title: "Производство",
                  desc: "Изготовление на собственной фабрике",
                },
                {
                  step: 6,
                  title: "Монтаж",
                  desc: "Доставка + профессиональная сборка",
                },
                {
                  step: 7,
                  title: "Гарантия",
                  desc: "Приём работы и оформление гарантии",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">97%</div>
              <p>клиентов возвращаются</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p>готовых проектов</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p>оценка качества NPS</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p>лет на рынке</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 font-['Montserrat']">
            Оставьте заявку прямо сейчас
          </h2>
          <p className="text-xl mb-8">
            И завтра наши специалисты приедут к вам на замер бесплатно!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
            >
              <Icon name="Phone" className="mr-2" />
              Заказать замер
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-slate-800"
            >
              <Icon name="Calculator" className="mr-2" />
              Узнать стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
