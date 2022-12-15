import React, { useState } from "react";
import "../css/main.css";

export const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleBarclose = () => {
    setIsopen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex items-center bg-gray-300 w-[100%] 
       h-20 drop-shadow-lg px-6  "
      >
        <div className="flex items-center cursor-pointer w-full justify-between ">
          <h1 className="text-4xl md:text-5xl font-semibold">BRAND.</h1>
          <ul className=" hidden  md:flex ">
            <a href="#hero" className="decoration-cuent">
              <li className="mynavlink hover:text-indigo-800">Home</li>
            </a>
            <a href="#about" className="decoration-cuent">
              <li className="mynavlink hover:text-indigo-800">About</li>
            </a>
            <a href="#platform" className="decoration-cuent">
              <li className="mynavlink hover:text-indigo-800">Platform</li>
            </a>
            <a href="#pricing" className="decoration-cuent">
              <li className="mynavlink hover:text-indigo-800">Pricing</li>
            </a>
          </ul>
          <i
            onClick={() => {
              setIsopen(!isOpen);
            }}
            class={`bi ${isOpen ? "bi-x" : "bi-list"} mr-3 text-3xl md:hidden`}
          ></i>
          <div className="hidden md:flex">
            <button class="button-4 hidden md:flex mr-4" role="button">
              Login
            </button>
            <button class="button-3 hidden md:flex" role="button">
              Register
            </button>
          </div>
        </div>
      </div>
      <div
        className={`bi ${
          !isOpen && "hidden"
        } absolute bg-gray-300 w-screen px-10 py-5`}
        style={{ zIndex: "7" }}
      >
        <ul className="">
          <a
            href="#hero"
            className="decoration-cuent"
            onClick={() => handleBarclose()}
          >
            <li className="mynavlink2  border-b-2 border-gray-400 pb-4 pl-1 ml-2 ">
              Home
            </li>
          </a>
          <a
            href="#about"
            className="decoration-cuent"
            onClick={() => handleBarclose()}
          >
            <li className="mynavlink2 border-b-2 border-gray-400 pb-4 pl-1 ml-2">
              About
            </li>
          </a>
          <a
            href="#platform"
            className="decoration-cuent"
            onClick={() => handleBarclose()}
          >
            <li className="mynavlink2 border-b-2 border-gray-400 pb-4 pl-1 ml-2">
              Platform
            </li>
          </a>
          <a
            href="#pricing"
            className="decoration-cuent"
            onClick={() => handleBarclose()}
          >
            <li className="mynavlink2 border-b-2 border-gray-400 pb-4 pl-1 ml-2">
              Pricing
            </li>
          </a>
        </ul>
        <div className=" mt-6 my-5 flex flex-col w-full ">
          <button class="button-4  " role="button">
            Login
          </button>
          <button class="button-3  mt-5" role="button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
