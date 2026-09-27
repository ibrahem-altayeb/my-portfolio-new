import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full pt-20   ">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#222]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" text-4xl font-bold">
            <p>Hello, I'm Ibrahim. Nice to meet you!</p>
          </div>
          <div>
            <p>
              I'm a passionate Front-End Developer who enjoys creating responsive, modern, and user-friendly web applications. I love turning ideas into functional and engaging digital experiences, and I'm always learning and improving my skills through real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
