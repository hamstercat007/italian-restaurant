import {getFoodItemById} from "../models/foodItems.js"
import {useCartContext} from "./context/CartContext.js" 
import Money from "./Money.js";

//map over the cart, only the id and quantity are in there.
//find the food item by id, and then get the price out of it and multiply by quantity
//Add the prices up using the reducer

//apply the discount code to the cart - in checkout context

function CheckoutTotal() {

  const {cart} = useCartContext()

  const calculateTotal = cart.map(cartItem => getFoodItemById(cartItem.id).pricePerServing * cartItem.quantity)

  const summedTotal = calculateTotal.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  return (
    <div>
    Total: <Money number = {summedTotal} /></div>
  )
}

export default CheckoutTotal