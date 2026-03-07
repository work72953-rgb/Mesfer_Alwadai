import React from "react";

export default function Education() {
  return (
    <div className="my-4 p-[var(--main-padding)] rounded-lg p-6 card flex flex-col gap-3">
      <h1 className="title">المؤهلات العلمية</h1>

      {/* جامعة الملك سعود - ماجستير قانون */}
      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <span className="text-md md:text-[20px] font-semibold">ماجستير في القانون</span>
        <span className="sub-font-size">جامعة الملك سعود</span>
        <span className="sub-font-size">التقدير: مرتبة الشرف الأولى</span>
        {/* لا يوجد سنة محددة */}
      </div>

      {/* جامعة أكسفورد - برنامج القيادة التنفيذية */}
      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <span className="text-md md:text-[20px] font-semibold">برنامج القيادة التنفيذية</span>
        <span className="sub-font-size">جامعة أكسفورد</span>
        <span className="sub-font-size">سنة التخرج: 2023</span>
      </div>

      {/* جامعة ميشيغان - الذكاء الاصطناعي للمحامين */}
      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <span className="text-md md:text-[20px] font-semibold">الذكاء الاصطناعي للمحامين | برنامج تنفيذي</span>
        <span className="sub-font-size">جامعة ميشيغان</span>
        {/* لا يوجد تقدير أو سنة محددة */}
      </div>

      {/* جامعة بنسلفانيا - الحوكمة البيئية والاجتماعية والنشاط الاجتماعي */}
      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <span className="text-md md:text-[20px] font-semibold">الحوكمة البيئية والاجتماعية والنشاط الاجتماعي | برنامج تنفيذي</span>
        <span className="sub-font-size">جامعة بنسلفانيا</span>
      </div>

      {/* جامعة أنهوك المكسيك الشمالية - القانون التجاري الدولي */}
      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <span className="text-md md:text-[20px] font-semibold">القانون التجاري الدولي | برنامج تنفيذي</span>
        <span className="sub-font-size">جامعة أنهوك المكسيك الشمالية</span>
      </div>

      {/* جامعة لوند - الذكاء الاصطناعي والقانون */}
      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <span className="text-md md:text-[20px] font-semibold">الذكاء الاصطناعي والقانون | برنامج تنفيذي</span>
        <span className="sub-font-size">جامعة لوند</span>
      </div>

      {/* جامعة نجران - بكالوريوس قانون */}
      <div className="flex flex-col bg-gray-100/90 p-3 rounded-md">
        <span className="text-md md:text-[20px] font-semibold">بكالوريوس في القانون</span>
        <span className="sub-font-size">جامعة نجران</span>
        <span className="sub-font-size">التقدير:  مرتبة الشرف</span>
        <span className="sub-font-size">سنة التخرج: 2022</span>
      </div>
    </div>
  );
}