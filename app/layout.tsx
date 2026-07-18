import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crea8.AI — Zero to Pro AI Creator",
  description:
    "Crea8.AI teaches you the exact AI workflows to write, design, and film high-performing content faster than ever, without losing your voice or quality.",
  keywords: "AI Content Creation, AI Writing, Midjourney, Video Generation, Prompt Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-brand-dark text-brand-text-primary font-sans flex flex-col selection:bg-brand-blue/30 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
