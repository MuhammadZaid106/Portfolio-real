import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import BookingWidget from "@/components/BookingWidget";
import JsonLd from "@/components/seo/JsonLd";
import {
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${PERSON_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  keywords: [
    "Zaid Naeem",
    "Muhammad Zaid Naeem",
    "Zaid Naeem developer",
    "Zaid Naeem full-stack developer",
    "full-stack developer",
    "Next.js developer",
    "TypeScript developer",
    "freelance web developer",
    "MERN stack developer",
    "AI integration developer",
    "React developer for startups",
  ],

  authors: [{ name: PERSON_NAME, url: SITE_URL }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,

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
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "qDTzidfKBTC9ub-7Z98SrLP6X6bubaVNR-fziHXVOPk",
  },

  category: "technology",
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
        <JsonLd />
        <Header />
        {children}
        <BookingWidget bookingUrl="https://cal.com/zaid-naeem/discovery-call" />
      </body>
    </html>
  );
}
