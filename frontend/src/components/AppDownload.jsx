import React from "react";
import { assets } from "../assets/images/assets";

const AppDownload = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 ">
      <h1 className="text-6xl text-center font-regular leading-relaxed mb-8">
        For Better Experience Download <br /> Tomato App
      </h1>
      <div className="w-full flex justify-center gap-[100px]">
        <img
          src={assets.app_store}
          alt="App Store"
          className="w-48 h-auto cursor-pointer rounded-3xl duration-300 scale-125 hover:scale-150 border-solid border-[2px] border-white "
        />
        <img
          src={assets.play_store}
          alt="Play Store"
          className="w-48 h-auto cursor-pointer rounded-3xl duration-300 scale-125 hover:scale-150 border-solid border-[2px] border-white "
        />
      </div>
    </div>
  );
};

export default AppDownload;