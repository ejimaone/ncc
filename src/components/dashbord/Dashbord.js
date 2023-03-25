import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

function Dashbord() {
  return (
    <>
      <h1 className=" lg:w-[71%] mx-auto font-semibold text-2xl text-[#333333] mt-3 pl-7 md:pl-12 md:mt-8 lg:pl-10 ">
        Dashbord
      </h1>
      <div className="lg:container lg:flex lg:flex-col lg:items-end  -mt-6 lg:-mt-5 lg:ml-10">
        <div className="pt-5 lg:flex lg:w-[82%] lg:mx-5  gap-14 lg:gap-6 ">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
        <div className="md:grid md:grid-cols-2 md:w-[94%] md:mx-auto  lg:w-[82%] lg:mx-5   lg:flex lg:gap-6">
          <BigCard />
          <BigCard />
          <BigCard />
        </div>
      </div>
    </>
  );
}

export default Dashbord;
