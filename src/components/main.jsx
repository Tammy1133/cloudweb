import React from "react";
import { About } from "../subcomponents/about";
import { Footer } from "../subcomponents/footer";
import { Hero } from "../subcomponents/hero";
import { Navbar } from "../subcomponents/navbar";
import { Platform } from "../subcomponents/platform";
import { Pricing } from "../subcomponents/pricing";
import { Services } from "../subcomponents/services";

export const Main = () => {
  return (
    <div className="bg-gray-100 max-w-[100vw] ">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Platform></Platform>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
};
