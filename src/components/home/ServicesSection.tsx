import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Heart, Lightbulb, FileText } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "CEOSP",
    description: "Centrul de Educație și Orientare pentru Servicii Psihopedagogice",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "CSES",
    description: "Centrul Școlar pentru Educație Specială",
    color: "text-accent",
  },
  {
    icon: BookOpen,
    title: "Resurse Educaționale",
    description: "Materiale didactice și resurse deschise pentru profesori și elevi",
    color: "text-secondary",
  },
  {
    icon: Heart,
    title: "Consiliere și Orientare",
    description: "Servicii de consiliere psihopedagogică pentru elevi și părinți",
    color: "text-accent",
  },
  {
    icon: Lightbulb,
    title: "Programe Erasmus+",
    description: "Proiecte europene și oportunități de formare internațională",
    color: "text-primary",
  },
  {
    icon: FileText,
    title: "Prevenire Hărțuire",
    description: "Programe de prevenire și intervenție în cazuri de hărțuire școlară",
    color: "text-accent",
  },
];

export const ServicesSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-heading font-bold mb-8 text-center animate-fade-in">
        Serviciile Noastre
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card 
            key={service.title}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <service.icon className={`h-6 w-6 ${service.color} group-hover:scale-110 transition-transform`} />
                </div>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">
                {service.title}
              </CardTitle>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
