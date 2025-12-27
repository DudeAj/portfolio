import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const expertiseData = [
  {
    icon: <HiOutlineComputerDesktop size={60} />,
    title: "Software Development",
    description:
      "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
  },
  {
    icon: <FaReact size={60} />,
    title: "Frontend Dev React, NextJS",
    description:
      "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React, and NextJS frameworks.",
  },
  {
    // icon: <FaNodeJs size={60} />,
    icon: <FaReact size={60} />,
    title: "Mobile App Dev React Native",
    description:
      "Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.",
  },
];

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      id="expertise"
      className="h-auto 
       flex px-5 mt-20 md:mt-30 w-full justify-center"
    >
      <div ref={ref} className="w-full">
        {/* Title Animation */}
        <motion.h1
          className="font-semibold text-7xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Expertise
        </motion.h1>

        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-3/4">
            {expertiseData.map((item, index) => (
              <motion.div
                key={index}
                className="border-2 py-10 px-8"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <div className="flex items-center gap-5 mb-4">
                  {item.icon}
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                </div>

                <span className="text-pink-400 text-sm">&lt;h3&gt;</span>
                <div className="border-l p-2 ml-5 border-gray-500">
                  <p className="text-md">{item.description}</p>
                </div>
                <span className="text-pink-400 text-sm">&lt;/h3&gt;</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Image Animation */}
        <motion.div
          className="flex justify-center relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.2 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png"
            className="absolute scale-75 top-[-140px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Expertise;
