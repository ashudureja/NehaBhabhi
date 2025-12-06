import React from 'react'
import H3 from '../Text/H3' // Assuming this path is correct for your project
import { testimonials } from "../Constant/Recommendation"; // Assuming this path is correct
import { SiComma } from "react-icons/si";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start "]
  });

 
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div style={{y,scale}} ref={containerRef} className='min-h-screen w-full bg-[#cff9bc] pt-40 p-20 flex flex-col items-center justify-center gap-20'>
      <H3 color='black'>About me</H3>
      
     
      <p className='text-5xl max-w-4xl text-center font-[f4]'>I am Neha Valechs,Software developer with 8 years of experience, skilled in developing robust and efficient code using various programming languages and frameworks. Expertise in building scalable and secure web applications with a strong understanding of software development practices.</p>
    </motion.div>
  )
}

export default About