import React from 'react';
import { Flex, Spacer, Image, Box } from '@chakra-ui/react';
import FoodModal from './FoodModal';


export default function FoodItem({ title, image, price, id }) {
  return (
    <div>
      <Flex  bg='gray.300' margin='10' gap='2'>
         <Image src={image} alt={title} boxSize='150px'/>
         <h3>{title}</h3>
         <Spacer />
          <Box p='2'>
          <p>{price}</p>
         
          <FoodModal title={title} price={price} id={id} />
          </Box>

      </Flex>

    </div>
  );
}