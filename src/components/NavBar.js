import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
      <Link style={{margin:"5px"}} to ="/">Home</Link>
      <Link style={{margin:"5px"}} to ="/menu">Menu</Link>
      <Link style={{margin:"5px"}} to ="/checkout">Checkout</Link>
       </nav>
  </div>;
}

export default NavBar;
