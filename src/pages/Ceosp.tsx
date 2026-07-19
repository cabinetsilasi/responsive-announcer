import { Users, Mail, Phone, MapPin, Clock, FileText, Download, ExternalLink, ClipboardList, BookOpen, Info } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone?: string;
}

const team: TeamMember[] = [
  {
    name: "Sidor Luciana Maria",
    role: "Profesor consilier CEOSP – atestat în psihopedagogie specială și psihoterapie",
    email: "seospbn@cjraebistrita.ro",
  },
  {
    name: "Mireșan Georgeta",
    role: "Profesor consilier CEOSP – atestat în psihologie educațională, consiliere școlară și vocațională",
    email: "seospbn@cjraebistrita.ro",
  },
  {
    name: "Botiș Ioana",
    role: "Secretar CEOSP",
    email: "seospbn@cjraebistrita.ro",
    phone: "0768 114 788",
  },
];

interface DocItem {
  title: string;
  note?: string;
  href?: string;
  download?: boolean;
}

const dosarDocs: DocItem[] = [
  { title: "Cerere părinte", download: true, href: "https://drive.google.com/uc?export=download&id=1vfdQbXCI8wqFgFGJhVuzpeV657aklWAF" },
  { title: "Copia actului de identitate al copilului (certificat de naștere/carte de identitate)" },
  { title: "Copii ale actelor de identitate ale părinților/reprezentantului legal" },
  { title: "Certificat de căsătorie părinți" },
  { title: "Copia documentului prin care se face dovada că persoana care depune cererea este reprezentantul legal al copilului (hotărâre a instanței/hotărâre a comisiei pentru protecția copilului)" },
  { title: "Ancheta Socială (de la primărie)", download: true, href: "https://drive.google.com/uc?export=download&id=1HPP3iExZHflxw0mKKaH1xT_a3F0iVrPj" },
  { title: "Fișa medicală sintetică (medic de familie)", download: true, href: "https://drive.google.com/uc?export=download&id=1nH8BOg4RyHVepIfMYIm8nfx0dLvIRzE7" },
  { title: "Certificatul medical tip A5 de la medicul de specialitate", note: "cu diagnostic, termen de valabilitate, cod de boală, însoțit de scrisoare medicală sau bilet de ieșire din spital" },
  { title: "Copii ale documentelor medicale adiționale la certificatul medical tip A5 (scrisoare medicală, bilete de externare etc.)" },
  { title: "Evaluare psihologică (psiholog clinician)", download: true, href: "https://drive.google.com/uc?export=download&id=1B16d5xdq-fC6QhKtSZ195sTZVXc30yKf" },
  { title: "Fișa de caracterizare psihopedagogică (de la unitatea de învățământ)", download: true, href: "https://drive.google.com/uc?export=download&id=1aWv1ZtIGxwOToTVrFYDm6k4VldsU5fs4" },
  { title: "Acord pentru prelucrarea datelor personale", download: true, href: "https://drive.google.com/uc?export=download&id=1gfrgc5q_mwkkGNiKVKTPjcOG730L1x9U" },
  { title: "Acord informal", download: true, href: "https://drive.google.com/uc?export=download&id=1ICPMR6LGoXkgsGEn3WCSWWVSaLyB5sgk" },
  { title: "O copie a foii matricole și o adeverință care atestă faptul că elevul este înscris în unitatea de învățământ" },
  { title: "O copie a certificatului de orientare școlară/profesională", note: "pentru elevii care au mai avut certificate de orientare școlară" },
  { title: "Probe curriculare la disciplinele Limba Română/Matematică relevante, la alegerea cadrului didactic" },
  { title: "Plan de Servicii Individualizat (PSI) – cu evoluția elevului", note: "doar pentru elevii care au mai avut certificate de orientare școlară", download: true, href: "https://drive.google.com/uc?export=download&id=1oYqAR_UOGNkPHnc3urtNsYUwyF9o-M_f" },
  { title: "Raport de monitorizare", note: "doar pentru elevii care au mai avut certificate de orientare școlară", download: true, href: "https://drive.google.com/uc?export=download&id=11KXtWAbnwPubZV5oJVOq3odJbacoHywU" },
];

const cosDocs = [
  "Cerere-tip pentru evaluare complexă și orientare școlară și profesională",
  "Copie a certificatului de naștere al copilului sau a actului de identitate",
  "Copii ale actelor de identitate ale părinților/reprezentantului legal",
  "Copie a documentului prin care se face dovada că persoana care semnează cererea este reprezentantul legal al copilului (hotărâre a instanței sau hotărâre a comisiei pentru protecția copilului)",
  "Ancheta socială",
  "Fișa medicală sintetică",
  "Certificatul medical tip A5",
  "Fișa de evaluare psihologică",
  "Fișa psihopedagogică",
  "Copie a foii matricole/adeverință care atestă înscrierea copilului în unitatea de învățământ",
  "Copie a ultimului certificat de orientare școlară și profesională, la reorientare",
];

const Ceosp = () => {
  return (
    <MainLayout>
      {/* HERO */}
      <section className="mb-8 animate-fade-in-up">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative flex items-center gap-4">
            <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <ClipboardList className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                CEOSP CJRAE-BN
              </h1>
              <p className="mt-2 text-primary-foreground/90 max-w-3xl">
                Compartimentul de Evaluare și Orientare Școlară și Profesională –
                servicii de evaluare, asistență psihoeducațională și orientare
                pentru copiii, elevii și tinerii cu cerințe educaționale speciale (CES).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ECHIPA */}
      <section className="mb-10 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-heading font-bold text-foreground">Echipa CEOSP</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {team.map((m, idx) => (
            <Card
              key={m.name}
              className="rounded-3xl border-border/60 bg-gradient-to-br from-card via-card to-muted/40 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <a href={`mailto:${m.email}`} className="flex items-center gap-2 text-primary hover:underline">
                    <Mail className="h-4 w-4 shrink-0" />
                    <span className="truncate">{m.email}</span>
                  </a>
                  {m.phone && (
                    <a href={`tel:${m.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 text-foreground/80 hover:text-primary">
                      <Phone className="h-4 w-4 shrink-0" />
                      {m.phone}
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* INFO GENERALĂ */}
      <section className="mb-10 grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-in-up">
        <Card className="rounded-3xl lg:col-span-2 border-border/60 shadow-md">
          <CardHeader className="rounded-t-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
            <CardTitle className="flex items-center gap-2 font-heading">
              <Info className="h-5 w-5 text-primary" />
              Despre CEOSP
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4 text-sm md:text-base leading-relaxed text-foreground/85">
            <p>
              Compartimentul de Evaluare, Orientare Școlară și Profesională (CEOSP) funcționează conform dispozițiilor
              <strong> Ordinului nr. 5701/31.07.2024</strong> emis de Ministerul Educației, publicat în Monitorul Oficial nr. 792 din 12 august 2024.
            </p>
            <p>
              <strong>CEOSP Bistrița-Năsăud</strong> oferă servicii de evaluare, de asistență psihoeducațională și de
              orientare școlară și profesională a copiilor, elevilor și tinerilor cu cerințe educaționale speciale (CES).
            </p>
            <p>
              Evaluarea este un proces complex, continuu și dinamic, realizat pentru a cunoaște în profunzime și a estima
              particularitățile dezvoltării, limitele și potențialul copilului/elevului/tânărului cu CES. Scopul evaluării
              este de a stabili dacă elevul are sau nu CES, în vederea orientării școlare și profesionale.
            </p>
            <p>
              Evaluarea se face din punct de vedere <strong>medical, psihologic, educațional și social</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 shadow-md bg-gradient-to-br from-secondary/10 via-card to-accent/10">
          <CardHeader className="rounded-t-3xl bg-gradient-to-r from-secondary/20 to-accent/20">
            <CardTitle className="flex items-center gap-2 font-heading">
              <Clock className="h-5 w-5 text-primary" />
              Program depunere dosare
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-3 text-sm">
            <div className="rounded-2xl bg-card/70 p-4 border border-border/50">
              <p className="font-semibold text-foreground">Luni – Joi</p>
              <p className="text-primary font-heading text-lg">08:00 – 13:00</p>
            </div>
            <div className="flex items-start gap-2 text-foreground/85">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <p>
                CEOSP Bistrița-Năsăud, <br />
                Str. Axente Sever nr. 1, Sc. C
              </p>
            </div>
            <Badge variant="secondary" className="mt-2">CES · Evaluare · Orientare</Badge>
          </CardContent>
        </Card>
      </section>

      {/* DOCUMENTE DOSAR */}
      <section className="mb-10 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-heading font-bold text-foreground">
            Documente necesare pentru evaluarea elevilor cu CES
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          La depunerea dosarului. Documentele marcate cu buton „Descarcă" au model tipizat disponibil.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dosarDocs.map((doc, idx) => (
            <Card
              key={doc.title}
              className="rounded-3xl border-border/60 bg-gradient-to-br from-card via-card to-muted/30 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 30}ms` }}
            >
              <CardContent className="p-5 flex items-start gap-4">
                <div className="shrink-0 h-11 w-11 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-sm md:text-base leading-snug text-foreground">
                    {doc.title}
                  </h3>
                  {doc.note && (
                    <p className="mt-1 text-xs text-muted-foreground italic">{doc.note}</p>
                  )}
                  {doc.download && doc.href && (
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Descarcă formularul
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* COS – Art.45 */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-md">
          <CardHeader className="rounded-t-3xl bg-gradient-to-r from-accent/15 via-secondary/15 to-primary/15">
            <CardTitle className="flex items-center gap-2 font-heading">
              <BookOpen className="h-5 w-5 text-primary" />
              Certificat de orientare școlară și profesională (Art. 45)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-sm text-foreground/85 mb-4">
              Pentru obținerea certificatului de orientare școlară și profesională, părinții/reprezentantul legal depun la
              sediul CJRAE, la secretarul COSP, cel puțin următoarele documente lizibile (conform <strong>OMECS 5805/nov. 2016</strong>):
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {cosDocs.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85 rounded-xl p-3 bg-muted/40 border border-border/40">
                  <span className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-primary/15 text-primary text-xs font-semibold flex items-center justify-center">
                    {String.fromCharCode(97 + i)}
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* RESURSE */}
      <section className="animate-fade-in-up">
        <a
          href="#"
          className="group block rounded-3xl overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-accent p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
              <BookOpen className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-heading font-bold text-primary-foreground">
                Resurse educaționale deschise pentru elevii cu CES
              </h3>
              <p className="text-primary-foreground/85 text-sm mt-1">
                Materiale și resurse utile pentru elevi, părinți și cadre didactice.
              </p>
            </div>
            <ExternalLink className="h-6 w-6 text-primary-foreground opacity-80 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      </section>
    </MainLayout>
  );
};

export default Ceosp;
