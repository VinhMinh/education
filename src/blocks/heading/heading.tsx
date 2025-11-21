export default function Heading({position,data}:any) {
  const containers = data?.containers  ;
  const classContainers = containers === 'full' ? 'px-5 lg:px-10' : ' px-5'
  return (
    <section className={`${containers} ${classContainers} pt-10 pb-10 lg:pb-20 flex items-center justify-end overflow-hidden position-${position}`}>
      <div className="w-full text-center">
        {data?.title && (
          <h2 className="text-4xl lg:text-[56px] font-extrabold leading-tight mb-5">
            {data?.title}
          </h2>
        )}

        {data?.desc && (
          <p className="text-lg colorGray mb-8">
            {data?.desc}
          </p>
        )}

      </div>
    </section>
  );
}
