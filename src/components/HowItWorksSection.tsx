"use client";

import React from "react";
import { motion } from "motion/react";
import { siteData } from "@/data/siteData";
import { InvertedNotch } from "./InvertedNotch";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-white pt-[80px] pb-[120px] px-[24px] lg:px-[60px]"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col items-center gap-[40px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-[12px] max-w-[540px]"
        >
          <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-[#155E63]">
            {siteData.howItWorks.eyebrow}
          </span>
          <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[50.4px] tracking-[-0.84px] text-black">
            {siteData.howItWorks.heading}
          </h2>
        </motion.div>

        {/* 3-Column Steps Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {siteData.howItWorks.steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col gap-[24px]"
            >
              {/* Top Pale Mint Illustration Card */}
              <div
                className="relative w-full h-[300px] rounded-[25px] flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(230deg, #F1FFED 0%, #EAFFE3 98.12%)",
                }}
              >
                <img
                  src={step.illustration}
                  alt={step.alt}
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <InvertedNotch
                  cornerSize={22}
                  className="px-[20px] py-[15px]"
                >
                  <span className="font-sans text-[18px] font-medium leading-[21.6px] tracking-[-0.36px] text-black">
                    {step.step}
                  </span>
                </InvertedNotch>
              </div>

              {/* Bottom Text Stack */}
              <div className="flex flex-col gap-[12px] text-left">
                <h3 className="font-sans text-[20px] font-medium leading-[24px] tracking-[-0.4px] text-black">
                  {step.title}
                </h3>
                <p className="font-sans text-[18px] font-normal leading-[25.2px] tracking-[-0.18px] text-black/85">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
