import React from "react";
import robot from "../utils/robot.png";
import "../css/main.css";

export const Hero = () => {
  return (
    <div id="hero">
      <div
        className="  relative  flex justify-center  md:justify-start md:px-10 
       md:pt-2 md:items-start items-center h-[95vh] w-full pb-6 lg:px-20 bg-slate-200"
      >
        <div className="grid md:grid-cols-2  items-center  ">
          <div className="flex flex-col font-semibold md:mx-auto  ml-5 ">
            <h3 className="text-lg md:text-2xl">
              Unique Sequencing & Production{" "}
            </h3>
            <h3 className="text-3xl  md:text-5xl lg:text-7xl uppercase mt-1 md:mt-4  font-bold">
              Cloud Management
            </h3>
            <h3 className=" md:text-1xl mt-2 md:mt-5">
              This is our Tech Brand
            </h3>
            <button
              className="button-3 w-44 md:w-64 mt-4
          "
            >
              Get Started
            </button>
          </div>
          <div>
            <img className="w-96 lg:w-full  mx-auto" src={robot} alt="" />
          </div>
        </div>

        <div
          className="otherinfo  p-6 md:px-4 md:py-8 absolute md:w-[80vw]
         bottom-[-20%] md:bottom-[10%] lg:bottom-[-5%]  md:left-[50%] md:ml-[-40vw] bg-zinc-200 shadow-xl
         rounded-xl border border-slate-300"
        >
          <h1 className="text-center font-bold">Data Services </h1>
          <div className=" flex flex-col md:flex-row  font-semibold justify-center items-center ">
            <h3 className="mt-5  md:mx-6 flex items-center">
              <i class=" text-green-600 mr-3 bi bi-x-diamond-fill"></i>App
              Security
            </h3>
            <h3 className="mt-5  md:mx-6 flex items-center">
              <i class=" text-green-600  mr-3 bi bi-card-checklist"></i>{" "}
              Dashboard Design
            </h3>
            <h3 className="mt-5  md:mx-6 flex items-center">
              {" "}
              <i class=" mr-3  text-green-600 bi bi-border-outer"></i> Cloud
              Data
            </h3>
            <h3 className="mt-5  md:mx-6 flex items-center">
              {" "}
              <i class=" mr-3 bi text-green-600  bi-airplane-engines-fill"></i>{" "}
              Api
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
