import { useContext } from "react";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalAmount } = useContext(StoreContext);
  return (
    <>
      <div className="text-white w-full min-h-fit p-4 md:p-10 pb-20">
        <p className="text-xl md:text-2xl font-bold text-left ml-[5%] md:ml-[13.5%] py-5">
          Delivery Information
        </p>
        <div className="mx-auto max-w-[90%] md:max-w-[75%] flex flex-col md:flex-row items-start md:items-center text-white justify-between p-4 md:p-5 space-y-5 md:space-y-0 md:space-x-5">
          {/* Form Section */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                required
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                required
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
            <input
              required
              name="email"
              type="text"
              placeholder="Email"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
            <input
              required
              name="street"
              type="text"
              placeholder="Street"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                required
                name="city"
                type="text"
                placeholder="City"
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                required
                name="state"
                type="text"
                placeholder="State"
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                required
                name="zipcode"
                type="text"
                placeholder="Zip Code"
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                required
                name="country"
                type="text"
                placeholder="Country"
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
            <input
              required
              name="phone"
              type="text"
              placeholder="Phone"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>

          {/* Order Summary Section */}
          <div className="w-full md:w-[25vw] p-5 md:p-10 bg-gray-900 rounded-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-5">Card Total</h1>
            <div className="flex w-full justify-between py-2 md:py-5">
              <p className="text-xl md:text-3xl">Subtotal</p>
              <p>$ {getTotalAmount()}</p>
            </div>
            <hr />
            <div className="flex w-full justify-between py-2 md:py-5">
              <p className="text-xl md:text-3xl">Delivery fee</p>
              <p>${getTotalAmount() === 0 ? "0" : "2"}</p>
            </div>
            <hr />
            <div className="flex w-full justify-between py-2 md:py-5">
              <p className="text-xl md:text-3xl">Total</p>
              <p>${getTotalAmount() === 0 ? "0" : getTotalAmount() + 2}</p>
            </div>

            <button
              className="w-full md:w-[70%] p-3 capitalize text-lg md:text-xl font-bold mt-5 rounded-lg bg-orange-500 hover:bg-orange-600"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      <AppDownload />
      <Footer />
    </>
  );
};

export default PlaceOrder;
