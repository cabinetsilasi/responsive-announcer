import { Compass, BookOpen, Users, Building2, Calendar, Target, Award, ExternalLink, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ConsEdu = () => {
  const doc1PreviewUrl = "https://drive.google.com/file/d/1mbn-F5c2xmsF-_F8-dHkvV-Ke1cc-AI7/preview";
  const doc1ViewUrl = "https://drive.google.com/file/d/1mbn-F5c2xmsF-_F8-dHkvV-Ke1cc-AI7/view";
  
  const doc2PreviewUrl = "https://drive.google.com/file/d/19boHuGfgouBisKszIwUObR1yAyHKvTvE/preview";
  const doc2ViewUrl = "https://drive.google.com/file/d/19boHuGfgouBisKszIwUObR1yAyHKvTvE/view";

  const officialEduUrl = "https://www.edu.ro/lansare_proiect_ConsEDU";

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
                  Proiect Național | PEO 2021-2027
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Proiectul ConsEDU
              </h1>
              <p className="mt-2 text-primary-foreground/90 max-w-3xl text-base md:text-lg">
                Practici transformaționale în consilierea și orientarea carierei – Modernizarea serviciilor de consiliere școlară și asistență psihopedagogică.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xl font-bold font-heading text-foreground">2025 – 2029</p>
              <p className="text-xs text-muted-foreground font-medium">Perioadă Implementare</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-secondary/20 text-primary flex items-center justify-center shrink-0">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xl font-bold font-heading text-foreground">9.335</p>
              <p className="text-xs text-muted-foreground font-medium">Beneficiari Direcți</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-accent/20 text-primary flex items-center justify-center shrink-0">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xl font-bold font-heading text-foreground">&gt; 2.500</p>
              <p className="text-xs text-muted-foreground font-medium">Școli Preuniversitare</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xl font-bold font-heading text-foreground">PEO 2021-2027</p>
              <p className="text-xs text-muted-foreground font-medium">Finanțare Europeană</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* DESPRE PROIECT SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
          <CardHeader className="rounded-t-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                    Despre Proiect
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    Modernizarea Consilierii în Carieră
                  </CardTitle>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-xl text-xs gap-1.5 border-border/60 self-start sm:self-auto"
              >
                <a href={officialEduUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 text-primary" />
                  Sursa Edu.ro
                </a>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-base md:text-lg font-medium leading-relaxed p-6 rounded-2xl bg-muted/50 border-l-4 border-primary text-foreground/95">
              Ministerul Educației și Cercetării, în calitate de beneficiar, a lansat proiectul național <strong>ConsEDU – Practici transformaționale în consilierea și orientarea carierei</strong>, finanțat prin Programul Educație și Ocupare 2021 - 2027 (Prioritatea 7, Acțiunea 7.e.2).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">Obiectiv Principal</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Creșterea calității serviciilor de consiliere și orientare în carieră în învățământul primar, gimnazial și liceal prin dezvoltarea unui cadru metodologic unitar.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-secondary/20 text-primary flex items-center justify-center">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">Model Whole-School</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pilotarea unui model integrat de consiliere la nivelul întregii școli, conectând curriculumul de consiliere, formarea profesorilor și rețeaua CJRAE/CMBRAE.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm space-y-3">
                <div className="h-10 w-10 rounded-xl bg-accent/20 text-primary flex items-center justify-center">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">Formare Continua</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consolidarea competențelor profesionale ale cadrelor didactice, profesorilor consilieri școlari și diriginților prin furnizarea de resurse moderne.
                </p>
              </div>
            </div>

            {/* PARTENERI INSTITUȚIONALI */}
            <div className="pt-4 space-y-3">
              <h3 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Parteneri Instituționali ai Proiectului
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl bg-muted/40 border border-border/40 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-foreground">Universitatea din București (P1)</span>
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border/40 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-foreground">CMBRAE București (P2)</span>
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border/40 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-foreground">Casa Corpului Didactic București (P3)</span>
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border/40 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-foreground">Inspectoratul Școlar Județean Iași (P4)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* DOCUMENTATIE & RESOURCE IFRAMES SECTION */}
      <section className="mb-10 space-y-8 animate-fade-in-up">
        {/* DOCUMENT 1 */}
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
          <CardHeader className="rounded-t-3xl bg-muted/40 p-6 md:p-8 border-b border-border/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                    Documentație ConsEDU - Partea I
                  </Badge>
                  <CardTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
                    Ghid Metodologic & Prezentare
                  </CardTitle>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-xl text-xs gap-1.5 border-border/60 self-start sm:self-auto"
              >
                <a href={doc1ViewUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 text-primary" />
                  Deschide în tab nou
                </a>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4 md:p-6">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-muted/20">
              <iframe
                src={doc1PreviewUrl}
                title="ConsEDU Document 1 Preview"
                className="w-full h-[450px] md:h-[550px] border-0 rounded-2xl"
                allow="autoplay"
              />
            </div>
          </CardContent>
        </Card>

        {/* DOCUMENT 2 */}
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
          <CardHeader className="rounded-t-3xl bg-muted/40 p-6 md:p-8 border-b border-border/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                    Documentație ConsEDU - Partea II
                  </Badge>
                  <CardTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
                    Plan de Acțiune & Servicii Integrat
                  </CardTitle>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-xl text-xs gap-1.5 border-border/60 self-start sm:self-auto"
              >
                <a href={doc2ViewUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 text-primary" />
                  Deschide în tab nou
                </a>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4 md:p-6">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-muted/20">
              <iframe
                src={doc2PreviewUrl}
                title="ConsEDU Document 2 Preview"
                className="w-full h-[450px] md:h-[550px] border-0 rounded-2xl"
                allow="autoplay"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default ConsEdu;
