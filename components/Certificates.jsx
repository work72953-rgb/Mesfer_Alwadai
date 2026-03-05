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
      <h1 className='title'>الشهادات</h1>
      <div
        className={`
          
    flex flex-wrap justify-center items-center gap-5 overflow-hidden
    ${show?'h-auto overflow-auto': cert.length >6? 'max-sm:h-[265px] md:h-[530px] lg:h-[730px]':''}
    `}
      >
        {cert.map((c, idx) => (
          <div
            className={`img w-full h-[250px] md:w-[300px] lg:w-[450px] lg:h-[350px]
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
        w-[200px] 
        block mx-auto mt-[15px]
          `} onClick={ShowContent}>
{show?'عرض أقل':'أظهر المزيد'}
          </button> : ''
       }
    </div>
  );
}
