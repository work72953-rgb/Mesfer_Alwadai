"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function About() {
  const { lang } = useContext(LanguageContext);
const Ar_summary =`

مختص قانوني ومحترف الحوكمة وإدارة المخاطر والامتثال، حاصل على درجة الماجستير في القانون العام (LLM) مع مرتبة الشرف الأولى من جامعة الملك سعود بالإضافة إلى برنامج القيادة التنفيذية من جامعة أكسفورد 

يمتلك خبرة تتجاوز أربع سنوات، ركّز خلالها على تطوير الأطر القانونية، وبناء سياسات الحوكمة، وتصميم أنظمة الامتثال، إلى جانب تقديم الاستشارات القانونية الاستراتيجية للإدارة العليا بما يدعم تحقيق الأهداف المؤسسية ويعزز النمو المستدام.

يحمل مجموعة من الشهادات المهنية العالمية في الحوكمة والامتثال وإدارة المخاطر، من أبرزها: GRCP®, CME-1®, GRCA®, CCO®, SASL®, ICCGO®, CRMP®, IRMP®, IPMP®, ICEP®, IAIP®, IDPP®, IAAP®
`

const En_summary = `
      Legal and GRC professional holding a Master of Public Law ( LLM )
       with First Class Honors from King Saud University, along with executive professional training
        from University of Oxford. Focused on legal affairs, governance, risk, and compliance, 
        with over four years of experience. Led the development of legal frameworks, governance policies, 
        and compliance structures, while providing strategic legal advisory to senior management 
        to support organizational objectives and drive sustainable growth. Holds multiple globally 
        recognized certifications in GRC, compliance, and risk management, 
        including GRCP®, CME-1®, GRCA®, CCO®, SASL®, ICCGO®, CRMP®, IRMP®, IPMP®, ICEP®, IAIP®, IDPP®, and IAAP®.

`
const content = {
  ar: {
    title: "مسؤول قانوني ومحترف الحوكمة",
    summary:Ar_summary,
    button: "تصفح السيرة الذاتية",
  },
  en: {
    title: "Legal Officer and Governance Professional",
    summary:En_summary,
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
            className="mt-15 ml-6"
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
          <a href="https://drive.google.com/file/d/1lQo8nF-vXueU7-vLTMaaQi3imvr9QKa_/view?usp=drivesdk">
            {content[lang].button}
          </a>
        </button>
      </div>
    </div>
  );
}