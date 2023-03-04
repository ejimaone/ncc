import React from "react";

function Search() {
  return (
    <div>
      <div className="lg:flex mt-5 lg:mt-10 lg:w-[88%]  lg:gap-10 lg:mx-auto ">
        <div className="mx-auto h-12  w-[88%] relative lg:w-[70%]  ">
          <input
            placeholder="Search by exam number or name"
            className="border-2 w-full h-full rounded shadow pl-5 py-5"
          />
          <div className=" absolute top-1/2 -translate-y-1/2 right-4 lg:absolute ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="w-5 h-5 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mx-auto w-[88%]  mt-4 lg:flex lg:gap-6  lg:justify-between lg:mt-0">
          <select className="w-full border-2 h-12 rounded shadow pl-4 lg:w-[30%] lg:pl-2">
            <option value="select years" disabled selected>
              select years
            </option>
            <option id="years">2024</option>
            <option id="years">2025</option>
            <option id="years">2026</option>
            <option id="years">2027</option>
          </select>
          <button className="w-full bg-blue-500 mt-4 h-14 rounded text-white lg:mt-0 lg:w-fit lg:px-8">
            Add Candidate
          </button>
        </div>
      </div>
      <div className="w-screen   mt-5 mb-2 lg:mt-10 ">
        <div className=" overflow-x-scroll w-screen  mx-auto h-80">
          <table className="border-collapse w-full text-center relative ">
            <thead className="bg-gray-100 border-[0.75px] border-zinc-300">
              <tr>
                <th className="h-16  whitespace-nowrap px-6">
                  Registration Number
                </th>
                <th className="px-6">SURNAME</th>
                <th className="px-6">FIRSTNAME</th>
                <th className="px-6">MIDDLENAME</th>
                <th className="px-6">STATUS</th>
                <th className="px-6">ACTION</th>
              </tr>
            </thead>
            <tbody className=" border-[0.75px] border-zinc-300 ">
              <tr className="relative ">
                <td className="h-16">18391831</td>
                <td>Yusuf</td>
                <td>Abdulwahab</td>
                <td>Onozutu</td>
                <td>Pending</td>
                <td className="text-4xl absolute right-[5%] ">...</td>
              </tr>
            </tbody>
            <tbody className="border-[0.75px] border-zinc-300">
              <tr className="relative">
                <td className="h-16">9018382</td>
                <td>Yusuf</td>
                <td>Latifat</td>
                <td>Ovayioza</td>
                <td>Pending</td>
                <td className="text-4xl absolute right-[5%] ">...</td>
              </tr>
            </tbody>
            <tbody className=" border-[0.75px] border-zinc-300 ">
              <tr className="relative">
                <td className="h-16">18391831</td>
                <td>Yusuf</td>
                <td>Abdulwahab</td>
                <td>Onozutu</td>
                <td>Pending</td>
                <td className="text-4xl absolute right-[5%]">...</td>
              </tr>
            </tbody>

            <button className="w-fit border-2 h-10 p-2 text-center absolute left-[8%] rounded-lg mt-3 ">
              Previous
            </button>
            <button className="w-fit border-2  h-10 p-2 text-center absolute right-[3%] rounded-lg mt-3">
              Next
            </button>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Search;
