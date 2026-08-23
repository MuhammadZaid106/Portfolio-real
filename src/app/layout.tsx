import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const SITE_URL = "https://zaidn.vercel.app/";
const SITE_NAME = "Zaid Naeem — Full-Stack Developer";
const SITE_TITLE = "Zaid Naeem | Full-Stack Developer for Startups";
const SITE_DESCRIPTION =
  "Full-stack developer building fast, scalable web products for funded startups. Specializing in Next.js, TypeScript, Node.js, and AI-integrated applications.";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Zaid Naeem",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "full-stack developer",
    "Next.js developer",
    "TypeScript developer",
    "freelance web developer",
    "MERN stack developer",
    "AI integration developer",
    "React developer for startups",
  ],

  authors: [{ name: "Zaid Naeem", url: SITE_URL }],
  creator: "Zaid Naeem",

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: SITE_URL,
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
