"use client";

import React from "react";
import { motion } from "motion/react";
import { siteData } from "@/data/siteData";

export function MetricsSection() {
  return (
    <section className="w-full bg-white py-[40px] px-[24px] lg:px-[60px]">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
        {siteData.metrics.map((metric, idx) => (
          <motion.div
            key={metric.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.55,
              delay: idx * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-center gap-[18px] py-[20px] md:py-[6px] px-[20px]"
          >
            <span className="font-serif text-[44px] lg:text-[50px] font-normal leading-[60px] text-black tracking-[-0.02em]">
              {metric.value}
            </span>
            <p className="font-sans text-[14px] font-normal leading-[19.6px] text-[#09292B] whitespace-pre-line">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
