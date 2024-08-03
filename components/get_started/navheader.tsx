'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/modetoggle';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const NavHeader = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-none">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center ml-5">
          <span className="text-3xl font-mono font-bold">Blogify</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 ml-10">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="font-black hover:text-cyan-500 transition">
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle/>
          <Link href='/login'>
            <Button variant="outline" className="px-6 py-2">
              Login
            </Button>
          </Link>
          <Link href='/signup'>
            <Button className="px-6 py-2 bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-200">
              Signup
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="text-gray-700 hover:text-cyan-500 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4 bg-white border-t shadow-lg">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="text-gray-700 font-black hover:text-cyan-500 transition">
                {label}
              </Link>
            ))}
            <div className="flex flex-col space-y-4">
              <Link href='/login'>
                <Button variant="outline" className="px-6 py-2 border-2 border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-500 transition-all duration-200">
                  Login
                </Button>
              </Link>
              <Link href='/signup'>
                <Button className="px-6 py-2 bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-200">
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavHeader;
