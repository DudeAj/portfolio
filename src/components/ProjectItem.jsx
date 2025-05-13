import React from "react";

const ProjectItem = ({ item }) => {
  const classname = `w-full flex justify-between transition-all duration-300 flex-col h-full bg-[#1b1919] row-span-${item.row} col-span-${item.col} rounded group hover:cursor-pointer`;
  return (
    <a href={item.website} target="_blank" className={classname}>
      <div className="h-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 rounded group-hover:scale-105"
          src={item.image}
        />
      </div>
      <div className="px-5 py-2">
        <h2 className="font-semibold">{item.title}</h2>
        <a className="flex py-1 text-xs items-center gap-1 relative ease-in-out transition-all h-7 duration-500 overflow-hidden">
          <p className="capitalize cursor-pointer top-1 duration-300 transition-all group-hover:-top-6 absolute">
            {item.type}
          </p>
          <p className="capitalize cursor-pointer top-8 group-hover:top-1 duration-300 transition-all absolute flex items-center gap-2">
            Show Project <div className="border-b-[0.5px] w-8"></div>
          </p>
        </a>
      </div>
    </a>
  );
};

export default ProjectItem;
