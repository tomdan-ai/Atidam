"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Wholesale", href: "/wholesale" },
    { label: "Partners", href: "/partners" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between py-3 px-6 md:px-8 max-w-[90%] md:max-w-5xl mx-auto rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg ring-1 ring-black/5 dark:ring-white/5"
      >
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-emerald-700 drop-shadow-sm">
          ATIDAM
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold tracking-wide text-gray-800 dark:text-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-green-600 dark:hover:text-green-400 transition-colors relative group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop: Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 dark:text-white p-1"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-2xl p-6 md:p-8"
          >
            <div className="flex flex-col gap-4 items-center text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors w-full py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
