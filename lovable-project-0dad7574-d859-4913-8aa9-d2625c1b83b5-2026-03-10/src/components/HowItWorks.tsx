import { ScrollReveal } from "@/components/ScrollReveal";
import { ListChecks, Package, Truck, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: ListChecks,
    title: "Вы выбираете тариф",
    text: "5, 10 или 25 игрушек",
    bg: "bg-card-cream",
  },
  {
    icon: Package,
    title: "Мы подбираем набор по возрасту",
    text: "Интервалы по 3 месяца",
    bg: "bg-card-blue",
  },
  {
    icon: Truck,
    title: "Доставляем набор домой",
    text: "Всё готово к игре",
    bg: "bg-card-mint",
  },
  {
    icon: RefreshCw,
    title: "Обновляете",
    text: "Через месяц меняете набор, а раз в 3 месяца — следующий возраст",
    bg: "bg-card-peach",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-content">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-3">
            Игрушки приходят вовремя — вы просто играете
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Подписка устроена так, чтобы у ребёнка всегда были актуальные по
            возрасту игрушки без лишних покупок.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`card-soft ${step.bg} h-full`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {i + 1}
                  </div>
                  <step.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Никакой лишней суеты — подбор мы берём на себя.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
