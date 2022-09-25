import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import {useCartContext} from "./context/CartContext.js"
import Money from "./Money.js";

//add quanity and id, get price from the database with the id, as price can be manipulated. 

export default function FoodModal({ title, price, id }) {
  const { addItemToCart } = useCartContext()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = useState(1);

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    setQuantity(quantity - 1);
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
            <h1>
              Buy {title} for <Money number = {price} />
            </h1>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={incrementQuantity}>+</Button>
            {quantity}
            <Button onClick={decrementQuantity}>-</Button>
            <Button
              colorScheme="orange"
              style={{ marginLeft: "10px" }}
              onClick = {
                () => {
                  addItemToCart({ quantity, id})
                  onClose()
                }
              }
            >
              Add to Cart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// addItemToBasket({ quantity: quantity, id: id})