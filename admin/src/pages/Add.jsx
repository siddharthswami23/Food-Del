import React, { useState } from "react";
import { assets } from "../assets/assets";

const Add = () => {
  const [image, setimage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    description: "",
    category: "",
    price: "Salad",
  });

  return (
    <div className="w-[80%] sm:w-[70%] md:w-[60%] ml-[5vw] mt-10 p-8 shadow-lg rounded-xl bg-gray-800 text-white">
      <form
        action=""
        method="post"
        className="flex flex-col items-start space-y-6"
      >
        <div className="flex flex-col w-full">
          <p className="mb-2 text-lg font-semibold ">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer flex justify-center">
            <img
              src={assets.upload_area}
              alt="Upload Area"
              className="w-full h-40 object-fill border-2 border-dashed border-gray-400 rounded-lg "
            />
          </label>
          <input type="file" name="image" id="image" hidden required />
        </div>

        <div className="flex flex-col w-full">
          <p className="mb-2 text-lg font-semibold">Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter Product Name"
            className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col w-full">
          <p className="mb-2 text-lg font-semibold">Product Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Write the product description"
            className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex space-x-6 w-full">
          <div className="flex flex-col w-1/2">
            <p className="mb-2 text-lg font-semibold">Product Category</p>
            <select
              name="category"
              className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="mb-2 text-lg font-semibold">Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="$20"
              className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="self-center px-8 py-3 mt-6 text-white bg-blue-500 rounded-lg transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default Add;
