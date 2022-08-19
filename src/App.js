import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const containerRef = useRef(null)
  return (
    <div className='w-full h-[700px]'>
      <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}>
      <Header />
      <Hero />
      <Features/>
  </main>
</LocomotiveScrollProvider>
      
    </div>
  );
}

export default App;
