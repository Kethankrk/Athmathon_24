import React from "react";
import Wave from "../Components/lottie/wave-anime.json";

import { StickyNavbar } from "../Components/Nav/Navbar";
import { Outlet } from "react-router-dom";
import Lottie from "lottie-react";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-cyan-200 to-slate-50 relative flex justify-between  flex-col  ">
      <StickyNavbar />
      <Outlet />
      <Lottie animationData={Wave} className=" absolute bottom-0 w-full " />
    </div>
  );
};

export default Layout;
