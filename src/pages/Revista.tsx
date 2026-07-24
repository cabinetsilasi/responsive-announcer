import { BookOpen, ExternalLink, Archive, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Revista = () => {
  const currentIssueUrl = "https://drive.google.com/file/d/1dtgejQwjXvp0RfMWfzrcrybXSv9zCQ60/preview";
  const currentIssueDirectUrl = "https://drive.google.com/file/d/1dtgejQwjXvp0RfMWfzrcrybXSv9zCQ60/view";

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
            <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <BookOpen className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Revista CJRAE-BN
              </h1>
              <p className="mt-2 text-primary-foreground/90 max-w-2xl">
                Publicație periodică dedicată cadrelor didactice, consilierilor școlari, părinților și elevilor din județul Bistrița-Năsăud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER CATRE ARHIVA CONFIDENT */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 bg-gradient-to-r from-secondary/15 via-card to-accent/15 shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Archive className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground">
                  Fosta revistă „Confident” a CJAP-BN
                </h3>
                <p className="text-sm text-muted-foreground">
                  Răsfoiește numerele anterioare și edițiile istorice ale revistei noastre.
                </p>
              </div>
            </div>
            <Button asChild className="rounded-xl shadow-md gap-2 shrink-0">
              <Link to="/revista-confident">
                Vizualizează numerele anterioare
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* EDITIA CURENTA / IFRAME */}
      <section className="mb-12 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border/40 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2 font-heading text-xl">
                <Sparkles className="h-5 w-5 text-primary" />
                Revista CJRAE-BN - Ediția Curentă
              </CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Poți citi revista direct în fereastra de mai jos sau o poți deschide într-o filă nouă.
              </p>
            </div>
            <Button variant="outline" size="sm" asChild className="rounded-xl gap-2 text-primary border-primary/30 hover:bg-primary/10 shrink-0">
              <a href={currentIssueDirectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Deschide pe ecran complet
              </a>
            </Button>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 bg-muted/20">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] min-h-[450px] md:min-h-[600px] rounded-2xl overflow-hidden border border-border/50 shadow-inner bg-card">
              <iframe
                src={currentIssueUrl}
                className="w-full h-full border-0"
                allow="autoplay"
                title="Revista CJRAE-BN"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default Revista;
