//show everything in cart, import Cart Context, and get out cart
//display all the items in the cart in a ul

import CheckoutList from "./CheckoutList.js"
import CheckoutTotal from "./CheckoutTotal.js"
import Discount from "./Discount.js"

export default function Checkout() {

  return (
    <div>
    <h2>Checkout</h2>
    <CheckoutList/>
    <Discount />
    <CheckoutTotal />
</div>
  )
}
