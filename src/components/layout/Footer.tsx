import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-heading font-bold">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <p>Str. Axente-Sever nr.1, Sc.C, parter<br />Bistrița-Năsăud</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:0768114788" className="hover:text-secondary transition-colors">
                  0768 114 788
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:cjraebn@cjraebistrita.ro" className="hover:text-secondary transition-colors">
                  cjraebn@cjraebistrita.ro
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-heading font-bold">Link-uri Utile</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/organigrama" className="hover:text-secondary transition-colors">
                  Organigrama/Rețea
                </a>
              </li>
              <li>
                <a href="/oferta" className="hover:text-secondary transition-colors">
                  Oferta/Programe
                </a>
              </li>
              <li>
                <a href="/resurse" className="hover:text-secondary transition-colors">
                  Resurse Deschise
                </a>
              </li>
              <li>
                <a href="/prevenire" className="hover:text-secondary transition-colors">
                  Prevenire Hărțuire
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-heading font-bold">Despre CJRAE-BN</h3>
            <p className="text-sm leading-relaxed">
              Centrul Județean de Resurse și Asistență Educațională Bistrița-Năsăud oferă suport 
              educațional specializat pentru elevi, cadre didactice și părinți.
            </p>
            <p className="text-sm font-semibold italic">
              "Reconstruim zâmbete. Împreună."
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} CJRAE-BN. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};
