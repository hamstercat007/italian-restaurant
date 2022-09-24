
import React from 'react'
import {getFoodItemById} from "../models/foodItems.js"
import {useCartContext} from "./context/CartContext.js" 
import {Button} from  "@chakra-ui/react";


function CheckoutListItem({cartItem, removeItem}) {

  const { removeItemInCart } = useCartContext()


  const foodItem = getFoodItemById(cartItem.id)
  return (
<li>
  {cartItem.quantity} x {foodItem.title} {"£"+(foodItem.pricePerServing * cartItem.quantity)}{"\u00a0\u00a0"}{"\u00a0\u00a0"}
<Button onClick={() => {removeItemInCart(foodItem)}}>Delete</Button>
</li>
  )
}

export default CheckoutListItem
