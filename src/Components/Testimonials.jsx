
import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn } from "../LottieAnimation/TestimonialsColums";

import { testimonials } from "../Constant/Recommendation";
import { RiH1 } from "react-icons/ri";
import H3 from "../Text/H3";


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="  my-20 relative mt-40">
    
      <div className="container z-10 mx-auto">
        
          

          
  <H3>
    RECOMMENDATIONS
  </H3>

          
     

        <div className="flex justify-center z-10 relative gap-6 mt-20 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
