import React from 'react'
import { motion } from 'motion/react'
import CloudMigration from '../LottieAnimation/CloudMigration'; // Ensure path is correct
import H3 from '../Text/H3'; // Ensure path is correct
import { LeftLine, RightLine } from './Line';

const Icando = () => {
  const bentos = [
    {
      id: 1,
      colSpan: 'md:col-span-4',
      animation: <CloudMigration/>,
      title: 'Cloud Architecture & Migration',
      description: 'Specializing in AWS cloud migrations, transforming legacy systems into modern, scalable cloud-native applications. Expert in Kubernetes orchestration and Docker containerization for optimal performance.',
    },
    {
      id: 2,
      colSpan: 'md:col-span-3',
       animation: <CloudMigration/>,
      title: 'Microservices',
      description: 'Building distributed systems with event-driven architecture and microservices patterns for maximum scalability.',
    },
    {
      id: 3,
      colSpan: 'md:col-span-3',
       animation: <CloudMigration/>,
      title: 'Database Optimization',
      description: 'Creating and executing database patch scripts ensuring data integrity and optimal performance across environments.',
    },
    {
      id: 4,
      colSpan: 'md:col-span-4',
       animation: <CloudMigration/>,
      title: 'Full-Stack Development',
      description: 'Proficient in building end-to-end solutions using Java, Python, JavaScript, and modern frameworks. Strong foundation in both frontend and backend technologies with focus on clean, maintainable code.',
    },
  ];

  return (
    <section className="py-20 min-h-screen w-full">
      <motion.div className="max-w-8xl mx-auto h-full">
        <H3>Can do</H3>
     
        <div className='flex justify-between items-stretch h-full w-full'>
         <LeftLine/>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 max-w-5xl mx-auto py-4">
            {bentos.map((bento) => {
              return (
                <div 
                  key={bento.id} 
                  // Kept h-100 for boxes, but ideally use min-h to prevent text overflow
                  className={`${bento.colSpan} min-h-[25rem] border relative border-[#cdcddd] bg-[#e0e0eb] rounded-4xl p-3 shadow-[0_0.25rem_0.375rem_-0.125rem_rgba(0,0,0,0.08)]`}
                >
                  <motion.div className="relative bg-white overflow-hidden rounded-3xl h-full p-8 border border-[#e0e0eb] flex flex-col items-center justify-between shadow-[0_4px_6px_-2px_rgb(151_151_185)]">
                     <img className="absolute h-full w-full -top-1 blur-[20px]" src="./light.svg" alt="" />
                     {bento.animation}
                    <div className='z-10 relative'>
                      <h3 className="text-[2vw] text-shadow-lg uppercase relative tracking-tighter font-[f6]">
                        {bento.title}
                      </h3>
                      <p className="text-gray-600 font-[f4]">
                        {bento.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
          
         <RightLine/>
       
        </div>
      </motion.div>
    </section>
  );
};

export default Icando;