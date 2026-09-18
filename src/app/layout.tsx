import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiva Karka — Full-Stack Developer",
  description:
    "Shiva Karka is a full-stack developer in Hyderabad building fast, scalable web apps with React, Next.js, TypeScript and Node.js. AWS Certified Cloud Practitioner.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shiva Karka — Full-Stack Developer",
    description:
      "I build fast, scalable web apps with React, Next.js & Node. AWS Certified Cloud Practitioner.",
    type: "website",
    url: "/",
    siteName: "Shiva Karka",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
