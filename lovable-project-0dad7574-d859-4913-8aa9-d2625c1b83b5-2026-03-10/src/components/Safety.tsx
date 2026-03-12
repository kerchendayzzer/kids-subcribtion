import { ScrollReveal } from "@/components/ScrollReveal";
import { Sparkles, ShieldCheck, Baby, Puzzle, FileText, ThumbsUp } from "lucide-react";

const items = [
  { icon: Sparkles, text: "Гигиеническая обработка после каждого возврата", bg: "bg-card-cream" },
  { icon: ShieldCheck, text: "Проверка состояния: ничего сломанного/опасного", bg: "bg-card-blue" },
  { icon: Baby, text: 'Возрастная уместность: без "слишком рано" и "уже скучно"', bg: "bg-card-mint" },
  { icon: Puzzle, text: "Комплектность: все детали на месте", bg: "bg-card-peach" },
  { icon: FileText, text: "Понятные правила на случай потери/поломки", bg: "bg-card-sand" },
  { icon: ThumbsUp, text: "Только то, что работает: игрушки-хиты, проверенные семьями", bg: "bg-card-cream" },
];

const Safety = () => {
  return (
    <section id="safety" className="section-padding bg-secondary/50">
      <div className="container-content">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-3">
            Чисто, безопасно, без сюрпризов
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Мы понимаем главный вопрос родителей: "а точно ли это безопасно?"
            Поэтому у нас понятные правила по чистоте и состоянию игрушек.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className={`card-soft ${item.bg} h-full flex items-start gap-4`}>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <p className="text-sm text-foreground font-medium leading-relaxed">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Safety;
