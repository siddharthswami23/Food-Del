import PropTypes from "prop-types";
import { menu_list } from "../assets/images/assets";

const ExploreMenu = ({Category,setCategory}) => {
    return (
        <div className="flex flex-col mx-auto max-w-[90vw] md:max-w-[75vw]">
            <h1 className="text-3xl md:text-5xl my-3 md:my-5 text-white font-bold">Explore Our Menu</h1>
            <p className="max-w-full md:max-w-[50%] text-xl md:text-2xl mb-5 md:mb-10 mt-3 md:mt-5 text-white font-semibold tracking-wide">
                Choose from a diverse menu featuring a delectable array of dishes. Our
                mission is to satisfy your cravings and elevate your dining experience,
                one delicious meal at a time.
            </p>
            <div className="explore-menu-list flex items-center gap-4 md:gap-6 text-center mt-3 md:mt-5 w-full h-[20vh] md:h-[25vh] px-3 md:px-7 overflow-x-auto overflow-y-hidden">
                {menu_list.map((item, index) => (
                    <div key={index} className="flex-shrink-0 rounded-full">
                        <img
                        onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                        
                            src={item.menu_image}
                            alt={item.menu_name}
                            className={`w-[20vw] md:w-[10vw] min-w-[60px] md:min-w-[80px] cursor-pointer rounded-full transition-all duration-300 hover:scale-105 ${item.menu_name === Category ? "border-[4px] border-solid border-[#FF8A00] p-1" : ""}`}
                        />
                        <p className="mt-2 md:mt-3 text-[#747474] text-xl md:text-2xl cursor-pointer">
                            {item.menu_name}
                        </p>
                    </div>
                ))}
            </div>
            <hr className="my-3 md:my-5 h-[1px] md:h-[2px] bg-[#e2e2e2] border-none" />
        </div>
    );
};

ExploreMenu.propTypes = {
    Category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
}

export default ExploreMenu;
