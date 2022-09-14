//create Context
import { createContext, useContext, useState } from "react";

//const [basket, setBasket] = useState([])
const CartContext = createContext()

const useCartContext = () => {
  return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const getNumberItems = () => cart.length
  

const addItemToBasket = (cartItem) => {
  setCart([...cart, cartItem])
}

  return <CartContext.Provider value = {{cart, addItemToBasket, getNumberItems}}>
    {children}
  </CartContext.Provider>
}

export {useCartContext, CartContextProvider}

//use Context instead. cart should be a context, it is a state with all the itesm.
//work with black boxes, the basket context, you know how to interact with it, 
//but you don't know how it works, you don't need to know it. 
//component says - add this to cart, and give it to cart.
//all logic should be in cart context.


