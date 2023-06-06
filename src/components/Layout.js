import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
