import React, { useState, useEffect } from "react";
import {
  Accessibility,
  X,
  RotateCcw,
  Moon,
  Contrast,
  Type,
  Link as LinkIcon,
  Check,
  Plus,
  Minus,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ContrastMode = "normal" | "high" | "dark" | "grayscale" | "invert";

interface AccessibilitySettings {
  contrast: ContrastMode;
  fontSize: number; // percentage, e.g. 100, 110, 120
  dyslexiaFont: boolean;
  highlightLinks: boolean;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  contrast: "normal",
  fontSize: 100,
  dyslexiaFont: false,
  highlightLinks: false,
};

const STORAGE_KEY = "accessibility_settings";

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error("Eroare citire setari accesibilitate din localStorage:", e);
    }
    return DEFAULT_SETTINGS;
  });

  // Apply settings to DOM and sync to localStorage whenever settings change
  useEffect(() => {
    const root = document.documentElement;

    // 1. Contrast modes
    root.classList.remove(
      "acc-contrast-high",
      "acc-contrast-dark",
      "acc-contrast-grayscale",
      "acc-contrast-invert"
    );
    if (settings.contrast === "high") {
      root.classList.add("acc-contrast-high");
    } else if (settings.contrast === "dark") {
      root.classList.add("acc-contrast-dark");
    } else if (settings.contrast === "grayscale") {
      root.classList.add("acc-contrast-grayscale");
    } else if (settings.contrast === "invert") {
      root.classList.add("acc-contrast-invert");
    }

    // 2. Font Size
    if (settings.fontSize === 100) {
      root.style.fontSize = "";
    } else {
      root.style.fontSize = `${settings.fontSize}%`;
    }

    // 3. Dyslexia Font
    if (settings.dyslexiaFont) {
      root.classList.add("acc-dyslexia");
    } else {
      root.classList.remove("acc-dyslexia");
    }

    // 4. Highlight Links
    if (settings.highlightLinks) {
      root.classList.add("acc-highlight-links");
    } else {
      root.classList.remove("acc-highlight-links");
    }

    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error("Eroare salvare setari accesibilitate in localStorage:", e);
    }
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const increaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontSize: Math.min(prev.fontSize + 10, 140),
    }));
  };

  const decreaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontSize: Math.max(prev.fontSize - 10, 90),
    }));
  };

  const isCustomized =
    settings.contrast !== "normal" ||
    settings.fontSize !== 100 ||
    settings.dyslexiaFont ||
    settings.highlightLinks;

  return (
    <aside
      aria-label="Meniu accesibilitate"
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[9999] font-sans"
    >
      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`acc-widget-btn flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-accent/40 ${
          isCustomized
            ? "bg-accent text-accent-foreground font-bold ring-4 ring-accent/40 shadow-accent/20"
            : "bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl"
        }`}
        aria-expanded={isOpen}
        aria-label="Deschide opțiuni de accesibilitate"
        title="Meniu Accesibilitate"
      >
        <Accessibility className="h-6 w-6 animate-pulse" />
        <span className="hidden sm:inline text-sm font-medium">Accesibilitate</span>
        {isCustomized && (
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        )}
      </button>

      {/* Floating Menu Panel */}
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div
            className="fixed inset-0 bg-black/40 z-[9998] sm:hidden backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            className="fixed top-20 right-4 sm:right-6 left-4 sm:left-auto sm:w-96 bg-card text-card-foreground border border-border rounded-2xl shadow-2xl z-[9999] overflow-hidden transition-all duration-200 animate-in fade-in slide-in-from-top-4"
            role="dialog"
            aria-label="Opțiuni de accesibilitate"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-accent text-accent-foreground border-b border-accent/20">
              <div className="flex items-center gap-2.5">
                <Accessibility className="h-5 w-5" />
                <h2 className="font-semibold text-base tracking-wide">
                  Opțiuni Accesibilitate
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-black/10 text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent-foreground"
                aria-label="Închide meniul"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Contrast Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Contrast className="h-4 w-4 text-accent" />
                  <span>Mod Contrast</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => updateSetting("contrast", "normal")}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                      settings.contrast === "normal"
                        ? "bg-accent text-accent-foreground border-accent font-semibold"
                        : "bg-background hover:bg-muted text-foreground border-border"
                    }`}
                  >
                    <span>Normal</span>
                    {settings.contrast === "normal" && <Check className="h-3.5 w-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => updateSetting("contrast", "high")}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                      settings.contrast === "high"
                        ? "bg-yellow-400 text-black border-yellow-500 font-bold"
                        : "bg-black text-yellow-300 border-yellow-500/50 hover:bg-zinc-900"
                    }`}
                  >
                    <span>Contrast Înalt</span>
                    {settings.contrast === "high" && <Check className="h-3.5 w-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => updateSetting("contrast", "dark")}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                      settings.contrast === "dark"
                        ? "bg-slate-900 text-slate-100 border-slate-700"
                        : "bg-background hover:bg-muted text-foreground border-border"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Moon className="h-3.5 w-3.5" /> Întunecat
                    </span>
                    {settings.contrast === "dark" && <Check className="h-3.5 w-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => updateSetting("contrast", "grayscale")}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                      settings.contrast === "grayscale"
                        ? "bg-slate-700 text-white border-slate-600"
                        : "bg-background hover:bg-muted text-foreground border-border"
                    }`}
                  >
                    <span>Alb-Negru</span>
                    {settings.contrast === "grayscale" && <Check className="h-3.5 w-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => updateSetting("contrast", "invert")}
                    className={`col-span-2 flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                      settings.contrast === "invert"
                        ? "bg-indigo-600 text-white border-indigo-500"
                        : "bg-background hover:bg-muted text-foreground border-border"
                    }`}
                  >
                    <span>Inversare Culori</span>
                    {settings.contrast === "invert" && <Check className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>

              {/* Font Size Section */}
              <div className="space-y-3 pt-3 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Type className="h-4 w-4 text-accent" />
                    <span>Dimensiune Font</span>
                  </div>
                  <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                    {settings.fontSize}%
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize <= 90}
                    className="flex-1 rounded-xl gap-1 text-xs"
                    aria-label="Micșorează fontul"
                  >
                    <Minus className="h-3.5 w-3.5" />
                    <span>Micșorează</span>
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => updateSetting("fontSize", 100)}
                    disabled={settings.fontSize === 100}
                    className="px-3 rounded-xl text-xs"
                    aria-label="Resetare mărime font"
                  >
                    100%
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={increaseFontSize}
                    disabled={settings.fontSize >= 140}
                    className="flex-1 rounded-xl gap-1 text-xs"
                    aria-label="Mărește fontul"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Mărește</span>
                  </Button>
                </div>
              </div>

              {/* Readability & Toggles */}
              <div className="space-y-3 pt-3 border-t border-border">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Eye className="h-4 w-4 text-accent" />
                  <span>Lizibilitate</span>
                </div>

                {/* Dyslexia Font Toggle */}
                <button
                  type="button"
                  onClick={() =>
                    updateSetting("dyslexiaFont", !settings.dyslexiaFont)
                  }
                  className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                    settings.dyslexiaFont
                      ? "bg-accent/10 border-accent text-foreground"
                      : "bg-background hover:bg-muted border-border text-foreground"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold">Font Dislexie</div>
                    <div className="text-[11px] text-muted-foreground">
                      Distanțare sporită și font lizibil
                    </div>
                  </div>
                  <div
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                      settings.dyslexiaFont ? "bg-accent" : "bg-muted-foreground/30"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        settings.dyslexiaFont ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Highlight Links Toggle */}
                <button
                  type="button"
                  onClick={() =>
                    updateSetting("highlightLinks", !settings.highlightLinks)
                  }
                  className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                    settings.highlightLinks
                      ? "bg-accent/10 border-accent text-foreground"
                      : "bg-background hover:bg-muted border-border text-foreground"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold">
                      <LinkIcon className="h-3.5 w-3.5 text-accent" />
                      <span>Evidențiere Linkuri</span>
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      Evidențiază legăturile cu fundal galben
                    </div>
                  </div>
                  <div
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                      settings.highlightLinks ? "bg-accent" : "bg-muted-foreground/30"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        settings.highlightLinks ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Footer Reset */}
            <div className="p-4 bg-muted/40 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Preferințe salvate automat
              </span>
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={handleReset}
                disabled={!isCustomized}
                className="gap-1.5 text-xs rounded-xl"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Resetare</span>
              </Button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default AccessibilityWidget;
