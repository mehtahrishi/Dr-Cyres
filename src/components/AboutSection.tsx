"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { siteData } from "@/data/siteData";

function RevealWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.26em]">
      {word}
    </motion.span>
  );
}

export function AboutSection() {
  const statementRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = siteData.about.editorialStatement.split(" ");
  const orbitImages = siteData.about.orbitImages;

  return (
    <section id="about" className="w-full p-[8px] bg-white">
      <div className="w-full bg-[#09292B] rounded-[25px] overflow-hidden">
        {/* Top Half: Word-by-Word Scroll Reveal Editorial Statement */}
        <div
          ref={statementRef}
          className="px-[24px] sm:px-[48px] lg:px-[60px] py-[90px] lg:py-[130px] flex items-center justify-center"
        >
          <p className="mx-auto max-w-[920px] text-center font-serif text-[26px] sm:text-[34px] lg:text-[40px] font-normal leading-[1.3] text-white">
            {words.map((word, idx) => {
              const start = idx / words.length;
              const end = Math.min(1, start + 1 / words.length + 0.08);
              return (
                <RevealWord
                  key={`${word}-${idx}`}
                  word={word}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </p>
        </div>

        {/* Full-Width Subtle Divider */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* Bottom Half: Circular Orbit of 6 Lifestyle Photos Around Centered H2 */}
        <div className="relative px-[24px] py-[110px] sm:py-[140px] lg:py-[180px] min-h-[600px] md:min-h-[740px] lg:min-h-[860px] flex items-center justify-center overflow-hidden">
          {/* Desktop / Tablet Circular Orbit Ring */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] lg:w-[680px] lg:h-[680px] pointer-events-none"
          >
            <div className="relative w-full h-full animate-clinichub-orbit">
              {orbitImages.map((img, index) => {
                const angleDeg = (index * 360) / orbitImages.length - 90;
                const angleRad = (angleDeg * Math.PI) / 180;
                const radiusPct = 46; // 46% of ring width/height
                const leftPct = 50 + radiusPct * Math.cos(angleRad);
                const topPct = 50 + radiusPct * Math.sin(angleRad);

                return (
                  <div
                    key={img.src}
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-[124px] h-[124px] lg:w-[150px] lg:h-[150px]"
                  >
                    <div className="w-full h-full animate-clinichub-counter-orbit">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover rounded-[15px] shadow-[0_14px_30px_rgba(0,0,0,0.35)]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Heading */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-[380px] lg:max-w-[420px] text-center"
          >
            <h2 className="font-serif text-[34px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.2] tracking-[-0.84px] text-white">
              {siteData.about.heading}
            </h2>

            {/* Mobile Photo Grid Fallback */}
            <div className="mt-[36px] grid grid-cols-3 gap-[10px] md:hidden">
              {orbitImages.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-square object-cover rounded-[12px]"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
