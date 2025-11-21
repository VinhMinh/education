import Link from "next/link";
import React from "react";
import Back from "../../public/icons/back.svg"
import Bg from "../../public/bg.webp"
import Image from "next/image";
import { formatMonthYear } from "@/utils/dateFormat";
import { api } from "../../api/api";
import useReplaceUrl from "@/utils/useReplaceUrl";

export default async function Hiring(data: any) {
  const dataSingle = data?.data

  const pathSetting = "wp-json/wp/v2/theme-options";
  const dataSetting = await api(pathSetting);

  return (
    <section
      style={{ backdropFilter: "blur(24px)" }}
      className={`text-[#f2f3f6] w-full lg:max-w-[1200px] mb-20 mx-auto py-8 px-5 lg:px-12 gap-8 flex flex-col text-left items-start justify-end overflow-hidden bg-[#0403133d] rounded-[20px] border border-[#ffffff14]`}>
      {
        dataSetting?.back && (
          <Link href={"/"+useReplaceUrl(dataSetting?.back.url) || '/'} className="flex gap-1.5 justify-center items-center">
            <Image src={Back} alt="" width={18} height={18}/>
            <p className="text-[#fff9]">Back</p>
          </Link>
        )
      }
      <h1 className="leading-[normal] text-[#ffffff99] font-light uppercase text-[32px] lg:text-[84px]">{dataSingle?.title.rendered}</h1>
      <div className="flex gap-2.5 hiringSub">
        <div className="hiringSubItem">
          <div className="text-[#ffffff99]">Date Posted</div>
          <div className="text-2xl ">{formatMonthYear(dataSingle.date)}</div> 
        </div>
        <div className="hiringSubItem">
          <div className="text-[#ffffff99]">Team</div>
          <div className="text-2xl ">{dataSingle.acf.team}</div> 
        </div>
        <div className="hiringSubItem">
          <div className="text-[#ffffff99]">Location</div>
          <div className="text-2xl ">{dataSingle.acf.location}</div> 
        </div>
        <div className="hiringSubItem">
          <div className="text-[#ffffff99]">Type</div>
          <div className="text-2xl ">{dataSingle.acf.type}</div> 
        </div>
      </div>
      <div className="relative w-full rounded-3xl overflow-hidden" style={{aspectRatio:'1.7287 / 1'}}>
        <Image src={dataSingle.thumbnail_url} fill alt={dataSingle?.title.rendered} />
      </div>

       <div className={`py-0 lg:pt-10 lg:pb-20 flex flex-wrap items-center justify-end overflow-hidden`}>
        {
          dataSingle?.acf.desc.map((item: any, index: number) => (
            
            <div className={`flex flex-wrap gap-0 ${index === 0 ? 'pt-0' : 'lg:pt-10'} lg:gap-5 w-full py-10 lg:pb-10 border-b border-[#667084]`} key={index}>
              {item?.title && (
                <h3 className="w-full lg:w-[250px] text-2xl lg:text-3xl font-extrabold mb-2.5">
                  {item?.title}
                </h3>
              )}
              {item?.editor && (
                <div className="w-full lg:flex-1 editorContent text-base leading-none" dangerouslySetInnerHTML={{ __html: item?.editor }} />
              )}
            </div>
          ))
        }
        
      </div>
      {
        dataSetting?.apply && (
          <div className="apply flex relative flex-col gap-6 lg:gap-10 py-10 px-8 w-full items-center justify-center rounded-[20px] overflow-hidden aspect-[1/1] lg:aspect-[3.32222/1]">
            <Image src={Bg} alt="apply" fill />
            {dataSetting?.title && (
              <h2 className="text-center font-bold text-[22px] lg:text-[38px] relative z-[1]" >{dataSetting.title}</h2>
            )}
            <Link className="btnPrimary z-[1] uppercase" href={"/"+useReplaceUrl(dataSetting?.apply.url)+`?title=${dataSingle?.title.rendered}` || '/'} target={dataSetting?.apply.target} >{dataSetting?.apply.title}</Link>
          </div>
        )
      }  
      
    </section>
  );
}
