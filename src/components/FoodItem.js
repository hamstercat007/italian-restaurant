import React from 'react';
import { Flex, Spacer, Image } from '@chakra-ui/react'

export default function FoodItem({ title, image, price }) {
  return (
    <div>
      <Flex >
      <Image src={image} alt={title}/>
      <h3>{title}</h3>
      
      <p>{price}</p>
      </Flex>
    </div>
  );
}
