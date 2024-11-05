const Header = () => {
  return (
    <div className="my-10 mx-auto px-20 py-44 bg-center bg-cover bg-[url('https://food-del-frontend-fx0q.onrender.com/header_img.png')] rounded-2xl w-[75vw] h-[70vh] bg-white">
      <h1 className="text-8xl font-bold leading-tight">Order your <br /> favourite food here</h1>
      <p className="mt-5 text-xl tracking-wide font-semibold w-1/2">
        Choose From a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <button className="mt-10 px-10 py-4 border-solid border-[2px] flex items-center justify-center border-orange-500 rounded-3xl font-bold text-xl bg-white text-black hover:bg-orange-700 hover:text-white transition-colors duration-300">View Menu</button>
    </div>
  );
};

export default Header;
