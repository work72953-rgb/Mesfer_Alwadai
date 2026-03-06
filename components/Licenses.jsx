import React from "react";

export default function Licenses() {
    const Licenses =[
        " الأكاديمية العالمية للتمويل والإدارة",
        "مجموعة الامتثال والأخلاقيات المفتوحة",
        "الهيئة السعودية للمحامين",
        "جمعية معين القانونية"
    ]
  return (
    <div className="my-4 p-[var(--main-padding)] rounded-lg p-6 card flex flex-col gap-3">
      <h1 className="title">التراخيص</h1>

     <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <span className="main-font-size font-bold">رخصة ممارسة التمثيل القانوني</span>
        <span className="sub-font-size">وزارة العدل</span>
      </div>

        <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <span className="main-font-size font-bold">رخصة ممارسة تسجيل العقارات</span>
        <span className="sub-font-size"> الهيئة العامة للعقار</span>
      </div>

    </div>
  );
}