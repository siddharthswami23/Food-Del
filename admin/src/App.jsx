import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div className="text-white w-full min-h-screen">
      <ToastContainer />
      <NavBar />
      <hr className="w-[95%] mx-auto" />
      <div className="w-full flex">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
