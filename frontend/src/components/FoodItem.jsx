import { assets } from "../assets/images/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ item }) => {
  const { CartItem, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white transition-transform">
      <div className="relative">
        <img
          className="w-full h-52 object-cover rounded-t-xl hover:scale-105"
          src={url + "images/" + item.image}
          alt={item.name}
        />
        {!CartItem[item._id] ? (
          <img
            className="absolute bottom-2 right-2 scale-95 cursor-pointer"
            src={assets.add_icon_white}
            alt="Add item"
            onClick={() => addToCart(item._id)}
          />
        ) : (
          <div className="absolute bottom-2 right-2 cursor-pointer bg-white rounded-full p-2 flex justify-center items-center gap-2">
            <img
              src={assets.remove_icon_red}
              alt="Remove item"
              onClick={() => removeFromCart(item._id)}
            />
            <p className="text-black">{CartItem[item._id]}</p>
            <img
              src={assets.add_icon_green}
              alt="Add more"
              onClick={() => addToCart(item._id)}
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
        </div>
        <p className="text-gray-700 text-sm mb-3">{item.description}</p>
        <h3 className="text-orange-500 text-2xl font-semibold">
          $ {item.price}
        </h3>
      </div>
    </div>
  );
};

export default FoodItem;
