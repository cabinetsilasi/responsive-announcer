import { BookOpen, ExternalLink, ArrowLeft, Archive } from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RevistaItem {
  id: number;
  title: string;
  previewUrl: string;
  viewUrl: string;
}

const numereConfident: RevistaItem[] = [
  {
    id: 1,
    title: "Revista „Confident” – Numărul 1",
    previewUrl: "https://drive.google.com/file/d/1DQhHLf3dffhuwXmhk5EMerFv0z7B4pwe/preview",
    viewUrl: "https://drive.google.com/file/d/1DQhHLf3dffhuwXmhk5EMerFv0z7B4pwe/view",
  },
  {
    id: 2,
    title: "Revista „Confident” – Numărul 2",
    previewUrl: "https://drive.google.com/file/d/1XYCBDY_zqlS66ktLZe1veaeLxC1a7LGu/preview",
    viewUrl: "https://drive.google.com/file/d/1XYCBDY_zqlS66ktLZe1veaeLxC1a7LGu/view",
  },
  {
    id: 3,
    title: "Revista „Confident” – Numărul 3",
    previewUrl: "https://drive.google.com/file/d/1bRRCClkwMrCfH7nZKZgZoIr2yXxG0lTB/preview",
    viewUrl: "https://drive.google.com/file/d/1bRRCClkwMrCfH7nZKZgZoIr2yXxG0lTB/view",
  },
  {
    id: 4,
    title: "Revista „Confident” – Numărul 4",
    previewUrl: "https://drive.google.com/file/d/1CjJJw6ijRAxUBZlxGJgTpSH2GW6xc_3J/preview",
    viewUrl: "https://drive.google.com/file/d/1CjJJw6ijRAxUBZlxGJgTpSH2GW6xc_3J/view",
  },
  {
    id: 5,
    title: "Revista „Confident” – Numărul 5",
    previewUrl: "https://drive.google.com/file/d/1opKfrYA0163WGM_i8vSisj7GOWQCJeJT/preview",
    viewUrl: "https://drive.google.com/file/d/1opKfrYA0163WGM_i8vSisj7GOWQCJeJT/view",
  },
];

const RevistaConfident = () => {
  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="mb-8 animate-fade-in-up">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <Archive className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                  Arhiva Revistei „Confident”
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl">
                  Colecția completă a numerelor anterioare ale revistei „Confident” publicată de Centrul Județean de Asistență Psihopedagogică (CJAP-BN).
                </p>
              </div>
            </div>
            <Button asChild variant="secondary" className="rounded-xl shadow-md gap-2 shrink-0 self-start sm:self-center">
              <Link to="/revista">
                <ArrowLeft className="h-4 w-4" />
                Înapoi la Revista CJRAE-BN
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* LISTA NUMERELOR CONFIDENT */}
      <section className="space-y-10 mb-12">
        {numereConfident.map((item, idx) => (
          <Card key={item.id} className="rounded-3xl border-border/60 shadow-lg overflow-hidden animate-fade-in-up" style={{ animationDelay: `${idx * 80}ms` }}>
            <CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle className="flex items-center gap-2 font-heading text-lg md:text-xl">
                <BookOpen className="h-5 w-5 text-primary shrink-0" />
                {item.title}
              </CardTitle>
              <Button variant="outline" size="sm" asChild className="rounded-xl gap-2 text-primary border-primary/30 hover:bg-primary/10 shrink-0">
                <a href={item.viewUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Deschide pe ecran complet
                </a>
              </Button>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 bg-muted/20">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] min-h-[400px] md:min-h-[550px] rounded-2xl overflow-hidden border border-border/50 shadow-inner bg-card">
                <iframe
                  src={item.previewUrl}
                  className="w-full h-full border-0"
                  allow="autoplay"
                  title={item.title}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </MainLayout>
  );
};

export default RevistaConfident;
