'use client';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { testimonials } from '@/lib/placeholder';

const EmblaTestimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [AutoScroll({ playOnInit: true, delay: 3000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); 

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <section className="min-h-screen py-12 relative flex items-center justify-center">
      <div className="w-full px-0">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-6 text-center">What Our Users Say</h2>
        <div className="embla overflow-hidden w-full" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((testimonial, index) => {
              const isActive = Math.abs(selectedIndex - index) <= 1;
              return (
                <div
                  key={index}
                  className={`embla__slide flex-shrink-0 w-full sm:w-auto px-4 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-50'}`}
                >
                  <div className="bg-transparent rounded-lg shadow-lg p-6 max-w-xs mx-auto">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name}'s avatar`}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-400">{testimonial.name}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.review}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaTestimonials;
