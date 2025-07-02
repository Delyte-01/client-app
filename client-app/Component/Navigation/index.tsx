"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItem = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="inline-flex items-center justify-center w-15 h-15 bg-gradient-to-br from-rose-500 to-purple-600 rounded-full mb-4 shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dk5mfu099/image/upload/v1751284820/WhatsApp_Image_2025-06-30_at_10.46.18_AM_pxb5x9.jpg"
                width={50}
                height={50}
                className="rounded-full"
                alt="Logo"
              />
            </div>
            <div className="md:text-2xl text-[18px] font-poppins uppercase  font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 font-cormorant">
              BuchiLondon Enterprises
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItem.map((item, i) => (
              <Link href={item.href} key={i}>
                <button className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium cursor-pointer">
                  {item.name}
                </button>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link href='#products'>
              <button className="p-2 text-gray-700 hover:text-rose-600 transition-colors duration-300">
                <ShoppingBag size={24} />
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 py-4 shadow-lg">
            {navItem.map((item, i) => (
              <Link
                href={item.href}
                key={i}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:text-rose-600 transition-colors duration-300 cursor-pointer">
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
