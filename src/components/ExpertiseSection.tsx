"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { siteData, SpecialtyItem } from "@/data/siteData";
import { InvertedNotch } from "./InvertedNotch";

function SpecialtyCard({
  item,
  scrollYProgress,
  initialRotate,
  initialX,
  initialY,
}: {
  item: SpecialtyItem;
  scrollYProgress: MotionValue<number>;
  initialRotate: number;
  initialX: number;
  initialY: number;
}) {
  const rotate = useTransform(scrollYProgress, [0, 0.72], [initialRotate, 0]);
  const x = useTransform(scrollYProgress, [0, 0.72], [initialX, 0]);
  const y = useTransform(scrollYProgress, [0, 0.72], [initialY, 0]);

  return (
    <motion.div
      style={{ rotate, x, y }}
      className={`group relative overflow-hidden rounded-[20px] h-[200px] ${
        item.bgClass || "bg-[#F5F7F7]"
      } ${item.size === "wide" ? "col-span-2" : "col-span-1"}`}
    >
      <img
        src={item.image}
        alt={item.alt}
        className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 ${
          item.fit === "contain" ? "object-contain p-[18px] pb-[42px]" : "object-cover"
        }`}
      />
      <InvertedNotch
        cornerSize={22}
        className="px-[16px] py-[10px]"
      >
        <span className="font-sans text-[16px] font-medium leading-[1.2] text-black whitespace-nowrap">
          {item.title}
        </span>
      </InvertedNotch>
    </motion.div>
  );
}

export function ExpertiseSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 0.95", "center 0.58"],
  });

  const leftItems = siteData.expertise.specialties.filter(
    (s) => s.column === "left"
  );
  const rightItems = siteData.expertise.specialties.filter(
    (s) => s.column === "right"
  );

  return (
    <section
      id="expertise"
      className="w-full bg-white pt-[120px] pb-[80px] px-[16px] sm:px-[24px] lg:px-[60px]"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col items-center gap-[40px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-[12px]"
        >
          <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-[#155E63]">
            {siteData.expertise.eyebrow}
          </span>
          <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[50.4px] tracking-[-0.84px] text-black">
            {siteData.expertise.heading}
          </h2>
        </motion.div>

        {/* 3-Column Bento Grid */}
        <div
          ref={gridRef}
          className="w-full grid grid-cols-1 lg:grid-cols-[1fr_0.92fr_1fr] gap-[15px] items-stretch"
        >
          {/* Left Column: 2 square top + 1 wide bottom */}
          <div className="grid grid-cols-2 gap-[15px]">
            <SpecialtyCard
              item={leftItems[0]}
              scrollYProgress={scrollYProgress}
              initialRotate={-7}
              initialX={36}
              initialY={24}
            />
            <SpecialtyCard
              item={leftItems[1]}
              scrollYProgress={scrollYProgress}
              initialRotate={-3}
              initialX={18}
              initialY={14}
            />
            <SpecialtyCard
              item={leftItems[2]}
              scrollYProgress={scrollYProgress}
              initialRotate={-4}
              initialX={24}
              initialY={-10}
            />
          </div>

          {/* Center Column: Pale Mint CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[20px] bg-gradient-to-b from-[#F1FFED] to-[#EAFFE3] px-[28px] py-[44px] flex flex-col items-center justify-center text-center gap-[24px] min-h-[340px] lg:min-h-[415px]"
          >
            <img
              src={siteData.brand.crossMark}
              alt="ClinicHub medical cross emblem"
              width={59}
              height={59}
              className="w-[59px] h-[59px] object-contain"
            />
            <h3 className="font-serif text-[28px] sm:text-[32px] font-normal leading-[38.4px] tracking-[-0.02em] text-black max-w-[300px]">
              {siteData.expertise.centerCard.heading}
            </h3>
            <Link
              href={siteData.expertise.centerCard.ctaHref}
              className="inline-flex items-center justify-center bg-white text-black font-sans text-[16px] font-medium px-[24px] py-[13px] rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              {siteData.expertise.centerCard.ctaLabel}
            </Link>
          </motion.div>

          {/* Right Column: 2 square top + 1 wide bottom */}
          <div className="grid grid-cols-2 gap-[15px]">
            <SpecialtyCard
              item={rightItems[0]}
              scrollYProgress={scrollYProgress}
              initialRotate={3}
              initialX={-18}
              initialY={14}
            />
            <SpecialtyCard
              item={rightItems[1]}
              scrollYProgress={scrollYProgress}
              initialRotate={7}
              initialX={-36}
              initialY={24}
            />
            <SpecialtyCard
              item={rightItems[2]}
              scrollYProgress={scrollYProgress}
              initialRotate={4}
              initialX={-24}
              initialY={-10}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
