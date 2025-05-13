import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const initialData = [
  {
    name: "React.js",
    icons: "./react.svg",
    color: "#58C4DC",
    top: 40,
    left: 100,
  },
  {
    name: "Node.js",
    icons: "./node-js.svg",
    color: "#539e43",
    top: 140,
    left: 400,
  },
  { name: "html", icons: "./html.svg", color: "#f09701", top: 100, right: 500 },
  { name: "css", icons: "./css.svg", color: "#2aa4f4", top: 80, right: 100 },
  {
    name: "javascript",
    icons: "./javascript.svg",
    color: "#f7df1e",
    top: 200,
    right: 300,
  },
  {
    name: "typescript",
    icons: "./typescript.svg",
    color: "#1976d2",
    top: 300,
    left: 180,
  },
  {
    name: "mongodb",
    icons: "./mongodb.svg",
    color: "#5d4037",
    bottom: 300,
    left: 0,
  },
  {
    name: "mysql",
    icons: "./mysql.svg",
    color: "#58C4DC",
    bottom: 200,
    left: 350,
  },
  {
    name: "tailwind",
    icons: "./tailwind-css.svg",
    color: "#009bb8",
    bottom: 300,
    right: 150,
  },
  {
    name: "webpack",
    icons: "./webpack.svg",
    color: "#81d4fa",
    bottom: 200,
    right: 500,
  },
];

const Technology = () => {
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.3 });

  const [isFloating, setIsFloating] = useState(false);

  const generateFloatingAnimation = () => ({
    // y: [Math.random() * 20 - 10, Math.random() * 20 - 10],
    // x: [Math.random() * 20 - 10, Math.random() * 20 - 10],
    y: [5, -5], // Moves slightly up and down
    x: [5, -5], // Moves slightly left and right
    transition: {
      duration: 2 + Math.random() * 2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  });

  return (
    <div className="h-screen w-full px-20 relative overflow-hidden">
      <div className="flex justify-center">
        <h1 className="font-bold text-7xl w-1/2 text-center">Technology</h1>
      </div>
      <div
        ref={wrapperRef}
        className="relative w-full h-full flex justify-center items-center gap-5 mt-5"
      >
        <div className="w-1/2 text-center -mt-44">
          <p className="text-xl font-semibold">A growing library of</p>
          <p className="text-6xl font-semibold mt-2">1,150 apps</p>
          <p className="text-6xl font-semibold mt-2">405,800 screens</p>
          <p className="text-6xl font-semibold mt-16">81,700 flows</p>
        </div>

        {initialData.map((item, index) => (
          <motion.span
            key={index}
            className="absolute p-2 rounded-3xl w-20 h-20"
            style={{
              backgroundColor: item.color,
              // width: "fit-content",
              // height: "fit-content",
              display: "inline-flex",
            }}
            initial={{ left: "50%", top: "50%" }}
            animate={
              isInView
                ? [
                    {
                      left: item.left ?? "auto",
                      top: item.top ?? "auto",
                      right: item.right ?? "auto",
                      bottom: item.bottom ?? "auto",
                      opacity: 1,
                      transition: { duration: 1.5, ease: "easeInOut" },
                    },
                    generateFloatingAnimation(),
                  ]
                : {}
            }
            onAnimationComplete={() => setIsFloating(true)}
          >
            <motion.img
              className="w-16 h-16"
              src={item.icons}
              alt={item.name}
              // animate={isFloating ? generateFloatingAnimation() : {}}
            />
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Technology;
