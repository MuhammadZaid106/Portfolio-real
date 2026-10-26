const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://zaidnaeem.vercel.app";
export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");
export const SITE_NAME = "Zaid Naeem — Full-Stack Developer";
export const SITE_TITLE = "Zaid Naeem | Full-Stack Developer for Startups";
export const SITE_DESCRIPTION =
  "Zaid Naeem is a full-stack developer building fast, scalable web products for funded startups. Specializing in Next.js, TypeScript, Node.js, and AI-integrated applications.";

export const PERSON_NAME = "Zaid Naeem";
export const PERSON_ALTERNATE_NAMES = [
  "Muhammad Zaid",
  "Muhammad Zaid Naeem",
  "Zaid Naeem Developer",
];

export const PERSON_EMAIL = "zaidnaeem106@gmail.com";
export const PERSON_PHONE = "+923294633734";

export const SOCIAL_PROFILES = [
  "https://github.com/MuhammadZaid106",
  "https://www.linkedin.com/in/zaidnaeemdev/",
  "https://instagram.com/zaid.devv",
];

export const INDEXABLE_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/work", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export function absoluteUrl(path = "/") {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
