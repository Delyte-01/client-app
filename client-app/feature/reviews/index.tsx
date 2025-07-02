"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "MarvinMedia",
      location: "Enugu, Nigeria.",
      content:
        "Buchi billionz🙌🔥, My verified vendor for gadgets, i been dey fear before i say make i just try your stuffs dem, and truly truly yous porduts are nice,Keep it up Boss",
      rating: 5,
      image: "https://res.cloudinary.com/dk5mfu099/image/upload/v1748939947/download_2_xhczeu.jpg",
      product: "gadget",
    },
    {
      name: "mercy okorie",
      location: "Lagos, Nigeria.",
      content:
        "The customer service is exceptional and the products are exactly as described. My wireless earbuds work perfectly and the sound quality is amazing!",
      rating: 5,
      image: "https://res.cloudinary.com/dk5mfu099/image/upload/v1748939947/hneojxymaiuaupg8jgfe.jpg",
      product: "Premium Wireless Earbuds",
    },
    {
      name: "Presh Baby",
      location: "Enugu, Nigeria.",
      content:
        "Buchilondon Enterprises!!! A big name where quality meets demand!!!. Honestly i must confess the attachment you sold to me is top notch , its gave me this perfect curls and braiding i want.Thank you Buchilondon.",
      rating: 5,
      image: "https://res.cloudinary.com/dk5mfu099/image/upload/v1751351418/1_WhatsApp_-_client2_aal7xj.png",
      product: "hair",
    },
    {
      name: "Nkechi management",
      location: "Enugu, Nigeria.",
      content:
        "Buchilondon i love the perfume 😍😊.its smells so nice and i have getting compliments nonstopn. I refered you to my friends and they are ready to purchase theirs🔥 , Mousuf is such a good perfume 👌",
      rating: 5,
      image: "https://res.cloudinary.com/dk5mfu099/image/upload/v1751351418/1_WhatsApp_-_client1_rtwu7r.png",
      product: "Mousuf perfume",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-rose-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What Our <span className="text-rose-600">Customers Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-rose-100 shadow-xl relative overflow-hidden">
            {/* Background Quote */}
            <Quote className="absolute top-6 right-6 text-rose-200" size={60} />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={24}
                    />
                  )
                )}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 text-lg md:text-xl font-light text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Product */}
              <div className="text-center mb-6">
                <span className="text-rose-600 font-medium text-sm">
                  Purchased: {testimonials[currentTestimonial].product}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-rose-200">
                  <Image
                    src={
                      testimonials[currentTestimonial].image ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-rose-600 text-sm">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-rose-500" : "bg-rose-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
