'use client'
import React, { useState, useEffect } from 'react';

/*
  This is just for mock data. Real feedback from users will be rendered soon!
*/

const comments = [
  "Blogify is a fantastic platform for sharing my thoughts and stories. It's free, open-source, and incredibly user-friendly. Highly recommended!",
  "I love using Blogify! It's an amazing platform for creating and sharing content.",
  "Blogify's open-source nature allows me to customize it to my liking. A great tool for any blogger!",
  "The user interface of Blogify is so intuitive and easy to use. It makes blogging a breeze.",
  "As a developer, I appreciate the open-source aspect of Blogify. It's a great community project.",
  "Blogify offers all the features I need to manage my blog efficiently. A highly versatile platform!",
  "I was able to start my blog in minutes with Blogify. The setup process is super simple.",
  "Blogify's free platform is perfect for anyone looking to start blogging without any cost.",
  "The support and community around Blogify are amazing. I always get help when I need it.",
  "With Blogify, I can focus on my content without worrying about technical details. It's perfect!",
  "The customization options in Blogify are endless. I can make my blog look exactly how I want it to."
];

const highlightKeywords = [
  "free", "open-source", "user-friendly", "fantastic", "amazing",
  "intuitive", "community", "versatile", "simple", "support",
  "help", "focus", "customization"
];

const SideHeader: React.FC = () => {
  const [currentComment, setCurrentComment] = useState<string>(comments[0]);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * comments.length);
        setCurrentComment(comments[randomIndex]);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 h-full flex flex-col  justify-center items-center text-center shadow-2xl shadow-cyan-400">
      <p
        className={`text-3xl text-gray-600 italic leading-relaxed tracking-wide transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        {currentComment.split(new RegExp(`(${highlightKeywords.join('|')})`, 'gi')).map((part, index) =>
          highlightKeywords.some(keyword => new RegExp(keyword, 'i').test(part)) ? (
            <span key={index} className="font-bold text-cyan-500">{part}</span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </p>
    </div>
  );
};

export default SideHeader;