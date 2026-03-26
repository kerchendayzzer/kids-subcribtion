import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check } from "lucide-react";

interface PricingProps {
  onOpenModal: () => void;
}

const durations = [
  { label: "1 месяц", discount: 0 },
  { label: "3 месяца", discount: 5, badge: "–5%" },
  { label: "12 месяцев", discount: 10, badge: "–10%" },
];

const plans = [
  {
    name: "Старт",
    price: 1490,
    toys: "5 игрушек",
    subtitle: "Самое нужное для возраста",
    features: ["5 must-have игрушек", "Подбор по возрасту", "Обновление набора"],
    recommended: false,
    bg: "bg-card",
  },
  {
    name: "Оптимум",
    price: 2490,
    toys: "10 игрушек",
    subtitle: "Разнообразие без перегруза",
    features: ["10 must-have игрушек", "Баланс: моторика + сенсорика + логика", "Обновление и замены"],
    recommended: true,
    bg: "bg-card",
  },
  {
    name: "Максимум",
    price: 4490,
    toys: "25 игрушек",
    subtitle: 'Для двух детей или "полный парк"',
    features: ["25 игрушек (много сценариев)", "Покрытие всех зон развития", "Частые обновления без скуки"],
    recommended: false,
    bg: "bg-card",
  },
];

const Pricing = ({ onOpenModal }: PricingProps) => {
  const [activeDuration, setActiveDuration] = useState(0);

  return (
    <section id="pricing" className="section-padding">
      <div className="container-content">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-3">
            Выберите размер набора — остальное сделаем мы
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Каждый тариф включает подбор по возрасту, контроль состояния и
            возможность обновления. Чем дольше подписка — тем выгоднее.
          </p>
        </ScrollReveal>

        {/* Duration toggle */}
        <ScrollReveal delay={0.15}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-secondary rounded-xl p-1 gap-1">
              {durations.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDuration(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeDuration === i
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {d.label} {d.badge && <span className="ml-1 text-xs">{d.badge}</span>}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`card-soft ${plan.bg} h-full flex flex-col relative ${
                  plan.recommended ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Рекомендуем
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <span className="inline-block mt-1 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.toys}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{plan.subtitle}</p>
                <p className="text-2xl font-extrabold text-foreground mb-4">
                  {Math.round(plan.price * (1 - durations[activeDuration].discount / 100))} ₽<span className="text-sm font-normal text-muted-foreground">/мес</span>
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full font-semibold"
                  size="lg"
                  variant={plan.recommended ? "default" : "outline"}
                  onClick={onOpenModal}
                >
                  Начать подписку
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Оплатите сразу на 3 месяца и получите –5%, на 12 месяцев — –10%.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
