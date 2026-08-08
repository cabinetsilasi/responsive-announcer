import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface SubItem {
  name: string;
  href: string;
}

interface NavCategory {
  title: string;
  href: string;
  items: SubItem[];
}

const secondaryNavData: NavCategory[] = [
  {
    title: "ORGANIGRAMA/REȚEA",
    href: "/organigrama",
    items: [
      { name: "Organigrama CJRAE-BN", href: "/organigrama/organigrama" },
      { name: "Rețea Cabinete 2022", href: "/organigrama/retea-cabinete" },
    ],
  },
  {
    title: "OFERTA/PROGRAME",
    href: "/oferta",
    items: [
      { name: "Servicii CJRAE-BN", href: "/oferta/servicii" },
      { name: "Oferta Educațională", href: "/oferta/oferta-educationala" },
      { name: "Proiecte & Programe", href: "/oferta/proiecte-programe" },
      { name: "Comunitatea Pro-CES", href: "https://www.facebook.com/profile.php?id=100064761100246#" },
      { name: "Comunitatea ENF", href: "https://www.facebook.com/cjapbn/" },
      { name: "Campanii în derulare", href: "/oferta/campanii" },
    ],
  },
  {
    title: "RESURSE DESCHISE",
    href: "/resurse",
    items: [
      { name: "Materiale concurs neurolimpics", href: "/resurse/neurolimpics" },
      { name: "Studii / Cercetări", href: "/resurse/studii-cercetari" },
      { name: "Resurse elevi", href: "/resurse/resurse-elevi" },
      { name: "Resurse elevi CES", href: "/resurse/resurse-elevi-ces" },
      { name: "Resurse logopedie", href: "/resurse/resurse-logopedie" },
      { name: "Resurse părinți", href: "/resurse/resurse-parinti" },
      { name: "Resurse profesori", href: "/resurse/resurse-profesori" },
      { name: "Legislație specifică", href: "/resurse/legislatie" },
    ],
  },
  {
    title: "PREVENIRE HĂRȚUIRE",
    href: "/prevenire",
    items: [
      { name: "Prevenirea și combaterea hărțuirii", href: "/prevenire/combatere-hartuire" },
    ],
  },
  {
    title: "LEGĂTURI UTILE",
    href: "/legaturi-utile",
    items: [
      { name: "EDU.RO", href: "https://www.edu.ro" },
      { name: "ISJ-BN", href: "http://isjbn.ro" },
      { name: "CJ-BN", href: "http://www.portalbn.ro" },
      { name: "CCD-BN", href: "http://ccdbn.ro" },
      { name: "CJAP-BN", href: "http://cjraebistrita.ro" },
      { name: "PREFECTURA-BN", href: "https://bn.prefectura.mai.gov.ro" },
      { name: "Facebook CJRAE-BN", href: "https://www.facebook.com/cjraebn" },
    ],
  },
];

export const SecondaryNav = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const isActiveCategory = (category: NavCategory) => {
    return (
      location.pathname === category.href ||
      category.items.some((item) => location.pathname === item.href)
    );
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  // Close dropdown when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-[hsl(var(--navbar-cream))] rounded-2xl shadow-lg p-2 mb-8 animate-fade-in border border-primary/10 relative z-40"
    >
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-1 md:gap-1.5">
        {secondaryNavData.map((category) => {
          const isOpen = openDropdown === category.title;
          const active = isActiveCategory(category);

          return (
            <div key={category.title} className="relative flex-1 text-center">
              {/* Trigger Button (Click Only) */}
              <button
                type="button"
                onClick={() => toggleDropdown(category.title)}
                className={`w-full text-center px-3 md:px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ease-out select-none whitespace-nowrap ${
                  active || isOpen
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-primary hover:bg-primary/10"
                }`}
              >
                {category.title}
              </button>

              {/* Dropdown Content on Click */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 md:w-72 bg-[hsl(var(--navbar-cream))] rounded-2xl p-2 shadow-2xl border border-primary/15 backdrop-blur-lg z-50 transition-all duration-500 ease-out origin-top ${
                  isOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-1 max-h-[75vh] overflow-y-auto custom-scrollbar p-1 text-left">
                  {category.items.map((subItem) => {
                    const isExternal = subItem.href.startsWith("http");
                    const isSubActive = location.pathname === subItem.href;

                    if (isExternal) {
                      return (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                        >
                          <span className="truncate">{subItem.name}</span>
                          <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setOpenDropdown(null)}
                        className={`flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
                          isSubActive
                            ? "bg-primary/15 text-primary font-semibold"
                            : "text-foreground hover:text-primary hover:bg-primary/10"
                        }`}
                      >
                        <span className="truncate">{subItem.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
