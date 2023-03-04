import React from "react";
import SmallCard from "../dashbord/SmallCard";
import Search from "./Search";

function Candidates() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 lg:w-[92%] mx-auto">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}

export default Candidates;
