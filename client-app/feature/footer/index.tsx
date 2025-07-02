import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-[#FAF8F5] py-12 md:px-20 lg:px-40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-poppins text-2xl font-bold text-elegant-dusty-rose mb-4">
             BuchiLondon Enterprises
            </h3>
            <p className="text-[#FAF8F5]/80 leading-relaxed mb-4">
              Your trusted source for premium beauty and lifestyle products.
              Quality, elegance, and affordability in every purchase.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#D4A5A5] hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#D4A5A5] hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#D4A5A5] hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-poppins text-lg font-semibold text-white mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-[#FAF8F5]/80">
              <li>
                <a
                  href="#"
                  className="hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  Perfumes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  Hair Care
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-lg font-semibold text-white mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2 text-elegant-cream/80">
              <li>
                <a
                  href="#"
                  className="hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#D4A5A5] transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-lg font-semibold text-white mb-4">
              Newsletter
            </h4>
            <p className="text-[#FAF8F5]m/80 mb-4">
              Subscribe for exclusive offers and beauty tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-[70%] bg-[#FAF8F5]/10 border border-[#D4A5A5]/30 text-white px-4 py-2 rounded-l-full focus:outline-none focus:border-elegant-dusty-rose placeholder-elegant-cream/60"
              />
              <button className="elegant-gradient cursor-pointer flex-1 text-[#2C2C2C] px-6 py-2 rounded-r-full font-semibold hover:glow transition-all duration-300 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4A5A5]/20 pt-8 text-center">
          <p className="text-[#FAF8F5]/80">
            © {new Date().getFullYear()} Buchilondon & Co. All rights reserved. |
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// This code defines a footer component for a website, styled with Tailwind CSS.
// It includes sections for company information, product links, customer care,