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
      <nav className="flex justify-center gap-3 md:gap-10 items-center group">
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
