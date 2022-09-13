import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Image, Button, Box } from "@chakra-ui/react";
import {useCartContext} from "./context/CartContext.js"

function NavBar() {

  const {getNumberItems} = useCartContext()

  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Flex alignItems="center"
        justifyContent="space-between"
        >
          <Image
            
            boxSize="150px"
            objectFit='full'
            src="./logo.png"
          />
          <Flex>
          <Link style={{ margin: "5px" }} to="/">
            Home
          </Link>
          <Link style={{ margin: "5px" }} to="/menu">
            Menu
          </Link>
          <Link style={{ margin: "5px" }} to="/checkout">
            Checkout {getNumberItems()}
          </Link>
          </Flex>
        </Flex>
      </nav>
    </div>
  );
}

export default NavBar;
