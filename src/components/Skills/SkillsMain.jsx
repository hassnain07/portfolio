import React from "react";
import SkillsTxt from "./SkillsTxt";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[500px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsTxt></SkillsTxt>
        </motion.div>

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden md:hidden lg:block">
          <AllSkills></AllSkills>
        </div>
        <div className="sm:block md:block lg:hidden">
          <AllSkillsSM></AllSkillsSM>
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
