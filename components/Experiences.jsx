"use client";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Experiences_data_ar from "../data/Experiences_ar.json";
import Experiences_data_en from "../data/Experiences_en.json";

export default function Experiences() {
  const { lang } = useContext(LanguageContext);
  const data = lang === "ar" ? Experiences_data_ar : Experiences_data_en;

  return (
    <div className="my-4 rounded-lg p-[var(--main-padding)] card flex flex-col gap-2.5">
      <h1 className="title">{lang === "ar" ? "الخبرات المهنية" : "Work Experience"}</h1>

      {data.map((e) => (
        <div className="exp bg-gray-100/90 p-2 flex flex-col gap-3" key={e.id}>
          <span className="main-font-size font-semibold">{e.job_title}</span>

          <span className="flex items-center gap-10 max-sm:flex-col max-sm:gap-3">
            <span className="sub-font-size">{e.comp_name}</span>
            <span className="flex items-center gap-3">
              <span className="sub-font-size">{e.stDate}</span>
              {lang === "ar" ? " إلى " : " – "}
              <span className="sub-font-size">{e.endDate}</span>
            </span>
          </span>

          <span className="sub-font-size w-fit bg-gray-300 p-1 rounded-sm">
            {lang === "ar" ? "المهام:" : "Tasks:"}
          </span>

          <ol className="list-decimal mr-5 ml-5 sub-font-size">
            {e.tasks.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}