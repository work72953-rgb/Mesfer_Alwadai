"use client";
import { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useContext(LanguageContext);

  const content = {
    ar: {
      title: "تواصل معي",
      phoneLabel: "+966535841346",
      linkedinLabel: "مسفر الوادعي",
      emailLabel: "mesfer.alwadai.sa@gmail.com",
    },
    en: {
      title: "Contact Me",
      phoneLabel: "+966535841346",
      linkedinLabel: "Mesfer Alwadai",
      emailLabel: "mesfer.alwadai.sa@gmail.com",
    },
  };

  return (
    <div
      id="footer_"
      className={`w-full h-[200px] p-5 bg-[#000000d7] text-white`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <span className="text-xl block mb-5">{content[lang].title}</span>

      <div
        className={`contact flex flex-col gap-2 md:flex-row md:justify-center md:items-center md:gap-6`}
      >
        <a
          href="https://wa.me/966535841346"
          target="_blank"
          className="flex items-center gap-2"
        >
          <Image src="/whatsapp.svg" alt="whatsapp icon" width={30} height={30} />
          {content[lang].phoneLabel}
        </a>

        <a
          href="https://www.linkedin.com/in/mesfer-alwadai/"
          target="_blank"
          className="flex items-center gap-2"
        >
          <Image src="/linkedin.svg" alt="linkedin icon" width={30} height={30} />
          {content[lang].linkedinLabel}
        </a>

        <a
          href="mailto:mesfer.alwadai.sa@gmail.com"
          target="_blank"
          className="flex items-center gap-2"
        >
          <Image src="/mail.svg" alt="mail icon" width={30} height={30} />
          {content[lang].emailLabel}
        </a>
      </div>
    </div>
  );
}