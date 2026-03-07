"use client"; // must be a client component

import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Parent from "@/components/Parent";

export default function ClientLayout({ children }) {
  const { lang } = useContext(LanguageContext);

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Parent />
      <Footer />
    </div>
  );
}