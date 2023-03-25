import React, { useState } from "react";
import logo from "../utils/logo-no-background.png";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaArtstation,
  FaUsersCog,
  FaCreativeCommonsNc,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Header from "../Header";

function Nav() {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  return (
    <>
      <div
        className={`w-64 h-screen bg-blue-400 fixed z-50 transition-all ${
          isMenuClosed ? "translate-x-[-130%]" : "translate-x-[-0%]"
        } lg:translate-x-0 lg:w-[190px]`}
      >
        <div>
          <button className="text-3xl fixed -right-12  top-5 shadow-2xl text-white lg:hidden">
            <AiOutlineClose
              onClick={() => {
                setIsMenuClosed(true);
              }}
            />
          </button>
        </div>
        <div>
          <div className=" flex flex-col gap-8 pt-16 text-white">
            <div className="h-14 w-14  bg-white rounded-full  relative mb-2 ml-14">
              <img
                src={logo}
                alt="logo"
                className=" mx-auto h-[65px] w-[65px] absolute top-1/2 left-[49%] translate-x-[-50%] translate-y-[-50%]"
              />
            </div>
            <div className=" flex  px-5  items-center gap-3">
              <FaArtstation />
              <p>
                <NavLink
                  onClick={() => {
                    setIsMenuClosed(true);
                  }}
                  to="/dashbord"
                >
                  Dashbord{" "}
                </NavLink>
              </p>
            </div>
            <div className=" flex px-5 items-center gap-3 ">
              <FaUsersCog />
              <p>
                <NavLink
                  onClick={() => {
                    setIsMenuClosed(true);
                  }}
                  to="candidate"
                >
                  Candidates{" "}
                </NavLink>
              </p>
            </div>
            <div className=" flex px-5 items-center gap-3">
              <FaCreativeCommonsNc />
              <p>
                <NavLink
                  onClick={() => {
                    setIsMenuClosed(true);
                  }}
                  to="/transactions"
                >
                  Transactions
                </NavLink>
              </p>
            </div>
            <div className=" flex px-5 items-center gap-3 ">
              <FaChalkboardTeacher />
              <p>Profile</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-screen h-screen bg-[rgb(123,127,137)] fixed z-40 opacity-80 ${
          isMenuClosed ? "translate-x-[-100%]" : "translate-x-[-0%]"
        } lg:hidden`}
      ></div>
      <Header isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
    </>
  );
}

export default Nav;
