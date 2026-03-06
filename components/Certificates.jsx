'use client'
import Image from "next/image";
import { useState } from "react";
import certs from "../data/Certificates.json"; 

export default function Certificates() {
  const [show, setShow] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const toggleShow = () => setShow(!show);

  return (
    <div className="w-full my-4 rounded-lg p-[var(--main-padding)] card relative">
      <h1 className='title mb-4'>الشهادات المهنية</h1>

      <div
        className={`
          flex flex-wrap justify-center items-start gap-5
          ${show ? 'h-auto overflow-auto' : certs.length > 6 ? 'max-sm:h-75 md:h-152 lg:h-170 overflow-hidden' : ''}
        `}
      >
        {certs.map((c, idx) => (
          <div 
            key={idx} 
            className="bg-white border rounded-md shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full h-72 md:w-72 lg:w-80 lg:h-80 relative"
            onClick={() => setModalImg(`/certificates/${c.img}.png`)}
          >
            <Image src={`/certificates/${c.img}.png`} alt={c.title} fill className="object-cover" />
            <div className="absolute bottom-0 w-full bg-black/60 text-white p-2 text-sm text-center">
              <div>{c.title}</div>
              <div className="text-xs my-2">{c.issuer}</div>
              <span className="px-2 py-1 rounded-md bg-black/40 w-full block">انقر للاطلاع على الشهادة</span>
            </div>
          </div>
        ))}
      </div>

      {certs.length > 6 && (
        <button
          className="bg-black/70 p-2 rounded-md text-white w-50 block mx-auto mt-4"
          onClick={toggleShow}
        >
          {show ? 'عرض أقل' : 'أظهر المزيد'}
        </button>
      )}

      {modalImg && (
        <div 
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setModalImg(null)}
        >
          <Image src={modalImg} alt="Certificate" width={800} height={600} className="object-contain" />
        </div>
      )}
    </div>
  );
}