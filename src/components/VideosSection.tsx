"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";
import { siteData } from "@/data/siteData";
import { InvertedNotch } from "./InvertedNotch";

export function VideosSection() {
  const categories = siteData.videos.categories;
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const filteredVideos =
    activeCategory === "All"
      ? siteData.videos.items
      : siteData.videos.items.filter((v) => v.category === activeCategory);

  return (
    <section
      id="videos"
      className="w-full bg-white py-[80px] px-[24px] lg:px-[60px]"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col items-center gap-[40px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-[12px] max-w-[640px]"
        >
          <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-[#155E63]">
            {siteData.videos.eyebrow}
          </span>
          <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[50.4px] tracking-[-0.84px] text-black">
            {siteData.videos.heading}
          </h2>
          <p className="font-sans text-[16px] sm:text-[17px] font-normal leading-[1.5] text-black/70">
            {siteData.videos.subtitle}
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-[10px]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-[18px] py-[10px] rounded-[10px] font-sans text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#09292B] text-white shadow-sm"
                    : "bg-[#EAFFE3] text-[#09292B] hover:bg-[#d8f8cd]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Video Grid — Direct Links to YouTube */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {filteredVideos.map((video, idx) => (
            <motion.a
              key={video.videoId}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: Math.min(idx * 0.04, 0.25),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col text-left gap-[14px] cursor-pointer"
            >
              {/* Thumbnail Card with Signature Inverted Notch */}
              <div className="relative w-full aspect-video rounded-[18px] overflow-hidden bg-[#09292B]">
                <img
                  src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/15">
                  <div className="w-[52px] h-[52px] rounded-full bg-black/60 backdrop-blur-[4px] border border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play size={20} className="text-white fill-white ml-[2px]" />
                  </div>
                </div>
                <InvertedNotch cornerSize={18} className="px-[14px] py-[8px]">
                  <span className="font-sans text-[12px] font-medium text-[#155E63] whitespace-nowrap">
                    {video.category}
                  </span>
                </InvertedNotch>
              </div>

              {/* Video Title */}
              <h3 className="font-sans text-[16px] sm:text-[17px] font-medium leading-[1.35] text-black group-hover:text-[#155E63] transition-colors line-clamp-2 px-[4px]">
                {video.title}
              </h3>
            </motion.a>
          ))}
        </div>

        {/* Channel CTA Link */}
        <a
          href={siteData.videos.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[8px] px-[22px] py-[12px] rounded-[12px] bg-[#09292B] text-white font-sans text-[15px] font-medium transition-all duration-200 hover:bg-[#155E63] active:scale-[0.98]"
        >
          <span>{siteData.videos.channelCtaLabel}</span>
          <ExternalLink size={15} />
        </a>
      </div>
    </section>
  );
}
