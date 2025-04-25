import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // Haqiqiy domeningiz bilan almashtiring
  alternates: {
    canonical: "https://yourdomain.com", //Haqiqiy domeningiz bilan almashtiring
  },
  title: "Amirxon - Frontend Developer in Web3, AI, and Finance",
  description:
    "Amirxon is a Frontend Developer specializing in Web3, AI interfaces and financial applications.",
  keywords:
    "Amirxon, Frontend Developer, Web3 Developer, AI Interfaces, JavaScript, React, Vue.js, TypeScript, DeFi, Decentralized Finance, Vela Exchange, Swoop Exchange, Web3.js, Ethers.js, Smart Contract Integration, UI/UX Development, Financial Technology",
  openGraph: {
    locale: "en_US",
    siteName: "Amirxon",
    type: "website",
    title: "Amirxon - Frontend Developer",
    description:
      "Specializing in Web3, AI and financial interfaces with focus on intuitive user experiences",
    url: "https://yourdomain.com", // Haqiqiy domeningiz bilan almashtiring
    images: [
      {
        url: "./og-image.jpg", // Haqiqiy OG tasvir yo'li bilan almashtiring
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirxon - Frontend & Web3 Developer",
    description: "Building intuitive interfaces for Web3 and AI applications",
    // Agar sizda mavjud bo'lsa, twitter:creator-ni o'z qo'lingiz bilan qo'shishingiz mumki
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}