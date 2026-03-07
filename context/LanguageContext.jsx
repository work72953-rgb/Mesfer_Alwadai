"use client";
import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage if available, otherwise default to "ar"
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "ar";
  });

  const toggleLang = () => {
    setLang((prev) => {
      const newLang = prev === "ar" ? "en" : "ar";
      localStorage.setItem("lang", newLang); // save to localStorage
      return newLang;
    });
  };

  // Optional: sync with localStorage if it changes outside
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};