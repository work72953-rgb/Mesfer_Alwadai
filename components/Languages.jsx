'use client';
import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function Languages() {
  const { lang } = useContext(LanguageContext);

  // Define membership names for both languages
  const memberships = lang === "ar" 
    ? [
"العربية",
"الإنجليزية",
"الصينية"
      ]
    : [
        "Arabic",
        "English",
        "Chinese",
      ];

  return (
    <div className="my-4 p-[var(--main-padding)] rounded-lg p-6 card flex flex-col gap-3" dir={lang === "ar" ? "rtl" : "ltr"}>
      <h1 className="title">{lang === "ar" ? "اللغات" : "Languages"}</h1>

      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <ul className="list-disc">
          {memberships.map((m, idx) => (
            <li className="text-md md:text-[20px] font-semibold mx-6" key={idx}>
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}