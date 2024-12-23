import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { IoClose } from "react-icons/io5";

const List = ({ url }) => {
  // console.log(url);
  const [list, setlist] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data);
    if (response.data.success) {
      setlist(response.data.data);
    } else {
      toast.error("Failed to fetch list");
    }
  };

  const removeFood = async (foodid) => {
    // console.log(foodid)
    const response = await axios.post(`${url}/api/food/remove`, { id: foodid });
    await fetchList();
    if (response.data.success) {
      toast.success("food item removed succesfully");
    } else {
      toast.error("error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-10 w-full">
      <h2 className="text-2xl mb-5 font-bold">All Food List</h2>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center p-3 border-b border-gray-300">
          <b className="font-semibold text-xl">Image</b>
          <b className="font-semibold text-xl">Name</b>
          <b className="font-semibold text-xl">Category</b>
          <b className="font-semibold text-xl">Price</b>
          <b className="font-semibold text-xl">Action</b>
        </div>

        {list.map((item, index) => (
          <div
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-4 p-3 border border-gray-200 text-sm"
            key={index}
          >
            <img
              src={`${url}/images/` + item.image}
              alt={item.name}
              className="w-12 h-12 object-cover"
            />
            <p className="text-xl font-semibold">{item.name}</p>
            <p className="text-xl font-semibold">{item.category}</p>
            <p className="text-xl font-semibold">{item.price}</p>
            <IoClose
              className="cursor-pointer"
              style={{ fontSize: "30px", color: "white" }}
              onClick={() => removeFood(item._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
