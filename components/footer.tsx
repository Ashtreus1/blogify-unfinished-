import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-4">About Blogify</h4>
          <p className="text-sm max-w-md">
            Blogify is your go-to platform for the latest articles, news, and updates across various topics. Join our community as a blogger or reader and share your stories with the world.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <h5 className="text-lg font-semibold mb-4">Explore</h5>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-cyan-500 transition duration-300">About Us</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 transition duration-300">Contact</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 transition duration-300">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 transition duration-300">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Follow & Join Section */}
        <div className="flex flex-col items-center md:items-start">
          <h5 className="text-lg font-semibold mb-4">Connect</h5>
          <div className="flex space-x-4 mb-4">
            <Link href="https://www.facebook.com" className="hover:text-cyan-500 transition duration-300">
              <Facebook size={24} />
            </Link>
            <Link href="https://www.twitter.com" className="hover:text-cyan-500 transition duration-300">
              <Twitter size={24} />
            </Link>
            <Link href="https://www.instagram.com" className="hover:text-cyan-500 transition duration-300">
              <Instagram size={24} />
            </Link>
          </div>
          <ul className="space-y-2">
            <li><a href="/be-a-blogger" className="hover:text-cyan-500 transition duration-300">Be a Blogger</a></li>
            <li><a href="/be-a-reader" className="hover:text-cyan-500 transition duration-300">Be a Reader</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-xs text-gray-400">&copy; 2024 Blogify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
