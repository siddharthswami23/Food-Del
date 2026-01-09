import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ Category, setCategory }) => {
  const { food_list, FoodList, fetchFoodList, searchQuery } = useContext(StoreContext);
  const foodArray = FoodList ? Object.values(FoodList) : [];

  return (
    <div className="mx-auto max-w-[75vw] py-10 px-3 rounded-lg shadow-lg">
      <h1 className="font-bold text-7xl mb-10">Top dishes near you</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {foodArray
          .filter((item) => item.category === Category || Category === "All")
          .filter((item) => 
            searchQuery === "" || 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item, index) => (
            <FoodItem key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
