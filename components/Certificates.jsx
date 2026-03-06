'use client'
import Image from "next/image";
import { useState } from "react";

// const cert = ["cer.webp", "cer.webp", "cer.webp", "cer.webp", "cer.webp", "cer.webp", "cer.webp", "cer.webp", "cer.webp", "cer.webp",];
const cert = Array.from({length:27},(_,i)=>`/certificates/img_${i+1}.png`)
export default function Certificates() {
  
  const [show,setShow] = useState(false)
  const ShowContent = ()=>{
    setShow(!show)
  }
  
  return (
    <div
      className={`w-full  my-4 rounded-lg p-[var(--main-padding)]
        card relative
    `}
    >
      <h1 className='title_2'>الشهادات المهنية</h1>
      <div
        className={`
          
    flex flex-wrap justify-center items-center gap-5 overflow-hidden
    ${show?'h-auto overflow-auto': cert.length >6? 'max-sm:h-66.25 md:h-132.5 lg:h-182.5':''}
    `}
      >
        {cert.map((c, idx) => (
          <div
            className={`img w-full h-62.5 md:w-75 lg:w-112.5 lg:h-87.5
                       relative overflow-hidden 
                        border  bg-center shrink-0 `}
                        key={idx}
          >
            <Image src={`${c}`} alt={`Certificate number ${idx + 1}`} fill  />
          </div>
        ))}
      </div>
       {
        cert.length > 6?  <button className={`bg-black/70 p-2 rounded-md text-white 
        w-50 
        block mx-auto mt-3.75
          `} onClick={ShowContent}>
{show?'عرض أقل':'أظهر المزيد'}
          </button> : ''
       }
    </div>
  );
}
