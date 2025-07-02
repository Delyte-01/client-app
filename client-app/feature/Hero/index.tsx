"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Heart, Star } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/Component/framer-wrapper";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      category: "Perfumes",
      image:
        "https://res.cloudinary.com/dk5mfu099/image/upload/v1751284820/WhatsApp_Image_2025-06-30_at_11.18.03_AM_1_idzuyq.jpg",
      title: "Boss Luca perfume",
    },
    {
      category: "Data subscription",
      image:
        "https://res.cloudinary.com/dk5mfu099/image/upload/v1751373257/WhatsApp_Image_2025-07-01_at_1.32.22_PM_tn9mkl.jpg",
      title: "Data subscription",
    },
    {
      category: "Hair Care",
      image:
        "https://res.cloudinary.com/dk5mfu099/image/upload/v1751284822/WhatsApp_Image_2025-06-30_at_11.25.29_AM_v60hty.jpg",
      title: "Darling attachment",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Heart className="text-rose-500 mr-2" size={24} />
              <span className="text-rose-600 font-medium tracking-wider uppercase text-sm">
                Affordable Luxury
              </span>
            </div>
            <MotionDiv
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h1 className="font-poppins text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight font-palyfair">
                Beauty & Style
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
                  {" "}
                  Redefined
                </span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
                Discover our curated collection of premium perfumes, luxurious
                hair care products, and stylish accessories. Quality you can
                trust, prices you'll love.
              </p>
            </MotionDiv>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/25">
                <Link href="#products">
                  <span className="flex items-center justify-center">
                    Shop Now
                    <Sparkles
                      className="ml-2 group-hover:rotate-12 transition-transform duration-300"
                      size={20}
                    />
                  </span>
                </Link>
              </button>

              <button className="px-8 py-4 border-2 border-rose-500 text-rose-600 font-semibold rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 hover:scale-105">
                <Link href="https://api.whatsapp.com/send?phone=2349160805492">
                  {" "}
                  Get In Touch
                </Link>
              </button>
            </div>
            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="text-yellow-400 fill-current mr-1" size={16} />
                <span>4.9/5 Rating</span>
              </div>
              <div>1000+ Happy Customers</div>
              <div>Free Shipping</div>
            </div>
          </div>

          {/* Product Showcase */}
          <MotionDiv
            animate={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}>
            <div className="relative ">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-rose-200/50 shadow-xl">
                  <div className="text-center mb-4">
                    <span className="text-rose-600 font-medium text-sm uppercase tracking-wider">
                      {products[currentSlide].category}
                    </span>
                    <h3 className="font-poppins text-xl font-semibold text-gray-800 mt-1">
                      {products[currentSlide].title}
                    </h3>
                  </div>

                  <div className="relative h-80 mb-6 border overflow-clip rounded-2xl">
                    <Image
                      src={products[currentSlide].image}
                      alt={products[currentSlide].title}
                      fill
                      className="object-cover  group-hover:scale-105 transition-transform duration-500 "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex justify-center space-x-2">
                    {products.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "bg-rose-500" : "bg-rose-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
