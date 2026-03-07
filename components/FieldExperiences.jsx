"use client";
import  { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // adjust path if needed

export default function FieldExperiences() {
  const { lang } = useContext(LanguageContext);

  // Arabic and English fields
  const fields = {
    ar: [
      "الحوكمة المؤسسية وتطوير سياسات الحوكمة",
      "الامتثال التنظيمي والالتزام بالأنظمة والتشريعات",
      "إدارة المخاطر المؤسسية وتقييم المخاطر القانونية",
      "صياغة ومراجعة العقود والاتفاقيات التجارية",
      "التدقيق القانوني ومراجعة السياسات الداخلية",
      "الامتثال لحماية البيانات والأنظمة السيبرانية",
      "تقديم الاستشارات القانونية للإدارة العليا"
    ],
    en: [
      "Corporate governance and policy development",
      "Regulatory compliance and adherence to laws",
      "Enterprise risk management and legal risk assessment",
      "Drafting and reviewing commercial contracts and agreements",
      "Legal auditing and internal policy review",
      "Compliance with data protection and cybersecurity regulations",
      "Providing legal consultancy to senior management"
    ]
  };

  return (
    <div className="my-4 p-[var(--main-padding)] rounded-lg card flex flex-col gap-3">
      <h1 className="title">{lang === "ar" ? "مجالات الخبرة" : "Fields of Expertise"}</h1>

      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <ul className='list-disc'>
          {fields[lang].map((f, idx) => (
            <li className="text-md md:text-[20px] font-semibold mx-6" key={idx}>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}