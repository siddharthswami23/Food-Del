import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/images/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="mx-auto max-w-[75%] flex justify-between items-center py-5 px-5 md:px-10">
      <img src={assets.logo} alt="" className="sm:h-3 lg:h-10" />

      <ul className="hidden md:flex items-center gap-5 text-lg text-[#49557e]">
        <Link
          to="/"
          className={`cursor-pointer ${
            menu === "Home" ? "border-b-2 border-[#49557e] pt-1" : ""
          }`}
          onClick={() => setMenu("Home")}
        >
          Home
        </Link>
        <a
          href="#app-download"
          className={`cursor-pointer ${
            menu === "Mobile-App" ? "border-b-2 border-[#49557e] pt-1" : ""
          }`}
          onClick={() => setMenu("Mobile-App")}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          className={`cursor-pointer ${
            menu === "Contact Us" ? "border-b-2 border-[#49557e] pt-1" : ""
          }`}
          onClick={() => setMenu("Contact Us")}
        >
          Contact Us
        </a>
      </ul>

      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="Search" className="w-6 h-6" />

        <img src={assets.basket_icon} alt="Cart" className="w-6 h-6" />

        <button className="bg-transparent text-lg text-[#49557e] border border-tomato py-2 px-7 rounded-full hover:bg-[#fff4f2] cursor-pointer">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
