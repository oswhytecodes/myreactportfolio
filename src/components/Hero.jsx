import React from "react";
// import { Nav } from "./Nav";
import HeroImage from "../images/hero.jpg";
import Logo from "../images/logo.png";

export const Hero = () => {
  return (
    <section className="h-full">
        {/* background image */}
      <img
        className="absolute h-[42em] w-screen z-1 object-cover 
        bg-auto bg-top"
        src={HeroImage}
        alt="Hero Image"
      />
      {/* header container */}
      <nav className="relative z-10 flex flex-row justify-between items-center pt-16 lg:px-36 md:px-12 w-full min-w-[10em]">
        <img className="w-40" src={Logo} alt="logo" />
        <ul className="flex items-center justify-end uppercase gap-6 text-whiteFC">
          <li className="">About</li>
          <li className="">Process</li>
          <li className="">Projects</li>
          <li className="">Contact</li>
        </ul>
      </nav>

      {/* hero text  */}

      <div className="relative z-10 heroText mt-48 flex h-full flex-col justify-center items-center">
        <span className="font-serif text-2xl text-center text-whiteFC w-2/5 max-w-[16em]">
          {" "}
          We'll help your business grow trough creative direction and strategic
          branding
        </span>
        <br />
        <a className="text-whiteFC" href="">
          Get Started &gt;{" "}
        </a>

        <span className="text-whiteFC ">Scroll</span>
      </div>
    </section>
  );
};
