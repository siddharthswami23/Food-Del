import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
import PropTypes from "prop-types";

const FoodDisplay = ({ Category, setCategory }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mx-auto max-w-[75vw] py-10 px-3  rounded-lg shadow-lg">
      <h1 className="font-bold text-7xl mb-10">Top dishes near you</h1>
      <div className="flex gap-5 flex-wrap flex-shrink-0">
        {food_list.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

FoodDisplay.propTypes = {
  Category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default FoodDisplay;
