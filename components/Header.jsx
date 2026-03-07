"use client";
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // adjust path if needed

export default function Header() {
  const { lang, toggleLang } = useContext(LanguageContext);

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    if (selectedLang !== lang) toggleLang(); // switch if different
  };

  return (
    <div
      className={`h-20 w-full bg-[#000000d7] text-white flex justify-between items-center p-5`}
    >
      <span className={`text-md md:text-3xl font-bold`}>
        {lang==='ar'?"مسفر الوادعي":"Mesfer Alwadai"}
      </span>
      {/* <Image width={150} height={150} src={'/logo.png'} alt="logo"/> */}
      <nav className={`p-1 flex justify-center items-center gap-5`}>
        <a href="#footer_">{lang==="ar"?"تواصل معي":"Contact Me"}</a>
        <select
          value={lang}
          onChange={handleChange}
          className="bg-black/40 text-white px-2 py-1 rounded"
        >
          <option value="ar">عربي</option>
          <option value="en">English</option>
        </select>
      </nav>
    </div>
  );
}