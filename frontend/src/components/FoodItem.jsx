import PropTypes from "prop-types";
import { assets } from "../assets/images/assets";
import { useState } from "react";

const FoodItem = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white transition-transform">
      <div className="relative">
        <img
          className="w-full h-52 object-cover rounded-t-xl hover:scale-105"
          src={item.image}
          alt={item.name}
        />
        {!itemCount ? (
          <img
            className="absolute bottom-2 right-2 scale-95 cursor-pointer"
            src={assets.add_icon_white}
            alt="Add item"
            onClick={() => setItemCount((prev) => prev + 1)}
          />
        ) : (
          <div className="absolute bottom-2 right-2 cursor-pointer bg-white rounded-full p-2 flex justify-center items-center gap-2">
            <img
              src={assets.remove_icon_red}
              alt="Remove item"
              onClick={() => setItemCount((prev) => Math.max(prev - 1))} // Preventing negative item count
            />
            <p className="text-black">{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt="Add more"
              onClick={() => setItemCount((prev) => prev + 1)}
            />
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-2">
          <span className="text-xs text-gray-800">{item.category}</span>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="w-full flex justify-between items-center mb-2">
          <h1 className="font-bold text-black text-2xl">{item.name}</h1>
          <img className="h-5" src={assets.rating_starts} alt="Rating" />{" "}
          {/* Fixed typo here */}
        </div>
        <p className="text-gray-700 text-sm mb-3">{item.description}</p>
        <h3 className="text-orange-500 text-2xl font-semibold">
          $ {item.price}
        </h3>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodItem;
