import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"

const Cart = () => {

  const {CartItem,food_list,removeFroCart} = useContext(StoreContext)
  return (
    <div className="text-white min-h-[35vh]">Cart</div>
  )
}

export default Cart