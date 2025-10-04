import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-6xl font-heading font-bold text-primary">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Pagina nu a fost găsită</p>
        <a href="/" className="text-primary underline hover:text-accent transition-colors font-semibold">
          Înapoi la Pagina Principală
        </a>
      </div>
    </div>
  );
};

export default NotFound;
