import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { 
  SiGooglesheets, 
  SiZoom, 
  SiOpenai, 
  SiStripe, 
  SiGmail, 
  SiAirtable, 
  SiZendesk, 
  SiSlack, 
  SiLinear,
  SiNotion
} from 'react-icons/si';

import { SiJavascript, SiPython, SiNodedotjs, SiReact, SiDocker, SiKubernetes, SiGit } from 'react-icons/si'

import { FaJava } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import H3 from '../Text/H3';


// --- 2. Main Section Component ---

const Tools = () => {

  // const row1 = [
  //   <FaJava className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <SiNodedotjs className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <SiJavascript className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <SiReact className='text-6xl text-black' />,
  //   null,
  // ];

  // const row2 = [
  //   <SiKubernetes className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <SiDocker className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <SiKubernetes className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <SiDocker className='text-6xl text-black' />,
  //   null,
  //   null,
  // ];

  // const row3 = [
  //   null,
  //   <SiPython className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <SiJavascript className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <SiGit className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <BiLogoSpringBoot className='text-6xl text-black' />,
  // ];

  // const row4 = [
  //   <FaAws className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <FaJava className='text-6xl text-black' />,
  //   null,
  //   null,
  //   null,
  //   <FaAws className='text-6xl text-black' />,
  //   null,
  //   null,
  //   <SiNodedotjs className='text-6xl text-black' />,
  //   null,
  // ];


  
  const row1 = [
     <FaJava className='text-6xl text-[#007396]'/>,// Node.js official green
    null, 
    null, 
    <SiNodedotjs className='text-6xl text-[#339933]'/>, // Duplicate - consider removing
    null, 
    null, 
    <SiJavascript className='text-6xl text-[#F7DF1E]'/>, // JavaScript official yellow
    null, 
    null,
    <SiReact className='text-6xl text-[#61DAFB]'/>, // React official cyan
    null, 
  ];

  const row2 = [
    <SiKubernetes className='text-6xl text-[#326CE5]'/>,
    null, 
    null,
    <SiDocker className='text-6xl text-[#2496ED]'/>, // Docker official blue
    null, 
    null, 
   <SiKubernetes className='text-6xl text-[#326CE5]'/>,
    null, 
    null,
   <SiDocker className='text-6xl text-[#2496ED]'/>, // Kubernetes official blue
    null, 
    null, 
  ];

  const row3 = [
    null, 
    <SiPython className='text-6xl text-[#3776AB]'/>, // Python official blue
    null, 
    null, 
   <SiJavascript className='text-6xl text-[#F7DF1E]'/>,
    null, 
    null,
    <SiGit className='text-6xl text-[#F05032]'/>, // Git official orange-red
    null, 
    null, 
    <BiLogoSpringBoot className='text-6xl text-[#6DB33F]'/>, // Spring Boot official green
  ];

  const row4 = [
   <FaAws className='text-6xl text-[#FF9900]'/>,
    null, 
    null,
    <FaJava className='text-6xl text-[#007396]'/>, // Java official blue (not red)
    null, 
    null, 
     
    null, 
    <FaAws className='text-6xl text-[#FF9900]'/>, // AWS official orange
null,
    null, 
    <SiNodedotjs className='text-6xl text-[#339933]'/>,
    null,
  ];

  const para = "I bring expertise in modern full-stack development and DevOps, with strong skills in Python, JavaScript, Node.js, React, Docker, Kubernetes, and Git. I also work with cloud technologies, microservices, and CI/CD pipelines, specializing in cloud migration, event-driven systems, and RESTful APIs."

  const words = para.split(" ")
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })
 

  return (
    <section className="relative w-full min-h-screen  flex flex-col items-center pt-20 ">
     
      <img
        className="h-full w-full -top-50  absolute -rotate-10 blur-[50px] opacity-100 "
        src="./rb1.svg"
      ></img>
      
   
      <div className="relative z-20 text-center max-w-2xl px-4 mb-2">
        <H3>
          Expertise
        </H3>
      </div>

     
      <div className="h-full w-full z-10 pointer-events-none select-none relative ">
        
        
        <div 
          className="w-full h-full flex flex-col p-4 items-center justify-center mask-l-from-80% mask-r-from-80% mask-b-from-80% "
          style={{
            // Adjust rotation here if you want more/less tilt
            transform: 'perspective(1000px) rotateX(10deg) rotateZ(-20deg) skewY(8deg)',
          }}
        >
          <Marquee gradient={false} speed={40} direction="left" className='p-2 mask-b-from-95%'>
            <div className="flex items-center gap-4 ">
              {row1.map((item, index) => (
                <React.Fragment key={index}>
                  {/* If item exists, render Icon Card, otherwise render Empty White Card */}
                  {!item ? <div className='h-30 w-30 bg-white/30 rounded-lg '></div> : <div className='bg-white overflow-hidden  relative rounded-xl h-30 w-30 shadow-css flex items-center justify-center'>
                     {/* <img className="absolute inset-0 top-16 blur-[30px] z-10" src="/bg1.png" alt=""></img> */}
                     <div className='z-10'>{item}</div></div>}
                </React.Fragment>
              ))}
            </div>
          </Marquee>

          <Marquee gradient={false} speed={25} direction="right" className='p-2 mask-b-from-95%'>
            <div className="flex items-center gap-4">
              {row2.map((item, index) => (
                <React.Fragment key={index}>
                  {/* If item exists, render Icon Card, otherwise render Empty White Card */}
                  {!item ? <div className='h-30 w-30 bg-white/30 rounded-lg '></div> : <div className='bg-white rounded-xl h-30 w-30 shadow-css flex items-center justify-center'>{item}</div>}
                </React.Fragment>
              ))}
            </div>
          </Marquee>

          <Marquee gradient={false} speed={40} direction="left" className='p-2 mask-b-from-95%'>
            <div className="flex items-center gap-4">
              {row3.map((item, index) => (
                <React.Fragment key={index}>
                  {/* If item exists, render Icon Card, otherwise render Empty White Card */}
                  {!item ? <div className='h-30 w-30 bg-white/30 rounded-lg '></div> : <div className='bg-white rounded-xl h-30 w-30 shadow-css flex items-center justify-center'>{item}</div>}
                </React.Fragment>
              ))}
            </div>
          </Marquee>

          <Marquee gradient={false} speed={25} direction="right" className='p-2 mask-b-from-95%'>
            <div className="flex items-center gap-4">
              {row4.map((item, index) => (
                <React.Fragment key={index}>
                  {/* If item exists, render Icon Card, otherwise render Empty White Card */}
                  {!item ? <div className='h-30 w-30 bg-white/30 rounded-lg '></div> : <div className='bg-white rounded-xl h-30 w-30 shadow-css flex items-center justify-center'>{item}</div>}
                </React.Fragment>
              ))}
            </div>
          </Marquee>
         
        </div>
      </div>

      {/* --- Gradient Fades --- */}
      <div className="absolute top-80 bottom-0 left-0 w-20 md:w-100 z-20 bg-gradient-to-r from-[#eeeef3] to-transparent  " />
      <div className="absolute top-40 bottom-0  right-0 w-20 md:w-30 bg-gradient-to-l from-[#eeeef3] to-transparent  z-20" />

     
      <p 
        ref={container}         
        className='text-[1.8vw] font-[f4] max-w-xl text-center mt-50 flex-wrap flex gap-1 items-center justify-center'
      >
        {
          words.map((word, i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
          })
        }
      </p>
      <img className='h-full w-full  blur-[20px]' src="./rb1.svg"></img>

    </section>
  );
};

export default Tools;

const Word = ({children, progress, range}) => {
  const opacity = useTransform(progress, range, [0, 1])
  const blur = useTransform(progress, range, [10, 0])
  const filter = useTransform(blur, (value) => `blur(${value}px)`)
  
  return (
    <span className="relative ">
      <span className="absolute opacity-20">{children}</span>
      <motion.span className='text-shadow-lg' style={{
        opacity,
        filter
      }}>{children}</motion.span>
    </span>
  )
}