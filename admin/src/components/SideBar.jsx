import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="w-full md:w-[18%] min-h-[85vh] border-r-2">
            <div className="flex flex-col gap-10 pl-5 md:pl-[20%] pt-5">
                <NavLink to="/add" className="border-[2px] border-solid p-5 rounded-l-xl flex justify-evenly font-bold text-xl bg-white text-black hover:bg-white/50 hover:border-[#FF4C24]">
                    <img src={assets.add_icon} alt="" />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to="/list" className="border-[2px] border-solid p-5 rounded-l-xl flex justify-evenly font-bold text-xl bg-white text-black hover:bg-white/50 hover:border-[#FF4C24]">
                    <img src={assets.order_icon} alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to="/order" className="border-[2px] border-solid p-5 rounded-l-xl flex justify-evenly font-bold text-xl bg-white text-black hover:bg-white/50 hover:border-[#FF4C24]">
                    <img src={assets.order_icon} alt="" />
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    );
};

export default SideBar;
