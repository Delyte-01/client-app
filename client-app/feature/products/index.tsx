"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";
import {products} from "@/lib/data/product";
import { whatsappUrl } from "@/lib/data/whatsappUtils";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/Component/framer-wrapper";


export default function FeaturedProducts() {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const phoneNumber = "234 916 080 5492"; // Nigeria +234
  const textMessage = encodeURIComponent(
    "Hi! I'm interested in your products. Can you help me?"
  );
  const whatsappUrl2 = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  // &text=${textMessage}
  

  const toggleLike = (productId: number) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
      
    );
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Featured <span className="text-rose-600">Products</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our most loved products, carefully selected for their
              quality and value
            </p>
          </MotionDiv>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <MotionDiv
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              key={product.id}
            >
              <div className="group bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl overflow-hidden border border-rose-100 hover:border-rose-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <Heart
                      size={18}
                      className={`${
                        likedProducts.includes(product.id)
                          ? "text-rose-500 fill-current"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="text-xs text-rose-600 font-medium uppercase tracking-wider mb-2">
                    {product.category}
                  </div>

                  <h3 className="font-poppins text-lg font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-rose-600 text-xl">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Link
                    href={`${whatsappUrl2}&text=${textMessage} with ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-6 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center justify-center">
                      <ShoppingBag size={18} className="mr-2" />
                      Place Order
                    </Button>
                  </Link>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
