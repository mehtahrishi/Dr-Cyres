"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Plus, ChevronRight } from "lucide-react";
import { siteData } from "@/data/siteData";
import { InvertedNotch } from "./InvertedNotch";

export function FaqSection() {
  // Independent toggles matching live Framer behavior (multiple FAQs can stay open at once)
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({});

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section
      id="faq"
      className="w-full bg-white pt-[80px] pb-[120px] px-[24px] lg:px-[60px]"
    >
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-[48px] lg:gap-[64px] items-start">
        {/* Left Column: Pale Mint Book an Appointment CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full min-h-[380px] lg:min-h-[430px] rounded-[20px] bg-gradient-to-b from-[#F1FFED] to-[#EAFFE3] p-[32px] sm:p-[38px] flex flex-col justify-between overflow-hidden"
        >
          <div className="flex flex-col items-start gap-[20px] pb-[64px]">
            <img
              src={siteData.brand.crossMark}
              alt="ClinicHub medical cross emblem"
              width={59}
              height={59}
              className="w-[59px] h-[59px] object-contain"
            />
            <h3 className="font-serif text-[30px] sm:text-[32px] font-normal leading-[38.4px] tracking-[-0.02em] text-[#09292B]">
              {siteData.faq.ctaCard.heading}
            </h3>
            <p className="font-sans text-[16px] sm:text-[17px] font-normal leading-[1.5] text-[#09292B]/80 max-w-[290px]">
              {siteData.faq.ctaCard.subtitle}
            </p>
          </div>

          {/* Bottom-Right White Inverted-Corner Notch with Book a Visit Link */}
          <InvertedNotch cornerSize={22} className="pl-[20px] pt-[14px] pr-[6px] pb-[6px]">
            <Link
              href={siteData.faq.ctaCard.buttonHref}
              className="group inline-flex items-center gap-[12px] font-sans text-[16px] font-medium text-black transition-opacity duration-200 hover:opacity-80"
            >
              <span>{siteData.faq.ctaCard.buttonLabel}</span>
              <span className="w-[34px] h-[34px] rounded-full bg-[#051F21] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-[2px]">
                <ChevronRight size={17} />
              </span>
            </Link>
          </InvertedNotch>
        </motion.div>

        {/* Right Column: FAQ Header + 5 Stacked Accordion Items */}
        <div className="flex flex-col gap-[32px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-[10px]"
          >
            <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-[#155E63]">
              {siteData.faq.eyebrow}
            </span>
            <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[50.4px] tracking-[-0.84px] text-black">
              {siteData.faq.heading}
            </h2>
          </motion.div>

          {/* Accordion List */}
          <div className="flex flex-col divide-y divide-black/10 border-t border-b border-black/10">
            {siteData.faq.items.map((item, idx) => {
              const isOpen = !!openIndices[idx];
              return (
                <div key={item.question} className="py-[20px]">
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-[16px] text-left cursor-pointer group"
                  >
                    <span className="font-sans text-[18px] sm:text-[19px] font-medium leading-[1.35] text-black group-hover:text-[#155E63] transition-colors">
                      {item.question}
                    </span>
                    <span className="w-[24px] h-[24px] rounded-[4px] bg-[#22A869]/10 flex items-center justify-center text-[#155E63] shrink-0 transition-transform duration-300">
                      <Plus
                        size={15}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-[14px] pr-[36px] font-sans text-[16px] font-normal leading-[1.55] text-black/75">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
