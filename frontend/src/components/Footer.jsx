import React from "react";
import { assets } from "../assets/images/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10" id="footer">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between p-10">
        <div className="flex flex-col items-center sm:items-start md:w-1/3 mb-10 md:mb-0">
          <img
            src={assets.logo}
            alt="Tomato Company Logo"
            className="mb-6 w-40 scale-110 duration-300 hover:scale-125"
          />
          <p className="text-xl leading-relaxed text-center sm:text-left w-[85%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, porro vel possimus repudiandae exercitationem vitae ab nam, quasi ad inventore unde necessitatibus.
          </p>
          <div className="flex gap-5 mt-6">
            <a href="#" aria-label="Facebook">
              <img
                src={assets.facebook_icon}
                alt="Facebook Icon"
                className="w-12 h-12 hover:opacity-75"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src={assets.twitter_icon}
                alt="Twitter Icon"
                className="w-12 h-12 hover:opacity-75"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src={assets.linkedin_icon}
                alt="LinkedIn Icon"
                className="w-12 h-12 hover:opacity-75"
              />
            </a>
          </div>
        </div>

        <div className="mb-10 md:mb-0 text-center sm:text-left md:w-1/3">
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

        <div className="text-center sm:text-left md:w-1/3">
          <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
          <ul className="space-y-3 text-2xl">
            <li className="hover:text-gray-400 transition-colors">+1-212-458-4879</li>
            <li className="hover:text-gray-400 transition-colors">contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-gray-600" />

      <p className="text-center text-xl text-gray-400">
        Copyright © 2024 Tomato.com - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
