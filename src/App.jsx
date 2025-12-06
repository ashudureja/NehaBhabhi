import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './Loader';
import Hero from './Hero';
import Navbar from './Navbar';
import Icando from './Components/Icando';
import Tools from './Components/Tools';
import Experience from './Components/Experience';
import Awards from './Components/Awards';
import Testimonials from './Components/Testimonials';
import Testimonials2 from './Components/Testimonials2';
import { ReactLenis } from "lenis/react";
import About from './Components/About';




const PRELOAD_DELAY_MS = 1600; 







const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false); 

     
      setIsContentVisible(true);
    }, PRELOAD_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="font-sans bg-main ">
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      
      <div className='relative'>
         <Navbar isContentVisible={isContentVisible}/>
      <Hero isContentVisible={isContentVisible} />
 
      <Icando/>
      <Tools/>
      <Experience/>
      <Awards/>

      <Testimonials2/>
     
      
      </div>
    </div>

   
  );
};

export default App;