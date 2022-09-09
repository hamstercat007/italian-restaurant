import NavBar from './NavBar';
import {useState} from 'react'

export default function Checkout() {
  const [cart, setCart] = useState([])

  return (
    <>
    <NavBar />
    <div>Checkout</div>
    </>
  )
}
