'use client';

import React, { useRef } from "react";
import useReplaceUrl from "@/utils/useReplaceUrl";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"

export default function Hero({position,data}:any) {
  console.log('Hero data:', data, position);

  return (
    <section className={`pl-10 py-6 flex items-center justify-end ${styles.hero}`}>
      <div className="flex items-end gap-3 w-full">
        
        <div className="basis-1/3 text-white text-center lg:text-left">
          {data?.title && (
            <h2 className="text-5xl font-extrabold leading-tight mb-5">
              {data?.title}
            </h2>
          )}

          {data?.desc && (
            <p className="text-lg colorGray mb-8">
              {data?.desc}
            </p>
          )}
          
          { data?.cta &&  (
            <Link href={useReplaceUrl(data?.cta.url) || '#'}
              target={data?.cta.target}
              className="btnPrimary">
              {data?.cta.title}
            </Link>
          ) }

        </div>

        <div className={`basis-2/3 flex flex-col gap-5 h-[88vh] py-5 pl-5 bg-[#16161a] rounded-tl-[28px] rounded-bl-[28px] ${styles.cardContainer}`}>
          <div className={`flex overflow-hidden gap-5 h-1/2 ${styles.cardTop}`}>

            {data?.topItems?.map((card:any, index:number) => (
              <div key={index} className="relative flex-shrink-0 w-2/3 h-full rounded-[18px] overflow-hidden shadow-xl">
                <Image
                  src={card.image.url}
                  alt={card.name}
                  fill={true} 
                  style={{objectFit: 'cover'}}
                  className="brightness-75 group-hover:brightness-90 transition-all duration-300"
                />
                <div className={`absolute bottom-0 left-0 right-0 px-4 py-2.5 rounded-lg m-6 text-white z-10 ${styles.cardInfo}`}>
                  <h3 className="font-semibold text-lg">{card.name}</h3>
                  <p className="text-xs text-[#ffffff99]">{card.position}</p>
                </div>
              </div>    
            ))}

          </div>
          <div className={`flex overflow-hidden gap-5 h-1/2 ${styles.cardBottom}`}>
            
            {data?.bottomItems?.map((card:any, index:number) => (
              <div key={index} className="relative flex-shrink-0 w-2/3 h-full rounded-[18px] overflow-hidden shadow-xl">
                <Image
                  src={card.image.url}
                  alt={card.name}
                  fill={true} 
                  style={{objectFit: 'cover'}}
                  className="brightness-75 group-hover:brightness-90 transition-all duration-300"
                />
                <div className={`absolute bottom-0 left-0 right-0 px-4 py-2.5 rounded-lg m-6 text-white z-10 ${styles.cardInfo}`}>
                  <h3 className="font-semibold text-lg">{card.name}</h3>
                  <p className="text-xs text-[#ffffff99]">{card.position}</p>
                </div>
              </div>    
            ))}
          </div>  
        </div>
      </div>
    </section>
  );
}
