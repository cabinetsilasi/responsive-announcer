import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "ORGANIGRAMA/REȚEA", href: "/organigrama" },
  { name: "OFERTA/PROGRAME", href: "/oferta" },
  { name: "RESURSE DESCHISE", href: "/resurse" },
  { name: "PREVENIRE HĂRȚUIRE", href: "/prevenire" },
  { name: "LEGĂTURI UTILE", href: "/legaturi-utile" },
];

export const SecondaryNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card rounded-xl shadow-lg p-2 mb-8 animate-fade-in">
      <div className="flex flex-wrap justify-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              isActive(item.href)
                ? "bg-primary text-primary-foreground"
                : "text-primary hover:bg-primary/10"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
