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
        className="w-36 h-36 object-cover border-[.001px] border-greyFC"
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
        className="w-20 h-20 object-cover border-[.001px] border-greyFC"
        src={el}
        alt=""
      />
    );
  });
  return (
    <section className="pt-20 pb-10 m-auto bg-greyFC/50">
      {/* quote */}
      <div className="bg-[#C9CDF5] py-12 text-center">
        <p className="m-auto max-w-[35em] mb-2 text-lg font-serif">
          I am a Front-End Engineer based in the US, ready to get my feet wet in
          the tech industry. I am a quick learner, creative and constantly
          building. My strongest skills involve me creating and building design
          layouts and graphics. Consider me when searching for a creative
          developer.
        </p>
        <a className="text-xs mt-40 text-whiteFC" href=""></a>
      </div>

      {/* collage */}
      <div className="my-28 w-full m-auto">
        <h1 className="text-center text-2xl font-serif">
          Here's some of my design work
        </h1>
        <div className="mt-12 m-auto flex flex-wrap justify-center items-center max-w-[40em] ">
          {image}
        </div>
      </div>

      {/* quote */}
      <div className="flex p-12 bg-[#C9CDF5] w-full flex-row justify-between gap-6">
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
