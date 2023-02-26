import React from "react";
import { Left } from "../subcomponents/left";
import { Right } from "../subcomponents/right";
import codeImg from "../utils/code.png";

export const Main = () => {
  return (
    <div className=" z-50 ">
      <div
        id="home"
        className="leftcomponent z-30  p-[3rem] lg:p-[1rem] bg-white lg:fixed left-0 top-0 lg:w-[350px]
      lg:h-[90vh] lg:overflow-y-scroll lg:mt-[35px] lg:ml-4"
      >
        <Left></Left>
      </div>
      <div className="lg:fixed px-8  lg:overflow-y-scroll lg:h-[90vh] mt-[3px] lg:mt-[35px] lg:ml-[385px]">
        <div className=" relative">
          <div className="flex flex-col relative">
            <img
              src={codeImg}
              className="h-[90vh] object-cover codeImg"
              alt=""
            />
          </div>
          <div className="absolute top-0 p-5  ">
            <div className="lg:mt-[130px]   mt-[130px] sm:mt-[130px]">
              <h1 className="text-4xl sm:text-5xl font-medium text-white">
                I'M A WEB APPLICATION DEVELOPER, SPECIALIZED IN REACT JS.
              </h1>
            </div>
            <h3 className="text-white text-sm sm:text-base mt-4">
              I'm a Fullstack web developer, i create Fullstack websites using{" "}
              <br></br>
              <span className=" pb-2"> React Js, Express Js and Mongo Db</span>
            </h3>

            <div className="mt-4 mb-7 flex">
              <div className="button-4">Hire Me</div>
              <div className="button-3 ml-4 border-2 border-white bg-slate-300">
                Portfolio
              </div>
            </div>
          </div>
        </div>
        <Right></Right>
      </div>

      {/* Fixed bottom Navigator  */}

      <div className="fixed bg-gray-700 bottom-0 w-[100vw] lg:w-auto  lg:left-[37%] lg:right-[37%] z-50 lg:rounded-xl py-2 shadow-xl">
        <div className="flex justify-center  cursor-pointer">
          <a href="#home">
            <icon className="bi bi-house-down-fill text-white text-3xl hover:text-slate-900"></icon>
          </a>
          <a href="#about">
            <icon className="bi bi-person-lines-fill text-white text-3xl ml-7"></icon>
          </a>

          <a href="#experience">
            <icon className="bi bi-hdd-rack text-white text-3xl ml-7"></icon>{" "}
          </a>

          <a href="#projects">
            <icon className="bi bi-pc-display text-white text-3xl ml-7"></icon>
          </a>
          <a href="#contact">
            <icon className="bi bi-envelope-at-fill text-white text-3xl ml-7"></icon>
          </a>
        </div>
      </div>
      {/* Fixed bottom Navigator  */}
    </div>
  );
};
