import { Calendar, Bell, User, FileText, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Announcement {
  id: number;
  title: string;
  date: string;
  author: string;
  badge?: string;
  excerpt: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "Rezultate finale concurs \"Administrator Financiar\"",
    date: "07-05-2025 15:56",
    author: "admin",
    badge: "NOU!",
    excerpt: "Consultați rezultatele finale ale concursului pentru postul de Administrator Financiar."
  },
  {
    id: 2,
    title: "Rezultate interviu concurs \"Administrator Financiar\"",
    date: "05-05-2025 16:15",
    author: "admin",
    badge: "NOU!",
    excerpt: "Rezultatele interviului pentru concursul de Administrator Financiar sunt disponibile."
  },
  {
    id: 3,
    title: "Anunț concurs ocupare funcție",
    date: "07-04-2025 10:58",
    author: "admin",
    excerpt: "Se organizează concurs pentru ocuparea unei funcții în cadrul CJRAE-BN."
  },
  {
    id: 4,
    title: "Campanie facilitare adaptare la grădiniță",
    date: "15-03-2025 09:30",
    author: "admin",
    excerpt: "\"Bine te-am găsit, grădinița!\" - Un proiect inițiat de profesorii consilieri din CJAP BN."
  },
];

const quickLinks = [
  {
    href: "/erasmus",
    label: "Acreditare Erasmus+",
    description:
      "Detalii despre acreditarea Erasmus+ obținută de CJRAE-BN și oportunitățile de mobilitate pentru specialiști.",
    linkLabel: "Vezi detalii acreditare",
  },
  {
    href: "/feedback",
    label: "Chestionar Satisfacție",
    description:
      "Ajută-ne să îmbunătățim serviciile CJRAE-BN completând un scurt chestionar de satisfacție.",
    linkLabel: "Completează chestionarul",
  },
  {
    href: "/contact",
    label: "Contact CJRAE-BN",
    description:
      "Găsește datele de contact, adresa și programul instituției pentru a ne scrie sau vizita.",
    linkLabel: "Deschide pagina de contact",
  },
];

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isAnnouncementsSectionActive =
    isActive("/anunturi") ||
    isActive("/noutati") ||
    location.pathname.startsWith("/anunturi/");

  return (
    <aside className="w-full lg:w-80 shrink-0 space-y-6">
      {/* Announcements Card */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl overflow-hidden">
        <CardHeader
          className={cn(
            "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-3xl transition-all duration-300 hover:brightness-105",
            isAnnouncementsSectionActive && "ring-2 ring-primary ring-offset-2 ring-offset-background shadow-lg"
          )}
        >
          <CardTitle className="flex items-center gap-2 font-heading">
            <Bell className="h-5 w-5" />
            Anunțuri/Noutăți
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <ScrollArea className="h-[420px] lg:h-[500px]">
            <div className="space-y-3">
              {announcements.map((announcement) => {
                const announcementPath = `/anunturi/${announcement.id}`;
                const active = isActive(announcementPath);

                return (
                  <Link
                    key={announcement.id}
                    to={announcementPath}
                    className={cn(
                      "block p-4 rounded-2xl border transition-all duration-300 group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      active
                        ? "bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/10 border-primary ring-1 ring-primary shadow-md"
                        : "bg-gradient-to-br from-muted/80 via-muted to-muted/60 border-border/50 hover:border-primary/40 hover:bg-primary/[0.06] hover:shadow-md hover:-translate-y-0.5"
                    )}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <User className={cn("h-4 w-4 mt-1 shrink-0 transition-colors", active ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-muted-foreground">
                            {announcement.author}
                          </span>
                          {announcement.badge && (
                            <Badge variant="destructive" className="text-xs">
                              {announcement.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-3 w-3 text-muted-foreground shrink-0" />
                          <span className="text-xs text-muted-foreground">
                            {announcement.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h4 className={cn("font-semibold text-sm mb-1 transition-colors line-clamp-2", active ? "text-primary" : "group-hover:text-primary")}>
                      {announcement.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {announcement.excerpt}
                    </p>
                  </Link>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Quick Links Card */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-accent to-secondary text-white rounded-t-3xl transition-all duration-300 hover:brightness-105">
          <CardTitle className="flex items-center gap-2 font-heading">
            <FileText className="h-5 w-5" />
            Acces Rapid
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {quickLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <AccordionItem
                  key={link.href}
                  value={link.href}
                  className={cn(
                    "border rounded-xl px-3 transition-all duration-300",
                    active
                      ? "border-primary bg-primary/5 ring-1 ring-primary/40"
                      : "border-border/60 bg-muted hover:border-primary/30 hover:bg-primary/[0.06]"
                  )}
                >
                  <AccordionTrigger
                    className={cn(
                      "py-3 hover:no-underline text-left font-medium text-sm transition-colors",
                      active ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3">
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      {link.description}
                    </p>
                    <Link
                      to={link.href}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    >
                      {link.linkLabel}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>

      {/* Stats Card */}
      <Card className="shadow-lg">
        <CardContent className="p-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Contor Accesări</p>
            <div className="flex items-center justify-center gap-1">
              {[1, 1, 4, 3, 1, 0, 9].map((digit, index) => (
                <div
                  key={index}
                  className="bg-primary text-primary-foreground w-8 h-10 flex items-center justify-center rounded font-bold text-lg"
                >
                  {digit}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
