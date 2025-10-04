import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ImportantAnnouncement = () => {
  return (
    <Card className="border-accent bg-accent/5 animate-fade-in mb-8">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="shrink-0">
            <div className="p-3 rounded-full bg-accent/10">
              <AlertCircle className="h-6 w-6 text-accent" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-accent mb-3">
              ANUNȚ IMPORTANT!
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              Începând cu data de 25 august 2025, activitatea de preluare a dosarelor și de 
              evaluare pentru orientarea școlară și profesională a elevilor cu cerințe 
              educaționale speciale (CES), se va desfășura la următoarea adresă:{" "}
              <strong>Str.Axente-Sever nr.1, Sc.C, parter.</strong>
            </p>
            <p className="text-foreground">
              Pentru orice informații, ne puteți contacta prin e-mail la{" "}
              <a href="mailto:cjraebn@cjraebistrita.ro" className="text-accent font-semibold hover:underline">
                cjraebn@cjraebistrita.ro
              </a>{" "}
              sau la tel.{" "}
              <a href="tel:0768114788" className="text-accent font-semibold hover:underline">
                0768 114 788
              </a>{" "}
              (secretar CEOSP - Ioana BOTIS).
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
