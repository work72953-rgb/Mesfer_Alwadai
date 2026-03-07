"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function About() {
  const { lang } = useContext(LanguageContext);

  const content = {
    ar: {
      title: "خبير الحوكمة والمخاطر والامتثال",
      summary:
        "أمتلك خلفية قانونية متقدمة، ولدي خبرة في بناء وتطوير أطر الحوكمة والامتثال للشركات بما يتوافق مع الأنظمة السعودية وأفضل الممارسات العالمية. شاركت في تأسيس أول فرع سعودي لشركة دولية، حيث قدت تطوير سياسات الحوكمة وإدارة المخاطر وتعزيز منظومة الامتثال التنظيمي داخل الشركة.",
      button: "تصفح السيرة الذاتية",
    },
    en: {
      title: "Governance, Risk & Compliance Expert",
      summary:
        "I have an advanced legal background and experience in building and developing corporate governance and compliance frameworks aligned with Saudi regulations and global best practices. I contributed to establishing the first Saudi branch of an international company, leading the development of governance policies, risk management, and strengthening the regulatory compliance system within the organization.",
      button: "View Resume",
    },
  };

  return (
    <div className="w-full my-4 rounded-lg relative z-10 bg-gray-100 overflow-hidden p-6">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/law.jpg')] bg-cover bg-no-repeat bg-bottom-left opacity-30 -z-10"></div>

      <div
        className={`flex flex-col md:flex-row-reverse justify-end items-center gap-10 relative z-10 ${
          lang === "ar" ? "text-right" : "text-left"
        }`}
      >
        {/* Profile Image */}
        <div
          className="img w-62.5 h-62.5 md:w-75 md:h-75 relative overflow-hidden 
          rounded-full flex justify-center items-center shrink-0
          bg-white border-4 border-black/55"
        >
          <Image
            src="/personal_photo.jpeg"
            alt="my pic"
            width={300}
            height={300}
            className="mt-12"
          />
        </div>

        {/* Summary */}
        <div className="summry">
          <h1 className="font-bold text-2xl leading-12">{content[lang].title}</h1>
          <p className="w-full lg:w-150 text-lg leading-10">{content[lang].summary}</p>
        </div>
      </div>

      {/* CV Button */}
      <div className="cv w-full flex justify-center items-center mt-6">
        <button className="w-full text-lg font-semibold md:w-70 bg-black/60 cursor-pointer text-white py-2 rounded-md">
          <a href="https://drive.google.com/file/d/180g-mXdhFxJHZqnmpGFd_exL-j28t6dn/view">
            {content[lang].button}
          </a>
        </button>
      </div>
    </div>
  );
}