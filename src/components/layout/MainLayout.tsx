import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PanelRight, PanelRightClose } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when route changes and lock body scroll when open.
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [sidebarOpen]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>

          {/* Mobile sidebar toggle */}
          <Button
            variant="default"
            size="icon"
            className={`fixed bottom-4 right-4 z-50 rounded-full shadow-xl lg:hidden transition-transform duration-300 ${
              sidebarOpen ? "rotate-180" : ""
            }`}
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label={sidebarOpen ? "Închide panoul lateral" : "Deschide panoul lateral"}
          >
            {sidebarOpen ? (
              <PanelRightClose className="h-5 w-5" />
            ) : (
              <PanelRight className="h-5 w-5" />
            )}
          </Button>

          {/* Backdrop for mobile sidebar */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/30 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Sidebar */}
          <aside
            className={`w-80 shrink-0 space-y-6 fixed lg:static inset-y-0 right-0 z-40 transform transition-transform duration-300 ease-in-out lg:transform-none bg-background lg:bg-transparent p-4 lg:p-0 shadow-2xl lg:shadow-none overflow-y-auto lg:overflow-visible ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
            aria-label="Panou lateral"
          >
            <Sidebar />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};
