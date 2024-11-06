import React from "react";
import { IoClose } from "react-icons/io5";

const Login = ({ setShowLogin }) => {
    
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ name, email, password });
  };

  return (
    <div className="text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen flex items-center justify-center bg-[#6F6F6F]/30 z-10">
      <form
        onSubmit={handleSubmit}
        className="w-[25vw] h-fit py-10 px-20 flex flex-col gap-5 bg-white rounded-lg shadow-lg"
      >
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold text-left text-black">Sign up</h1>
          <IoClose
            className="cursor-pointer"
            style={{ fontSize: "40px", color: "black", zIndex: 20 }}
            onClick={() => setShowLogin(false)}
          />
        </div>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-2 text-black border-gray-300 rounded outline-none border focus:border-orange-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-2 text-black border-gray-300 rounded outline-none border focus:border-orange-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="p-2 text-black border-gray-300 rounded outline-none border focus:border-orange-400"
        />
        <input
          type="submit"
          value="Create Account"
          className="bg-orange-500 text-white p-2 rounded cursor-pointer hover:bg-orange-600"
        />
        
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            required
            className="w-5 h-5 accent-orange-500 border-2 border-gray-300 rounded-sm cursor-pointer"
          />
          <label htmlFor="terms" className="text-black text-sm text-nowrap">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>
        
        <p className="text-center text-xl text-black">
          Already have an account?{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
