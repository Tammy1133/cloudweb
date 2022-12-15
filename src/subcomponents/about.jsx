import React from "react";

export const About = () => {
  return (
    <div>
      <div id="about" className="py-32 px-5 mt-20 md:mt-9">
        <div className="text-center">
          <h3 className="md:text-4xl text-2xl uppercase md:w-[60%] md:mx-auto font-bold">
            Trusted by developers across the world
          </h3>
          <p className="my-5  md:mt-10 text-xl text-gray-500 lg:w-[70%] lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe
            quae, ab numquam fuga soluta voluptate. Animi saepe tempora hic,
            expedita nobis assumenda quam.
          </p>
        </div>
        <div className="grid md:grid-cols-3 w-full text-center gap-5">
          <div className=" mt-14 border rounded-xl py-5 shadow-xl">
            <p className="text-indigo-500 text-4xl font-bold">100%</p>
            <p>Completeness</p>
          </div>
          <div className="mt-14 border rounded-xl py-5 shadow-xl">
            <p className="text-indigo-500 text-4xl font-bold">24/7</p>
            <p>Delivery</p>
          </div>
          <div className="mt-14 border rounded-xl py-5 shadow-xl">
            <p className="text-indigo-500 text-4xl font-bold">150k</p>
            <p>Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
