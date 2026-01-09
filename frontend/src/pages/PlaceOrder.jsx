import { useContext, useState } from "react";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import { StoreContext } from "../context/StoreContext";
import CustomLoading from "../components/CustomLoading";
import axios from "axios";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const Navigate = useNavigate();
  const { userid, url, getTotalAmount } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCart = async (userid) => {
    try {
      const response = await axios.post(`${url}api/cart/clear`, {
        userid: userid,
      });
      if (!response.data.success) {
        cconsole.error("Failed to clear cart.");
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const handlePayment = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await axios.post(`${url}api/order/create`, {
        userId: userid,
        items: [],
        address: formData,
        amount: getTotalAmount(),
      });

      if (response.data.success) {
        await handleCart(userid);
      }

      toast.success("Order placed successfully");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomLoading loading={loading} />
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white w-full max-w-md rounded shadow-lg p-6 relative">
            <button
              onClick={() => {
                setIsModalOpen(false);
                Navigate("/");
              }}
              className="absolute top-2 right-2 text-xl text-gray-600"
            >
              <IoMdClose />
            </button>
            <h2 className="text-xl font-semibold mb-4">Thank You</h2>
            <div className="text-sm text-gray-700">
              Your order is being delivered.
            </div>
          </div>
        </div>
      )}

      <div className="text-white w-full min-h-fit p-4 md:p-10 pb-20">
        <p className="text-xl md:text-2xl font-bold text-left ml-[5%] md:ml-[13.5%] py-5">
          Delivery Information
        </p>
        <div className="mx-auto max-w-[90%] md:max-w-[75%] flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 space-y-5 md:space-y-0 md:space-x-5">
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
            <input
              name="street"
              type="text"
              placeholder="Street"
              required
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                name="city"
                type="text"
                placeholder="City"
                required
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                name="state"
                type="text"
                placeholder="State"
                required
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                name="zipcode"
                type="text"
                placeholder="Zip Code"
                required
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                name="country"
                type="text"
                placeholder="Country"
                required
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              required
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>

          <div className="w-full md:w-[25vw] p-5 md:p-10 bg-gray-900 rounded-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-5">Cart Total</h1>
            <div className="flex justify-between py-2 md:py-5">
              <p className="text-xl md:text-3xl">Subtotal</p>
              <p>$ {getTotalAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-2 md:py-5">
              <p className="text-xl md:text-3xl">Delivery fee</p>
              <p>${getTotalAmount() === 0 ? "0" : "2"}</p>
            </div>
            <hr />
            <div className="flex justify-between py-2 md:py-5">
              <p className="text-xl md:text-3xl">Total</p>
              <p>${getTotalAmount() === 0 ? "0" : getTotalAmount() + 2}</p>
            </div>
            <button
              onClick={handlePayment}
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
