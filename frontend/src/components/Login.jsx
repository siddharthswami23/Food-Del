import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const Login = ({ setShowLogin }) => {
  const { url, settoken } = useContext(StoreContext);
  // console.log(url);
  const [CurrentState, setCurrentState] = useState("Sign Up");
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const CurrentStateHandler = (CurrentState) => {
    if (CurrentState === "Sign Up") {
      setCurrentState("Log In");
    } else {
      setCurrentState("Sign Up");
    }
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newurl = url;
    if (CurrentState === "Log In") {
      newurl += "api/user/login";
      console.log("login");
    } else {
      newurl += "api/user/register";
    }

    const response = await axios.post(newurl, data);

    if (response.data.success) {
      settoken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-h-screen flex items-center justify-center bg-[#6F6F6F]/30 z-10">
      <form
        autoCapitalize="off"
        onSubmit={onLogin}
        className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] xl:w-[25vw] h-fit py-10 px-5 sm:px-10 md:px-20 flex flex-col gap-5 bg-white rounded-lg shadow-lg"
      >
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold text-left text-black">
            {CurrentState}
          </h1>
          <IoClose
            className="cursor-pointer"
            style={{ fontSize: "40px", color: "black", zIndex: 20 }}
            onClick={() => setShowLogin(false)}
          />
        </div>

        {CurrentState === "Sign Up" ? (
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            placeholder="Your Name"
            required
            className="p-2 text-black border-gray-300 rounded outline-none border focus:border-orange-400"
          />
        ) : (
          ""
        )}
        <input
          type="email"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          placeholder="Your Email"
          required
          className="p-2 text-black border-gray-300 rounded outline-none border focus:border-orange-400"
        />
        <input
          type="password"
          name="password"
          onChange={onChangeHandler}
          value={data.password}
          placeholder="Password"
          required
          className="p-2 text-black border-gray-300 rounded outline-none border focus:border-orange-400"
        />
        <input
          type="submit"
          value={CurrentState === "Sign Up" ? "Sign Up" : "Log In"}
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

        {CurrentState === "Sign Up" ? (
          <p className="text-center text-lg text-black">
            Already have an account?{" "}
            <button
              onClick={() => {
                CurrentStateHandler(CurrentState);
              }}
              href="#"
              className="text-orange-500 hover:underline"
            >
              Login Here
            </button>
          </p>
        ) : (
          <p className="text-center text-lg text-black">
            Create a new account?{" "}
            <button
              onClick={() => {
                CurrentStateHandler(CurrentState);
              }}
              href="#"
              className="text-orange-500 hover:underline"
            >
              Click Here
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
