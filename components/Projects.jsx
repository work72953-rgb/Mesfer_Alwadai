import projects_data from "../data/projects.json";
export default function Projects() {
  return (
    <div
      className={` my-4 rounded-lg p-[var(--main-padding)] card flex flex-col gap-2.5`}
    >
      <h1 className="title">المشاريع</h1>
      {projects_data.map((p) => (
        <div
          className={`proj  bg-gray-100/90 p-2 flex flex-col gap-3
         `}
          key={p.id}
        >
          
            <span className={`main-font-size  font-semibold`}>{p.project_name}</span>
            <span className={`flex items-center gap-10`}>
              <span className={`flex items-center gap-3`}>
                <span className={`sub-font-size`}>{p.stDate}</span>
                إلى
                <span className={`sub-font-size `}>{p.endDate}</span>
              </span>
            </span>
            <span className={`sub-font-size w-fit bg-gray-300 p-1 rounded-sm`}>المهام:</span>
            <ol className={`list-disc mr-5 flex flex-col sub-font-size`}>
              {p.tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          
        </div>
      ))}
    </div>
  );
}
