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
      "مسؤول الشؤون القانونية، حاصل على درجة الماجستير في القانون من جامعة الملك سعود بمرتبة الشرف، إضافة إلى برنامج أكسفورد التنفيذي وعدد من الشهادات الدولية المتقدمة في الحوكمة وإدارة المخاطر والامتثال مثل GRCP وGRCA وCCO وICCGO وCRMP وIRMP وIPMP وSASL وCPB وIAIP وIAAP وغيرها من الاعتمادات المهنية. أمتلك خبرة عملية تتجاوز أربع سنوات، شاركت خلالها في تأسيس أول فرع لشركة دولية قابضة، حيث قدت بناء وتطوير المنظومة القانونية للشركة وصياغة سياسات الحوكمة وتعزيز إطار الامتثال المؤسسي، مع دعم الإدارة التنفيذية العليا باستشارات قانونية تسهم في تحقيق الأهداف الاستراتيجية وضمان استدامة النمو.",
    button: "تصفح السيرة الذاتية",
  },
  en: {
    title: "Governance, Risk & Compliance Expert",
    summary:
      "Legal Affairs Officer holding a Master’s degree in Law with honors from King Saud University, in addition to completing the Oxford Executive Program and obtaining several advanced international certifications in governance, risk management, and compliance, including GRCP, GRCA, CCO, ICCGO, CRMP, IRMP, IPMP, SASL, CPB, IAIP, and IAAP. With over four years of professional experience, he contributed to establishing the first Saudi branch of an international holding company, where he led the development of the company’s legal framework, governance policies, and compliance structure, while providing strategic legal advisory to senior management to support organizational objectives and ensure sustainable growth.",
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