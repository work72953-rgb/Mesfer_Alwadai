import Experiences_data from '../data/Experiences.json'

export default function Experiences() {
  return (
    <div className={` my-4 rounded-lg p-[var(--main-padding)] card flex flex-col gap-2.5`}>
        <h1 className='title'>الخبرات</h1>
   {
    Experiences_data.map((e)=>(
          <div className={`exp bg-gray-100/90 p-2 flex flex-col gap-3`} key={e.id}>
         <span className={`main-font-size font-semibold`}> {e.job_title}</span>
      <span className={`flex items-center gap-10 max-sm:flex-col max-sm:gap-3`}>
        <span className={`sub-font-size`}> {e.comp_name}</span>
        <span className={`flex items-center gap-3`}>
          <span className={`sub-font-size`}>{e.stDate}</span>
          to
          <span className={`sub-font-size`}>{e.endDate}</span>
        </span>
      </span>
      <span className={`sub-font-size w-fit bg-gray-300 p-1 rounded-sm`}>المهام:</span>
      <ol className={`list-decimal mr-5 sub-font-size`}>
       {e.tasks.map((t)=>(
        <li key={t}>{t}</li>
       ))}
      </ol>
     </div>
    ))
   }
    </div>
  );
}
