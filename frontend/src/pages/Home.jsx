import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import Header from "../components/Header";
import FoodDisplay from "../components/FoodDisplay";
import Footer from "../components/Footer";
import AppDownload from "../components/AppDownload";

const Home = () => {
  const [Category, setCategory] = useState("All");
  return (
    <div className="text-white">
      <Header />
      <ExploreMenu Category={Category} setCategory={setCategory} />
      <FoodDisplay Category={Category} setCategory={setCategory} />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Home;
