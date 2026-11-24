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
}

export interface TestimonialItem {
  stat: string;
  statLabel: string;
  quote: string;
  author: string;
  department: string;
  image: string;
  alt: string;
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
    name: "ClinicHub",
    logoSquare:
      "https://framerusercontent.com/images/oBwn9sqZ99XUyekqmWbeTyTZgA.png?scale-down-to=512&width=600&height=600",
    crossMark:
      "https://framerusercontent.com/images/HM5PHGoa60qPQJbIT4qAtJbLfY0.png?width=118&height=118",
    title: "ClinicHub — Your Health, in Hands of Leading Medical Experts",
    description:
      "Your entire family's healthcare in one place. Award winning specialists, easy online booking and care that follows.",
  },

  nav: {
    links: [
      { label: "Expertise", href: "/#expertise" },
      { label: "Why us", href: "/#why-us" },
      { label: "Doctors", href: "/#doctors" },
      { label: "Reviews", href: "/#reviews" },
    ] as NavLink[],
    cta: {
      label: "Book a Visit",
      href: "/visit-us",
    },
  },

  hero: {
    ratingText: "4.9 Across 1,597+ Reviews",
    starCount: 5,
    heading: "Your Health, in Hands of Leading Medical Experts",
    cta: {
      label: "Book an visit",
      href: "/visit-us",
    },
    backgroundImage:
      "https://framerusercontent.com/images/9couhjelan4XsaHiDc5LY5DHUc.webp?scale-down-to=2048&width=5504&height=3072",
    backgroundAlt: "Modern ClinicHub clinic lounge with clinicians and patients",
    videoPreview: {
      thumbnail:
        "https://framerusercontent.com/images/peDRCKM2ULxKcFgv28pKHFKFpgc.png?scale-down-to=512&width=5504&height=3072",
      alt: "Doctor consulting with patient in ClinicHub room",
      caption:
        "Your entire family's healthcare in one place. Award winning specialists, easy online booking and care that follows.",
    },
  },

  metrics: [
    {
      value: "15+",
      label: "Years of trusted\nfamily care",
    },
    {
      value: "10K",
      label: "Patients treated\nevery year",
    },
    {
      value: "99%",
      label: "Overall patient\nsatisfaction rate",
    },
  ] as MetricItem[],

  about: {
    editorialStatement:
      "Healthcare shouldn't mean long waits and scattered specialists. So we brought top doctors together under one roof, so your family gets the care they deserve without the runaround.",
    heading: "Meet ClinicHub, Care That Feels Like Family",
    orbitImages: [
      {
        src: "https://framerusercontent.com/images/Rh9jgSNvkFt2UboTuF2fTrs8gI.webp?width=850&height=1000",
        alt: "Smiling mother and child piggyback outdoors",
      },
      {
        src: "https://framerusercontent.com/images/6Z0rKqwpS2TiTO3vsBMNddnda14.jpg?width=1193&height=1207",
        alt: "Senior couple hugging warmly",
      },
      {
        src: "https://framerusercontent.com/images/ofe6wOh38RXYHQbNMmwCWyZpJqk.jpg?width=1088&height=1368",
        alt: "Two young kids smiling together",
      },
      {
        src: "https://framerusercontent.com/images/kxEwJwnW5g6daa5b5ekLm842SM.jpg?width=600&height=800",
        alt: "Pregnant woman relaxing in sunny field",
      },
      {
        src: "https://framerusercontent.com/images/Vb8Kc37nuOZplemtMXMsooO3Ps.jpg?width=736&height=920",
        alt: "Parents holding toddler",
      },
      {
        src: "https://framerusercontent.com/images/7lNYd2rQbORrTGJCszMScJqIbGo.jpg?width=562&height=567",
        alt: "Smiling older man with glasses",
      },
    ] as OrbitImage[],
  },

  expertise: {
    eyebrow: "OUR EXPERTISE",
    heading: "Care For Every Need",
    centerCard: {
      heading: "Your health, in the hands of leading medical experts",
      ctaLabel: "Book an appointment",
      ctaHref: "/visit-us",
    },
    specialties: [
      {
        title: "Dental",
        image:
          "https://framerusercontent.com/images/fzJEkRRZLOBK5G6IX1gNOgVMM.webp?scale-down-to=512&width=4096&height=4096",
        alt: "Dentist examining male patient",
        column: "left",
        size: "square",
      },
      {
        title: "Orthopedic",
        image:
          "https://framerusercontent.com/images/xofM4FXjNsAhbel5aAOnKsI5YQ.webp?scale-down-to=512&width=4096&height=4096",
        alt: "Orthopedic specialist assessing shoulder",
        column: "left",
        size: "square",
      },
      {
        title: "General Medicine",
        image:
          "https://framerusercontent.com/images/VpnNnqYD7pP5JnRwjrJ2zbZk2U.webp?scale-down-to=512&width=5504&height=3072",
        alt: "Female doctor consulting male patient",
        column: "left",
        size: "wide",
      },
      {
        title: "Dermatology",
        image:
          "https://framerusercontent.com/images/TaH1z9npw2fIqyzXVUtHEQHqwCg.webp?scale-down-to=512&width=4096&height=4096",
        alt: "Dermatologist examining woman's face",
        column: "right",
        size: "square",
      },
      {
        title: "Gynecology",
        image:
          "https://framerusercontent.com/images/m4KURX6Rwp3zrlunC62tjF8ovYw.webp?scale-down-to=512&width=4096&height=4096",
        alt: "Doctor checking expecting mother",
        column: "right",
        size: "square",
      },
      {
        title: "Pediatric Care",
        image:
          "https://framerusercontent.com/images/dnZb33DmmRRvt25AkFHxFEtUfmE.webp?scale-down-to=512&width=5504&height=3072",
        alt: "Pediatrician checking toddler's ear with father",
        column: "right",
        size: "wide",
      },
    ] as SpecialtyItem[],
  },

  howItWorks: {
    eyebrow: "HOW IT WORKS",
    heading: "Getting Started With ClinicHub Is Super Easy",
    steps: [
      {
        step: "Step 1",
        title: "Book Online",
        description:
          "Choose your specialist from our website and pick a time that works.",
        illustration:
          "https://framerusercontent.com/images/Bjwzn8ds2ahRmHbBNEDpahWqPY.png?scale-down-to=512&width=1200&height=1200",
        alt: "Calendar and cursor line art illustration",
      },
      {
        step: "Step 2",
        title: "Visit For Diagnosis",
        description:
          "Check in and get seen by your doctor to understand what's going on.",
        illustration:
          "https://framerusercontent.com/images/4VzK1YnrygKcUycRt2ixVfrpp7k.png?scale-down-to=512&width=1200&height=1200",
        alt: "Patient and diagnostic magnifying glass line art illustration",
      },
      {
        step: "Step 3",
        title: "Ongoing Care",
        description:
          "We stay with you beyond the treatment and follow you up with aftercare.",
        illustration:
          "https://framerusercontent.com/images/A8s7Qtmg128vQG2csKMmD6oLNc.png?scale-down-to=512&width=1200&height=1200",
        alt: "Hands cupping heart with medical cross line art illustration",
      },
    ] as HowItWorksStep[],
  },

  whyClinicHub: {
    eyebrow: "WHY CLINICHUB",
    heading: "Everything Your Family Needs, One Clinic Away",
    bannerImage:
      "https://framerusercontent.com/images/NyHAAOvVVy1zwhT2jhcsCaheuI.webp?scale-down-to=2048&width=6336&height=2688",
    bannerAlt: "Mother holding child against soft sky",
    cards: {
      awardDoctors: {
        title: "Award Winning Doctors",
        description:
          "Our doctors are recognized leaders in their fields and rated among the best in the region.",
        featuredDoctor: {
          name: "Jamie Morley",
          role: "Top Rated Cardiologist",
          avatar:
            "https://framerusercontent.com/images/j5kG5NmbDRZo3vXZBX1b7oZRgic.webp?scale-down-to=512&width=1104&height=949",
        },
      },
      easyBooking: {
        title: "Easy Online Booking",
        description:
          "No phone calls or hold music. Pick your doctor, choose a time, and confirm your appointment from our website.",
        mockup: {
          dialogTitle: "Schedule Appointment",
          dialogSubtitle: "Select your preferred date & time",
          dateValue: "Today",
          timeValue: "3:00 AM",
          confirmLabel: "Schedule Booking",
          cancelLabel: "Cancel",
          calendarMonth: "April 2026",
          selectedDay: 12,
        },
      },
      insurance: {
        title: "Insurance Coverage",
        description:
          "We work with all major insurance providers so you can focus on getting better, not figuring out billing.",
        notification: {
          title: "Coverage Confirmed",
          time: "Just now",
          message:
            "Your insurance with Star Health is accepted, no paperwork needed…",
        },
      },
    },
  },

  doctors: {
    eyebrow: "OUR TEAM",
    heading: "The Doctors Behind Your Care",
    list: [
      {
        name: "Dr. James Hard",
        specialty: "General care",
        image:
          "https://framerusercontent.com/images/qzYcI8aegtUFr7W9xFiYDmexQ.webp?scale-down-to=1024&width=3584&height=4800",
      },
      {
        name: "Dr. Rekha Verma",
        specialty: "Pediatrician",
        image:
          "https://framerusercontent.com/images/x1M0jXgcq6DfqsX6Mgl3ApHtp94.webp?scale-down-to=1024&width=3584&height=4800",
      },
      {
        name: "Dr. Mateo Bara",
        specialty: "Orthpedic",
        image:
          "https://framerusercontent.com/images/5fvHtP5fkhRSpRfklvhzz9ZvBtw.webp?scale-down-to=1024&width=3584&height=4800",
      },
      {
        name: "Dr. Emma Thomas",
        specialty: "Orthodontist",
        image:
          "https://framerusercontent.com/images/cHNCzlShgn6eFCEPlpB25nhPoi8.webp?scale-down-to=1024&width=3584&height=4800",
      },
      {
        name: "Dr. David Matt",
        specialty: "Pediatrician",
        image:
          "https://framerusercontent.com/images/BeJY8k7K93OAeh6rH3XAADJA1gw.webp?scale-down-to=1024&width=3584&height=4800",
      },
    ] as DoctorProfile[],
  },

  testimonials: {
    eyebrow: "TESTIMONIALS",
    heading: "Real Patient Stories",
    items: [
      {
        stat: "97%",
        statLabel: "Treatmeant Satisfaction",
        quote:
          "“After weeks of worrying about our son’s health, we finally felt reassured. The doctor listened carefully, explained everything clearly, and the recovery was smoother than we expected.”",
        author: "Daniel Pit",
        department: "Pediatrics",
        image:
          "https://framerusercontent.com/images/xO3NkRn0CB9TAUohuaB0HAj7e8.webp?scale-down-to=512&width=5504&height=3072",
        alt: "Father lifting toddler with smiling mother against blue sky",
      },
      {
        stat: "89%",
        statLabel: "Faster Recovery",
        quote:
          "“The online booking and instant confirmation saved so much time. I appreciated how organized everything felt, and the follow-up care was excellent.”",
        author: "Lisa Carter",
        department: "Dermatology",
        image:
          "https://framerusercontent.com/images/NdDNXmcjZE8htauBcZMigIa0DQ.webp?scale-down-to=512&width=5504&height=3072",
        alt: "Woman smiling in warm sunlight",
      },
      {
        stat: "97%",
        statLabel: "Smile Restoration Satisfaction",
        quote:
          "I avoided dental visits for years because of anxiety, but the team made me feel comfortable from the first appointment. The treatment was smooth, painless, and my confidence is finally back.",
        author: "John Wilson",
        department: "Dental Care",
        image:
          "https://framerusercontent.com/images/rWZWPaaN4IHjZchp7BCsL6lhsYE.webp?scale-down-to=512&width=5504&height=3072",
        alt: "Smiling man outdoors",
      },
    ] as TestimonialItem[],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    ctaCard: {
      heading: "Book an appointment",
      subtitle:
        "Time to get the care you need simple, quick, and stress-free.",
      buttonLabel: "Book a Visit",
      buttonHref: "/visit-us",
    },
    items: [
      {
        question: "Do you accept walk-ins?",
        answer:
          "Yes, we do accept walk-ins based on availability. For a quicker experience, we recommend booking your visit in advance.",
      },
      {
        question: "Can I book for a family member?",
        answer:
          "Absolutely. You can book appointments for your child, partner, or any family member.",
      },
      {
        question: "Do you offer same-day appointments?",
        answer:
          "Yes, same-day appointments are available. We’ll do our best to see you as quickly as possible.",
      },
      {
        question: "What insurance do you accept?",
        answer:
          "We accept most major insurance providers. If you’re unsure, feel free to contact us and we’ll help you check.",
      },
      {
        question: "How long does a consultation take?",
        answer:
          "Most consultations take around 15–30 minutes, depending on your concern. We take the time needed to make sure you’re fully cared for.",
      },
    ] as FaqItem[],
  },

  footer: {
    ctaHeading: "Get The Care You Need Without The Wait",
    ctaButtonLabel: "Book a visit",
    ctaButtonHref: "/visit-us",
    columns: [
      {
        heading: "Section",
        links: [
          { label: "Expertise", href: "/#expertise" },
          { label: "How it works", href: "/#how-it-works" },
          { label: "Our Doctors", href: "/#doctors" },
          { label: "Reviews", href: "/#reviews" },
        ],
      },
      {
        heading: "Pages",
        links: [
          { label: "Homepage", href: "/" },
          { label: "Visit us", href: "/visit-us" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Book Appointment", href: "/visit-us" },
          { label: "Why ClinicHub?", href: "/#why-us" },
          { label: "How It Works", href: "/#how-it-works" },
        ],
      },
    ] as FooterColumn[],
    trustLabel: "Trusted by patients and backed by standards",
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
      "ClinicHub is a primary care clinic providing general health services, preventive care, and family medicine. All medical services are delivered by licensed healthcare professionals in accordance with applicable regulations.",
    copyrightPrefix: "© 2026 ClinicHub. All rights reserved. ",
    creatorLabel: "Created by Adheeb.",
    creatorHref: "https://x.com/adheebhameed",
  },

  visitUs: {
    eyebrow: "BOOK A VISIT",
    heading: "Schedule Your Appointment With ClinicHub",
    subtitle:
      "Choose your specialist, pick a convenient date and time, and receive instant confirmation.",
    departments: [
      "General Medicine",
      "Dental",
      "Orthopedic",
      "Dermatology",
      "Gynecology",
      "Pediatric Care",
    ],
    timeSlots: [
      "9:00 AM",
      "10:30 AM",
      "12:00 PM",
      "2:00 PM",
      "3:30 PM",
      "5:00 PM",
    ],
  },
};
