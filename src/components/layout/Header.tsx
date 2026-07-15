import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import headerGif from "@/assets/header.gif.asset.json";

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Echipa", href: "/echipa" },
  { name: "Viziunea", href: "/viziunea" },
  { name: "Documente", href: "/documente" },
  { name: "CEOSP", href: "/ceosp" },
  { name: "CSES", href: "/cses" },
  { name: "Învățământ Primar 2025", href: "/invatamant-primar" },
  { name: "Revista CJRAE-BN", href: "/revista" },
  { name: "Erasmus+", href: "/erasmus" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex items-center justify-between py-3 border-b border-border/50">
          <Link to="/" className="flex items-center transition-transform hover:scale-105">
            <img 
              src={logo} 
              alt="CJRAE-BN Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center py-3 gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive(item.href)
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-muted hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
