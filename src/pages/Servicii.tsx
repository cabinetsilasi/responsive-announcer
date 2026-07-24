import { 
  Briefcase, 
  Mic, 
  HeartHandshake, 
  GraduationCap, 
  Info, 
  BookOpen, 
  Activity, 
  Award,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  category: string;
  colorClass: string;
}

const servicesList: ServiceItem[] = [
  {
    icon: Briefcase,
    title: "Consiliere pentru carieră",
    description: "Servicii de orientare școlară și profesională prin centrele județene și cabinetele de asistență psihopedagogică.",
    category: "Orientare",
    colorClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  },
  {
    icon: Mic,
    title: "Terapia tulburărilor de limbaj",
    description: "Servicii specializate de terapie logopedică prin centrele și cabinetele logopedice interșcolare.",
    category: "Logopedie",
    colorClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  },
  {
    icon: HeartHandshake,
    title: "Sprijin pentru copii cu CES",
    description: "Servicii de sprijin pentru copiii cu cerințe educative speciale integrați în unitățile de învățământ de masă, prin Centrele Școlare pentru Educație Incluzivă (CSEI).",
    category: "Educație Incluzivă",
    colorClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  },
  {
    icon: GraduationCap,
    title: "Educație pentru copii cu deficiențe",
    description: "Servicii complexe de educație adaptată pentru copiii cu deficiențe, oferite prin centrele școlare pentru educație incluzivă.",
    category: "Educație Specială",
    colorClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  },
  {
    icon: Info,
    title: "Informare și consiliere",
    description: "Servicii dedicate cadrelor didactice, copiilor, părinților și altor membri ai comunității pentru facilitarea parcursului educațional.",
    category: "Consiliere",
    colorClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
  },
  {
    icon: BookOpen,
    title: "Orientarea formării inițiale și continue",
    description: "Parteneriate strategice cu instituțiile abilitate să ofere formare inițială și continuă pentru personalul didactic și de sprijin.",
    category: "Formare",
    colorClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800",
  },
  {
    icon: Activity,
    title: "Terapii specifice",
    description: "Servicii de terapii specifice oferite prin centrele județene, cabinetele de asistență psihopedagogică și centrele școlare pentru educație incluzivă.",
    category: "Terapii",
    colorClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
  },
  {
    icon: Award,
    title: "Expertiză complexă și orientare școlară",
    description: "Servicii specializate de evaluare, expertiză complexă și orientare școlară/profesională oferite prin SEOSP și COSP.",
    category: "Expertiză & SEOSP",
    colorClass: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800",
  },
];

export const Servicii = () => {
  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="mb-8 animate-fade-in-up">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                  Oferta Educațională
                </Badge>
                <Badge variant="outline" className="border-white/30 text-white">
                  Servicii Specializate
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                Servicii CJRAE-BN
              </h1>
              <p className="mt-3 text-primary-foreground/90 max-w-3xl text-base md:text-lg leading-relaxed">
                Centrul Județean de Resurse și Asistență Educațională Bistrița-Năsăud oferă servicii specializate de sprijin educațional, psihopedagogic și logopedic pentru copii, elevi, părinți și cadre didactice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW INTRO */}
      <section className="mb-8 animate-fade-in-up">
        <Card className="rounded-3xl border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 shadow-md p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground">
                Viziunea serviciilor noastre de sprijin
              </h2>
              <p className="mt-2 text-muted-foreground leading-relaxed text-base md:text-lg">
                CJRAE Bistrița-Năsăud asigură accesul egal la o educație de calitate prin acordarea de asistență psiho-educațională, compensatorie și terapeutică, adaptată nevoilor fiecărui elev și sprijinirii comunității școlare.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* SERVICES GRID */}
      <section className="mb-12 animate-fade-in-up">
        <div className="mb-6">
          <h2 className="text-2xl font-heading font-bold text-foreground">
            Domeniile principale de asistență și sprijin
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Descoperiți întreaga gamă de servicii oferite prin rețeaua noastră de cabinete și specialiști.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="rounded-3xl border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card overflow-hidden group"
              >
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 border ${service.colorClass}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="border-border/60 text-muted-foreground font-medium text-xs">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="mb-10 animate-fade-in-up">
        <div className="rounded-3xl bg-muted/60 border border-border/60 p-8 text-center flex flex-col items-center justify-center">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
            Aveți nevoie de asistență sau informații suplimentare?
          </h3>
          <p className="text-muted-foreground max-w-xl mb-6 text-sm md:text-base">
            Echipa noastră de specialiști vă stă la dispoziție pentru îndrumare și programări.
          </p>
          <Button asChild size="lg" className="rounded-xl shadow-md font-semibold">
            <Link to="/contact">
              Contactați Echipa CJRAE-BN
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Servicii;
