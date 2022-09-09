import React from 'react';
import { Flex, Spacer, Image, Button } from '@chakra-ui/react';


export default function FoodItem({ title, image, price }) {
  return (
    <div>
      <Flex  bg='gray.300' margin='10'>
        <Flex>
      <Image src={image} alt={title} boxSize='150px'/>
      <h3>{title}</h3>
      <Spacer />
      <p>{price}</p>
      </Flex>
    
      <Flex>
        <Button colorScheme='blue'>Order</Button>
        </Flex>
      
      
      </Flex>
    </div>
  );
}
