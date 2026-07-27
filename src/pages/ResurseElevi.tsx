import { 
  BookOpen, 
  GraduationCap, 
  FileText, 
  ExternalLink, 
  Sparkles, 
  Brain, 
  Heart, 
  Compass, 
  Users, 
  Smile
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ElevDoc {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  previewUrl: string;
  viewUrl: string;
}

const docsList: ElevDoc[] = [
  {
    id: "doc1",
    number: 1,
    title: "Ghidul Elevului - Dezvoltare Personală",
    description: "Ghid practic pentru dezvoltarea abilităților personale, autocunoaștere și încredere în sine.",
    icon: Sparkles,
    previewUrl: "https://drive.google.com/file/d/1JlHqDOjOs7xHrBHQ5CSNxlBVojoeJ4ko/preview",
    viewUrl: "https://drive.google.com/file/d/1JlHqDOjOs7xHrBHQ5CSNxlBVojoeJ4ko/view?usp=sharing",
  },
  {
    id: "doc2",
    number: 2,
    title: "Autocunoaștere și Autoevaluare",
    description: "Fișe de lucru și exerciții pentru identificarea calităților, valorilor și punctelor forte.",
    icon: Brain,
    previewUrl: "https://drive.google.com/file/d/1d9jSsg7-uhYrdRsx1qtZqhXbjXDRAZbO/preview",
    viewUrl: "https://drive.google.com/file/d/1d9jSsg7-uhYrdRsx1qtZqhXbjXDRAZbO/view?usp=sharing",
  },
  {
    id: "doc3",
    number: 3,
    title: "Tehnici și Metode de Învățare Eficientă",
    description: "Strategii și sfaturi pentru eficientizarea stilului de învățare și organizarea studiului.",
    icon: BookOpen,
    previewUrl: "https://drive.google.com/file/d/1NIHIS8YQTktXjf-KBKPOGCNQqO3HTB6T/preview",
    viewUrl: "https://drive.google.com/file/d/1NIHIS8YQTktXjf-KBKPOGCNQqO3HTB6T/view?usp=sharing",
  },
  {
    id: "doc4",
    number: 4,
    title: "Gestionarea Emoțiilor și a Stresului Școlar",
    description: "Metode practice de management al stresului, anxietății de evaluare și reglare emoțională.",
    icon: Heart,
    previewUrl: "https://drive.google.com/file/d/1kUb8wqmtydZpyiorkv8LpTKllC1BDaay/preview",
    viewUrl: "https://drive.google.com/file/d/1kUb8wqmtydZpyiorkv8LpTKllC1BDaay/view?usp=sharing",
  },
  {
    id: "doc5",
    number: 5,
    title: "Orientarea în Carieră și Decizii Școlare",
    description: "Recomandări și chestionare pentru alegerea parcursului școlar și profesional.",
    icon: Compass,
    previewUrl: "https://drive.google.com/file/d/12pIVc3ZmOOfmBSfbdE2HsAHvM0pRlgTr/preview",
    viewUrl: "https://drive.google.com/file/d/12pIVc3ZmOOfmBSfbdE2HsAHvM0pRlgTr/view?usp=sharing",
  },
  {
    id: "doc6",
    number: 6,
    title: "Comunicare Asertivă și Relații Pozitive",
    description: "Sfaturi pentru îmbunătățirea abilităților de comunicare, empatie și soluționarea conflictelor.",
    icon: Users,
    previewUrl: "https://drive.google.com/file/d/1g6McPJUu3Kn6IeOIAc9wFnx28JDoOmRy/preview",
    viewUrl: "https://drive.google.com/file/d/1g6McPJUu3Kn6IeOIAc9wFnx28JDoOmRy/view?usp=sharing",
  },
  {
    id: "doc7",
    number: 7,
    title: "Sfaturi Utile și Ghid de Suport",
    description: "Materiale suport și recomandări utile pentru o viață școlară echilibrată.",
    icon: Smile,
    previewUrl: "https://drive.google.com/file/d/1-BoMChUoOhLq7wbDT97yqYjs76fDYPJi/preview",
    viewUrl: "https://drive.google.com/file/d/1-BoMChUoOhLq7wbDT97yqYjs76fDYPJi/view?usp=sharing",
  },
];

export const ResurseElevi = () => {
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
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Resurse Deschise
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Ghiduri Elevi
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                  Resurse pentru Elevi
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Materiale informative, ghiduri de învățare, fișe de dezvoltare personală și suport pentru elevi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENT TABS */}
      <section className="mb-10 animate-fade-in-up">
        <Tabs defaultValue="doc1" className="w-full">
          <TabsList className="flex flex-wrap p-1.5 bg-muted/60 rounded-2xl h-auto mb-6 gap-2 border border-border/40 justify-start">
            {docsList.map((doc) => (
              <TabsTrigger
                key={doc.id}
                value={doc.id}
                className="rounded-xl py-2.5 px-3 font-semibold text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all flex items-center gap-2 shrink-0"
              >
                <FileText className="h-3.5 w-3.5 shrink-0" />
                <span>Resursă {doc.number}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {docsList.map((doc) => {
            const Icon = doc.icon;
            return (
              <TabsContent key={doc.id} value={doc.id} className="focus-visible:outline-none">
                <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
                  <CardHeader className="border-b border-border/40 bg-muted/30 p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                            Material Elevi #{doc.number}
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
                          Deschide „{doc.title}”
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 bg-muted/20">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-card border border-border/60 shadow-sm">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-primary shrink-0" />
                        <div>
                          <h4 className="font-heading font-semibold text-foreground">{doc.title}</h4>
                          <p className="text-xs text-muted-foreground">{doc.description}</p>
                        </div>
                      </div>
                      <Button asChild variant="default" className="rounded-xl font-semibold gap-2 shrink-0">
                        <a href={doc.viewUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Deschide „{doc.title}”
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>
    </MainLayout>
  );
};

export default ResurseElevi;
