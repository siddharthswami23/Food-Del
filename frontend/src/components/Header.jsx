const Header = () => {
  return (
    <div className="my-10 mx-auto px-4 sm:px-10 md:px-20 py-20 sm:py-32 md:py-44 bg-center bg-cover bg-[url('https://i.pinimg.com/474x/00/ed/39/00ed390bb97eef0ec52bda0665badd65.jpg')] rounded-2xl w-[90vw] md:w-[75vw] h-[50vh] sm:h-[60vh] md:h-[70vh] bg-white">
      <div className="flex flex-col items-start h-full justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
          Order your <br /> favourite food here
        </h1>
        <p className="mt-5 hidden sm:block md:text-xl lg:text-2xl tracking-wide font-semibold w-full md:w-3/4 lg:w-1/2">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our mission
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button className="mt-5 px-6 sm:px-8 md:px-10 pt-3 pb-2 sm:pb-3 border-solid border-[2px] border-orange-500 rounded-full font-bold text-base sm:text-lg md:text-xl bg-white text-black hover:bg-gray-200">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
