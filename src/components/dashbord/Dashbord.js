import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

function Dashbord() {
  return (
    <div>
      <div className="lg:flex lg:w-[88%] lg:mx-auto gap-14">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div className="md:grid md:grid-cols-2 md:w-[94%] mx-auto lg:grid-cols-3 lg:w-[92%] ">
        <BigCard />
        <BigCard />
        <BigCard />
      </div>
    </div>
  );
}

export default Dashbord;
