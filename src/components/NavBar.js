import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Image, Button, Box } from "@chakra-ui/react";

function NavBar() {
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
            Checkout
          </Link>
          </Flex>
        </Flex>
      </nav>
    </div>
  );
}

export default NavBar;
