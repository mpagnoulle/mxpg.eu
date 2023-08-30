"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.getElementById("bgGrid").classList.add("bg-grid-dark");
      document.getElementById("bgGradient").classList.add("bg-gradient-dark");
      document.getElementById("bgGradient").classList.remove("bg-gradient");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.getElementById("bgGradient").classList.remove("bg-gradient-dark");
      document.getElementById("bgGrid").classList.remove("bg-grid-dark");
      document.getElementById("bgGradient").classList.add("bg-gradient");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.getElementById("bgGrid").classList.add("bg-grid-dark");
        document.getElementById("bgGradient").classList.add("bg-gradient-dark");
        document.getElementById("bgGradient").classList.remove("bg-gradient");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.getElementById("bgGradient").classList.remove("bg-gradient");
      document.getElementById("bgGrid").classList.add("bg-grid-dark");
      document.getElementById("bgGradient").classList.add("bg-gradient-dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
