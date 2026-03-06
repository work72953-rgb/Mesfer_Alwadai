import React from "react";

export default function MemberShips() {
    const memberships =[
        " الأكاديمية العالمية للتمويل والإدارة",
        "مجموعة الامتثال والأخلاقيات المفتوحة",
        "الهيئة السعودية للمحامين",
        "جمعية معين القانونية"
    ]
  return (
    <div className="my-4 rounded-lg p-6 card flex flex-col gap-3">
      <h1 className="title">العضويات</h1>

      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
      <ul>

      </ul>
      {memberships.map((m,idx)=>(
          <li className="text-[16px] md:main-font-size font-bold mx-6" key={idx}>{m}</li>
      ))}

      </div>

    </div>
  );
}