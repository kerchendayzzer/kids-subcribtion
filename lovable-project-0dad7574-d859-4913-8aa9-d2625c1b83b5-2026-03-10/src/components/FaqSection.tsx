import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Что если ребёнку не понравится игрушка?",
    a: "Можно заменить — мы подберём альтернативу по той же цели развития.",
  },
  {
    q: "Как вы выбираете игрушки?",
    a: 'По возрасту (шаг 3 месяца) и по принципу "must-have": то, что реально используется и помогает навыкам.',
  },
  {
    q: "Можно ли менять набор чаще, чем раз в месяц?",
    a: "Да, опционально — зависит от тарифа и условий.",
  },
  {
    q: "Подписка на 1 месяц — это минимум?",
    a: "Да, базово подписка оформляется на месяц.",
  },
  {
    q: "Как работают скидки на 3 и 12 месяцев?",
    a: "При оплате сразу: –5% за 3 месяца и –10% за 12 месяцев.",
  },
  {
    q: "Что с доставкой и возвратом?",
    a: "Привозим и забираем. Зону и сроки доставки укажем на старте.",
  },
  {
    q: "А если игрушка сломалась или потерялась?",
    a: 'Есть понятные правила — без стресса и "штрафов из воздуха".',
  },
  {
    q: "Можно ли поставить подписку на паузу/отменить?",
    a: "Да, в любой момент по правилам тарифа.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-content max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-10">
            Частые вопросы
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card card-no-hover border-none px-5"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;
