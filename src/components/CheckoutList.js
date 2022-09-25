import {useCartContext} from "../components/context/CartContext.js"
import CheckoutListItem from "./CheckoutListItem.js"
import {getDiscountCode} from "../models/discountCodes"

function CheckoutList() {
  const {cart, removeItemInCart, discountCode} = useCartContext()

  return (
    <ul>
    {cart.map(cartItem => <CheckoutListItem cartItem = {cartItem} 
          key={cartItem.id}
          removeItem = {removeItemInCart}
    />)}
      {discountCode && <li style={{color: "green"}}>Discount code: {discountCode.toUpperCase()}, {getDiscountCode(discountCode).message}</li>}
    </ul>
  )
}

export default CheckoutList