export default function NumberOfStudents({position,data}:any) {
  const containers = data?.containers  ;
  const classContainers = containers === 'full' ? 'px-5 lg:px-10' : ' px-5'
  return (
    <section className={`${containers} ${classContainers} flex items-center justify-end overflow-hidden position-${position}`}>
      <div className={`w-full flex flex-wrap lg:flex-nowrap pb-10 lg:pb-20 gap-5 lg:gap-14 ${data?.border && 'border-b border-[#667084]'}`}>
        {data?.number && (
          <h2 className="text-4xl lg:text-[56px] font-extrabold leading-tight lg:mb-5 whitespace-nowrap">
            {data?.number}
          </h2>
        )}

        {data?.desc && (
          <div className="text-2xl lg:text-4xl">
            {data?.desc}
          </div>
        )}

      </div>
    </section>
  );
}
