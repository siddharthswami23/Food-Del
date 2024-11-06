import { useContext } from "react";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalAmount } = useContext(StoreContext);
  return (
    <>
      <div className="text-white w-full min-h-fit bg-gray-900 p-10 pb-20">
        <p className="text-2xl font-bold text-center py-5">Delivery Information</p>
        <div className="mx-auto max-w-[75%] flex flex-col md:flex-row items-start md:items-center text-white justify-between p-5 space-y-5 md:space-y-0 md:space-x-5">
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <div className="flex space-x-4">
              <input
                required
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                required
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
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
            <div className="flex space-x-4">
              <input
                required
                name="city"
                type="text"
                placeholder="City"
                className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                required
                name="state"
                type="text"
                placeholder="State"
                className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
            <div className="flex space-x-4">
              <input
                required
                name="zipcode"
                type="text"
                placeholder="Zip Code"
                className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                required
                name="country"
                type="text"
                placeholder="Country"
                className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
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

          <div className=" w-fit  p-10 bg-gray-800 rounded-lg">
            <h1 className="text-xl font-bold mb-5">
              If You Have a Promo Code, Enter It Here
            </h1>

            <div className="flex w-full justify-between space-x-4">
              <input
                type="text"
                className="w-3/4 p-4 text-xl bg-gray-700 border border-gray-600 rounded"
                placeholder="Enter Promo Code"
              />
              <button className="w-1/4 p-2 bg-orange-500 hover:bg-orange-600 rounded">
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

export default PlaceOrder;
