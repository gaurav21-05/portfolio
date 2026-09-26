import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurav Rawat | Full-Stack AI Engineer",
  description:
    "Full-Stack AI Engineer. I turn AI ideas into production-ready products across intelligent applications, agentic systems, automation and modern full-stack infrastructure.",
  keywords: [
    "Gaurav Rawat",
    "Full-Stack AI Engineer",
    "Agentic AI",
    "LLM Orchestration",
    "AI Products",
    "Python",
    "FastAPI",
    "Next.js",
    "Docker",
    "AWS",
  ],
  authors: [{ name: "Gaurav Rawat" }],
  creator: "Gaurav Rawat",
  metadataBase: new URL("https://gauravrawat.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gauravrawat.dev",
    title: "Gaurav Rawat — Full-Stack AI Engineer",
    description:
      "I turn AI ideas into production-ready products. Specialized in Agentic AI, high-throughput AI pipelines, and full-stack architecture.",
    siteName: "Gaurav Rawat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Rawat | Full-Stack AI Engineer",
    description:
      "I turn AI ideas into production-ready products across intelligent applications, agentic systems, and cloud infrastructure.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#08090D] text-[#F5F7FB] font-sans antialiased selection:bg-[#6D7CFF]/30 selection:text-[#F5F7FB] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
