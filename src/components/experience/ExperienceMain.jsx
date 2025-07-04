import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExperience from "./AllExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceText></ExperienceText>
        <ExperienceTop></ExperienceTop>
      </motion.div>

      <div className="w-full h-1 bg-brown md:block sm:hidden"></div>
      <AllExperience></AllExperience>
    </div>
  );
};

export default ExperienceMain;
