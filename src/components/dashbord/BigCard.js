import React from "react";
import { FaGitlab } from "react-icons/fa";
function BigCard() {
  return (
    <div>
      <div className="flex flex-col  h-48 w-56  mt-6 ml-6 md:ml-0 md:h-56 rounded-sm outline outline-slate-300 bg-blue-300 text-center items-center justify-around shadow-md  ">
        <div className="h-[30px] w-[30px] bg-green-100 rounded-full flex justify-center items-center mt-4 ">
          <FaGitlab className=" text-green-500 " />
        </div>
        <p>Reduce Debt</p>
        <p className="text-[9px] leading-3 ">
          Click the button below to be able to <br /> quickly select a state and
          reduce <br /> the debt for that state
        </p>
        <button className="w-5/6 bg-green-600 text-white h-8 rounded-sm mb-2 text-sm">
          Reduce Debt
        </button>
      </div>
    </div>
  );
}

export default BigCard;
