// components/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 dark:bg-black/80 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-lg font-bold">🌱 Nexgen Nextopia</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="ml-4">Get Started</Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="mt-2 w-full">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
