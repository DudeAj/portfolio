import { useState } from "react";

const Header = () => {
  const [menus] = useState([
    { text: "home", to: "" },
    { text: "expertise", to: "expertise" },
    { text: "work", to: "work" },
    { text: "experience", to: "experience" },
    { text: "contact", to: "contact" },
  ]);

  return (
    <div className="px-3 md:px-10 py-4 md:py-8 flex flex-col relative items-center justify-center">
      <p className="absolute text-4xl font-bold left-5 md:left-10">
        <span className="text-sky-300">dev</span>
        <span>.Ajay</span>
        <span className="text-purple-500">_</span>
      </p>
      <div className="w-full flex md:hidden justify-end">
        <svg
        className="cursor-pointer"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Menu_Fries">
            <path d="M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"></path>
            <path d="M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"></path>
            <path d="M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"></path>
          </g>
        </svg>
      </div>
      <nav className="hidden md:flex justify-center gap-3 md:gap-10 items-center group">
        {menus.map((item, i) => (
          <a href={`#${item.to}`} key={i}>
            <div className="text-lg font-semibold relative text-white group-hover:text-zinc-500 hover:text-white transition-colors duration-300">
              <span className="absolute right-0 text-[10px] -top-2">
                0{i + 1}
              </span>
              / / {item.text}
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
