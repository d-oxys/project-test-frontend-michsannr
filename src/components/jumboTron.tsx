import React from 'react';

interface JumboProps {
  imageUrl: string;
  text: string;
  headline: string;
}

const Jumbotron: React.FC<JumboProps> = ({ imageUrl, headline, text }) => (
  <section className='bg-gray-800 bg-center bg-no-repeat bg-blend-multiply'>
    <div className='mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl'>{headline}</h1>
      <p className='mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl'>{text}</p>
    </div>
  </section>
);

export default Jumbotron;
