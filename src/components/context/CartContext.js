//create Context
import { createContext, useContext, useState } from "react";

//const [basket, setBasket] = useState([])
const CartContext = createContext();

const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getNumberItems = () => cart.length;

  //if item is present in cart identified by the id, just update the quantity,
  //if not there, add it.
  //  if cart.find(element newCartItem.id
  //findIndex returns to you the index of the element. Once you know the index, you'll find the index of the element with that id, and can target it. Tells u if it's there or not.
  //
  const addItemToCart = (newCartItem) => {
    const foundIndex = cart.findIndex(
      (cartItem) => cartItem.id === newCartItem.id
    );
    if (foundIndex >= 0) {
      const newCart = cart;
      newCart[foundIndex].quantity += newCartItem.quantity;
      setCart(newCart);
    } else {
      setCart([...cart, newCartItem]);
    }
  };

  //https://www.w3schools.com/js/js_array_methods.asp#:~:text=Array%20elements%20can%20be%20deleted,()%20or%20shift()%20instead.

  const removeItemInCart = (foodItem) => {
    console.log(cart);
    const newCart = cart.filter((cartItem) => cartItem.id !== foodItem.id );
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, getNumberItems, removeItemInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCartContext, CartContextProvider };

//use Context instead. cart should be a context, it is a state with all the itesm.
//work with black boxes, the basket context, you know how to interact with it,
//but you don't know how it works, you don't need to know it.
//component says - add this to cart, and give it to cart.
//all logic should be in cart context.
