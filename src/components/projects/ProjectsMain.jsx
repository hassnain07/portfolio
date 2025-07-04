import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
const projects = [
  {
    name: "VibeHive",
    year: "June 2025",
    align: "right",
    image: "../../public/imgs/vibeHive.jpg",
    link: "https://vibehive-xt9f.onrender.com",
  },
  {
    name: "Rehmat Tax Solutions",
    year: "May 2025",
    align: "left",
    image: "../../public/imgs/website-img-2.webp",
    link: "https://rehmattaxsolution.com/",
  },
  {
    name: "Point Of Sale System",
    year: "Jan 2025",
    align: "right",
    image: "../../public/imgs/pos.png",
    link: "#",
  },
  {
    name: "ZetaSoft | Learning Management System",
    year: "November 2024",
    align: "left",
    image: "../../public/imgs/lms.png",
    link: "#",
  },
  {
    name: "ZK | Inventory Management System",
    year: "November 2024",
    align: "right",
    image: "../../public/imgs/zk.png",
    link: "#",
  },
  {
    name: "Essence | Ecommerce Website",
    year: "Aug 2023",
    align: "left",
    image: "../../public/imgs/essence.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <div>
        <ProjectsText />
      </div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
