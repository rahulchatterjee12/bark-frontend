"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Business, Work } from "@mui/icons-material";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "For Professionals", href: "/professional" },
    { name: "Post a Job", href: "/auth/signup" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600 flex items-center gap-1"
        >
          <Work fontSize="medium" />
          Bark
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-gray-600 hover:text-indigo-600 transition font-medium ${
                pathname === item.href ? "text-indigo-600" : ""
              }`}
            >
              {pathname === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-indigo-600"
                />
              )}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
