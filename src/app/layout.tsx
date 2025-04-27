import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundVideo from "@/components/BackgroundVideo";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Justin Kalski - Portfolio",
  description: "Full-Stack Developer & Computer Science Student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-white min-h-screen overflow-x-hidden`}>
        <BackgroundVideo />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
