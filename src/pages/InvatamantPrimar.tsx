import { GraduationCap, Calendar, MapPin, Mail, Download, ExternalLink, FileText, AlertCircle, Users, CheckCircle2 } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const InvatamantPrimar = () => {
  const downloadCerereUrl = "https://docs.google.com/document/d/1npKekXyTnB3NQgxbmqlVcppQEyeMcooJ/export?format=doc";
  const comisiiDrivePreviewUrl = "https://drive.google.com/file/d/1a78jZz4L5oL5BL_oYWyBIi-cKZMSQiJf/preview";
  const comisiiDriveDirectUrl = "https://drive.google.com/file/d/1a78jZz4L5oL5BL_oYWyBIi-cKZMSQiJf/view";

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
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                  Înscriere Clasa Pregătitoare 2026
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Învățământ Primar 2026
              </h1>
              <p className="mt-2 text-primary-foreground/90 max-w-3xl text-base md:text-lg">
                Informații oficiale privind evaluarea nivelului de dezvoltare a copiilor în vederea înscrierii în clasa pregătitoare pentru anul școlar 2026-2027.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANUNȚ EVALUARE SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
          <CardHeader className="rounded-t-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                    Anunț Important
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    Evaluarea nivelului de dezvoltare a copiilor
                  </CardTitle>
                </div>
              </div>
              <Badge variant="default" className="self-start sm:self-auto text-sm px-4 py-1.5 rounded-xl bg-primary text-primary-foreground shadow-sm">
                Perioada: 16 – 30 Martie 2026
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-6 text-foreground/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-3">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-base md:text-lg font-medium text-foreground">
                  În perioada <strong className="text-primary font-bold">16–30 martie 2026</strong>, specialiștii din cadrul <strong>CJRAE Bistrița-Năsăud</strong> realizează evaluarea nivelului de dezvoltare în vederea înscrierii în clasa pregătitoare.
                </p>
              </div>
            </div>

            {/* CUI I SE ADRESEAZĂ */}
            <div className="space-y-3">
              <h3 className="text-lg font-heading font-bold text-foreground flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Cine beneficiază de această evaluare?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-muted/40 border border-border/40 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">
                    Copiii care împlinesc vârsta de <strong>6 ani în perioada 1 septembrie – 31 decembrie 2026</strong> și care <strong>nu au frecventat grădinița</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-muted/40 border border-border/40 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">
                    Copiii care împlinesc 6 ani în aceeași perioadă și care <strong>s-au întors din străinătate</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* DEPOZITARE / TRIMITERE CERERE */}
            <div className="p-6 rounded-2xl bg-card border border-border/60 shadow-sm space-y-4">
              <h3 className="text-lg font-heading font-bold text-foreground">
                Procedură & Modalități de depunere a cererii
              </h3>
              <p className="text-sm text-muted-foreground">
                Pentru realizarea evaluării, părinții/tutorii legali trebuie să completeze <strong>cererea-tip de evaluare</strong>. Cererile pot fi depuse prin următoarele metode:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Email Option */}
                <div className="p-4 rounded-xl bg-muted/30 border border-border/40 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-foreground">Prin e-mail</h4>
                    <a
                      href="mailto:consiliere_bn@cjraebistrita.ro"
                      className="text-sm text-primary font-medium hover:underline break-all"
                    >
                      consiliere_bn@cjraebistrita.ro
                    </a>
                  </div>
                </div>

                {/* Location Option */}
                <div className="p-4 rounded-xl bg-muted/30 border border-border/40 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-foreground">Depunere fizică la sediu</h4>
                    <p className="text-sm text-muted-foreground">
                      Str. Florilor nr. 3–5, Bistrița
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-right">
              <p className="text-sm font-heading font-bold text-foreground">
                Conducerea CJRAE Bistrița-Năsăud
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CERERE DE EVALUARE DOWNLOAD CARD */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-gradient-to-br from-card via-card to-accent/5 overflow-hidden">
          <CardContent className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <FileText className="h-7 w-7" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                  Document Oficial
                </Badge>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  Cerere de Evaluare
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Descărcați modelul de cerere-tip necesar evaluării copilului dumneavoastră.
                </p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-2xl font-semibold gap-2 shadow-md hover:shadow-lg transition-all shrink-0"
            >
              <a href={downloadCerereUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                Descarcă Cererea (.doc)
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* COMISIILE DE EVALUARE SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <Card className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
          <CardHeader className="rounded-t-3xl bg-muted/40 p-6 md:p-8 border-b border-border/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <Badge variant="outline" className="mb-1 border-primary/30 text-primary">
                  Documentație & Comisii
                </Badge>
                <CardTitle className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Comisiile de Evaluare
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Consultați documentul oficial privind componența și organizarea comisiilor de evaluare.
                </p>
              </div>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-xl text-xs gap-1.5 border-border/60 self-start sm:self-auto"
              >
                <a href={comisiiDriveDirectUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  Deschide în tab nou
                </a>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4 md:p-6">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-muted/20 min-h-[500px]">
              <iframe
                src={comisiiDrivePreviewUrl}
                title="Comisiile de Evaluare Preview"
                className="w-full h-[600px] border-0 rounded-2xl"
                allow="autoplay"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default InvatamantPrimar;
