import { GraduationCap, ExternalLink, FileText, Presentation, BookOpen, Facebook } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ResourceKind = "drive" | "slides" | "facebook" | "book";

interface Resource {
  title?: string;
  src: string;
  kind: ResourceKind;
  openUrl?: string;
}

interface Section {
  title: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  resources: Resource[];
}

const drivePreview = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
const driveOpen = (id: string) => `https://drive.google.com/file/d/${id}/view`;

const sections: Section[] = [
  {
    title: "Documente de prezentare Erasmus+",
    subtitle: "Acreditare și materiale generale",
    icon: GraduationCap,
    resources: [
      { src: drivePreview("1OwKHCtWaTaHYPj0EQ6puNnyipMutQ1-U"), openUrl: driveOpen("1OwKHCtWaTaHYPj0EQ6puNnyipMutQ1-U"), kind: "drive" },
      { src: drivePreview("1JKP9rL7ZkN9pupbl7ciVLN9HPO9HYoecHoKbArPWixI"), openUrl: driveOpen("1JKP9rL7ZkN9pupbl7ciVLN9HPO9HYoecHoKbArPWixI"), kind: "drive" },
      { src: drivePreview("1w23hz5Jr2DNyyw0EMIqZkva1Jvm7Cimq"), openUrl: driveOpen("1w23hz5Jr2DNyyw0EMIqZkva1Jvm7Cimq"), kind: "drive" },
      { src: drivePreview("1GGsbdQIos68msLKeNF8Z2fsgybErsn7A"), openUrl: driveOpen("1GGsbdQIos68msLKeNF8Z2fsgybErsn7A"), kind: "drive" },
    ],
  },
  {
    title: "Apel pentru selecția cadrelor didactice",
    subtitle: "Proiect Erasmus 2024-1-RO01-KA121-SCH-000226937",
    icon: FileText,
    badge: "Selecție",
    resources: [
      { src: drivePreview("1msB-4yI2Y6-NiVRes6SNssFWvbTPgOH-"), openUrl: driveOpen("1msB-4yI2Y6-NiVRes6SNssFWvbTPgOH-"), kind: "drive" },
      { src: drivePreview("15zYONm5MZ8wM-YaxvaqhKu9Oj_HSKm6Z"), openUrl: driveOpen("15zYONm5MZ8wM-YaxvaqhKu9Oj_HSKm6Z"), kind: "drive" },
    ],
  },
  {
    title: "Procedură operațională de selecție a participanților în mobilități",
    subtitle: 'Domeniul "Educație școlară"',
    icon: FileText,
    resources: [
      { src: drivePreview("1c-vPn6cgG9JCWYo2Q6NiTcpSB5GCPHFf"), openUrl: driveOpen("1c-vPn6cgG9JCWYo2Q6NiTcpSB5GCPHFf"), kind: "drive" },
      { src: drivePreview("12SbRdZNwglv2-9HtrM59BRQsikIEvWJ2"), openUrl: driveOpen("12SbRdZNwglv2-9HtrM59BRQsikIEvWJ2"), kind: "drive" },
      { src: drivePreview("1dBAwpkbtwSliH9muOb65SN3x2PXj9piB"), openUrl: driveOpen("1dBAwpkbtwSliH9muOb65SN3x2PXj9piB"), kind: "drive" },
    ],
  },
  {
    title: "Momente Erasmus+ pe Facebook",
    icon: Facebook,
    resources: [
      {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0CBu63zDswVAqAGzNSAZVgFSpa4cuoxs5E1oSKGKj8WUnqVdjYKNs9izbKwzMxp98l%26id%3D100063867420188&show_text=true&width=500",
        kind: "facebook",
      },
    ],
  },
  {
    title: "Prezentări interactive ale proiectelor",
    icon: Presentation,
    resources: [
      { src: "https://docs.google.com/presentation/d/e/2PACX-1vRvm_sriKPqLjmyZxWzc28rSm4MIQCtuGt9glDSEsJcG59Ka1idbq16RbLLesLIRmM1cOwEBKySTna0/pubembed?start=true&loop=true&delayms=5000", kind: "slides" },
      { src: "https://docs.google.com/presentation/d/e/2PACX-1vRvGjSNCW0RqovVwCfHWySUGHxepGpfalAy49rRJY_oT2-JrtZXvBApz8LcaRsxVQ/pubembed?start=false&loop=false&delayms=5000", kind: "slides" },
      { src: "https://docs.google.com/presentation/d/e/2PACX-1vRKcSqrRhLp82J3HB4Hetun9qiwebJaeAyGi-niHaTaXPTsmhBeYo891wbxP7egXG3pzh-tDGBL0Sqm/pubembed?start=true&loop=true&delayms=5000", kind: "slides" },
      { src: "https://docs.google.com/presentation/d/e/2PACX-1vRI1TFQqBQ2X0fxfSqMpVxHFmEiNjQy_A4r3jpjew54Og55zkxzGnlGtNRJjkNp9cT_LPRLzOVD45fO/pubembed?start=true&loop=true&delayms=3000", kind: "slides" },
    ],
  },
  {
    title: "Documente și rapoarte suplimentare",
    icon: FileText,
    resources: [
      { src: drivePreview("1uQfTHVWxSxTlyKPQAUH-FkmXW0dm_TBV"), openUrl: driveOpen("1uQfTHVWxSxTlyKPQAUH-FkmXW0dm_TBV"), kind: "drive" },
      { src: drivePreview("1-GpZw6HTRfWnaV_4QwfpqVACtfwTB1sL"), openUrl: driveOpen("1-GpZw6HTRfWnaV_4QwfpqVACtfwTB1sL"), kind: "drive" },
      { src: drivePreview("1GTBYvRR0abnqIMD7-cw-gL1i9KC7Mjf9"), openUrl: driveOpen("1GTBYvRR0abnqIMD7-cw-gL1i9KC7Mjf9"), kind: "drive" },
      { src: drivePreview("1NvKN5jbmylMBM7KEG6O4PRitHZWInKCQ"), openUrl: driveOpen("1NvKN5jbmylMBM7KEG6O4PRitHZWInKCQ"), kind: "drive" },
    ],
  },
  {
    title: "PO – Selecția cadrelor didactice însoțitoare",
    subtitle: "Procedură operațională",
    icon: FileText,
    badge: "Procedură",
    resources: [
      { src: drivePreview("13Ou8N09V35cah7dCMWmsT__Q8WWvcDxI"), openUrl: driveOpen("13Ou8N09V35cah7dCMWmsT__Q8WWvcDxI"), kind: "drive" },
    ],
  },
  {
    title: "PO – Selecția la mobilități job shadowing",
    subtitle: "Program Erasmus+",
    icon: FileText,
    badge: "Procedură",
    resources: [
      { src: drivePreview("1IMYQfv5jFTTivX3M5lrNBSVKG23XAksP"), openUrl: driveOpen("1IMYQfv5jFTTivX3M5lrNBSVKG23XAksP"), kind: "drive" },
    ],
  },
  {
    title: "PO – Managementul riscului pentru mobilități",
    subtitle: "Elevi și cadre didactice, program Erasmus+",
    icon: FileText,
    badge: "Procedură",
    resources: [
      { src: drivePreview("1AerNZn5Gmy9SXkR0Hj1MTSs8kizw0qnC"), openUrl: driveOpen("1AerNZn5Gmy9SXkR0Hj1MTSs8kizw0qnC"), kind: "drive" },
    ],
  },
  {
    title: "PO – Selecția elevilor participanți la mobilități",
    subtitle: "Program Erasmus+",
    icon: FileText,
    badge: "Procedură",
    resources: [
      { src: drivePreview("1N_qc3IiRa0uF-eZAEsR0EQyPKpWDdm0k"), openUrl: driveOpen("1N_qc3IiRa0uF-eZAEsR0EQyPKpWDdm0k"), kind: "drive" },
    ],
  },
  {
    title: "Apel selecție – Profesori însoțitori",
    subtitle: "Program Erasmus+",
    icon: FileText,
    badge: "Selecție",
    resources: [
      { src: drivePreview("1R-v6jDFEkWnRf2RWAyGFqxqtuATEnKk7"), openUrl: driveOpen("1R-v6jDFEkWnRf2RWAyGFqxqtuATEnKk7"), kind: "drive" },
    ],
  },
  {
    title: "Apel selecție – Mobilitate job shadowing",
    subtitle: "Program Erasmus+",
    icon: FileText,
    badge: "Selecție",
    resources: [
      { src: drivePreview("1CQfeWqK1GkjbRwjI9rGNcUUcj1eBArY4"), openUrl: driveOpen("1CQfeWqK1GkjbRwjI9rGNcUUcj1eBArY4"), kind: "drive" },
      { src: drivePreview("1swany4XQdJ6iOHzydrLjfmCamfZiXGX-"), openUrl: driveOpen("1swany4XQdJ6iOHzydrLjfmCamfZiXGX-"), kind: "drive" },
      { src: drivePreview("1Ro5ZJJRhf0nku0pCSlz4l-26Y3Gz0VAP"), openUrl: driveOpen("1Ro5ZJJRhf0nku0pCSlz4l-26Y3Gz0VAP"), kind: "drive" },
    ],
  },
  {
    title: "Carte digitală – Erasmus Grecia",
    subtitle: "Realizată cu Book Creator",
    icon: BookOpen,
    resources: [
      {
        src: "https://read.bookcreator.com/UnjN6J35l0eY6YUCyrK2Jn89Q872/gybqUsSwS-iQqKCFKllOrA",
        openUrl: "https://read.bookcreator.com/UnjN6J35l0eY6YUCyrK2Jn89Q872/gybqUsSwS-iQqKCFKllOrA",
        kind: "book",
      },
    ],
  },
];

const ResourceFrame = ({ resource }: { resource: Resource }) => {
  if (resource.kind === "book") {
    return (
      <a
        href={resource.openUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
      >
        <BookOpen className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
        <span className="font-heading font-semibold text-foreground group-hover:text-primary">
          Deschide cartea „Erasmus – Grecia"
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          read.bookcreator.com <ExternalLink className="h-3 w-3" />
        </span>
      </a>
    );
  }

  return (
    <div className="space-y-2">
      <div className="relative w-full overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-sm" style={{ aspectRatio: "540 / 380" }}>
        <iframe
          src={resource.src}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
          title={resource.title || "Resursă Erasmus+"}
        />
      </div>
      {resource.openUrl && (
        <a
          href={resource.openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
        >
          Deschide în fereastră nouă <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
};

const Erasmus = () => {
  return (
    <MainLayout>
      <section className="mb-8 animate-fade-in-up">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative flex items-center gap-4">
            <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                Erasmus+ CJRAE-BN
              </h1>
              <p className="mt-2 text-primary-foreground/90 max-w-2xl">
                Acreditare Erasmus+, apeluri de selecție, proceduri operaționale,
                prezentări și materiale realizate în cadrul mobilităților CJRAE-BN.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-10">
        {sections.map((section, sIdx) => {
          const Icon = section.icon;
          return (
            <section
              key={section.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${sIdx * 60}ms` }}
            >
              <div className="mb-4 flex items-start gap-3">
                <div className="shrink-0 h-11 w-11 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                      {section.title}
                    </h2>
                    {section.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {section.badge}
                      </Badge>
                    )}
                  </div>
                  {section.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{section.subtitle}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {section.resources.map((res, idx) => (
                  <Card
                    key={idx}
                    className="rounded-3xl border-border/60 bg-gradient-to-br from-card via-card to-muted/40 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-4">
                      <ResourceFrame resource={res} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default Erasmus;
