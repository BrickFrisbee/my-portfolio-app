import React from "react";
import SQL from "../assets/postgresql_logo_icon.png";
import ReactLogo from "../assets/react_logo.png";
import HTML from "../assets/html_logo_emblem.png";
import Java from "../assets/java_logo_icon.png";
import CPP from "../assets/ISO_C++_Logo.svg.png";
import CSharp from "../assets/c__logo-removebg.png";
import NET from "../assets/asp.net_logo_minimal.png";
import Apache from "../assets/apache_logo_emblem-removebg.png";
import Python from "../assets/python_logo_icon.png";
import Github from "../assets/github_white.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      {/*Container: */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#9e11f7]">
            Skills
          </p>
          <p className="py-4">
            # Below are a few of the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="mt-[10px] w-20 mx-auto"
              src={Github}
              alt="Github icon"
            />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="my-[10px] w-20 mx-auto"
              src={Java}
              alt="Java icon"
            />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mt-[10px] w-20 mx-auto" src={SQL} alt="SQL icon" />
            <p className="my-4">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mt-10 w-20 mx-auto" src={Apache} alt="Apache icon" />
            <p className="my-4">Apache</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mt-2 w-20 mx-auto" src={CPP} alt="CPP icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mt-3 w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="mt-[22px]">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mt-[30px] w-20 mx-auto" src={NET} alt="NET icon" />
            <p className="mt-[46px] my-4">ASP .NET</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mt-[20px] w-20 mx-auto" src={ReactLogo} alt="React icon" />
            <p className="my-4">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
