import React from "react";
import gridData from "../data.js";

export const Grid = () => {
  let grid = gridData.gridData.grid;
  let gridEl = grid.map((el) => {
    // const imgUrl = new URL(el.img, import.meta.url).href;
    return (
      <div
        key={el.id}
        className="gridCom flex flex-wrap justify-between flex-row w-full h-96"
      >
        {/* image container */}
        <img
          className="w-[50%] h-96 object-cover"
          src={el.img}
          alt="hey hey heyy"
        />
        {/* text container */}
        <div
          style={{ backgroundColor: el.color }}
          className="w-[50%] p-2 flex flex-col justify-center items-center  "
        >
          <h2 className="uppercase text-xs text-whiteFC">{el.header}</h2>
          <p className="max-w-[11em] text-slate-500 mt-4 text-xl font-serif text-center">
            {el.text}{" "}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section className="sm:-mt-4 mt-[1em] m-auto max-w-[60em]">
      {/* quote */}
      <div className="bg-[#dfe0eb] pt-32 pb-20  text-center">
        <p className="m-auto max-w-[35em] text-lg font-serif">
          I am a Frontend Developer based in the US, ready to get my feet wet in
          the tech industry. I am a quick learner, creative and constantly
          building. My strongest skills involve me creating and building design
          layouts and graphics. Consider me when searching for a creative
          developer.
        </p>
      </div>
      {gridEl}
    </section>
  );
};
