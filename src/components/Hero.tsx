import { motion } from "framer-motion";
import React from "react";
import { IoArrowDownOutline } from "react-icons/io5";
import RotatingCube from "./RotatingCube"; // corrected import path

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("expertise");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="h-[85vh] relative overflow-hidden">
      {/* Background Cube with absolute positioning */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <RotatingCube />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10 px-2 flex flex-col items-center justify-center h-full">
        <h1 className="md:text-[8vw] text-5xl uppercase font-semibold text-center -mt-20">
          AJAY GANGWAR
        </h1>
        <motion.p
          className="text-2xl font-normal uppercase text-center tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Software Engineer, Front end & App Developer.
        </motion.p>

        <motion.span
          className="absolute bottom-0 h-16 border w-9 cursor-pointer rounded-full flex justify-center items-end p-1"
          whileHover={{ boxShadow: "0px 0px 15px rgba(143, 0, 255, 0.7)" }}
          transition={{ duration: 0.3 }}
          onClick={handleScroll}
        >
          <motion.div
            animate={{
              y: [0, -10, 0], // Bouncing effect
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            onClick={handleScroll}
            className="flex justify-center items-center"
          >
            <IoArrowDownOutline size={24} color="#8f00ff" />
          </motion.div>
        </motion.span>
      </div>
    </div>
  );
};

export default Hero;
