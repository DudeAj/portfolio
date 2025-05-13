
import { motion } from "framer-motion";
import { IoArrowDownOutline } from "react-icons/io5";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="h-[60vh] relative">
      <h1 className="text-[8vw] uppercase font-semibold text-center mt-40">
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
      <div className="flex justify-center mt-20">
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