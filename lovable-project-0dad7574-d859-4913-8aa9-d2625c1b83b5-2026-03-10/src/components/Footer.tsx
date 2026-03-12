const footerLinks = {
  nav: [
    { label: "Как работает", href: "#how-it-works" },
    { label: "Подбор по возрасту", href: "#age-selection" },
    { label: "Тарифы", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Условия подписки", href: "#" },
    { label: "Политика конфиденциальности", href: "#" },
  ],
  contacts: [
    { label: "Контакты", href: "#" },
    { label: "Мессенджер", href: "#" },
    { label: "Зона доставки", href: "#" },
  ],
};

const Footer = () => {
  const handleClick = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-content py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">Toy Subscription</h3>
            <p className="text-sm opacity-70">
              Игрушки по подписке для 0–24 месяцев
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold text-sm mb-3 opacity-50 uppercase tracking-wider">Навигация</h4>
            <ul className="space-y-2">
              {footerLinks.nav.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-3 opacity-50 uppercase tracking-wider">Информация</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold text-sm mb-3 opacity-50 uppercase tracking-wider">Связаться</h4>
            <ul className="space-y-2">
              {footerLinks.contacts.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-xs opacity-50 text-center">
            © 2026 Toy Subscription. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
