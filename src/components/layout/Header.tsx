"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isHome = pathname === "/";
  const showBg = isScrolled || !isHome || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBg ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-5 flex items-center justify-between h-[70px]">
        <Link href="/" className="text-xl font-bold tracking-wider">
          <span className={showBg ? "text-gray-900" : "text-white"}>
            JAEIL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors pb-1 ${
                pathname === item.href
                  ? "text-primary-500 border-b-2 border-primary-500"
                  : showBg
                  ? "text-gray-700 hover:text-primary-500"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴"
        >
          {isMobileMenuOpen ? (
            <X className="text-gray-900" size={24} />
          ) : (
            <Menu className={showBg ? "text-gray-900" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <nav className="md:hidden fixed inset-0 top-[70px] bg-white z-40 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-8 py-5 text-lg font-medium border-b border-gray-100 ${
                pathname === item.href
                  ? "text-primary-500 bg-primary-50"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
