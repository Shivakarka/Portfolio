import {
  Award,
  Briefcase,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Mail,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export const profile = {
  name: "Shiva Karka",
  role: "Full-Stack Developer",
  tagline: "I build fast, scalable web apps with React, Next.js & Node.",
  location: "Hyderabad, India",
  email: "shivakarka@gmail.com",
  github: "https://github.com/Shivakarka",
  linkedin: "https://www.linkedin.com/in/shivakarka",
  resume:
    "https://drive.google.com/file/d/1ftpJug8MFYijicA_Cd_D5XxqaOlPg8tl/view?usp=sharing",
  stats: [
    { value: "6+", label: "Years in Tech" },
    { value: "15+", label: "Projects Built" },
    { value: "10", label: "Certifications" },
  ],
};

export interface Project {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  code: string;
  image?: string;
  featured?: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    title: "DealDrop — Smart Price Tracker",
    description:
      "Track prices across Amazon, Zara, Walmart & more with AI-powered extraction, interactive price-history charts, automated daily checks and email alerts on price drops. Google OAuth, cron jobs, row-level security.",
    tech: ["Next.js 16", "TypeScript", "Supabase", "Firecrawl", "Resend", "Tailwind"],
    demo: "https://dealdrop2026.vercel.app/",
    code: "https://github.com/Shivakarka/dealdrop",
    image: "/projects/dealdrop.png",
    year: "2026",
    featured: true,
  },
  {
    title: "LinkedIn Clone",
    description:
      "Full-stack social network with JWT auth, profiles, experience & education sections, text/image posts, likes, comments, connection requests and real-time notifications. Image uploads via Cloudinary.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "React Query"],
    demo: "https://linkedinclone-frontend.vercel.app/",
    code: "https://github.com/Shivakarka/linkedin-clone",
    image: "/projects/linkedin-full.png",
    year: "2025",
  },
  {
    title: "Tomato — Food Delivery App",
    description:
      "MERN food-ordering app with Stripe payments, delivery-status tracking and an admin panel for products and orders. Fully responsive, typed end-to-end with TypeScript.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "Express"],
    demo: "https://tomato-food-del.vercel.app/",
    code: "https://github.com/Shivakarka/tomato_food_del",
    image: "/projects/tomato.png",
    year: "2025",
  },
  {
    title: "TMDB Movie Explorer",
    description:
      "Movie-database UI clone for browsing films & shows, viewing details, trailers and ratings. Cached data-fetching, routing and utility-first styling.",
    tech: ["React 18", "TypeScript", "React Query", "Zustand", "Tailwind"],
    demo: "https://tmdb-clone-sk.vercel.app/",
    code: "https://github.com/Shivakarka/tmdb",
    image: "/projects/tmdb.png",
    year: "2024",
  },
  {
    title: "GameHub",
    description:
      "Gaming discovery catalog with filtering by platform, genre and popularity. Built with React 18, TypeScript and a component UI kit with efficient query caching.",
    tech: ["React 18", "TypeScript", "Chakra UI", "React Query"],
    demo: "https://game-hub-shivakarka.vercel.app/",
    code: "https://github.com/Shivakarka/game-hub",
    image: "/projects/gamehub.png",
    year: "2024",
  },
  {
    title: "ProShop Ecommerce",
    description:
      "Full-featured online store with cart, checkout, product reviews, admin dashboard and order management. Redux state management over a MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux Toolkit"],
    demo: "https://proshop-yw1a.onrender.com/",
    code: "https://github.com/Shivakarka/proshop",
    image: "/projects/ProShop.png",
    year: "2023",
  },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
      "Zustand",
      "HTML5 & CSS3",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Stripe Payments",
      "Mongoose",
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      "MongoDB",
      "Supabase",
      "PostgreSQL",
      "AWS (CLF-C02)",
      "Vercel",
      "Cloudinary",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git & GitHub", "Postman", "Figma", "VS Code", "Agile", "Vercel CI/CD"],
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    company: "Aapastech Technology Experts",
    role: "Software Development Engineer",
    period: "Jan 2023 – Mar 2023 · Hyderabad",
    points: [
      "Built responsive frontend interfaces with React and Tailwind CSS",
      "Integrated REST APIs and improved page-load performance",
      "Collaborated in an agile team with code reviews and CI workflows",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Process Specialist",
    period: "Jun 2018 – May 2022 · Hyderabad",
    points: [
      "Promoted for consistent quality and process improvements",
      "Automated repetitive workflows, cutting manual effort",
      "Mentored new joiners and documented SOPs",
    ],
  },
  {
    company: "Intelenet Global Services",
    role: "Analyst",
    period: "Oct 2016 – May 2018 · Hyderabad",
    points: [
      "Handled client operations with high CSAT scores",
      "Built reports and dashboards for stakeholders",
    ],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: LucideIcon;
  featured?: boolean;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    date: "2026",
    icon: Award,
    featured: true,
    credentialUrl:
      "https://www.credly.com/badges/f0e230ef-e5b1-44bf-b377-1bee5fa948a1",
  },
  {
    title: "Front-End Web Developer Fellowship",
    issuer: "NextLeap",
    date: "Apr 2024",
    icon: GraduationCap,
    credentialUrl:
      "https://assets.nextleap.app/certificate/Cohort-058fc7f776fc241d0a909090ca1d6402fd3bd868.pdf",
  },
  {
    title: "Front End Developer Nanodegree",
    issuer: "Udacity",
    date: "Jun 2023",
    icon: GraduationCap,
    credentialUrl:
      "https://www.udacity.com/certificate/e/2c6721ac-c38c-11ed-8a7a-1f855b5ead44",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Oct 2021",
    icon: GraduationCap,
    credentialUrl:
      "https://www.freecodecamp.org/certification/shivakarka/responsive-web-design",
  },
  {
    title: "Google IT Support Professional",
    issuer: "Google",
    date: "Jan 2021",
    icon: Cloud,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/L7DUC2HPKTB6",
  },
  {
    title: "B.Tech — Electrical Engineering",
    issuer: "Malla Reddy Engineering College",
    date: "2012 – 2016",
    icon: Briefcase,
  },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];
