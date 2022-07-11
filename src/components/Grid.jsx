import React from "react";
import gridData from "../data.js";

export const Grid = () => {
  let grid = gridData.gridData.grid;
  let gridEl = grid.map((el) => {
    const imgUrl = new URL(el.img, import.meta.url).href;
    return (
      <div
        key={el.id}
        className="gridCom flex flex-wrap justify-between flex-row w-full h-96"
      >
        {/* image container */}
        <img
          className="w-[50%] h-96 object-cover"
          src={imgUrl}
          alt="hey hey heyy"
        />
        {/* text container */}
        <div
          style={{ backgroundColor: el.color }}
          className="w-[50%] p-2 flex flex-col justify-center items-center  "
        >
          <h2 className="uppercase text-xs text-whiteFC">{el.header}</h2>
          <p className="max-w-[11em] text-whiteFC mt-4 text-xl font-serif text-center">
            {el.text}{" "}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section className=" sm:mt-[1em] m-auto max-w-[60em]">{gridEl}</section>
  );
};
