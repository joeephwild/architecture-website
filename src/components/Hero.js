import React from 'react';
import { motion } from 'framer-motion';
import "@fontsource/libre-bodoni";
import { HeroImage } from '../utils/HeroData';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const textVariant = {
  initial: {
    x: 400,
  },
  animate: {
    x: 0,

     transition: {
        duration: 2,
        type: "tween",
        ease: "easeInOut",
     },
  },
};

const parentTextVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    y: 0,
    x: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Hero = () => {
  return (
    <motion.div  className='w-full h-[700px]'>
      <motion.span  initial={{
        x: 0,
          opacity: 0
      }} animate={{
        x: 1750,
        opacity: 1,
      }}
      transition={{
        duration: 2,
        type: "tween",
        ease: "easeInOut",
      }}  className='text-[145px]  font-extrabold text-[#FFD700]'>RESPLENDENCY</motion.span>
       <Carousel
       infiniteLoop
       autoPlay
       showIndicators={false}
       showArrows={false}
       showThumbs={false}
       interval={2000}
       showStatus={false}
       animationHandler="fade" >
        {HeroImage.map((image, id)=> {
          return(
            <div key={id} className="m-8  overflow-hiddden">
              <img className="max-w-full rounded-xl h-[700px]" src={image.pics} alt={image.name} />
            </div>
          )
        })}
       </Carousel>
    </motion.div>
  )
}

export default Hero