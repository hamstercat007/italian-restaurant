import { useState } from "react";
import NavBar from "./NavBar";
import foodData from "../data/data.js";
import FoodItem from "./FoodItem";
import { Flex, Spacer, Image, Button, Box, Text } from "@chakra-ui/react";

export default function Menu() {
  return (
    <>
      <NavBar />
      <Text margin='10' fontSize="5xl">Menu</Text>
      {foodData.map((e) => {
        return (
          <FoodItem
            title={e.title}
            image={e.image}
            price={e.pricePerServing}
            key={e.id}
          ></FoodItem>
        );
      })}
    </>
  );
}
