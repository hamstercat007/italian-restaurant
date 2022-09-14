//show everything in cart, import Cart Context, and get out cart
//display all the items in the cart in a ul

//create a new component with checkout list, and put the ul. Checkout list.  This is like a parent. 
//has all the listitems 
//Loop through cart - like food menu and item. 
import {useCartContext} from "../components/context/CartContext.js"
import {getFoodItemById} from "../models/foodItems.js"

export default function Checkout() {
  const {cart} = useCartContext()
  console.log(cart)
  return (
    <div>
    <h2>Checkout</h2>
    <ul>{cart.map(cartItem => <li>{cartItem.quantity} x {getFoodItemById(cartItem.id).title}</li>)}
    </ul></div>
  )
}
