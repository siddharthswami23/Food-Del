import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { IoClose } from "react-icons/io5";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";

const Cart = () => {
  const { CartItem, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <>
      <div className="text-white min-h-[35vh]">
        <div className="max-w-[75%] mx-auto">
          <div className="w-full mt-5 grid grid-cols-6 text-xl capitalize font-bold py-5 items-center">
            <h1 className="text-center">Items</h1>
            <h1 className="text-center">Title</h1>
            <h1 className="text-center">Price</h1>
            <h1 className="text-center">Quantity</h1>
            <h1 className="text-center">Total</h1>
            <h1 className="text-center">Remove</h1>
          </div>
          <hr className="bg-gray-400 mt-1" />

          {food_list.map((item, index) => {
            if (CartItem[item._id] > 0) {
              return (
                <div
                  key={index}
                  className="w-full grid grid-cols-6 items-center text-xl capitalize font-bold py-5 border-b-2 border-gray-200 mb-2"
                >
                  <div className="flex justify-center">
                    <img
                      className="h-20 w-20 bg-green-500"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <h1 className="text-center">{item.name}</h1>
                  <h1 className="text-center">$ {item.price}</h1>
                  <h1 className="text-center">{CartItem[item._id]}</h1>
                  <h1 className="text-center">
                    $ {item.price * CartItem[item._id]}
                  </h1>
                  <div className="flex justify-center">
                    <IoClose
                      className="cursor-pointer"
                      style={{ fontSize: "40px", color: "white" }}
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

        <div className="mx-auto max-w-[75%] flex items-center justify-between p-5">
          <div className="w-[25vw]  p-10 capitalize">
            <h1 className="text-5xl font-bold capitalize mb-5">card total</h1>
            <div className="flex w-full justify-between py-5 ">
              <p className="text-3xl">Subtotal</p>
              <p>$ 2</p>
            </div>
            <hr />
            <div className="flex w-full justify-between py-5">
              <p className="text-3xl">Delivery fee</p>
              <p>$ 2</p>
            </div>
            <hr />
            <div className="flex w-full justify-between py-5">
              <p className="text-3xl">Total</p>
              <p>$ 2</p>
            </div>

            <button className="w-[70%] p-3 capitalize text-xl font-bold mt-5 rounded-lg bg-orange-500 hover:bg-orange-600">
              proceed to checkout
            </button>
          </div>

          <div className="w-1/2 p-10 capitalize">
            <h1 className="text-xl font-bold capitalize mb-5">
              If You Have a promo code, Enter It Here
            </h1>

            <div className="flex w-full justify-between">
              <input
                type="text"
                className="w-3/4 p-4 text-xl"
                placeholder="Enter Promo Code"
              />
              <button className="w-1/4 p-2 bg-orange-500 hover:bg-orange-600">
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
