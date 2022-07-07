import React from "react";
import { useState } from "react";
import gridData from "../data.js";
import Photo from "../images/image10.jpg"


export const Grid = () => {
  const [data, setData] = useState({});
  let grid = gridData.gridData.grid;
  console.log(grid.background);

  let gridEl = grid.map((el) => {
    return (
      <div
      key={el.id} 
      className="gridCom flex flex-wrap justify-between flex-row w-full h-96">
        {/* image container */}
        <img className="w-[50%] h-96 object-top object-cover" src={Photo} alt="" />
        {/* text container */}
        <div
        style={{}}
        className="w-[50%] flex flex-col justify-center items-center ">
          <h2 >{el.header}</h2>
          <p className="min-w-[1em]" >{el.text} </p>
        </div>
      </div>
    );
  });

  return <section className="mt-[13.1em] m-auto max-w-[70em]">{gridEl}</section>;
};
