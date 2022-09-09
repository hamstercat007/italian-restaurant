import NavBar from "./NavBar";
import foodData from "../data/data.js";
import FoodItem from "./FoodItem";
import { Text } from "@chakra-ui/react";

export default function Menu() {
  return (
    <>
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
