import { useState } from "react";
import { 
  FileText, 
  ExternalLink, 
  Search, 
  Filter, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  Sparkles,
  Award
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface StudyItem {
  year: string;
  title: string;
  targetClass?: string;
  url: string;
  isRecent?: boolean;
}

const studiesData: StudyItem[] = [
  {
    year: "2025-2026",
    title: "Studiul OSP clasele a VIII-a (2025-2026)",
    targetClass: "Clasa a VIII-a",
    url: "https://drive.google.com/file/d/14UHNWCzebGuOPr2lS_RnnLd97zPuUKWo/view?usp=sharing",
    isRecent: true,
  },
  {
    year: "2024-2025",
    title: "Studiul OSP clasele a VIII-a (2024-2025)",
    targetClass: "Clasa a VIII-a",
    url: "https://drive.google.com/file/d/1OrUS-DA5wjz1JMEiey2j1xVH-mqcPqCP/view?usp=sharing",
    isRecent: true,
  },
  {
    year: "2023-2024",
    title: "Studiul OSP clasele a VIII-a (2023-2024)",
    targetClass: "Clasa a VIII-a",
    url: "https://drive.google.com/file/d/15HorcaMaMafptvJBZS0oFwxTsmd0jPQN/view?usp=sharing",
  },
  {
    year: "2022-2023",
    title: "Studiul OSP clasele a XII-a (2022-2023)",
    targetClass: "Clasa a XII-a",
    url: "https://drive.google.com/file/d/1iEoTEK0A0nK8nvQiX6UR86EFfa33kiTa/view?usp=sharing",
  },
  {
    year: "2022-2023",
    title: "Studiul OSP clasele a VIII-a (2022-2023)",
    targetClass: "Clasa a VIII-a",
    url: "https://drive.google.com/file/d/1eH2fy70Szi6EpJiF--egJU-j0GY6tQme/view?usp=sharing",
  },
  {
    year: "2021-2022",
    title: "Studiul OSP clasele a VIII-a (2021-2022)",
    targetClass: "Clasa a VIII-a",
    url: "https://bit.ly/3LxqIvT",
  },
  {
    year: "2020-2021",
    title: "Studiul OSP clasele a XII-a (2020-2021)",
    targetClass: "Clasa a XII-a",
    url: "https://drive.google.com/file/d/1ad_bP3e5esqzuFgEXr7MUQWhxgNlwaaD/view?usp=sharing",
  },
  {
    year: "2020-2021",
    title: "Studiul OSP clasele a VIII-a (2020-2021)",
    targetClass: "Clasa a VIII-a",
    url: "https://drive.google.com/file/d/1sVhXJNVxrX8a_lNsk7PJ-j2WSYb-fp09/view?usp=sharing",
  },
  {
    year: "2019-2020",
    title: "Studiul OSP clasele a XII-a (2019-2020)",
    targetClass: "Clasa a XII-a",
    url: "https://drive.google.com/file/d/1myekrHShd66Itz7OliiZn2-HaDEecBiL/view?usp=sharing",
  },
  {
    year: "2019-2020",
    title: "Studiul OSP General (2019-2020)",
    targetClass: "General",
    url: "https://drive.google.com/file/d/1pkk5XJlRtwobMNKh1cqFscbmtFjKPokB/view?usp=sharing",
  },
  {
    year: "2017-2018",
    title: "Studiul OSP (2017-2018)",
    targetClass: "General",
    url: "https://drive.google.com/file/d/1YSdPBbLhlwb9Lvb3zgibL9usvyk-yR26/view?usp=sharing",
  },
  {
    year: "2016-2017",
    title: "Studiul OSP clasele a VIII-a (2016-2017)",
    targetClass: "Clasa a VIII-a",
    url: "/DOCUMENTE/studiu osp 2016 -2017 clasa a- VIII-a.pdf",
  },
  {
    year: "2015-2016",
    title: "Studiul OSP clasele a VIII-a (2015-2016)",
    targetClass: "Clasa a VIII-a",
    url: "/DOCUMENTE/studiu osp 2015 -2016 clasa a VIIIa.pdf",
  },
  {
    year: "2014-2015",
    title: "Studiul OSP (2014-2015)",
    targetClass: "General",
    url: "https://drive.google.com/file/d/0B2L4fwo28RpNZXF1eDFhcy00SHM/view?usp=sharing",
  },
  {
    year: "2013-2014",
    title: "Studiul OSP (2013-2014)",
    targetClass: "General",
    url: "https://drive.google.com/file/d/0B2L4fwo28RpNcFQwdXpfbXExaWc/edit?usp=sharing",
  },
];

export const StudiiCercetari = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("toate");

  const filteredStudies = studiesData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.year.includes(searchTerm);
    if (selectedFilter === "toate") return matchesSearch;
    if (selectedFilter === "viii") return matchesSearch && item.targetClass === "Clasa a VIII-a";
    if (selectedFilter === "xii") return matchesSearch && item.targetClass === "Clasa a XII-a";
    return matchesSearch;
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
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Resurse Deschise
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Orientare Școlară & Profesională
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                  Studii și Cercetări OSP
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Arhiva completă a studiilor de Orientare Școlară și Profesională realizate de CJRAE Bistrița-Năsăud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH SECTION */}
      <section className="mb-8 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-md p-6 bg-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Caută studiu sau an (ex: 2024, clasa VIII)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-xl border-border/60 bg-muted/30 focus-visible:ring-primary"
              />
            </div>

            {/* Filter Badges */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
              <Button
                variant={selectedFilter === "toate" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("toate")}
                className="rounded-xl text-xs"
              >
                Toate Studiile ({studiesData.length})
              </Button>
              <Button
                variant={selectedFilter === "viii" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("viii")}
                className="rounded-xl text-xs"
              >
                Clasa a VIII-a
              </Button>
              <Button
                variant={selectedFilter === "xii" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("xii")}
                className="rounded-xl text-xs"
              >
                Clasa a XII-a
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* RECENT STUDY HIGHLIGHT IFRAME */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
          <CardHeader className="border-b border-border/40 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                    Cel Mai Recent Studiu
                  </Badge>
                  <CardTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
                    Studiul OSP clasele a VIII-a (2025-2026)
                  </CardTitle>
                </div>
              </div>

              <Button
                asChild
                variant="default"
                className="rounded-xl shadow-md font-semibold shrink-0 gap-2"
              >
                <a
                  href="https://drive.google.com/file/d/14UHNWCzebGuOPr2lS_RnnLd97zPuUKWo/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Deschide în Tab Nou
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-2 sm:p-4 md:p-6">
            <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-slate-900/5">
              <iframe
                src="https://drive.google.com/file/d/14UHNWCzebGuOPr2lS_RnnLd97zPuUKWo/preview"
                className="w-full h-full border-0 rounded-2xl"
                allow="autoplay"
                title="Studiul OSP 2025-2026 Preview"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ALL STUDIES LIST GRID */}
      <section className="mb-12 animate-fade-in-up">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Arhiva Studiilor OSP (2013 - 2026)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStudies.map((study, idx) => (
            <Card
              key={idx}
              className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-all duration-300 bg-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {study.year}
                  </Badge>
                  {study.targetClass && (
                    <Badge variant="outline" className="border-border/60 text-xs">
                      {study.targetClass}
                    </Badge>
                  )}
                </div>

                <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">
                  {study.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full rounded-xl text-xs font-semibold border-primary/30 text-primary hover:bg-primary/10 gap-1.5"
                >
                  <a href={study.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Accesează Studiul
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default StudiiCercetari;
