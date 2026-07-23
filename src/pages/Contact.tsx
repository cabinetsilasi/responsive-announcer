import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Clock, User, Calendar, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Vă rugăm să completați toate câmpurile obligatorii.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mesajul dumneavoastră a fost trimis cu succes! Vă vom răspunde în cel mai scurt timp.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
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
              <Phone className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                  Contact & Audiențe
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Contactează-ne
              </h1>
              <p className="mt-2 text-primary-foreground/90 max-w-3xl text-base md:text-lg">
                Există numeroase metode de a ne contacta. Vă stăm la dispoziție pentru informații, asistență educațională și audiențe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-5 flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-foreground">Adresă</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Bistrița, Str. Axente Sever nr. 1, Sc. C, parter
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-5 flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-foreground">Telefon</h3>
              <a
                href="tel:0768114788"
                className="text-xs font-semibold text-primary hover:underline mt-1 block"
              >
                0768 114 788
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-5 flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-foreground">E-mail General</h3>
              <a
                href="mailto:cjraebn@cjraebistrita.ro"
                className="text-xs font-semibold text-primary hover:underline mt-1 block break-all"
              >
                cjraebn@cjraebistrita.ro
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-5 flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-foreground">Website</h3>
              <a
                href="https://www.cjraebistrita.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-primary hover:underline mt-1 block"
              >
                www.cjraebistrita.ro
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* SCHEDULES & AUDIENȚE SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
          <CardHeader className="rounded-t-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                  Orare & Audiențe
                </Badge>
                <CardTitle className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Program cu Publicul & Audiențe
                </CardTitle>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* 1. SECRETARIAT CJRAE-BN */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-card to-primary/5 border border-border/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <User className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="font-heading font-bold text-base text-foreground">Secretariat CJRAE-BN</h3>
                  </div>
                  <p className="text-xs font-semibold text-primary mb-1">Pantea Olimpia</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    E-mail: <a href="mailto:cjraebn@cjraebistrita.ro" className="text-primary hover:underline">cjraebn@cjraebistrita.ro</a>
                  </p>

                  <Badge variant="secondary" className="mb-3 text-[11px]">Program cu publicul</Badge>
                  <ul className="text-xs space-y-1.5 font-medium text-foreground/90">
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Luni:</span> <span className="font-bold">08:00 – 10:00</span></li>
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Marți:</span> <span className="font-bold">08:00 – 10:00</span></li>
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Miercuri:</span> <span className="font-bold">14:00 – 16:00</span></li>
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Joi:</span> <span className="font-bold">14:00 – 16:00</span></li>
                    <li className="flex justify-between py-1"><span>Vineri:</span> <span className="font-bold">12:00 – 14:00</span></li>
                  </ul>
                </div>
              </div>

              {/* 2. DIRECTOR CJRAE-BN */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-card to-secondary/10 border border-primary/40 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <User className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="font-heading font-bold text-base text-foreground">Director CJRAE-BN</h3>
                  </div>
                  <p className="text-xs font-semibold text-primary mb-0.5">prof. Toader Anca-Gabriela</p>
                  <p className="text-xs text-muted-foreground mb-1">Tel: <a href="tel:0753418083" className="font-semibold text-foreground">0753 418 083</a></p>
                  <p className="text-xs text-muted-foreground mb-4">
                    E-mail: <a href="mailto:anca.toader@cjraebistrita.ro" className="text-primary hover:underline">anca.toader@cjraebistrita.ro</a>
                  </p>

                  <Badge variant="default" className="mb-3 text-[11px] bg-primary text-primary-foreground">Program de Audiențe</Badge>
                  <ul className="text-xs space-y-1.5 font-medium text-foreground/90">
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Luni:</span> <span className="font-bold text-primary">14:00 – 16:00</span></li>
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Marți:</span> <span className="font-bold text-primary">12:00 – 14:00</span></li>
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Miercuri:</span> <span className="font-bold text-primary">10:00 – 12:00</span></li>
                    <li className="flex justify-between py-1 text-muted-foreground"><span>Joi & Vineri:</span> <span>Pe bază de programare</span></li>
                  </ul>
                </div>
              </div>

              {/* 3. CONTABILITATE / FINANCIAR */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-card to-accent/5 border border-border/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <User className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="font-heading font-bold text-base text-foreground">Administrator Financiar</h3>
                  </div>
                  <p className="text-xs font-semibold text-primary mb-0.5">Vișovan Nina-Irina</p>
                  <p className="text-xs text-muted-foreground mb-1">Tel: <a href="tel:0785182065" className="font-semibold text-foreground">0785 182 065</a></p>
                  <p className="text-xs text-muted-foreground mb-4">
                    E-mail: <a href="mailto:cfcas.cjraebn@gmail.com" className="text-primary hover:underline break-all">cfcas.cjraebn@gmail.com</a>
                  </p>

                  <Badge variant="secondary" className="mb-3 text-[11px]">Program cu publicul</Badge>
                  <ul className="text-xs space-y-1.5 font-medium text-foreground/90">
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Luni:</span> <span className="font-bold">08:00 – 10:00</span></li>
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Marți:</span> <span className="font-bold">08:00 – 10:00</span></li>
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Miercuri:</span> <span className="font-bold">14:00 – 16:00</span></li>
                    <li className="flex justify-between py-1 border-b border-border/30"><span>Joi:</span> <span className="font-bold">14:00 – 16:00</span></li>
                    <li className="flex justify-between py-1"><span>Vineri:</span> <span className="font-bold">12:00 – 14:00</span></li>
                  </ul>
                </div>
              </div>

              {/* 4. SECRETAR CEOSP-BN */}
              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <User className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="font-heading font-bold text-base text-foreground">Secretariat CEOSP-BN</h3>
                  </div>
                  <p className="text-xs font-semibold text-primary mb-0.5">Botiș Ioana</p>
                  <p className="text-xs text-muted-foreground mb-1">Tel: <a href="tel:0768114788" className="font-semibold text-foreground">0768 114 788</a></p>
                  <p className="text-xs text-muted-foreground mb-4">
                    E-mail: <a href="mailto:seospbn@cjraebistrita.ro" className="text-primary hover:underline">seospbn@cjraebistrita.ro</a>
                  </p>

                  <Badge variant="outline" className="mb-3 text-[11px] border-primary/30 text-primary">Preluare dosare & certificate</Badge>
                  <div className="p-3 rounded-xl bg-muted/40 text-xs">
                    <p className="font-medium text-foreground">Luni – Joi:</p>
                    <p className="font-bold text-primary text-sm mt-0.5">08:00 – 13:00</p>
                  </div>
                </div>
              </div>

              {/* 5. PERSONAL DIDACTIC AUXILIAR */}
              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="font-heading font-bold text-base text-foreground">Program de Lucru - Personal Didactic Auxiliar</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    Programul general de activitate al personalului didactic auxiliar din cadrul instituției.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs text-center">
                    <div className="p-3 rounded-xl bg-muted/40 border border-border/40">
                      <p className="text-muted-foreground font-medium">Luni</p>
                      <p className="font-bold text-foreground mt-1">08:00 - 16:30</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/40 border border-border/40">
                      <p className="text-muted-foreground font-medium">Marți</p>
                      <p className="font-bold text-foreground mt-1">08:00 - 16:30</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/40 border border-border/40">
                      <p className="text-muted-foreground font-medium">Miercuri</p>
                      <p className="font-bold text-foreground mt-1">08:00 - 16:30</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/40 border border-border/40">
                      <p className="text-muted-foreground font-medium">Joi</p>
                      <p className="font-bold text-foreground mt-1">08:00 - 16:30</p>
                    </div>
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 col-span-2 sm:col-span-1">
                      <p className="text-primary font-medium">Vineri</p>
                      <p className="font-bold text-primary mt-1">08:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </section>

      {/* FORMULAR DE CONTACT & HARTA MAPS SECTION */}
      <section className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up">

        {/* LEFT COLUMN: FORMULAR CONTACT */}
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden flex flex-col justify-between">
          <CardHeader className="rounded-t-3xl bg-muted/40 p-6 border-b border-border/40">
            <Badge variant="outline" className="mb-1 border-primary/30 text-primary w-fit">
              Formular de Suport
            </Badge>
            <CardTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
              Trimite-ne un mesaj
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-1">
              Completați formularul de mai jos și echipa noastră vă va răspunde prompt.
            </p>
          </CardHeader>

          <CardContent className="p-6 space-y-4 flex-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-semibold">Nume și Prenume *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Popescu Ion"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl border-border/60"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold">Adresă de E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nume@exemplu.ro"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border-border/60"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="subject" className="text-xs font-semibold">Subiect</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Solicitare informații consiliere / CEOSP"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="rounded-xl border-border/60"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-semibold">Mesajul dumneavoastră *</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Scrieți mesajul aici..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl border-border/60 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl font-semibold gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* RIGHT COLUMN: HARTA GOOGLE MAPS */}
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden flex flex-col justify-between">
          <CardHeader className="rounded-t-3xl bg-muted/40 p-6 border-b border-border/40">
            <Badge variant="outline" className="mb-1 border-primary/30 text-primary w-fit">
              Harta & Localizare
            </Badge>
            <CardTitle className="text-xl md:text-2xl font-heading font-bold text-foreground">
              Unde ne găsiți?
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-1">
              Str. Axente Sever nr. 1, Sc. C, parter, Bistrița, jud. Bistrița-Năsăud
            </p>
          </CardHeader>

          <CardContent className="p-4 flex-1">
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-border/60 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d10858.002726357783!2d24.473077790376955!3d47.12845618544381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x4749f6fe8846ce93%3A0x4037d5b601c6162c!2sBistri%C8%9Ba%20Nord%2C%20Somesului%2C%20Bistri%C8%9Ba!3m2!1d47.1324799!2d24.483895999999998!4m5!1s0x4749f6ff5b2fb80d%3A0xe78bb0f1c05b6938!2zQ2VudHJ1bCBKdWRlyJtlYW4gZGUgUmVzdXJzZSDImWkgQXNpc3RlbsibxIMgRWR1Y2HIm2lvbmFsxIMgQmlzdHJpyJthLU7Eg3PEg3VkLCBTdHJhZGEgQXhlbnRlIFNldmVyIDEsIEJpc3RyacibYSA0MjAxNjM!3m2!1d47.1247726!2d24.485705!5e0!3m2!1sro!2sro!4v1756296968499!5m2!1sro!2sro"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Harta CJRAE Bistrița-Năsăud"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </CardContent>
        </Card>

      </section>
    </MainLayout>
  );
};

export default Contact;
