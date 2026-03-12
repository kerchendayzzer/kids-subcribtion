import { ScrollReveal } from "@/components/ScrollReveal";

const ageCards = [
  { range: "0–3 месяца", focus: "Контраст, фокус, первые реакции", tags: "сенсорика", bg: "bg-card-cream" },
  { range: "3–6 месяцев", focus: "Хватание, перекладывание, сенсорика", tags: "моторика", bg: "bg-card-blue" },
  { range: "6–9 месяцев", focus: "Причина-следствие, звуки, сидим/ползём", tags: "моторика / сенсорика", bg: "bg-card-mint" },
  { range: "9–12 месяцев", focus: "Пинцетный захват, контейнеры, сортировка", tags: "моторика / логика", bg: "bg-card-peach" },
  { range: "12–15 месяцев", focus: "Первые сюжеты, моторика, координация", tags: "моторика / сюжет", bg: "bg-card-sand" },
  { range: "15–18 месяцев", focus: "Строим, повторяем, усложняем", tags: "логика / моторика", bg: "bg-card-blue" },
  { range: "18–21 месяц", focus: "Ролевая игра, речь, последовательности", tags: "речь / логика", bg: "bg-card-cream" },
  { range: "21–24 месяца", focus: "Логика, классификация, длинные сценарии", tags: "логика / сюжет", bg: "bg-card-mint" },
];

const AgeSelection = () => {
  return (
    <section id="age-selection" className="section-padding bg-secondary/50">
      <div className="container-content">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-3">
            Каждый возраст — свои "must-have" игрушки
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            В 3 месяца важны одни навыки, в 12 — совсем другие. Мы собираем наборы
            так, чтобы игрушки помогали развитию именно сейчас.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ageCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div className={`card-soft ${card.bg} h-full`}>
                <h3 className="font-bold text-foreground text-lg mb-2">{card.range}</h3>
                <p className="text-sm text-muted-foreground mb-3">{card.focus}</p>
                <span className="text-xs text-primary font-medium">
                  Примеры: {card.tags}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-card rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-sm text-muted-foreground">
                Мы кладём только то, что действительно "заходит" детям — наборы собраны на базе опыта многих семей.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AgeSelection;
