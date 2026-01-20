import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
      <div className="text-2xl font-bold tracking-tight">Be+</div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link href="#" className="hover:text-black transition-colors">About Us</Link>
        <Link href="#" className="hover:text-black transition-colors">Services</Link>
        <Link href="#" className="hover:text-black transition-colors">Patient Resources</Link>
        <Link href="#" className="hover:text-black transition-colors">Contact Us</Link>
        <Link href="#" className="hover:text-black transition-colors">Careers</Link>
      </div>

      <button className="px-5 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors">
        Contact Us
      </button>
    </nav>
  );
}
