import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Star, PiggyBank, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-toys.png";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const [selectedAge, setSelectedAge] = useState("");

  const scrollToPricing = () => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container-content">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left column */}
          <div className="order-2 md:order-1">
            <ScrollReveal>
              <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
                Маст-хэв игрушки для малыша — по подписке
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы собираем наборы по возрасту каждые 3 месяца (0–24 мес): только то,
                что реально нужно ребёнку сейчас — проверено многими семьями.
              </p>
            </ScrollReveal>

            {/* Quick pick card */}
            <ScrollReveal delay={0.2}>
              <div className="bg-card card-no-hover p-5 md:p-6 mb-6">
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Возраст ребёнка
                </label>
                <Select value={selectedAge} onValueChange={setSelectedAge}>
                  <SelectTrigger className="mb-3">
                    <SelectValue placeholder="Выберите возраст" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-3">0–3 месяца</SelectItem>
                    <SelectItem value="3-6">3–6 месяцев</SelectItem>
                    <SelectItem value="6-9">6–9 месяцев</SelectItem>
                    <SelectItem value="9-12">9–12 месяцев</SelectItem>
                    <SelectItem value="12-15">12–15 месяцев</SelectItem>
                    <SelectItem value="15-18">15–18 месяцев</SelectItem>
                    <SelectItem value="18-21">18–21 месяц</SelectItem>
                    <SelectItem value="21-24">21–24 месяца</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 font-semibold" size="lg" onClick={onOpenModal}>
                    Подобрать набор
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 font-semibold"
                    size="lg"
                    onClick={scrollToPricing}
                  >
                    Смотреть тарифы
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Bullets */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-3">
                {[
                  { icon: Star, text: "Только must-have игрушки для развития в этом возрасте" },
                  { icon: PiggyBank, text: "Сэкономьте деньги и место: игрушки не копятся дома" },
                  { icon: ShieldCheck, text: "Чисто и безопасно: обработка и контроль состояния" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                      <item.icon size={16} className="text-accent-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — visual */}
          <div className="order-1 md:order-2">
            <ScrollReveal delay={0.1}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-card-cream">
                  <img
                    src={heroImage}
                    alt="Набор детских игрушек — пирамидка, кубики, погремушка"
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md">
                  <span className="text-xs font-bold text-primary">0–24 мес</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md">
                  <span className="text-xs font-semibold text-foreground">✓ Проверено семьями</span>
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md">
                  <span className="text-xs font-semibold text-primary-foreground">Каждые 3 месяца</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-secondary rounded-xl px-3 py-1.5 shadow-md">
                  <span className="text-xs font-semibold text-foreground">Подбор по возрасту</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
