export const PROJECTS = [
  {
    id: 1,
    title: "Realtime Chat App",
    description:
      "Real-time chat application built with React, Node.js and Socket.IO, featuring user authentication and file sharing.",
    image: "/projects/realtime.png",
    tags: ["React", "Tailwind CSS", "Node.js", "Socket.IO", "Express"],
    demoUrl: "https://realtimechat-steel-three.vercel.app",
    githubUrl: "https://github.com/Elitecrafttech/realtimechat.git",
    featured: true,
    category: "Full-stack · Realtime",
    accent: "#FACA22",
  },
  {
    id: 2,
    title: "E-commerce with AI Chatbot",
    description:
      "Full-featured e-commerce platform with user authentication, an admin panel and a custom chatbot built with NLP.js.",
    image: "/projects/system.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "NLP.js"],
    githubUrl: "https://github.com/Elitecrafttech/ecomercewithchat",
    featured: true,
    category: "Full-stack · AI",
    access: "Request access",
    accent: "#e8c14a",
  },
  {
    id: 3,
    title: "Brahms Interior",
    description:
      "A Next.js site for Brahms Interior, presenting furniture and interior design services with a clear business layout, service highlights and direct customer contact.",
    image: "/projects/brahms.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demoUrl: "https://brahmsinteriornext.vercel.app",
    githubUrl: "https://github.com/Elitecrafttech/brahmsinteriornext.git",
    featured: true,
    category: "Business website",
    accent: "#d4b43c",
  },
  {
    id: 4,
    title: "AI Voice Assistant",
    description:
      "Voice-activated AI assistant web app built with the MERN stack, featuring natural speech interaction and real-time responses.",
    image: "/projects/elitecraft.png",
    tags: ["React", "Node.js", "MongoDB", "Gemini AI", "Web Speech API"],
    githubUrl: "https://github.com/Elitecrafttech/novavoice",
    featured: true,
    category: "AI · MERN",
    access: "Request access",
    accent: "#f0d36a",
  },
  {
    id: 5,
    title: "Wrap VPN",
    description:
      "A secure, cross-platform VPN app built with Flutter, featuring OVPN support, Supabase authentication and a custom Android VPN engine.",
    image: "/projects/vpn.webp",
    tags: ["Flutter", "Dart", "Supabase", "OVPN", "Android", "iOS"],
    githubUrl: "https://github.com/Elitecrafttech/vpn",
    featured: true,
    category: "Cross-platform · Flutter",
    access: "Request access",
    accent: "#c9a31a",
  },
  {
    id: 6,
    title: "URL Shortening App",
    description:
      "A testing project built with HTML, CSS and JavaScript that shortens long URLs by integrating with the ShortURL-ovln API.",
    image: "/projects/shorturl.png",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    demoUrl: "https://url-shortening-xi-seven.vercel.app",
    githubUrl: "https://github.com/Elitecrafttech/URL-shortening",
    featured: false,
    category: "Frontend · API",
    accent: "#e2c75c",
  },
  {
    id: 7,
    title: "Online-Identity",
    description:
      "A full-stack MERN application for building portfolios, with user authentication, data caching, dynamic portfolio creation and real-time updates.",
    image: "/projects/portfolio_creator.webp",
    tags: ["MERN", "Redis", "GitHub Actions", "Nginx", "DigitalOcean"],
    demoUrl: "https://online-identity.tech",
    githubUrl: "https://github.com/Elitecrafttech/Online-Identity",
    featured: true,
    category: "Full-stack · DevOps",
    accent: "#f5d76e",
  },
  {
    id: 8,
    title: "HealthPal",
    description:
      "A testing project built with HTML, CSS and JavaScript, featuring a responsive landing page and a booking form that submits through an external endpoint.",
    image: "/projects/pal.png",
    tags: ["HTML", "CSS", "JavaScript", "Forms"],
    demoUrl: "https://health-pal.vercel.app",
    githubUrl: "https://github.com/Elitecrafttech/HealthPal",
    featured: false,
    category: "Frontend",
    accent: "#ddb83f",
  },
];

export const PROJECT_COUNT = PROJECTS.length;

export function wrapProjectIndex(index) {
  const count = PROJECTS.length;
  return ((index % count) + count) % count;
}

export function getStoredProjectIndex() {
  if (typeof window === "undefined") return 0;
  const raw = window.sessionStorage.getItem("litcraftiq-project-index");
  const parsed = Number.parseInt(raw, 10);
  if (Number.isNaN(parsed)) return 0;
  return wrapProjectIndex(parsed);
}

export function storeProjectIndex(index) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(
    "litcraftiq-project-index",
    String(wrapProjectIndex(index))
  );
}
