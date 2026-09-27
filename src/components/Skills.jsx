import React from "react";
import { mySkills } from "../data/skills";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full pt-20">
      {/* Container */}
      <div className=" container p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#222] ">
            Skills
          </p>
          <p className="py-4"> Some of the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4  gap-8 text-center py-8 mt-8">
          {mySkills?.map((skill) => (
            <div
              key={skill.id}
              className=" flex flex-col items-center justify-center newM hover:scale-90 duration-300 p-2 pt-8 rounded-lg "
            >
              <img
                className="w-14 mx-auto"
                src={skill.image}
                alt={skill.name}
              />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
