import { 
  FolderKanban, 
  Sparkles, 
  Heart, 
  Users, 
  ShieldCheck, 
  ExternalLink, 
  FileText, 
  ArrowRight,
  Facebook
} from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  pdfUrl?: string;
  externalUrl?: string;
  internalUrl?: string;
  colorClass: string;
}

const projectsList: ProjectItem[] = [
  {
    title: "Proiectul „Exprimă-te liber!”",
    category: "Prevenție & Dezvoltare",
    description: "Proiect educațional dedicat încurajării liberei exprimări, dezvoltării inteligenței emoționale și promovării unui mediu școlar pozitiv.",
    icon: Sparkles,
    pdfUrl: "/DOCUMENTE/exprima-te liber 2014.pdf",
    colorClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  },
  {
    title: "Proiectul „Invitație la sănătate”",
    category: "Sănătate & Stil de Viață",
    description: "Inițiativă de promovare a stilului de viață sănătos, a echilibrului psiho-emotivel și a stării de bine în comunitățile școlare.",
    icon: Heart,
    pdfUrl: "/DOCUMENTE/invitatie la sănătate.pdf",
    colorClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800",
  },
  {
    title: "Proiectul „Comunitatea Pro-CES 100”",
    category: "Educație Incluzivă",
    description: "Proiect de promovare a incluziunii școlare și de sprijin pentru copiii cu cerințe educative speciale (CES) și familiile acestora.",
    icon: Users,
    externalUrl: "https://www.facebook.com/profile.php?id=100064761100246#",
    colorClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  },
  {
    title: "Educație Necondiționată pentru Fiecare (ENF)",
    category: "Egalitate de Șanse",
    description: "Program dedicat accesului egal la educație, nediscriminării și susținerii tuturor elevilor, indiferent de mediul de proveniență.",
    icon: ShieldCheck,
    externalUrl: "https://www.facebook.com/cjapbn/",
    colorClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  },
];

export const ProiectePrograme = () => {
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
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur shrink-0">
                <FolderKanban className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Oferta & Programe
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Inițiative Educaționale
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                  Proiecte și Programe
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Inițiativele și proiectele educaționale derulate de CJRAE Bistrița-Năsăud în sprijinul comunității.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsList.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="rounded-3xl border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 bg-card overflow-hidden flex flex-col justify-between"
              >
                <CardHeader className="p-6 md:p-8 pb-4">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 border ${project.colorClass}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="border-border/60 text-muted-foreground font-medium text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm md:text-base leading-relaxed mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 md:p-8 pt-0 flex flex-wrap items-center gap-3">
                  {project.pdfUrl && (
                    <Button
                      asChild
                      variant="default"
                      className="rounded-xl shadow-sm font-semibold gap-2"
                    >
                      <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4" />
                        Deschide Document (PDF)
                      </a>
                    </Button>
                  )}

                  {project.externalUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl border-border/60 font-semibold gap-2 hover:bg-muted"
                    >
                      <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4 text-blue-600" />
                        Pagina Facebook
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>
                    </Button>
                  )}

                  {project.internalUrl && (
                    <Button
                      asChild
                      variant="ghost"
                      className="rounded-xl font-semibold gap-1 text-primary hover:bg-primary/10"
                    >
                      <Link to={project.internalUrl}>
                        Pagina Proiectului
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
};

export default ProiectePrograme;
