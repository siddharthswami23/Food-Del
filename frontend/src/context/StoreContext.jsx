import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { food_list } from "../assets/images/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [FoodList, setFoodList] = useState("");
  const { children } = props;
  const url = "http://localhost:4000/";
  const [token, settoken] = useState("");

  const [CartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!CartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in CartItem) {
      if (CartItem[item] > 0) {
        let Iteminfo = FoodList.find((product) => product._id === item);
        totalAmount += Iteminfo.price * CartItem[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "api/food/list");
    setFoodList(response.data.data);
  };

  // console.log(FoodList);

  useEffect(() => {
    async function LoadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        settoken(localStorage.getItem("token"));
      }
    }
    LoadData();
  }, []);

  const contextValue = {
    food_list,
    CartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalAmount,
    url,
    token,
    settoken,
    FoodList,
    fetchFoodList
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
