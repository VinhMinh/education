'use client';

import useReplaceUrl from "@/utils/useReplaceUrl";
import cleanPath from "@/utils/clearPath";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useHeaderContext } from "@/context/headerContext";

export default function Nav(props: any) {
  const pathname = usePathname();
  const { headerStyle } = useHeaderContext()
  
  return (
    <nav className={headerStyle ? 'active' : ''}>
      {props.menuHeader?.map((item: any, index: number) =>  {

        const itemHref = useReplaceUrl(item.linkHeader?.url) || "/";
        const cleanedItemHref = cleanPath(itemHref);
        const cleanedPathname = cleanPath(pathname);
        const isActive = cleanedPathname === cleanedItemHref;

        return (
          <Link
            key={`nav-${index}`}
            target={item.linkHeader?.target || "_self"}
            href={useReplaceUrl(item.linkHeader?.url) || "/"}
            className={`footerMenuItem ${ isActive ? "active" : ""}`}>
            {item.linkHeader?.title}
          </Link>
        )
      })}
    </nav>
  );
}
