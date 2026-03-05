import volunteer_data from '../data/Volunter.json'

export default function Volunteering() {
  return (
     <div className={` my-4 rounded-lg p-(--main-padding) card flex flex-col gap-2.5`}>
        <h1 className='title'>التطوع</h1>
    {
        volunteer_data.map((v)=>(
             <div className="vol bg-gray-100/90 p-2 flex flex-col gap-3" key={v.id}>
         <span className={`sub-font-size`}>الدور: {v.role}</span>
         <span className={`sub-font-size`}>اسم الجهة: {v.org_name}</span>
      <span className={`flex items-center gap-10`}>    
        <span className={`flex items-center gap-3`}>
          <span className={`sub-font-size`}>{v.stDate}</span>
          to
          <span className={`sub-font-size`}>{v.endDate}</span>
        </span>
      </span>
      <span className={`sub-font-size w-fit bg-gray-300 p-1 rounded-sm`}>المهام:</span>
      <ol className={`list-disc mr-5 sub-font-size`}>
       {v.tasks.map((t)=><li key={t}>{t}</li>)}
      </ol>
     </div>
        ))
    }
    </div>
  )
}
