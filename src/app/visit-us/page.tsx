"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/siteData";

export default function VisitUsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState(
    siteData.visitUs.departments[0]
  );
  const [selectedTime, setSelectedTime] = useState(siteData.visitUs.timeSlots[0]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("2026-04-12");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen w-full bg-white text-black">
      <Navbar />

      <section className="w-full pt-[130px] pb-[100px] px-[24px] lg:px-[60px]">
        <div className="mx-auto max-w-[1000px] flex flex-col gap-[40px]">
          <Link
            href="/"
            className="inline-flex items-center gap-[8px] font-sans text-[14px] font-medium text-[#155E63] hover:opacity-75 transition-opacity w-fit"
          >
            <ArrowLeft size={16} />
            Back to Homepage
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-[12px] max-w-[640px]"
          >
            <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-[#155E63]">
              {siteData.visitUs.eyebrow}
            </span>
            <h1 className="font-serif text-[36px] sm:text-[46px] font-normal leading-[1.2] tracking-[-0.84px] text-black">
              {siteData.visitUs.heading}
            </h1>
            <p className="font-sans text-[17px] text-black/70 leading-[1.5]">
              {siteData.visitUs.subtitle}
            </p>
          </motion.div>

          <div
            className="rounded-[25px] p-[28px] sm:p-[44px]"
            style={{
              background:
                "linear-gradient(230deg, #F1FFED 0%, #EAFFE3 98.12%)",
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-[40px] flex flex-col items-center text-center gap-[18px]"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#155E63] text-white flex items-center justify-center">
                  <CheckCircle2 size={30} />
                </div>
                <h2 className="font-serif text-[32px] font-normal text-[#09292B]">
                  Appointment Request Confirmed
                </h2>
                <p className="font-sans text-[16px] text-[#09292B]/80 max-w-[460px]">
                  Thank you{fullName ? `, ${fullName}` : ""}. Your{" "}
                  <strong>{selectedDepartment}</strong> visit is scheduled for{" "}
                  <strong>{date}</strong> at <strong>{selectedTime}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-[8px] bg-[#09292B] text-white font-sans text-[15px] font-medium px-[24px] py-[12px] rounded-[10px] cursor-pointer hover:bg-[#155E63] transition-colors"
                >
                  Book Another Visit
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-[24px]"
              >
                <div className="flex flex-col gap-[8px]">
                  <label className="font-sans text-[14px] font-medium text-[#09292B]">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="bg-white rounded-[10px] px-[16px] py-[13px] font-sans text-[15px] text-black border border-black/10 outline-none focus:border-[#155E63]"
                  />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-sans text-[14px] font-medium text-[#09292B]">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="bg-white rounded-[10px] px-[16px] py-[13px] font-sans text-[15px] text-black border border-black/10 outline-none focus:border-[#155E63]"
                  />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-sans text-[14px] font-medium text-[#09292B]">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                    className="bg-white rounded-[10px] px-[16px] py-[13px] font-sans text-[15px] text-black border border-black/10 outline-none focus:border-[#155E63]"
                  />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-sans text-[14px] font-medium text-[#09292B]">
                    Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-white rounded-[10px] px-[16px] py-[13px] font-sans text-[15px] text-black border border-black/10 outline-none focus:border-[#155E63]"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-[10px]">
                  <label className="font-sans text-[14px] font-medium text-[#09292B]">
                    Select Department
                  </label>
                  <div className="flex flex-wrap gap-[10px]">
                    {siteData.visitUs.departments.map((dept) => (
                      <button
                        key={dept}
                        type="button"
                        onClick={() => setSelectedDepartment(dept)}
                        className={`px-[16px] py-[10px] rounded-[10px] font-sans text-[14px] font-medium transition-colors cursor-pointer ${
                          selectedDepartment === dept
                            ? "bg-[#09292B] text-white"
                            : "bg-white text-[#09292B] border border-black/10 hover:border-[#155E63]"
                        }`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-col gap-[10px]">
                  <label className="font-sans text-[14px] font-medium text-[#09292B]">
                    Select Time Slot
                  </label>
                  <div className="flex flex-wrap gap-[10px]">
                    {siteData.visitUs.timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`px-[16px] py-[10px] rounded-[10px] font-sans text-[14px] font-medium transition-colors cursor-pointer ${
                          selectedTime === slot
                            ? "bg-[#155E63] text-white"
                            : "bg-white text-[#09292B] border border-black/10 hover:border-[#155E63]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 pt-[8px]">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#09292B] text-white font-sans text-[16px] font-medium px-[32px] py-[14px] rounded-[12px] cursor-pointer hover:bg-[#155E63] transition-colors"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
