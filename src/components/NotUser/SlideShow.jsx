import React from 'react'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import slide1 from '../../pictures/slide1.png'
import slide2 from '../../pictures/slide2.png'
const SlideShow = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel
      className='w-full'
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide className='py-3  bg-white'><img src={slide1} className=' mx-auto rounded-xl' /></Carousel.Slide>
      <Carousel.Slide className='py-3  bg-white'><img src={slide2} className=' mx-auto rounded-xl' /></Carousel.Slide>
    </Carousel>
  );
}

export default SlideShow