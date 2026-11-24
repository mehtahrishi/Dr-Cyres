"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { siteData } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#09292B] text-white pt-[100px] pb-[60px] px-[24px] lg:px-[60px] overflow-hidden">
      {/* Subtle organic decorative dark teal blobs on upper-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[120px] -left-[120px] w-[480px] h-[480px] rounded-full bg-[#051F21]/70 blur-[60px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[140px] -left-[80px] w-[320px] h-[320px] rounded-full bg-[#155E63]/15 blur-[50px]"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] flex flex-col gap-[80px]">
        {/* Top Centered CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-[28px]"
        >
          <img
            src={siteData.brand.logoSquare}
            alt={`${siteData.brand.name} logo`}
            width={75}
            height={75}
            className="w-[75px] h-[75px] rounded-[15px] object-cover shadow-[0_12px_28px_rgba(0,0,0,0.3)]"
          />
          <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[50.4px] tracking-[-0.84px] text-white max-w-[520px]">
            {siteData.footer.ctaHeading}
          </h2>
          <Link
            href={siteData.footer.ctaButtonHref}
            className="inline-flex items-center justify-center bg-white text-black font-sans text-[18px] font-medium px-[26px] py-[14px] rounded-[12px] transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            {siteData.footer.ctaButtonLabel}
          </Link>
        </motion.div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* Middle Links & Trust Badges Row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[48px]">
          {/* Left: 3 Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[40px] sm:gap-[64px]">
            {siteData.footer.columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-[16px]">
                <h3 className="font-sans text-[16px] font-medium text-white/60">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-[12px]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans text-[14px] font-normal leading-[19.6px] text-white hover:text-white/70 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: Trust Badges */}
          <div className="flex flex-col items-start lg:items-end gap-[18px]">
            <p className="font-sans text-[14px] font-normal text-white/70">
              {siteData.footer.trustLabel}
            </p>
            <div className="flex items-center gap-[18px] flex-wrap">
              {siteData.footer.trustBadges.map((badge) => (
                <img
                  key={badge.name}
                  src={badge.image}
                  alt={badge.name}
                  width={badge.width}
                  height={badge.height}
                  className="h-[48px] w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="flex flex-col gap-[18px] pt-[12px] border-t border-white/10">
          <p className="font-sans text-[13px] sm:text-[14px] font-normal leading-[1.55] text-white/50 max-w-[780px]">
            {siteData.footer.disclaimer}
          </p>
          <p className="font-sans text-[13px] sm:text-[14px] font-normal text-white/50">
            {siteData.footer.copyrightPrefix}
            <a
              href={siteData.footer.creatorHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 hover:text-white underline underline-offset-4 transition-colors"
            >
              {siteData.footer.creatorLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
