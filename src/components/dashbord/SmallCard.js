import React from "react";
import { IoLogoUsd } from "react-icons/io";
function SmallCard() {
  return (
    <div className=" flex flex-row px-6 w-5/6 md:w-56 md:flex-col md:justify-around  md:items-center h-24 mt-6 bg-purple-300 justify-between  rounded-sm outline outline-slate-300 shadow-md">
      <p className=" mb-1 text-slate-500  self-center">Total Revenue</p>

      <div className="flex  items-center gap-1">
        <div className=" h-[24px] w-[24px] bg-green-100 rounded-full flex justify-center items-center">
          <IoLogoUsd className="text-green-500 " />
        </div>
        <p className="font-semibold">1,204</p>
      </div>
    </div>
  );
}

export default SmallCard;
