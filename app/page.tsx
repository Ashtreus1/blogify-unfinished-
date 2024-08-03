import Image from "next/image";
import Link from 'next/link';
import NavHeader from '@/components/get_started/navheader';
import Hero from '@/components/get_started/hero';
import About from '@/components/get_started/about';
import FeaturedPosts from '@/components/get_started/featured';
import Testimonials from '@/components/get_started/testimonials';
import CallToActionSection from '@/components/get_started/calltoaction';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader/>
      <main>
        <Hero/>
        <About/>
        <FeaturedPosts/>
        <Testimonials/>
        <CallToActionSection/>
      </main>
      <Footer/>
    </div>
  );
}
