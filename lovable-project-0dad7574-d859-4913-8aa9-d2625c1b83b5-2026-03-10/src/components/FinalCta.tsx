import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

interface FinalCtaProps {
  onOpenModal: () => void;
}

const FinalCta = ({ onOpenModal }: FinalCtaProps) => {
  const scrollToPricing = () => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div className="container-content">
        <ScrollReveal>
          <div
            className="rounded-3xl p-8 md:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, hsl(152 30% 95%), hsl(40 30% 96%))",
            }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Пусть дома будут только актуальные игрушки — без лишних покупок
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Выберите тариф, укажите возраст — и получите набор маст-хэв игрушек,
              которые любят дети и ценят родители.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="font-semibold" onClick={onOpenModal}>
                Подобрать набор по возрасту
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold"
                onClick={scrollToPricing}
              >
                Выбрать тариф
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-5">
              Подписка от 1 месяца • Скидки –5%/–10% при оплате на 3/12 месяцев
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCta;
