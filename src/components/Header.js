import React from "react";
import { BiLogOut } from "react-icons/bi";
import BasicPopover from "./utils/OpenPop";
function Header(props) {
  const openMenu = () => {
    props.setIsMenuClosed(false);
  };
  return (
    <div className="lg:w-screen flex justify-between border-b-2 lg:justify-end sticky top-0 bg-white z-20 lg:-ml-9 ">
      <div
        className=" grid place-items-center w-16 border-r-2 lg:hidden "
        onClick={() => openMenu()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-10 w-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          ></path>
        </svg>
      </div>
      <div className=" h-16  w-[83%] flex md:justify-between justify-end items-center md:w-[91%] lg:w-[80%]">
        <p className="hidden md:block">National Common Entrance Examination</p>
        <div className="flex flex-row text-sm">
          <div className="flex flex-col">
            <p>Yusuf Abdulwahab</p>
            <p>johndoe@gmail.com</p>
          </div>
          <BasicPopover
            element={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="h-5 w-5 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            }
          >
            <div className="w-36 h-10 flex items-center justify-center">
              <div className=" flex items-center gap-4 hover:bg-blue-500 w-[95%]  rounded-sm">
                <BiLogOut />
                <p>Logout</p>
              </div>
            </div>
          </BasicPopover>
        </div>
      </div>
    </div>
  );
}

export default Header;
