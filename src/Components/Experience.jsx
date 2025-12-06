import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"

import H3 from '../Text/H3'
import { LeftLine, RightLine } from './Line'
const ExperienceCard = ({ exp, index }) => {
  const cardRef = useRef()
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
   offset: ["start 0.95", "end 0.95"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [50, 0])
  const rotateX = useTransform(scrollYProgress, [0, 1], [-90, 0])
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg)`
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1])
   const blur = useTransform(scrollYProgress, [0,1], [20, 0])
    const filter = useMotionTemplate`blur(${blur}px)`

  // const cardRef = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: cardRef,
  //     offset: ["start end", "end start"]
  //   });
  
  //   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  //   const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
  //   const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0.9, 1, 1, 0.9]);
  
  
  return (
    <motion.div
      ref={cardRef}
      style={{
        transform,
        filter,
      
       
        transformOrigin: 'center center',
        opacity,
        y,
        scale
      }}
      className="w-full border relative border-[#cdcddd] bg-[#e0e0eb] rounded-4xl p-3 shadow-[0_0.25rem_0.375rem_-0.125rem_rgba(0,0,0,0.08)]"
    >
      <motion.div 
        className="relative bg-white   overflow-hidden rounded-3xl h-full p-6 border border-[#e0e0eb] flex flex-col shadow-[0_4px_6px_-2px_rgb(151_151_185)]"
      >
        <img className="absolute inset-0 blur-[30px]" src="./light.svg" alt=""></img>
        
        <div className="relative z-10">
          <div className="inline-block font-[f6] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-purple-100 tracking-wider text-black text-sm px-3 py-1 rounded-full mb-3">
            {exp.period}
          </div>
          
          <h4 className="text-2xl font-[f6] text-black text-shadow-lg mb-1">{exp.title}</h4>
          <p className="text-xl font-[f6] text-black text-shadow-sm mb-3">{exp.company}</p>
          
          <ul className="space-y-2 font-[f4] text-lg text-gray-700">
            {exp.points.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="text-pink-400 mr-2 flex-shrink-0">•</span>
                <span className="line-clamp-3">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  const experiences = [
    {
      period: "AUG 2023 - PRESENT",
      title: "INTEGRATION DEVELOPER",
      company: "Workcover Queensland, Australia",
      points: [
        "Working with Kubernetes, Docker, and AWS, focusing on cloud migration from legacy systems to AWS",
        "Creating and executing database patch scripts, ensuring data integrity and optimal performance in both on-premises and cloud environments"
      ]
    },
    {
      period: "SEP 2022 - JUL 2023",
      title: "INTEGRATION DEVELOPER",
      company: "Auto & General, Australia",
      points: [
        "Upgrading existing applications to improve their functionality and security",
        "Designing and implementing event-driven architectures using Java 17 and AWS"
      ]
    },
    {
      period: "OCT 2017 - SEP 2022",
      title: "SENIOR ANALYST PROGRAMMER",
      company: "Fidelity International, India",
      points: [
        "Developed over 9 projects for Wealth Management, including the migration of a Fund Investment Management legacy system to AWS Cloud for 500K+ users in the UK region",
        "Provided technical leadership, mentorship, and guidance to junior developers on the team"
      ]
    },
    {
      period: "APR 2017 - OCT 2017",
      title: "IMPLEMENTATION DEVELOPER",
      company: "Oneshield India Pvt Ltd, India",
      points: [
        "Identified and resolved issues using Java to improve system performance and enhance user experience"
      ]
    },
    {
      period: "JUL 2016 - MAR 2017",
      title: "JAVA DEVELOPER",
      company: "Humaralabs Technology, India",
      points: [
        "Developed REST APIs for e-commerce and logistics management application",
        "Created an address identifier utility for efficient delivery management"
      ]
    }
  ]

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center py-20 '>
      {/* <div className='max-w-8xl  '> */}
        <H3>Professional Journey</H3>
        <div className='flex justify-between   h-full w-full'>
          <LeftLine/>
          <div className='flex flex-col gap-6 mt-8 max-w-5xl'>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
        <RightLine/>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Experience