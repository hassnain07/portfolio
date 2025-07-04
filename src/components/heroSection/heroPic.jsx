import React from "react";
import { PiHexagon } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const heroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="../../public/imgs/Untitled Project.png"
        alt=""
        className="max-h-[450px] w-auto md:relative left-[100px] bottom-[15px]"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagon className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] md:relative left-[100px] " />
      </div>
    </motion.div>
  );
};

export default heroPic;
