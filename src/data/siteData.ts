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

export interface YouTubeVideoItem {
  videoId: string;
  title: string;
  category: string;
}

export const siteData = {
  brand: {
    name: "Dr. Cyres Eye Centre",
    logoSquare:
      "https://cyreseye.com/wp-content/uploads/2025/08/logo-2020.jpg",
    crossMark:
      "https://cyreseye.com/wp-content/uploads/2025/08/icon-02.png",
    title:
      "MIGS Glaucoma Surgery in Mumbai | Dr. Cyres K. Mehta’s International Eye Centre",
    description:
      "Minimally invasive glaucoma surgery in Mumbai using Hydrus® and iStent inject® W microstents at Dr. Cyres K. Mehta’s International Eye Centre, Colaba. Lower eye pressure, fewer drops, recovery in days.",
  },

  nav: {
    links: [
      { label: "Implants", href: "/#expertise" },
      { label: "Why MIGS", href: "/#why-us" },
      { label: "Videos", href: "/#videos" },
      { label: "Evidence", href: "/#reviews" },
    ] as NavLink[],
    cta: {
      label: "Book a Consultation",
      href: "/visit-us",
    },
  },

  hero: {
    ratingText: "50,000+ Procedures · 25+ Countries · Colaba, Mumbai",
    starCount: 5,
    heading: "Minimally Invasive Glaucoma Surgery (MIGS)",
    cta: {
      label: "Book a Consultation",
      href: "/visit-us",
    },
    backgroundImage:
      "https://cyreseye.com/wp-content/uploads/2026/02/Next-generation-robotic-cataract-surgery-in-Mumbai.png",
    backgroundAlt:
      "Next-generation ophthalmic surgical theatre at Dr. Cyres K. Mehta’s International Eye Centre, Mumbai",
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
      value: "50K+",
      label: "Successful eye procedures\nby Dr. Cyres K. Mehta",
    },
  ] as MetricItem[],

  about: {
    editorialStatement:
      "Before MIGS, the choices were often daily glaucoma drops for life or a major glaucoma operation, with little in between. MIGS works from inside the eye, uses the eye's natural drainage pathway, and leaves the outer wall untouched.",
    heading: "Dr. Cyres K. Mehta — International Hero of Indian Ophthalmology",
    orbitImages: [
      {
        src: "https://cyreseye.com/wp-content/uploads/2026/02/dr-scaled-1.jpeg",
        alt: "Dr. Cyres K. Mehta — Surgical Chief, International Eye Centre",
      },
      {
        src: "https://cyreseye.com/wp-content/uploads/2026/08/Alcon-Unity-VCS-new.jpeg",
        alt: "Alcon Unity 4D Phaco robotic cataract surgery system",
      },
      {
        src: "https://cyreseye.com/wp-content/uploads/2026/01/the-human-eye-2.jpg",
        alt: "Macro human eye anatomy and vision care",
      },
      {
        src: "https://cyreseye.com/wp-content/uploads/2026/02/Next-generation-robotic-cataract-surgery-in-Mumbai.png",
        alt: "Next-generation robotic cataract and glaucoma theatre in Mumbai",
      },
      {
        src: "https://cyreseye.com/wp-content/uploads/2026/02/Dr.-Cyres-Mehtas-gold-medal-award.png",
        alt: "Dr. Cyres K. Mehta receiving international ophthalmology gold medal",
      },
      {
        src: "https://cyreseye.com/wp-content/uploads/2026/08/amazon-book-new.webp",
        alt: "Published ophthalmology book by Dr. Cyres K. Mehta",
      },
    ] as OrbitImage[],
  },

  expertise: {
    eyebrow: "THE IMPLANTS & TECHNOLOGY",
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
        title: "4D Phaco Alcon Unity™",
        image:
          "https://cyreseye.com/wp-content/uploads/2026/08/Alcon-Unity-VCS-new.jpeg",
        alt: "Alcon Unity VCS robotic cataract and ophthalmic system",
        column: "right",
        size: "square",
        fit: "cover",
      },
      {
        title: "Robotic Laser Suite",
        image: "https://cyreseye.com/wp-content/uploads/2026/08/machine.jpg",
        alt: "Robotic laser and microsurgical diagnostic suite",
        column: "right",
        size: "square",
        fit: "cover",
      },
      {
        title: "Glaucoma Management",
        image:
          "https://cyreseye.com/wp-content/uploads/2026/01/Glaucoma-Management-1.webp",
        alt: "Comprehensive glaucoma diagnostics and care at International Eye Centre",
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
    eyebrow: "WHY DR. CYRES K. MEHTA",
    heading: "Minimally Invasive Care, Recovery Measured In Days",
    bannerImage: "/images/migs/eye-exam-oct.jpg",
    bannerAlt: "Patient undergoing OCT and gonioscopy assessment at Dr. Cyres K. Mehta Eye Centre",
    cards: {
      awardDoctors: {
        title: "Pioneer in Glaucoma & MIGS",
        description:
          "Recipient of the Parsi Ratna Award, British Ophthalmic Excellence Award & AIOS International Hero honor — combining gonioscopy, OCT imaging, and 50,000+ procedures.",
        featuredDoctor: {
          name: "Dr. Cyres K. Mehta",
          role: "Surgical Chief · 50,000+ Procedures",
          avatar:
            "https://cyreseye.com/wp-content/uploads/2026/02/dr-scaled-1.jpeg",
        },
      },
      easyBooking: {
        title: "Same-Day Procedure & Fast Recovery",
        description:
          "Performed under local anaesthetic in 15–20 minutes — standalone or combined with 4D Phaco Alcon Unity™ robotic cataract surgery — with light routine resuming within Week 1.",
        mockup: {
          dialogTitle: "Schedule MIGS Assessment",
          dialogSubtitle: "Colaba, Mumbai · Gonioscopy & OCT evaluation",
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
        image:
          "https://cyreseye.com/wp-content/uploads/2026/02/Next-generation-robotic-cataract-surgery-in-Mumbai.png",
        alt: "Next-generation robotic cataract and glaucoma microsurgery in Mumbai",
        fit: "cover",
        bgClass: "bg-[#F2F5F5]",
      },
    ] as TestimonialItem[],
  },

  videos: {
    eyebrow: "WATCH & LEARN",
    heading: "Dr. Cyres K. Mehta On YouTube",
    subtitle:
      "Watch Dr. Cyres explain MIGS microstents, 4D Phaco robotic cataract surgery, SMILE vision correction, and real patient journeys.",
    channelUrl: "https://youtube.com/@drcyresmehtaeyecentre",
    channelCtaLabel: "Visit @drcyresmehtaeyecentre on YouTube",
    categories: [
      "MIGS & Glaucoma",
      "Cataract & 4D Phaco",
      "Patient Stories",
      "SMILE & LASIK",
      "Clinic & Awards",
      "All",
    ],
    items: [
      // MIGS & Glaucoma
      {
        videoId: "x-4oyNOC5HE",
        title: "Glaucoma Surgery Has Changed! What is MIGS? | Explained by Dr Cyres Mehta",
        category: "MIGS & Glaucoma",
      },
      {
        videoId: "OcRLCdMmHC0",
        title: "Glaucoma Treatment Explained: Eye Drops, Side Effects & When Surgery Is Needed",
        category: "MIGS & Glaucoma",
      },
      {
        videoId: "JY-kgtiw22k",
        title: "Glaucoma: The Silent Threat to Your Vision - What You Need to Know!",
        category: "MIGS & Glaucoma",
      },
      {
        videoId: "rME6-JPhLZc",
        title: "Discover how the tiny iStent can make a big difference in glaucoma management",
        category: "MIGS & Glaucoma",
      },
      {
        videoId: "86VU1KByQnU",
        title: "Tired of Glaucoma Eye Drops? Discover MIGS",
        category: "MIGS & Glaucoma",
      },
      {
        videoId: "q1xFHTWDiT4",
        title: "Tiny device. Big impact. (MIGS / iStent)",
        category: "MIGS & Glaucoma",
      },
      // Cataract & 4D Phaco
      {
        videoId: "Fci9Gkujocg",
        title: "Alcon’s Unity Platform with 4D Phaco Technology for Cataract Surgery",
        category: "Cataract & 4D Phaco",
      },
      {
        videoId: "LA7SKjWrZDM",
        title: "Mumbai’s First AI Unity 4D Laser Cataract Surgery System",
        category: "Cataract & 4D Phaco",
      },
      {
        videoId: "_RPv-YgZ8ho",
        title: "Best Cataract Surgery & Lens Options Explained for Clear Vision",
        category: "Cataract & 4D Phaco",
      },
      {
        videoId: "GZj1kjeQIvg",
        title: "Robotic Cataract Surgery in India | Choose Tech Over Price",
        category: "Cataract & 4D Phaco",
      },
      {
        videoId: "ESlYFazGrtA",
        title: "The Evolution and Latest Technology in Cataract Surgery",
        category: "Cataract & 4D Phaco",
      },
      {
        videoId: "X-I8G6q1cYI",
        title: "Revolutionary Digital Microscope with 3D Glasses — First in India",
        category: "Cataract & 4D Phaco",
      },
      // Patient Stories
      {
        videoId: "2y1aRPrXLZs",
        title: "Her Words, Her Journey — Patient Experience with Dr Cyres Mehta",
        category: "Patient Stories",
      },
      {
        videoId: "AM4HU8uDpF0",
        title: "Ranveer Allahbadia Shares His Laser Vision Correction Experience",
        category: "Patient Stories",
      },
      {
        videoId: "QeWV07HnVn0",
        title: "Dr Tanushree Pandya (Mrs India) Says Goodbye to Specs with SMILE",
        category: "Patient Stories",
      },
      {
        videoId: "1O19MtJ3zR4",
        title: "Dr. Cyres Mehta Selected SMILE for His Son Bezan’s Vision Correction",
        category: "Patient Stories",
      },
      {
        videoId: "DEVyTn2UNzs",
        title: "Real Patient Reviews | Dr. Cyres Mehta",
        category: "Patient Stories",
      },
      {
        videoId: "c38mBP-tZ-k",
        title: "Lens Replacement Review: Painless Surgery in Just 10 Minutes",
        category: "Patient Stories",
      },
      // SMILE & LASIK
      {
        videoId: "DHCbHV_EIik",
        title: "SMILE vs LASIK: The Preferred Choice of Commercial & Fighter Jet Pilots",
        category: "SMILE & LASIK",
      },
      {
        videoId: "EZB3ZvfNTsg",
        title: "Why SMILE Laser Surgery Is Better Than LASIK — Key Advantages",
        category: "SMILE & LASIK",
      },
      {
        videoId: "QRi0h8okXvA",
        title: "Understanding the ICL Procedure: A Vision Correction Breakthrough",
        category: "SMILE & LASIK",
      },
      // Clinic & Awards
      {
        videoId: "HN-pswPQ-WE",
        title: "The Story Behind CYRES: The Education of an Ophthalmologist",
        category: "Clinic & Awards",
      },
      {
        videoId: "EGVKpVhhUw4",
        title: "World-Class Eye Care with Dr Cyres Mehta | Latest Tech, Trusted Expertise",
        category: "Clinic & Awards",
      },
      {
        videoId: "0piCOntePng",
        title: "International Hero of Indian Ophthalmology Award",
        category: "Clinic & Awards",
      },
      {
        videoId: "-6C329_Jp_c",
        title: "17th Annual Surgical Camp | Mumbai Police Free Cataract Surgery",
        category: "Clinic & Awards",
      },
    ] as YouTubeVideoItem[],
  },

  faq: {
    eyebrow: "QUESTIONS",
    heading: "Questions We Are Asked Most",
    ctaCard: {
      heading: "Book a consultation",
      subtitle:
        "Gonioscopy and OCT imaging at our Colaba, Mumbai centre help Dr. Cyres decide whether MIGS is right for you.",
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
        heading: "Eye Centre",
        links: [
          { label: "MIGS Glaucoma Surgery", href: "/" },
          { label: "Book Consultation", href: "/visit-us" },
          { label: "Official Website", href: "https://cyreseye.com/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ],
      },
      {
        heading: "Contact Colaba",
        links: [
          { label: "Call +91 98198 50971", href: "tel:+919819850971" },
          { label: "022-22040711", href: "tel:+912222040711" },
          { label: "cyresmehta@yahoo.com", href: "mailto:cyresmehta@yahoo.com" },
          { label: "Patient FAQs", href: "/#faq" },
        ],
      },
    ] as FooterColumn[],
    trustLabel:
      "Consultant to Maharashtra Police since 2003 · 70+ free surgeries annually",
    trustBadges: [
      {
        name: "Mumbai Police Free Cataract & Glaucoma Initiative",
        image:
          "https://cyreseye.com/wp-content/uploads/2026/01/Mumbai_Police_logo.png",
        width: 50,
        height: 48,
      },
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
      "Dr. Cyres K. Mehta’s International Eye Centre — 202, Ramnimi Building, 2nd Floor, Mandlik Road, Opposite Colaba Police Station, Colaba, Mumbai – 400001. Medical information on this page is for patient education and is not a substitute for an examination or individualized medical advice. Trial averages do not predict an individual result; MIGS does not restore vision already lost and is not a cure for glaucoma.",
    copyrightPrefix:
      "© 2026 Dr. Cyres K. Mehta’s International Eye Centre. All rights reserved. ",
    creatorLabel: "cyreseye.com",
    creatorHref: "https://cyreseye.com/",
  },

  visitUs: {
    pageTitle:
      "Book a MIGS Consultation | Dr. Cyres K. Mehta’s International Eye Centre",
    hero: {
      heading: "Book Your MIGS Glaucoma Consultation",
      subtitle:
        "Call us on +91 98198 50971 or fill out the form to schedule your gonioscopy and OCT assessment in Colaba, Mumbai.",
      backgroundImage:
        "https://cyreseye.com/wp-content/uploads/2025/08/post-img1.jpg",
      backgroundAlt:
        "Dr. Cyres K. Mehta’s International Eye Centre clinical care",
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
          "4D Phaco Alcon Unity™ Robotic Cataract Surgery",
          "Glaucoma Management (SLT Nano / NPGS)",
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
        emergencyLabel: "24/7 Emergency & WhatsApp",
        emergencyPhone: "+91 98198 50971",
        emergencyHref: "tel:+919819850971",
        hoursLabel: "Working Hours (Mon–Sat)",
        hoursValue: "9:00 AM – 8:00 PM",
      },
    },
    location: {
      eyebrow: "COLABA, MUMBAI",
      heading: "Dr. Cyres K. Mehta’s International Eye Centre",
      image:
        "https://cyreseye.com/wp-content/uploads/2026/02/Dr.-Cyres-Mehtas-gold-medal-award.png",
      imageAlt:
        "Dr. Cyres K. Mehta’s International Eye Centre — Gold Medal Awardee",
      mapsLabel: "See on maps",
      mapsHref:
        "https://maps.google.com/?q=Dr.+Cyres+Mehta+International+Eye+Centre+Colaba+Mumbai",
      addressTitle: "Address",
      addressLines: [
        "202, Ramnimi Building, 2nd Floor, Mandlik Road,",
        "Opposite Colaba Police Station, Colaba, Mumbai – 400001",
      ],
      hoursTitle: "Hours & Direct Contact",
      hoursLines: [
        "Mon – Sat : 9:00 AM – 8:00 PM (Sun Closed · 24/7 Emergencies)",
        "+91 98198 50971 · +91 90764 35971 · 022-22040711 · cyresmehta@yahoo.com",
      ],
    },
  },
};
