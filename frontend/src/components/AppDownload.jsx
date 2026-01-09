import React from "react";
import { assets } from "../assets/images/assets";

const AppDownload = () => {
  return (
    <div id="app-download" className="w-full flex flex-col items-center justify-center py-16 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-white text-center font-regular leading-relaxed mb-8">
        For Better Experience Download <br /> Tomato App
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[70px]">
        <img
          src={assets.app_store}
          alt="App Store"
          className="w-32 md:w-48 h-auto cursor-pointer rounded-3xl duration-300 scale-100 hover:scale-110 border-solid border-[2px] border-white"
        />
        <img
          src={assets.play_store}
          alt="Play Store"
          className="w-32 md:w-48 h-auto cursor-pointer rounded-3xl duration-300 scale-100 hover:scale-110 border-solid border-[2px] border-white"
        />
      </div>
    </div>
  );
};

export default AppDownload;