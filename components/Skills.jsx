import React from "react";
import { BarChart3, FileText, FileSignature, ShieldCheck, Users, BookOpen, Lock, Settings, Users2, MessageCircle, Target, HeartHandshake, Zap } from "lucide-react";

// المهارات التقنية مع الأيقونات
const tecSkills = [
  { title: "الامتثال للقانون التجاري", icon: <FileText size={20} /> },
  { title: "تقييم وإدارة المخاطر", icon: <ShieldCheck size={20} /> },
  { title: "صياغة العقود والتفاوض", icon: <FileSignature size={20} /> },
  { title: "الحوكمة والإشراف التنظيمي", icon: <Settings size={20} /> },
  { title: "استراتيجيات وسياسات الموارد البشرية", icon: <Users size={20} /> },
  { title: "التدقيق القانوني وإعداد التقارير", icon: <BookOpen size={20} /> },
  { title: "الامتثال للخصوصية والأمن السيبراني", icon: <Lock size={20} /> },
];

// المهارات الشخصية مع الأيقونات
const softSkills = [
  { title: "القيادة والتخطيط الاستراتيجي", icon: <Target size={20} /> },
  { title: "حل المشكلات واتخاذ القرارات", icon: <Zap size={20} /> },
  { title: "الاتصال والتفاوض", icon: <MessageCircle size={20} /> },
  { title: "إدارة الفريق والتعاون", icon: <Users2 size={20} /> },
  { title: "المرونة والتكيف", icon: <HeartHandshake size={20} /> },
  { title: "حل النزاعات والوساطة", icon: <FileText size={20} /> },
  { title: "التفكير النقدي والتحليلي", icon: <BarChart3 size={20} /> },
];

export default function Skills() {
  return (
    <div className="my-4 rounded-lg p-6 card">
      <h1 className="title">المهارات</h1>

      <div className="flex flex-col items-center gap-5">
        <div className="tec skills">
          <span className="block text-center text-xl font-semibold my-7 mx-auto p-1 w-[250px] bg-gray-200/70">
            المهارات المهنية
          </span>

          <ul className="flex justify-center items-center gap-3 flex-wrap">
            {tecSkills.map((t, idx) => (
              <li
                className={`sub-font-size flex items-center gap-2 even:bg-violet-100/40 odd:bg-cyan-100/50 rounded-md p-2`}
                key={idx}
              >
                {t.icon} {t.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="soft skills">
          <span className="block text-center text-xl font-semibold my-7 mx-auto p-1 w-[250px] bg-gray-200/70">
            المهارات الشخصية
          </span>

          <ul className="flex justify-center items-center gap-3 flex-wrap">
            {softSkills.map((s, idx) => (
              <li
                className={`sub-font-size flex items-center gap-2 even:bg-violet-100/40 odd:bg-cyan-100/50 rounded-md p-2`}
                key={idx}
              >
                {s.icon} {s.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}