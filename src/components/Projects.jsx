import React from "react";
import CanvasImg from "../assets/canvas_thumbnail.jpg";
import PortfolioImg from "../assets/portfolio.PNG";
import SignupImg from "../assets/Signup_Blank.PNG";
import PowerShellImg from "../assets/powershell.png";
import MessengerImg from "../assets/download.jpg"
import SnifferImg from "../assets/sniffer.png"


const Projects = () => {
  return (
    
    <div
      name="projects"
      className="w-full md:h-screen text-screen text-gray-300 bg-[#2a3439]"
    >
      
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-cetner w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#9b00e8]">
            Projects
          </p>
          <p className="py-6 pb-0"># Check out some of my recent projects</p>
          <p><i>- The Messaging Web Application is school project and is private to prevent plagiarism</i> </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/*Grid Item: */}
          <div
            style={{ backgroundImage: `url(${SignupImg})` }}
            className="shadow-lg shadow-[#040c16] group continer rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects: */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Login Authentication
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item: */}
          <div
            style={{ backgroundImage: `url(${SnifferImg})` }}
            className="shadow-lg shadow-[#040c16] group continer rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects: */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Packet Sniffer
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item: */}
          <div
            style={{ backgroundImage: `url(${PowerShellImg})` }}
            className="shadow-lg shadow-[#040c16] group continer rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects: */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Automated User Setup
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item: */}
          <div
            style={{ backgroundImage: `url(${PortfolioImg})` }}
            className="shadow-lg shadow-[#040c16] group continer rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects: */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                My Portfolio Site
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item: */}
          <div
            style={{ backgroundImage: `url(${CanvasImg})` }}
            className="shadow-lg shadow-[#040c16] group continer rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects: */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Self Hosted Canvas
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item: */}
          <div
            style={{ backgroundImage: `url(${MessengerImg})` }}
            className="shadow-lg shadow-[#040c16] group continer rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects: */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                .NET Messenger App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Projects;
