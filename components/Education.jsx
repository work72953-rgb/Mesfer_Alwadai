"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function Education() {
  const { lang } = useContext(LanguageContext);

  const educationData = [
    {
      title: { ar: "ماجستير في القانون", en: "Master of Law" },
      university: { ar: "جامعة الملك سعود", en: "King Saud University" },
      grade: {
        ar: "التقدير: مرتبة الشرف الأولى",
        en: "Grade: First Class Honors",
      },
      thesis: {
        title: {
          ar: "عنوان البحث: المسؤولية الجنائية عن أخطاء الذكاء الاصطناعي",
          en: "Thesis: Criminal Liability for Artificial Intelligence Errors",
        },
        link: "https://download1979.mediafire.com/cg9u3vjh816gVhVW2z2840C9_xBcZU6MiTWWA8GN_-mRzSYmVn2NMw7wDbKp77hjHel7RSXF1KPC9-HDdB8StUjGeFJF7BreMnqHLGJ4O1MRWJ1EkhD8irrIHPFxRfSnFJdUgrky-7mh8dQnKzHbhG2cEI6cQkHXmYsuT701F2_fCZg/hyh4n7mldeq5q5h/%D8%A7%D9%84%D9%85%D8%B3%D8%A4%D9%88%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%AC%D9%86%D8%A7%D8%A6%D9%8A%D8%A9+%D8%B9%D9%86+%D8%A3%D8%AE%D8%B7%D8%A7%D8%A1+%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1+%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A.pdf",
      },
    },
    {
      title: {
        ar: "برنامج القيادة التنفيذية",
        en: "Executive Leadership Program",
      },
      university: { ar: "جامعة أكسفورد", en: "University of Oxford" },
      year: { ar: "سنة التخرج: 2023", en: "Graduation Year: 2023" },
    },
    {
      title: {
        ar: "الذكاء الاصطناعي للمحامين | برنامج تنفيذي",
        en: "Artificial Intelligence for Lawyers | Executive Program",
      },
      university: { ar: "جامعة ميشيغان", en: "University of Michigan" },
    },
    {
      title: {
        ar: "الحوكمة البيئية والاجتماعية والنشاط الاجتماعي | برنامج تنفيذي",
        en: "Environmental, Social & Governance | Executive Program",
      },
      university: { ar: "جامعة بنسلفانيا", en: "University of Pennsylvania" },
    },
    {
      title: {
        ar: "القانون التجاري الدولي | برنامج تنفيذي",
        en: "International Commercial Law | Executive Program",
      },
      university: {
        ar: "جامعة أنهوك المكسيك الشمالية",
        en: "Anahuac University North Mexico",
      },
    },
    {
      title: {
        ar: "الذكاء الاصطناعي والقانون | برنامج تنفيذي",
        en: "Artificial Intelligence & Law | Executive Program",
      },
      university: { ar: "جامعة لوند", en: "Lund University" },
    },
    {
      title: { ar: "بكالوريوس في القانون", en: "Bachelor of Law" },
      university: { ar: "جامعة نجران", en: "Najran University" },
      grade: { ar: "التقدير: مرتبة الشرف", en: "Grade: Honors" },
      year: { ar: "سنة التخرج: 2022", en: "Graduation Year: 2022" },
    },
  ];

  return (
    <div className="my-4 p-[var(--main-padding)] rounded-lg card flex flex-col gap-3">
      <h1 className="title">
        {lang === "ar" ? "المؤهلات العلمية" : "Education"}
      </h1>

      {educationData.map((edu, idx) => (
        <div key={idx} className="flex flex-col bg-gray-100/90 p-3 rounded-md">
          <span className="text-md md:text-[20px] font-semibold">
            {edu.title[lang]}
          </span>
          <span className="sub-font-size">{edu.university[lang]}</span>
          {edu.grade && (
            <span className="sub-font-size">{edu.grade[lang]}</span>
          )}
          {edu.year && <span className="sub-font-size">{edu.year[lang]}</span>}

          {edu.thesis && (
            <div className="flex flex-col mt-1">
              <span className="sub-font-size">{edu.thesis.title[lang]}</span>
              <a
                href={edu.thesis.link}
                target="_blank"
                className="text-blue-600 font-semibold hover:underline text-md"
              >
                {lang === "ar" ? "تحميل البحث" : "Download Thesis"}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
