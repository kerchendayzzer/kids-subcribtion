import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenModal: () => void;
}

const navItems = [
  { label: "Как работает", href: "#how-it-works" },
  { label: "По возрасту", href: "#age-selection" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Безопасность", href: "#safety" },
  { label: "FAQ", href: "#faq" },
];

const Header = ({ onOpenModal }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-content flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold text-foreground tracking-tight">
          Toy Subscription
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button size="sm" className="font-semibold" onClick={onOpenModal}>
            Выбрать тариф
          </Button>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border">
          <nav className="container-content py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Button className="w-full font-semibold mt-2" onClick={() => { setMobileOpen(false); onOpenModal(); }}>
              Выбрать тариф
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
