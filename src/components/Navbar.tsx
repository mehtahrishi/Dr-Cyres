"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { siteData } from "@/data/siteData";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-[20px] md:top-[25px] left-0 right-0 z-50 px-[16px] md:px-[40px] lg:px-[60px] pointer-events-none">
      <nav
        aria-label="Primary navigation"
        className="mx-auto max-w-[1200px] h-[55px] flex items-center justify-between"
      >
        {/* Left Logo Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto"
        >
          <Link
            href="/"
            aria-label={siteData.brand.name}
            className="flex items-center justify-center h-[50px] bg-black/60 backdrop-blur-[5px] rounded-[10px] p-[5px] transition-colors duration-200 hover:bg-black/75"
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "7px",
                padding: "5px 12px",
              }}
              className="h-full flex items-center justify-center shadow-[0_3px_6px_rgba(0,0,0,0.25)]"
            >
              <img
                src={siteData.brand.logoSquare}
                alt={`${siteData.brand.name} logo`}
                style={{ height: "28px", width: "auto", display: "block" }}
              />
            </div>
          </Link>
        </motion.div>

        {/* Right Desktop Pills: Links Pill + CTA Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex items-center gap-[10px] pointer-events-auto"
        >
          {/* Links Pill */}
          <div className="flex items-center gap-[22px] h-[55px] bg-black/60 backdrop-blur-[5px] rounded-[12px] px-[18px]">
            {siteData.nav.links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-[16px] font-medium text-white/95 hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Pill */}
          <div className="flex items-center h-[55px] bg-black/60 backdrop-blur-[5px] rounded-[12px] p-[6px]">
            <Link
              href={siteData.nav.cta.href}
              className="flex items-center justify-center h-full bg-white text-black font-sans text-[16px] font-medium px-[20px] rounded-[8px] transition-all duration-200 hover:bg-white/90 active:scale-[0.98] whitespace-nowrap"
            >
              {siteData.nav.cta.label}
            </Link>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center pointer-events-auto">
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex items-center justify-center w-[46px] h-[46px] bg-black/60 backdrop-blur-[5px] rounded-[10px] text-white cursor-pointer"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pointer-events-auto mt-[10px] mx-auto max-w-[1200px] bg-black/85 backdrop-blur-md rounded-[14px] p-[18px] flex flex-col gap-[14px] border border-white/10"
          >
            {siteData.nav.links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-[16px] font-medium text-white py-[6px] border-b border-white/10 last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteData.nav.cta.href}
              onClick={() => setMobileOpen(false)}
              className="mt-[4px] flex items-center justify-center bg-white text-black font-sans text-[16px] font-medium py-[12px] px-[20px] rounded-[10px]"
            >
              {siteData.nav.cta.label}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
