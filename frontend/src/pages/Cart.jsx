import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { IoClose } from "react-icons/io5";

const Cart = () => {
  const { CartItem, food_list, removeFroCart } = useContext(StoreContext);

  return (
    <div className="text-white min-h-[35vh]">
      <div className="max-w-[75%] mx-auto">
        {/* Grid layout for the header */}
        <div className="w-full mt-5 grid grid-cols-6 text-xl capitalize font-bold py-5 items-center">
          <h1 className="text-center">Items</h1>
          <h1 className="text-center">Title</h1>
          <h1 className="text-center">Price</h1>
          <h1 className="text-center">Quantity</h1>
          <h1 className="text-center">Total</h1>
          <h1 className="text-center">Remove</h1>
        </div>
        <hr className="bg-gray-400 mt-1" />

        {/* Map through food_list and display in grid */}
        {food_list.map((item, index) => {
          if (CartItem[item._id] > 0) {
            return (
              <div
                key={index}
                className="w-full grid grid-cols-6 items-center text-xl capitalize font-bold py-5 bg-red-300 mb-5"
              >
                <div className="flex justify-center">
                  <img className="h-20 w-20 bg-green-500" src={item.image} alt="" />
                </div>
                <h1 className="text-center">{item.name}</h1>
                <h1 className="text-center">{item.price}</h1>
                <h1 className="text-center">{CartItem[item._id]}</h1>
                <h1 className="text-center">
                  {item.price * CartItem[item._id]}
                </h1>
                <div className="flex justify-center">
                  <IoClose
                    className="cursor-pointer"
                    style={{ fontSize: "40px", color: "white" }}
                    onClick={() => removeFroCart(item._id)}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
