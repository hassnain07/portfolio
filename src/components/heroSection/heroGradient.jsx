import React from "react";

const heroGradient = () => {
  return (
    <div>
      <div className="cyanBoxShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
      <div className="orangeBoxShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
      <div className="cyanBoxShadow absolute top-[300px] left-0 -z-10 opacity-50"></div>
      <div className="orangeBoxShadow absolute top-[500px] left-0 -z-10 opacity-50"></div>
    </div>
  );
};

export default heroGradient;
