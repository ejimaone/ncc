import React from "react";

import Nav from "./nav/Nav";

import { Outlet } from "react-router-dom";

function MainNavigation() {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
}

export default MainNavigation;
