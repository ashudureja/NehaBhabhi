import React from 'react';

const H3 = ({ children, color = "black" }) => {
  const colorClass = {
    black: "text-black",
    white: "text-white",
    purple: "text-purple-100",
  }[color] || "text-black";

  return (
    <h3
      className={`text-[5vw] text-shadow-lg uppercase relative tracking-tighter text-center font-[f6] mb-10 ${colorClass}`}
    >
      {children}
    </h3>
  );
};

export default H3;
