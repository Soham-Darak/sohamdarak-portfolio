"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaCode, FaHome, FaBriefcase, FaGraduationCap, FaLaptopCode, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { id: "home", icon: FaHome, text: "Home", href: "/" },
      { id: "skills", icon: FaCode, text: "Skills", href: "/skills" },
      { id: "experience", icon: FaBriefcase, text: "Experience", href: "/experience" },
      { id: "education", icon: FaGraduationCap, text: "Education", href: "/education" },
      { id: "projects", icon: FaLaptopCode, text: "Projects", href: "/projects" },
      { id: "contact", icon: FaEnvelope, text: "Contact", href: "/contact" },
    ],
    []
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent pointer-events-none">
      <div className="md:fixed md:top-5 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto px-2 sm:px-4 pointer-events-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_40px_rgba(59,130,246,0.35)] mt-4 md:mt-0">
          <nav className="bg-[#0b1630]/90 backdrop-blur-xl md:rounded-full px-4 md:px-6 py-2.5 border border-white/10 shadow-[0_12px_32px_rgba(2,6,23,0.7)]">
            <div className="flex justify-between items-center md:hidden px-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
              >
                Soham Darak
              </Link>
              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="text-white/90 p-2 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                <FaBars />
              </button>
            </div>

            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, href }) => (
                  <Link
                    key={id}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
                      ${
                        pathname === href
                          ? "bg-white/15 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                          : "text-slate-300"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base transition-transform duration-300 ${
                        pathname === href ? "scale-110" : ""
                      }`}
                    />
                    <span className="inline tracking-wide">{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
