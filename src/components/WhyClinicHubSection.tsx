"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, ChevronDown, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { siteData } from "@/data/siteData";

const CALENDAR_DAYS = [
  "", "", "", "1", "2", "3", "4",
  "5", "6", "7", "8", "9", "10", "11",
  "12", "13", "14", "15", "16", "17", "18",
  "19", "20", "21", "22", "23", "24", "25",
  "26", "27", "28", "29", "30", "", "",
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function WhyClinicHubSection() {
  const { awardDoctors, easyBooking, insurance } = siteData.whyClinicHub.cards;
  const [selectedDay, setSelectedDay] = useState<number>(
    easyBooking.mockup.selectedDay
  );

  return (
    <section id="why-us" className="w-full bg-white py-[15px] px-[8px]">
      <div
        className="relative w-full rounded-[25px] overflow-hidden pt-[60px] pb-[80px] lg:pb-[100px] px-[20px] sm:px-[40px] lg:px-[60px]"
        style={{
          background:
            "linear-gradient(180deg, rgb(168, 186, 189) 41%, rgb(9, 41, 43) 92%)",
        }}
      >
        {/* Top Full-Width Lifestyle Banner Seamlessly Masked Into Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-[640px] lg:h-[760px] overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 42%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 42%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0) 100%)",
          }}
        >
          <img
            src={siteData.whyClinicHub.bannerImage}
            alt={siteData.whyClinicHub.bannerAlt}
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-transparent"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[1000px] flex flex-col items-center">
          {/* Top Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center gap-[12px] max-w-[560px] mb-[260px] sm:mb-[320px] lg:mb-[350px]"
          >
            <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.18)]">
              {siteData.whyClinicHub.eyebrow}
            </span>
            <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[50.4px] tracking-[-0.84px] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
              {siteData.whyClinicHub.heading}
            </h2>
          </motion.div>

          {/* 2-Column Asymmetric Bento Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[8px]">
            {/* Left Column: 2 Stacked Cards */}
            <div className="flex flex-col gap-[8px]">
              {/* Card 1: Award Winning Doctors */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[15px] bg-black/25 backdrop-blur-[8px] border border-white/10 p-[26px] min-h-[296px] flex flex-col justify-between gap-[20px]"
              >
                {/* Frosted Featured Doctor UI Mockup */}
                <div className="w-full flex items-center justify-center pt-[4px]">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="w-[186px] rounded-[14px] px-[16px] py-[16px] flex flex-col items-center text-center gap-[8px] border border-white/40 shadow-[0_10px_28px_rgba(0,0,0,0.15)]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(247,252,255,0.88) 100%)",
                    }}
                  >
                    <img
                      src={awardDoctors.featuredDoctor.avatar}
                      alt={awardDoctors.featuredDoctor.name}
                      width={52}
                      height={52}
                      className="w-[52px] h-[52px] rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div className="flex flex-col gap-[2px]">
                      <span className="font-sans text-[14px] font-semibold text-[#09292B] leading-tight">
                        {awardDoctors.featuredDoctor.name}
                      </span>
                      <span className="font-sans text-[11px] font-normal text-black/60 leading-tight">
                        {awardDoctors.featuredDoctor.role}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Card Copy */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-sans text-[20px] font-medium leading-[24px] text-white">
                    {awardDoctors.title}
                  </h3>
                  <p className="font-sans text-[16px] sm:text-[17px] font-normal leading-[1.45] text-white/85">
                    {awardDoctors.description}
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Insurance Coverage */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[15px] bg-black/25 backdrop-blur-[8px] border border-white/10 p-[26px] min-h-[296px] flex flex-col justify-between gap-[20px]"
              >
                {/* Frosted Notification Toast Mockup */}
                <div className="w-full flex items-center justify-center pt-[16px]">
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="w-full max-w-[350px] rounded-[14px] p-[14px] flex items-start gap-[12px] border border-white/40 shadow-[0_10px_28px_rgba(0,0,0,0.16)]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(247,252,255,0.92) 100%)",
                    }}
                  >
                    <div className="w-[38px] h-[38px] rounded-[10px] bg-[#155E63] flex items-center justify-center shrink-0">
                      <Star size={18} className="text-[#FFD942] fill-[#FFD942]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-[8px]">
                        <span className="font-sans text-[13px] font-semibold text-[#09292B]">
                          {insurance.notification.title}
                        </span>
                        <span className="font-sans text-[11px] text-black/50 shrink-0">
                          {insurance.notification.time}
                        </span>
                      </div>
                      <p className="mt-[2px] font-sans text-[12px] leading-[1.35] text-black/75">
                        {insurance.notification.message}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Card Copy */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-sans text-[20px] font-medium leading-[24px] text-white">
                    {insurance.title}
                  </h3>
                  <p className="font-sans text-[16px] sm:text-[17px] font-normal leading-[1.45] text-white/85">
                    {insurance.description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Full-Height Card 2 (Easy Online Booking) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[15px] bg-black/25 backdrop-blur-[8px] border border-white/10 p-[26px] min-h-[560px] lg:min-h-[600px] flex flex-col justify-between gap-[24px]"
            >
              {/* Frosted Schedule Appointment + Overlapping Mini Calendar Mockup */}
              <div className="relative w-full flex flex-col items-center justify-center pt-[14px] pb-[20px]">
                {/* Main Schedule Appointment Dialog */}
                <div
                  className="w-full max-w-[330px] rounded-[14px] p-[18px] border border-white/45 shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(247,252,255,0.92) 100%)",
                  }}
                >
                  <div className="mb-[14px]">
                    <p className="font-sans text-[14px] font-semibold text-[#09292B]">
                      {easyBooking.mockup.dialogTitle}
                    </p>
                    <p className="font-sans text-[11px] text-black/55">
                      {easyBooking.mockup.dialogSubtitle}
                    </p>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-2 gap-[8px] mb-[14px]">
                    <div className="flex items-center justify-between bg-white/90 border border-black/10 rounded-[8px] px-[10px] py-[8px]">
                      <div className="flex items-center gap-[6px]">
                        <Calendar size={13} className="text-[#155E63]" />
                        <span className="font-sans text-[12px] font-medium text-[#09292B]">
                          {selectedDay === 12
                            ? easyBooking.mockup.dateValue
                            : `Apr ${selectedDay}`}
                        </span>
                      </div>
                      <ChevronDown size={13} className="text-black/45" />
                    </div>
                    <div className="flex items-center justify-between bg-white/90 border border-black/10 rounded-[8px] px-[10px] py-[8px]">
                      <div className="flex items-center gap-[6px]">
                        <Clock size={13} className="text-[#155E63]" />
                        <span className="font-sans text-[12px] font-medium text-[#09292B]">
                          {easyBooking.mockup.timeValue}
                        </span>
                      </div>
                      <ChevronDown size={13} className="text-black/45" />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-[8px]">
                    <div className="flex-1 text-center bg-[#155E63] text-white font-sans text-[12px] font-medium py-[8px] rounded-[8px]">
                      {easyBooking.mockup.confirmLabel}
                    </div>
                    <div className="px-[12px] py-[8px] rounded-[8px] bg-white/80 border border-black/10 font-sans text-[12px] font-medium text-black/70">
                      {easyBooking.mockup.cancelLabel}
                    </div>
                  </div>
                </div>

                {/* Overlapping White April 2026 Mini-Calendar Popover */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="-mt-[16px] ml-auto sm:mr-[16px] w-[228px] rounded-[12px] bg-white p-[12px] shadow-[0_14px_32px_rgba(0,0,0,0.22)] border border-black/5"
                >
                  <div className="flex items-center justify-between mb-[10px]">
                    <ChevronLeft size={14} className="text-black/50" />
                    <span className="font-sans text-[12px] font-semibold text-[#09292B]">
                      {easyBooking.mockup.calendarMonth}
                    </span>
                    <ChevronRight size={14} className="text-black/50" />
                  </div>

                  {/* Weekday Labels */}
                  <div className="grid grid-cols-7 gap-[2px] mb-[4px] text-center">
                    {WEEKDAYS.map((day) => (
                      <span
                        key={day}
                        className="font-sans text-[10px] font-medium text-black/45"
                      >
                        {day}
                      </span>
                    ))}
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-[2px] text-center">
                    {CALENDAR_DAYS.map((d, idx) => {
                      if (!d) return <span key={idx} className="h-[24px]" />;
                      const num = Number(d);
                      const isSelected = num === selectedDay;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedDay(num)}
                          className={`h-[24px] w-[24px] mx-auto rounded-[6px] font-sans text-[10px] font-medium transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-[#09292B] text-white"
                              : "text-black/80 hover:bg-[#EAFFE3]"
                          }`}
                        >
                          {d}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Card Copy */}
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-sans text-[20px] font-medium leading-[24px] text-white">
                  {easyBooking.title}
                </h3>
                <p className="font-sans text-[16px] sm:text-[17px] font-normal leading-[1.45] text-white/85">
                  {easyBooking.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
