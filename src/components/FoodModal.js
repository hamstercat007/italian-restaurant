import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import useCart from "./Cart";

import {createRef, useState} from 'react'

export default function FoodModal({ title, price }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [number, setNumber] = useState(1)

  function incrementQuantity() {
    setNumber(number + 1)
  }

  function decrementQuantity() {
    setNumber(number - 1)
  }

  function addItem() {
    let total = price*number
    let item = {name: title, quantity: number, price: total}
    setCart([...cart, item])
  }

  return (
    <>
      <Button onClick={onOpen}>Buy</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <h1>Buy {title} for {price}</h1>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={incrementQuantity}>
              +
            </Button>
            {number}
            <Button onClick={decrementQuantity}>
              -
            </Button>
            <Button onClick={addItem} colorScheme="orange" style={{marginLeft:"10px"}}>Add to Cart</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
