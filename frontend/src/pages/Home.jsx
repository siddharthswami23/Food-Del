import { useState } from "react"
import ExploreMenu from "../components/ExploreMenu"
import Header from "../components/Header"

const Home = () => {
    const [Category, setCategory] = useState("All")
  return (
    <div className="text-white w-full">
        <Header />
        <ExploreMenu Category={Category} setCategory={setCategory} />
    </div>
  )
}

export default Home