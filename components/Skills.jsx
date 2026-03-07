'use client';
import React, { useContext } from "react";
import { BarChart3, FileText, FileSignature, ShieldCheck, Users, BookOpen, Lock, Settings, Users2, MessageCircle, Target, HeartHandshake, Zap } from "lucide-react";
import { LanguageContext } from "@/context/LanguageContext";

// مهارات احترافية وعامة بالعربي والانجليزي
const tecSkills = [
  { title: { ar: "الامتثال للقانون التجاري", en: "Commercial Law Compliance" }, icon: <FileText size={20} /> },
  { title: { ar: "تقييم وإدارة المخاطر", en: "Risk Assessment & Management" }, icon: <ShieldCheck size={20} /> },
  { title: { ar: "صياغة العقود والتفاوض", en: "Contract Drafting & Negotiation" }, icon: <FileSignature size={20} /> },
  { title: { ar: "الحوكمة والإشراف التنظيمي", en: "Governance & Regulatory Oversight" }, icon: <Settings size={20} /> },
  { title: { ar: "استراتيجيات وسياسات الموارد البشرية", en: "HR Strategies & Policies" }, icon: <Users size={20} /> },
  { title: { ar: "التدقيق القانوني وإعداد التقارير", en: "Legal Audit & Reporting" }, icon: <BookOpen size={20} /> },
  { title: { ar: "الامتثال للخصوصية والأمن السيبراني", en: "Privacy & Cybersecurity Compliance" }, icon: <Lock size={20} /> },
];

const softSkills = [
  { title: { ar: "القيادة والتخطيط الاستراتيجي", en: "Leadership & Strategic Planning" }, icon: <Target size={20} /> },
  { title: { ar: "حل المشكلات واتخاذ القرارات", en: "Problem Solving & Decision Making" }, icon: <Zap size={20} /> },
  { title: { ar: "الاتصال والتفاوض", en: "Communication & Negotiation" }, icon: <MessageCircle size={20} /> },
  { title: { ar: "إدارة الفريق والتعاون", en: "Team Management & Collaboration" }, icon: <Users2 size={20} /> },
  { title: { ar: "المرونة والتكيف", en: "Adaptability & Flexibility" }, icon: <HeartHandshake size={20} /> },
  { title: { ar: "حل النزاعات والوساطة", en: "Conflict Resolution & Mediation" }, icon: <FileText size={20} /> },
  { title: { ar: "التفكير النقدي والتحليلي", en: "Critical & Analytical Thinking" }, icon: <BarChart3 size={20} /> },
];

export default function Skills() {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="my-4 rounded-lg p-6 card" dir={lang === "ar" ? "rtl" : "ltr"}>
      <h1 className="title">{lang === "ar" ? "المهارات" : "Skills"}</h1>

      <div className="flex flex-col items-center gap-5">
        {/* Technical Skills */}
        <div className="tec skills">
          <span className="block text-center text-xl font-semibold my-7 mx-auto p-1 w-[250px] bg-gray-200/70">
            {lang === "ar" ? "المهارات المهنية" : "Technical Skills"}
          </span>
          <ul className="flex justify-center items-center gap-3 flex-wrap">
            {tecSkills.map((t, idx) => (
              <li
                key={idx}
                className="max-sm:w-full sub-font-size flex items-center gap-2 even:bg-violet-100/40 odd:bg-cyan-100/50 rounded-md p-2"
              >
                {t.icon} {t.title[lang]}
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="soft skills">
          <span className="block text-center text-xl font-semibold my-7 mx-auto p-1 w-[250px] bg-gray-200/70">
            {lang === "ar" ? "المهارات الشخصية" : "Soft Skills"}
          </span>
          <ul className="flex justify-center items-center gap-3 flex-wrap">
            {softSkills.map((s, idx) => (
              <li
                key={idx}
                className="max-sm:w-full sub-font-size flex items-center gap-2 even:bg-violet-100/40 odd:bg-cyan-100/50 rounded-md p-2"
              >
                {s.icon} {s.title[lang]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}