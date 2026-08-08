import { useState } from "react";
import { Users, Mail, Phone, Search, Building2, UserCheck, Shield, Award, LayoutGrid, Table as TableIcon } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  category: "Conducere" | "Coordonare" | "CEOSP" | "Administrativ";
  isDirector?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Toader Anca-Gabriela",
    role: "Director CJRAE-BN",
    phone: "0753 418 083",
    email: "anca.toader@cjraebistrita.ro",
    category: "Conducere",
    isDirector: true,
  },
  {
    id: "2",
    name: "Harap Cristina",
    role: "Coordonator Servicii de Consiliere școlară și Psihologică",
    phone: "-",
    email: "consiliere_bn@cjraebistrita.ro",
    category: "Coordonare",
  },
  {
    id: "3",
    name: "Armenean Claudia",
    role: "Coordonator Servicii de Terapie Logopedică",
    phone: "0771 576 481",
    email: "armeneanclaudia82@gmail.com",
    category: "Coordonare",
  },
  {
    id: "4",
    name: "Bucilă Linda Teodora",
    role: "Coordonator Servicii de sprijin",
    phone: "-",
    email: "linda.bucila@cjraebistrita.ro",
    category: "Coordonare",
  },
  {
    id: "5",
    name: "Botiș Ioana",
    role: "Secretar CEOSP",
    phone: "0768 114 788",
    email: "seospbn@cjraebistrita.ro",
    category: "CEOSP",
  },
  {
    id: "6",
    name: "Sidor Luciana Maria",
    role: "Profesor Consilier CEOSP",
    phone: "0745 692 655",
    email: "seospbn@cjraebistrita.ro",
    category: "CEOSP",
  },
  {
    id: "7",
    name: "Mireșan Georgeta",
    role: "Profesor Consilier CEOSP",
    phone: "0740 665 851",
    email: "seospbn@cjraebistrita.ro",
    category: "CEOSP",
  },
  {
    id: "8",
    name: "Vișovan Nina-Irina",
    role: "Administrator financiar",
    phone: "0785 182 065",
    email: "cfcas.cjraebn@gmail.com",
    category: "Administrativ",
  },
  {
    id: "9",
    name: "Pantea Olimpia",
    role: "Secretar CJRAE-BN",
    phone: "-",
    email: "cjraebn@cjraebistrita.ro",
    category: "Administrativ",
  },
];

const categoryBadgeVariant: Record<string, "default" | "secondary" | "outline"> = {
  Conducere: "default",
  Coordonare: "secondary",
  CEOSP: "outline",
  Administrativ: "outline",
};

export const Echipa = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Toate");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const categories = ["Toate", "Conducere", "Coordonare", "CEOSP", "Administrativ"];

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm);

    const matchesCategory =
      activeCategory === "Toate" || member.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="mb-8 animate-fade-in-up">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative flex items-center gap-4">
            <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur shrink-0">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                  Despre Noi
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Echipa CJRAE-BN
              </h1>
              <p className="mt-2 text-primary-foreground/90 max-w-3xl text-base md:text-lg">
                Echipa noastră de coordonatori, profesori consilieri, logopezi și personal administrativ dedicat sprijinirii educaționale și psihopedagogice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up">
        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-foreground">{teamMembers.length}</p>
              <p className="text-xs text-muted-foreground font-medium">Membri Echipa</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-secondary/20 text-primary flex items-center justify-center shrink-0">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-foreground">4</p>
              <p className="text-xs text-muted-foreground font-medium">Departamente & Servicii</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-accent/20 text-primary flex items-center justify-center shrink-0">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-foreground">100%</p>
              <p className="text-xs text-muted-foreground font-medium">Dedicare & Profesionalism</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CONTROLS & FILTER SECTION */}
      <section className="mb-8 space-y-4 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-md">
          <CardHeader className="p-6 pb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  Personalul CJRAE-BN
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Căutați sau filtrați după departament pentru a găsi rapid datele de contact.
                </p>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-muted p-1 rounded-xl self-start md:self-auto">
                <Button
                  variant={viewMode === "cards" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("cards")}
                  className="rounded-lg text-xs gap-1.5"
                >
                  <LayoutGrid className="h-4 w-4" />
                  Carduri
                </Button>
                <Button
                  variant={viewMode === "table" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("table")}
                  className="rounded-lg text-xs gap-1.5"
                >
                  <TableIcon className="h-4 w-4" />
                  Tabel
                </Button>
              </div>
            </div>

            {/* Search and Category Filters */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Căutare după nume, funcție, telefon sau e-mail..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-xl bg-background border-border/60"
                />
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat)}
                    className="rounded-xl text-xs whitespace-nowrap"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 pt-2">
            {filteredMembers.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-3 opacity-40" />
                <p className="text-base font-medium">Nu a fost găsit niciun membru conform căutării.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("Toate");
                  }}
                  className="mt-2 text-primary"
                >
                  Resetează filtrele
                </Button>
              </div>
            ) : viewMode === "cards" ? (
              /* CARDS GRID VIEW */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                  <Card
                    key={member.id}
                    className={`rounded-2xl border transition-all duration-200 hover:shadow-lg flex flex-col ${member.isDirector
                        ? "border-primary/50 bg-gradient-to-br from-primary/5 via-card to-card shadow-md"
                        : "border-border/60 hover:border-primary/40 bg-card"
                      }`}
                  >
                    <CardHeader className="p-5 pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-12 w-12 rounded-2xl flex items-center justify-center font-bold text-base font-heading ${member.isDirector
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "bg-primary/10 text-primary"
                              }`}
                          >
                            {getInitials(member.name)}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h3 className="font-heading font-bold text-base text-foreground">
                                {member.name}
                              </h3>
                              {member.isDirector && (
                                <span title="Director">
                                  <Award className="h-4 w-4 text-primary shrink-0" />
                                </span>
                              )}
                            </div>
                            <Badge
                              variant={categoryBadgeVariant[member.category] || "outline"}
                              className="mt-1 text-[11px] font-normal"
                            >
                              {member.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-5 pt-2 space-y-4 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-foreground/90 font-medium leading-snug">
                          {member.role}
                        </p>
                      </div>

                      <div className="space-y-2 pt-3 border-t border-border/40 text-xs">
                        {/* Phone */}
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary shrink-0" />
                          {member.phone !== "-" ? (
                            <a
                              href={`tel:${member.phone.replace(/\s+/g, "")}`}
                              className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                              {member.phone}
                            </a>
                          ) : (
                            <span className="text-muted-foreground font-mono">-</span>
                          )}
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary shrink-0" />
                          <a
                            href={`mailto:${member.email}`}
                            className="font-medium text-primary hover:underline break-all"
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>

                      {/* Quick Action Button */}
                      <div className="pt-2">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full rounded-xl text-xs gap-1.5 hover:bg-primary hover:text-primary-foreground border-border/60 transition-colors"
                        >
                          <a href={`mailto:${member.email}`}>
                            <Mail className="h-3.5 w-3.5" />
                            Trimite e-mail
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* TABLE VIEW */
              <div className="rounded-2xl border border-border/60 overflow-hidden shadow-inner">
                <Table>
                  <TableHeader className="bg-muted/60">
                    <TableRow>
                      <TableHead className="font-heading font-bold text-foreground py-3.5">Nume</TableHead>
                      <TableHead className="font-heading font-bold text-foreground py-3.5">Funcția</TableHead>
                      <TableHead className="font-heading font-bold text-foreground py-3.5">Telefon</TableHead>
                      <TableHead className="font-heading font-bold text-foreground py-3.5">E-mail</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMembers.map((member) => (
                      <TableRow key={member.id} className="hover:bg-muted/40 transition-colors">
                        <TableCell className="font-semibold text-foreground py-4">
                          <div className="flex items-center gap-2">
                            <span>{member.name}</span>
                            {member.isDirector && (
                              <Badge variant="default" className="text-[10px] px-1.5 py-0">
                                Director
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-foreground/90 py-4 max-w-xs">{member.role}</TableCell>
                        <TableCell className="font-medium py-4">
                          {member.phone !== "-" ? (
                            <a
                              href={`tel:${member.phone.replace(/\s+/g, "")}`}
                              className="text-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                            >
                              <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                              <span>{member.phone}</span>
                            </a>
                          ) : (
                            <span className="text-muted-foreground font-mono">-</span>
                          )}
                        </TableCell>
                        <TableCell className="py-4">
                          <a
                            href={`mailto:${member.email}`}
                            className="text-primary font-medium hover:underline flex items-center gap-1.5 break-all"
                          >
                            <Mail className="h-3.5 w-3.5 shrink-0" />
                            <span>{member.email}</span>
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default Echipa;
