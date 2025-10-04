import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Heart } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 mb-12 animate-scale-in">
      <div className="relative z-10 text-primary-foreground">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in-up">
          Bine ați venit la CJRAE-BN
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Centrul Județean de Resurse și Asistență Educațională Bistrița-Năsăud
        </p>
        <p className="text-lg mb-8 max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Oferim suport educațional specializat pentru elevi cu cerințe educaționale speciale, 
          consiliere și orientare școlară, precum și resurse pentru dezvoltarea profesională 
          a cadrelor didactice.
        </p>
        
        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" variant="secondary" className="gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Descoperă Serviciile <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 hover:bg-white/20 text-white hover:text-white shadow-lg">
            Contact <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
    </section>
  );
};
