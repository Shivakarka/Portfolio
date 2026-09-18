import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiva Karka — Full-Stack Developer & Cloud Engineer",
  description:
    "Shiva Karka is a full-stack developer in Hyderabad building fast, scalable web apps with React, Next.js, TypeScript and Node.js. AWS Certified Cloud Practitioner. 6+ years in tech.",
  metadataBase: new URL("https://www.shivakarka.me"),
  openGraph: {
    title: "Shiva Karka — Full-Stack Developer & Cloud Engineer",
    description:
      "I build fast, scalable web apps with React, Next.js & Node. AWS Certified Cloud Practitioner. 6+ years in tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
