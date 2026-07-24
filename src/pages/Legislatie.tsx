import { useState } from "react";
import { 
  Scale, 
  FileText, 
  ExternalLink, 
  Search, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LawItem {
  id: number;
  title: string;
  code: string;
  category: "Legislație CJRAE" | "Metodologii & Ordine";
  description: string;
  url: string;
}

const lawsList: LawItem[] = [
  {
    id: 1,
    title: "Legea Educației Naționale Nr. 1/2011",
    code: "LEGEA 1/2011",
    category: "Legislație CJRAE",
    description: "Cadrul legislativ fundamental care reglementează sistemul național de învățământ din România.",
    url: "https://docs.google.com/file/d/0B2L4fwo28RpNSHR1MFZZOTZYUE0/edit?usp=sharing",
  },
  {
    id: 2,
    title: "Regulamentul privind organizarea și funcționarea CJRAE",
    code: "OMECTS 5555/2011",
    category: "Legislație CJRAE",
    description: "Ordin privind aprobarea Regulamentului de organizare și funcționare a centrelor județene de resurse și asistență educațională.",
    url: "https://docs.google.com/file/d/0B2L4fwo28RpNTUgwb0tmSHN4c2c/edit?usp=sharing",
  },
  {
    id: 3,
    title: "Metodologia privind evaluarea, asistența psihoeducațională și orientarea școlară pentru copii cu CES",
    code: "OMECTS 6552/2011",
    category: "Metodologii & Ordine",
    description: "Metodologie privind evaluarea, asistența psihoeducațională, orientarea școlară și orientarea profesională a copiilor cu cerințe educaționale speciale.",
    url: "https://docs.google.com/file/d/0B2L4fwo28RpNSmNKbG5NbTRtNnM/edit?usp=sharing",
  },
  {
    id: 4,
    title: "Organizarea serviciilor de sprijin educațional pentru copiii cu CES integrați în învățământul de masă",
    code: "OMECTS 5574/2011",
    category: "Metodologii & Ordine",
    description: "Norme privind serviciile de sprijin educațional destinate elevilor cu CES din școlile de masă.",
    url: "https://docs.google.com/file/d/0B2L4fwo28RpNaWp0S01Zdkc1c28/edit?usp=sharing",
  },
  {
    id: 5,
    title: "Regulamentul de Organizare și Funcționare al Învățământului Special și Special Integrat",
    code: "ORDIN NR. 5573/2011",
    category: "Legislație CJRAE",
    description: "Norme și reglementări specifice privind învățământul special și special integrat.",
    url: "https://www.dropbox.com/s/hiegtqengic8l9r/39.%205573_Inv.%20special.pdf",
  },
  {
    id: 6,
    title: "Metodologia-cadru privind școlarizarea la domiciliu și în spitale",
    code: "ORDIN NR. 5575/2011",
    category: "Metodologii & Ordine",
    description: "Organizarea grupelor/claselor în spitale și școlarizarea la domiciliu pentru copiii nedeplasabili.",
    url: "https://www.dropbox.com/s/qkw055g1nqr8d4y/Ordinul%20MECTS%20nr.%205575%20din%202011%20%28Metodologie%20scolarizare%20la%20domiciliu%29.pdf",
  },
  {
    id: 7,
    title: "Metodologia-cadru privind școlarizarea la domiciliu (Actualizare)",
    code: "OMECS NR. 5086",
    category: "Metodologii & Ordine",
    description: "Norme metodologice suplimentare privind școlarizarea la domiciliu și grupele din unități medicale.",
    url: "http://www.cmbrae.ro/2017/wp-content/uploads/OMECS_NR_5086-SCOLARIZARE-DOMICILIU.pdf",
  },
  {
    id: 8,
    title: "Metodologia pentru asigurarea suportului necesar elevilor cu tulburări de învățare (TSI)",
    code: "OMECS NR. 3124",
    category: "Metodologii & Ordine",
    description: "Proceduri de sprijin și adaptare curriculară pentru elevii cu tulburări specifice de învățare.",
    url: "http://www.cmbrae.ro/2017/wp-content/uploads/OMECS_NR_3124-TSI.pdf",
  },
  {
    id: 9,
    title: "Regulamentul-cadru de organizare și funcționare a unităților de învățământ preuniversitar (ROFUIP)",
    code: "OMENCS NR. 5079/2016",
    category: "Legislație CJRAE",
    description: "Regulament-cadru privind funcționarea unităților de învățământ preuniversitar.",
    url: "http://www.cmbrae.ro/2017/wp-content/uploads/OMENCS-nr.5079.2016-ROFUIP.pdf",
  },
  {
    id: 10,
    title: "Strategia Națională pentru Sănătatea Mintală a Copilului și Adolescentului",
    code: "HG NR. 889/2016",
    category: "Legislație CJRAE",
    description: "Hotărâre de Guvern privind aprobarea strategiei naționale în domeniul sănătății mintale a tinerilor.",
    url: "http://www.cmbrae.ro/2017/wp-content/uploads/HG_889_2016.pdf",
  },
  {
    id: 11,
    title: "Metodologia integrată pentru încadrarea copiilor cu dizabilități în grad de handicap",
    code: "ORDIN COMUN NR. 5805/2016",
    category: "Metodologii & Ordine",
    description: "Ordin comun al MMFPSPV, MS și MENCS privind evaluarea și intervenția integrată.",
    url: "http://www.cmbrae.ro/2017/wp-content/uploads/OMECS-5805_NOV_2016.pdf",
  },
  {
    id: 12,
    title: "Metodologie mobilitate personal didactic",
    code: "MOBILITATE 2014-2015",
    category: "Metodologii & Ordine",
    description: "Metodologia-cadru privind mobilitatea personalului didactic din învățământul preuniversitar.",
    url: "/DOCUMENTE/Metodologie mobilitate de personal didactic 2014-2015.pdf",
  },
];

export const Legislatie = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("toate");

  const filteredLaws = lawsList.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedCategory === "toate") return matchesSearch;
    return matchesSearch && item.category === selectedCategory;
  });

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
                <Scale className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Resurse Deschise
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Cadrul Normativ
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                  Legislație Specifică CJRAE
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Ordine de ministru, metodologii, regulamente și legi privind organizarea asistenței psihopedagogice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="mb-8 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-md p-6 bg-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Caută lege, ordin sau articol..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-primary"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
              <Button
                variant={selectedCategory === "toate" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("toate")}
                className="rounded-xl text-xs"
              >
                Toate Documentele ({lawsList.length})
              </Button>
              <Button
                variant={selectedCategory === "Legislație CJRAE" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("Legislație CJRAE")}
                className="rounded-xl text-xs"
              >
                Legislație CJRAE
              </Button>
              <Button
                variant={selectedCategory === "Metodologii & Ordine" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("Metodologii & Ordine")}
                className="rounded-xl text-xs"
              >
                Metodologii & Ordine
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* LAWS LIST GRID */}
      <section className="mb-12 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLaws.map((law) => (
            <Card
              key={law.id}
              className="rounded-3xl border-border/60 shadow-md hover:shadow-xl transition-all duration-300 bg-card overflow-hidden flex flex-col justify-between"
            >
              <CardHeader className="p-6 pb-4">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <Badge variant="outline" className="border-primary/30 text-primary font-mono text-xs">
                    {law.code}
                  </Badge>
                  <Badge variant="secondary" className="bg-muted text-muted-foreground border-none text-xs">
                    {law.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-heading font-bold text-foreground leading-snug">
                  {law.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed mt-2">
                  {law.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <Button
                  asChild
                  variant="default"
                  className="w-full rounded-xl font-semibold gap-2 shadow-sm"
                >
                  <a href={law.url} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    Accesează Documentul Oficial
                    <ExternalLink className="h-3.5 w-3.5 opacity-70 ml-auto" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Legislatie;
