/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

interface BannerProps {
  imageUrl: string;
  text: string;
  headline: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, headline, text }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='banner'>
      <img src={imageUrl} style={{ transform: `translateY(${offset * 0.5}px)` }} />
      <div className='banner-content z-10 h-full' style={{ transform: `translateY(${offset * 0.2}px)` }}>
        <div className='font-condensed flex h-full items-center justify-center text-center'>
          <div className='md:mb-28'>
            <h1 className='text-5xl font-medium'>{headline}</h1>
            <p className='font-roboto font-light'>{text}</p>
          </div>
        </div>
      </div>
      <div className='banner-bottom' />
    </div>
  );
};

export default Banner;
