"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-8 px-16 max-w-[1600px] mx-auto w-full mix-blend-difference"
    >
      <div className="text-3xl font-black tracking-tighter text-white">Be+</div>

      <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-white/80">
        <Link href="#" className="hover:text-white transition-colors relative group">
          About Us
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
        </Link>
        <Link href="#" className="hover:text-white transition-colors relative group">
          Services
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
        </Link>
        <Link href="#" className="hover:text-white transition-colors relative group">
          Patient Resources
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
        </Link>
        <Link href="#" className="hover:text-white transition-colors relative group">
          Contact Us
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
        </Link>
        <Link href="#" className="hover:text-white transition-colors relative group">
          Careers
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
        </Link>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-2xl"
      >
        Contact Us
      </motion.button>
    </motion.nav>
  );
}
