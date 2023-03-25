import React from "react";
import SmallCard from "../dashbord/SmallCard";
import Search from "./Search";

function Candidates() {
  return (
    <>
      <h1 className=" lg:w-[71%] mx-auto font-semibold text-2xl text-[#333333] mt-3 pl-6 md:pl-12 md:mt-8 lg:pl-10 ">
        Candidates
      </h1>

      <div>
        <div className="mt-5 lg:flex lg:gap-7 lg:w-[80%] md:w-[93%] md:mr-3 mx-auto lg:justify-center   lg:mr-10 md:flex md:gap-3  md:justify-center md:pr-10 ">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
        <div className="">
          <Search />
        </div>
      </div>
    </>
  );
}

export default Candidates;
