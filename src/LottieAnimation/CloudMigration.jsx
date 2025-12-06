import React from "react";
import Lottie from "lottie-react";
import { cloudData } from "../Constants/CloudData";

const CloudMigration = () => {
  
    return (
    <div className="w-[30px]">
      <Lottie 
        animationData={cloudData} 
        loop={true} 
        autoplay={true}
      />
    </div>
  );
};


export default CloudMigration;
