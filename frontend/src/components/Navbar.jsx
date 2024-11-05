import { useState } from "react";
import { assets } from "../assets/images/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [Menu, setMenu] = useState("home");

  const menuItems = [
    { name: "home", link: "#" },
    { name: "mobile-app", link: "#" },
    { name: "contact-us", link: "#" },
  ];

  return (
    <div className="w-full h-[10vh] px-40 flex items-center justify-between text-white">
      <img
        className="h-10 hover:scale-110 transition-transform duration-300"
        src={assets.logo}
        alt="Company Logo"
      />
      <div className="flex gap-10 capitalize">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            onClick={() => setMenu(item.name)}
            className={`hover:text-orange-500 text-[#495576] transition-colors duration-300 text-2xl ${
              Menu === item.name ? "underline" : ""
            }`}
            role="button"
            tabIndex={0}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="flex gap-10 items-center relative">
        <img
          className="h-6 cursor-pointer"
          src={assets.search_icon}
          alt="Search Icon"
        />
        <div className="relative">
          <img
            className="h-6 cursor-pointer"
            src={assets.basket_icon}
            alt="Shopping Basket Icon"
          />
          <div className="w-[15px] h-[15px] bg-orange-600 absolute top-4 right-0 rounded-full flex items-center justify-center text-xs text-white">
            1
          </div>
        </div>
        <button className="px-10 py-3 rounded-3xl text-xl font-bold tracking-wide capitalize bg-white text-[#495576] hover:bg-orange-500 hover:text-white transition-colors duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
