import React from "react";
import { assets } from "../assets/images/assets";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10" id="footer">
      <div className="container mx-auto flex justify-between p-10">
        <div className="md:w-1/3">
          <img src={assets.logo} alt="Logo" className="mb-6 w-40 scale-110 duration-300  hover:scale-125" />
          <p className="text-xl leading-relaxed w-[85%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, porro vel possimus repudiandae exercitationem vitae ab
            nam, quasi ad inventore unde necessitatibus.
          </p>
          <div className="flex gap-5 mt-6">
            <a href="#">
              <img
                src={assets.facebook_icon}
                alt="Facebook"
                className="w-12 h-12 hover:opacity-75"
              />
            </a>
            <a href="#">
              <img
                src={assets.twitter_icon}
                alt="Twitter"
                className="w-12 h-12 hover:opacity-75"
              />
            </a>
            <a href="#">
              <img
                src={assets.linkedin_icon}
                alt="LinkedIn"
                className="w-12 h-12 hover:opacity-75"
              />
            </a>
          </div>
        </div>

        <div className="md:w-1/3 text-center ">
          <h2 className="text-4xl font-semibold mb-6">Company</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-xl hover:text-gray-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-xl hover:text-gray-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-xl hover:text-gray-400 transition-colors">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="text-xl hover:text-gray-400 transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/3 text-center">
          <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
          <ul className="space-y-3 text-2xl">
            <li className="hover:text-gray-400 transition-colors">
              +1-212-458-4879
            </li>
            <li className="hover:text-gray-400 transition-colors">
              contact@tomato.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-gray-600" />

      <p className="text-center text-xl text-gray-400">
        Copyright © 2024 Tomato.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
