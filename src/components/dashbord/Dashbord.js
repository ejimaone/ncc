import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

function Dashbord() {
  return (
    <div>
      <h1 className="ml-8">Dashbord</h1>
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center items-center md:flex-row md:gap-10 md:items-center">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
        <div className="flex h-60 w-[92%] md:w-full overflow-auto md:flex-row  md:overflow-visible   md:gap-10 md:items-center md:justify-center">
          <BigCard />
          <BigCard />
          <BigCard />
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
