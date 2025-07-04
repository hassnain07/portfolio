import React from "react";
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";

const AboutMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <AboutText></AboutText>
      <AboutImg></AboutImg>
    </div>
  );
};

export default AboutMain;
