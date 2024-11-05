import { useState } from "react";
import { assets } from "../../assets/images/assets";

const Navbar = () => {
  const [Menu, setMenu] = useState("home");
  return (
    <div className="mt-5 w-full h-[10vh] px-40 flex items-center justify-between text-white">
      <img
        className="h-10 hover:scale-110 transition-colors duration-300"
        src={assets.logo}
        alt="Logo"
      />
      <div className="flex gap-10 capitalize">
        <a
          href="#"
          onClick={() => {
            setMenu("home");
          }}
          className={
            Menu == "home"
              ? "hover:text-orange-500 text-[#495576] transition-colors duration-300 text-2xl underline"
              : "hover:text-orange-500 text-[#495576] transition-colors duration-300 text-2xl"
          }
        >
          home
        </a>
        <a
          href="#"
          onClick={() => {
            setMenu("mobile-app");
          }}
          className={
            Menu == "mobile-app"
              ? "hover:text-orange-500 text-[#495576] transition-colors duration-300 text-2xl underline"
              : "hover:text-orange-500 text-[#495576] transition-colors duration-300 text-2xl"
          }
        >
          mobile-app
        </a>
        <a
          href="#"
          onClick={() => {
            setMenu("contact-us");
          }}
          className={
            Menu == "contact-us"
              ? "hover:text-orange-500 text-[#495576] transition-colors duration-300 text-2xl underline"
              : "hover:text-orange-500 text-[#495576] transition-colors duration-300 text-2xl"
          }
        >
          contact-us
        </a>
      </div>
      <div className="flex gap-10 items-center">
        <img
          className="h-6 cursor-pointer"
          src={assets.search_icon}
          alt="Search"
        />
        <img
          className="h-6 cursor-pointer"
          src={assets.basket_icon}
          alt="Basket"
        />
        <button className="px-10 py-3 rounded-3xl text-xl font-bold tracking-wide capitalize bg-white text-[#495576] hover:bg-orange-500 hover:text-white transition-colors duration-300">
          sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;