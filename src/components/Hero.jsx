import React from "react";
// import { Nav } from "./Nav";
import HeroImage from "../public/hero.jpg";
import Logo from "../public/logo.png";

export const Hero = () => {
  return (
    <section className="h-full">
      {/* background image */}
      <img
        className="absolute h-[42em] max-w-[60em] w-full z-1 object-cover 
        bg-auto bg-top"
        src={HeroImage}
        alt="Hero Image"
      />
      {/* header container */}
      <nav className="m-auto relative z-10 flex flex-wrap flex-row justify-between items-end pt-16 lg:px-36 px-12 w-full max-w-[60em] ">
        <img className="w-40" src={Logo} alt="logo" />
        <ul className="md:flex  items-center justify-end uppercase gap-6 text-whiteFC hidden">
          <li className="">About</li>
          <li className="">Process</li>
          <li className="">Projects</li>
          <li className="">Contact</li>
        </ul>
      </nav>

      {/* hero text  */}

      <div className="heroText relative h-[20em] z-10 mt-56 flex flex-col justify-between items-center">
        <div className="sm:w-2/5 text-center ">
          <span className="font-serif text-2xl text-whiteFC  max-w-[20em] ">
            {" "}
            We'll help your business grow trough creative direction and
            strategic branding
          </span>
          <br />
          <a className="text-xs text-whiteFC" href="">
            Get Started &gt;{" "}
          </a>
        </div>

        <div>
          <span className="uppercase text-[.8rem] text-slate-50">Scroll</span>
        </div>
      </div>
    </section>
  );
};
