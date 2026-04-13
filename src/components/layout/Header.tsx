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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isHome = pathname === "/";
  const showBg = isScrolled || !isHome || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBg
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100 py-4"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 group-hover:rotate-6 transition-transform duration-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <span className={`font-bold text-2xl tracking-tight transition-colors ${showBg ? "text-slate-900" : "text-white"}`}>
            JAEIL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === item.href
                  ? "text-primary-600"
                  : showBg
                  ? "text-slate-600 hover:text-primary-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-slate-900 hover:bg-primary-600 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            문의하기
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴"
        >
          {isMobileMenuOpen ? (
            <X className="text-slate-900" size={24} />
          ) : (
            <Menu className={showBg ? "text-slate-900" : "text-white"} size={24} />
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
              className={`px-8 py-5 text-lg font-semibold border-b border-slate-100 transition-colors ${
                pathname === item.href
                  ? "text-primary-600 bg-primary-50"
                  : "text-slate-700 hover:text-primary-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-8 pt-6">
            <Link
              href="/contact"
              className="block w-full py-4 text-center bg-slate-900 text-white rounded-2xl font-bold transition-colors hover:bg-primary-600"
            >
              문의하기
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
