"use client";

import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Curating luxury for you...",
    "Selecting premium products...",
    "Preparing your experience...",
    "Almost ready...",
  ];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Add a small delay before hiding loader
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    // Change loading text
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    // Cleanup
    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [loadingTexts.length]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-200/30 rounded-full blur-2xl animate-bounce" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-200/40 rounded-full blur-xl animate-ping" />
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center">
        {/* Brand Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-purple-600 rounded-full mb-4 shadow-2xl">
            <Image
              src={
                "https://res.cloudinary.com/dk5mfu099/image/upload/v1751284820/WhatsApp_Image_2025-06-30_at_10.46.18_AM_pxb5x9.jpg"
              } // Replace with your logo path
                          alt="BuchiLondon Enterprises Logo"
                          width={74}
                            height={74} 
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-poppins font-bold text-gray-800 mb-2">
            BuchiLondon Enterprises
          </h1>
          <p className="text-rose-600 font-medium text-sm uppercase tracking-wider">
            Affordable Luxury
          </p>
        </div>

        {/* Animated Loading Spinner */}
        <div className="relative mb-8">
          <div className="w-16 h-16 mx-auto">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-rose-200 rounded-full"></div>

            {/* Spinning Ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-rose-500 border-r-purple-500 rounded-full animate-spin"></div>

            {/* Inner Sparkle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="text-rose-500 animate-pulse" size={20} />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="bg-rose-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-rose-500 to-purple-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="text-sm text-gray-600 mt-2 font-medium">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="h-6 mb-8">
          <p className="text-gray-600 font-medium animate-pulse">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10">
          <div
            className="w-4 h-4 bg-rose-400 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          />
        </div>
        <div className="absolute -top-5 -right-8">
          <div
            className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
        <div className="absolute -bottom-8 -left-6">
          <div
            className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute -bottom-6 -right-10">
          <div
            className="w-5 h-5 bg-rose-300 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-500 text-sm">
          Preparing your luxury experience...
        </p>
      </div>
    </div>
  );
}
