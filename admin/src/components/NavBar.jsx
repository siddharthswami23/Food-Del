import React from "react";
import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <div className="w-full h-[10vh] mt-5 p-10 flex items-center justify-between">
      <img src={assets.logo} alt="" />
      <img src={assets.profile_image} alt="" />
    </div>
  );
};

export default NavBar;
