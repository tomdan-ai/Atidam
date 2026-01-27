"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 md:py-6 md:px-10 lg:py-8 lg:px-16 max-w-[1600px] mx-auto w-full mix-blend-difference"
      >
        <div className="text-2xl md:text-3xl font-black tracking-tighter text-white">Rx+</div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-xs font-bold uppercase tracking-widest text-white/80">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {/* Desktop CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2.5 lg:px-8 lg:py-3 rounded-full bg-white text-black text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-2xl"
        >
          Contact Us
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gray-950 pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-green-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full py-4 rounded-full bg-green-400 text-green-950 font-bold text-lg"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
