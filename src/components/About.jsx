import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#2a3439] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#9b00e8]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Ethan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            I'm a Computer Science major from Arizona State University,
            dedicated to crafting dynamic software from React.js designs, .NET
            frameworks, to Python solutions. Committed to innovation and
            community, I'm keen on pushing tech boundaries. See some of my work
            on GitHub or connect with me on LinkedIn.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
