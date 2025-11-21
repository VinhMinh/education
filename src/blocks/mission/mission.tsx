import Image from "next/image";
import styles from "./styles.module.css"

export default function OurFounder({position,data}:any) {
  const containers = data?.containers  ;
  const classContainers = containers === 'full' ? 'px-5 lg:px-10' : ' px-5'
  return (
    <section className={`${containers} ${classContainers} ${styles.mission} lg:pt-20 pb-20 flex flex-wrap items-center justify-end overflow-hidden position-${position}`}>
      {
        data?.testimonials.map((testimonial: any, index: number) => (
          
          <div className={`${styles.missionItem} flex flex-col lg:flex-row gap-5 py-16 border-b border-[#667084]`} key={index}>
            {testimonial?.title && (
              <h3 className="lg:w-[220px] text-2xl lg:text-3xl font-extrabold mb-2.5">
                {testimonial?.title}
              </h3>
            )}
            <div className="lg:flex-1">
              {testimonial?.subTitle && (
                <h3 className="text-xl lg:text-[28px] font-light leading-none mb-6">
                  {testimonial?.subTitle}
                </h3>
              )}

              {testimonial?.desc && (
                <div className="editorContent text-base leading-none" dangerouslySetInnerHTML={{ __html: testimonial?.desc }} />
              )}

            </div>
          </div>
        ))
      }
      
    </section>
  );
}
