import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./pages/Header/Header";
import GlobalGalaxy from "../components/GlobalGalaxy/GlobalGalaxy";
import ClickSpark from "../components/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "sohamdarak.dev",
  description: "Welcome to the portfolio of Soham Darak, a passionate Full-Stack Developer and UI/UX Enthusiast. Explore my projects, skills, and experience in web development, JavaScript, React, NextJS, and more. Discover how I combine creativity with technical expertise to build innovative solutions. Let's connect and create something amazing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-white`}
      >
        <GlobalGalaxy />
        <ClickSpark>
          <div className="relative z-10">
            <Header />
            <main className="pt-20 md:pt-24">{children}</main>
          </div>
        </ClickSpark>
      </body>
    </html>
  );
}
