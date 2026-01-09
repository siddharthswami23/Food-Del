import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { food_list } from "../assets/images/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [FoodList, setFoodList] = useState([]);
  const { children } = props;
  const url = "https://food-del-dw1h.onrender.com/";
  const [token, settoken] = useState("");
  const [userid, setuserid] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [CartItem, setCartItem] = useState({});

  const addToCart = async (itemId) => {
    if (!CartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios
        .post(
          url + "api/cart/add",
          { userid: userid.toString(), itemId },
          { headers: { token } }
        )
        .then((response) => {
          if (!response.data.success) {
            console.error("Failed to add item to cart:", response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
        });
    }
  };

  const removeFromCart = async (itemId) => {
    if (CartItem[itemId] > 1) {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      const updatedCart = { ...CartItem };
      delete updatedCart[itemId];
      setCartItem(updatedCart);
    }

    if (token) {
      await axios
        .post(
          url + "api/cart/remove",
          { userid, itemId },
          { headers: { token } }
        )
        .then((response) => {
          if (!response.data.success) {
            console.error(
              "Failed to remove item from cart:",
              response.data.message
            );
          }
        })
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
    }
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
    try {
      const response = await axios.get(url + "api/food/list");
      setFoodList(response.data.data);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  const loadCartData = async () => {
    if (!userid || !token) return;

    try {
      const response = await axios.post(
        url + "api/cart/get",
        { userid: userid.toString() },
        { headers: { token } }
      );

      // console.log(response.data);
      if (response.data.success) {
        setCartItem(response.data.cartData);
      } else {
        console.error("Failed to load cart data");
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  useEffect(() => {
    async function LoadData() {
      await fetchFoodList();

      const storedToken = localStorage.getItem("token");
      const storedUserid = localStorage.getItem("userid");

      if (storedToken && storedUserid) {
        settoken(storedToken);
        setuserid(storedUserid);
      }
    }

    LoadData();
  }, []);

  useEffect(() => {
    loadCartData();
  }, [userid, token]);

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
    fetchFoodList,
    userid,
    setuserid,
    searchQuery,
    setSearchQuery,
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
