const cources = [
  'دورة المعايير الدولية للتقارير المالية IFRS',
  'دورة التحليل المالي المتقدم',
  'دورة إعداد الميزانيات التقديرية',
  'دورة المراجعة الداخلية وإدارة المخاطر',
  'دورة استخدام أنظمة ERP المحاسبية'
];

export default function Courses() {
  return (
    <div className={` my-4 rounded-lg p-[var(--main-padding)] card`}>
        <h1 className='title'>الدورات</h1>
      <ul className="list-disc mr-5 sub-font-size">
      {cources.map((c,idx)=><li key={idx} >{c}</li>)}
      </ul>
    </div>
  )
}
