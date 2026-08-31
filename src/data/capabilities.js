import globe from "../img/globe.gif";
import internet from "../img/internet.gif";
import py from "../img/py.gif";
import mobile from "../img/mobile.gif";
import backend from "../img/backend.gif";
import bitcoin from "../img/bitcoin.gif";

export const PRINCIPLES = [
  "Architecture before complexity",
  "Clear and intentional data structures",
  "Reusable design systems",
  "Security throughout the product lifecycle",
  "Verification before release",
  "Performance measured in real conditions",
];

export const CAPABILITIES = [
  {
    id: "architecture",
    title: "Product and System Architecture",
    description:
      "I translate product requirements into maintainable application structures, service boundaries and implementation plans.",
    tech: ["React", "Next.js", "Node.js"],
    icon: globe,
  },
  {
    id: "data",
    title: "Data Modelling and API Design",
    description:
      "I design clear data relationships and reliable API contracts that support current features and future growth.",
    tech: ["MongoDB", "Supabase", "Express", "Firebase"],
    icon: backend,
  },
  {
    id: "design-systems",
    title: "Design Systems and Interface Engineering",
    description:
      "I create reusable UI foundations that keep products accessible, responsive and visually consistent.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    icon: globe,
  },
  {
    id: "fullstack",
    title: "Full-Stack Application Development",
    description:
      "I connect modern interfaces, application logic, backend services and databases into complete working products.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: internet,
  },
  {
    id: "security",
    title: "Authentication and Application Security",
    description:
      "I implement secure identity flows, authorization boundaries, validation and defensive application practices.",
    tech: ["Firebase", "Supabase", "Node.js"],
    icon: bitcoin,
  },
  {
    id: "integration",
    title: "Integration and Workflow Engineering",
    description:
      "I connect external services, APIs, real-time features and automated business workflows.",
    tech: ["Socket.IO", "Python", "Express"],
    icon: py,
  },
  {
    id: "qa",
    title: "Testing, Verification and Quality Assurance",
    description:
      "I verify important user journeys, system states, error handling and release readiness.",
    tech: ["JavaScript", "TypeScript", "GitHub Actions"],
    icon: backend,
  },
  {
    id: "performance",
    title: "Performance and Deployment Readiness",
    description:
      "I improve loading, rendering, runtime reliability and production delivery workflows.",
    tech: ["Docker", "GitHub Actions", "Nginx"],
    icon: mobile,
  },
];

export const TECHNOLOGY_GROUPS = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend and Data",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Socket.IO",
      "Python",
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["React Native", "Flutter", "Dart"],
  },
  {
    id: "infra",
    label: "Infrastructure and Tools",
    items: ["Git", "GitHub", "Docker", "GitHub Actions", "Nginx", "DigitalOcean"],
  },
];
