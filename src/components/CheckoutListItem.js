
import React from 'react'
import {getFoodItemById} from "../models/foodItems.js"
import {useCartContext} from "./context/CartContext.js" 
import {Button} from  "@chakra-ui/react";
import Money from './Money.js';


function CheckoutListItem({cartItem}) {

  const { removeItemInCart } = useCartContext()

  const foodItem = getFoodItemById(cartItem.id)

  const totalPrice = foodItem.pricePerServing * cartItem.quantity
  return (
<li>
  {cartItem.quantity} x {foodItem.title} <Money number = {totalPrice} />{"\u00a0\u00a0"}{"\u00a0\u00a0"}
<Button onClick={() => {removeItemInCart(foodItem)}}>Delete</Button>
</li>
  )
}

export default CheckoutListItem
