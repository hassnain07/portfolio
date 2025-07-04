import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number={"2"} text={"Years"}></ExperienceInfo>
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number={"9"} text={"Applications"}></ExperienceInfo>
      </div>
      <p className="text-center text-white">
        With 2 years of Experience building full Stack Web Applications
      </p>
      <ExperienceInfo number={"$1k"} text={"Max Budget"}></ExperienceInfo>
    </div>
  );
};

export default ExperienceTopLeft;
