import { 
  Megaphone, 
  Sparkles, 
  FolderLock, 
  ExternalLink, 
  FileText, 
  Folder, 
  ShieldAlert, 
  HeartHandshake 
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Campanii = () => {
  const superputeriViewUrl = "https://drive.google.com/file/d/1BJQMsfU0S1deoA0pZM2plEN-Rz8DqmA6/view?usp=sharing";
  const superputeriPreviewUrl = "https://drive.google.com/file/d/1BJQMsfU0S1deoA0pZM2plEN-Rz8DqmA6/preview";
  
  const reconectareFolderUrl = "https://drive.google.com/drive/folders/1vtxl6tamM0JuqOs-Tj-pNezUjqAywMAX";

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
                <Megaphone className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Oferta & Programe
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Campanii Județene
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                  Campanii în Derulare
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Inițiative și campanii de conștientizare, prevenție și dezvoltare socio-emoțională organizate de CJRAE-BN.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN 1: CONSTRUIM SUPERPUTERILE CARACTERULUI */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
          <CardHeader className="border-b border-border/40 bg-gradient-to-r from-primary/5 via-accent/5 to-transparent p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Dezvoltare Socio-Emoțională
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    Campania „CONSTRUIM SUPERPUTERILE CARACTERULUI”
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm md:text-base mt-1">
                    Campanie dedicată cultivării valorilor morale, rezilienței, empatiei și stării de bine în școli.
                  </CardDescription>
                </div>
              </div>

              <Button
                asChild
                variant="default"
                className="rounded-xl shadow-md font-semibold shrink-0 gap-2"
              >
                <a href={superputeriViewUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Deschide Documentul
                </a>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4 md:p-6">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-slate-900/5 min-h-[550px]">
              <iframe
                src={superputeriPreviewUrl}
                title="Construim Superputerile Caracterului Preview"
                className="w-full h-[650px] border-0 rounded-2xl"
                allow="autoplay"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CAMPAIGN 2: RECONECTARE... PE BUNE */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-gradient-to-br from-card via-card to-secondary/5 overflow-hidden p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-2xl bg-secondary/20 text-secondary-foreground flex items-center justify-center shrink-0">
                <HeartHandshake className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="border-secondary/40 text-foreground font-semibold">
                    Conștientizare & Comunitar
                  </Badge>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Campania „RECONECTARE... PE BUNE”
                </h2>
                <p className="mt-2 text-muted-foreground text-base max-w-2xl leading-relaxed">
                  Proiect dedicat promovării comunicării autentice, construirii de relații interpersonale sănătoase și reconectării reale în mediul școlar și familial.
                </p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-2xl shadow-md font-semibold gap-2 shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={reconectareFolderUrl} target="_blank" rel="noopener noreferrer">
                <Folder className="h-5 w-5" />
                Accesează Folderul cu Materiale
                <ExternalLink className="h-4 w-4 ml-1 opacity-70" />
              </a>
            </Button>
          </div>
        </Card>
      </section>
    </MainLayout>
  );
};

export default Campanii;
