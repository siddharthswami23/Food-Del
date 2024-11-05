import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import { useEffect } from "react";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on("scroll", () => {});

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
