import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { IoClose } from "react-icons/io5";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { CartItem, food_list, removeFromCart, getTotalAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="text-white min-h-[35vh]">
        <div className="max-w-[95%] lg:max-w-[75%] mx-auto">
          <div className="w-full mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-lg sm:text-xl font-bold py-3 items-center gap-4">
            <h1 className="text-center col-span-2 lg:col-span-1">Items</h1>
            <h1 className="text-center col-span-2 lg:col-span-1">Title</h1>
            <h1 className="hidden md:block text-center col-span-1">Price</h1>
            <h1 className="hidden lg:block text-center col-span-1">Quantity</h1>
            <h1 className="hidden lg:block text-center col-span-1">Total</h1>
            <h1 className="text-center col-span-2 lg:col-span-1">Remove</h1>
          </div>
          <hr className="bg-gray-400 mt-1" />

          {food_list.map((item, index) => {
            if (CartItem[item._id] > 0) {
              return (
                <div
                  key={index}
                  className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center text-lg sm:text-xl font-bold py-3 border-b border-gray-200 mb-2 gap-4"
                >
                  <div className="flex justify-center col-span-2 sm:col-span-1">
                    <img
                      className="h-16 w-16 sm:h-20 sm:w-20 bg-green-500 rounded-md"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <h1 className="text-center col-span-2 sm:col-span-2 lg:col-span-1 text-sm sm:text-base">
                    {item.name}
                  </h1>
                  <h1 className="hidden md:block text-center col-span-1 text-sm sm:text-base">
                    $ {item.price}
                  </h1>
                  <h1 className="hidden lg:block text-center col-span-1 text-sm sm:text-base">
                    {CartItem[item._id]}
                  </h1>
                  <h1 className="hidden lg:block text-center col-span-1 text-sm sm:text-base">
                    $ {item.price * CartItem[item._id]}
                  </h1>
                  <div className="flex justify-center col-span-2 sm:col-span-1 lg:col-span-1">
                    <IoClose
                      className="cursor-pointer"
                      style={{ fontSize: "30px", color: "white" }}
                      onClick={() => {
                        removeFromCart(item._id);
                      }}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="mx-auto max-w-[95%] lg:max-w-[75%] flex flex-col lg:flex-row items-center justify-between p-5 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-[30vw] p-5 capitalize bg-gray-900 rounded-lg shadow-lg">
            <h1 className="text-4xl sm:text-5xl font-bold capitalize mb-5">
              Cart Total
            </h1>
            <div className="flex w-full justify-between py-3 sm:py-5 text-lg sm:text-xl">
              <p>Subtotal</p>
              <p>$ {getTotalAmount()}</p>
            </div>
            <hr />
            <div className="flex w-full justify-between py-3 sm:py-5 text-lg sm:text-xl">
              <p>Delivery fee</p>
              <p>$ 2</p>
            </div>
            <hr />
            <div className="flex w-full justify-between py-3 sm:py-5 text-lg sm:text-xl">
              <p>Total</p>
              <p>${getTotalAmount() + 2}</p>
            </div>

            <button
              onClick={() => {
                navigate("/order");
              }}
              className="w-full p-3 capitalize text-lg font-bold mt-5 rounded-lg bg-orange-500 hover:bg-orange-600 transition-all"
            >
              Proceed to Checkout
            </button>
          </div>

          <div className="w-full lg:w-[50%] p-5 capitalize bg-gray-900 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold capitalize mb-5">
              If you have a promo code, enter it here
            </h1>
            <div className="flex w-full justify-between space-x-2">
              <input
                type="text"
                className="w-3/4 p-3 text-base sm:text-lg rounded-lg bg-gray-200 focus:outline-none"
                placeholder="Enter Promo Code"
              />
              <button className="w-1/4 p-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white text-lg sm:text-xl">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <AppDownload />
      <Footer />
    </>
  );
};

export default Cart;
