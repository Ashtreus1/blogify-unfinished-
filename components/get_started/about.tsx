import React from 'react';

const About = () => {
  const aboutCards = [
    {
      icon: '📖',
      title: 'Easy to Use',
      description: 'Our blogging platform is user-friendly and easy to navigate, making it simple for anyone to start sharing their thoughts and stories.',
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Reach a global audience with our platform. Share your content with readers from around the world.',
    },
    {
      icon: '💡',
      title: 'Inspiration & Ideas',
      description: 'Get inspired and find new ideas from our community. Connect with like-minded individuals and grow your blog.',
    },
  ];

  return (
    <section className="py-16 px-8" id="about">
      <div className="container mx-auto text-center">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-12">About Blogify</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="max-w-xs rounded-lg shadow-xl p-8 transition-transform transform cursor-pointer hover:shadow-cyan-400 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl"
            >
              <div className="text-6xl mb-6">{card.icon}</div>
              <h3 className="text-3xl font-semibold mb-4">{card.title}</h3>
              <p className="dark:text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
