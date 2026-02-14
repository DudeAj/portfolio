import React, { useState, useRef } from "react";
import ProjectItem from "./ProjectItem";
import { motion, useInView } from "framer-motion";

const PROJECT_TYPE = {
  FULLSTACK: "fullstack",
  FRONTEND: "frontend",
  BACKEND: "backend",
};

const getCount = (value) => (value < 10 ? `0${value}` : value);

const Projects = () => {
  const [filters] = useState([
    { label: "All", value: "ALL", active: true },
    { label: "Fullstack", value: PROJECT_TYPE.FULLSTACK, active: false },
    { label: "Frontend", value: PROJECT_TYPE.FRONTEND, active: false },
    { label: "Backend", value: PROJECT_TYPE.BACKEND, active: false },
  ]);

  const [projects] = useState([
    {
      title: "Boss Panda",
      website: "https://bosspanda.vercel.app/",
      type: PROJECT_TYPE.FRONTEND,
      image: "./bosspanda.png",
    },
    {
      title: "Agency Portfolio",
      website: "https://agency-portfolio-tau.vercel.app/",
      type: PROJECT_TYPE.FULLSTACK,
      image: "./arise.png",
    },
    {
      title: "DreamGamez",
      website: "https://dreamgamez.io/",
      type: PROJECT_TYPE.FRONTEND,
      image: "./dreamgamez.png",
    },
    {
      title: "Param Organic",
      website: "https://paramorganic.vercel.app/",
      type: PROJECT_TYPE.FRONTEND,
      image: "./param-organic.png",
    },
    {
      title: "Aura",
      website: "https://auranextjs.vercel.app/",
      type: PROJECT_TYPE.FRONTEND,
      image: "./aura.png",
    },
    {
      title: "Flat Share Karo",
      website: "https://flatsharekaro.in/",
      type: PROJECT_TYPE.FULLSTACK,
      image: "./flatsharekaro.png",
    },
    {
      title: "Todo App",
      website: "https://todo-five-fawn-82.vercel.app/",
      type: PROJECT_TYPE.BACKEND,
      image: "./todo.png",
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((item) => item.type === activeFilter);

  // Ref for the projects container
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true, amount: 0.3 }); // Triggers when 30% is visible

  return (
    <div id="work" className="mt-10 px-5 md:px-30">
      <h1 className="text-center text-7xl font-bold">Projects</h1>
      <div className="flex gap-10 mt-10">
        <p>Filter By</p>
        {filters.map((filter, index) => (
          <div
            key={index}
            className={`cursor-pointer relative hover:text-purple-500 ${
              filter.value === activeFilter ? "text-purple-500" : ""
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            <p>{filter.label}</p>
            <span className="absolute -top-2 -right-5 text-xs">
              {getCount(
                filter.value === "ALL"
                  ? projects.length
                  : projects.filter((item) => item.type === filter.value)
                      .length,
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        ref={projectsRef}
        className="grid grid-cols-1 md:grid-cols-3 mt-10 grid-flow-row gap-4"
      >
        {filteredProjects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <ProjectItem item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
