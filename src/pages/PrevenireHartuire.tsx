import { 
  ShieldAlert, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  HeartHandshake, 
  AlertTriangle, 
  BookOpen, 
  Sparkles 
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AntiBullyingDoc {
  id: string;
  number: number;
  title: string;
  description: string;
  previewUrl: string;
  viewUrl: string;
}

const docsList: AntiBullyingDoc[] = [
  {
    id: "doc1",
    number: 1,
    title: "Ghid privind prevenirea și combaterea hărțuirii pe criteriul de sex și a hărțuirii morale la locul de muncă",
    description: "Norme metodologice, definiții și reglementări privind prevenirea și combaterea hărțuirii pe criteriul de sex, precum și a hărțuirii morale la locul de muncă.",
    previewUrl: "https://drive.google.com/file/d/15SPPVFDKY1CxGnVn_mkyTtnsIaLNUlWJ/preview",
    viewUrl: "https://drive.google.com/file/d/15SPPVFDKY1CxGnVn_mkyTtnsIaLNUlWJ/view?usp=sharing",
  },
  {
    id: "doc2",
    number: 2,
    title: "Procedură privind prevenirea și combaterea hărțuirii pe criteriul de sex și a hărțuirii morale",
    description: "Procedura internă privind depunerea sesizărilor, etapele de analiză și măsurile de prevenție și intervenție la locul de muncă.",
    previewUrl: "https://drive.google.com/file/d/1DTbUGjfcgDpe-r2-Ik1XhwvD52w5B41-/preview",
    viewUrl: "https://drive.google.com/file/d/1DTbUGjfcgDpe-r2-Ik1XhwvD52w5B41-/view?usp=sharing",
  },
  {
    id: "doc3",
    number: 3,
    title: "Materiale de Conștientizare și Prevenție",
    description: "Fișe de informare, recomandări și măsuri de prevenire a hărțuirii în mediul instituțional.",
    previewUrl: "https://drive.google.com/file/d/1sFH85vZDBjlm-6R0wWCPets95pz0c_ZE/preview",
    viewUrl: "https://drive.google.com/file/d/1sFH85vZDBjlm-6R0wWCPets95pz0c_ZE/view?usp=sharing",
  },
  {
    id: "doc4",
    number: 4,
    title: "Ghid de Prevenire și Siguranță",
    description: "Recomandări privind conduita profesională, etica la locul de muncă și protecția angajaților.",
    previewUrl: "https://drive.google.com/file/d/1zpT3l_ezWFDDdx6UVkE7fIKPU_xN07RO/preview",
    viewUrl: "https://drive.google.com/file/d/1zpT3l_ezWFDDdx6UVkE7fIKPU_xN07RO/view?usp=sharing",
  },
  {
    id: "doc5",
    number: 5,
    title: "Plan de Acțiune și Norme Instituționale",
    description: "Strategia și normele privind asigurarea unui mediu de muncă sigur și lipsit de orice formă de hărțuire.",
    previewUrl: "https://drive.google.com/file/d/1TEWUwLnGj_Ta6jlsNTxR-AsP6htXHYZ_/preview",
    viewUrl: "https://drive.google.com/file/d/1TEWUwLnGj_Ta6jlsNTxR-AsP6htXHYZ_/view?usp=sharing",
  },
];

export const PrevenireHartuire = () => {
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
                <ShieldAlert className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Locul de Muncă
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Mediu Profesional
                  </Badge>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground leading-snug">
                  Prevenirea și Combaterea Hărțuirii pe Criteriul de Sex și a Hărțuirii Morale
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Ghiduri metodologice, proceduri de intervenție și reglementări privind prevenirea și combaterea hărțuirii la locul de muncă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WARNING / INFO BANNER */}
      <section className="mb-8 animate-fade-in-up">
        <Card className="rounded-3xl border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-card to-card shadow-md p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                Egalitate, Respect și Demnitate la Locul de Muncă
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prevenirea și combaterea hărțuirii pe criteriul de sex, precum și a hărțuirii morale la locul de muncă reprezintă un angajament ferm al instituției noastre pentru garantarea unui mediu de muncă sigur, egal și demn pentru toți angajații.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* DOCUMENT TABS */}
      <section className="mb-10 animate-fade-in-up">
        <Tabs defaultValue="doc1" className="w-full">
          <TabsList className="flex flex-wrap p-1.5 bg-muted/60 rounded-2xl h-auto mb-6 gap-2 border border-border/40 justify-start">
            {docsList.map((doc) => (
              <TabsTrigger
                key={doc.id}
                value={doc.id}
                className="rounded-xl py-2.5 px-3.5 font-semibold text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all flex items-center gap-2 shrink-0"
              >
                <BookOpen className="h-4 w-4 shrink-0" />
                <span>Document {doc.number}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {docsList.map((doc) => (
            <TabsContent key={doc.id} value={doc.id} className="focus-visible:outline-none">
              <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
                <CardHeader className="border-b border-border/40 bg-muted/30 p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                          Document Oficial #{doc.number}
                        </Badge>
                        <CardTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
                          {doc.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-sm mt-0.5">
                          {doc.description}
                        </CardDescription>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 text-primary font-medium rounded-xl shrink-0"
                    >
                      <a href={doc.viewUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Deschide în Tab Nou
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-2 sm:p-4 md:p-6">
                  <div className="w-full h-[650px] md:h-[800px] rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-slate-900/5">
                    <iframe
                      src={doc.previewUrl}
                      className="w-full h-full border-0 rounded-2xl"
                      allow="autoplay"
                      title={doc.title}
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

export default PrevenireHartuire;
