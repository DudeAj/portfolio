import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// const initialData = [
//   {
//     name: "React.js",
//     icons: "./react.svg",
//     color: "#58C4DC",
//     top: 40,
//     left: 100,
//   },
//   {
//     name: "Node.js",
//     icons: "./node-js.svg",
//     color: "#539e43",
//     top: 140,
//     left: 400,
//   },
//   { name: "html", icons: "./html.svg", color: "#f09701", top: 100, right: 500 },
//   { name: "css", icons: "./css.svg", color: "#2aa4f4", top: 80, right: 100 },
//   {
//     name: "javascript",
//     icons: "./javascript.svg",
//     color: "#f7df1e",
//     top: 200,
//     right: 300,
//   },
//   {
//     name: "typescript",
//     icons: "./typescript.svg",
//     color: "#1976d2",
//     top: 300,
//     left: 180,
//   },
//   {
//     name: "mongodb",
//     icons: "./mongodb.svg",
//     color: "#5d4037",
//     bottom: 300,
//     left: 0,
//   },
//   {
//     name: "mysql",
//     icons: "./mysql.svg",
//     color: "#58C4DC",
//     bottom: 200,
//     left: 350,
//   },
//   {
//     name: "tailwind",
//     icons: "./tailwind-css.svg",
//     color: "#009bb8",
//     bottom: 300,
//     right: 150,
//   },
//   {
//     name: "webpack",
//     icons: "./webpack.svg",
//     color: "#81d4fa",
//     bottom: 200,
//     right: 500,
//   },
// ];
const initialData = [
  {
    name: "React.js",
    icons: "./react.svg",
    color: "#58C4DC",
    top: "10%",
    left: "30%",
  },
  {
    name: "Next.js",
    icons: "./next.svg",
    color: "#fff",
    top: "20%",
    left: "45%",
  },
  {
    name: "Node.js",
    icons: "./node-js.svg",
    color: "#539e43",
    top: "15%",
    left: "70%",
  },
  {
    name: "html",
    icons: "./html.svg",
    color: "#f09701",
    top: "18%",
    left: "15%",
  },
  {
    name: "css",
    icons: "./css.svg",
    color: "#2aa4f4",
    top: "22%",
    left: "80%",
  },
  {
    name: "javascript",
    icons: "./javascript.svg",
    color: "#f7df1e",
    top: "38%",
    left: "60%",
  },
  {
    name: "typescript",
    icons: "./typescript.svg",
    color: "#1976d2",
    top: "55%",
    left: "35%",
  },
  {
    name: "mongodb",
    icons: "./mongodb.svg",
    color: "#5d4037",
    top: "55%",
    left: "6%",
  },
  {
    name: "mysql",
    icons: "./mysql.svg",
    color: "#58C4DC",
    top: "75%",
    left: "55%",
  },
  {
    name: "tailwind",
    icons: "./tailwind-css.svg",
    color: "#009bb8",
    top: "65%",
    left: "80%",
  },
  {
    name: "webpack",
    icons: "./webpack.svg",
    color: "#81d4fa",
    top: "75%",
    left: "20%",
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
    <div className="min-h-screen md:h-screen w-full mt-20 md:mt-40 px-5 md:px-20 relative overflow-hidden">
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl md:text-7xl mx-auto w-full md:w-1/2 text-center">
          Technology
        </h1>
      </div>
      <div
        ref={wrapperRef}
        className="relative h-[85vh] w-full md:h-full flex justify-center items-center gap-5 mt-5"
      >
        {/* <div className="w-full md:w-1/2 text-center mt-0 md:-mt-44">
          <p className="text-xl font-semibold mb-10">
            Where design meets frontend engineering
          </p>
          <p className="text-3xl md:text-2xl font-semibold mt-2">
            Accessible, responsive interfaces
          </p>
          <p className="text-3xl md:text-2xl font-semibold mt-2">
            Reusable component systems
          </p>
          <p className="text-3xl md:text-2xl font-semibold mt-16">
            Optimized interaction flows
          </p>
        </div> */}

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
