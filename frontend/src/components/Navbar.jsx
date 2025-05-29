import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/images/assets";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const { token, settoken, setuserid } = useContext(StoreContext);
  const { getTotalAmount } = useContext(StoreContext);
  const [menu, setMenu] = useState("Home");
  const [isProfileHover, setIsProfileHover] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    settoken("");
    setuserid("");
    navigate("/");
  };

  return (
    <div className="mx-10 max-w-full lg:mx-auto lg:max-w-[75%] flex justify-between items-center py-5 px-5 md:px-10">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="h-5 lg:h-10" />
      </Link>

      <ul className="hidden md:flex items-center gap-5 text-lg text-white ">
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

      <div className="flex items-center gap-3 ml-5 lg:ml-0 lg:gap-10">
        <img src={assets.search_icon} alt="Search" className="w-6 h-6" />

        <Link to="/cart">
          <img
            src={assets.basket_icon}
            alt="Cart"
            className="w-6 h-6 relative"
          />
        </Link>
        <div
          className={`${
            getTotalAmount() < 3
              ? "hidden"
              : "w-3 h-3 absolute right-[38%] lg:right-[22%] top-6 bg-orange-400 rounded-full"
          }`}
        ></div>

        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-transparent text-sm lg:text-lg text-white font-bold border border-tomato lg:py-2 px-5 lg:px-7 rounded-full hover:bg-[#fff4f2] hover:text-black cursor-pointer"
          >
            sign in
          </button>
        ) : (
          <div
            className="relative"
            onMouseEnter={() => setIsProfileHover(true)}
            onMouseLeave={() => setIsProfileHover(false)}
          >
            <img
              className="profile-image cursor-pointer"
              src={assets.profile_icon}
              alt="Profile"
            />
            <ul
              className={`${
                isProfileHover ? "flex" : "hidden"
              } absolute cursor-pointer text-black rounded-xl z-[1] right-0 border-2 border-[#FF6347] flex-col justify-center gap-2 bg-white px-8 py-3`}
            >
              <li className="flex gap-2 items-center justify-center text-lg font-semibold whitespace-nowrap hover:text-orange-400">
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className="flex gap-2 items-center justify-center text-lg font-semibold whitespace-nowrap hover:text-orange-400"
              >
                <img src={assets.logout_icon} alt="Log Out" />
                <p>Log Out</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
