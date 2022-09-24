import {useCartContext} from "../components/context/CartContext.js"
import CheckoutListItem from "./CheckoutListItem.js"

function CheckoutList() {
  const {cart, removeItemInCart} = useCartContext()

const removeItem = (foodItem) => {
  removeItemInCart(foodItem)
}

  return (
    <ul>
    {cart.map(cartItem => <CheckoutListItem cartItem = {cartItem} 
          key={cartItem.id}
          removeItem = {removeItem}
    />)}
    </ul>
  )
}

export default CheckoutList