import React, { useState, useEffect } from "react";
import JobItem from "./JobItem";
import { motion } from "framer-motion";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const jobData = [
    {
      role: "Software Engineer",
      company: "Universal Weather and Aviation",
      experience: "June 2023 - Present",
      location: "Gurugram, Haryana",
      description:
        "Co-founded Life Coach Elevate, managing end-to-end technical infrastructure, including server architecture, automation pipeline development, leadership of the web development and design team, and driving initiatives to optimize scalability and system performance.",
      logo: "https://tamalsen.dev/wp-content/uploads/2025/01/LCE-Logo-Reverse.png",
      tech: ["React.Js", "Javscript", "Typescript", "CSS", "Azure"],
      website: "https://universalweather.com",
    },
    {
      role: "React.js Developer",
      company: "Orangemantra Pvt. Ltd.",
      experience: "Nov 2021 - May 2023",
      location: "Gurugram, Haryana",
      description:
        "Co-founded Life Coach Elevate, managing end-to-end technical infrastructure, including server architecture, automation pipeline development, leadership of the web development and design team, and driving initiatives to optimize scalability and system performance.",
      logo: "",
      tech: ["React.Js", "Javscript", "HTML", "Material UI", "CSS", "SCSS"],
      website: "https://orangemantra.com",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpandedIndex(0); // Automatically open the first item after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div id="experience" className="min-h-screen flex flex-col items-center">
      <motion.h1
        className="font-bold text-7xl text-center mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Professional Experience
      </motion.h1>

      <div className="relative mt-20 w-2/4 flex flex-col gap-5">
        {/* Job Items */}
        {jobData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <JobItem
              item={item}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
