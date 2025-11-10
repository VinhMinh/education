'use client';

import React, { useRef } from "react";
import useReplaceUrl from "@/utils/useReplaceUrl";
import Link from "next/link";
import styles from "./styles.module.css"
import Card from "@/components/Card";

export default function Hero({position,data}:any) {

  return (
    <section className={`pl-5 lg:pl-10 py-6 flex items-center justify-end overflow-hidden lg:h-screen ${styles.hero}`}>
      <div className="flex items-end flex-col-reverse lg:flex-row gap-3 w-full">
        
        <div className="basis-full w-full pr-5 lg:pr-0 lg:basis-1/3 min-w-1/3 text-left">
          {data?.title && (
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
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

        <div className={`basis-full w-full lg:basis-2/3 flex flex-col gap-5 h-[88vh] py-5 pl-5 bg-[#16161a] rounded-tl-[28px] rounded-bl-[28px] ${styles.cardContainer}`}>
          <Card data={data?.topItems} styles={styles}/>
          <Card data={data?.bottomItems} styles={styles} reverse/>
        </div>
      </div>
    </section>
  );
}
