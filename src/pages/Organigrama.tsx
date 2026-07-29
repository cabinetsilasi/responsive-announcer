import { Network, ExternalLink, Download, FileText } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Organigrama = () => {
  const googleDriveViewUrl = "https://drive.google.com/file/d/1z96yUnK-E2vcyUnTDieRrNVK5bPUNDN3/view?usp=sharing";
  const googleDrivePreviewUrl = "https://drive.google.com/file/d/1z96yUnK-E2vcyUnTDieRrNVK5bPUNDN3/preview";

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
                <Network className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Organizație
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                  Organigrama CJRAE-BN
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Structura organizatorică a Centrului Județean de Resurse și Asistență Educațională Bistrița-Năsăud.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                asChild
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 shadow-md font-semibold rounded-xl"
              >
                <a href={googleDriveViewUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Deschide „Organigrama CJRAE-BN”
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENT VIEW SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
          <CardHeader className="bg-muted/30 p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-xl font-heading font-bold text-foreground">
                    Vizualizare Organigramă
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Accesați documentul oficial al organigramei în Google Drive.
                  </p>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto h-auto py-2.5 px-4 border-primary/30 hover:bg-primary/10 text-primary font-semibold rounded-xl shrink-0 max-w-full whitespace-normal text-left"
              >
                <a href={googleDriveViewUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start gap-2 w-full">
                  <ExternalLink className="h-4 w-4 shrink-0" />
                  <span className="break-words">Deschide „Organigrama Oficială”</span>
                </a>
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>
    </MainLayout>
  );
};

export default Organigrama;
