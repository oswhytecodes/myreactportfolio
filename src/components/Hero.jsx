import React from "react";
// import { Nav } from "./Nav";
import HeroImage from "/gradient2.png";
import Logo from "/favicon.png";
import Dev from "/orincy.jpg"
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
      <span className="overlay m-auto"> </span>
      {/* header container */}
      <nav className="m-auto relative z-10 flex flex-wrap flex-row justify-center items-center pt-16 lg:px-36 px-12 w-full max-w-[60em] ">
        <ul className="md:flex  items-center justify-end uppercase gap-6 text-whiteFC hidden">
          <a href="">
            <li className="">About</li>
          </a>
          <a href="">
            <li className="">Projects</li>
          </a>
          <a href="">
            <img className="w-20" src={Logo} alt="logo" />
          </a>
          <a href="">
            <li className="">Resume</li>
          </a>
          <a href="">
            <li className="">Contact</li>
          </a>
        </ul>
      </nav>

      {/* hero text  */}

      <div className="heroText relative h-[20em] z-10 mt-56 flex flex-col justify-between items-center">
        <div className="sm:w-3/5 text-center ">
          {/* <img className=" w-40" src={Dev} alt="" /> */}
          <span className="relative font-serif text-2xl text-whiteFC  max-w-[20em] ">
            {" "}
            Frontend Developer | Graphic Designer
          </span>
          <br />
          <a className="text-xs text-whiteFC" href="">
            Get Started &gt;{" "}
          </a>
        </div>

        {/* <div>
          <span className="uppercase text-[.8rem] text-slate-50">Scroll</span>
        </div> */}
      </div>
    </section>
  );
};
