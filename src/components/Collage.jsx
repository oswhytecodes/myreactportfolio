import React from "react";
import gridData from "../data.js";

export const Collage = () => {
  let images = gridData.gridData.images;
  // remember to add the alt txt
  // collage images
  let image = images.slice(0, 8).map((el, index) => {
    // const imgUrl = new URL(el, import.meta.url).href
    return (
      <img
        key={index}
        className="w-36 h-36 object-cover border-[.001px] border-greyFC/20"
        src={el}
        alt=""
      />
    );
  });
  // instagram images
  let instagramPosts = images.slice(0, 6).map((el, index) => {
    // const imgUrl = new URL(el, import.meta.url).href
    return (
      <img
        key={index}
        className="w-20 h-20 object-cover border-[.001px] border-greyFC/20"
        src={el}
        alt=""
      />
    );
  });
  return (
    <section className=" pb-10 sm:mt-0 mt-36 m-auto bg-[#dfe0eb]">
      {/* quote */}
      <div className="flex p-36 bg-[#dfe0eb] w-full flex-row justify-between gap-6">
        <h1 className="font-bold uppercase text-4xl">my skills</h1>
        <ul>
          <li>Html</li>
          <li>Tailwind</li>
          <li>Figma</li>
        </ul>
        <ul>
          <li>CSS</li>
          <li>React</li>
          <li>Illustrator</li>
        </ul>
        <ul>
          <li>Javascript</li>
          <li>Git/Github</li>
          <li>Photoshop</li>
        </ul>
      </div>

      {/* collage */}
      <div className="p-20 w-full bg-[#C9CDF5] m-auto">
        <h1 className="text-center text-2xl font-serif">
          Here's some of my design work
        </h1>
        <div className="mt-12 m-auto flex flex-wrap justify-center items-center max-w-[40em] ">
          {image}
        </div>
      </div>
      {/* instagram collage */}
      <div className="my-12 w-full m-auto">
        <h1 className="uppercase text-center text-xs ">
          Follow me on instagram:{" "}
          <a href="https://www.instagram.com/oswhytecodes/">@oswhytecodes</a>
        </h1>
        <div className="flex flex-wrap p-6 justify-center mt-2">
          {instagramPosts}
        </div>
      </div>
    </section>
  );
};
