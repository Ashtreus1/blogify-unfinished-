import React from 'react';
import Link from 'next/link';
import { Mail, Facebook, Compass } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="min-h-screen text-white py-12 px-6 flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected with Us!</h2>
        <p className="text-lg md:text-xl mb-8">Subscribe to our newsletter, follow us on social media, or explore our featured content.</p>
        <div className="flex justify-center flex-wrap gap-4">
          <Link 
            href="#"
            className="flex items-center gap-2 dark:text-gray-400 px-6 py-3 rounded-md font-semibold shadow-lg hover:shadow-cyan-500 transition duration-300"
          >
            <Mail size={20} />
            Subscribe
          </Link>
          <Link 
            href="#"
            className="flex items-center gap-2 dark:text-gray-400 px-6 py-3 rounded-md font-semibold shadow-lg hover:shadow-cyan-500 transition duration-300"
          >
            <Facebook size={20} />
            Follow Us
          </Link>
          <Link 
            href="#"
            className="flex items-center gap-2 dark:text-gray-400 px-6 py-3 rounded-md font-semibold shadow-lg hover:shadow-cyan-500 transition duration-300"
          >
            <Compass size={20} />
            Explore Content
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
