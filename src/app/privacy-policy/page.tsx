import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/siteData";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      <Navbar />

      <section className="w-full pt-[130px] pb-[100px] px-[24px] lg:px-[60px]">
        <div className="mx-auto max-w-[820px] flex flex-col gap-[28px]">
          <Link
            href="/"
            className="inline-flex items-center gap-[8px] font-sans text-[14px] font-medium text-[#155E63] hover:opacity-75 transition-opacity w-fit"
          >
            <ArrowLeft size={16} />
            Back to Homepage
          </Link>

          <div className="flex flex-col gap-[10px]">
            <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-[#155E63]">
              LEGAL
            </span>
            <h1 className="font-serif text-[36px] sm:text-[42px] font-normal leading-[1.2] tracking-[-0.84px] text-black">
              Privacy Policy
            </h1>
          </div>

          <div className="flex flex-col gap-[18px] font-sans text-[16px] leading-[1.65] text-black/80">
            <p>{siteData.footer.disclaimer}</p>
            <p>
              At {siteData.brand.name}, we are committed to protecting your
              personal and medical information in accordance with HIPAA and
              applicable privacy regulations. Information submitted when booking
              an appointment is used solely to coordinate your clinical care and
              follow-up communications.
            </p>
            <p>
              We never sell or share patient data with unauthorized third
              parties. For any questions regarding your medical records or
              privacy rights, please contact our patient support team directly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
