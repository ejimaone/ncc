import React from "react";
import BasicPopover from "../utils/OpenPop";

function Table({ data, headings, child }) {
  let pages = new Array(Math.ceil(data.length / 10));
  pages.fill(1);

  return (
    <div>
      <div className="  mt-5 mb-2 md:overflow-x-scroll lg:overflow-x-visible   md:w-[88%] md:mx-auto lg:mt-10 h-full  lg:w-[100%] lg:ml-5">
        <div className=" overflow-x-scroll  md:overflow-x-visible w-screen lg:w-[90%] md:w-[100%]  lg:-mr-2 mx-auto h-full rounded-2xl px-6 md:px-0">
          <table className="border-collapse w-full text-center relative md:w-[86%] md:mx-auto lg:w-[88%]">
            <thead className="bg-gray-100 border-[0.75px] border-zinc-300">
              <tr>
                {headings?.map((heading) => {
                  return (
                    <th className="h-16  text-left pl-6 pr-2 whitespace-nowrap">
                      {heading}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className=" border-[0.75px] border-zinc-300 ">
              {data?.map((rowValue) => {
                const tableValues = Object.values(rowValue);

                return (
                  <tr className="relative even:bg-gray-100 even:border-zinc-300 even:border-[0.75px]">
                    {tableValues.map((data, index) => {
                      if (tableValues.length - 2 === index) {
                        return (
                          <td className="h-16 text-left pl-6 whitespace-nowrap">
                            <div className="bg-yellow-200 rounded-2xl p-1 w-14 grid place-items-center tracking-tighter text-xs">
                              Pending
                            </div>
                          </td>
                        );
                      }
                      if (tableValues.length - 1 === index) {
                        return (
                          <td className="h-16 " key={index}>
                            <BasicPopover
                              element={
                                <h1 className="text-3xl text-black mb-2 pl-2">
                                  ...
                                </h1>
                              }
                            >
                              {child}
                            </BasicPopover>
                          </td>
                        );
                      }
                      return (
                        <td
                          className="h-16 text-left pl-6 whitespace-nowrap"
                          key={index}
                        >
                          {data}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>

            <button className="w-fit border-2 h-10 p-2 text-center absolute left-[0%] rounded-lg mt-3 md:hidden ">
              Previous
            </button>
            <button className="w-fit border-2  h-10 p-2 text-center absolute right-[0%] rounded-lg mt-3 md:hidden">
              Next
            </button>
            {data.length > 0 && (
              <div className=" gap-9 absolute right-[5%] mt-4 items-center hidden md:flex ">
                <div>
                  <select>
                    <option selected>10 per page</option>
                    <option>20 per page</option>
                    <option>30 per page</option>
                  </select>
                </div>
                <div className="flex  gap-4 items-center">
                  <div className="h-8 w-8 bg-blue-400 rounded-full grid place-items-center">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {pages.map((pag, i) => {
                    return <h1 className=" cursor-pointer">{i + 1}</h1>;
                  })}

                  <div className="h-8 w-8 bg-blue-400 rounded-full grid place-items-center">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
