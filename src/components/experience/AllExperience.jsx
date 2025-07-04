import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const experiences = [
  {
    job: "Full Stack Web Developer",
    company: "USECS",
    date: "2023 - 2024",
    responsibilities: [
      "Creating interactive Websites.",
      "Developing full stack web applications.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Laravel Developer",
    company: "ZetaSoft Pvt Ltd.",
    date: "Aug 2024 - Dec 2024",
    responsibilities: [
      "Building Full stack projects using laravel.",
      "Work on large scale web applications.",
      "Provide support to other developers.",
    ],
  },
  {
    job: "MERN Developer Intern",
    company: "Mind Gigs",
    date: "Jan 2025 - June 2025",
    responsibilities: [
      "Working along with MERN developers",
      "Building full stack MERN solutions.",
      "Collaborating in Web development projects.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", `0.${index}`)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
