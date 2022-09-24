import foodData from "../data/data.js";
import FoodItem from "./FoodItem";
import { Text } from "@chakra-ui/react";


export default function FoodMenu() {
  return (
    <>
      <Text margin='10' fontSize="5xl">Menu</Text>
      {foodData.map((item) => {
        let price="£"+(item.pricePerServing/100)
        return (
          <FoodItem
            title={item.title}
            image={item.image}
            price={price}
            key={item.id}
            id={item.id}
          ></FoodItem>
        );
      })}
    </>
  );
}
