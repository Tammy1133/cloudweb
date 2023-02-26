import React from "react";
import image from "../utils/webimage.png";
import image1 from "../utils/profileimg.png";
import { SkillBar } from "react-skills";

export const Left = () => {
  return (
    <div>
      <div className=" rounded-md bg-blue-500 flex items-center flex-col justify-centers">
        <div className=" ">
          <img src={image1} alt="" className=" h-[170px] w-[170px]  " />
        </div>
        <h1 className="text-2xl text-white">Ajayi Oluwatamilore</h1>
        <h1 className="text-lg mb-6 text-white">React Developer</h1>
      </div>

      <div className="mt-3">
        <div className="px-3">
          <div className="flex justify-between">
            <p className="text-lg text-slate-600">Country:</p>
            <p className="text-lg text-slate-600">Nigeria</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg text-slate-600">City:</p>
            <p className="text-lg text-slate-600">Lagos</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg text-slate-600">Age:</p>
            <p className="text-lg text-slate-600">21</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg lg:text-base text-slate-600">
              Qualification:
            </p>
            <p className=" text-sm lg:text-xs text-slate-600">
              BSC(First class Hons)<br></br> Computer Science <br />
              Hallmark university
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <SkillBar name="HTML" level={95} color="blue" labelWidth={80} />
        <div className="mt-6">
          <SkillBar name="CSS" level={90} color="blue" labelWidth={80} />
        </div>
        <div className="mt-6">
          <SkillBar
            name="TAILWIND CSS"
            level={93}
            color="blue"
            labelWidth={120}
          />
        </div>
        <div className="mt-6">
          <SkillBar name="BOOTSTRAP" level={90} color="blue" />
        </div>

        <div className="mt-6">
          <SkillBar name="NEXT JS" level={85} color="blue" />
        </div>
        <div className="mt-6">
          <SkillBar name="JAVASCRIPT" level={85} color="blue" />
        </div>
        <div className="mt-6">
          <SkillBar name="REACT JS" level={90} color="blue" />
        </div>
        <div className="mt-6 ">
          <SkillBar name="REDUX" level={96} color="blue" />
        </div>

        <div className="mt-6 ">
          <SkillBar
            name="EXPRESS JS"
            level={80}
            color="blue"
            labelWidth={120}
          />
        </div>
        <div className="mt-6 ">
          <SkillBar name="MONGODB" level={85} color="blue" />
        </div>
      </div>
      <hr className="mt-10" />
      <h3 className="text-lg font-semibold text-slate-700">Social Profiles</h3>
      <div className="flex  cursor-pointer">
        <icon className="bi bi-facebook text-3xl text-blue-700"></icon>
        <icon className="bi bi-linkedin ml-4 text-3xl text-blue-700"></icon>
        <icon className="bi bi-github ml-4 text-3xl text-blue-700 mb-8 "></icon>
      </div>
    </div>
  );
};
