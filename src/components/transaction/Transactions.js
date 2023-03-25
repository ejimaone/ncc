import React, { useState } from "react";
import Table from "../candidate/Table";
import BasicModal from "../utils/Modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Transactions() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const headings = [
    "Payer",
    "Reference",
    "RRR",
    "Date Paid",
    "Quantity",
    "Amount",
    "Status",
    "Action",
  ];
  const data = [
    {
      // th: "status",
      Payer: "125322",
      Reference: "Abdulwahab",
      RRR: "Onozutu",
      "Date Paid": "Yusuf",
      Quantity: 5,
      Amount: "20-02-2023, 3:11:54 pm	",
      Status: "Pending",
      Action: "...",
    },
    {
      // th: "status",
      Payer: "125322",
      Reference: "Abdulwahab",
      RRR: "Onozutu",
      "Date Paid": "Yusuf",
      Quantity: 5,
      Amount: "20-02-2023, 3:11:54 pm	",
      Status: "Pending",
      Action: "...",
    },
    {
      // th: "status",
      Payer: "125322",
      Reference: "Abdulwahab",
      RRR: "Onozutu",
      "Date Paid": "Yusuf",
      Quantity: 5,
      Amount: "20-02-2023, 3:11:54 pm	",
      Status: "Pending",
      Action: "...",
    },
    {
      // th: "status",
      Payer: "125322",
      Reference: "Abdulwahab",
      RRR: "Onozutu",
      "Date Paid": "Yusuf",
      Quantity: 5,
      Amount: "20-02-2023, 3:11:54 pm	",
      Status: "Pending",
      Action: "...",
    },
    {
      // th: "status",
      Payer: "125322",
      Reference: "Abdulwahab",
      RRR: "Onozutu",
      "Date Paid": "Yusuf",
      Quantity: 5,
      Amount: "20-02-2023, 3:11:54 pm	",
      Status: "Pending",
      Action: "...",
    },
    {
      // th: "status",
      Payer: "125322",
      Reference: "Abdulwahab",
      RRR: "Onozutu",
      "Date Paid": "Yusuf",
      Quantity: 5,
      Amount: "20-02-2023, 3:11:54 pm	",
      Status: "Pending",
      Action: "...",
    },
  ];
  const child = (
    <div className="flex flex-col h-20 p-1.5">
      <div className="hover:bg-blue-500 hover:text-white  flex justify-start items-center rounded-sm h-1/2 px-1.5 tracking-tight">
        View details
      </div>
      <div className="hover:bg-blue-500 hover:text-white h-1/2 flex justify-start items-center rounded-sm px-1.5  tracking-tight">
        Verify Transaction
      </div>
    </div>
  );
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const closeModal = () => {
    handleCLose0();
  };
  const handleOpen0 = () => {
    setOpen(true);
  };
  const handleCLose0 = () => {
    setOpen(false);
  };
  return (
    <>
      <h1 className=" lg:w-[65%] mx-auto font-semibold text-2xl text-[#333333] mt-3 pl-5 md:pl-12 md:mt-8 lg:pl-0">
        Transactions
      </h1>
      <div className=" flex flex-col md:gap-10  -mt-7 md:-mt-1 lg:gap-8 ">
        <div className=" lg:flex mt-10 lg:mt-10   lg:mx-auto lg:mr-6 lg:w-[81%]  lg:h-10  ">
          <div className="mx-auto h-12  w-[88%] relative lg:w-[28%]  mb-10  ">
            <label htmlFor="rrr" className=" block mb-2 text-xs">
              Search
            </label>
            <input
              id="rrr"
              placeholder="Search by RRR number or Refrence"
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
          <div className="mx-auto w-[88%] mt-4 lg:flex   lg:justify-between lg:mt-0   ">
            <div className="flex gap-2 flex-col lg:flex-row lg:gap-0">
              <div>
                <label htmlFor="filter" className="block mb-2 text-xs  lg:pl-4">
                  Status
                </label>
                <select
                  id="filter"
                  className="w-full border-gray-300   h-12 rounded shadow pl-4 lg:w-[73%] lg:pl-2 lg:ml-4"
                  onChange={handleChange}
                >
                  <option selected disabled>
                    filter by
                  </option>
                  <option>All</option>
                  <option>Successful</option>
                  <option>Pending</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block mb-2 text-xs  ">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full  border-gray-300 h-12 pr-2  lg:mt-0 rounded shadow pl-4 lg:w-[77%] lg:pl-2 "
                />
              </div>
            </div>
            <div className="lg:flex  gap-2 lg:mt-4 lg:mr-8">
              <BasicModal
                element={
                  <button className="w-full  border border-blue-600  mt-4 h-14 rounded text-blue-500 lg:mt-0 lg:w-fit lg:px-8">
                    Verify bank payment
                  </button>
                }
                handleOpen0={() => setOpen2(true)}
                handleCLose0={() => setOpen2(false)}
                open={open2}
              >
                <div className="w-[90%] h-[80%] flex flex-col justify-evenly ">
                  <div className="flex justify-between -mt-4">
                    <h1 className=" tracking-tight text-xl font-bold">
                      Verify Transaction
                    </h1>
                    <span onClick={closeModal}>
                      <AiOutlineCloseCircle
                        className="text-2xl"
                        onClick={() => setOpen2(false)}
                      />
                    </span>
                  </div>
                  <div>
                    <p className="mb-2"> Registration Quota</p>
                    <input
                      placeholder="Enter RRR Number"
                      className="p-2 w-full bg-gray-300 rounded h-14 pl-5"
                    />
                  </div>
                  <button
                    className="h-14 w-full bg-blue-500 rounded text-white"
                    onClick={() => {
                      setOpen2(false);
                    }}
                  >
                    Validate
                  </button>
                </div>
              </BasicModal>
              <BasicModal
                element={
                  <button className="w-full bg-blue-500 mt-4 h-14 rounded text-white lg:mt-0 lg:w-fit lg:px-8 tracking-tighter">
                    Make Payment
                  </button>
                }
                handleOpen0={handleOpen0}
                handleCLose0={handleCLose0}
                open={open}
              >
                <div className="w-[90%] h-[80%] flex flex-col justify-evenly">
                  <div className="flex justify-between">
                    <h1 className=" tracking-tight font-bold text-xl">
                      Make Payment for Registration
                    </h1>
                    <span onClick={closeModal}>
                      <AiOutlineCloseCircle
                        className="text-2xl"
                        onClick={() => setOpen(false)}
                      />
                    </span>
                  </div>
                  <p>Registration Quota</p>
                  <input
                    type="number"
                    placeholder="Enter Quantity"
                    className="p-2 w-full bg-gray-300 rounded h-14 pl-5"
                  />
                  <button
                    className="h-14 w-full bg-blue-500 rounded text-white"
                    onClick={handleCLose0}
                  >
                    Make payment
                  </button>
                </div>
              </BasicModal>
            </div>
          </div>
        </div>
        <Table headings={headings} data={data} child={child} />
      </div>
    </>
  );
}

export default Transactions;
