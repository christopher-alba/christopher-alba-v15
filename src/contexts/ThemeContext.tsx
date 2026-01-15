import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

const THEME_KEY = "theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "light" || saved === "dark" ? saved : "light";
  });

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    root.classList.remove("light-theme", "dark-theme");
    root.classList.add(`${theme}-theme`);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);

    const root = document.getElementById("root");
    root?.classList.remove("light-theme", "dark-theme");
    root?.classList.add(`${next}-theme`);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}
