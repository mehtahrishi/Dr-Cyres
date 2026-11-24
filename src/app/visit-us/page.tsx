"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronRight, Plus, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InvertedNotch } from "@/components/InvertedNotch";
import { siteData } from "@/data/siteData";

export default function VisitUsPage() {
  const { hero, location } = siteData.visitUs;
  const subtitleWords = hero.subtitle.split(" ");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [openFaqIndices, setOpenFaqIndices] = useState<Record<number, boolean>>(
    {}
  );

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen w-full bg-white text-black">
      <Navbar />

      {/* 1. Hero & Glassmorphic Booking Form Section */}
      <section className="w-full p-[8px] bg-white">
        <div className="relative w-full min-h-[860px] lg:h-[984px] rounded-[15px] overflow-hidden bg-[#09292B] flex items-end justify-center pt-[140px] lg:pt-[160px] pb-[48px] lg:pb-[60px] px-[20px] sm:px-[40px] lg:px-[52px]">
          {/* Full-bleed consultation photo */}
          <motion.img
            initial={{ scale: 1.04, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            src={hero.backgroundImage}
            alt={hero.backgroundAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Bottom gradient overlay matching exact Framer stop: 0% at 23% -> 50% at 100% */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0) 23%, rgba(0, 0, 0, 0.5) 100%)",
            }}
          />

          {/* Content Row: Text (Left) + Form & Details (Right) */}
          <div className="relative z-10 w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-[40px] lg:gap-[60px]">
            {/* Left Column: H1 + Staggered Word-Reveal Subtitle */}
            <div className="w-full max-w-[500px] flex flex-col items-start gap-[16px]">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[36px] sm:text-[44px] lg:text-[50px] font-normal leading-[1.2] text-white"
              >
                {hero.heading}
              </motion.h1>

              <p className="font-sans text-[18px] sm:text-[20px] font-medium leading-[24px] tracking-[-0.4px] text-white/80">
                {subtitleWords.map((word, idx) => (
                  <motion.span
                    key={`${word}-${idx}`}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.45,
                      delay: 0.22 + idx * 0.035,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-[0.26em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>

            {/* Right Column: Glassmorphic Booking Form + Contact Strip */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-[450px] flex flex-col items-center gap-[24px]"
            >
              {/* Glassmorphic Dark Form Card */}
              <div className="w-full bg-black/60 backdrop-blur-[5px] rounded-[15px] p-[25px]">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-[28px] flex flex-col items-center text-center gap-[14px]"
                  >
                    <div className="w-[48px] h-[48px] rounded-full bg-white text-[#09292B] flex items-center justify-center">
                      <CheckCircle2 size={26} />
                    </div>
                    <h2 className="font-serif text-[26px] font-normal text-white">
                      Visit Request Received
                    </h2>
                    <p className="font-sans text-[14px] leading-[1.5] text-white/80 max-w-[320px]">
                      Thank you{fullName ? `, ${fullName}` : ""}. Our care team
                      will confirm your{" "}
                      <span className="text-white font-medium">
                        {service || "appointment"}
                      </span>{" "}
                      shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName("");
                        setEmail("");
                        setPhone("");
                        setPreferredDate("");
                        setService("");
                      }}
                      className="mt-[6px] w-full h-[42px] bg-white text-[#09292B] font-sans text-[14px] font-semibold rounded-[8px] cursor-pointer hover:bg-white/90 transition-colors"
                    >
                      Book Another Visit
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-[25px]"
                  >
                    {/* Row 1: Full Name + Email Address */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[25px]">
                      <div className="flex flex-col gap-[10px]">
                        <label
                          htmlFor="visit-full-name"
                          className="font-sans text-[12px] font-medium leading-[14.4px] text-white"
                        >
                          {hero.form.fullNameLabel}
                        </label>
                        <input
                          id="visit-full-name"
                          name="Full Name"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder={hero.form.fullNamePlaceholder}
                          className="w-full h-[41px] rounded-[6px] bg-white/[0.05] px-[12px] font-sans text-[12px] leading-[16.8px] text-white placeholder:text-white/50 outline-none border border-transparent focus:border-white/30 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-[10px]">
                        <label
                          htmlFor="visit-email"
                          className="font-sans text-[12px] font-medium leading-[14.4px] text-white"
                        >
                          {hero.form.emailLabel}
                        </label>
                        <input
                          id="visit-email"
                          name="Email Address"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={hero.form.emailPlaceholder}
                          className="w-full h-[41px] rounded-[6px] bg-white/[0.05] px-[12px] font-sans text-[12px] leading-[16.8px] text-white placeholder:text-white/50 outline-none border border-transparent focus:border-white/30 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone Number + Preferred Date */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[25px]">
                      <div className="flex flex-col gap-[10px]">
                        <label
                          htmlFor="visit-phone"
                          className="font-sans text-[12px] font-medium leading-[14.4px] text-white"
                        >
                          {hero.form.phoneLabel}
                        </label>
                        <input
                          id="visit-phone"
                          name="Phone Number"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={hero.form.phonePlaceholder}
                          className="w-full h-[41px] rounded-[6px] bg-white/[0.05] px-[12px] font-sans text-[12px] leading-[16.8px] text-white placeholder:text-white/50 outline-none border border-transparent focus:border-white/30 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-[10px]">
                        <label
                          htmlFor="visit-date"
                          className="font-sans text-[12px] font-medium leading-[14.4px] text-white"
                        >
                          {hero.form.dateLabel}
                        </label>
                        <input
                          id="visit-date"
                          name="Preferred Date"
                          type="date"
                          required
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className={`w-full h-[41px] rounded-[6px] bg-white/[0.05] px-[12px] font-sans text-[12px] leading-[16.8px] outline-none border border-transparent focus:border-white/30 transition-colors [color-scheme:dark] ${
                            preferredDate ? "text-white" : "text-white/50"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Row 3: Select Service */}
                    <div className="w-full flex flex-col gap-[10px]">
                      <label
                        htmlFor="visit-service"
                        className="font-sans text-[12px] font-medium leading-[14.4px] text-white"
                      >
                        {hero.form.serviceLabel}
                      </label>
                      <div className="relative w-full">
                        <select
                          id="visit-service"
                          name="Select Service"
                          required
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className={`w-full h-[41px] appearance-none rounded-[6px] bg-white/[0.05] pl-[12px] pr-[34px] font-sans text-[12px] leading-[16.8px] outline-none border border-transparent focus:border-white/30 transition-colors cursor-pointer ${
                            service ? "text-white" : "text-white/50"
                          }`}
                        >
                          <option
                            value=""
                            disabled
                            className="bg-[#09292B] text-white/60"
                          >
                            {hero.form.servicePlaceholder}
                          </option>
                          {hero.form.services.map((opt) => (
                            <option
                              key={opt}
                              value={opt}
                              className="bg-[#09292B] text-white"
                            >
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={14}
                          className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-white/65"
                        />
                      </div>
                    </div>

                    {/* Row 4: Full-Width White Submit Button */}
                    <button
                      type="submit"
                      className="w-full h-[42px] bg-white text-[#09292B] font-sans text-[14px] font-semibold leading-[16.8px] rounded-[8px] cursor-pointer transition-all duration-200 hover:bg-white/90 active:scale-[0.99]"
                    >
                      {hero.form.submitLabel}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info Strip Below Form */}
              <div className="w-full flex items-center justify-center gap-[10px]">
                <div className="flex-1 px-[5px] flex flex-col items-center gap-[8px] text-center">
                  <span className="font-sans text-[14px] font-normal leading-[19.6px] text-white/80">
                    {hero.contactStrip.emergencyLabel}
                  </span>
                  <a
                    href={hero.contactStrip.emergencyHref}
                    className="font-sans text-[16px] font-medium leading-[19.2px] tracking-[-0.32px] text-white hover:text-white/80 transition-colors"
                  >
                    {hero.contactStrip.emergencyPhone}
                  </a>
                </div>

                <div className="flex-1 px-[5px] flex flex-col items-center gap-[8px] text-center">
                  <span className="font-sans text-[14px] font-normal leading-[19.6px] text-white/80">
                    {hero.contactStrip.hoursLabel}
                  </span>
                  <span className="font-sans text-[16px] font-medium leading-[19.2px] tracking-[-0.32px] text-white">
                    {hero.contactStrip.hoursValue}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Our Location Section */}
      <section className="w-full bg-white pt-[80px] pb-[60px] px-[24px] lg:px-[60px]">
        <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row items-center justify-center gap-[48px] lg:gap-[80px]">
          {/* Left Column: Clinic Waiting Room Image + See on Maps Cutout Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:w-[620px] h-[300px] sm:h-[380px] lg:h-[400px] rounded-[15px] overflow-hidden shrink-0 bg-[#F2F5F5]"
          >
            <img
              src={location.image}
              alt={location.imageAlt}
              className="w-full h-full object-cover"
            />

            <InvertedNotch cornerSize={20} className="px-[20px] py-[15px]">
              <a
                href={location.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-[15px] font-sans text-[18px] sm:text-[20px] font-medium leading-[24px] tracking-[-0.4px] text-black"
              >
                <span>{location.mapsLabel}</span>
                <span className="w-[36px] h-[36px] rounded-full bg-[#09292B] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-[3px]">
                  <ChevronRight size={18} />
                </span>
              </a>
            </InvertedNotch>
          </motion.div>

          {/* Right Column: Location Heading, Address & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-[500px] flex flex-col items-start gap-[40px] lg:gap-[60px]"
          >
            {/* Header Stack */}
            <div className="flex flex-col items-start gap-[10px]">
              <span className="font-sans text-[14px] font-semibold leading-[16.8px] uppercase text-[#155E63]">
                {location.eyebrow}
              </span>
              <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[50.4px] tracking-[-0.84px] capitalize text-black">
                {location.heading}
              </h2>
            </div>

            {/* Details Stack */}
            <div className="flex flex-col items-start gap-[20px]">
              <div className="flex flex-col items-start gap-[10px]">
                <h3 className="font-sans text-[20px] font-medium leading-[24px] tracking-[-0.4px] text-black">
                  {location.addressTitle}
                </h3>
                <div className="flex flex-col font-sans text-[18px] font-normal leading-[25.2px] tracking-[-0.18px] text-black/80">
                  {location.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-[10px]">
                <h3 className="font-sans text-[20px] font-medium leading-[24px] tracking-[-0.4px] text-black">
                  {location.hoursTitle}
                </h3>
                <div className="flex flex-col font-sans text-[18px] font-normal leading-[25.2px] tracking-[-0.18px] text-black/80">
                  {location.hoursLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FAQ Section (Visit Us 2-Column Split: Header Left + 5 Accordions Right) */}
      <section className="w-full bg-white pt-[60px] pb-[80px] px-[24px] lg:px-[60px]">
        <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row items-start justify-center gap-[40px] lg:gap-[60px]">
          {/* Left Column: Header Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:max-w-[500px] flex flex-col items-start gap-[10px]"
          >
            <span className="font-sans text-[14px] font-semibold leading-[16.8px] uppercase text-[#155E63]">
              {siteData.faq.eyebrow}
            </span>
            <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[50.4px] tracking-[-0.84px] capitalize text-black">
              {siteData.faq.heading}
            </h2>
          </motion.div>

          {/* Right Column: 5 Accordion Items */}
          <div className="w-full lg:flex-1 lg:max-w-[640px] flex flex-col rounded-[12px]">
            {siteData.faq.items.map((item, idx) => {
              const isOpen = !!openFaqIndices[idx];
              return (
                <div
                  key={item.question}
                  className="py-[20px] border-b border-[#09292B]/10 flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-[10px] text-left cursor-pointer group"
                  >
                    <span className="font-sans text-[18px] font-medium leading-[21.6px] tracking-[-0.36px] text-black group-hover:text-[#155E63] transition-colors">
                      {item.question}
                    </span>
                    <span className="w-[25px] h-[25px] rounded-[5px] bg-[#22A869]/10 flex items-center justify-center text-[#09292B] shrink-0">
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
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pt-[16px] pr-[36px] font-sans text-[18px] font-normal leading-[25.2px] tracking-[-0.18px] text-black">
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
      </section>

      <Footer />
    </main>
  );
}
