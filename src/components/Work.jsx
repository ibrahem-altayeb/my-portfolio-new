import React from "react";
import { projects } from "../data/projects.js";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-full pt-20 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-[#222]">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "contain",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 z-[999] transition-all duration-500 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {project.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={project.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>

                  <a href={project.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg"
                    >
                      Preview
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
