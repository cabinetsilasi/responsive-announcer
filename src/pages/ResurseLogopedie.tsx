import { 
  Mic, 
  Gamepad2, 
  Video, 
  FileText, 
  Facebook, 
  ExternalLink, 
  Play, 
  Sparkles 
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WordwallItem {
  title: string;
  url: string;
  imgUrl?: string;
  embedUrl?: string;
  sound: string;
}

const wordwallGames: WordwallItem[] = [
  {
    title: "Alege doar cuvinte care conțin sunetul (litera) „S”",
    url: "https://wordwall.net/resource/2539177/alege-doar-cuvinte-care-contin-sunetul-litera-s",
    imgUrl: "https://az779572.vo.msecnd.net/screens-200/f6dd654b87da4f8387f6c9d56dda8766",
    sound: "Sunetul S",
  },
  {
    title: "Citim și potrivim - Cuvinte cu S!",
    url: "https://wordwall.net/resource/1905825/citim-%C8%99i-potrivim-cuvinte-cu-s",
    imgUrl: "https://az779572.vo.msecnd.net/screens-200/257cbbd872474b4e85e4d12436461b55",
    sound: "Sunetul S",
  },
  {
    title: "Alege cuvinte care conțin sunetul / litera „C”",
    url: "https://wordwall.net/resource/2540686/alege-cuvinte-care-contin-sunetul-litera-c",
    imgUrl: "https://az779572.vo.msecnd.net/screens-200/9ec77b3822a04c5088a717210c05c89a",
    sound: "Sunetul C",
  },
];

const youtubeVideos = [
  { title: "Exercițiu Logopedic 1", embedUrl: "https://www.youtube.com/embed/Ak8FI_i6cQQ" },
  { title: "Exercițiu Logopedic 2", embedUrl: "https://www.youtube.com/embed/zC_Jx0r8F00" },
  { title: "Exercițiu Logopedic 3", embedUrl: "https://www.youtube.com/embed/PPrzBiXT_tQ" },
  { title: "Exercițiu Logopedic 4", embedUrl: "https://www.youtube.com/embed/TS6Y7G4BGlg" },
];

const googleDriveDocs = [
  {
    title: "Material Logopedic de Sprijin - Partea I",
    previewUrl: "https://drive.google.com/file/d/1rBO-6Vo8nqXdNhR6dv3zlybfB072ROI6/preview",
    viewUrl: "https://drive.google.com/file/d/1rBO-6Vo8nqXdNhR6dv3zlybfB072ROI6/view?usp=sharing",
  },
  {
    title: "Material Logopedic de Sprijin - Partea II",
    previewUrl: "https://drive.google.com/file/d/1B3RfVkVVsRErA6ZBwXnIR-raz4_vBRL_/preview",
    viewUrl: "https://drive.google.com/file/d/1B3RfVkVVsRErA6ZBwXnIR-raz4_vBRL_/view?usp=sharing",
  },
];

const facebookPosts = [
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcjraebn%2Fposts%2F2907729172608049&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcjraebn%2Fposts%2F2907724665941833&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcjraebn%2Fposts%2F2904704882910478&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcjraebn%2Fposts%2F2904702976244002&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcjraebn%2Fposts%2F2904721879575445&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fandreia.avalon%2Fposts%2F3799597663443873&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fandreia.avalon%2Fposts%2F3810525955684377&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fandreia.avalon%2Fposts%2F3809771175759855&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fandreia.avalon%2Fposts%2F3808526575884315&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fandreia.avalon%2Fposts%2F3803579856378987&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAstanoaieiMirela%2Fposts%2F111849470528233&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAstanoaieiMirela%2Fposts%2F112949447084902&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAstanoaieiMirela%2Fposts%2F111911063855407&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D2152058521530193%26id%3D1783037308432318&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpsihologulajuta%2Fposts%2F3139018532809997&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcjraebn%2Fposts%2F2896996757014624&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcjraebn%2Fposts%2F2896999590347674&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcjraebn%2Fposts%2F2897003783680588&width=500",
];

export const ResurseLogopedie = () => {
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
                <Mic className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                    Resurse Deschise
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Logopedie Interșcolară
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                  Resurse Logopedie
                </h1>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl text-base md:text-lg">
                  Jocuri interactive, exerciții video, materiale metodice și recomandări ale profesorilor logopezi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIZED TABS */}
      <section className="mb-10 animate-fade-in-up">
        <Tabs defaultValue="jocuri" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 p-1.5 bg-muted/60 rounded-2xl h-auto mb-8 gap-2 border border-border/40">
            <TabsTrigger
              value="jocuri"
              className="rounded-xl py-3 px-3 font-semibold text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Gamepad2 className="h-4 w-4 shrink-0" />
              <span>Jocuri Wordwall</span>
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="rounded-xl py-3 px-3 font-semibold text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Video className="h-4 w-4 shrink-0" />
              <span>Exerciții Video</span>
            </TabsTrigger>
            <TabsTrigger
              value="documente"
              className="rounded-xl py-3 px-3 font-semibold text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <FileText className="h-4 w-4 shrink-0" />
              <span>Documente & Ghiduri</span>
            </TabsTrigger>
            <TabsTrigger
              value="facebook"
              className="rounded-xl py-3 px-3 font-semibold text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Facebook className="h-4 w-4 shrink-0" />
              <span>Postări & Fișe Facebook</span>
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: JOCURI WORDWALL */}
          <TabsContent value="jocuri" className="focus-visible:outline-none space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wordwallGames.map((game, index) => (
                <Card key={index} className="rounded-3xl border-border/60 shadow-md hover:shadow-lg transition-all bg-card overflow-hidden flex flex-col justify-between">
                  <CardHeader className="p-6">
                    <Badge variant="outline" className="mb-2 w-fit border-primary/30 text-primary">
                      {game.sound}
                    </Badge>
                    <CardTitle className="text-lg font-heading font-bold text-foreground">
                      {game.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 space-y-4">
                    {game.imgUrl && (
                      <div className="rounded-2xl overflow-hidden border border-border/40 shadow-inner bg-muted/30">
                        <img src={game.imgUrl} alt={game.title} className="w-full h-44 object-cover" />
                      </div>
                    )}
                    <Button asChild className="w-full rounded-xl font-semibold gap-2 shadow-sm">
                      <a href={game.url} target="_blank" rel="noopener noreferrer">
                        <Gamepad2 className="h-4 w-4" />
                        Joacă pe Wordwall
                        <ExternalLink className="h-3.5 w-3.5 opacity-70 ml-auto" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* EMBEDDED WORDWALL INTERACTIVE FRAMES */}
            <div className="pt-6">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Jocuri Interactive Încorporated
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden border border-border/60 shadow-md bg-card p-3 h-[420px]">
                  <iframe
                    src="https://wordwall.net/embed/f1f37ee139fc4fbca8750db47f81422c?themeId=41&templateId=22"
                    className="w-full h-full rounded-xl border-0"
                    allowFullScreen
                    title="Wordwall Game 1"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-border/60 shadow-md bg-card p-3 h-[420px]">
                  <iframe
                    src="https://wordwall.net/embed/c1854aa9ad2e416ba47b68993ce7e8ea?themeId=1&templateId=5"
                    className="w-full h-full rounded-xl border-0"
                    allowFullScreen
                    title="Wordwall Game 2"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: VIDEOCLIPURI EXERCIȚII YOUTUBE */}
          <TabsContent value="video" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {youtubeVideos.map((video, idx) => (
                <Card key={idx} className="rounded-3xl border-border/60 shadow-md bg-card overflow-hidden">
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-lg font-heading font-bold text-foreground flex items-center gap-2">
                      <Play className="h-4 w-4 text-primary shrink-0" />
                      {video.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="w-full h-64 md:h-72 rounded-2xl overflow-hidden border border-border/40 shadow-inner bg-black">
                      <iframe
                        src={video.embedUrl}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* TAB 3: DOCUMENTE & GHIDURI GOOGLE DRIVE */}
          <TabsContent value="documente" className="focus-visible:outline-none space-y-8">
            {googleDriveDocs.map((doc, idx) => (
              <Card key={idx} className="rounded-3xl border-border/60 shadow-lg bg-card overflow-hidden">
                <CardHeader className="border-b border-border/40 bg-muted/30 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-heading font-bold text-foreground">
                          {doc.title}
                        </CardTitle>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 text-primary font-medium rounded-xl shrink-0"
                    >
                      <a href={doc.viewUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Deschide în Tab Nou
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-2 sm:p-4 md:p-6">
                  <div className="w-full h-[600px] md:h-[750px] rounded-2xl overflow-hidden border border-border/60 shadow-inner bg-slate-900/5">
                    <iframe
                      src={doc.previewUrl}
                      className="w-full h-full border-0 rounded-2xl"
                      title={doc.title}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* TAB 4: POSTĂRI FACEBOOK */}
          <TabsContent value="facebook" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facebookPosts.map((postUrl, idx) => (
                <Card key={idx} className="rounded-3xl border-border/60 shadow-md bg-card p-3 overflow-hidden flex justify-center items-center">
                  <iframe
                    src={postUrl}
                    width="100%"
                    height="500"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media"
                    title={`Facebook Post ${idx + 1}`}
                  />
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </MainLayout>
  );
};

export default ResurseLogopedie;
