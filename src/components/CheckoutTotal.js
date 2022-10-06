import {getFoodItemById} from "../models/foodItems.js"
import {useCartContext} from "./context/CartContext.js" 
import Money from "./Money.js";
import {getDiscountCode} from "../models/discountCodes"

//map over the cart, only the id and quantity are in there.
//find the food item by id, and then get the price out of it and multiply by quantity
//Add the prices up using the reducer

//apply the discount code to the cart from useCartcontext, and use getDiscountCode(discountcode) to access discount value. 

function CheckoutTotal() {

  const {cart, discountCode} = useCartContext()

  const calculateTotal = cart.map(cartItem => getFoodItemById(cartItem.id).pricePerServing * cartItem.quantity)

  let summedTotal = calculateTotal.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  if (discountCode) { //get it from db
    const discount = getDiscountCode(discountCode).discount
    summedTotal = summedTotal * discount
  }
 
  //if there is a discount object, then apply discount.  if discountcode? 
  console.log(discountCode)
  return (
    <div>
    Total: <Money number = {summedTotal} /></div>
  )
}

export default CheckoutTotal