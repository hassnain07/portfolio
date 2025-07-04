import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll";

const AboutText = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center max-w-[650px]"
    >
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I’m Hassnain, a passionate Computer Science student and aspiring
        full-stack developer with a strong foundation in both front-end and
        back-end technologies. I specialize in the MERN stack and Laravel, and I
        enjoy building real-world projects that solve practical problems. During
        my internship at ZetaSoft Pvt. Ltd., I worked on medium-scale
        applications, sharpening my skills in modern web development and
        collaborative teamwork. I’m always eager to learn and stay updated with
        the fast-evolving tech landscape. My toolkit includes React, Node.js,
        Laravel, MySQL, MongoDB, and REST APIs, along with tools like Tailwind
        CSS, DaisyUI, and Git. Outside of coding, I’m a music enthusiast and a
        competitive chess player who thrives on strategy and challenges—both in
        games and in life.
      </p>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-cyan hover:text-white"
      >
        Projects
      </Link>
    </motion.div>
  );
};

export default AboutText;
