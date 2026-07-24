import { 
  HeartHandshake, 
  Users, 
  FileText, 
  ExternalLink, 
  UserCheck, 
  Sparkles, 
  BookOpen 
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CesDoc {
  id: string;
  number: number;
  title: string;
  previewUrl: string;
  viewUrl: string;
}

const cesDocsList: CesDoc[] = [
  {
    id: "ces1",
    number: 1,
    title: "Material Sprijin CES - Partea 1",
    previewUrl: "https://drive.google.com/file/d/12jaOi6lRooaB3Ji5miEec_oVjpXJ-VyI/preview",
    viewUrl: "https://drive.google.com/file/d/12jaOi6lRooaB3Ji5miEec_oVjpXJ-VyI/view?usp=sharing",
  },
  {
    id: "ces2",
    number: 2,
    title: "Material Sprijin CES - Partea 2",
    previewUrl: "https://drive.google.com/file/d/1ogabPXQKzSOvFfN_QUmX0bmDGKjTzMY6/preview",
    viewUrl: "https://drive.google.com/file/d/1ogabPXQKzSOvFfN_QUmX0bmDGKjTzMY6/view?usp=sharing",
  },
  {
    id: "ces3",
    number: 3,
    title: "Material Sprijin CES - Partea 3",
    previewUrl: "https://drive.google.com/file/d/1NPLIMjtJ6rZkv1mOtev3ryYPIRIsApYB/preview",
    viewUrl: "https://drive.google.com/file/d/1NPLIMjtJ6rZkv1mOtev3ryYPIRIsApYB/view?usp=sharing",
  },
  {
    id: "ces4",
    number: 4,
    title: "Material Sprijin CES - Partea 4",
    previewUrl: "https://drive.google.com/file/d/1Yj3MBkNmMOAtvEVzn9c9wUe7bjgtt-gr/preview",
    viewUrl: "https://drive.google.com/file/d/1Yj3MBkNmMOAtvEVzn9c9wUe7bjgtt-gr/view?usp=sharing",
  },
  {
    id: "ces5",
    number: 5,
    title: "Material Sprijin CES - Partea 5",
    previewUrl: "https://drive.google.com/file/d/1gmkf-7FqfONYvQskq7RUKY5PEd-q_Lqu/preview",
    viewUrl: "https://drive.google.com/file/d/1gmkf-7FqfONYvQskq7RUKY5PEd-q_Lqu/view?usp=sharing",
  },
  {
    id: "ces6",
    number: 6,
    title: "Material Sprijin CES - Partea 6",
    previewUrl: "https://drive.google.com/file/d/1voSJzVY-Ds06aBnZTsRmDxMVHeQZ4vJr/preview",
    viewUrl: "https://drive.google.com/file/d/1voSJzVY-Ds06aBnZTsRmDxMVHeQZ4vJr/view?usp=sharing",
  },
  {
    id: "ces7",
    number: 7,
    title: "Material Sprijin CES - Partea 7",
    previewUrl: "https://drive.google.com/file/d/1XVnmIeSQMCsUBaNXU-eO5rNUK_oyYhyo/preview",
    viewUrl: "https://drive.google.com/file/d/1XVnmIeSQMCsUBaNXU-eO5rNUK_oyYhyo/view?usp=sharing",
  },
];

export const ResurseEleviCes = () => {
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
                <HeartHandshake className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Resurse Deschise
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Educație Incluzivă CES
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                  Resurse pentru Elevi cu CES
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Fișe de lucru adaptate, materiale pedagogice și ghiduri specifice pentru copiii cu cerințe educative speciale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORS BADGE SECTION */}
      <section className="mb-8 animate-fade-in-up">
        <Card className="rounded-3xl border-primary/20 bg-gradient-to-r from-primary/5 via-card to-accent/5 shadow-md p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-foreground">
                  Materiale distribuite de specialiștii noștri:
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
                    Prof. consilier școlar Kertesz Carmen
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
                    Prof. consilier școlar Groza Geanina
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* DOCUMENT TABS */}
      <section className="mb-10 animate-fade-in-up">
        <Tabs defaultValue="ces1" className="w-full">
          <TabsList className="flex flex-wrap p-1.5 bg-muted/60 rounded-2xl h-auto mb-6 gap-2 border border-border/40 justify-start">
            {cesDocsList.map((doc) => (
              <TabsTrigger
                key={doc.id}
                value={doc.id}
                className="rounded-xl py-2.5 px-3 font-semibold text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all flex items-center gap-2 shrink-0"
              >
                <FileText className="h-3.5 w-3.5 shrink-0" />
                <span>Material CES {doc.number}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {cesDocsList.map((doc) => (
            <TabsContent key={doc.id} value={doc.id} className="focus-visible:outline-none">
              <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
                <CardHeader className="border-b border-border/40 bg-muted/30 p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                          Fișă Suport CES #{doc.number}
                        </Badge>
                        <CardTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
                          {doc.title}
                        </CardTitle>
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

export default ResurseEleviCes;
