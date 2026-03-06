import React from 'react'

export default function FieldExperiences() {
    const fields=[
           " الحوكمة المؤسسية وتطوير سياسات الحوكمة",
    "الامتثال التنظيمي والالتزام بالأنظمة والتشريعات",
    "إدارة المخاطر المؤسسية وتقييم المخاطر القانونية",
    "صياغة ومراجعة العقود والاتفاقيات التجارية",
    "التدقيق القانوني ومراجعة السياسات الداخلية",
    "الامتثال لحماية البيانات والأنظمة السيبرانية",
    "تقديم الاستشارات القانونية للإدارة العليا"
    ]
  return (
     <div className="my-4 p-[var(--main-padding)] rounded-lg p-6 card flex flex-col gap-3">
      <h1 className="title">مجالات الخبرة</h1>

      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
      <ul>

      </ul>
      {fields.map((f,idx)=>(
          <li className="text-[14px] md:main-font-size font-bold mx-6" key={idx}>{f}</li>
      ))}

      </div>

    </div>
  )
}
