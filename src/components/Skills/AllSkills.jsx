import React from "react";
import SingleSkill from "./SingleSkill";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { RiPhpFill } from "react-icons/ri";
import { IoLogoLaravel } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const skills = [
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "Tailwind CSS", icon: RiTailwindCssFill },
  { skill: "React", icon: RiReactjsLine },
  { skill: "Bootstrap", icon: RiBootstrapLine },
  { skill: "Node.js", icon: RiNodejsFill },
  { skill: "Express.js", icon: SiExpress },
  { skill: "PHP", icon: RiPhpFill },
  { skill: "Laravel", icon: IoLogoLaravel },
  { skill: "MongoDB", icon: BiLogoMongodb },
  { skill: "MySQL", icon: GrMysql },
];
const AllSkills = () => {
  return (
    <div>
      <div className="flex justify-center items-center relative max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              ></SingleSkill>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
