"use client";

import React from "react";
import { motion } from "motion/react";
import { siteData } from "@/data/siteData";
import { InvertedNotch } from "./InvertedNotch";

export function DoctorsSection() {
  // Duplicate list twice for seamless infinite marquee
  const duplicatedDoctors = [...siteData.doctors.list, ...siteData.doctors.list];

  return (
    <section
      id="doctors"
      className="w-full bg-white pt-[120px] pb-[80px] overflow-hidden"
    >
      <div className="mx-auto max-w-[1200px] px-[24px] lg:px-[60px] flex flex-col items-center gap-[12px] mb-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-[12px]"
        >
          <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-[#155E63]">
            {siteData.doctors.eyebrow}
          </span>
          <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[50.4px] tracking-[-0.84px] text-black">
            {siteData.doctors.heading}
          </h2>
        </motion.div>
      </div>

      {/* Full-Bleed Continuous Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex w-max gap-[20px] animate-clinichub-marquee">
          {duplicatedDoctors.map((doc, idx) => (
            <div
              key={`${doc.name}-${idx}`}
              className={`group relative w-[280px] sm:w-[300px] h-[380px] sm:h-[400px] rounded-[10px] overflow-hidden shrink-0 select-none ${
                doc.bgClass || "bg-[#F2F5F5]"
              }`}
            >
              <img
                src={doc.image}
                alt={`${doc.name} — ${doc.specialty}`}
                draggable={false}
                className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 ${
                  doc.fit === "contain"
                    ? "object-contain p-[24px] pb-[84px]"
                    : "object-cover object-center"
                }`}
              />
              <InvertedNotch
                cornerSize={20}
                className="px-[18px] py-[12px] min-w-[165px]"
              >
                <div className="flex flex-col gap-[2px]">
                  <span className="font-sans text-[17px] font-medium leading-[1.25] text-black">
                    {doc.name}
                  </span>
                  <span className="font-sans text-[14px] font-normal leading-[1.3] text-black/60">
                    {doc.specialty}
                  </span>
                </div>
              </InvertedNotch>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
