import React from "react";
import { assets } from "../assets/images/assets";

const AppDownload = () => {
  return (
    <div>
      <h1>For Better Experience Download Tomato App</h1>
      <div className="">
        <img src={assets.app_store} alt="" />
        <img src={assets.play_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
