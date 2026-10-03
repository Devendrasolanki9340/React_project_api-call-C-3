import { useContext } from "react"
import CartCard from "../Components/CartCard"
import { MyStore } from "../Context/MyContext"

const CartScreen = () => {
  const { cartItems } = useContext(MyStore)

  return (
    <div className="h-95 text-6xl grid grid-cols-4 gap-4">
      {cartItems.map((elem) => {
        return <CartCard key={elem.id} product={elem} />
      })}
    </div>
  )
}

export default CartScreen
