import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VideoBackground from "@/components/VideoBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Kalski - Portfolio",
  description: "Full-Stack Developer & Computer Science Student",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-white min-h-screen overflow-x-hidden relative`}>
        <VideoBackground />
        
        {/* Main content */}
        <div className="relative z-10 min-h-screen w-full max-w-[100vw] overflow-x-hidden">
          <main className="mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
