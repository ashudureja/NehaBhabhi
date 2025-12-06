"use client";
import React from "react";
import { motion } from "motion/react";


export const TestimonialsColumn = ({ className, testimonials, duration }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 "
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-10  relative rounded-2xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-w-xs w-full   border border-white/10"
                key={i}
              >
                <img className="absolute inset-0 opacity-40 -z-10" src="./bg1.png" alt=""></img>
                <div className="text-black dark:text-white font-[f4]">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-[f6] text-xl uppercase text-shadow-lg tracking-wide leading-5 text-black dark:text-white">{name}</div>
                    {/* <div className="leading-5 font-[f4] opacity-60 tracking-tight text-black dark:text-white">{role}</div> */}
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
