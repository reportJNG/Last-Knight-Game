"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved); 
    }
  }, []);

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.dataset.theme = theme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}