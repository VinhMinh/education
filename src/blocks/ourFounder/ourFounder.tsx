import Image from "next/image";
import styles from "./styles.module.css"

export default function OurFounder({position,data}:any) {
  const containers = data?.containers  ;
  const classContainers = containers === 'full' ? 'px-5 lg:px-10' : ' px-5'
  return (
    <section className={`${containers} ${classContainers} pt-28 pb-20 flex flex-wrap items-center justify-end overflow-hidden position-${position}`}>
      <div className="w-full">
        {data?.position && (
          <h3 className="text-2xl lg:text-3xl font-extrabold mb-2.5 pl-4 border-l border-[#667084]">
            {data?.position}
          </h3>
        )}

        {data?.name && (
          <h2 className="text-4xl lg:text-[56px] font-extrabold leading-none mb-6">
            {data?.name}
          </h2>
        )}

      </div>
      {
        data?.thumbnail && (
           <div className={`w-full relative h-[540px]`}>
            <Image
              src={data?.thumbnail.url}
              alt={data?.thumbnail.name}
              fill
              className="w-full h-auto object-cover rounded-[20px]"
            />
          </div>
        )
      }
     
    </section>
  );
}
