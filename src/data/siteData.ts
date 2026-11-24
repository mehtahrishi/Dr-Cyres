export interface NavLink {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface OrbitImage {
  src: string;
  alt: string;
}

export interface SpecialtyItem {
  title: string;
  image: string;
  alt: string;
  column: "left" | "right";
  size: "square" | "wide";
  fit?: "cover" | "contain";
  bgClass?: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  illustration: string;
  alt: string;
}

export interface DoctorProfile {
  name: string;
  specialty: string;
  image: string;
  fit?: "cover" | "contain";
  bgClass?: string;
}

export interface TestimonialItem {
  stat: string;
  statLabel: string;
  quote: string;
  author: string;
  department: string;
  image: string;
  alt: string;
  fit?: "cover" | "contain";
  bgClass?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface TrustBadge {
  name: string;
  image: string;
  width: number;
  height: number;
}

export const siteData = {
  brand: {
    name: "Dr. Mehta Eye Centre",
    logoSquare:
      "https://framerusercontent.com/images/oBwn9sqZ99XUyekqmWbeTyTZgA.png?scale-down-to=512&width=600&height=600",
    crossMark:
      "https://framerusercontent.com/images/HM5PHGoa60qPQJbIT4qAtJbLfY0.png?width=118&height=118",
    title:
      "MIGS Glaucoma Surgery in Mumbai | Dr. Cyres K. Mehta Eye Centre",
    description:
      "Minimally invasive glaucoma surgery in Mumbai using Hydrus® and iStent inject® W microstents. Lower eye pressure, fewer drops, recovery in days. Book a consult.",
  },

  nav: {
    links: [
      { label: "Implants", href: "/#expertise" },
      { label: "Why MIGS", href: "/#why-us" },
      { label: "Gallery", href: "/#doctors" },
      { label: "Evidence", href: "/#reviews" },
    ] as NavLink[],
    cta: {
      label: "Book a Consultation",
      href: "/visit-us",
    },
  },

  hero: {
    ratingText: "Hydrus® & iStent inject® W · Mumbai",
    starCount: 5,
    heading: "Minimally Invasive Glaucoma Surgery (MIGS)",
    cta: {
      label: "Book a Consultation",
      href: "/visit-us",
    },
    backgroundImage:
      "https://framerusercontent.com/images/9couhjelan4XsaHiDc5LY5DHUc.webp?scale-down-to=2048&width=5504&height=3072",
    backgroundAlt:
      "Dr. Cyres K. Mehta International Eye Centre glaucoma consultation",
    videoPreview: {
      thumbnail: "/images/migs/eye-anatomy-outflow.jpg",
      videoSrc: "/images/migs/video1.mp4",
      videoTitle: "Understanding MIGS",
      alt: "Understanding MIGS microstent video preview",
      caption:
        "Lowering eye pressure with an implant smaller than a grain of rice — through a micro-incision, with recovery measured in days.",
    },
  },

  metrics: [
    {
      value: "7.0",
      label: "mmHg mean unmedicated\nIOP reduction at 24 months",
    },
    {
      value: "59%",
      label: "Hydrus® patients\nmedication-free at 5 years",
    },
    {
      value: "15–20m",
      label: "Same-day micro-incision\nprocedure duration",
    },
  ] as MetricItem[],

  about: {
    editorialStatement:
      "Before MIGS, the choices were often daily glaucoma drops for life or a major glaucoma operation, with little in between. MIGS works from inside the eye, uses the eye's natural drainage pathway, and leaves the outer wall untouched.",
    heading: "Dr. Cyres K. Mehta, Pioneer in Non-Penetrating Glaucoma & MIGS",
    orbitImages: [
      {
        src: "/images/migs/eye-anatomy-outflow.jpg",
        alt: "Natural aqueous outflow pathway through Schlemm's canal",
      },
      {
        src: "/images/migs/eye-exam-oct.jpg",
        alt: "Non-invasive OCT and gonioscopy eye assessment",
      },
      {
        src: "/images/migs/migs-microsurgery.jpg",
        alt: "Ophthalmic microsurgical operating microscope",
      },
      {
        src: "/images/migs/doctor-portrait.jpg",
        alt: "Senior ophthalmologist at Dr. Cyres K. Mehta Eye Centre",
      },
      {
        src: "/images/migs/banner-side.webp",
        alt: "Patient undergoing slit-lamp eye examination",
      },
      {
        src: "https://framerusercontent.com/images/7lNYd2rQbORrTGJCszMScJqIbGo.jpg?width=562&height=567",
        alt: "Smiling senior patient with clear vision",
      },
    ] as OrbitImage[],
  },

  expertise: {
    eyebrow: "THE IMPLANTS & APPROACH",
    heading: "Two Implants, One Natural Goal",
    centerCard: {
      heading: "Work with the eye's drainage system, not around it",
      ctaLabel: "Book a Consultation",
      ctaHref: "/visit-us",
    },
    specialties: [
      {
        title: "iStent inject® W",
        image: "/images/migs/processed.png",
        alt: "iStent inject W two titanium microstents",
        column: "left",
        size: "square",
        fit: "contain",
        bgClass: "bg-[#F3F7F6]",
      },
      {
        title: "Hydrus® Microstent",
        image: "/images/migs/img4.jpeg",
        alt: "Hydrus Microstent curved nitinol scaffold",
        column: "left",
        size: "square",
        fit: "contain",
        bgClass: "bg-[#F7FAFA]",
      },
      {
        title: "Natural Outflow Pathway",
        image: "/images/migs/eye-anatomy-outflow.jpg",
        alt: "3D visualization of Schlemm's canal and microstent outflow",
        column: "left",
        size: "wide",
        fit: "cover",
      },
      {
        title: "OCT & Gonioscopy",
        image: "/images/migs/eye-exam-oct.jpg",
        alt: "Patient undergoing OCT imaging and gonioscopy assessment",
        column: "right",
        size: "square",
        fit: "cover",
      },
      {
        title: "Microsurgical Suite",
        image: "/images/migs/migs-microsurgery.jpg",
        alt: "Modern ophthalmic microsurgery microscope",
        column: "right",
        size: "square",
        fit: "cover",
      },
      {
        title: "Same-Day Slit-Lamp Care",
        image: "/images/migs/banner-side.webp",
        alt: "Slit-lamp glaucoma consultation and follow-up",
        column: "right",
        size: "wide",
        fit: "cover",
      },
    ] as SpecialtyItem[],
  },

  howItWorks: {
    eyebrow: "HOW IT WORKS",
    heading: "How MIGS Lowers Eye Pressure",
    steps: [
      {
        step: "Step 01",
        title: "Bypass",
        description:
          "Creates a pathway through the trabecular meshwork via a 1.5 mm self-sealing micro-incision so fluid can reach Schlemm's canal.",
        illustration: "/images/migs/mnemonic-bypass.png",
        alt: "Bypass mnemonic illustration showing a micro-channel through the meshwork",
      },
      {
        step: "Step 02",
        title: "Restore",
        description:
          "Uses the eye's natural drainage route rather than creating an external filtration bleb, leaving the conjunctiva and sclera intact.",
        illustration: "/images/migs/mnemonic-restore.png",
        alt: "Restore mnemonic illustration showing restored natural aqueous outflow",
      },
      {
        step: "Step 03",
        title: "Maintain",
        description:
          "Flexible implants scaffold Schlemm's canal open to support ongoing outflow and preserve future glaucoma treatment options.",
        illustration: "/images/migs/mnemonic-maintain.png",
        alt: "Maintain mnemonic illustration showing a curved canal micro-scaffold",
      },
    ] as HowItWorksStep[],
  },

  whyClinicHub: {
    eyebrow: "WHY PATIENTS CHOOSE MIGS",
    heading: "Minimally Invasive Care, Recovery Measured In Days",
    bannerImage:
      "https://framerusercontent.com/images/NyHAAOvVVy1zwhT2jhcsCaheuI.webp?scale-down-to=2048&width=6336&height=2688",
    bannerAlt: "Clear vision and family eye care",
    cards: {
      awardDoctors: {
        title: "Suitability-First Planning",
        description:
          "Gonioscopy, OCT imaging, and visual-field testing help Dr. Cyres K. Mehta decide whether MIGS or another glaucoma treatment serves you best.",
        featuredDoctor: {
          name: "Dr. Cyres K. Mehta",
          role: "Glaucoma & MIGS Pioneer",
          avatar: "/images/migs/doctor-portrait.jpg",
        },
      },
      easyBooking: {
        title: "Same-Day Procedure & Fast Recovery",
        description:
          "Performed under local anaesthetic in 15–20 minutes — standalone or combined with robotic cataract surgery — with light routine resuming within Week 1.",
        mockup: {
          dialogTitle: "Schedule MIGS Assessment",
          dialogSubtitle: "Gonioscopy & OCT suitability evaluation",
          dateValue: "Today",
          timeValue: "10:30 AM",
          confirmLabel: "Book Consultation",
          cancelLabel: "Cancel",
          calendarMonth: "April 2026",
          selectedDay: 12,
        },
      },
      insurance: {
        title: "Reimbursement Documentation",
        description:
          "We do not have a cashless facility, so fees are settled directly — and we provide full surgical notes, invoices, and implant details for insurer reimbursement.",
        notification: {
          title: "Claim Paperwork Included",
          time: "Direct billing",
          message:
            "Surgical notes, invoices & implant details provided for reimbursement…",
        },
      },
    },
  },

  doctors: {
    eyebrow: "SEE IT UP CLOSE",
    heading: "A Closer Look At MIGS Microstents",
    list: [
      {
        name: "iStent inject® W",
        specialty: "360 microns across",
        image: "/images/migs/img1.jpeg",
        fit: "contain",
        bgClass: "bg-black",
      },
      {
        name: "Actual Size",
        specialty: "Against a fingerprint ridge",
        image: "/images/migs/img2.jpeg",
        fit: "contain",
        bgClass: "bg-black",
      },
      {
        name: "True Scale",
        specialty: "Easy to miss — that is the point",
        image: "/images/migs/img3.jpeg",
        fit: "contain",
        bgClass: "bg-black",
      },
      {
        name: "Hydrus® Microstent",
        specialty: "Flexible 90° canal scaffold",
        image: "/images/migs/img4.jpeg",
        fit: "contain",
        bgClass: "bg-[#F7FAFA]",
      },
      {
        name: "Device Detail",
        specialty: "Inlet and side outlets",
        image: "/images/migs/processed.png",
        fit: "contain",
        bgClass: "bg-[#F3F7F6]",
      },
    ] as DoctorProfile[],
  },

  testimonials: {
    eyebrow: "THE EVIDENCE",
    heading: "What Published Clinical Trials Show",
    items: [
      {
        stat: "7.0 mmHg",
        statLabel: "Mean Unmedicated IOP Reduction",
        quote:
          "“Mean unmedicated intraocular pressure reduction at 24 months with iStent inject® in a 505-patient randomised multi-centre clinical trial — delivered through one micro-incision with multi-directional outflow.”",
        author: "iStent inject® W",
        department: "24-Month Randomised Trial",
        image: "/images/migs/image.png",
        alt: "iStent inject W actual size on fingertip clinical overview",
        fit: "contain",
        bgClass: "bg-[#15283B]",
      },
      {
        stat: "59%",
        statLabel: "Medication-Free at Five Years",
        quote:
          "“59% of Hydrus® Microstent patients remained medication-free at five years in long-term HORIZON data, with serious adverse-event rates comparable to cataract surgery alone.”",
        author: "Hydrus® Microstent",
        department: "5-Year HORIZON Data",
        image: "/images/migs/eye-anatomy-outflow.jpg",
        alt: "Hydrus Microstent natural aqueous outflow visualization",
        fit: "cover",
        bgClass: "bg-[#09292B]",
      },
      {
        stat: "55%",
        statLabel: "Less Further Glaucoma Surgery",
        quote:
          "“55% relative reduction in further glaucoma surgery at five years with Hydrus® (2.4% vs 5.3%). Because MIGS preserves the outer wall of the eye, future options stay open if ever needed.”",
        author: "Natural Outflow",
        department: "Anatomy Preserved",
        image: "/images/migs/migs-microsurgery.jpg",
        alt: "Ophthalmic microsurgery suite for glaucoma and cataract care",
        fit: "cover",
        bgClass: "bg-[#F2F5F5]",
      },
    ] as TestimonialItem[],
  },

  faq: {
    eyebrow: "QUESTIONS",
    heading: "Questions We Are Asked Most",
    ctaCard: {
      heading: "Book a consultation",
      subtitle:
        "Gonioscopy and OCT imaging help Dr. Cyres decide whether MIGS is appropriate for your eyes.",
      buttonLabel: "Book a Visit",
      buttonHref: "/visit-us",
    },
    items: [
      {
        question: "Will I be able to stop my eye drops?",
        answer:
          "Many patients reduce their medicines and some come off them completely. The result depends on starting pressure and how the eye responds, with the longer-term picture becoming clearer over the following months.",
      },
      {
        question: "Does MIGS cure glaucoma?",
        answer:
          "No. MIGS lowers the pressure that drives damage and may reduce medication burden, but glaucoma is managed rather than cured.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "The eye is numbed with drops or a local injection. Most patients feel pressure during surgery and describe grittiness rather than significant pain afterwards.",
      },
      {
        question: "How long does it take?",
        answer:
          "On its own, MIGS usually takes about 15 to 20 minutes. When it is combined with cataract surgery, it adds only a few minutes to that operation. You go home the same day either way.",
      },
      {
        question: "Can both eyes be done together?",
        answer:
          "Usually they are treated separately, often a few weeks apart, so one eye can settle while the other recovers.",
      },
      {
        question: "What if MIGS does not bring my pressure down enough?",
        answer:
          "Other glaucoma treatments remain possible. Because MIGS preserves the outer wall of the eye, options such as trabeculectomy, tube shunt or laser may still be available.",
      },
      {
        question: "Can I have MIGS if I have already had cataract surgery?",
        answer:
          "Yes. Both implants can be considered in an eye that already has a lens implant, when clinically appropriate.",
      },
      {
        question: "Is MIGS covered by insurance? Do you offer cashless?",
        answer:
          "We do not have a cashless facility, so the cost is settled with us directly. What we do provide is the complete paperwork you need to claim afterwards — surgical notes, invoices and implant details — so you can file for reimbursement with your insurer.",
      },
    ] as FaqItem[],
  },

  footer: {
    ctaHeading: "Lower Eye Pressure With Recovery Measured In Days",
    ctaButtonLabel: "Book a Consultation",
    ctaButtonHref: "/visit-us",
    columns: [
      {
        heading: "MIGS Sections",
        links: [
          { label: "Implants & Scale", href: "/#expertise" },
          { label: "How MIGS Works", href: "/#how-it-works" },
          { label: "Closer Look Gallery", href: "/#doctors" },
          { label: "Clinical Evidence", href: "/#reviews" },
        ],
      },
      {
        heading: "Eye Services",
        links: [
          { label: "MIGS Glaucoma Surgery", href: "/" },
          { label: "Book Consultation", href: "/visit-us" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ],
      },
      {
        heading: "Contact",
        links: [
          { label: "Call 98198 50971", href: "tel:+919819850971" },
          { label: "Why Choose MIGS?", href: "/#why-us" },
          { label: "Patient FAQs", href: "/#faq" },
        ],
      },
    ] as FooterColumn[],
    trustLabel: "Trusted by patients and backed by clinical standards",
    trustBadges: [
      {
        name: "ISO 9001 Certified",
        image:
          "https://framerusercontent.com/images/y5R3ZNnaDuy1KlEBbhlyKy51Qug.png?width=508&height=224",
        width: 109,
        height: 48,
      },
      {
        name: "HIPAA Compliant",
        image:
          "https://framerusercontent.com/images/9W1CV7YW6gpU5vsaREXM4raf2o.png?scale-down-to=512&width=704&height=224",
        width: 151,
        height: 48,
      },
    ] as TrustBadge[],
    disclaimer:
      "Medical information on this page is for patient education and is not a substitute for an examination or individualized medical advice. Trial averages do not predict an individual result; MIGS does not restore vision already lost and is not a cure for glaucoma. Device indications, availability and treatment selection should be confirmed with your ophthalmologist.",
    copyrightPrefix: "© 2026 Dr. Cyres K. Mehta Eye Centre. All rights reserved. ",
    creatorLabel: "Call 98198 50971",
    creatorHref: "tel:+919819850971",
  },

  visitUs: {
    pageTitle: "Book a MIGS Consultation | Dr. Cyres K. Mehta Eye Centre",
    hero: {
      heading: "Book Your MIGS Glaucoma Consultation",
      subtitle:
        "Call us on 98198 50971 or fill out the form to schedule your gonioscopy and OCT suitability assessment.",
      backgroundImage:
        "https://framerusercontent.com/images/VpnNnqYD7pP5JnRwjrJ2zbZk2U.webp?width=5504&height=3072",
      backgroundAlt: "Doctor consulting with patient for eye assessment",
      form: {
        fullNameLabel: "Full name *",
        fullNamePlaceholder: "Jane Smith",
        emailLabel: "Email address *",
        emailPlaceholder: "jane@gmail.com",
        phoneLabel: "Phone Number *",
        phonePlaceholder: "+91 98198 50971",
        dateLabel: "Preferred Date *",
        serviceLabel: "Select Eye Care Service",
        servicePlaceholder: "Select…",
        services: [
          "MIGS (Glaucoma Microstent)",
          "Robotic Cataract Surgery",
          "Glaucoma Management",
          "ReLEx SMILE",
          "Advanced LASIK & Contoura",
          "Keratoconus & C3R",
          "Corneal Transplants (DSAEK/DMEK)",
          "Vitreoretinal Services",
          "Pediatric Eye Diseases",
        ],
        submitLabel: "Submit",
      },
      contactStrip: {
        emergencyLabel: "Direct Clinic Phone",
        emergencyPhone: "98198 50971",
        emergencyHref: "tel:+919819850971",
        hoursLabel: "Procedure Time",
        hoursValue: "15–20 mins · Same-day",
      },
    },
    location: {
      eyebrow: "OUR CENTRE",
      heading: "Dr. Cyres K. Mehta International Eye Centre",
      image:
        "https://framerusercontent.com/images/7aLFPjkOfEpVb241G1lyVrhCY.webp?width=4608&height=3712",
      imageAlt: "International Eye Centre waiting lounge",
      mapsLabel: "Chat on WhatsApp",
      mapsHref:
        "https://wa.me/919819850971?text=Hi%2C%20I%20would%20like%20to%20know%20if%20I%20am%20suitable%20for%20MIGS%20glaucoma%20surgery.",
      addressTitle: "Location & Follow-Up",
      addressLines: [
        "Dr. Cyres K. Mehta Eye Centre, Mumbai",
        "Planned follow-ups: Day 1, Week 1, Month 1 & Month 3",
      ],
      hoursTitle: "Direct Contact",
      hoursLines: [
        "Phone / WhatsApp: +91 98198 50971",
        "Complete reimbursement paperwork provided after surgery",
      ],
    },
  },
};
