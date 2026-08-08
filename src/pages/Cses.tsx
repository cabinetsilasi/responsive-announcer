import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  HeartHandshake, 
  ShieldCheck, 
  MessageSquare, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  UserCheck, 
  Stethoscope, 
  PhoneCall, 
  FileText,
  Building2,
  Compass
} from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Cses = () => {
  const coordinator = {
    name: "prof. Harap Cristina",
    role: "Coordonator CSES – Servicii de Consiliere Școlară și Psihologică",
    institution: "CJRAE Bistrița-Năsăud",
    email: "consiliere_bn@cjraebistrita.ro",
    phoneSecretariat: "0263 214 161",
    emailInstitution: "cjrae_bn@yahoo.com",
    address: "Str. Axente Sever nr. 1, Sc. C, parter, Bistrița, jud. Bistrița-Năsăud",
  };

  const mainActivities = [
    {
      icon: MessageSquare,
      title: "Consiliere școlară și psihologică",
      subtitle: "Asistență psihopedagogică & suport emoțional",
      description:
        "Îndrumarea, sprijinul și consilierea elevilor, părinților și cadrelor didactice desfășurate prin rețeaua cabinetelor școlare și interșcolare de asistență psihopedagogică din județ.",
      highlights: [
        "Dezvoltarea abilităților socio-emoționale și a stării de bine",
        "Consiliere privind cariera și dezvoltarea personală",
        "Prevenirea și intervenția în situații de criză sau bullying",
        "Asistență psihopedagogică pentru părinți și profesori"
      ],
      color: "from-blue-500/10 to-indigo-500/10 text-primary border-primary/20",
    },
    {
      icon: Stethoscope,
      title: "Terapie logopedică",
      subtitle: "Corectarea tulburărilor de limbaj & comunicare",
      description:
        "Depistarea, evaluarea complexă, prevenirea și corectarea tulburărilor de limbaj și de comunicare la copiii preșcolari și școlari integrați în învățământul de masă.",
      highlights: [
        "Evaluarea capacităților de comunicare și vorbire",
        "Terapie individuală și de grup în cabinetele logopedice",
        "Corectarea dislaliei, bâlbâielii, dislexiei și disgrafiei",
        "Consilierea familiei privind stimularea limbajului"
      ],
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-500/20",
    },
    {
      icon: HeartHandshake,
      title: "Sprijin educațional și mediere",
      subtitle: "Incluziune școlară & prevenirea abandonului",
      description:
        "Asigurarea sprijinului educațional specializat pentru elevii cu Cerințe Educaționale Speciale (CES) integrați în școlile de masă și sprijinirea elevilor aflați în risc de abandon școlar.",
      highlights: [
        "Adaptare curriculară și planuri de servicii individualizate",
        "Asistență directă prin profesori de sprijin și itineranți",
        "Prevenirea și combaterea riscului de părăsire timpurie a școlii",
        "Mediere educațională în relația școală-familie-comunitate"
      ],
      color: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-500/20",
    },
  ];

  const staffCategories = [
    {
      icon: UserCheck,
      title: "Profesori-consilieri școlari și psihologi",
      description:
        "Specialiști care activează în cabinetele școlare de asistență psihopedagogică, oferind consiliere individuală, de grup și dezvoltare personală.",
    },
    {
      icon: MessageSquare,
      title: "Profesori-logopezi",
      description:
        "Cadre didactice specializate în psihopedagogie specială și logopedie care desfășoară terapii de recuperare a vorbirii în cabinetele logopedice interșcolare.",
    },
    {
      icon: Users,
      title: "Profesori itineranți, de sprijin și mediatori",
      description:
        "Personal didactic de sprijin care asistă direct elevii cu CES integrați în clasele de masă și mediatori școlari ce facilitează accesul egal la educație.",
    },
  ];

  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur shrink-0 mt-1">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Structură Funcțională CJRAE-BN
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                  CSES - Servicii Educaționale Specializate
                </h1>
                <p className="mt-3 text-primary-foreground/90 max-w-3xl text-base md:text-lg leading-relaxed">
                  Compartimentul de Servicii Educaționale Specializate coordonează, monitorizează și evaluează activitățile de consiliere psihopedagogică, terapie logopedică și sprijin educațional din județul Bistrița-Năsăud.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-col gap-3 shrink-0">
              <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-md font-semibold rounded-xl gap-2">
                <a href="#coordonator">
                  <UserCheck className="h-4 w-4" />
                  Contact Coordonator
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-white/15 text-white border-white/30 hover:bg-white/25 rounded-xl gap-2">
                <Link to="/retea-cabinete">
                  <Building2 className="h-4 w-4" />
                  Rețea Cabinete
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITIA SI SINTEZA DIN LEGE */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-gradient-to-r from-primary/5 via-card to-accent/5 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <Badge variant="outline" className="mb-2 border-primary/30 text-primary font-medium">
                Cadrul Legislativ & Funcțional
              </Badge>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                Ce este Compartimentul CSES?
              </h2>
              <blockquote className="text-base md:text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4 py-1">
                „Compartimentul de Servicii Educaționale Specializate (CSES) este o structură funcțională din cadrul Centrelor Județene de Resurse și Asistență Educațională (CJRAE) care asigură coordonarea, monitorizarea și evaluarea activităților de consiliere psihopedagogică, terapie logopedică și sprijin educațional.”
              </blockquote>
            </div>
          </div>
        </Card>
      </section>

      {/* SECTIUNE COORDONATOR */}
      <section id="coordonator" className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-heading font-bold text-foreground">Coordonarea Compartimentului</h2>
        </div>

        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
          <CardHeader className="bg-muted/30 border-b border-border/40 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-heading text-2xl font-bold shrink-0 shadow-md">
                  HC
                </div>
                <div>
                  <Badge variant="outline" className="mb-1 border-primary/30 text-primary font-semibold">
                    Coordonator CSES
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {coordinator.name}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground mt-0.5">
                    {coordinator.role}
                  </CardDescription>
                </div>
              </div>

              <Button asChild variant="default" className="rounded-xl font-semibold gap-2 shrink-0">
                <a href={`mailto:${coordinator.email}`}>
                  <Mail className="h-4 w-4" />
                  Trimite e-mail
                </a>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-card">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border/50">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">E-mail Coordonator</h4>
                <a href={`mailto:${coordinator.email}`} className="text-foreground font-semibold hover:text-primary transition-colors text-base">
                  {coordinator.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border/50">
              <Building2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Instituție</h4>
                <p className="text-foreground font-semibold text-base">{coordinator.institution}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border/50">
              <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Secretariat CJRAE-BN</h4>
                <a href={`tel:${coordinator.phoneSecretariat}`} className="text-foreground font-semibold hover:text-primary transition-colors text-base">
                  {coordinator.phoneSecretariat}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border/50">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Adresă Sediul Central</h4>
                <p className="text-foreground font-medium text-sm">{coordinator.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ACTIVITATI PRINCIPALE (3 PILONI) */}
      <section className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-heading font-bold text-foreground">Activitățile Principale ale CSES</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {mainActivities.map((act, idx) => {
            const IconComponent = act.icon;
            return (
              <Card
                key={act.title}
                className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader className={`bg-gradient-to-br ${act.color} p-6 border-b`}>
                  <div className="h-12 w-12 rounded-2xl bg-card shadow-sm flex items-center justify-center mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading font-bold text-foreground">
                    {act.title}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium text-muted-foreground mt-0.5">
                    {act.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {act.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-border/40">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">Direcții & Acțiuni:</h4>
                    {act.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* PERSONAL IMPLICAT */}
      <section className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-heading font-bold text-foreground">Personalul Implicat în CSES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staffCategories.map((staff, idx) => {
            const StaffIcon = staff.icon;
            return (
              <Card key={staff.title} className="rounded-3xl border-border/60 shadow-md bg-card p-6 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <StaffIcon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {staff.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {staff.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* INTERCONECTARE CU CEOSP SI CUM EI LEGĂTURA (2 CARDURI INFORMATIVE) */}
      <section className="mb-12 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARD CEOSP */}
          <Card className="rounded-3xl border-border/60 shadow-lg bg-gradient-to-br from-card via-card to-primary/5 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <Compass className="h-5 w-5" />
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  Compartiment Frate
                </Badge>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
                Despre Compartimentul CEOSP
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Celălalt compartiment principal din cadrul CJRAE este <strong>CEOSP</strong> (Compartimentul de Evaluare și Orientare Școlară și Profesională), care se ocupă cu evaluarea complexă și eliberarea certificatului de orientare școlară pentru copiii cu cerințe educaționale speciale (CES).
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-xl font-semibold gap-2 self-start border-primary/30 text-primary hover:bg-primary/10">
              <Link to="/ceosp">
                Află mai multe despre CEOSP
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Card>

          {/* CARD CONTACT CABINETE */}
          <Card className="rounded-3xl border-border/60 shadow-lg bg-gradient-to-br from-card via-card to-secondary/10 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-secondary/20 text-secondary-foreground flex items-center justify-center">
                  <PhoneCall className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="outline" className="border-secondary/40 text-foreground">
                  Asistență & Acces Servicii
                </Badge>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
                Cum puteți lua legătura cu un cabinet?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Fiecare școală sau liceu din județ dispune de acces la un cabinet de consiliere sau logopedie. Părinții, elevii și cadrele didactice pot beneficia de consultații gratuite contactând direct profesorul-consilier din școală sau sediul CJRAE-BN.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="default" className="rounded-xl font-semibold gap-2">
                <Link to="/retea-cabinete">
                  Rețeaua de Cabinete
                  <Building2 className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-xl font-semibold gap-2">
                <Link to="/contact">
                  Pagina de Contact
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* QUICK RESURSE LINKS */}
      <section className="mb-10 animate-fade-in-up">
        <div className="rounded-3xl bg-muted/50 border border-border/60 p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Resurse utile gestionate de CSES
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              to="/resurse-elevi-ces"
              className="p-4 rounded-2xl bg-card border border-border/60 text-center hover:border-primary hover:shadow-md transition-all group"
            >
              <Users className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-foreground group-hover:text-primary">Resurse Elevi CES</span>
            </Link>
            <Link
              to="/resurse-logopedie"
              className="p-4 rounded-2xl bg-card border border-border/60 text-center hover:border-primary hover:shadow-md transition-all group"
            >
              <Stethoscope className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-foreground group-hover:text-primary">Resurse Logopedie</span>
            </Link>
            <Link
              to="/resurse-parinti"
              className="p-4 rounded-2xl bg-card border border-border/60 text-center hover:border-primary hover:shadow-md transition-all group"
            >
              <HeartHandshake className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-foreground group-hover:text-primary">Resurse Părinți</span>
            </Link>
            <Link
              to="/resurse-profesori"
              className="p-4 rounded-2xl bg-card border border-border/60 text-center hover:border-primary hover:shadow-md transition-all group"
            >
              <GraduationCap className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-foreground group-hover:text-primary">Resurse Profesori</span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cses;
