import { 
  Users, 
  HeartHandshake, 
  FileText, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ResurseParinti = () => {
  const drivePreviewUrl = "https://drive.google.com/file/d/12pIVc3ZmOOfmBSfbdE2HsAHvM0pRlgTr/preview";
  const driveViewUrl = "https://drive.google.com/file/d/12pIVc3ZmOOfmBSfbdE2HsAHvM0pRlgTr/view?usp=sharing";

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
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Resurse Deschise
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Ghid pentru Părinți
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                  Resurse pentru Părinți
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Materiale de sprijin, ghiduri de educație parentală și sfaturi ale consilierilor școlari.
                </p>
              </div>
            </div>

            <Button
              asChild
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-md font-semibold rounded-xl shrink-0"
            >
              <a href={driveViewUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Deschide în Tab Nou
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PARENTING PILARS */}
      <section className="mb-8 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-2xl border-border/60 p-5 bg-card shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">Parteneriat Școală - Familie</h3>
            <p className="text-sm text-muted-foreground">
              Colaborarea continuă între părinți și cadrele didactice asigură armonia și succesul școlar.
            </p>
          </Card>

          <Card className="rounded-2xl border-border/60 p-5 bg-card shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">Dezvoltare Socio-Emoțională</h3>
            <p className="text-sm text-muted-foreground">
              Recomandări pentru gestionarea emoțiilor, reducerea anxietății și creșterea stimei de sine.
            </p>
          </Card>

          <Card className="rounded-2xl border-border/60 p-5 bg-card shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">Orientare în Carieră</h3>
            <p className="text-sm text-muted-foreground">
              Îndrumări pentru sprijinirea copiilor în alegerea traseului educațional și profesional.
            </p>
          </Card>
        </div>
      </section>

      {/* DOCUMENT PREVIEW CARD */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
          <CardHeader className="border-b border-border/40 bg-muted/30 p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                    Documentație Oficială
                  </Badge>
                  <CardTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
                    Ghidul Părinților - Materiale & Sfaturi Utile
                  </CardTitle>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 text-primary font-medium rounded-xl shrink-0"
              >
                <a href={driveViewUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Deschide în Tab Nou
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-2 sm:p-4 md:p-6">
            <div className="w-full h-[650px] md:h-[800px] rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-slate-900/5">
              <iframe
                src={drivePreviewUrl}
                className="w-full h-full border-0 rounded-2xl"
                allow="autoplay"
                title="Ghidul Părinților Preview"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA CONTACT */}
      <section className="mb-10 animate-fade-in-up">
        <div className="rounded-3xl bg-muted/60 border border-border/60 p-8 text-center flex flex-col items-center justify-center">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
            Doriți o consultație de consiliere parentală?
          </h3>
          <p className="text-muted-foreground max-w-xl mb-6 text-sm md:text-base">
            Consilierii noștri școlari vă stau la dispoziție gratuit pentru sprijin psiho-educațional.
          </p>
          <Button asChild size="lg" className="rounded-xl shadow-md font-semibold">
            <Link to="/contact">
              Contactați un Consilier Școlar
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default ResurseParinti;
