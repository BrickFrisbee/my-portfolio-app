import React, { useState, useEffect } from "react";
import CanvasImg from "../assets/canvas_thumbnail.jpg";
import PortfolioImg from "../assets/portfolio.PNG";
import SignupImg from "../assets/Signup_Blank.PNG";
import PowerShellImg from "../assets/powershell.png";
import MessengerImg from "../assets/Messenger_img.png";
import SnifferImg from "../assets/sniffer.png";

const Projects = () => {
  const [showFlag, setShowFlag] = useState(false);
  const [flagOpacity, setFlagOpacity] = useState(1);

  useEffect(() => {
    if (showFlag) {
      setFlagOpacity(1);
      setTimeout(() => {
        setFlagOpacity(0);
        /*begin fade out after 4.5 seconds*/
      }, 4500); 
    }
  }, [showFlag]);

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
                <a href="https://github.com/BrickFrisbee/login-authentication">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Project Repository
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
              <span className="ml-4 text-2xl font-bold text-white tracking-wider">
                Packet Sniffer
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/BrickFrisbee/myfirst_sniffer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Project Repository
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
                <a href="https://github.com/BrickFrisbee/automated-usersetup">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Project Repository
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
                <a href="https://github.com/BrickFrisbee/my-portfolio-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Project Repository
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
                <a href="https://github.com/BrickFrisbee/canvas-lms">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Project Repository
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${MessengerImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative"
          >
            {showFlag && <FlagTooltip opacity={flagOpacity} />}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                .NET Messenger App
              </span>
              <div className="pt-8 text-center">
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <button
                    onClick={() => {
                      setShowFlag(true);
                      setTimeout(() => {
                        setShowFlag(false);
                      }, 5000);
                    }}
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Project Repository
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

function FlagTooltip({ opacity }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "58px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#ff0000",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "0.9rem",
        whiteSpace: "nowrap",
        opacity: opacity,
        transition: "opacity 0.5s", 
        fontWeight: "bold",
      }}
    >
      Private to prevent academic plagarism. Contact for info!
    </div>
  );
}

export default Projects;
