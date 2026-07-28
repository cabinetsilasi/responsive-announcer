import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ImportantAnnouncement = () => {
  return (
    <Card className="border-accent bg-accent/5 animate-fade-in mb-8 overflow-hidden">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <div className="p-2.5 sm:p-3 rounded-full bg-accent/10 w-fit">
              <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
            </div>
          </div>
          <div className="flex-1 min-w-0 break-words">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-accent mb-2 sm:mb-3">
              ANUNȚ IMPORTANT!
            </h3>
            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 break-words">
              Începând cu data de 25 august 2025, activitatea de preluare a dosarelor și de 
              evaluare pentru orientarea școlară și profesională a elevilor cu cerințe 
              educaționale speciale (CES), se va desfășura la următoarea adresă:{" "}
              <strong className="font-semibold text-foreground break-words">
                Str.Axente-Sever nr.1, Sc.C, parter.
              </strong>
            </p>
            <p className="text-foreground text-sm sm:text-base leading-relaxed break-words">
              Pentru orice informații, ne puteți contacta prin e-mail la{" "}
              <a href="mailto:cjraebn@cjraebistrita.ro" className="text-accent font-semibold hover:underline break-all">
                cjraebn@cjraebistrita.ro
              </a>{" "}
              sau la tel.{" "}
              <a href="tel:0768114788" className="text-accent font-semibold hover:underline whitespace-nowrap">
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
