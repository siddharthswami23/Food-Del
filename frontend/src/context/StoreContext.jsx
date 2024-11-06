import { createContext, useState } from "react";
import PropTypes from "prop-types"; 
import { food_list } from "../assets/images/assets";


export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const { children } = props; 

    const [CartItem, setCartItem] = useState({});

    const addToCart = (itemId)=>{
        if(!CartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {
        food_list,
        CartItem,
        setCartItem,
        addToCart,
        removeFromCart,
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
