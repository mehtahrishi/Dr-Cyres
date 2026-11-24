"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/data/siteData";
import { InvertedNotch } from "./InvertedNotch";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = siteData.testimonials.items;

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < items.length - 1;

  const handlePrev = () => {
    if (canPrev) setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canNext) setActiveIndex((prev) => prev + 1);
  };

  return (
    <section
      id="reviews"
      className="w-full bg-white py-[80px] overflow-hidden"
    >
      {/* Header Row */}
      <div className="mx-auto max-w-[1200px] px-[24px] lg:px-[60px] mb-[44px] flex items-end justify-between gap-[20px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-[12px]"
        >
          <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-[#155E63]">
            {siteData.testimonials.eyebrow}
          </span>
          <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[50.4px] tracking-[-0.84px] text-black">
            {siteData.testimonials.heading}
          </h2>
        </motion.div>

        {/* Prev / Next Arrow Buttons */}
        <div className="flex items-center gap-[8px] shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canPrev}
            aria-label="Previous testimonial"
            className={`w-[32px] h-[32px] rounded-[4px] bg-[#22A869]/10 flex items-center justify-center text-[#09292B] transition-all duration-200 ${
              canPrev
                ? "cursor-pointer hover:bg-[#22A869]/20 active:scale-95"
                : "opacity-35 cursor-not-allowed"
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canNext}
            aria-label="Next testimonial"
            className={`w-[32px] h-[32px] rounded-[4px] bg-[#22A869]/10 flex items-center justify-center text-[#09292B] transition-all duration-200 ${
              canNext
                ? "cursor-pointer hover:bg-[#22A869]/20 active:scale-95"
                : "opacity-35 cursor-not-allowed"
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Peeking Carousel Track */}
      <div className="mx-auto max-w-[1200px] px-[24px] lg:px-[60px]">
        <motion.div
          animate={{ x: `calc(-${activeIndex} * (min(100%, 1080px) + 20px))` }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-[20px]"
        >
          {items.map((item, idx) => (
            <div
              key={`${item.author}-${idx}`}
              className="w-full max-w-[1080px] shrink-0 grid grid-cols-1 lg:grid-cols-[1.83fr_1fr] gap-[10px]"
            >
              {/* Left Lifestyle / Clinical Visual */}
              <div
                className={`w-full h-[280px] sm:h-[380px] lg:h-[471px] rounded-[15px] overflow-hidden ${
                  item.bgClass || "bg-[#F2F5F5]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`w-full h-full ${
                    item.fit === "contain" ? "object-contain p-[24px]" : "object-cover"
                  }`}
                />
              </div>

              {/* Right Pale Mint Details Card */}
              <div className="relative w-full min-h-[340px] lg:h-[471px] rounded-[14px] bg-[#EAFFE3] p-[28px] sm:p-[32px] flex flex-col justify-between overflow-hidden">
                <div className="flex flex-col gap-[24px] pb-[64px]">
                  {/* Stat + Sublabel */}
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-serif text-[38px] sm:text-[42px] font-normal leading-[1.15] text-black tracking-[-0.02em]">
                      {item.stat}
                    </span>
                    <span className="font-sans text-[14px] font-normal text-black/60">
                      {item.statLabel}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="font-sans text-[17px] sm:text-[18px] font-normal leading-[25.2px] text-black">
                    {item.quote}
                  </p>
                </div>

                {/* Bottom-Right White Inverted-Corner Notch */}
                <InvertedNotch
                  cornerSize={22}
                  className="px-[20px] py-[14px] min-w-[165px]"
                >
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-sans text-[19px] sm:text-[20px] font-medium leading-[1.2] text-black">
                      {item.author}
                    </span>
                    <span className="font-sans text-[14px] font-normal text-black/60">
                      {item.department}
                    </span>
                  </div>
                </InvertedNotch>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
