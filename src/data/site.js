export const BRAND = {
  name: "LitcraftIQ",
  legalName: "LitcraftIQ",
  eyebrow: "LITCRAFTIQ",
  title: "Full-Stack Product Engineer",
  specialization: "Architecture · Data Systems · Design Systems · Verification · Security",
  description:
    "I design and engineer secure digital products—from system architecture and data modelling to scalable interfaces, integrations and production verification.",
  supporting:
    "Built for clarity, performance and long-term reliability.",
  resumeHref: "/MyResumeCraftTech.pdf",
  resumeFilename: "LitcraftIQ-Resume.pdf",
  githubOrg: "https://github.com/Elitecrafttech",
};

export const CONTACT = {
  email: "elitecrafttech@gmail.com",
  phone: "+234 704 171 7579",
  phoneHref: "tel:+2347041717579",
  whatsapp: "https://wa.me/2347041717579",
  telegram: "https://t.me/Elitecraft_tech",
  telegramHandle: "@Elitecraft_tech",
  availability: "Open to product engineering work",
};

export const SOCIAL_LINKS = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Elitecrafttech",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/elite-tech-427103231/",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/elitecrafttech/",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/elitecrafttech",
  },
];

export const NAV_ITEMS = [
  { id: "home", path: "/", label: "Home" },
  { id: "about", path: "/about", label: "About" },
  { id: "projects", path: "/projects", label: "Projects" },
  { id: "services", path: "/services", label: "Services & Technologies", shortLabel: "Services" },
  { id: "contact", path: "/contact", label: "Contact" },
];

export function getNavIndex(pathname) {
  const index = NAV_ITEMS.findIndex((item) =>
    item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)
  );
  return index === -1 ? 0 : index;
}

export const THEME_STORAGE_KEY = "litcraftiq-theme";
export const PROJECT_INDEX_KEY = "litcraftiq-project-index";
