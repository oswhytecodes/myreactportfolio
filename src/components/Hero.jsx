import React from "react";
import { Nav } from "./Nav";
import HeroImage from "../images/hero.jpg";

export const Hero = () => {
  return (
    <section>
      <img
        className="absolute -top-2 w-screen -z-10 object-fill 
        bg-auto bg-top"
        src={HeroImage}
        alt=""
      />
      <Nav />
      <div className="flex flex-col justify-center items-center">
        <span className="font-serif text-2xl text-center text-whiteFC w-2/5 min-w=[3em]">
          {" "}
          We'll help your business grow trough creative direction and strategic
          branding
        </span>
        <br />
        <a className="text-whiteFC " href="">
          Get Started &gt;{" "}
        </a>
        <span>Scroll</span>
      </div>
    </section>
  );
};
