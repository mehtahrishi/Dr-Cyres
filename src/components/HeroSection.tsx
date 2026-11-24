"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { siteData } from "@/data/siteData";

export function HeroSection() {
  return (
    <section className="w-full p-[8px] bg-white">
      <div className="relative w-full h-[780px] sm:h-[860px] lg:h-[984px] rounded-[15px] overflow-hidden bg-[#09292B]">
        {/* Full-bleed background photograph */}
        <motion.img
          initial={{ scale: 1.04, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          src={siteData.hero.backgroundImage}
          alt={siteData.hero.backgroundAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle bottom & edge gradient overlays for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/15"
        />

        {/* Bottom-pinned content */}
        <div className="relative z-10 h-full w-full flex flex-col justify-end px-[24px] sm:px-[40px] lg:px-[60px] pb-[44px] sm:pb-[60px]">
          <div className="mx-auto w-full max-w-[1200px] flex flex-col lg:flex-row lg:items-end justify-between gap-[36px]">
            {/* Left Column: Rating + H1 + CTA */}
            <div className="max-w-[590px] flex flex-col items-start gap-[22px]">
              {/* 5-Star Review Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-[12px]"
              >
                <div className="flex items-center gap-[3px]" aria-label="5 out of 5 stars">
                  {Array.from({ length: siteData.hero.starCount }).map((_, idx) => (
                    <svg
                      key={idx}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFD942"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2L14.9 8.6L22 9.3L16.6 14L18.2 21L12 17.3L5.8 21L7.4 14L2 9.3L9.1 8.6L12 2Z" />
                    </svg>
                  ))}
                </div>
                <span className="h-[16px] w-[1px] bg-white/35" aria-hidden="true" />
                <span className="font-sans text-[15px] sm:text-[16px] font-medium leading-[19.2px] text-white">
                  {siteData.hero.ratingText}
                </span>
              </motion.div>

              {/* H1 Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[36px] sm:text-[44px] lg:text-[50px] font-normal leading-[1.2] text-white tracking-[-0.01em]"
              >
                {siteData.hero.heading}
              </motion.h1>

              {/* Primary CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={siteData.hero.cta.href}
                  className="inline-flex items-center justify-center bg-white text-black font-sans text-[17px] sm:text-[18px] font-medium px-[24px] py-[14px] rounded-[12px] transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {siteData.hero.cta.label}
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Video Preview Card + Subcopy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:items-end gap-[14px] max-w-[300px]"
            >
              <div className="group relative w-[267px] h-[150px] rounded-[12px] overflow-hidden border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.3)] cursor-pointer">
                <img
                  src={siteData.hero.videoPreview.thumbnail}
                  alt={siteData.hero.videoPreview.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/10">
                  <div className="w-[44px] h-[44px] rounded-full bg-black/50 backdrop-blur-[4px] border border-white/25 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play size={16} className="text-white fill-white ml-[2px]" />
                  </div>
                </div>
              </div>

              <p className="font-sans text-[14px] font-normal leading-[19.6px] text-white/80 lg:text-right">
                {siteData.hero.videoPreview.caption}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
