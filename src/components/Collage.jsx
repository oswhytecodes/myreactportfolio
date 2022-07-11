import React from "react";
import gridData from "../data.js";

export const Collage = () => {
  let images = gridData.gridData.images;
  // remember to add the alt txt
  // collage images
  let image = images.slice(0, 8).map((el, index) => {
    // const imgUrl = new URL(el, import.meta.url).href
    return (
      <img key={index} className="w-36 h-36 object-cover" src={el.img} alt="" />
    );
  });
  // instagram images
  let instagramPosts = images.slice(0, 6).map((el, index) => {
    // const imgUrl = new URL(el, import.meta.url).href
    return (
      <img key={index} className="w-20 h-20 object-cover" src={el.img} alt="" />
    );
  });
  return (
    <section className="pt-20 pb-10 m-auto bg-greyFC/50">

      {/* collage */}
      <h1 className="text-center text-2xl font-serif">
        Here's some of our selected work
      </h1>
      <div className="mt-12 m-auto flex flex-wrap justify-center items-center max-w-[40em] ">
        {image}
      </div>

      {/* quote */}
      <div className="bg-pinkFC mt-20 py-12 text-center">
        <p className="m-auto max-w-[10em] mb-2 text-whiteFC  text-xl font-serif">
          When it comes to growth, you're speaking with the right people.
        </p>
        <a className="text-xs mt-40 text-whiteFC" href="">
          Get Started &gt;{" "}
        </a>
      </div>

      {/* instagram collage */}
      <div className="my-12 w-full m-auto">
        <h1 className="uppercase text-center text-xs ">
          Follow us on instagram: @fosandco
        </h1>
        <div className="flex flex-wrap p-6 justify-center mt-8">{instagramPosts}</div>
      </div>
    </section>
  );
};
