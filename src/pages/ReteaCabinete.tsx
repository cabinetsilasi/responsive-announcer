import { Building2, ExternalLink, FileText, HeartHandshake, Mic } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ReteaCabinete = () => {
  const doc1PreviewUrl = "https://drive.google.com/file/d/1vNp4VLaFftwh96iMczX79YRBUZ46Rjhz/preview";
  const doc1ViewUrl = "https://drive.google.com/file/d/1vNp4VLaFftwh96iMczX79YRBUZ46Rjhz/view?usp=sharing";

  const doc2PreviewUrl = "https://drive.google.com/file/d/1ngLBKVnq0UBOWO_lKiEhFUS5dIDZEcLe/preview";
  const doc2ViewUrl = "https://drive.google.com/file/d/1ngLBKVnq0UBOWO_lKiEhFUS5dIDZEcLe/view?usp=sharing";

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
                <Building2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Organigrama & Rețea
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    2022
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                  Rețea Cabinete CJRAE-BN
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Rețeaua cabinetelor de asistență psihopedagogică și a cabinetelor logopedice interșcolare din județ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENT TABS SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <Tabs defaultValue="psihopedagocie" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 p-1.5 bg-muted/60 rounded-2xl h-auto mb-6 gap-2 border border-border/40">
            <TabsTrigger
              value="psihopedagocie"
              className="rounded-xl py-3 px-4 font-semibold text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <HeartHandshake className="h-4 w-4 shrink-0" />
              <span>Cabinete Asistență Psihopedagogică</span>
            </TabsTrigger>
            <TabsTrigger
              value="logopedie"
              className="rounded-xl py-3 px-4 font-semibold text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Mic className="h-4 w-4 shrink-0" />
              <span>Cabinete Interșcolare Logopedice</span>
            </TabsTrigger>
          </TabsList>

          {/* TAB 1 CONTENT */}
          <TabsContent value="psihopedagocie" className="focus-visible:outline-none">
            <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
              <CardHeader className="border-b border-border/40 bg-muted/30 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading font-bold text-foreground">
                        Rețeaua Cabinetelor de Asistență Psihopedagogică
                      </CardTitle>
                      <CardDescription>
                        Document oficial de repartizare a cabinetelor de asistență psihopedagogică 2022
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 text-primary font-medium rounded-xl shrink-0"
                  >
                    <a href={doc1ViewUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Deschide în Tab Nou
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-2 sm:p-4 md:p-6">
                <div className="w-full h-[650px] md:h-[800px] rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-slate-900/5">
                  <iframe
                    src={doc1PreviewUrl}
                    className="w-full h-full border-0 rounded-2xl"
                    allow="autoplay"
                    title="Rețea Cabinete Asistență Psihopedagogică"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 2 CONTENT */}
          <TabsContent value="logopedie" className="focus-visible:outline-none">
            <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
              <CardHeader className="border-b border-border/40 bg-muted/30 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading font-bold text-foreground">
                        Rețeaua Cabinetelor Interșcolare Logopedice
                      </CardTitle>
                      <CardDescription>
                        Document oficial privind distribuția cabinetelor logopedice interșcolare 2022
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 text-primary font-medium rounded-xl shrink-0"
                  >
                    <a href={doc2ViewUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Deschide în Tab Nou
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-2 sm:p-4 md:p-6">
                <div className="w-full h-[650px] md:h-[800px] rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-slate-900/5">
                  <iframe
                    src={doc2PreviewUrl}
                    className="w-full h-full border-0 rounded-2xl"
                    allow="autoplay"
                    title="Rețea Cabinete Interșcolare Logopedice"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </MainLayout>
  );
};

export default ReteaCabinete;
