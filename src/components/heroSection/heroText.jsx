import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const heroText = () => {
  return (
    <div className="flex flex-col gap-4 justify-center sm:text-center md:text-left">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        Full Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-(2.8rem) lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Hassnain Hafeez
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg text-white"
      >
        Full Stack Web developer with two years of experience <br /> in
        developing web applications.
      </motion.p>
    </div>
  );
};

export default heroText;
