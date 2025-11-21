import Image from "next/image";
import styles from "./styles.module.css"

export default function Cards({position,data}:any) {
  const containers = data?.containers  ;
  const classContainers = containers === 'full' ? 'px-5 lg:px-10' : ' px-5'
  return (
    <section className={`${containers} ${classContainers} lg:pt-28 pb-20 flex flex-wrap items-center justify-end overflow-hidden position-${position}`}>
      <div className="w-full">
        {data?.subTitle && (
          <h3 className="text-2xl lg:text-3xl font-extrabold mb-2.5 pl-4 border-l border-[#667084]">
            {data?.subTitle}
          </h3>
        )}

        {data?.title && (
          <h2 className="text-4xl lg:text-[56px] font-extrabold leading-none mb-6">
            {data?.title}
          </h2>
        )}

      </div>
      <div className="w-full flex flex-col gap-5">
        {
          data?.cards.map((card: any, index: number) => (
            
            <div className={`flex p-6 rounded-[20px] bg-[#ffffff1a]`} key={index}>
              <div className="flex  w-full gap-10 flex-col lg:flex-row">

                <div>
                    {card?.title && (
                    <h3 className="text-2xl lg:text-3xl font-extrabold mb-5">
                      {card?.title}
                    </h3>
                  )}
                  {card?.desc && (
                    <div className="editorContent text-base leading-none" dangerouslySetInnerHTML={{ __html: card?.desc }} />
                  )}
                </div>
                {
                  card?.thumbnail && (
                    <div className={`${styles.thumb} relative h-[300px] cardThumb`}>
                      <Image
                        src={card?.thumbnail.url}
                        alt={card?.thumbnail.name}
                        fill
                        className="w-full h-auto object-cover rounded-[20px]"
                      />
                    </div>
                  )
                }

              </div>
            </div>
          ))
        }
      </div>
     
    </section>
  );
}
