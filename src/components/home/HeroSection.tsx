import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("cjrae-first-visit");
    if (!visited) {
      setIsFirstVisit(true);
      sessionStorage.setItem("cjrae-first-visit", "true");
    }
  }, []);

  const introClass = isFirstVisit ? "animate-hero-intro" : "animate-scale-in";
  const contentClass = isFirstVisit ? "" : "animate-fade-in-up";

  return (
    <section className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 mb-12 ${introClass}`}>
      <div className="relative z-10 text-primary-foreground">
        <h1 className={`text-4xl md:text-5xl font-heading font-bold mb-4 ${contentClass}`}>
          Bine ați venit la CJRAE-BN
        </h1>
        <p className={`text-xl md:text-2xl mb-8 max-w-2xl ${contentClass}`} style={isFirstVisit ? undefined : { animationDelay: "0.1s" }}>
          Centrul Județean de Resurse și Asistență Educațională Bistrița-Năsăud
        </p>
        <p className={`text-lg mb-8 max-w-3xl ${contentClass}`} style={isFirstVisit ? undefined : { animationDelay: "0.2s" }}>
          Oferim suport educațional specializat pentru elevi cu cerințe educaționale speciale, 
          consiliere și orientare școlară, precum și resurse pentru dezvoltarea profesională 
          a cadrelor didactice.
        </p>
        
        <div className={`flex flex-wrap gap-4 ${contentClass}`} style={isFirstVisit ? undefined : { animationDelay: "0.3s" }}>
          <Button asChild size="lg" variant="secondary" className="gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Link to="/servicii">
              Descoperă Serviciile <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 hover:bg-white/20 text-white hover:text-white shadow-lg">
            <Link to="/contact">
              Contact <Heart className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
    </section>
  );
};
