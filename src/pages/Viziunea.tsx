import { Target, Compass, Users, Sparkles, HeartHandshake, BookOpen, ShieldCheck, Award } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Viziunea = () => {
  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="mb-8 animate-fade-in-up">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative flex items-center gap-4">
            <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur shrink-0">
              <Compass className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                  Despre Noi
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Viziunea și Misiunea CJRAE-BN
              </h1>
              <p className="mt-2 text-primary-foreground/90 max-w-3xl text-base md:text-lg">
                Directiile noastre strategice și valorile fundamentale în sprijinul copiilor, elevilor, părinților și cadrelor didactice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIZIUNEA SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
          <CardHeader className="rounded-t-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                  Viziunea Noastră
                </Badge>
                <CardTitle className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Construim împreună viitorul elevilor noștri
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-6 text-foreground/90 leading-relaxed">
            <blockquote className="relative p-6 rounded-2xl bg-muted/50 border-l-4 border-primary text-base md:text-lg italic font-medium text-foreground/95 shadow-inner">
              „Considerăm că viitorul nu este un dat, ci este rezultatul unei construcții (cognitive și sociale). Prin urmare, asumăm un rol activ și proactiv în acest demers de «elaborare» a viitorului elevilor noștri.”
            </blockquote>

            <p className="text-base md:text-lg">
              Parteneriatul <strong className="text-primary font-semibold">școală-familie-comunitate</strong> este esențial în acest gen de constructivism, iar munca în echipă (<span className="text-foreground font-medium">elevi, părinți, profesori, consilieri școlari deopotrivă</span>) devine dezideratul pe care se bazează orice proiect educațional de viitor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">Rol Activ & Proactiv</h3>
                <p className="text-sm text-muted-foreground">
                  Nu așteptăm ca viitorul să se întâmple, ci îl modelăm strategic prin intervenții educaționale adaptate.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-xl bg-secondary/20 text-secondary-foreground flex items-center justify-center mb-3">
                  <HeartHandshake className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">Parteneriat Tripartit</h3>
                <p className="text-sm text-muted-foreground">
                  Stabilirea unei colaborări strânse și continue între școală, familie și comunitatea locală.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-xl bg-accent/20 text-accent-foreground flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">Muncă în Echipă</h3>
                <p className="text-sm text-muted-foreground">
                  Sinergia dintre elevi, părinți, cadre didactice și consilieri pentru succese sustenabile.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* MISIUNEA SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-gradient-to-br from-card via-card to-secondary/5 overflow-hidden">
          <CardHeader className="rounded-t-3xl bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                  Misiunea Noastră
                </Badge>
                <CardTitle className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Cadru optim pentru dezvoltarea armonioasă
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-base md:text-lg font-medium leading-relaxed p-6 rounded-2xl bg-primary/5 border border-primary/20">
              Misiunea instituției este de a asigura un cadru optim pentru dezvoltarea armonioasă a elevilor prin oferirea de resurse umane, informaționale și de consiliere psiho-educațională tuturor factorilor implicați (<span className="text-primary font-semibold">unități de învățământ, elevi, părinți, profesori, comunități</span>).
            </p>

            <h3 className="text-xl font-heading font-bold text-foreground pt-2">
              Pilonii Misiunii CJRAE-BN
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border/40">
                <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-foreground">Resurse Umane Qualificate</h4>
                  <p className="text-xs text-muted-foreground mt-1">Echipă specializată de profesori consilieri, logopezi și psihopedagogi.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border/40">
                <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-foreground">Resurse Informaționale</h4>
                  <p className="text-xs text-muted-foreground mt-1">Ghiduri, materiale metodice și informații actualizate din domeniul educațional.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border/40">
                <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-foreground">Consiliere Psiho-educațională</h4>
                  <p className="text-xs text-muted-foreground mt-1">Servicii dedicate pentru facilitarea integrării și dezvoltării armonioase.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default Viziunea;
