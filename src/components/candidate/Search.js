import React from "react";
import Table from "./Table";

function Search() {
  const headings = [
    "REGISTRATION NUMBER",
    "SURNAME",
    "FIRSTNAME",
    "MIDDLENAME",
    "STATUS",
    "ACTION",
  ];
  const data = [
    {
      // th: "amount",
      number: "125322",
      surname: "Abdulwahab",
      firstname: "Onozutu",
      lastname: "Yusuf",
      status: "pending",
      action: "...",
    },
    {
      // th: "status",
      number: "125322",
      surname: "Abdulwahab",
      firstname: "Onozutu",
      lastname: "Yusuf",
      status: "pending",
      action: "...",
    },
  ];
  const child = (
    <div className="flex p-1.5">
      <div className="hover:bg-blue-500 hover:text-white  flex justify-start items-center rounded-sm h-1/2 px-1.5 tracking-tight">
        Continue registration
      </div>
    </div>
  );
  return (
    <div>
      <div className="lg:flex mt-5 lg:mt-10  lg:gap-10 lg:mx-auto lg:mr-10 lg:w-[80%] lg:pr-10">
        <div className="mx-auto h-12  w-[88%] relative lg:w-[70%] mb-10 ">
          <label htmlFor="rrr" className=" block mb-2 text-xs">
            Search
          </label>
          <input
            id="rrr"
            placeholder="Search by exam number or name"
            className="border border-gray-300 w-full h-full rounded shadow-sm pl-2 py-2 tracking-tighter  "
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            ariaHidden="true"
            className="w-5 h-5 text-gray-400 absolute top-[59%] translate-y-1/2 right-4 lg:absolute "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </div>

        <div className="mx-auto w-[88%]  mt-4 lg:flex lg:gap-6  lg:justify-between lg:mt-0 ">
          <div>
            <label htmlFor="filter" className="block mb-2 text-xs  lg:pl-4">
              Year
            </label>
            <select
              id="filter"
              className="w-full border-gray-300   h-12 rounded shadow pl-4 lg:w-[90%] lg:pl-2 lg:ml-4"
            >
              <option value="select years" disabled selected>
                select years
              </option>
              <option id="years">2024</option>
              <option id="years">2025</option>
              <option id="years">2026</option>
              <option id="years">2027</option>
            </select>
          </div>
          <button className="w-full bg-blue-500 mt-4 h-14 rounded text-white  lg:w-fit lg:px-8 lg:mt-5">
            Add Candidate
          </button>
        </div>
      </div>
      <Table data={data} headings={headings} child={child} />
    </div>
  );
}

export default Search;
