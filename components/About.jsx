import Image from "next/image";

export default function About() {
  return (
    <div className="w-full my-4 rounded-lg relative z-10 bg-gray-100 overflow-hidden p-6">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/law.jpg')] bg-cover bg-no-repeat bg-bottom-left opacity-30 -z-10"></div>

      <div className="flex flex-col md:flex-row-reverse justify-end items-center gap-10 relative z-10">
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
          <h1 className="font-bold text-2xl">
            مسفر الوادعي{" "}
            <span className="text-[#feb429] leading-16">
              خبير الحوكمة والمخاطر والامتثال{" "}
            </span>
          </h1>
          <p className="w-full lg:w-150 text-lg leading-10">
            أمتلك خلفية قانونية متقدمة، ولدي خبرة في بناء وتطوير أطر الحوكمة
            والامتثال للشركات بما يتوافق مع الأنظمة السعودية وأفضل الممارسات
            العالمية. شاركت في تأسيس أول فرع سعودي لشركة دولية، حيث قدت تطوير
            سياسات الحوكمة وإدارة المخاطر وتعزيز منظومة الامتثال التنظيمي داخل
            الشركة.
          </p>
        </div>
      </div>

      {/* Contact Icons */}
      <div className="contact relative z-10 flex justify-center items-center gap-2 my-4 flex-wrap">
        <a href="https://wa.me/966535841346">
          <Image
            src={"/whatsapp.svg"}
            alt={"whatsapp icon"}
            width={30}
            height={30}
          />
        </a>
        <a href="https://www.linkedin.com/in/mesfer-alwadai/">
          <Image
            src={"/linkedin.svg"}
            alt={"linkedin icon"}
            width={30}
            height={30}
          />
        </a>
        <a href="mailto:mesfer.alwadai.sa@gmail.com">
          <Image src={"/mail.svg"} alt={"mail icon"} width={30} height={30} />
        </a>
      </div>
      <div className={`cv w-full flex justify-center items-center`}>

      <button className={`w-full text-lg font-semibold md:w-70 bg-black/60 cursor-pointer text-white py-2 rounded-md`}>
      <a href="https://drive.google.com/file/d/180g-mXdhFxJHZqnmpGFd_exL-j28t6dn/view">تصفح السيرة الذاتية</a>
      </button>
      </div>
    </div>
  );
}
