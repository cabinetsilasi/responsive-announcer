import { FileText, ExternalLink, BookOpen, ClipboardList, Shield, Scale, Users, FileCheck, DollarSign, CalendarDays, BarChart3, GraduationCap, Handshake, Sparkles } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DocItem {
  title: string;
  subtitle?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

const documents: DocItem[] = [
  {
    title: "Proiect de Dezvoltare Instituțională",
    subtitle: "PDI",
    href: "https://drive.google.com/file/d/1p0Azt8qsTVqzuCr7nU6j1ZOFwbe4esaB/view?usp=sharing",
    icon: BookOpen,
    external: true,
  },
  {
    title: "Plan Managerial CJRAE-BN",
    href: "https://drive.google.com/file/d/1wpZY7UFwlKDPtC-Swbw9c5MEVVTV-xeT/view?usp=sharing",
    icon: ClipboardList,
    external: true,
  },
  {
    title: "Plan de Integritate CJRAE-BN",
    href: "/viewpage.php?page_id=56",
    icon: Shield,
  },
  {
    title: "Regulamentul de Organizare și Funcționare CJRAE",
    subtitle: "ROF",
    href: "https://drive.google.com/file/d/1ui4vW2im6jAg1mGCHoD2IF4QyqGBAdTS/view?usp=drive_link",
    icon: Scale,
    external: true,
  },
  {
    title: "Regulamentul de Ordine Interioară 2025-2026",
    subtitle: "ROI/RI",
    href: "https://drive.google.com/file/d/1EqpLxZVBV9ze2RvNyEWcPEiBtolDuKjr/view?usp=drive_link",
    icon: FileCheck,
    external: true,
  },
  {
    title: "Tematica Consiliului de Administrație al CJRAE-BN",
    href: "https://drive.google.com/file/d/1NFx4ySFAV8oDzGsZkkaUbDejNYXtcH1H/view?usp=sharing",
    icon: CalendarDays,
    external: true,
  },
  {
    title: "Codul Etic al CJRAE-BN",
    href: "https://drive.google.com/file/d/1YtX5PObJLhhoD38ipAYCT6c6B90vtvrn/view?usp=drive_link",
    icon: Sparkles,
    external: true,
  },
  {
    title: "Proceduri Operaționale",
    href: "/viewpage.php?page_id=46",
    icon: FileText,
  },
  {
    title: "Declarații de Avere și Interese",
    subtitle: "Echipă managerială",
    href: "/viewpage.php?page_id=45",
    icon: Users,
  },
  {
    title: "Transparența Veniturilor",
    href: "https://drive.google.com/file/d/1pJ9et7F6aqLv9AB4KTtOovzTowLWtCUh/view?usp=sharing",
    icon: DollarSign,
    external: true,
  },
  {
    title: "Procedura privind Învoirea Cadrelor Didactice din CJRAE-BN",
    href: "https://drive.google.com/file/d/1sPcGBWM_tlMohYRdyEuDuiJ2_JL6MvLA/view?usp=sharing",
    icon: FileCheck,
    external: true,
  },
  {
    title: "Rapoarte CJRAE-BN",
    href: "/viewpage.php?page_id=47",
    icon: BarChart3,
  },
  {
    title: "Studii și Cercetări CJRAE",
    href: "/viewpage.php?page_id=11",
    icon: GraduationCap,
  },
  {
    title: "Starea Învățământului",
    href: "/DOCUMENTE/STAREA INV CJRAE 2013-14.pdf",
    icon: BarChart3,
    external: true,
  },
  {
    title: "Parteneriate",
    href: "/viewpage.php?page_id=48",
    icon: Handshake,
  },
];

const Documente = () => {
  return (
    <MainLayout>
      <section className="mb-8 animate-fade-in-up">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative flex items-center gap-4">
            <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <FileText className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Documente CJRAE-BN
              </h1>
              <p className="mt-2 text-primary-foreground/90 max-w-2xl">
                Consultă documentele instituționale: PDI, planuri manageriale,
                regulamente, proceduri, rapoarte și alte resurse oficiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc, idx) => {
          const Icon = doc.icon;
          return (
            <a
              key={doc.title}
              href={doc.href}
              target={doc.external ? "_blank" : undefined}
              rel={doc.external ? "noopener noreferrer" : undefined}
              className="group animate-fade-in-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-3xl"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <Card className="h-full rounded-3xl border-border/60 bg-gradient-to-br from-card via-card to-muted/40 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading font-semibold text-base leading-snug text-foreground group-hover:text-primary transition-colors">
                        {doc.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    {doc.subtitle && (
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {doc.subtitle}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </section>
    </MainLayout>
  );
};

export default Documente;
