// Carousel.js
"use client"
import React, { useState, useEffect } from 'react';

const Carousel = ({ autoPlayInterval = 3000 }) => {
  const [index, setIndex] = useState(0);

  const items = [
      '/image10.png',
      '/image9.png',
      '/image10.png',
      '/image9.png',
      '/image10.png',
      '/image9.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [index, autoPlayInterval]);


  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (items.length-2));
  };

  return (
    <div className="absolute z-20 overflow-hidden w-screen bottom-0 mx-auto">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${(index * 245 / (items.length-2)+42)}%)` }}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`carousel-item flex-shrink-0 flex flex-row rounded-lg bg-secondary w-3/5 h-1/5 p-8 m-2 ${i === index ? 'prev' : i === (index+1) % items.length ? 'active' : i === (index + 2) % items.length ? 'next' : 'inactive'}`}
          >
            <img src={item} alt={`slide-${i}`} className="object-cover w-40 h-40 rounded-full transition-transform duration-500 ease-in-out filter" />
            <div className='flex flex-col ml-12'>
            <p className='py-4 text-secondary-foreground'>
                <span className='mr-2 inline-block -translate-y-1.5'>
                    <svg width="14" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.816 9.112H0.216L3.8 0.535999H7.48L5.816 9.112ZM13.08 9.112H7.512L11.096 0.535999H14.744L13.08 9.112Z" fill="#FD6F00"/>
                    </svg>
                </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque iure amet fugiat! Sint repellendus cupiditate quos quae odio neque. Commodi possimus magni sequi cum in rem consectetur ea repudiandae. Labore!
                <span className='ml-2 inline-block translate-y-1.5'>
                    <svg width="14" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.816 9.112H0.216L3.8 0.535999H7.48L5.816 9.112ZM13.08 9.112H7.512L11.096 0.535999H14.744L13.08 9.112Z" fill="#FD6F00"/>
                    </svg>
                </span>
                </p>
                <div className='text-lg font-bold'>Name</div>
                <div className='text-md font-semibold'>CEO</div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full py-10 flex items-center justify-center'>
        <div className={`w-10 py-1.5 m-1 rounded-lg ${index === 0 ? 'bg-primary' : 'bg-cdot'}`}></div>
        <div className={`w-10 py-1.5 m-1 rounded-lg ${index === 1 ? 'bg-primary' : 'bg-cdot'}`}></div>
        <div className={`w-10 py-1.5 m-1 rounded-lg ${index === 2 ? 'bg-primary' : 'bg-cdot'}`}></div>
        <div className={`w-10 py-1.5 m-1 rounded-lg ${index === 3 ? 'bg-primary' : 'bg-cdot'}`}></div>
      </div>
    </div>
  );
};

export default Carousel;
