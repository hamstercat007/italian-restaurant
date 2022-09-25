//show everything in cart, import Cart Context, and get out cart
//display all the items in the cart in a ul

//create a new component with checkout list, and put the ul. Checkout list.  This is like a parent. 
//has all the listitems 
//Loop through cart - like food menu and item. 

//Move the list of items into a component, 

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
