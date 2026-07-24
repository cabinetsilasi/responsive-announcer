import { 
  BookOpen, 
  GraduationCap, 
  HeartHandshake, 
  Mic, 
  Users, 
  Award, 
  CheckCircle2, 
  FileText,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const OfertaEducationala = () => {
  const piloniOferta = [
    {
      icon: HeartHandshake,
      title: "Consiliere Psihopedagogică & Cariera Elevilor",
      description: "Activități individuale și de grup pentru dezvoltare personală, autocunoaștere, prevenție și orientare privind cariera școlară și profesională.",
      target: "Elevi gimnaziu & liceu",
      badgeColor: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: Mic,
      title: "Terapia și Corectarea Tulburărilor de Limbaj",
      description: "Depistarea, evaluarea și recuperarea tulburărilor de limbaj la preșcolari și elevii din clasele primare.",
      target: "Preșcolari & primar",
      badgeColor: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      icon: GraduationCap,
      title: "Asistență și Sprijin pentru Educație Incluzivă (CES)",
      description: "Elaborarea și adaptarea cursurilor, planuri de intervenție personalizată și sprijin de specialitate pentru copiii cu cerințe educative speciale.",
      target: "Elevi cu CES integrați",
      badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-200"
    },
    {
      icon: Award,
      title: "Expertiză Complexă & Orientare Școlară (SEOSP/COSP)",
      description: "Evaluare psihologică și pedagogică complexă în vederea emiterii certificatelor de orientare școlară și profesională.",
      target: "Copii, elevi & tineri",
      badgeColor: "bg-amber-500/10 text-amber-600 border-amber-200"
    },
    {
      icon: Users,
      title: "Consiliere și Asistență pentru Părinți",
      description: "Sesiuni de informare, școli ale părinților și suport în gestionarea provocărilor emoționale și comportamentale ale copiilor.",
      target: "Părinți & aparținători",
      badgeColor: "bg-cyan-500/10 text-cyan-600 border-cyan-200"
    },
    {
      icon: BookOpen,
      title: "Formare și Sprijin Metodic pentru Profesori",
      description: "Ateliere de lucru, ghiduri metodologice și consultanță pentru cadrele didactice din județul Bistrița-Năsăud.",
      target: "Cadre didactice",
      badgeColor: "bg-rose-500/10 text-rose-600 border-rose-200"
    }
  ];

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
                  Oferta & Programe
                </Badge>
                <Badge variant="outline" className="border-white/30 text-white">
                  Ghid Educațional
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                Oferta Educațională CJRAE-BN
              </h1>
              <p className="mt-3 text-primary-foreground/90 max-w-3xl text-base md:text-lg leading-relaxed">
                Portofoliul complet de servicii, programe și activități adresate preșcolarilor, elevilor, părinților și cadrelor didactice din județul Bistrița-Năsăud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETALII OFERTA SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card p-6 md:p-8">
          <CardHeader className="px-0 pt-0 pb-6 border-b border-border/40 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  Ce cuprinde Oferta Educațională?
                </CardTitle>
                <CardDescription className="text-base">
                  Oferta noastră este structurată pe nevoile reale ale beneficiarilor din sistemul de învățământ preuniversitar.
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-0 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {piloniOferta.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-border/60 bg-muted/20 hover:bg-muted/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge variant="outline" className={`text-xs ${item.badgeColor}`}>
                          {item.target}
                        </Badge>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center text-xs text-primary font-semibold">
                      <CheckCircle2 className="h-4 w-4 mr-1.5 shrink-0 text-emerald-500" />
                      Serviciu Gratuit & Confidențial
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* BENEFICII & GHID PUBLIC SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="rounded-3xl border-border/60 shadow-md bg-gradient-to-br from-card to-primary/5 p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Beneficiarii Directi ai Ofertei
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <strong>Elevi:</strong> suport emoțional, orientare în carieră, terapie logopedică.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <strong>Părinți:</strong> consiliere parentală și orientare școlară specializată.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <strong>Cadre didactice:</strong> asistență metodologică și parteneriate educaționale.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="rounded-3xl border-border/60 shadow-md bg-gradient-to-br from-card to-secondary/5 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                Ai nevoie de ajutor în alegerea opțiunii potrivite?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Specialiștii noștri din cabinetele școlare și de la sediul central sunt pregătiți să îți ofere tot sprijinul necesar.
              </p>
            </div>
            <Button asChild className="rounded-xl shadow-md font-semibold self-start">
              <Link to="/contact">
                Contactează un Consilier
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* DOCUMENT IFRAME SECTION AT END OF PAGE */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
          <CardHeader className="rounded-t-3xl bg-muted/40 p-6 md:p-8 border-b border-border/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                    Documentație Oficială
                  </Badge>
                  <CardTitle className="text-2xl font-heading font-bold text-foreground">
                    Vizualizare Broșură / Oferta Educațională
                  </CardTitle>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 text-primary font-medium rounded-xl shrink-0"
              >
                <a
                  href="https://drive.google.com/file/d/1L6DYJz1h5dEZji7zBiKIfiY5KwyQ1j_k/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Deschide în Tab Nou
                </a>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4 md:p-6">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-slate-900/5 min-h-[550px]">
              <iframe
                src="https://drive.google.com/file/d/1L6DYJz1h5dEZji7zBiKIfiY5KwyQ1j_k/preview"
                title="Broșură Oferta Educațională Preview"
                className="w-full h-[650px] border-0 rounded-2xl"
                allow="autoplay"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default OfertaEducationala;
