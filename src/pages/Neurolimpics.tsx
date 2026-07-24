import { Brain, FileText, ExternalLink, BookOpen, Award, CheckCircle2 } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MaterialDoc {
  id: string;
  title: string;
  description: string;
  previewUrl: string;
  viewUrl: string;
}

const materials: MaterialDoc[] = [
  {
    id: "mat1",
    title: "Material Pregătire Partea I",
    description: "Regulament și prima parte a suportului de curs / materiale pentru Concursul Neurolimpics.",
    previewUrl: "https://drive.google.com/file/d/1Gsdt_RlwD_PcFcFGGwQIVyEQsOKuUSy2/preview",
    viewUrl: "https://drive.google.com/file/d/1Gsdt_RlwD_PcFcFGGwQIVyEQsOKuUSy2/view?usp=sharing",
  },
  {
    id: "mat2",
    title: "Material Pregătire Partea II",
    description: "Suport teoretic și aplicații practice pentru pregătirea elevilor la Concursul Neurolimpics.",
    previewUrl: "https://drive.google.com/file/d/1yn9FcEC8WhHnAdbQzJOcUU52u6SgpOKK/preview",
    viewUrl: "https://drive.google.com/file/d/1yn9FcEC8WhHnAdbQzJOcUU52u6SgpOKK/view?usp=sharing",
  },
  {
    id: "mat3",
    title: "Material Pregătire Partea III",
    description: "Fișe de lucru, studii de caz și exemple pentru aprofundare.",
    previewUrl: "https://drive.google.com/file/d/1m_5ANM8kgBnEtejswQsbyL37JK5xTOqa/preview",
    viewUrl: "https://drive.google.com/file/d/1m_5ANM8kgBnEtejswQsbyL37JK5xTOqa/view?usp=sharing",
  },
  {
    id: "mat4",
    title: "Material Pregătire Partea IV",
    description: "Ghid de sinteză și modele de subiecte pentru evaluare.",
    previewUrl: "https://drive.google.com/file/d/1F_g0n14HfQSNLfWQC-KmV40V76wi1-Lb/preview",
    viewUrl: "https://drive.google.com/file/d/1F_g0n14HfQSNLfWQC-KmV40V76wi1-Lb/view?usp=sharing",
  },
];

export const Neurolimpics = () => {
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
                <Brain className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Resurse Deschise
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Concurs Județean
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                  Materiale Concurs Neurolimpics
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Ghiduri, suporturi teoretice și materiale de pregătire destinate participanților la Concursul Neurolimpics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS FOR THE 4 DOCUMENTS */}
      <section className="mb-10 animate-fade-in-up">
        <Tabs defaultValue="mat1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 p-1.5 bg-muted/60 rounded-2xl h-auto mb-6 gap-2 border border-border/40">
            {materials.map((mat, idx) => (
              <TabsTrigger
                key={mat.id}
                value={mat.id}
                className="rounded-xl py-3 px-3 font-semibold text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="h-4 w-4 shrink-0" />
                <span className="truncate">Material {idx + 1}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {materials.map((mat) => (
            <TabsContent key={mat.id} value={mat.id} className="focus-visible:outline-none">
              <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
                <CardHeader className="border-b border-border/40 bg-muted/30 p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
                          {mat.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-sm mt-0.5">
                          {mat.description}
                        </CardDescription>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 text-primary font-medium rounded-xl shrink-0"
                    >
                      <a href={mat.viewUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Deschide în Tab Nou
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-2 sm:p-4 md:p-6">
                  <div className="w-full h-[650px] md:h-[800px] rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-slate-900/5">
                    <iframe
                      src={mat.previewUrl}
                      className="w-full h-full border-0 rounded-2xl"
                      allow="autoplay"
                      title={mat.title}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </MainLayout>
  );
};

export default Neurolimpics;
