import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  // const url = "http://localhost:4000";

  const [image, setImage] = useState(null); // Initialize as null
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("price", Number(formData.price));
    form.append("category", formData.category);
    form.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, form);
      if (response.data.success) {
        setFormData({
          name: "",
          description: "",
          category: "Salad",
          price: "",
        });
        setImage(false);
        toast.success("Product added successfully");
      } else {
        toast.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto mt-10 p-8 shadow-lg rounded-xl bg-gray-800 text-white">
      <form
        onSubmit={onSubmitHandler}
        action=""
        method="post"
        className="flex flex-col items-start space-y-6"
      >
        <div className="flex flex-col w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
          <p className="mb-2 text-lg font-semibold ">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer flex justify-start">
            <img
              src={
                image ? window.URL.createObjectURL(image) : assets.upload_area
              }
              alt="Upload Area"
              className="w-full h-40 object-fill border-2 border-dashed border-gray-400 rounded-lg "
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name="image"
            id="image"
            hidden
            required
          />
        </div>

        <div className="flex flex-col w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
          <p className="mb-2 text-lg font-semibold">Product Name</p>
          <input
            onChange={onChangeHandler}
            value={formData.name}
            type="text"
            name="name"
            placeholder="Enter Product Name"
            className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
          <p className="mb-2 text-lg font-semibold">Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={formData.description}
            name="description"
            rows="6"
            placeholder="Write the product description"
            className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
          <div className="flex flex-col w-full sm:w-1/2">
            <p className="mb-2 text-lg font-semibold">Product Category</p>
            <select
              onChange={onChangeHandler}
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
          <div className="flex flex-col w-full sm:w-1/2">
            <p className="mb-2 text-lg font-semibold">Product Price</p>
            <input
              onChange={onChangeHandler}
              value={formData.price}
              type="number"
              name="price"
              placeholder="$20"
              className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="self-start px-8 py-3 mt-6 text-white bg-blue-500 rounded-lg transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default Add;
