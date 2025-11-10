"use client";

import { CardProps } from "@/types/types";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Card({ data, styles, reverse = false }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !data || data.length === 0) return;

    const originalChildrenCount = data.length;

    const requiredClones = 3;
    
    while (container.children.length > originalChildrenCount) {
      container.removeChild(container.lastChild as Node);
    }
    const originalChildren = Array.from(container.children);

    originalChildren.forEach((card) =>
      container.appendChild(card.cloneNode(true))
    );

    const totalWidth = container.scrollWidth / 2;
    const duration = 50;

    const startX = reverse ? -totalWidth : 0;
    const endX = reverse ? 0 : -totalWidth;

    gsap.set(container, { x: startX });

    const tween = gsap.to(container, {
      x: endX,
      duration,
      ease: "none",
      repeat: -1,

      onRepeat: () => {
        gsap.set(container, { x: startX });
      },
    });

    tweenRef.current = tween;

    const handleMouseEnter = () =>
      gsap.to(tween, { timeScale: 0.3, duration: 0.5 });
    const handleMouseLeave = () =>
      gsap.to(tween, { timeScale: 1, duration: 0.5 });

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tween.kill();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [data, reverse]);

  return (
    <div className={`overflow-hidden ${styles.cards} h-1/2`}>
      <div ref={containerRef} className="flex gap-5 h-full">
        {data?.map((card: any, index: number) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[400px] lg:w-[600px] h-[186px] lg:h-full rounded-[18px] overflow-hidden shadow-xl">
            <Image
              src={card.image.url}
              alt={card.name}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-75 group-hover:brightness-90 transition-all duration-300"
            />
            <div
              className={`absolute bottom-0 left-0 right-0 px-4 py-2.5 rounded-lg m-6 text-white z-10 ${styles.cardInfo}`}>
              <h3 className="font-semibold text-xs lg:text-lg">{card.name}</h3>
              <p className="text-xs text-[#ffffff99]">{card.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
