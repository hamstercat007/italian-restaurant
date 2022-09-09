
export default function useCart() {
 return(
  <div>Cart</div>
 )
}

//use Context instead. cart should be a context, it is a state with all the itesm.
//work with black boxes, the basket context, you know how to interact with it, 
//but you don't know how it works, you don't need to know it. 
//component says - add this to cart, and give it to cart.
//all logic should be in cart context.