'use client'
import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import LocaleIcon from "../../../public/icons/locale.svg"
import TypeIcon from "../../../public/icons/type.svg"
import Link from "next/link";
import { gsap } from 'gsap'; 

export default function Careers({position,data}:any) {
  const containers = data?.containers  ;
  const classContainers = containers === 'full' ? 'px-5 lg:px-10' : ' px-5'

  const gradientRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLAnchorElement[]>([]);

  gradientRefs.current = [];
  cardRefs.current = [];

  const addToRefs = (element: HTMLDivElement | HTMLAnchorElement | null, refArray: React.MutableRefObject<any[]>) => {
    if (element && !refArray.current.includes(element)) {
        refArray.current.push(element);
    }
  };


  useEffect(() => {
 
    const GRADIENT_DEFAULT = 'linear-gradient(123deg, rgba(0, 0, 0, 0) 19.1371%, rgba(1, 40, 95, 0.26) 46.9049%, rgba(1, 55, 131, 0.5) 69.6966%, rgba(1, 69, 164, 0.79) 85.5961%, rgb(2, 78, 184) 97%)';
    const BACKGROUND_COLOR_DEFAULT = '#00000077';

    const GRADIENT_HOVER = 'linear-gradient(123deg, rgba(0, 0, 0, 0) -12%, rgba(1, 40, 95, 0.26) 0%, rgba(1, 55, 131, 0.5) 26%, rgba(1, 69, 164, 0.79) 64%, rgb(2, 78, 184) 97%)';
    const BACKGROUND_COLOR_HOVER = 'rgba(2, 78, 184, 0.4)';

    const cleanups: (() => void)[] = [];

    cardRefs.current.forEach((card, index) => {
      const overlay = gradientRefs.current[index];
      if (!card || !overlay) return;

      gsap.set(overlay, { 
        background: GRADIENT_DEFAULT,
        backgroundColor: BACKGROUND_COLOR_DEFAULT,
        transition: 'none' 
      });

      const handleMouseEnter = () => {
        gsap.to(overlay, {
          duration: 0.3,
          ease: 'power1.out',
          background: GRADIENT_HOVER, 
          backgroundColor: BACKGROUND_COLOR_HOVER,
        });
      
      };

      const handleMouseLeave = () => {
        gsap.to(overlay, {
          duration: 0.3,
          ease: 'power1.out',
          background: GRADIENT_DEFAULT, 
          backgroundColor: BACKGROUND_COLOR_DEFAULT, 
        });
        
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      cleanups.push(() => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    });

    return () => {
      cleanups.forEach(cleanup => cleanup());
    };
  }, [data?.careers]); 
  

  return (
    <section className={`${containers} ${classContainers} pt-5 pb-20 flex flex-wrap items-center justify-end overflow-hidden position-${position}`}>
      <div className="w-full">
        {data?.title && (
          <h2 className="text-4xl lg:text-[56px] font-extralight text-center leading-none mb-10">
            {data?.title}
          </h2>
        )}
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
        {
          data?.careers.map((career: any, index: number) => (
            
            <Link 
              href={`/hiring/${career?.post_name}`} 
              className={`flex p-4 relative rounded-[20px] overflow-hidden`} 
              style={{aspectRatio : '1.75 / 1'}} 
              key={index}
              ref={(el) => addToRefs(el, cardRefs)} 
            >
              <Image
                fill
                src={career?.thumbnail.sizes.medium_large.url}
                alt={career?.title || "career-thumbnail"}
                className="object-cover" 
                unoptimized={true}
              />
              
              <div 
                ref={(el) => addToRefs(el, gradientRefs)} 
                className="absolute left-0 top-0 w-full h-full z-[2]" 
                style={{ transition: 'none' }} 
              ></div>

              {career?.post_title && (
                  <h3 className="z-10 text-2xl lg:text-3xl font-extrabold absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    {career?.post_title}
                  </h3>
                )}
                <div className="absolute z-10 bottom-4 left-4 bg-[#0003] rounded-2xl">
                  <div className="flex flex-row gap-4 px-3.5 py-2.5 rounded-2xl text-white">
                    <div className="flex gap-1.5 items-center text-sm font-semibold">
                      <Image src={LocaleIcon} alt="LocaleIcon" width={16} height={16} />
                      <p>{career?.acf?.location}</p>
                    </div>
                    <div className="flex gap-1.5 items-center text-sm font-semibold">
                      <Image src={TypeIcon} alt="TypeIcon" width={16} height={16} />
                      <p>{career?.acf?.type}</p>
                    </div>
                  </div>
                </div>
              <div className="flex gap-10 ">

              </div>
            </Link>
          ))
        }
      </div>
     
    </section>
  );
}