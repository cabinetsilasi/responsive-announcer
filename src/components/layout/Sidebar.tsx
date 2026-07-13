import { Calendar, Bell, User, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

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

export const Sidebar = () => {
  return (
    <aside className="w-full lg:w-80 shrink-0 space-y-6 animate-slide-in-right">
      {/* Announcements Card */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-3xl">
          <CardTitle className="flex items-center gap-2 font-heading">
            <Bell className="h-5 w-5" />
            Anunțuri/Noutăți
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <ScrollArea className="h-[500px]">
            <div className="space-y-3">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="p-4 rounded-2xl bg-gradient-to-br from-muted/80 via-muted to-muted/60 hover:from-primary/10 hover:via-primary/5 hover:to-secondary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <User className="h-4 w-4 text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
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
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {announcement.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {announcement.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Quick Links Card */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-accent to-secondary text-white rounded-t-3xl">
          <CardTitle className="flex items-center gap-2 font-heading">
            <FileText className="h-5 w-5" />
            Acces Rapid
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-2">
            <a
              href="/erasmus"
              className="block p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all group"
            >
              <span className="font-medium text-sm group-hover:translate-x-1 inline-block transition-transform">
                Acreditare Erasmus+
              </span>
            </a>
            <a
              href="/feedback"
              className="block p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all group"
            >
              <span className="font-medium text-sm group-hover:translate-x-1 inline-block transition-transform">
                Chestionar Satisfacție
              </span>
            </a>
            <a
              href="/contact"
              className="block p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all group"
            >
              <span className="font-medium text-sm group-hover:translate-x-1 inline-block transition-transform">
                Contact CJRAE-BN
              </span>
            </a>
          </div>
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
