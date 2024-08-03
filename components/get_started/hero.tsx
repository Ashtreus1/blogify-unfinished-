import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-12 px-6 text-center">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-mono font-bold mb-4">
          Unleash and Elevate Your Blogging Experience
        </h1>
        <p className="text-xl text-base-200 dark:text-gray-400 text-gray-700 mb-8">
          Share your stories and connect with a vibrant community of readers and writers.
        </p>
        <Link
          href="/signup"
          className="bg-cyan-500 text-white text-lg px-6 py-3 rounded-md shadow-lg hover:bg-cyan-600 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Hero;
