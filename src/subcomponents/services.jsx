import React from "react";
import clients from "../utils/clients.png";

export const Services = () => {
  return (
    <div className="relative h-[80vh]">
      <div className="absolute">
        <img
          className="object-cover w-[100vw] h-[80vh] brightness-50
          "
          src={clients}
          alt=""
        />
      </div>
      <div className="relative px-6 pt-14 lg:pt-32">
        <h3 className="text-center text-white text-2xl uppercase">Support</h3>
        <h3 className="text-center text-white pt-4 text-3xl font-semibold">
          Finding the right team
        </h3>
        <p className="pt-4 text-sm md:text-xl text-slate-50 lg:w-[50%] lg:mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo autem
          culpa dolor delectus consectetur deserunt ducimus animi odit numquam
          fuga. Neque cumque accusantium voluptas nihil id veniam voluptatibus
          exercitationem molestiae!
        </p>
      </div>
      <div className="absolute top-[80%]  lg:top-[80%] w-full grid lg:grid-cols-3 gap-x-6 gap-y-4 px-10">
        <div className=" p-3  bg-white rounded-xl px-7  shadow-2xl ">
          <div
            className="bg-indigo-700 p-4 text-white rounded-lg mt-[-2.4rem]"
            style={{ width: "fit-content" }}
          >
            <i className="bi bi-phone text-3xl"></i>
          </div>

          <h3 className=" mt-5 font-semibold text-xl uppercase ">Sales</h3>
          <h3 className=" lg:w-[95%] mt-4 text-sm pb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            accusantium aliquid dolorum voluptate possimus eligendi provident
            maiores quia pariatur, fugiat consequuntur esse aperiam ea,
            aspernatur adipisci sit autem facere omnis.
          </h3>
        </div>
        <div className=" p-3  bg-white rounded-xl px-7 shadow-2xl mt-8  lg:mt-0">
          <div
            className="bg-indigo-700 p-4 text-white rounded-lg mt-[-2.4rem]"
            style={{ width: "fit-content" }}
          >
            <i className="bi bi-envelope text-3xl"></i>
          </div>

          <h3 className=" mt-5 font-semibold text-xl uppercase ">Connect</h3>
          <h3 className=" lg:w-[95%] mt-4 text-sm pb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            accusantium aliquid dolorum voluptate possimus eligendi provident
            maiores quia pariatur, fugiat consequuntur esse aperiam ea,
            aspernatur adipisci sit autem facere omnis.
          </h3>
        </div>
        <div className=" p-3  bg-white rounded-xl px-7 shadow-2xl mt-8 lg:mt-0">
          <div
            className="bg-indigo-700 p-4 text-white rounded-lg mt-[-2.4rem]"
            style={{ width: "fit-content" }}
          >
            <i className="bi bi-phone text-3xl"></i>
          </div>

          <h3 className=" mt-5 font-semibold text-xl uppercase ">Support</h3>
          <h3 className=" lg:w-[95%] mt-4 text-sm pb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            accusantium aliquid dolorum voluptate possimus eligendi provident
            maiores quia pariatur, fugiat consequuntur esse aperiam ea,
            aspernatur adipisci sit autem facere omnis.
          </h3>
        </div>
      </div>
    </div>
  );
};
