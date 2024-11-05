import { createContext } from "react";
import PropTypes from "prop-types"; 
import { food_list } from "../assets/images/assets";


export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const { children } = props; 
    const contextValue = {
        food_list
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
