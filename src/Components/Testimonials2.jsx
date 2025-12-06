import React from 'react'
import H3 from '../Text/H3' // Assuming this path is correct for your project
import { testimonials } from "../Constant/Recommendation"; // Assuming this path is correct
import { SiComma } from "react-icons/si";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Testimonials2 = () => {
const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start "]
  });

 
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div style={{y,scale}} ref={containerRef} className='min-h-screen w-full bg-black pt-40 p-20 flex flex-col gap-20'>
      <H3 color='white'>What others say</H3>
      
     
      <div className='relative grid grid-cols-[auto_1fr_auto] gap-10'>
        
        <div className='hidden md:block h-full'>
           <div className='sticky top-60 text-8xl text-purple-100 rotate-180'>
             <SiComma />
           </div>
        </div>
        
       
        <div className='flex flex-col gap-20 items-center justify-center'>
          {testimonials.map((item, index) => {
            return (
              <div key={index} className='flex flex-col max-w-lg gap-5'>
                <h3 className='text-purple-50/70 text-2xl font-[f4]'>{item.text}</h3>
                <motion.div initial={{opacity:0,filter:"blur(200px)"}} whileInView={{
                                opacity: 1,
                
                               
                                filter: "blur(0px)",
                                transition: {
                                  delay: 0.01,
                                  duration: 0.8,
                                  ease: [0.25, 0.4, 0.25, 1],
                                },
                              }} className='text-purple-50 text-2xl font-[f6]'>{item.name}</motion.div>
              </div>
            )
          })}
        </div>
        
        {/* Sticky Right Comma Wrapper */}
        <div className='hidden md:block h-full'>
           <div className='sticky top-60 text-8xl text-purple-100'>
             <SiComma />
           </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Testimonials2