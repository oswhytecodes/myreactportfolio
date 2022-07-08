import React from "react";
import { useState } from "react";
import gridData from "../data.js";
import Photo from "../images/image5.jpg";

export const Grid = () => {
  const [data, setData] = useState({});
  let grid = gridData.gridData.grid;
  //   let background = grid.map((el) => el.color);
  //   const styles = {
  //       backgroundColor: { background },
  //     };
  //     console.log(styles);
  let gridEl = grid.map((el) => {
    return (
      <div
        key={el.id}
        className="gridCom flex flex-wrap justify-between flex-row w-full h-96"
      >
        {/* image container */}
        <img className="w-[50%] h-96 object-cover  " src={el.img} alt="" />
        {/* text container */}
        <div
          style={{backgroundColor:el.color}}
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
    <section className=" sm:mt-[1em] m-auto max-w-[60em]">
      {gridEl}
    </section>
  );
};
