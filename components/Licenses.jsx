'use client';
import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function Licenses() {
  const { lang } = useContext(LanguageContext);

  // Licenses titles and issuers in both languages
  const licenses = lang === "ar"
    ? [
        { title: "رخصة ممارسة التمثيل القانوني", issuer: "وزارة العدل" },
        { title: "رخصة ممارسة تسجيل العقارات", issuer: "الهيئة العامة للعقار" },
        { title: "الاعتماد المهني السعودي للقانونيين (SASL)", issuer: "الهيئة السعودية للمحامين" }
      ]
    : [
        { title: "Legal Representation License", issuer: "Ministry of Justice" },
        { title: "Real Estate Registration License", issuer: "General Authority for Real Estate" },
        { title: "Saudi Accredited Legal Professional (SASL)", issuer: "Saudi Bar Association" }
      ];

  return (
    <div
      className="my-4 p-[var(--main-padding)] rounded-lg p-6 card flex flex-col gap-3"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <h1 className="title">{lang === "ar" ? "التراخيص" : "Licenses"}</h1>

      {licenses.map((lic, idx) => (
        <div key={idx} className="flex flex-col bg-gray-100/90 p-3 rounded-md">
          <span className="text-md md:text-[20px] font-semibold">{lic.title}</span>
          <span className="sub-font-size">{lic.issuer}</span>
        </div>
      ))}
    </div>
  );
}