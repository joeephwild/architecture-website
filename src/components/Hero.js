import React from 'react';
import "@fontsource/libre-bodoni";
import { HeroImage } from '../utils/HeroData';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div className=''>
    <div style={{ fontFamily: "Libre Bodoni"}} className='relative top-0 w-full h-[700px]'>
      <Carousel 
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      animationHandler="fade"
      showArrows={false}
      showThumbs={false}
      interval={15000} 
      transitionTime={3000}
      >
        {HeroImage.map((item, id) => {
          return <div className="">
            <img src={item.pics} className="max-w-full h-[700px]" alt={item.name} />
            <div className='bg-white object-cover w-[300px]'>
            <div style={{ fontFamily: "Libre Bodoni"}} className='flex flex-col absolute top-[4%] bg-white w-[450px] h-[500x] left-6 justify-center items-center'>
               <span className='text-5xl font-bold'>{item.name}</span>
            </div>
            </div>
            
          </div>
        })}
        </Carousel>
    </div>
    </div>
  )
}

export default Hero