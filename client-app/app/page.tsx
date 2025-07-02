"use client"
import Navigation from '@/Component/Navigation'
import About from '@/feature/About';
import Hero from '@/feature/Hero'
import FeaturedProducts from '@/feature/products';
import Testimonials from '@/feature/reviews';
import React, { useEffect, useState } from 'react'
import ContactSection from '@/feature/contact'
import Footer from '@/feature/footer';
import Whatsapp from '@/Component/whatsapp';
import PageLoader from '@/Component/loader';



const Home = () =>
{
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // Adjust duration
    return () => clearTimeout(timeout);
  }, []);
  return isLoading ? (
    <PageLoader />) : (
      <div>  
      <Navigation />
      <Hero />
      <About />
      <FeaturedProducts />
      <Testimonials />
      <ContactSection />
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default Home